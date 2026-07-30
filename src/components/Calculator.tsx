import React, { useState } from 'react';
import { Calculator as CalcIcon, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CalculatorProps {
  onBookSiteVisit: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onBookSiteVisit }) => {
  const [wallWidth, setWallWidth] = useState<number>(30);
  const [wallHeight, setWallHeight] = useState<number>(10);
  const [numberOfWalls, setNumberOfWalls] = useState<number>(4);
  const [finishTier, setFinishTier] = useState<'rustic' | 'concrete' | 'marble' | 'granules' | 'waterproof'>('concrete');

  const rates = {
    rustic: { name: 'Tuscan Rustic Stone', rateSqFt: 65, desc: 'Deep granular stone texture for facades' },
    concrete: { name: 'Board-Formed Fairface Concrete', rateSqFt: 85, desc: 'Architectural raw beton microcement' },
    marble: { name: 'Italian Stucco Venetian Polish', rateSqFt: 125, desc: 'High-gloss Venetian plaster finish' },
    granules: { name: 'Natural Quartz & Granite Granules', rateSqFt: 75, desc: 'Crushed granite matrix' },
    waterproof: { name: 'Aquastop Hydrophobic Shield', rateSqFt: 55, desc: 'Hydrophobic anti-crack weather shield' }
  };

  const totalAreaSqFt = Math.max(10, wallWidth * wallHeight * numberOfWalls);
  const selectedRate = rates[finishTier];
  const baseCost = totalAreaSqFt * selectedRate.rateSqFt;
  const estimatedDays = Math.ceil(totalAreaSqFt / 1200);

  return (
    <section id="calculator" className="py-24 bg-[#F5F2EB] dark:bg-[#1A1816] transition-colors duration-300 border-b border-[#E5DFD5] dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 font-semibold">
            <CalcIcon className="w-4 h-4 text-amber-600" />
            <span>Instant Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-neutral-900 dark:text-neutral-100">
            Wall Texture Area & Cost Calculator
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
            Calculate estimated surface area and material budget for your villa, apartment, or commercial tower in Gurugram / NCR.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FDFBF7] dark:bg-neutral-950 border border-[#E5DFD5] dark:border-neutral-800 p-6 sm:p-10 rounded-xs shadow-xl">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100 border-b border-[#E5DFD5] dark:border-neutral-800 pb-3">
              1. Project Dimensions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                  Wall Width (Ft)
                </label>
                <input
                  type="number"
                  min="1"
                  value={wallWidth}
                  onChange={(e) => setWallWidth(Math.max(1, Number(e.target.value)))}
                  className="w-full p-3 text-sm font-mono bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                  Wall Height (Ft)
                </label>
                <input
                  type="number"
                  min="1"
                  value={wallHeight}
                  onChange={(e) => setWallHeight(Math.max(1, Number(e.target.value)))}
                  className="w-full p-3 text-sm font-mono bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                  No. of Walls / Sides
                </label>
                <input
                  type="number"
                  min="1"
                  value={numberOfWalls}
                  onChange={(e) => setNumberOfWalls(Math.max(1, Number(e.target.value)))}
                  className="w-full p-3 text-sm font-mono bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
                />
              </div>
            </div>

            {/* Finish Tier Selection */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100 border-b border-[#E5DFD5] dark:border-neutral-800 pb-3">
                2. Select Texture Finish Class
              </h3>

              <div className="space-y-2">
                {(Object.keys(rates) as Array<keyof typeof rates>).map((key) => {
                  const item = rates[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setFinishTier(key)}
                      className={`w-full p-3.5 rounded-xs border text-left flex items-center justify-between transition-all ${
                        finishTier === key
                          ? 'border-[#1C1917] bg-[#1C1917] text-white dark:border-white dark:bg-white dark:text-[#1C1917] font-bold shadow-sm'
                          : 'border-[#E5DFD5] dark:border-neutral-800 text-stone-700 dark:text-stone-300 bg-[#F5F2EB]/50 dark:bg-neutral-900/50 hover:bg-[#F5F2EB]'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-bold uppercase">{item.name}</span>
                        <span className="text-[11px] opacity-80 font-light">{item.desc}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-500">
                        ₹{item.rateSqFt} / sq.ft.
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Instant Summary Output Column */}
          <div className="lg:col-span-5 bg-[#1C1917] text-white p-6 sm:p-8 rounded-xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Estimated Summary</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-600 text-white font-bold rounded-xs">10-Yr Warranty</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Total Surface Area</span>
                  <p className="font-serif text-3xl font-bold text-[#FDFBF7]">
                    {totalAreaSqFt.toLocaleString()} <span className="text-sm font-sans font-light text-neutral-400">sq. ft.</span>
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Selected Material & Finish</span>
                  <p className="text-sm font-semibold text-amber-400">{selectedRate.name}</p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Estimated Turnaround</span>
                  <p className="text-sm font-medium text-neutral-200">{estimatedDays} - {estimatedDays + 2} Application Days</p>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Approximate Budget Range</span>
                  <p className="font-serif text-3xl sm:text-4xl font-bold text-[#FDFBF7] mt-1">
                    ₹{baseCost.toLocaleString()} <span className="text-xs text-neutral-400 font-sans font-normal">*incl. materials & labor</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <button
                onClick={onBookSiteVisit}
                className="w-full py-4 bg-[#FDFBF7] text-[#1C1917] hover:bg-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span>Book Free On-Site Measurement</span>
                <ArrowRight className="w-4 h-4 text-amber-700" />
              </button>
              <p className="text-[10px] text-center text-neutral-400">
                *Final quotation confirmed after on-site wall inspection & 1x1 ft physical sample approval in Gurugram / NCR.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
