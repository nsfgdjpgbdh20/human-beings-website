import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://humanbeings.co.jp';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/thanks', // Disallow thanks page from crawling
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
