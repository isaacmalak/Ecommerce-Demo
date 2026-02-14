'use client';

import { useState, useEffect } from 'react';
import { Logo } from '@/app/components/Logo';
import { NavItem } from './NavItem';
import { Info, Menu, PersonStandingIcon, PhoneIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  {
    name: 'Products',
    href: '/products',
    icon: <PersonStandingIcon className="h-5 w-5" />,
  },
  { name: 'About', href: '/about', icon: <Info className="h-5 w-5" /> },
  {
    name: 'Contact',
    href: '/contact',
    icon: <PhoneIcon className="h-4 w-4" />,
  },
];

export function StoreNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle back button behavior
  useEffect(() => {
    const handlePopState = () => {
      // If back button is pressed, close the menu
      setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      // Add a history entry when menu opens so back button can close it
      window.history.pushState({ menuOpen: true }, '', '');
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMobileLinkClick = () => {
    // We navigate away, so we don't need the 'menu open' history state anymore.
    // However, if we just navigate, the history state remains.
    // Using <Link replace> is the best solution here.
    setMobileMenuOpen(false);
  };

  const handleCloseButton = () => {
    // Simulate back button to close menu and pop history state
    window.history.back();
  };

  return (
    <>
      <nav className="relative z-50 bg-red-900/80 backdrop-blur-xl">
        <div className="flex h-18 items-center justify-between px-4 md:px-6">
          <Logo />
          {/* Desktop nav */}
          <div className="hidden items-center space-x-4 md:flex">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                name={item.name}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>
          {/* Mobile hamburger button */}
          <button
            className="flex items-center justify-center rounded-full bg-black/20 p-2 text-white transition-colors hover:bg-black/40 active:scale-95 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] flex flex-col bg-red-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-18 items-center justify-between px-4">
              <Logo />
              <button
                className="flex items-center justify-center rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 active:scale-95"
                onClick={handleCloseButton}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    replace
                    onClick={handleMobileLinkClick}
                    className="group flex w-full items-center justify-between border-b border-white/10 pb-4 text-3xl font-bold text-white/80 transition-colors hover:text-white"
                  >
                    <span>{item.name}</span>
                    <div className="rounded-full bg-white/5 p-3 transition-colors group-hover:bg-white/10">
                      {item.icon}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-8 text-center text-white/40 text-sm">
              <p>© {new Date().getFullYear()} E-Commerce Demo</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
