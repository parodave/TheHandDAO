import Link from "next/link";
import type { Locale } from "@/lib/i18n/getDictionary";
import { getDictionary, t } from "@/lib/i18n/getDictionary";

export default async function About({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const WA = "https://wa.me/<TON_NUMERO>?text=Hello%20The%20Hand";
  const MAIL = "mailto:contact@the-hand.dao?subject=Hello";
  return (
    <main className="min-h-screen p-6 md:p-12 space-y-8">
      <h1 className="text-5xl font-semibold">{t(dict,"about.title")}</h1>

      <section className="space-y-2">
        <h2 className="uppercase tracking-wide text-sm">Livre blanc</h2>
        <p className="text-neutral-600">Version initiale à venir. Un PDF pourra être publié ici.</p>
        <span className="text-sm underline cursor-not-allowed">Télécharger (bientôt)</span>
      </section>

      <section className="space-y-3">
        <h2 className="uppercase tracking-wide text-sm">Contact</h2>
        <div className="flex gap-3">
          <Link href={WA} className="inline-flex h-10 px-6 border border-neutral-900 items-center">WhatsApp</Link>
          <Link href={MAIL} className="inline-flex h-10 px-6 border border-neutral-900 items-center">Email</Link>
        </div>
        <p className="text-neutral-500 text-sm">Support communautaire sur Telegram bientôt.</p>
      </section>

      <section className="space-y-2">
        <h2 className="uppercase tracking-wide text-sm">FAQ</h2>
        <details className="border p-3"><summary>Comment devenir membre ?</summary><p className="mt-2 text-sm">Connectez un wallet puis rejoignez depuis le Dashboard.</p></details>
        <details className="border p-3"><summary>Comment se passent les distributions ?</summary><p className="mt-2 text-sm">Selon la trésorerie des entreprises, mensuellement.</p></details>
        <details className="border p-3"><summary>Quelles chaînes et wallets ?</summary><p className="mt-2 text-sm">Base / Base Sepolia avec RainbowKit.</p></details>
      </section>

      <section className="space-y-2">
        <h2 className="uppercase tracking-wide text-sm">Mentions légales & confidentialité</h2>
        <details className="border p-3">
          <summary>Afficher les mentions légales</summary>
          <div className="mt-2 text-sm space-y-2">
            <p><b>Éditeur :</b> The Hand DAO. Contact: contact@the-hand.dao</p>
            <p><b>Hébergement :</b> Fournisseur cloud / région UE.</p>
            <p><b>RGPD :</b> Droit d’accès et de suppression des données. Écrire à l’adresse ci-dessus.</p>
            <p><b>Cookies :</b> Voir les pages <Link href={`/${params.locale}/privacy`} className="underline">/privacy</Link> et <Link href={`/${params.locale}/cookies`} className="underline">/cookies</Link>.</p>
          </div>
        </details>
      </section>
    </main>
  );
}
