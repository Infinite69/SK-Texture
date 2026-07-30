import React, { useState } from 'react';
import { Award, ShieldCheck, Layers, Sparkles, CheckCircle2, Droplets, Sun, ChevronRight, Building2 } from 'lucide-react';

export const About: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(2);

  const applicationLayers = [
    {
      step: 1,
      title: 'Deep Penetrating Anti-Damp Primer',
      desc: 'Formulated with nano-silicates that deeply penetrate porous brick or RCC concrete, neutralizing alkali efflorescence and guaranteeing zero peeling.',
      thickness: '0.2 mm',
      benefit: 'Seals moisture & prevents peeling'
    },
    {
      step: 2,
      title: 'Polymers Elastomeric Base Coat',
      desc: 'Micro-fiber reinforced flexible base coat capable of bridging structural hairline wall cracks up to 2mm while buffering thermal expansion.',
      thickness: '1.0 mm',
      benefit: '2mm Crack bridging & anti-microbial'
    },
    {
      step: 3,
      title: 'Bespoke SK Mineral Texture Matrix',
      desc: 'Hand-troweled or pneumatic spray-applied mineral matrix infused with crushed quartz, Italian slaked lime, or natural stone granules.',
      thickness: '1.5 - 3.5 mm',
      benefit: 'Authentic stone tactile depth'
    },
    {
      step: 4,
      title: 'Aquastop Hydrophobic Nano Sealer',
      desc: 'Clear lotus-effect topcoat that repels monsoon rainwater, prevents dust adhesion, and shields UV mineral pigments from sun fading.',
      thickness: '0.1 mm',
      benefit: 'Self-cleaning 5-year weather shield'
    }
  ];

  const clientLogos = [
    'DLF Luxury Housing',
    'M3M India',
    'IREO Grand Hyatt',
    'Central Park Estates',
    'Experion Developers',
    'Tata Housing',
    'Ansal API'
  ];

  return (
    <section id="about" className="py-24 bg-[#F5F2EB] dark:bg-[#1A1816] transition-colors duration-300 relative border-b border-[#E5DFD5] dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-mono text-amber-700 dark:text-amber-400 font-semibold">
              <Award className="w-4 h-4 text-amber-600" />
              <span>15+ Years of Architectural Mastery</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-neutral-900 dark:text-neutral-100 leading-[1.15]">
              Engineered for India’s Extreme Climate.{' '}
              <span className="italic font-normal text-stone-600 dark:text-stone-400 block sm:inline">
                Crafted for Modern Luxury.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
              Headquartered in Gurugram, <strong className="font-semibold text-neutral-900 dark:text-neutral-100">SK Texture</strong> specializes in formula-driven exterior wall claddings, Venetian marble plasters, raw beton concrete finishes, and weather-proofing coatings built to endure 50°C summer heat and heavy monsoon rain.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              We work directly alongside elite architectural firms, luxury villa owners, commercial tower directors, and top developers across Gurugram, Delhi NCR, and Pan India to create maintenance-free facade landmarks.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5DFD5] dark:border-neutral-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">5-Year Guarantee</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Non-fading, non-chalking, anti-peeling protection certificate</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">Master Artisan Applicators</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Safety-trained applicators with 10+ years troweling mastery</p>
                </div>
              </div>
            </div>

            {/* Developer Client Marquee Badges */}
            <div className="pt-4 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 block">
                Trusted By Renowned Architectural Partners & Developers:
              </span>
              <div className="flex flex-wrap gap-2">
                {clientLogos.map((client, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-3 py-1 bg-[#FDFBF7] dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs shadow-2xs"
                  >
                    • {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 4-Coat Application Anatomy */}
          <div className="lg:col-span-6 bg-[#FDFBF7] dark:bg-neutral-950 p-6 sm:p-8 rounded-sm border border-[#E5DFD5] dark:border-neutral-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#E5DFD5] dark:border-neutral-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold block">
                  Proprietary Application Engineering
                </span>
                <h3 className="font-serif text-2xl font-light text-neutral-900 dark:text-neutral-100 mt-1">
                  The Anatomy of SK 4-Coat System
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 font-mono rounded-xs border border-amber-300 dark:border-amber-800">
                4-Coat System
              </span>
            </div>

            {/* Layer Tabs */}
            <div className="grid grid-cols-4 gap-1 bg-[#F5F2EB] dark:bg-neutral-900 p-1 rounded-xs">
              {applicationLayers.map((layer, idx) => (
                <button
                  key={layer.step}
                  onClick={() => setActiveLayer(idx)}
                  className={`py-2 text-center text-xs font-mono font-bold uppercase transition-all rounded-xs ${
                    activeLayer === idx
                      ? 'bg-[#1C1917] text-white dark:bg-[#FDFBF7] dark:text-[#1C1917] shadow-sm'
                      : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  Coat {layer.step}
                </button>
              ))}
            </div>

            {/* Active Layer Card Detail */}
            <div className="p-5 bg-[#F5F2EB]/60 dark:bg-neutral-900/80 rounded-xs border border-[#E5DFD5] dark:border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {applicationLayers[activeLayer].title}
                </h4>
                <span className="text-xs font-mono px-2 py-0.5 bg-amber-600 text-white font-bold rounded-xs">
                  {applicationLayers[activeLayer].thickness}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                {applicationLayers[activeLayer].desc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-800 dark:text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Primary Shield: {applicationLayers[activeLayer].benefit}</span>
              </div>
            </div>

            {/* Visual Coat Stack Cards */}
            <div className="space-y-2 pt-1">
              {applicationLayers.map((layer, idx) => (
                <div
                  key={layer.step}
                  onClick={() => setActiveLayer(idx)}
                  className={`p-3.5 rounded-xs text-xs flex items-center justify-between cursor-pointer transition-all border ${
                    activeLayer === idx
                      ? 'bg-[#1C1917] text-white dark:bg-[#FDFBF7] dark:text-[#1C1917] border-[#1C1917] dark:border-white shadow-md font-bold'
                      : 'bg-[#FDFBF7] dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-[#E5DFD5] dark:border-neutral-800 hover:border-amber-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-amber-600 font-bold">0{layer.step}</span>
                    <span>{layer.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
