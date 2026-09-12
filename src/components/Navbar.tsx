import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Wrench, Shield, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top micro banner for urgent support */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="w-full h-full bg-[#090e1a] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-extrabold text-cyan-400 text-lg tracking-wider">PBV</span>
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  Picant
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 hidden sm:inline-block">
                  Yaba, Lagos
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-tight">
                Business Venture &bull; <span className="text-cyan-400/90 italic">We Fix It. We Make It Work.</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Call */}
            <a
              id="header-quick-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-all text-sm font-medium"
              title="Call Picant Business Venture"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* Book a Repair CTA */}
            <button
              id="header-book-repair-btn"
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl cyan-gradient-btn text-white font-semibold text-sm shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Wrench className="w-4 h-4" />
              <span>Book a Repair</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-book-header-btn"
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 rounded-lg cyan-gradient-btn text-white text-xs font-semibold"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#0b1322] border border-slate-800 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between p-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              id="mobile-drawer-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 border border-slate-700 text-cyan-300 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl cyan-gradient-btn text-white font-bold text-sm shadow-md"
            >
              <Wrench className="w-4 h-4" />
              <span>Book a Repair Now</span>
            </button>

            <div className="text-center text-[11px] text-slate-400 pt-1">
              📍 5 Elmes Street, off Edmund Crescent, Yaba, Lagos
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
