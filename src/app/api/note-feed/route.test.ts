// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';

// RSS取得部分だけを差し替え、APIルートの変換・検証ロジックを確かめる。
// 旧 src/lib/note.ts（e5a43f5で削除）のテストを、現在使っている実装へ移したもの
const { mockParseURL } = vi.hoisted(() => ({ mockParseURL: vi.fn() }));

vi.mock('rss-parser', () => {
  const MockParser = function (this: { parseURL: typeof mockParseURL }) {
    this.parseURL = mockParseURL;
  };
  return { default: MockParser };
});

import { GET } from './route';

const FEED_URL = 'https://note.com/example/rss';

const request = (params: Record<string, string>) => {
  const url = new URL('http://localhost/api/note-feed');
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return new NextRequest(url);
};

describe('GET /api/note-feed', () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    mockParseURL.mockReset();
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  describe('入力の検証', () => {
    it('urlがなければ400を返す', async () => {
      const res = await GET(request({}));
      expect(res.status).toBe(400);
      expect(mockParseURL).not.toHaveBeenCalled();
    });

    it('note.com以外のURLは400を返す', async () => {
      const res = await GET(request({ url: 'https://example.com/rss' }));
      expect(res.status).toBe(400);
      expect(await res.json()).toEqual({ error: 'Only note.com feeds are allowed' });
      expect(mockParseURL).not.toHaveBeenCalled();
    });

    it('URLとして解釈できない値は400を返す', async () => {
      const res = await GET(request({ url: 'not a url' }));
      expect(res.status).toBe(400);
      expect(await res.json()).toEqual({ error: 'Invalid URL' });
    });
  });

  describe('記事の変換', () => {
    it('取得した記事を整形して返す', async () => {
      mockParseURL.mockResolvedValue({
        items: [
          {
            title: 'Test Article 1',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
            contentSnippet: 'snippet',
            thumbnail: 'https://example.com/image1.jpg',
          },
        ],
      });

      const res = await GET(request({ url: FEED_URL }));

      expect(res.status).toBe(200);
      expect(mockParseURL).toHaveBeenCalledWith(FEED_URL);
      expect(await res.json()).toEqual({
        articles: [
          {
            title: 'Test Article 1',
            link: 'https://note.com/example/n/abc123',
            pubDate: '2024-01-15T10:00:00Z',
            contentSnippet: 'snippet',
            thumbnail: 'https://example.com/image1.jpg',
          },
        ],
      });
    });

    it('limitの既定値は3件', async () => {
      mockParseURL.mockResolvedValue({
        items: [1, 2, 3, 4, 5].map((n) => ({ title: `Article ${n}`, link: `https://note.com/${n}` })),
      });

      const { articles } = await (await GET(request({ url: FEED_URL }))).json();

      expect(articles.map((a: { title: string }) => a.title)).toEqual(['Article 1', 'Article 2', 'Article 3']);
    });

    it('limitを指定できる', async () => {
      mockParseURL.mockResolvedValue({
        items: [1, 2, 3].map((n) => ({ title: `Article ${n}`, link: `https://note.com/${n}` })),
      });

      const { articles } = await (await GET(request({ url: FEED_URL, limit: '2' }))).json();

      expect(articles).toHaveLength(2);
    });

    it('欠けた項目は既定値で補う', async () => {
      mockParseURL.mockResolvedValue({ items: [{}] });

      const { articles } = await (await GET(request({ url: FEED_URL }))).json();

      expect(articles[0]).toEqual({ title: '無題', link: '#', pubDate: '', contentSnippet: '', thumbnail: '' });
    });
  });

  describe('サムネイルの取り出し', () => {
    it('thumbnailがなければ画像のenclosureを使う', async () => {
      mockParseURL.mockResolvedValue({
        items: [{ title: 'A', enclosure: { url: 'https://example.com/enclosure.jpg', type: 'image/jpeg' } }],
      });

      const { articles } = await (await GET(request({ url: FEED_URL }))).json();

      expect(articles[0].thumbnail).toBe('https://example.com/enclosure.jpg');
    });

    it('thumbnailをenclosureより優先する', async () => {
      mockParseURL.mockResolvedValue({
        items: [
          {
            title: 'A',
            thumbnail: 'https://example.com/thumbnail.jpg',
            enclosure: { url: 'https://example.com/enclosure.jpg', type: 'image/jpeg' },
          },
        ],
      });

      const { articles } = await (await GET(request({ url: FEED_URL }))).json();

      expect(articles[0].thumbnail).toBe('https://example.com/thumbnail.jpg');
    });

    it('画像以外のenclosureは使わない', async () => {
      mockParseURL.mockResolvedValue({
        items: [{ title: 'A', enclosure: { url: 'https://example.com/audio.mp3', type: 'audio/mpeg' } }],
      });

      const { articles } = await (await GET(request({ url: FEED_URL }))).json();

      expect(articles[0].thumbnail).toBe('');
    });
  });

  it('取得に失敗したら500と空の記事一覧を返す', async () => {
    mockParseURL.mockRejectedValue(new Error('Network error'));

    const res = await GET(request({ url: FEED_URL }));

    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: 'Failed to fetch RSS feed', articles: [] });
    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});
