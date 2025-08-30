export default function Page(){
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      <section>
        <h1 className="text-4xl font-semibold mb-4">À propos</h1>
        <p className="text-[#6B6B6B]">Vision, principes et gouvernance de The Hand.</p>
      </section>

      <section>
        <h2 className="text-base uppercase tracking-wide mb-3">Livre blanc</h2>
        <p className="text-[#6B6B6B] mb-3">Version initiale à venir. Un PDF pourra être publié ici.</p>
        <a href="/whitepaper.pdf" className="underline">Télécharger (bientôt)</a>
      </section>

      <section>
        <h2 className="text-base uppercase tracking-wide mb-3">Contact</h2>
        <div className="flex gap-4">
          <a className="inline-flex h-10 px-6 border border-black hover:bg-black hover:text-white" href="https://wa.me/0000000000?text=Hello%20The%20Hand">WhatsApp</a>
          <a className="inline-flex h-10 px-6 border border-black hover:bg-black hover:text-white" href="mailto:contact@the-hand.dao?subject=Hello">Email</a>
        </div>
      </section>

      <section>
        <h2 className="text-base uppercase tracking-wide mb-3">FAQ</h2>
        <div className="space-y-2">
          <details className="border border-[#E6E6E6] p-4">
            <summary className="cursor-pointer">Comment devenir membre ?</summary>
            <p className="mt-2 text-[#6B6B6B]">Connectez un wallet puis effectuez la demande de join dans le Dashboard. Validation manuelle au début.</p>
          </details>
          <details className="border border-[#E6E6E6] p-4">
            <summary className="cursor-pointer">Quels bénéfices pour les membres ?</summary>
            <p className="mt-2 text-[#6B6B6B]">Accès aux distributions liées aux entreprises, droit de vote, accès aux informations internes.</p>
          </details>
          <details className="border border-[#E6E6E6] p-4">
            <summary className="cursor-pointer">Comment sont gérées les entreprises ?</summary>
            <p className="mt-2 text-[#6B6B6B]">Chaque entité a un suivi séparé. Les décisions clés passent par des propositions et votes.</p>
          </details>
          <details className="border border-[#E6E6E6] p-4">
            <summary className="cursor-pointer">Le token est-il adossé au BTC ?</summary>
            <p className="mt-2 text-[#6B6B6B]">Oui, l’objectif est de collateraliser une partie de la trésorerie en BTC. Détails dans le livre blanc.</p>
          </details>
          <details className="border border-[#E6E6E6] p-4">
            <summary className="cursor-pointer">Comment se passent les distributions ?</summary>
            <p className="mt-2 text-[#6B6B6B]">Périodiquement, selon les résultats des entreprises. Les montants sont publiés sur le Dashboard.</p>
          </details>
          <details className="border border-[#E6E6E6] p-4">
            <summary className="cursor-pointer">Quelles sont les commissions ?</summary>
            <p className="mt-2 text-[#6B6B6B]">Frais opérationnels minimaux, publiés de façon transparente. Barème à préciser.</p>
          </details>
          <details className="border border-[#E6E6E6] p-4">
            <summary className="cursor-pointer">Quelles chaînes et wallets supportés ?</summary>
            <p className="mt-2 text-[#6B6B6B]">Mainnet et testnet via RainbowKit. Liste exacte documentée au lancement.</p>
          </details>
          <details className="border border-[#E6E6E6] p-4">
            <summary className="cursor-pointer">Comment signaler un problème ?</summary>
            <p className="mt-2 text-[#6B6B6B]">Via WhatsApp/Email. Un canal communautaire Telegram sera ajouté.</p>
          </details>
        </div>
      </section>

      <section>
        <h2 className="text-base uppercase tracking-wide mb-3">Mentions légales & Confidentialité</h2>
        <p className="text-[#6B6B6B]">Templates RGPD minimaux. Voir /privacy et /cookies si requis.</p>
      </section>
    </main>
  )
}
