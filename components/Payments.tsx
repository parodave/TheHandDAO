// components/Payments.tsx
'use client'
import { useState } from 'react'
import PayUSDC from './PayUSDC'

export default function Payments() {
  const [amount, setAmount] = useState(999)

  const startCommerce = async () => {
    const res = await fetch('/api/commerce/create', { method: 'POST', body: JSON.stringify({ amount }) })
    const { hosted_url } = await res.json()
    window.location.href = hosted_url
  }
  const startStripe = async () => {
    const res = await fetch('/api/stripe/checkout', { method: 'POST', body: JSON.stringify({ amount }) })
    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="border p-4 space-y-3">
        <div className="text-xs uppercase">USDC on‑chain (Base)</div>
        <PayUSDC defaultAmountUsd={amount} />
      </div>
      <div className="border p-4 space-y-3">
        <div className="text-xs uppercase">Cartes (Stripe)</div>
        <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} className="border px-3 py-2 w-32" />
        <button onClick={startStripe} className="inline-flex h-10 px-6 border border-neutral-900 bg-white text-black hover:bg-black hover:text-white transition">Payer par carte</button>
      </div>
      <div className="border p-4 space-y-3">
        <div className="text-xs uppercase">Multi‑crypto</div>
        <p className="text-sm text-neutral-600">BTC/ETH/USDC et autres via Coinbase Commerce.</p>
        <button onClick={startCommerce} className="inline-flex h-10 px-6 border border-neutral-900 bg-white text-black hover:bg-black hover:text-white transition">Payer en crypto</button>
      </div>
    </div>
  )
}

