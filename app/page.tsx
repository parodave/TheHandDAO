import dynamic from 'next/dynamic'
import CatalogGrid from '@/components/CatalogGrid'
const VideoHero=dynamic(()=>import('@/components/VideoHero'),{ssr:false})
export default function Page(){
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <VideoHero/>
      <section className="py-10">
        <h1 className="text-5xl font-semibold mb-4">Gouvernez. Bâtissez. Partagez.</h1>
        <div className="flex gap-4">
          <a href="/dashboard" className="inline-flex h-10 px-6 border border-black hover:bg-black hover:text-white">Rejoindre la DAO</a>
          <a href="/about" className="inline-flex h-10 px-6 border border-[#E6E6E6] hover:underline">En savoir plus</a>
        </div>
      </section>
      <CatalogGrid/>
    </main>
  )
}
