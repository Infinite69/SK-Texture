import React from 'react';
import { ShieldCheck, Award, Sun, Droplets, Sparkles, Flame, CheckCircle2, Building2, X } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: '15+ Years Engineering Mastery',
      desc: 'Proven track record in exterior wall textures, decorative coatings, and weatherproofing across Pan-India.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: 'Imported Raw Material Matrix',
      desc: 'Formulated with high-purity slaked lime, pure acrylic resins, natural quartz chips, and lightfast mineral pigments.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: 'Certified Master Applicators',
      desc: 'Trained, safety-certified artisans with decade-long experience in trowel burnishing and pneumatic spray precision.'
    },
    {
      icon: <Sun className="w-6 h-6 text-amber-600" />,
      title: '50°C Sun & UV Non-Chalking',
      desc: 'Tested against scorching summer UV exposure without cracking, peeling, or chalking for 10+ years.'
    },
    {
      icon: <Droplets className="w-6 h-6 text-amber-600" />,
      title: 'Hydrophobic Nanotechnology',
      desc: 'Lotus-effect silane-siloxane sealers that repel monsoon rainwater while letting internal moisture vapor escape.'
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-600" />,
      title: 'Cool Wall Solar Heat Reflection',
      desc: 'Reflects up to 88% solar infrared heat rays, lowering interior wall surface temperatures by up to 7°C.'
    }
  ];

  const comparisonRows = [
    { feature: 'Performance Guarantee', sk: '5 Years Warranty', paint: '1-2 Years (Oral Only)', local: 'None' },
    { feature: 'Waterproofing & Algae Shield', sk: 'Aquastop Lotus Sealer (10/10)', paint: 'Prone to Damp & Black Mold', local: 'Peels after 1 Monsoon' },
    { feature: 'Crack Bridging Capacity', sk: 'Bridging up to 2.0mm cracks', paint: 'Fails at hairline 0.2mm', local: 'No Crack Protection' },
    { feature: 'UV Fading & Sun Chalking', sk: 'Lightfast Mineral Pigments', paint: 'Fades in 18 Months', local: 'Discolors Rapidly' },
    { feature: 'On-Site Sample Mockups', sk: 'Free 1x1 ft Custom Mockup Board', paint: 'Small Paper Shade Cards', local: 'No Sample Provided' }
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#121110] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 font-semibold">
            Uncompromising Engineering
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-neutral-900 dark:text-neutral-100">
            Why Architects & Builders Choose SK Texture
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light">
            Engineered for durability, zero maintenance, and architectural elegance.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F5F2EB]/80 dark:bg-neutral-900/60 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs hover:border-amber-600 transition-all duration-300 hover:shadow-xl space-y-4"
            >
              <div className="p-3 bg-[#FDFBF7] dark:bg-neutral-800 w-fit rounded-xs shadow-2xs border border-[#E5DFD5] dark:border-neutral-700">
                {p.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-[#F5F2EB] dark:bg-neutral-900 p-6 sm:p-10 rounded-xs border border-[#E5DFD5] dark:border-neutral-800 space-y-6 shadow-sm">
          <div className="space-y-1 text-center max-w-xl mx-auto">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
              Direct Comparison
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-neutral-900 dark:text-neutral-100">
              SK Texture vs Traditional Paint
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-[#E5DFD5] dark:border-neutral-700 text-stone-500 font-mono uppercase">
                  <th className="py-3 px-4">Performance Criteria</th>
                  <th className="py-3 px-4 text-amber-700 dark:text-amber-400 font-bold bg-[#FDFBF7] dark:bg-neutral-950">SK Texture 4-Coat System</th>
                  <th className="py-3 px-4">Standard Exterior Paint</th>
                  <th className="py-3 px-4">Local Unorganized Contractor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD5] dark:divide-neutral-800">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FDFBF7]/60 dark:hover:bg-neutral-800/40">
                    <td className="py-3.5 px-4 font-semibold text-neutral-900 dark:text-neutral-100">{row.feature}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-800 dark:text-emerald-400 bg-[#FDFBF7] dark:bg-neutral-950 border-x border-[#E5DFD5] dark:border-neutral-800">
                      ✓ {row.sk}
                    </td>
                    <td className="py-3.5 px-4 text-neutral-600 dark:text-neutral-400">{row.paint}</td>
                    <td className="py-3.5 px-4 text-neutral-500">{row.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
