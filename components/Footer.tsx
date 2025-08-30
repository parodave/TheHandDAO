// Server Component (pas de "use client")
import Link from "next/link";

export default function Footer({ dict, locale }: { dict: any; locale: "fr"|"en" }) {
  return (
    <footer className="border-t border-neutral-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between text-sm">
        <div>{dict.footer.copyright}</div>
        <nav className="flex items-center gap-6">
          <Link href={`/${locale}/dashboard`} className="hover:underline">{dict.nav.dashboard}</Link>
          <Link href={`/${locale}/about`} className="hover:underline">{dict.nav.about}</Link>
        </nav>
      </div>
    </footer>
  );
}
