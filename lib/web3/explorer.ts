export const txUrl = (chainId:number, hash:`0x${string}`)=>{
  if(chainId===84532) return `https://sepolia.basescan.org/tx/${hash}`
  if(chainId===8453)  return `https://basescan.org/tx/${hash}`
  return `#`
}

