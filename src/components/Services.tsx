import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/services';
import { ServiceItem } from '../types';
import { Layers, ShieldCheck, Sparkles, ArrowRight, Check, CheckCircle2, ChevronRight, X, Building2, Droplets, Sun, Paintbrush } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onBookSiteVisit: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onBookSiteVisit }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#FDFBF7] dark:bg-[#121110] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-700 dark:text-amber-400 font-semibold">
            End-to-End Surface Engineering
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-neutral-900 dark:text-neutral-100 tracking-tight">
            Our Architectural Services.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
            From luxury villa facades to commercial high-rise restorations and interior Venetian plasters — delivered with 5-year performance guarantees.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveModalService(service)}
              className="group bg-[#F5F2EB]/70 dark:bg-[#1A1816]/80 border border-[#E5DFD5] dark:border-neutral-800 p-8 rounded-xs hover:border-amber-600 dark:hover:border-amber-500 transition-all duration-300 shadow-xs hover:shadow-2xl flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-6">
                {/* Header Icon & Code */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#FDFBF7] dark:bg-neutral-900 rounded-xs border border-[#E5DFD5] dark:border-neutral-700 text-amber-600 shadow-2xs group-hover:scale-110 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 bg-[#1C1917] text-white dark:bg-white dark:text-[#1C1917] uppercase rounded-xs font-bold">
                    5 Year Warranty
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block">
                    Category: {service.category}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Benefits List Preview */}
                <ul className="space-y-1.5 pt-2 border-t border-[#E5DFD5] dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 font-light">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-6 mt-6 border-t border-[#E5DFD5]/80 dark:border-neutral-800 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 transition-colors">
                <span>View Full Scope & Specs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Scope Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
          <div className="bg-[#FDFBF7] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 max-w-3xl w-full rounded-xs overflow-hidden shadow-2xl relative my-auto p-6 sm:p-8 space-y-6">
            
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 text-stone-500 hover:text-neutral-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
                Service Specification Sheet
              </span>
              <h3 className="font-serif text-3xl font-light text-neutral-900 dark:text-neutral-100 mt-1">
                {activeModalService.title}
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-1">
                Warranty: 5 Years • Category: {activeModalService.category}
              </p>
            </div>

            <p className="text-sm text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
              {activeModalService.longDesc}
            </p>

            {/* Scope Features */}
            <div className="space-y-3 p-4 bg-[#F5F2EB] dark:bg-neutral-800/60 rounded-xs border border-[#E5DFD5] dark:border-neutral-700">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-neutral-100 font-bold">
                Key Scope & Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                {activeModalService.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setActiveModalService(null);
                  onBookSiteVisit();
                }}
                className="flex-1 py-3.5 bg-[#1C1917] text-white dark:bg-white dark:text-[#1C1917] text-xs uppercase font-bold tracking-wider hover:bg-neutral-800 transition-colors shadow-lg"
              >
                Book Free On-Site Survey For This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
