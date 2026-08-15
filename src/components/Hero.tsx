import React, { useState } from 'react';
import { Phone, Wrench, Shield, CheckCircle2, Cpu, HardDrive, Zap, MapPin, MessageSquareText, Laptop, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeDiagnosticTab, setActiveDiagnosticTab] = useState<'status' | 'specs' | 'diagnostics'>('status');

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#070b14] via-[#091122] to-[#070b14]"
    >
      {/* Background Decorative Grids and Light Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline & Location Eyebrow */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-700/40 text-cyan-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                {BUSINESS_INFO.tagline}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                Yaba, Lagos
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-400 font-bold">
                PICANT BUSINESS VENTURE
              </h2>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-display">
                Reliable Computer Repair.{' '}
                <span className="text-gradient block mt-1">
                  Professional Technology Solutions.
                </span>
              </h1>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From computer repairs and troubleshooting to software installation and technology support, Picant Business Venture helps keep your devices working at their best.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-book-repair-btn"
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl cyan-gradient-btn text-white font-bold text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <Wrench className="w-5 h-5 text-white" />
                <span>Book a Repair</span>
              </button>

              <a
                id="hero-call-us-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-white font-semibold text-base transition-all flex items-center justify-center gap-3 shadow-md"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>Call Us ({BUSINESS_INFO.phone})</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Fast Diagnosis</h4>
                  <p className="text-[11px] text-slate-400">Quick root-cause detection</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Quality Work</h4>
                  <p className="text-[11px] text-slate-400">Care for every device</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-start gap-2.5">
                <div className="p-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Central Yaba</h4>
                  <p className="text-[11px] text-slate-400">Off Edmund Crescent</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Professional Computer Repair Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Glow backdrop behind visual */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Tech Visual Terminal / Diagnostic Deck */}
              <div className="relative rounded-2xl bg-[#0b1322] border border-slate-700/70 p-5 shadow-2xl overflow-hidden">
                
                {/* Visual Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">picant-repair-bench.sys</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/50 text-[11px] font-mono text-cyan-400">
                    <Zap className="w-3 h-3" />
                    <span>WORKSHOP ONLINE</span>
                  </div>
                </div>

                {/* Sub-tabs inside visual */}
                <div className="flex items-center gap-2 my-4 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveDiagnosticTab('status')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all ${
                      activeDiagnosticTab === 'status'
                        ? 'bg-cyan-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    System Status
                  </button>
                  <button
                    onClick={() => setActiveDiagnosticTab('specs')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all ${
                      activeDiagnosticTab === 'specs'
                        ? 'bg-cyan-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Device Types
                  </button>
                  <button
                    onClick={() => setActiveDiagnosticTab('diagnostics')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all ${
                      activeDiagnosticTab === 'diagnostics'
                        ? 'bg-cyan-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Repair Scope
                  </button>
                </div>

                {/* Visual Content Panels */}
                {activeDiagnosticTab === 'status' && (
                  <div className="space-y-3.5">
                    {/* Live Hardware Meter Cards */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                          <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5 text-cyan-400" /> CPU & Board</span>
                          <span className="text-emerald-400 font-mono">OK</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-400 rounded-full w-[88%] animate-pulse"></div>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1.5">Hardware Health Diagnostic</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                          <span className="flex items-center gap-1"><HardDrive className="w-3.5 h-3.5 text-sky-400" /> SSD & RAM</span>
                          <span className="text-emerald-400 font-mono">OK</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-sky-400 rounded-full w-[94%]"></div>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1.5">Speed & Storage Integrity</p>
                      </div>
                    </div>

                    {/* Interactive Device Health Card */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-[#0c1629] border border-cyan-900/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Laptop className="w-5 h-5 text-cyan-400" />
                          <span className="text-sm font-semibold text-white">Picant Tech Diagnosis Bench</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                          Active Repair Mode
                        </span>
                      </div>

                      <div className="text-xs font-mono text-slate-300 space-y-1 bg-[#060a12] p-2.5 rounded-lg border border-slate-800">
                        <p className="text-cyan-400">&gt; Target: Desktop PC &amp; Laptop Repairs</p>
                        <p className="text-slate-400">&gt; Location: 5 Elmes St, off Edmund Cres, Yaba</p>
                        <p className="text-emerald-400">&gt; Status: Ready to diagnose your device</p>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-slate-400">Need immediate help?</span>
                        <button
                          onClick={() => onOpenBooking()}
                          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer"
                        >
                          Request Diagnostics &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeDiagnosticTab === 'specs' && (
                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="font-semibold text-slate-200">Laptops &amp; MacBooks</span>
                      <span className="text-cyan-400 font-mono">HP, Dell, Lenovo, Apple, Asus</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="font-semibold text-slate-200">Desktop PCs &amp; Towers</span>
                      <span className="text-cyan-400 font-mono">Workstations &amp; Gaming Rigs</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="font-semibold text-slate-200">Operating Systems</span>
                      <span className="text-cyan-400 font-mono">Windows 10/11, macOS, Linux</span>
                    </div>
                  </div>
                )}

                {activeDiagnosticTab === 'diagnostics' && (
                  <div className="space-y-2 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                        ⚡ Power &amp; Charging Issues
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                        🖥️ Screen &amp; Display Faults
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                        🐌 Slow Boot &amp; Freeze Fixes
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                        ⚙️ Clean OS Installation
                      </div>
                    </div>
                    <div className="pt-2 text-center">
                      <button
                        onClick={() => onOpenBooking()}
                        className="w-full py-2 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 font-semibold"
                      >
                        Tell Us Your Computer Issue &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* Bottom Quick Contact Strip */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>📍 Yaba, Lagos Mainland</span>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Picant%20Business%20Venture,%20I%20need%20help%20with%20my%20computer`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    <MessageSquareText className="w-3.5 h-3.5" />
                    <span>WhatsApp Support</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
