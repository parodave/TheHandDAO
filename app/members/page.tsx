// app/members/page.tsx
import Payments from '@/components/Payments'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Members() {
  return (
    <main className="p-8 space-y-8">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl tracking-wide">Members</h1>
        <ConnectButton />
      </div>
      <Payments />
    </main>
  )
}

