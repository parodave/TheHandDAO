import { MetadataRoute } from 'next';
import { locales } from './i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kr-thehand.com';
  
  const routes = [
    '',
    '/dao',
    '/contact',
    '/legal',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemap;
}