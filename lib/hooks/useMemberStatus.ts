'use client'
import { useAccount, useReadContract, useChainId } from 'wagmi'
import { THE_HAND_ABI, THE_HAND_ADDRESSES } from '@/lib/web3/contracts'

export function useMemberStatus() {
  const { address } = useAccount()
  const chainId = useChainId()
  const contractAddress = THE_HAND_ADDRESSES[chainId]
  const enabled = Boolean(address && contractAddress)
  const { data, isLoading, refetch } = useReadContract({
    abi: THE_HAND_ABI, address: contractAddress, functionName: 'isMember', args: [address!],
    query: { enabled }
  })
  return { isMember: Boolean(data), isLoading, refetch, address, chainId }
}

