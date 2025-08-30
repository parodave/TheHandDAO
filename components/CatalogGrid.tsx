import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/getDictionary";
import { companies } from "@/lib/data/companies";
import { getDictionary, t } from "@/lib/i18n/getDictionary";

export default async function CatalogGrid({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const isFr = locale === "fr";
  return (
    <section className="mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="uppercase tracking-wide text-sm mb-4">{t(dict,"catalog.title", isFr ? "ENTREPRISES" : "COMPANIES")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((c) => (
            <Link
              key={c.id}
              href={`/${locale}/companies/${c.id}`}
              className="group block border border-neutral-200 bg-white"
            >
              <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={c.image}
                  alt={isFr ? c.name_fr : c.name_en}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-2 text-sm">
                <span className="text-neutral-500">{c.code}</span>
                <span className="font-medium">{isFr ? c.name_fr : c.name_en}</span>
              </div>
              {c.status === "coming" && (
                <div className="px-4 pb-3 text-neutral-400 text-sm">{t(dict,"catalog.coming", isFr ? "À venir" : "Coming soon")}</div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
