import "../globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary, type Locale } from "@/lib/i18n/getDictionary";
export const dynamic = "force-static";
export async function generateStaticParams() { return [{locale:"fr"},{locale:"en"}]; }
export default async function RootLayout({ children, params }: { children: ReactNode; params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return (
    <html lang={params.locale}>
      <body className="bg-white text-black">
        <Navbar dict={dict} locale={params.locale} />
        {children}
        <Footer dict={dict} locale={params.locale} />
      </body>
    </html>
  );
}
