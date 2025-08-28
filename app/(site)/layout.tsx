import { Inter, Space_Mono } from 'next/font/google';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { SkipToContent } from '@/components/SkipToContent';
import { getLocaleFromPathname } from '@/app/i18n/config';
import { getDictionary } from '@/app/i18n';
import { generateSEO } from '@/lib/seo';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  return generateSEO({
    title: 'KR / THE HAND',
    description: 'Une nouvelle approche de la création digitale et de l\'innovation.',
  });
}

export default function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const locale = getLocaleFromPathname(`/${params.locale || 'fr'}`);
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <SkipToContent />
        <NavBar locale={locale} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}