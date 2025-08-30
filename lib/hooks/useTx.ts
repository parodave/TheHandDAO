'use client'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { useEffect, useState } from 'react'

export function useTx() {
  const { data: hash, writeContractAsync, isPending } = useWriteContract()
  const [submitted, setSubmitted] = useState<`0x${string}` | undefined>()
  const wait = useWaitForTransactionReceipt({ hash: submitted })

  useEffect(() => { if (hash) setSubmitted(hash) }, [hash])
  return { writeContractAsync, isPending, hash: submitted, wait }
}

