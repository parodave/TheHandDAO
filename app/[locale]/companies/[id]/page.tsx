import { notFound } from "next/navigation";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/getDictionary";
import { companies } from "@/lib/data/companies";

export default function CompanyPage({ params }: { params: { locale: Locale; id: string } }) {
  const isFr = params.locale === "fr";
  const c = companies.find(x => x.id === params.id);
  if (!c) return notFound();
  return (
    <main className="min-h-screen p-6 md:p-12 space-y-6">
      <header className="space-y-2">
        <div className="text-sm uppercase tracking-wide text-neutral-500">{c.code}</div>
        <h1 className="text-4xl font-semibold">{isFr ? c.name_fr : c.name_en}</h1>
      </header>
      <div className="relative aspect-[4/3] border">
        <Image src={c.image} alt={isFr ? c.name_fr : c.name_en} fill className="object-cover grayscale" />
      </div>
      <section className="prose max-w-none">
        <p>{isFr ? c.summary_fr : c.summary_en}</p>
      </section>
    </main>
  );
}

