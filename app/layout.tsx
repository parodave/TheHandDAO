import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import StarBackground from "@/components/StarBackground";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import ConnectWallet from "@/components/ConnectWallet";
import MemberBadge from "@/components/MemberBadge";
import NFTMemberBadge from "@/components/NFTMemberBadge";
import NavAuthLinks from "@/components/NavAuthLinks";

export const metadata: Metadata = {
  title: "The Hand — DAO",
  description: "Monochrome, Web3-native community.",
  metadataBase: new URL("https://the-hand-dao.vercel.app"),
  openGraph: {
    title: "The Hand — DAO",
    description: "Monochrome, Web3-native community.",
    url: "https://the-hand-dao.vercel.app",
  },
  twitter: {
    card: "summary",
    title: "The Hand — DAO",
    description: "Monochrome, Web3-native community.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StarBackground />
          <motion.header
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="border-b sticky top-0 backdrop-blur bg-black/30"
          >
            <div className="mx-auto max-w-6xl px-6 h-14 flex items-center gap-6">
              <a href="/" className="font-semibold tracking-wide">THE HAND</a>
              <nav className="flex items-center gap-4 text-sm">
                <a href="/" className="hover:underline">Home</a>
                <a href="/dao" className="hover:underline">DAO</a>
                <a href="/join" className="hover:underline">Join</a>
                <a href="/contact" className="hover:underline">Contact</a>
                <a href="/legal" className="hover:underline">Legal</a>
              </nav>
              <div className="ml-auto flex items-center gap-3">
                <ConnectWallet />
                <MemberBadge />
                <NFTMemberBadge />
                <NavAuthLinks />
              </div>
            </div>
          </motion.header>

          <motion.main
            initial="hidden"
            animate="show"
            variants={stagger}
            className="min-h-[70vh]"
          >
            {children}
          </motion.main>

          <motion.footer
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="border-t mt-12"
          >
            <div className="mx-auto max-w-6xl px-6 py-8 grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-2">The Hand DAO</div>
                <p className="text-[var(--muted)]">Collective governance. Monochrome craft.</p>
              </div>
              <div className="flex gap-4 md:justify-center">
                <a className="border px-2 py-1" href="https://twitter.com">Twitter</a>
                <a className="border px-2 py-1" href="https://github.com">GitHub</a>
                <a className="border px-2 py-1" href="https://t.me">Telegram</a>
              </div>
              <div className="md:text-right">
                <p>© 2025 The Hand. All rights reserved.</p>
              </div>
            </div>
          </motion.footer>
        </Providers>
      </body>
    </html>
  );
}

