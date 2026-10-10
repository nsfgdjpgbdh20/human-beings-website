import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/ai-shain`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/n8n`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
