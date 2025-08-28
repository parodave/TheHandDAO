"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http, createConfig } from "wagmi";
import { mainnet, polygon, base, arbitrum, optimism } from "wagmi/chains";
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
  connectorsForWallets
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const projectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "demo";

const { wallets } = getDefaultWallets({
  appName: "The Hand DAO",
  projectId,
});

const connectors = connectorsForWallets(wallets, {
  appName: "The Hand DAO",
  projectId,
});

const config = createConfig({
  chains: [mainnet, base, arbitrum, optimism, polygon],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
  },
  multiInjectedProviderDiscovery: true,
  ssr: true,
  connectors,
});

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({ overlayBlur: "small" })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

