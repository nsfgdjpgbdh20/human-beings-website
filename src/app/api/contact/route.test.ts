// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';

// Resendへの実送信は行わず、送信内容と分岐だけを確かめる
const { mockSend } = vi.hoisted(() => ({ mockSend: vi.fn() }));

vi.mock('resend', () => {
  const MockResend = function (this: { emails: { send: typeof mockSend } }) {
    this.emails = { send: mockSend };
  };
  return { Resend: MockResend };
});

import { POST } from './route';

const VALID = {
  name: '山田太郎',
  email: 'yamada@example.co.jp',
  subject: 'AI社員くんについての相談',
  message: '週次レポートを任せたい',
};

const post = (body: unknown) =>
  new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

describe('POST /api/contact', () => {
  beforeEach(() => {
    mockSend.mockReset();
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it('必須項目が欠けていれば400', async () => {
    const res = await POST(post({ ...VALID, subject: '  ' }));
    expect(res.status).toBe(400);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('メールアドレスの形式が不正なら400', async () => {
    const res = await POST(post({ ...VALID, email: 'invalid' }));
    expect(res.status).toBe(400);
  });

  it('APIキー未設定なら送信せず200（ローカル用のフォールバック）', async () => {
    vi.stubEnv('RESEND_API_KEY', '');
    const res = await POST(post(VALID));
    expect(res.status).toBe(200);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('APIキー設定時はResendで送り、件名の改行を除き本文をエスケープする', async () => {
    vi.stubEnv('RESEND_API_KEY', 'test-key');
    vi.stubEnv('CONTACT_TO_EMAIL', 'inbox@example.com');
    mockSend.mockResolvedValue({ error: null });

    const res = await POST(post({ ...VALID, subject: '件名\r\nBcc: x@example.com', message: '<b>太字</b>' }));

    expect(res.status).toBe(200);
    expect(mockSend).toHaveBeenCalledTimes(1);
    const payload = mockSend.mock.calls[0][0];
    expect(payload.to).toEqual(['inbox@example.com']);
    expect(payload.replyTo).toBe(VALID.email);
    expect(payload.subject).toBe('お問い合わせ: 件名 Bcc: x@example.com');
    expect(payload.html).toContain('&lt;b&gt;太字&lt;/b&gt;');
  });

  it('Resendがエラーを返したら500', async () => {
    vi.stubEnv('RESEND_API_KEY', 'test-key');
    mockSend.mockResolvedValue({ error: { message: 'failed' } });

    const res = await POST(post(VALID));

    expect(res.status).toBe(500);
  });
});
