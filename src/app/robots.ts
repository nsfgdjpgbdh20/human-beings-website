import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/thanks', // 送信完了ページは検索対象にしない
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
