'use client'
import { THE_HAND_ABI, THE_HAND_ADDRESSES } from '@/lib/web3/contracts'
import { useChainId } from 'wagmi'
import { useTx } from './useTx'
import { stringToHex } from 'viem'

export function useActions() {
  const chainId = useChainId()
  const address = THE_HAND_ADDRESSES[chainId]
  const { writeContractAsync, isPending, hash, wait } = useTx()

  async function call(name: 'register'|'join'|'mint'|'distribute'|'vote', args: any[]) {
    if (!address) throw new Error('Contract address not set for this chain')
    const tx = await writeContractAsync({ abi: THE_HAND_ABI, address, functionName: name, args })
    return tx
  }

  return {
    register: (ref: string) => call('register', [toBytes32(ref)]),
    join: (invite: string) => call('join', [toBytes32(invite)]),
    mint: (companyId: number, qty: bigint) => call('mint', [BigInt(companyId), qty]),
    distribute: (companyId: number, amount: bigint) => call('distribute', [BigInt(companyId), amount]),
    vote: (proposalId: number, choice: number) => call('vote', [BigInt(proposalId), Number(choice)]),
    pending: isPending, hash, wait
  }
}

function toBytes32(s: string) {
  if (s.startsWith('0x') && s.length === 66) return s as `0x${string}`
  return stringToHex(s, { size: 32 }) as `0x${string}`
}

