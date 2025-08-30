import Link from "next/link";
import type { Locale } from "@/lib/i18n/getDictionary";
import { getDictionary, t } from "@/lib/i18n/getDictionary";
import Roadmap from "@/components/Roadmap";
import CatalogGrid from "@/components/CatalogGrid";

export default async function Home({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return (
    <main className="min-h-screen p-6 md:p-12">
      {/* HERO TEXTE SEUL */}
      <h1 className="text-5xl md:text-6xl font-semibold mb-6">{t(dict,"hero.title")}</h1>
      <div className="flex gap-3 mb-12">
        <Link prefetch href={`/${params.locale}/dashboard`} role="button"
          className="inline-flex h-10 px-6 border border-neutral-900 hover:bg-black hover:text-white transition items-center">
          {t(dict,"cta.join")}
        </Link>
        <Link prefetch href={`/${params.locale}/about`} role="button"
          className="inline-flex h-10 px-6 border border-neutral-900 hover:bg-black hover:text-white transition items-center">
          {t(dict,"cta.about")}
        </Link>
      </div>

      <Roadmap locale={params.locale} />
      {/* @ts-expect-error Server Component */}
      <CatalogGrid locale={params.locale} />
    </main>
  );
}
