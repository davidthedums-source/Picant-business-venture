import React from 'react';
import { Phone, MapPin, Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#04070d] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-cyan-400 text-sm">PBV</span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                  Picant Business Venture
                </h3>
                <p className="text-xs text-cyan-400 font-medium">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              “Reliable Computer Repair &amp; Technology Support.”
            </p>
            <p className="text-xs text-slate-400 max-w-sm">
              Providing dependable desktop and laptop diagnostics, hardware repairs, operating system installations, and preventive maintenance in Yaba, Lagos, Nigeria.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#services');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#reviews');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Contact &amp; Location
            </h4>
            
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-200 hover:text-cyan-300 font-semibold font-mono transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Yaba, Lagos, Nigeria</p>
                  <p className="text-xs text-slate-400">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline"
                >
                  <span>Open Directions on Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Picant Business Venture. All rights reserved.
          </div>
          <div className="text-slate-400">
            5 Elmes Street, off Edmund Crescent, Yaba, Lagos, Nigeria.
          </div>
        </div>

      </div>
    </footer>
  );
};
