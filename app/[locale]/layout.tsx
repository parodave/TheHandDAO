import { getLocaleFromPathname, isValidLocale } from '@/app/i18n/config';
import { redirect } from 'next/navigation';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!isValidLocale(params.locale)) {
    redirect('/fr/');
  }

  return children;
}