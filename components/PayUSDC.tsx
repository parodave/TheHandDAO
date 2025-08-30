// components/PayUSDC.tsx
'use client'
import { useAccount, useWriteContract } from 'wagmi'
import { parseUnits } from 'viem'
import { erc20Abi } from 'viem'
import { useState } from 'react'

// USDC natif sur Base (6 décimales)
export const USDC_BASE = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913' as const

export default function PayUSDC({ defaultAmountUsd = 999 }: { defaultAmountUsd?: number }) {
  const { isConnected } = useAccount()
  const [amount, setAmount] = useState(defaultAmountUsd)
  const { writeContract, isPending } = useWriteContract()
  const treasury = process.env.NEXT_PUBLIC_TREASURY_ADDRESS || process.env.TREASURY_ADDRESS

  if (!treasury) return <p className="text-sm">TREASURY_ADDRESS manquant.</p>

  const onPay = async () => {
    const value = parseUnits(String(amount), 6) // USDC 6 decimals
    await writeContract({
      address: USDC_BASE,
      abi: erc20Abi,
      functionName: 'transfer',
      args: [treasury as `0x${string}`, value],
    })
  }

  return (
    <div className="border border-neutral-200 p-4 space-y-3">
      <div className="text-xs uppercase tracking-wide">Paiement USDC (Base)</div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border border-neutral-200 px-3 py-2 w-32"
        />
        <span>USD</span>
      </div>
      <button
        onClick={onPay}
        disabled={!isConnected || isPending}
        className="inline-flex h-10 px-6 border border-neutral-900 bg-white text-black hover:bg-black hover:text-white transition"
      >
        {isPending ? 'Envoi…' : 'Payer en USDC'}
      </button>
      {!isConnected && <p className="text-sm text-neutral-500">Connecte un wallet d’abord.</p>}
    </div>
  )
}

