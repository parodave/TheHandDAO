import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import ConnectWallet from "@/components/ConnectWallet";
import MemberBadge from "@/components/MemberBadge";
import NavAuthLinks from "@/components/NavAuthLinks";

export const metadata: Metadata = {
  title: "The Hand — DAO",
  description: "Minimalist black & white UI, community governance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-black">
        <Providers>
          <header className="border-b">
            <div className="mx-auto max-w-6xl px-6 h-14 flex items-center gap-6">
              <a href="/" className="font-semibold">The Hand</a>
              <nav className="flex items-center gap-4 text-sm">
                <a href="/" className="hover:underline">Home</a>
                <a href="/dao" className="hover:underline">DAO</a>
                <a href="/contact" className="hover:underline">Contact</a>
                <a href="/legal" className="hover:underline">Legal</a>
              </nav>
              <div className="ml-auto flex items-center gap-3">
                <a href="/join" className="border px-3 py-1">Join DAO</a>
                <ConnectWallet />
                <MemberBadge />
                <NavAuthLinks />
              </div>
            </div>
          </header>
          {children}
          <footer className="border-t mt-12">
            <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between text-sm">
              <p>© 2025 The Hand DAO — All rights reserved.</p>
              <div className="flex gap-3">
                <a href="https://twitter.com" className="border px-2 py-1">Twitter</a>
                <a href="https://github.com" className="border px-2 py-1">GitHub</a>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

