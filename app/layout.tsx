import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Hand — DAO",
  description: "Minimalist black & white UI, community governance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
