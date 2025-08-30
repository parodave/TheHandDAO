import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/getDictionary";
import { getDictionary, t } from "@/lib/i18n/getDictionary";

export default async function Hero({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  return (
    <section className="pt-8 md:pt-12">
      <div className="relative border border-neutral-200">
        <Image src="/placeholders/hand-hero.jpg" alt="The Hand" width={2400} height={1400} className="w-full h-auto object-cover" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-semibold mt-10 mb-6">{t(dict,"hero.title")}</h1>
        <div className="flex gap-3">
          <Link href={`/${locale}/dashboard`} className="inline-flex h-10 px-6 border border-neutral-900 bg-white text-black hover:bg-black hover:text-white transition items-center">{t(dict,"cta.join")}</Link>
          <Link href={`/${locale}/about`} className="inline-flex h-10 px-6 border border-neutral-900 bg-white text-black hover:bg-black hover:text-white transition items-center">{t(dict,"cta.about")}</Link>
        </div>
      </div>
    </section>
  );
}

