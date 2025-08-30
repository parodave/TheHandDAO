// Server Component (pas de "use client")
import Link from "next/link";
import LangSwitcher from "./LangSwitcher";

export default function Navbar({ dict, locale }: { dict: any; locale: "fr"|"en" }) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          <Link href={`/${locale}`} className="font-medium tracking-wide">{dict.nav.brand}</Link>
          <Link href={`/${locale}/dashboard`} className="hover:underline">{dict.nav.dashboard}</Link>
          <Link href={`/${locale}/about`} className="hover:underline">{dict.nav.about}</Link>
        </nav>
        <div className="flex items-center gap-6">
          <Link href={`/${locale}/dashboard`} className="inline-flex h-10 px-6 border border-neutral-900 bg-white text-black hover:bg-black hover:text-white transition items-center">{dict.nav.join}</Link>
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}
