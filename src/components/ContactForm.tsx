import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, Laptop, Cpu, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/content';
import { RepairBookingData } from '../types';

interface ContactFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService = '', onSuccess }) => {
  const [formData, setFormData] = useState<RepairBookingData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    deviceType: 'Laptop',
    serviceNeeded: initialService || 'Computer Repair',
    preferredContact: 'phone',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{ id: string; time: string } | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  const deviceTypes = [
    'Laptop (Windows)',
    'Apple MacBook',
    'Desktop PC (Tower)',
    'All-in-One PC',
    'Custom Workstation / Gaming PC',
    'Other Technology Device'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const ticketId = `PBV-${Math.floor(100000 + Math.random() * 900000)}`;
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setSubmittedTicket({ id: ticketId, time: now });
      setIsSubmitting(false);

      if (onSuccess) {
        onSuccess();
      }
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Picant Business Venture!\nMy Name: ${formData.fullName || 'Customer'}\nDevice: ${formData.deviceType}\nService Needed: ${formData.serviceNeeded}\nPhone: ${formData.phoneNumber}\nIssue details: ${formData.message || 'I need computer repair assistance.'}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  if (submittedTicket) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0c1629] to-[#070b14] border border-cyan-500/40 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60">
            Request Reference: {submittedTicket.id}
          </span>
          <h3 className="text-2xl font-bold text-white font-display">
            Request Received Successfully!
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you, <strong className="text-cyan-300">{formData.fullName}</strong>. Our technician at 5 Elmes Street, Yaba will review your details and contact you via your preferred channel ({formData.preferredContact}).
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left text-xs space-y-1.5 text-slate-300 max-w-md mx-auto">
          <div className="flex justify-between">
            <span className="text-slate-400">Device:</span>
            <span className="font-semibold text-white">{formData.deviceType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Service:</span>
            <span className="font-semibold text-white">{formData.serviceNeeded}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Phone:</span>
            <span className="font-semibold text-cyan-300">{formData.phoneNumber}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Copy to WhatsApp Technician</span>
          </button>

          <button
            onClick={() => {
              setSubmittedTicket(null);
              setFormData({
                fullName: '',
                phoneNumber: '',
                email: '',
                deviceType: 'Laptop',
                serviceNeeded: 'Computer Repair',
                preferredContact: 'phone',
                message: ''
              });
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs sm:text-sm font-semibold border border-slate-700"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="repair-contact-form">
      {/* Full Name & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1.5">
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="form-full-name"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Chukwuma Obi"
            className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1.5">
            Phone Number <span className="text-cyan-400">*</span>
          </label>
          <input
            id="form-phone-number"
            type="tel"
            required
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="e.g. 0808 123 4567"
            className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Email Address */}
      <div>
        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
          Email Address <span className="text-slate-400 text-[11px]">(Optional for updates)</span>
        </label>
        <input
          id="form-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. name@example.com"
          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all"
        />
      </div>

      {/* Device Type & Problem/Service Needed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1.5">
            Device Type <span className="text-cyan-400">*</span>
          </label>
          <select
            id="form-device-type"
            value={formData.deviceType}
            onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all"
          >
            {deviceTypes.map((type) => (
              <option key={type} value={type} className="bg-[#0b1322] text-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1.5">
            Problem / Service Needed <span className="text-cyan-400">*</span>
          </label>
          <select
            id="form-service-needed"
            value={formData.serviceNeeded}
            onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all"
          >
            {SERVICES_LIST.map((srv) => (
              <option key={srv.id} value={srv.title} className="bg-[#0b1322] text-white">
                {srv.title}
              </option>
            ))}
            <option value="General Troubleshooting" className="bg-[#0b1322] text-white">
              General Computer Troubleshooting
            </option>
            <option value="Hardware Replacement / Upgrade" className="bg-[#0b1322] text-white">
              Hardware Replacement / Upgrade
            </option>
          </select>
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-xs font-semibold text-slate-200 mb-2">
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-3 gap-3">
          <label
            className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
              formData.preferredContact === 'phone'
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              checked={formData.preferredContact === 'phone'}
              onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
              className="sr-only"
            />
            <Phone className="w-3.5 h-3.5" />
            <span>Phone Call</span>
          </label>

          <label
            className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
              formData.preferredContact === 'whatsapp'
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <input
              type="radio"
              name="preferredContact"
              value="whatsapp"
              checked={formData.preferredContact === 'whatsapp'}
              onChange={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
              className="sr-only"
            />
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </label>

          <label
            className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
              formData.preferredContact === 'email'
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <input
              type="radio"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === 'email'}
              onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
              className="sr-only"
            />
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>Email</span>
          </label>
        </div>
      </div>

      {/* Message / Symptom Details */}
      <div>
        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
          Message &amp; Problem Details
        </label>
        <textarea
          id="form-message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe the issue (e.g. screen is flickering, won't turn on, overheating, needs Windows installation)..."
          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          id="form-submit-request-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl cyan-gradient-btn text-white font-bold text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Processing Request...' : 'Submit Request'}</span>
        </button>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
        <span>📍 Workshop: 5 Elmes Street, Yaba, Lagos</span>
        <span>📞 0808 132 2738</span>
      </div>
    </form>
  );
};
