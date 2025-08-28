'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, locales } from '@/app/i18n/config';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const getLocalizedPath = (locale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    
    // Remove current locale if present
    if (segments[0] === currentLocale) {
      segments.shift();
    }
    
    // Add new locale
    return `/${locale}/${segments.join('/')}/`.replace(/\/+/g, '/');
  };

  return (
    <div className="flex items-center border border-black">
      {locales.map((locale, index) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={`px-3 py-1 text-label transition-colors focus:outline-black focus:outline-1 ${
            currentLocale === locale
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-black hover:text-white'
          } ${index > 0 ? 'border-l border-black' : ''}`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}