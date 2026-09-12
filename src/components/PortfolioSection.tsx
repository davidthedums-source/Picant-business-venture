import React, { useState } from 'react';
import { 
  Laptop, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  HardDrive, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { PortfolioItem } from '../types';

interface PortfolioSectionProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hardware' | 'upgrades' | 'software'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-blue-400" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  const categories = [
    { key: 'all', label: 'All Showcase' },
    { key: 'hardware', label: 'Hardware & Micro-Soldering' },
    { key: 'upgrades', label: 'Speed & Upgrades' },
    { key: 'software', label: 'Software & Data Recovery' },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 relative bg-[#070d1a] border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-5 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-950 via-indigo-950 to-cyan-950 border border-purple-500/40 text-purple-200 text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>Proven Technical Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Recent Work &amp; <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Repair Portfolio</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Real case studies from our Yaba workshop. From precision logic board micro-soldering to high-speed NVMe upgrades and corporate IT deployments.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`filter-portfolio-${cat.key}`}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 text-white shadow-lg shadow-cyan-950/60 border border-cyan-400/50'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item: PortfolioItem) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                id={`portfolio-card-${item.id}`}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-slate-700/60 shadow-xl group"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/30 via-purple-500/50 to-pink-500/30 group-hover:h-[3px] transition-all" />

                <div>
                  {/* Top Bar: Icon, Category Pill & Turnaround */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-700/70 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      {getIcon(item.iconName)}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                        {item.stats}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-800">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        {item.turnaround}
                      </span>
                    </div>
                  </div>

                  {/* Device Tag */}
                  <div className="text-xs font-mono font-medium text-cyan-400 mb-1.5">
                    {item.device}
                  </div>

                  {/* Project / Repair Title */}
                  <h3 className="text-lg font-bold text-white mb-3 font-display group-hover:text-cyan-200 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Symptom / Problem Box */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 text-xs mb-3 space-y-1">
                    <span className="font-bold text-rose-300 block">Reported Fault:</span>
                    <p className="text-slate-300 leading-relaxed">{item.symptom}</p>
                  </div>

                  {/* Resolution Box */}
                  <div className="p-3 rounded-xl bg-gradient-to-br from-slate-900/90 to-cyan-950/30 border border-cyan-500/20 text-xs mb-4 space-y-1">
                    <span className="font-bold text-emerald-300 block flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 inline" />
                      Picant Diagnostic &amp; Repair Resolution:
                    </span>
                    <p className="text-slate-200 leading-relaxed">{item.resolution}</p>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {item.categoryLabel}
                  </span>

                  <button
                    id={`book-similar-${item.id}`}
                    onClick={() => onOpenBooking(item.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-950 border border-slate-700 hover:border-cyan-500/50 text-white hover:text-cyan-300 text-xs font-bold transition-all cursor-pointer group-hover:shadow-md"
                  >
                    <span>Request Similar</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-7 rounded-3xl bg-gradient-to-r from-slate-900/90 via-[#0d172e] to-slate-900/90 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-display">
              Have an issue with a similar computer or laptop model?
            </h4>
            <p className="text-sm text-slate-300">
              Drop by 5 Elmes Street, Yaba for a fast physical inspection or send a WhatsApp diagnostic note.
            </p>
          </div>

          <button
            id="portfolio-cta-btn"
            onClick={() => onOpenBooking('Computer Hardware Diagnostics')}
            className="px-6 py-3.5 rounded-xl cyan-gradient-btn text-white font-extrabold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Diagnostics Today</span>
          </button>
        </div>

      </div>
    </section>
  );
};
