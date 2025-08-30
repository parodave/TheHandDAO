'use client'
import { useState } from 'react'
import { useWriteContract } from 'wagmi'
import governorAbi from '@/app/abi/HandGovernor.abi.json'

export default function GovernanceActions({ governor }: { governor: `0x${string}` }) {
  const { writeContract, isPending } = useWriteContract()
  const [desc, setDesc] = useState('Proposition test')

  const propose = async () => {
    // Appel propose sans action (exemple); en prod, passer des cibles réelles
    await writeContract({
      address: governor,
      abi: governorAbi as any,
      functionName: 'propose',
      args: [[], [], [], desc],
    })
  }

  return (
    <div className="border p-4 space-y-3">
      <div className="text-xs uppercase">Gouvernance</div>
      <input value={desc} onChange={(e)=>setDesc(e.target.value)} className="border px-3 py-2 w-full" />
      <button onClick={propose} disabled={isPending} className="inline-flex h-10 px-6 border border-neutral-900 bg-white text-black hover:bg-black hover:text-white transition">Proposer</button>
    </div>
  )
}

