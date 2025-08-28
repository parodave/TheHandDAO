'use client';
import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'DAO' },
  { id: 'catalog', label: 'Entreprises' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
  { id: 'legal', label: 'Légal' },
];

export default function Navbar() {
  const { isConnected } = useAccount();
  const router = useRouter();
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: [0, 0.2, 0.6, 1] }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72; // offset header
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isConnected) router.push('/dashboard');
  }, [isConnected, router]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="font-semibold tracking-wide"
        >
          THE HAND
        </button>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className={`text-sm ${active === n.id ? 'underline' : 'hover:opacity-70'}`}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => scrollTo('about')} className="btn-ghost">
            Join DAO
          </button>
          <ConnectButton label="Connecter le portefeuille" />
          <div className="text-xs">FR | EN</div>
        </div>
      </div>
    </header>
  );
}
