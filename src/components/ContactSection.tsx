import React, { useRef } from 'react';
import { Phone, MapPin, Navigation, Mail, Clock, MessageSquare, ArrowUpRight, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { ContactForm } from './ContactForm';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('form-full-name');
    nameInput?.focus();
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#070b14] border-t border-slate-800/80">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Visit or Reach Out</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Contact Picant Business Venture
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Have a question or need your computer fixed? Contact our team or drop by our workshop in Yaba, Lagos.
          </p>
        </div>

        {/* Contact Grid: Info & Map on Left, Booking Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Contact Details & Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="rounded-3xl bg-gradient-to-b from-[#0e172a] to-[#091122] border border-cyan-500/25 p-7 sm:p-8 shadow-xl space-y-6">
              
              <div>
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  Technology Services
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-slate-400 italic mt-0.5">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Workshop Address
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Direct Phone Line
                  </h4>
                  <p className="text-base font-extrabold text-cyan-300 mt-0.5 font-mono">
                    {BUSINESS_INFO.phone}
                  </p>
                  <p className="text-[11px] text-slate-400">Voice calls &amp; WhatsApp inquiries</p>
                </div>
              </div>

              {/* Action Buttons: Call Now, Get Directions, Send an Enquiry */}
              <div className="space-y-2.5 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Call Now */}
                  <a
                    id="contact-call-now-btn"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="py-3.5 px-4 rounded-xl cyan-gradient-btn text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:brightness-110 active:scale-98 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  {/* Get Directions */}
                  <a
                    id="contact-get-directions-btn"
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Navigation className="w-4 h-4 text-cyan-400" />
                    <span>Get Directions</span>
                  </a>
                </div>

                {/* Send an Enquiry Button */}
                <button
                  id="contact-send-enquiry-btn"
                  onClick={scrollToForm}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-cyan-300 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>Send an Enquiry Below</span>
                </button>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{BUSINESS_INFO.operatingHours}</span>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-2 overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-3 py-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Yaba Map Preview
                </span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline inline-flex items-center gap-1 text-[11px]"
                >
                  Open in Google Maps <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-950 relative">
                <iframe
                  title="Picant Business Venture Location Map"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div ref={formRef} className="lg:col-span-7">
            <div className="rounded-3xl bg-[#09101d] border border-slate-800 p-7 sm:p-10 shadow-2xl relative">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Online Service Booking
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Book a Repair or Request Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill in your device details and issue. We respond promptly.
                </p>
              </div>

              <ContactForm initialService={initialService} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
