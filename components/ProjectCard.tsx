'use client'
import Image from 'next/image'
type Props={ code:string; title:string; status:'active'|'soon'; href?:string }
export default function ProjectCard({code,title,status,href='/dashboard'}:Props){
  const Card=(
    <div className="border border-[#E6E6E6] bg-white">
      <div className="relative w-full aspect-[4/3]">
        <Image src="https://gvqeohakukdygsenyqev.supabase.co/storage/v1/object/public/photo%20dao/IMG_8295.jpeg"
               alt={title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover object-center"/>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-[#E6E6E6]">
        <span className="text-xs uppercase tracking-wide text-[#6B6B6B]">{code}</span>
        <span className="text-sm text-black">{title}</span>
      </div>
    </div>
  )
  if(status==='soon') return <div className="opacity-70 select-none">{Card}<div className="mt-2 text-xs text-[#6B6B6B]">À venir</div></div>
  return <a href={href} className="block focus:outline-none focus:ring-1 focus:ring-black">{Card}</a>
}
