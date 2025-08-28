import Link from 'next/link';
import { Container } from './ui/Container';
import { Locale } from '@/app/i18n/config';
import { Dictionary } from '@/app/i18n/types';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black bg-white mt-auto">
      <Container>
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-label">
              © {currentYear} {dict.footer.copyright}
            </p>
            
            <div className="flex items-center space-x-6">
              <Link
                href={`/${locale}/legal/`}
                className="text-label border-b-hover focus:outline-black focus:outline-1"
              >
                {dict.nav.legal}
              </Link>
              <Link
                href={`/${locale}/contact/`}
                className="text-label border-b-hover focus:outline-black focus:outline-1"
              >
                {dict.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}