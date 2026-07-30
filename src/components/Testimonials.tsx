import React from 'react';
import { TESTIMONIALS_LIST } from '../data/testimonials';
import { Star, Quote, Building2, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F2EB] dark:bg-[#1A1816] transition-colors duration-300 border-b border-[#E5DFD5] dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 font-semibold">
            Endorsements of Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-neutral-900 dark:text-neutral-100">
            Trusted by Builders & Principal Architects
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
            Verified reviews from villa owners, estate developers, and architectural studio leads in Gurugram & Delhi NCR.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-[#FDFBF7] dark:bg-neutral-950 p-8 rounded-xs border border-[#E5DFD5] dark:border-neutral-800 shadow-md flex flex-col justify-between space-y-6 relative"
            >
              <Quote className="w-10 h-10 text-[#E5DFD5] dark:text-neutral-800 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 font-light italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#E5DFD5] dark:border-neutral-800">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#E5DFD5] dark:border-neutral-700"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-neutral-900 dark:text-neutral-100">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-500 font-mono">{item.role}</p>
                  <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                    {item.companyOrLocation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
