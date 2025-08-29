import { http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

export const config = getDefaultConfig({
  appName: 'The Hand',
  projectId: process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID!,
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
})
