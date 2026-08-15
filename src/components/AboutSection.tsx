import React, { useState } from 'react';
import { Shield, Users, CheckCircle, ArrowRight, X, Building2, Laptop, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#070b14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>About Our Company</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              About Picant Business Venture
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Picant Business Venture is a dedicated computer repair and technology services enterprise based in Yaba, Lagos, Nigeria. We provide high-quality, dependable repair solutions and technical support for individuals, students, professionals, and growing businesses.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Whether you are dealing with a laptop that will not power on, a desktop system experiencing persistent crashes, or require specialized software installations and preventive maintenance, our team is equipped with the diagnostic tools and practical technical skill to resolve the problem right.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">For Individuals</h4>
                  <p className="text-xs text-slate-400">Personal &amp; student laptops</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">For Businesses</h4>
                  <p className="text-xs text-slate-400">Office workstations &amp; IT care</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-learn-more-btn"
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:border-cyan-500/50"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>

              <button
                id="about-book-btn"
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl cyan-gradient-btn text-white font-semibold text-sm transition-all shadow-md cursor-pointer hover:brightness-110"
              >
                <span>Book a Service</span>
              </button>
            </div>
          </div>

          {/* Right Column: Workshop Profile & Standards */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0c1527] to-[#080d1a] border border-slate-700/60 p-7 lg:p-9 shadow-xl">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">Service Guarantee</span>
                    <h3 className="text-xl font-bold text-white font-display mt-0.5">“We Fix It. We Make It Work.”</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Honest Diagnostics:</strong> Clear explanation of what needs fixing before proceeding with any repair.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Safety &amp; Data Care:</strong> Careful handling to protect your valuable personal and business data.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Prompt Communication:</strong> Regular status updates so you always know when your device is ready.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Accessible Support:</strong> Easy phone and WhatsApp contact whenever you need quick answers.
                    </div>
                  </div>
                </div>

                {/* Location Quick Snippet */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Located at {BUSINESS_INFO.address}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Learn More Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#0b1322] border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white font-display">Picant Business Venture</h3>
                <p className="text-xs text-cyan-400">Computer Repair &amp; Technology Services &bull; Yaba, Lagos</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                <strong>Picant Business Venture</strong> was established to provide reliable, professional, and accessible computer repair and technology support services in Yaba, Lagos Mainland.
              </p>

              <h4 className="text-base font-bold text-white font-display pt-2">Our Mission</h4>
              <p>
                Our mission is encapsulated in our core tagline: <em>“We Fix It. We Make It Work.”</em> We strive to eliminate computer downtime and technical frustration for students, professionals, and businesses through thorough diagnostic methodology and meticulous repair standards.
              </p>

              <h4 className="text-base font-bold text-white font-display pt-2">What Sets Us Apart</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li>Hands-on experience with a wide spectrum of desktop and laptop hardware architectures.</li>
                <li>Clear and honest diagnosis before carrying out any repairs.</li>
                <li>Fast turnaround so your productivity is never delayed unnecessarily.</li>
                <li>Conveniently located in Yaba, accessible from anywhere across Lagos Mainland.</li>
              </ul>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-semibold text-white">Workshop Address:</div>
                <div className="text-cyan-300">5 Elmes Street, off Edmund Crescent, Yaba, Lagos, Nigeria</div>
                <div className="text-xs text-slate-400">Phone: 0808 132 2738</div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-sm font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setModalOpen(false);
                  onOpenBooking();
                }}
                className="px-5 py-2.5 rounded-xl cyan-gradient-btn text-white text-sm font-semibold shadow-md"
              >
                Book a Repair
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
