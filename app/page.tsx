import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hand — DAO",
  description: "Minimalist black & white UI, community governance.",
};

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Bienvenue à The Hand DAO</h1>
      <p className="mt-4">
        Minimalist black & white UI, community governance.
      </p>
    </main>
  );
}
