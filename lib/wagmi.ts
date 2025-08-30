// lib/wagmi.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { http } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';

const projectId = process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID as string;

export const config = getDefaultConfig({
  appName: 'The Hand',
  projectId,
  chains: [base, baseSepolia],
  ssr: true,
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
});
