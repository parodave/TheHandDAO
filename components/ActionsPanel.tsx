"use client"
import { useState } from 'react'
import { useActions } from '@/lib/hooks/useActions'
import { useMemberStatus } from '@/lib/hooks/useMemberStatus'
import { useAccount } from 'wagmi'
import { useNetworkGate } from '@/lib/hooks/useNetworkGate'
import { txUrl } from '@/lib/web3/explorer'
import { useNft } from '@/lib/hooks/useNft'

export default function ActionsPanel(){
  const { address } = useAccount()
  const { isConnected, onWrong, switchToBaseSepolia, chainId } = useNetworkGate()
  const { isMember } = useMemberStatus()
  const { register, join, mint, distribute, vote, pending, hash, wait } = useActions()
  const { mint: mintNft, pending: pendingNft, hash: hashNft, wait: waitNft } = useNft()
  const [ref, setRef] = useState('REF')
  const [invite, setInvite] = useState('INVITE')
  const [companyId, setCompanyId] = useState(1)
  const [qty, setQty] = useState(1)
  const [amount, setAmount] = useState(100)

  return (
    <div className="border border-[#E6E6E6] p-4 space-y-4">
      {!isConnected && <div className="text-sm">Connectez votre portefeuille pour agir.</div>}
      {isConnected && onWrong && (
        <div className="flex items-center justify-between border border-black px-3 py-2 text-sm">
          <span>Réseau requis : Base / Base Sepolia</span>
          <button onClick={switchToBaseSepolia} className="h-8 px-3 border border-black">Basculer sur Base Sepolia</button>
        </div>
      )}
      <div className="text-xs uppercase tracking-wide text-[#6B6B6B]">Statut membre: {isMember ? 'Oui' : 'Non'}</div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs uppercase">Register ref</label>
          <input value={ref} onChange={e=>setRef(e.target.value)} className="h-10 w-full border border-[#E6E6E6] px-3"/>
          <button disabled={pending} onClick={async()=>{ await register(ref); }} className="h-10 border border-black">register</button>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase">Join code</label>
          <input value={invite} onChange={e=>setInvite(e.target.value)} className="h-10 w-full border border-[#E6E6E6] px-3"/>
          <button disabled={pending} onClick={async()=>{ await join(invite); }} className="h-10 border border-black">join</button>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase">Mint (company, qty)</label>
          <div className="flex gap-2">
            <input type="number" value={companyId} onChange={e=>setCompanyId(Number(e.target.value))} className="h-10 w-full border border-[#E6E6E6] px-3"/>
            <input type="number" value={qty} onChange={e=>setQty(Number(e.target.value))} className="h-10 w-full border border-[#E6E6E6] px-3"/>
          </div>
          <button disabled={pending} onClick={async()=>{ await mint(companyId, BigInt(qty)); }} className="h-10 border border-black">mint</button>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase">Distribute (company, amount)</label>
          <div className="flex gap-2">
            <input type="number" value={companyId} onChange={e=>setCompanyId(Number(e.target.value))} className="h-10 w-full border border-[#E6E6E6] px-3"/>
            <input type="number" value={amount} onChange={e=>setAmount(Number(e.target.value))} className="h-10 w-full border border-[#E6E6E6] px-3"/>
          </div>
          <button disabled={pending} onClick={async()=>{ await distribute(companyId, BigInt(amount)); }} className="h-10 border border-black">distribute</button>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className="text-xs uppercase">Vote (proposalId, choice)</label>
          <div className="flex gap-2">
            <input type="number" placeholder="proposalId" className="h-10 w-full border border-[#E6E6E6] px-3" id="pid"/>
            <input type="number" placeholder="choice" className="h-10 w-full border border-[#E6E6E6] px-3" id="choice"/>
          </div>
          <button disabled={pending} onClick={async()=>{ 
            const pid = Number((document.getElementById('pid') as HTMLInputElement).value||0)
            const c = Number((document.getElementById('choice') as HTMLInputElement).value||0)
            await vote(pid, c)
          }} className="h-10 border border-black">vote</button>
        </div>
      </div>

      {hash && <div className="text-xs">Tx: <a className="underline" href={txUrl(chainId, hash)} target="_blank">{hash}</a></div>}
      {wait.isLoading && <div className="text-xs">Confirmation en cours…</div>}
      {wait.isSuccess && <div className="text-xs">Confirmé ✅</div>}
      {wait.isError && <div className="text-xs">Échec ❌</div>}

      <div className="border-t border-[#E6E6E6] pt-4">
        <div className="text-xs uppercase tracking-wide text-[#6B6B6B] mb-2">NFT</div>
        <button
          disabled={!isConnected || onWrong || pendingNft || !address}
          onClick={async()=>{ await mintNft(address as `0x${string}`, 'ipfs://TOKEN_URI_A_DEFINIR') }}
          className="h-10 border border-black"
        >Mint NFT</button>
        {hashNft && <div className="mt-2 text-xs">Tx: <a className="underline" href={txUrl(chainId, hashNft)} target="_blank">voir sur BaseScan</a></div>}
        {waitNft?.isLoading && <div className="text-xs">Confirmation en cours…</div>}
        {waitNft?.isSuccess && <div className="text-xs">NFT minté ✅</div>}
        {waitNft?.isError && <div className="text-xs">Échec NFT ❌</div>}
      </div>
    </div>
  )
}
