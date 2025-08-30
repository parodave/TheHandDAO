'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
export default function WalletConnectButton(){
  return (
    <div className="my-6">
      <ConnectButton.Custom>
        {({ openConnectModal }) => (
          <button onClick={openConnectModal} className="inline-flex h-10 px-6 border border-black hover:bg-black hover:text-white">
            Connecter le portefeuille
          </button>
        )}
      </ConnectButton.Custom>
    </div>
  )
}

