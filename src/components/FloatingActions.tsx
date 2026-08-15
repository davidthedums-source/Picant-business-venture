import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 shadow-lg backdrop-blur transition-all active:scale-95 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        id="floating-call-btn"
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900/95 border border-cyan-500/50 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-cyan-950/50 hover:bg-slate-800 hover:border-cyan-400 transition-all active:scale-95 group"
        title="Call 0808 132 2738"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
        </span>
        <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-mono">0808 132 2738</span>
        <span className="sm:hidden font-mono">Call Us</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Picant%20Business%20Venture!%20I%20need%20computer%20repair%20assistance.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/60 transition-all active:scale-95 group"
        title="Chat with Picant on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white fill-white group-hover:scale-110 transition-transform" />
        <span>Chat on WhatsApp</span>
      </a>

    </div>
  );
};
