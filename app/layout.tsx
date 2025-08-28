import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Hand — DAO",
  description: "Minimalist black & white UI, community governance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-[calc(100vh-160px)] pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

