'use client'
import { useAccount, useChainId, useSwitchChain } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'

export function useNetworkGate(){
  const { isConnected } = useAccount()
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()
  const onWrong = chainId !== baseSepolia.id && chainId !== 8453
  return { isConnected, chainId, onWrong, switchToBaseSepolia: ()=>switchChain({ chainId: baseSepolia.id }) }
}

