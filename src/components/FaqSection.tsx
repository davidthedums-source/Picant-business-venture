import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';
import { FAQ_LIST, BUSINESS_INFO } from '../data/content';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#090e1a] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Got Questions? We Have Answers.
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Clear information about our computer repair processes, location in Yaba, and turnaround time.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq: FaqItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-cyan-300 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-white text-base sm:text-lg font-display">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Assistance Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Have a specific question not covered here?</h4>
            <p className="text-xs sm:text-sm text-slate-400">Speak directly with our technician on WhatsApp or via a quick phone call.</p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Picant%20Business%20Venture,%20I%20have%20a%20question%20about%20your%20repair%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
