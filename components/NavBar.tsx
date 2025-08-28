'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './ui/Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { Locale } from '@/app/i18n/config';
import { Dictionary } from '@/app/i18n/types';

interface NavBarProps {
  locale: Locale;
  dict: Dictionary;
}

export function NavBar({ locale, dict }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: dict.nav.home, href: `/${locale}/` },
    { label: dict.nav.dao, href: `/${locale}/dao/` },
    { label: dict.nav.contact, href: `/${locale}/contact/` },
    { label: dict.nav.legal, href: `/${locale}/legal/` },
  ];

  return (
    <nav className="border-b border-black bg-white">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href={`/${locale}/`}
            className="font-mono uppercase tracking-widest text-lg focus:outline-black focus:outline-1"
          >
            THE HAND DAO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-label border-b-hover py-1 focus:outline-black focus:outline-1"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 focus:outline-black focus:outline-1"
              aria-label="Toggle menu"
            >
              <div className="w-4 h-4 flex flex-col justify-between">
                <span className={`block h-px bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-px bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-black bg-white overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-label py-2 hover:bg-black hover:text-white px-2 transition-colors focus:outline-black focus:outline-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
}