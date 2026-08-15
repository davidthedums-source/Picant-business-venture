import React from 'react';
import { PhoneCall, SearchCheck, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';
import { ProcessStep } from '../types';

interface RepairProcessProps {
  onOpenBooking: () => void;
}

export const RepairProcess: React.FC<RepairProcessProps> = ({ onOpenBooking }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <PhoneCall className="w-6 h-6 text-cyan-400" />;
      case 1:
        return <SearchCheck className="w-6 h-6 text-cyan-400" />;
      case 2:
        return <Wrench className="w-6 h-6 text-cyan-400" />;
      case 3:
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
      default:
        return <Wrench className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 relative bg-[#090e1a] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <span>Simple &amp; Seamless</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Our 4-Step Repair Process
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Getting your computer fixed at Picant Business Venture is clear, fast, and hassle-free.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step: ProcessStep, index: number) => (
            <div
              key={step.stepNumber}
              id={`process-step-${step.stepNumber}`}
              className="glass-card rounded-2xl p-6 relative flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/70 flex items-center justify-center group-hover:bg-cyan-950/60 group-hover:border-cyan-500/50 transition-colors">
                    {getStepIcon(index)}
                  </div>
                  
                  <span className="text-2xl font-extrabold font-mono text-cyan-400/80">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Title & Main User Copy */}
                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {step.stepNumber} — {step.title}
                </h3>

                <p className="text-sm text-cyan-300/90 font-medium mb-3">
                  {step.description}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.details}
                </p>
              </div>

              {index < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-md">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process CTA banner */}
        <div className="mt-12 text-center">
          <button
            id="process-start-repair-btn"
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-xl cyan-gradient-btn text-white font-bold text-sm shadow-md hover:shadow-cyan-500/30 hover:brightness-110 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Wrench className="w-4 h-4" />
            <span>Start Step 01: Contact Us Today</span>
          </button>
        </div>

      </div>
    </section>
  );
};
