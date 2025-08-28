import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import CatalogGrid from '@/components/CatalogGrid';
import StatCard from '@/components/StatCard';
import ActionsPanel from '@/components/ActionsPanel';
import TableMinimal from '@/components/TableMinimal';

const HeroHand = dynamic(() => import('@/components/HeroHand'), { ssr: false });

export default function Page() {
  return (
    <main>
      {/* HOME */}
      <section id="home" className="section">
        <div className="container grid md:grid-cols-2 gap-12 py-16 md:py-24">
          <div>
            <h1 className="h1">Gouvernez. Bâtissez. Partagez.</h1>
            <p className="mt-6 max-w-xl text-neutral-700">
              Minimalist black & white UI, community governance.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#about" className="btn">
                Rejoindre
              </a>
              <a href="#catalog" className="btn-ghost">
                En savoir plus
              </a>
            </div>
          </div>
          <div className="min-h-[360px]">
            <HeroHand />
          </div>
        </div>
      </section>

      {/* ABOUT / DAO */}
      <section id="about" className="section">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-6">
            {['Transparent', 'Composable', 'Monochrome'].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: i * 0.05 }}
                className="border p-6"
              >
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-neutral-700">
                  Pure black on white, clear rules.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="section">
        <div className="container py-16 md:py-24">
          <h2 className="h2">Entreprises</h2>
          <p className="text-neutral-700 mt-2">C‑01 → C‑05</p>
          <div className="mt-8">
            <CatalogGrid />
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section id="dao" className="section">
        <div className="container py-16 md:py-24">
          <h2 className="h2">Dashboard</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <StatCard title="Membres" value="99" />
            <StatCard title="Trésor" value="₿ 1.25" />
            <StatCard title="Revenus mensuels" value="$ 9,990" />
            <StatCard title="Distributions" value="$ 4,950" />
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <ActionsPanel />
            <TableMinimal />
          </div>
          <div className="mt-10">
            <a href="/dashboard" className="btn">
              Ouvrir le Dashboard (nécessite wallet)
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container py-16 md:py-24">
          <h2 className="h2">FAQ</h2>
          <details className="border p-4 mt-4">
            <summary className="cursor-pointer">
              Comment devenir membre ?
            </summary>
            <p className="mt-2 text-neutral-700">
              Connecter un wallet puis mint l’NFT de membre.
            </p>
          </details>
          <details className="border p-4 mt-2">
            <summary className="cursor-pointer">Quelle esthétique ?</summary>
            <p className="mt-2 text-neutral-700">
              Noir et blanc, bordures 1px, typographie nette.
            </p>
          </details>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container py-16 md:py-24">
          <h2 className="h2">Contact</h2>
          <div className="mt-6 flex gap-4">
            <a
              className="btn"
              href="https://wa.me/<TON_NUMERO>?text=Hello%20The%20Hand"
            >
              WhatsApp
            </a>
            <a
              className="btn-ghost"
              href="mailto:contact@the-hand.dao?subject=Hello"
            >
              Email
            </a>
          </div>
          <p className="mt-2 text-neutral-700">
            Support communautaire sur Telegram bientôt.
          </p>
        </div>
      </section>

      {/* LEGAL */}
      <section id="legal" className="section">
        <div className="container py-12 md:py-16">
          <h2 className="h2">Mentions légales & Confidentialité</h2>
          <p className="mt-2 text-neutral-700">
            Templates RGPD minimal FR/EN. Liens dédiés vers /privacy et /cookies
            si requis.
          </p>
        </div>
      </section>
    </main>
  );
}
