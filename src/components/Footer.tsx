import React from 'react';
import { Phone, Mail, MapPin, Globe, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800 pt-16 pb-12 transition-colors">
      {/* Schema Markup for Google Local Business SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "SK Texture",
            "description": "Premium Exterior & Interior Wall Textures Built to Last",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "303, The Solitaire Plaza",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "addressCountry": "IN"
            },
            "telephone": "+919811221010",
            "email": "sktexture1@gmail.com",
            "url": "https://www.sktexture.com"
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-stone-100 text-stone-900 font-serif font-bold text-xl flex items-center justify-center">
                SK
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                SK <span className="text-stone-400 font-sans text-lg font-light">TEXTURE</span>
              </span>
            </div>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Gurugram’s premier architectural wall texture company. Delivering Italian marble plasters, rustic stone finishes, board-formed concrete, and waterproof coatings for 15+ years.
            </p>

            <div className="flex items-center gap-3 pt-2 text-stone-400">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 border border-neutral-800 rounded-full hover:text-white hover:border-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 border border-neutral-800 rounded-full hover:text-white hover:border-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 border border-neutral-800 rounded-full hover:text-white hover:border-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400">Navigation</h4>
            <ul className="space-y-2 text-xs text-neutral-300 font-light">
              <li><a href="#about" className="hover:text-white">About SK Texture</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#catalogue" className="hover:text-white">Texture Catalogue</a></li>
              <li><a href="#projects" className="hover:text-white">Projects Case Studies</a></li>
              <li><a href="#visualizer" className="hover:text-white">Interactive Wall Studio</a></li>
              <li><a href="#calculator" className="hover:text-white">Cost Calculator</a></li>
              <li><a href="#contact" className="hover:text-white">Contact & Map</a></li>
            </ul>
          </div>

          {/* Popular Textures */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400">Signature Finishes</h4>
            <ul className="space-y-2 text-xs text-neutral-300 font-light">
              <li>Carrara Stucco Polish (SK-MRB-01)</li>
              <li>Board-Formed Concrete (SK-CNC-02)</li>
              <li>Tuscan Rustic Grain (SK-RST-04)</li>
              <li>Quartz Mineral Granules (SK-GRN-08)</li>
              <li>Satin Pearl Parlina (SK-PRL-03)</li>
              <li>Aquastop Waterproof Shield</li>
            </ul>
          </div>

          {/* Address Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400">Headquarters</h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              303, The Solitaire Plaza,<br />
              Gurugram, Haryana, India
            </p>
            <p className="text-xs text-neutral-300 font-mono">
              Phone: 9811221010 <br />
              Email: sktexture1@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} SK Texture. All Rights Reserved. Built for Luxury Architecture.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
