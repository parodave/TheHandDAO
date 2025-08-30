import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base, baseSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "The Hand",
  projectId: process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID!,
  chains: [process.env.NEXT_PUBLIC_USE_SEPOLIA === "true" ? baseSepolia : base],
  ssr: true,
});

