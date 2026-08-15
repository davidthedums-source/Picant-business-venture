import React from 'react';
import { 
  MonitorCheck, 
  Laptop, 
  Download, 
  Cpu, 
  Wrench, 
  Headphones, 
  ArrowRight, 
  Check, 
  Sparkles
} from 'lucide-react';
import { SERVICES_LIST } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MonitorCheck':
        return <MonitorCheck className="w-6 h-6 text-cyan-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-cyan-400" />;
      case 'Download':
        return <Download className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-cyan-400" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-cyan-400" />;
      default:
        return <Wrench className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#070b14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Our Technical Expertise
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Specialized Technology &amp; Repair Services
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300">
            From precision hardware repair to software configurations and routine maintenance, Picant Business Venture delivers dependable tech support in Yaba, Lagos.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center p-3 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/40 transition-colors shadow-inner">
                    {getIcon(service.iconName)}
                  </div>
                  
                  <span className="text-xs font-mono font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 font-display group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description (Exact user requirement) */}
                <p className="text-sm text-slate-300 font-medium leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Additional scope details */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {service.detailedDesc}
                </p>

                {/* Feature checklist */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Help Action Button */}
              <button
                id={`get-help-btn-${service.id}`}
                onClick={() => onOpenBooking(service.title)}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-cyan-950 border border-slate-800 hover:border-cyan-600/50 text-white hover:text-cyan-300 text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
              >
                <span>Get Help</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0b162a]/90 to-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Not sure what issue your computer has?</h4>
            <p className="text-xs sm:text-sm text-slate-300">Bring it to 5 Elmes Street, Yaba or describe the symptoms to our technician.</p>
          </div>
          <button
            id="services-custom-help-btn"
            onClick={() => onOpenBooking('General Computer Issue')}
            className="px-6 py-3 rounded-xl cyan-gradient-btn text-white text-sm font-bold shadow-md hover:brightness-110 whitespace-nowrap cursor-pointer"
          >
            Request Free Initial Assessment
          </button>
        </div>

      </div>
    </section>
  );
};
