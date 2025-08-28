import type { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  locale?: string;
}

export function generateSEO({
  title = 'KR / THE HAND',
  description = 'Une nouvelle approche de la création digitale et de l\'innovation.',
  image = '/og/default-og.png',
  url = 'https://kr-thehand.com',
  locale = 'fr',
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords: ['digital', 'innovation', 'création', 'technologie', 'DAO'],
    authors: [{ name: 'KR / THE HAND' }],
    creator: 'KR / THE HAND',
    publisher: 'KR / THE HAND',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
      languages: {
        fr: `${url}/fr/`,
        en: `${url}/en/`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'KR / THE HAND',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}