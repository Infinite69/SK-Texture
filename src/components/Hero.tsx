import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Sparkles, Building2, ShieldCheck, MapPin, Award, CheckCircle2, ChevronRight, Eye, Layers } from 'lucide-react';

interface HeroProps {
  onOpenSiteVisit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSiteVisit }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Italian Travertine & Venetian Stucco',
      subtitle: 'Hand-troweled slaked lime plaster with deep marble veins for luxury villa facades and high-end living rooms.',
      code: 'SK-MRB-01',
      category: 'Marble Plaster',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90',
      specs: { sheen: 'Satin Sheen', thickness: '2.5 mm', warranty: '5 Years', waterProof: '10/10' }
    },
    {
      title: 'Board-Formed Fairface Concrete',
      subtitle: 'Raw architectural beton microcement texture for modern minimal interiors, feature walls, and corporate towers.',
      code: 'SK-CNC-02',
      category: 'Exposed Beton',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=90',
      specs: { sheen: 'Raw Matte', thickness: '3.0 mm', warranty: '5 Years', waterProof: '10/10' }
    },
    {
      title: 'Tuscan Earth Granular Facade',
      subtitle: 'Granular stone plaster engineered to withstand 50°C summer heat & heavy monsoon rain without cracking or fading.',
      code: 'SK-RST-04',
      category: 'Rustic Finish',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2000&q=90',
      specs: { sheen: 'Natural Grain', thickness: '3.5 mm', warranty: '5 Years', waterProof: '10/10' }
    },
    {
      title: 'Natural Quartz & Granite Granules',
      subtitle: 'Crushed mineral chip matrix delivering indestructible exterior cladding for commercial towers & luxury estates.',
      code: 'SK-GRN-08',
      category: 'Granite Matrix',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90',
      specs: { sheen: 'Mineral Sparkle', thickness: '2.0 mm', warranty: '5 Years', waterProof: '10/10' }
    }
  ];

  // Auto-rotate hero slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[activeSlide];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[#121110] text-white">
      {/* Background Slides with Cross-Fade Transition */}
      {slides.map((slide, idx) => (
        <div
          key={slide.code}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.1] transition-transform duration-[10000ms] ease-linear transform scale-105 hover:scale-100"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Dark Gradient Vignette for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/50 to-[#121110]/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#121110]/40 to-[#121110]/90" />
        </div>
      ))}

      {/* Main Hero Header Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-6 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Main Editorial Text Column */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#D4C9B8]/30 bg-neutral-900/80 backdrop-blur-md text-[#E5DFD5] text-xs tracking-[0.22em] uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>SK Texture • Gurugram • Delhi NCR • Pan India</span>
            </div>

            {/* Dynamic Headline */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-[0.3em] block">
                Finish Code: {current.code} • {current.category}
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#FDFBF7] leading-[1.06]">
                Architectural Wall Finishes{' '}
                <span className="italic font-normal text-[#D4C9B8] block sm:inline">
                  Crafted for Eternity.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed font-sans">
              {current.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenSiteVisit}
                className="px-8 py-4 bg-[#FDFBF7] text-[#121110] hover:bg-white text-xs uppercase tracking-[0.2em] font-bold shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group cursor-pointer border border-white"
              >
                <Calendar className="w-4 h-4 text-amber-700 group-hover:scale-110 transition-transform" />
                <span>Book Free Site Visit & Samples</span>
                <ArrowRight className="w-4 h-4 text-neutral-700 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#catalogue"
                className="px-8 py-4 bg-neutral-900/80 hover:bg-neutral-800 text-[#FDFBF7] border border-neutral-700/80 text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-md transition-all flex items-center justify-center gap-3 text-center"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Explore Swatch Catalogue</span>
              </a>
            </div>

            {/* Interactive Slide Selector Tabs */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap gap-2 sm:gap-3">
              {slides.map((s, idx) => (
                <button
                  key={s.code}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-3 py-2 rounded-xs text-[11px] font-mono tracking-wider transition-all flex items-center gap-2 ${
                    activeSlide === idx
                      ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                      : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  <span className="opacity-60">0{idx + 1}</span>
                  <span>{s.category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Floating Architectural Spec Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#1C1918]/85 backdrop-blur-xl border border-neutral-700/60 p-6 rounded-sm shadow-2xl space-y-6 animate-in fade-in duration-500">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  Live Material Specimen
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded-xs border border-amber-500/30">
                  {current.code}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-light text-white">{current.title}</h3>
                <p className="text-xs text-neutral-400 font-light">{current.category} Architectural Finish</p>
              </div>

              {/* Spec Metrics */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-900/60 rounded-xs border border-neutral-800">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Surface Sheen</span>
                  <span className="font-semibold text-neutral-200">{current.specs.sheen}</span>
                </div>
                <div className="p-3 bg-neutral-900/60 rounded-xs border border-neutral-800">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Coat Thickness</span>
                  <span className="font-semibold text-neutral-200">{current.specs.thickness}</span>
                </div>
                <div className="p-3 bg-neutral-900/60 rounded-xs border border-neutral-800">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Water Resistance</span>
                  <span className="font-semibold text-emerald-400">{current.specs.waterProof}</span>
                </div>
                <div className="p-3 bg-neutral-900/60 rounded-xs border border-neutral-800">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Written Warranty</span>
                  <span className="font-semibold text-amber-400">{current.specs.warranty}</span>
                </div>
              </div>

              <button
                onClick={onOpenSiteVisit}
                className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Physical Sample Board</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Trust Metrics Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl p-5 sm:p-6 rounded-sm">
          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[#FDFBF7]">15+</span>
              <span className="text-stone-400 font-light text-xs">Years</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Texture Engineering</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[#FDFBF7]">100+</span>
              <span className="text-stone-400 font-light text-xs">Projects</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Luxury Landmarks Executed</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[#FDFBF7]">5</span>
              <span className="text-amber-400 font-light text-xs">Years</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Performance Guarantee</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-light text-stone-300">Gurugram</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Headquarters & Studio</p>
          </div>
        </div>
      </div>
    </section>
  );
};
