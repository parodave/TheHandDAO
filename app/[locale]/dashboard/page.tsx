import ConnectWalletBlock from "@/components/ConnectWalletBlock";
import MintNFT from "@/components/MintNFT";

export default async function Dashboard({ params }: { params: { locale: "fr"|"en" } }) {
  return (
    <main className="min-h-screen p-6 md:p-12 space-y-8">
      <h1 className="text-5xl font-semibold">Dashboard</h1>
      {/* Bouton RainbowKit */}
      <ConnectWalletBlock />
      {/* Mint NFT */}
      <MintNFT />
      {/* Vos sections/actions existantes en dessous */}
    </main>
  );
}
