/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-900 shadow-lg py-3'
            : 'bg-gradient-to-b from-slate-950/70 to-transparent py-5'
        }`}
        id="app-header"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo + Company Name */}
            <a href="#home" className="flex items-center space-x-3 group" id="navbar-logo-link">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/30 bg-slate-900 shadow-md font-black text-sm tracking-tighter text-blue-400 group-hover:scale-105 transition-transform duration-300">
                <span>LCG</span>
                {/* Accent dot */}
                <span className="absolute bottom-1 right-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
              </div>
              <div>
                <span className="block text-lg font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.name}
                </span>
                <span className="block text-[10px] font-medium tracking-widest text-slate-400 uppercase">
                  Doncaster & South Yorkshire
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors py-1.5 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center space-x-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                id="navbar-phone-link"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-blue-400">
                  <Phone className="h-4 w-4" />
                </div>
                <span>{COMPANY_INFO.phoneFormatted}</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center space-x-2 rounded-xl bg-blue-600 px-4.5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-blue-500 active:bg-blue-700 transition-all cursor-pointer"
                id="navbar-quote-btn"
              >
                <Calendar className="h-4 w-4" />
                <span>Get Free Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-blue-400"
                aria-label="Call LCG Joinery"
                id="navbar-mobile-call-btn"
              >
                <Phone className="h-4 w-4" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Toggle menu"
                id="navbar-mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-b border-slate-900 bg-slate-950/95 backdrop-blur-md"
              id="mobile-nav-panel"
            >
              <div className="space-y-1 px-4 pt-2 pb-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center justify-center space-x-2 rounded-xl bg-slate-900 border border-slate-800 py-3 text-sm font-bold text-slate-300"
                  >
                    <Phone className="h-4 w-4 text-blue-400" />
                    <span>Call Us</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenQuote();
                    }}
                    className="flex items-center justify-center space-x-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Free Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
