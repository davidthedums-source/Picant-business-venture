import React from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  ArrowUpRight, 
  ShieldCheck, 
  MessageSquare, 
  Wrench, 
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#03060c] border-t border-slate-800/90 pt-20 pb-12 text-slate-400 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Pre-Footer Callout Card */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900/95 via-[#0b1426] to-slate-900/95 border border-cyan-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Prompt Technical Care</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              Have an urgent computer or laptop repair need?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Bring your device to 5 Elmes Street, Yaba or reach our lead technician on WhatsApp for an immediate diagnostic assessment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              id="footer-whatsapp-cta"
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Picant%20Business%20Venture,%20I%20have%20an%20urgent%20computer%20repair%20inquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              id="footer-call-cta"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="font-mono">Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-700 p-0.5 shadow-lg shadow-cyan-950/60">
                <div className="w-full h-full bg-[#070b14] rounded-[14px] flex items-center justify-center">
                  <span className="font-display font-black text-cyan-300 text-base">PBV</span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-white tracking-tight">
                  Picant Business Venture
                </h3>
                <p className="text-xs text-cyan-400 font-semibold">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Reliable Computer Repair &amp; Professional Technology Services based at Yaba, Lagos Mainland.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs space-y-2 text-slate-300">
              <div className="flex items-center gap-2 text-cyan-300 font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>Operating Hours</span>
              </div>
              <p className="text-slate-400 leading-normal">
                {BUSINESS_INFO.operatingHours}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Repair Portfolio', href: '#portfolio' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Repair Process', href: '#process' },
                { name: 'About Picant', href: '#about' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contact & Location', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="hover:text-cyan-400 transition-colors block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Breakdown */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>{srv.title}</span>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>Custom PC Building &amp; Thermal Work</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>Data Backup &amp; Recovery Protocols</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Contact &amp; Location
            </h4>
            
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-white hover:text-cyan-300 font-bold font-mono transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">5 Elmes Street</p>
                  <p className="text-xs text-slate-400">Off Edmund Crescent, Yaba, Lagos, Nigeria</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  <span>Open Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Genuine Component Sourcing</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Picant Business Venture. All rights reserved.
          </div>
          <div className="text-slate-400 text-center sm:text-right">
            5 Elmes Street, off Edmund Crescent, Yaba, Lagos, Nigeria. &bull; Phone: 0808 132 2738
          </div>
        </div>

      </div>
    </footer>
  );
};
