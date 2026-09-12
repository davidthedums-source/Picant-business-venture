import React, { useState } from 'react';
import { 
  Phone, 
  Wrench, 
  Shield, 
  CheckCircle2, 
  Cpu, 
  HardDrive, 
  Zap, 
  MapPin, 
  MessageSquareText, 
  Laptop, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock
} from 'lucide-react';
import { BUSINESS_INFO, KEY_METRICS } from '../data/content';

interface HeroProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeDiagnosticTab, setActiveDiagnosticTab] = useState<'status' | 'specs' | 'diagnostics'>('status');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#060b17] via-[#091224] to-[#070b14]"
    >
      {/* Background Decorative Aurora & Luminous Grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px]" />
        
        {/* Subtle Tech Matrix Grid */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.7) 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline & Location Eyebrow */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-950/90 via-sky-900/80 to-blue-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wide shadow-md shadow-cyan-950/50">
                <Sparkles className="w-4 h-4 text-cyan-300" />
                {BUSINESS_INFO.tagline}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-950/80 to-indigo-950/80 border border-purple-500/40 text-purple-200 text-xs font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Workshop Active &bull; Yaba, Lagos
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="inline-block">
                <h2 className="text-xs sm:text-sm uppercase tracking-[0.25em] font-extrabold bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                  PICANT BUSINESS VENTURE
                </h2>
              </div>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-display">
                <span className="text-white">Reliable Computer Repair.</span>{' '}
                <span className="text-gradient block mt-1 drop-shadow-[0_4px_16px_rgba(56,189,248,0.35)]">
                  Professional Technology Solutions.
                </span>
              </h1>
            </div>

            {/* Short Compelling Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              From desktop hardware fixes and laptop screen restoration to clean operating system installations and preventive maintenance. Based at 5 Elmes Street, Yaba, Lagos.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <button
                id="hero-book-repair-btn"
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl cyan-gradient-btn text-white font-extrabold text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <Wrench className="w-5 h-5 text-white" />
                <span>Book a Repair</span>
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white font-bold text-base transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>

              <a
                id="hero-call-us-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-cyan-300 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="font-mono">{BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Metrics Row (Linkscreek Inspired) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {KEY_METRICS.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                  <div className="text-xl sm:text-2xl font-black font-display text-white bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {metric.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Professional Computer Repair Visual Bench */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Colorful Glow backdrop behind visual */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-purple-600/30 to-pink-500/30 rounded-3xl blur-2xl opacity-75"></div>

              {/* Main Tech Visual Terminal / Diagnostic Deck with vibrant styling */}
              <div className="relative rounded-3xl bg-[#0b1322] border border-cyan-500/30 p-5 sm:p-6 shadow-2xl overflow-hidden">
                
                {/* Visual Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/90"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/90"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/90"></div>
                    <span className="text-xs font-mono text-slate-300 ml-2">picant-repair-bench.sys</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gradient-to-r from-cyan-950 to-purple-950 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 font-bold shadow-sm">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>WORKSHOP ONLINE</span>
                  </div>
                </div>

                {/* Sub-tabs inside visual */}
                <div className="flex items-center gap-1.5 my-4 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveDiagnosticTab('status')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-all ${
                      activeDiagnosticTab === 'status'
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    System Status
                  </button>
                  <button
                    onClick={() => setActiveDiagnosticTab('specs')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-all ${
                      activeDiagnosticTab === 'specs'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Device Brands
                  </button>
                  <button
                    onClick={() => setActiveDiagnosticTab('diagnostics')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-all ${
                      activeDiagnosticTab === 'diagnostics'
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Quick Check-In
                  </button>
                </div>

                {/* Visual Content Panels */}
                {activeDiagnosticTab === 'status' && (
                  <div className="space-y-3.5">
                    {/* Live Hardware Meter Cards */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/25 shadow-sm">
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                          <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5 text-cyan-400" /> CPU &amp; Motherboard</span>
                          <span className="text-emerald-400 font-mono font-bold">READY</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-[92%] animate-pulse"></div>
                        </div>
                        <p className="text-[10px] text-cyan-300/80 mt-1.5 font-medium">Component-Level Testing</p>
                      </div>

                      <div className="p-3 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/40 border border-purple-500/25 shadow-sm">
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                          <span className="flex items-center gap-1"><HardDrive className="w-3.5 h-3.5 text-purple-400" /> SSD &amp; Memory</span>
                          <span className="text-emerald-400 font-mono font-bold">READY</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full w-[96%]"></div>
                        </div>
                        <p className="text-[10px] text-purple-300/80 mt-1.5 font-medium">Speed &amp; Storage Upgrades</p>
                      </div>
                    </div>

                    {/* Interactive Device Health Card */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 via-[#0e1a33] to-[#15122e] border border-cyan-500/30 space-y-3 shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Laptop className="w-5 h-5 text-cyan-400" />
                          <span className="text-sm font-bold text-white">Picant Tech Diagnostic Bench</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                          Active Repair Mode
                        </span>
                      </div>

                      <div className="text-xs font-mono text-slate-200 space-y-1.5 bg-[#060a12] p-3 rounded-xl border border-slate-800">
                        <p className="text-cyan-300">&gt; Target: Desktop PCs, Laptops &amp; Apple MacBooks</p>
                        <p className="text-slate-300">&gt; Location: 5 Elmes St, off Edmund Cres, Yaba</p>
                        <p className="text-emerald-300">&gt; Status: Ready to diagnose your machine today</p>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-slate-300">Need rapid diagnostics?</span>
                        <button
                          onClick={() => onOpenBooking()}
                          className="text-xs font-bold text-cyan-300 hover:text-cyan-200 underline underline-offset-4 cursor-pointer"
                        >
                          Request Diagnostics &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeDiagnosticTab === 'specs' && (
                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-slate-900 to-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                      <span className="font-bold text-slate-200">Laptops &amp; MacBooks</span>
                      <span className="text-cyan-300 font-mono">Apple, HP, Dell, Lenovo, Asus</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-r from-slate-900 to-purple-950/40 border border-purple-500/30 flex items-center justify-between">
                      <span className="font-bold text-slate-200">Desktop PCs &amp; Towers</span>
                      <span className="text-purple-300 font-mono">Office Towers &amp; Gaming Rigs</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-r from-slate-900 to-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                      <span className="font-bold text-slate-200">Operating Systems</span>
                      <span className="text-emerald-300 font-mono">Windows 11/10, macOS, Linux</span>
                    </div>
                  </div>
                )}

                {activeDiagnosticTab === 'diagnostics' && (
                  <div className="space-y-2 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <div 
                        onClick={() => onOpenBooking('Power & Charging Issue')}
                        className="p-2.5 rounded-lg bg-gradient-to-br from-amber-950/40 to-slate-900 border border-amber-500/30 text-amber-200 font-medium cursor-pointer hover:border-amber-400 transition-colors"
                      >
                        ⚡ Power &amp; Charging
                      </div>
                      <div 
                        onClick={() => onOpenBooking('Screen & Display Replacement')}
                        className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 text-cyan-200 font-medium cursor-pointer hover:border-cyan-400 transition-colors"
                      >
                        🖥️ Screen &amp; Display
                      </div>
                      <div 
                        onClick={() => onOpenBooking('Slow Boot & SSD Upgrade')}
                        className="p-2.5 rounded-lg bg-gradient-to-br from-rose-950/40 to-slate-900 border border-rose-500/30 text-rose-200 font-medium cursor-pointer hover:border-rose-400 transition-colors"
                      >
                        🐌 Slow Boot &amp; Freezes
                      </div>
                      <div 
                        onClick={() => onOpenBooking('OS & Software Installation')}
                        className="p-2.5 rounded-lg bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30 text-emerald-200 font-medium cursor-pointer hover:border-emerald-400 transition-colors"
                      >
                        ⚙️ Clean OS Install
                      </div>
                    </div>
                    <div className="pt-2 text-center">
                      <button
                        onClick={() => onOpenBooking()}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:brightness-110 text-white font-bold shadow-md cursor-pointer transition-all"
                      >
                        Click Issue to Book Online &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* Bottom Quick Contact Strip */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    5 Elmes St, Yaba, Lagos
                  </span>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Picant%20Business%20Venture,%20I%20need%20help%20with%20my%20computer`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold"
                  >
                    <MessageSquareText className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct</span>
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
