import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sun, Moon, Sparkles, MessageCircle } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSiteVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenSiteVisit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? 'bg-[#121110]/90 backdrop-blur-md border-b border-neutral-800 shadow-2xl py-3.5'
            : 'bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5DFD5] shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xs bg-[#1C1917] dark:bg-[#FDFBF7] flex items-center justify-center text-[#FDFBF7] dark:text-[#1C1917] font-serif font-bold text-xl tracking-tighter shadow-md group-hover:scale-105 transition-transform border border-amber-600/30">
              SK
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-none">
                SK <span className="text-[#8C7A6B] font-sans text-base font-light tracking-widest">TEXTURE</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                Gurugram • Luxury Wall Finishes
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#1C1917] dark:hover:text-white transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-600 dark:bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full border border-[#E5DFD5] dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-[#F5F2EB] dark:hover:bg-neutral-800 transition-colors"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
            </button>

            {/* Quick Call */}
            <a
              href="tel:9811221010"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-800 dark:text-neutral-200 hover:text-amber-700 transition-colors px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span className="font-mono">9811221010</span>
            </a>

            {/* Book Site Visit CTA */}
            <button
              onClick={onOpenSiteVisit}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#1C1917] text-[#FDFBF7] dark:bg-[#FDFBF7] dark:text-[#1C1917] hover:bg-neutral-800 dark:hover:bg-white rounded-xs shadow-sm hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer border border-[#1C1917] dark:border-white"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-600 group-hover:scale-110 transition-transform" />
              <span>Book Free Site Visit</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-neutral-900 dark:text-neutral-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121110]/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-6 text-white space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium tracking-widest uppercase text-neutral-200 hover:text-amber-400 py-2 border-b border-neutral-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:9811221010"
              className="w-full py-3 px-4 border border-neutral-700 text-center text-xs tracking-wider uppercase font-semibold text-neutral-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" /> Call 9811221010
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSiteVisit();
              }}
              className="w-full py-3 px-4 bg-amber-600 text-neutral-950 text-center text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Free Site Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
