"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/dao", label: "DAO" },
  { href: "/contact", label: "Contact" },
  { href: "/legal", label: "Legal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black bg-white">
      <nav className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-xl no-underline">
          The Hand
        </Link>

        <button
          className="md:hidden btn"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="nav-link" href={l.href}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link className="btn btn-primary no-underline" href="/dao">Join DAO</Link>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black bg-white">
          <ul className="container py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link className="nav-link" href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="btn btn-primary no-underline" href="/dao" onClick={() => setOpen(false)}>
                Join DAO
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

