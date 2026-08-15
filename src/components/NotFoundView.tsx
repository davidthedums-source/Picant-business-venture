import React from 'react';
import { Wrench, Home, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NotFoundViewProps {
  onReturnHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-[#070b14]">
      <div className="max-w-lg w-full text-center space-y-6 glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-700/50 flex items-center justify-center mx-auto text-cyan-400">
          <Wrench className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold font-mono text-cyan-400">404</span>
          <h2 className="text-2xl font-bold text-white font-display">Page Not Found</h2>
          <p className="text-sm text-slate-300">
            The page you are looking for does not exist, but Picant Business Venture is always here to fix your computer devices.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
          <p className="font-semibold text-white">Picant Business Venture</p>
          <p>📍 {BUSINESS_INFO.address}</p>
          <p>📞 {BUSINESS_INFO.phone}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onReturnHome}
            className="w-full sm:w-auto px-6 py-3 rounded-xl cyan-gradient-btn text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
          
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Call 0808 132 2738</span>
          </a>
        </div>
      </div>
    </div>
  );
};
