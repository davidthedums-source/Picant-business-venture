import React from 'react';
import { X, Wrench } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface RepairModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const RepairModal: React.FC<RepairModalProps> = ({ isOpen, onClose, selectedService }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#09101d] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-700/50 flex items-center justify-center text-cyan-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-display">Book a Repair Service</h3>
              <p className="text-xs text-slate-400">Picant Business Venture &bull; 5 Elmes Street, Yaba, Lagos</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Embedded Contact / Booking Form */}
        <ContactForm initialService={selectedService} />

      </div>
    </div>
  );
};
