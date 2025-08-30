'use client'
import { useChainId } from 'wagmi'
import { useTx } from './useTx'
import { THE_HAND_NFT_ABI, THE_HAND_NFT_ADDRESSES } from '@/lib/web3/contracts'

export function useNft(){
  const chainId = useChainId()
  const address = THE_HAND_NFT_ADDRESSES[chainId]
  const { writeContractAsync, isPending, hash, wait } = useTx()
  if(!address) return { mint: async()=>{ throw new Error('NFT contract not set') }, pending:false, hash:undefined as any, wait:{} as any }
  return {
    mint: (to: `0x${string}`, uri: string) => writeContractAsync({ abi: THE_HAND_NFT_ABI, address, functionName: 'safeMint', args: [to, uri] }),
    pending: isPending, hash, wait
  }
}

