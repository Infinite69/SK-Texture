import React from 'react';
import { Calendar, MessageSquare, Layers, CheckCircle, Shield, Paintbrush, Search, Flag } from 'lucide-react';

export const Process: React.FC = () => {
  const processSteps = [
    { num: '01', title: 'Site Inspection', desc: 'On-site wall moisture check & digital laser measurements in Gurugram / NCR.', icon: <Calendar className="w-5 h-5 text-amber-600" /> },
    { num: '02', title: 'Consultation', desc: 'Architectural moodboard alignment & texture compatibility assessment.', icon: <MessageSquare className="w-5 h-5 text-amber-600" /> },
    { num: '03', title: 'Texture Selection', desc: 'Choosing shades, sheen ratings, and coat thicknesses from our catalogue.', icon: <Layers className="w-5 h-5 text-amber-600" /> },
    { num: '04', title: '1x1 Sample Signoff', desc: 'Real physical patch troweled on your actual wall for client & architect signoff.', icon: <CheckCircle className="w-5 h-5 text-amber-600" /> },
    { num: '05', title: 'Surface Prep', desc: 'Washing debris, filling cracks up to 2mm, and applying anti-damp silicate primer.', icon: <Shield className="w-5 h-5 text-amber-600" /> },
    { num: '06', title: 'Master Application', desc: 'Precision hand-troweling or spray texture execution by safety-certified master artisans.', icon: <Paintbrush className="w-5 h-5 text-amber-600" /> },
    { num: '07', title: 'Quality Inspection', desc: 'Multi-point inspection of coat thickness, color uniformity, and sheen consistency.', icon: <Search className="w-5 h-5 text-amber-600" /> },
    { num: '08', title: 'Handover & Warranty', desc: 'Final site handover with a 5-year performance guarantee.', icon: <Flag className="w-5 h-5 text-amber-600" /> },
  ];

  return (
    <section id="process" className="py-24 bg-[#F5F2EB] dark:bg-[#1A1816] transition-colors duration-300 overflow-hidden border-b border-[#E5DFD5] dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 font-semibold">
            Precision Execution Protocol
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-neutral-900 dark:text-neutral-100">
            Our 8-Step Application Process
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
            Every square foot follows a strict architectural protocol to guarantee 10+ year flawless durability.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-[#FDFBF7] dark:bg-neutral-950 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs shadow-xs space-y-4 relative group hover:border-amber-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-stone-300 dark:text-neutral-700 group-hover:text-amber-600 transition-colors">
                  {step.num}
                </span>
                <div className="p-2 bg-[#F5F2EB] dark:bg-neutral-900 rounded-xs">
                  {step.icon}
                </div>
              </div>

              <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {step.title}
              </h3>

              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
