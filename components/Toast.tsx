'use client'
import { useEffect, useState } from 'react'
export function useToast(){
  const [msg,set]=useState<string|null>(null)
  useEffect(()=>{if(!msg)return;const t=setTimeout(()=>set(null),1500);return()=>clearTimeout(t)},[msg])
  return{msg,show:(m:string)=>set(m)}
}
export default function Toast({message}:{message:string|null}){
  if(!message)return null
  return(
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 border border-black bg-white px-4 py-2 text-sm">{message}</div>
  )
}

