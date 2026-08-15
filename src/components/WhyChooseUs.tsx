import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Zap, 
  HeartHandshake, 
  Award, 
  MapPin, 
  CheckCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS, BUSINESS_INFO } from '../data/content';
import { WhyChooseItem } from '../types';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-cyan-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-cyan-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-cyan-400" />;
      default:
        return <CheckCircle className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 relative bg-[#090e1a] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <span>Commitment to Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Why Customers Choose Picant
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            We combine practical technical know-how with transparent communication and dependable turnaround to keep your computer systems in top shape.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_ITEMS.map((item: WhyChooseItem) => (
            <div
              key={item.id}
              id={`why-choose-${item.id}`}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 font-display">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.id === 'convenient-location' && (
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>View Address on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
