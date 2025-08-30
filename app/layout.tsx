import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Hand — DAO',
  description: 'Minimalist black & white UI, community governance.',
  openGraph: {
    title: 'The Hand — DAO',
    description: 'Pure black on white.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
