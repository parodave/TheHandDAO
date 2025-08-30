import type { Locale } from "@/lib/i18n/getDictionary";
export default function Roadmap({ locale }: { locale: Locale }) {
  const isFr = locale === "fr";
  return (
    <section className="max-w-6xl mx-auto px-4 mt-16 border border-neutral-200 p-6">
      <div className="text-sm uppercase tracking-wide mb-2">{isFr ? "Roadmap" : "Roadmap"}</div>
      <p className="text-neutral-600">{isFr ? "Phase 1: We will build. Une roadmap externe sera intégrée plus tard." : "Phase 1: We will build. An external roadmap will be integrated later."}</p>
    </section>
  );
}
