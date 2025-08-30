'use client'
import { useEffect, useRef } from 'react'
export default function VideoHero(){
  const ref=useRef<HTMLVideoElement>(null)
  useEffect(()=>{ref.current?.play().catch(()=>{})},[])
  return (
    <div className="w-full h-[80vh] border border-[#E6E6E6] bg-white">
      <video ref={ref} className="w-full h-full object-cover object-center" muted loop autoPlay playsInline preload="metadata" aria-label="The Hand — hero video">
        <source src="https://gvqeohakukdygsenyqev.supabase.co/storage/v1/object/public/Video%20The%20hand/Generate_a_highquality_202508281414_j1i73.webm" type="video/webm"/>
        <source src="https://gvqeohakukdygsenyqev.supabase.co/storage/v1/object/public/Video%20The%20hand/Generate_a_highquality_202508281414_j1i73.mp4" type="video/mp4"/>
        <source src="https://gvqeohakukdygsenyqev.supabase.co/storage/v1/object/public/Video%20The%20hand/Generate_a_highquality_202508281414_j1i73.mov" type="video/quicktime"/>
      </video>
    </div>
  )
}
