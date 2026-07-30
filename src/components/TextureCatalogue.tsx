import React, { useState } from 'react';
import { TEXTURE_CATALOGUE } from '../data/textures';
import { PHYSICAL_SWATCHES, SwatchItem } from '../data/swatches';
import { TextureItem } from '../types';
import { SwatchPatch } from './SwatchPatch';
import { Search, ZoomIn, Check, Sparkles, Filter, X, ArrowRight, Shield, Layers, Sun, Grid, Layers2, Paintbrush, FileDown, Download } from 'lucide-react';

interface TextureCatalogueProps {
  onSelectTexture: (texture: TextureItem) => void;
  onBookSiteVisitWithTexture: (texture: TextureItem) => void;
}

export const TextureCatalogue: React.FC<TextureCatalogueProps> = ({
  onSelectTexture,
  onBookSiteVisitWithTexture
}) => {
  const [activeTab, setActiveTab] = useState<'products' | 'swatches'>('products');
  const [filterCategory, setFilterCategory] = useState<'All' | 'Interior' | 'Exterior' | 'Specialty'>('All');
  const [search, setSearch] = useState('');
  const [selectedTexture, setSelectedTexture] = useState<TextureItem | null>(null);
  const [selectedSwatch, setSelectedSwatch] = useState<SwatchItem | null>(null);
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const filteredTextures = TEXTURE_CATALOGUE.filter(item => {
    const matchesCat = filterCategory === 'All' || item.category === filterCategory || item.interiorExterior === 'Both';
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.code.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredSwatches = PHYSICAL_SWATCHES.filter(swatch => {
    const matchesSearch = swatch.code.toLowerCase().includes(search.toLowerCase()) ||
                          swatch.name.toLowerCase().includes(search.toLowerCase()) ||
                          swatch.category.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <section id="catalogue" className="py-24 bg-[#F5F2EB]/80 dark:bg-[#121110] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-700 dark:text-amber-400 font-semibold">
            Official SK Texture Catalogue
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-neutral-900 dark:text-neutral-100 tracking-tight">
            Texture & Swatch Catalogue
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
            Browse our core architectural product finishes and physical sample swatches (01–40) directly from our official sample card.
          </p>
        </div>

        {/* Brochure Download & Preview CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xs border border-[#E5DFD5] dark:border-neutral-800 bg-[#FDFBF7]/90 dark:bg-neutral-950/90 shadow-md max-w-4xl mx-auto backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 rounded-xs text-amber-700 dark:text-amber-400">
              <FileDown className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Official PDF Catalogue Brochure
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-lg mt-0.5">
                Download or view the official high-resolution catalog detailing our premium architectural texture range, specifications, and applications.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => setIsBrochureModalOpen(true)}
              className="px-5 py-2.5 bg-[#F5F2EB] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 border border-[#E5DFD5] dark:border-neutral-800 hover:bg-[#EBF5EE] text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors w-full md:w-auto text-center cursor-pointer"
            >
              Open Viewer
            </button>
            <a
              href="/SK-Texture-Catalogue.pdf"
              download="SK-Texture-Catalogue.pdf"
              className="px-5 py-2.5 bg-[#1C1917] dark:bg-white text-white dark:text-[#1C1917] hover:bg-neutral-800 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors w-full md:w-auto text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>
        </div>

        {/* View Switcher Tabs (Products vs Physical Swatch Card) */}
        <div className="flex justify-center border-b border-[#E5DFD5] dark:border-neutral-800">
          <div className="flex gap-4 sm:gap-8">
            <button
              onClick={() => setActiveTab('products')}
              className={`pb-4 text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeTab === 'products'
                  ? 'border-amber-600 text-amber-700 dark:text-amber-400'
                  : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
              }`}
            >
              <Layers2 className="w-4 h-4" />
              <span>Core Product Families (8 Lines)</span>
            </button>

            <button
              onClick={() => setActiveTab('swatches')}
              className={`pb-4 text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeTab === 'swatches'
                  ? 'border-amber-600 text-amber-700 dark:text-amber-400'
                  : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Physical Sample Swatches (01–40)</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FDFBF7] dark:bg-neutral-950 p-4 rounded-xs border border-[#E5DFD5] dark:border-neutral-800 shadow-xs">
          {activeTab === 'products' ? (
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {(['All', 'Interior', 'Exterior', 'Specialty'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-mono font-semibold transition-all rounded-xs ${
                    filterCategory === cat
                      ? 'bg-[#1C1917] text-white dark:bg-[#FDFBF7] dark:text-[#1C1917] shadow-sm'
                      : 'bg-[#F5F2EB] dark:bg-neutral-900 text-stone-600 dark:text-stone-400 hover:bg-[#EBF5EE]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-xs font-mono text-stone-500 dark:text-stone-400">
              Showing official sample swatches 01 to 40 (Rustic, Parnila, Ultra Spray, Super Fine, Granules, Concrete)
            </div>
          )}

          {/* Search Field */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder={activeTab === 'products' ? "Search code e.g. SK-MRB..." : "Search swatch e.g. 01, RD 26, Granules..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none"
            />
          </div>
        </div>

        {/* Tab 1: Core Product Lines */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTextures.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedTexture(item);
                  setActiveColorIdx(0);
                }}
                className="group relative bg-[#FDFBF7] dark:bg-neutral-950 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200 dark:bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.92] group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top Badge Code */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 bg-[#1C1917]/90 text-white backdrop-blur-md rounded-xs">
                      {item.code}
                    </span>
                    {item.popular && (
                      <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 bg-amber-600 text-white backdrop-blur-md rounded-xs uppercase font-bold">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/90 dark:bg-neutral-900/90 text-stone-900 dark:text-stone-100 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                      {item.interiorExterior} • {item.thickness}
                    </span>
                    <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 uppercase font-bold">
                      {item.sheenLevel}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-stone-400 mr-1">Shades:</span>
                    {item.recommendedColors.map((col, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-xs"
                        style={{ backgroundColor: col.hex }}
                        title={col.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#F5F2EB] dark:bg-neutral-900/60 border-t border-[#E5DFD5] dark:border-neutral-800 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 group-hover:text-amber-600 transition-colors">
                  <span>View Details & Request Sample</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Physical Swatches Grid 01 - 40 */}
        {activeTab === 'swatches' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSwatches.map((swatch) => (
              <div
                key={swatch.code}
                onClick={() => setSelectedSwatch(swatch)}
                className="bg-[#21201D] border border-stone-800 p-3 rounded-xs shadow-md space-y-3 cursor-pointer group hover:border-amber-500 transition-all text-white"
              >
                {/* Physical Texture Patch Visualizer Box */}
                <SwatchPatch swatch={swatch} className="w-full h-28" />

                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-stone-400 block">
                    Mode: {swatch.applicationMode}
                  </span>
                  <h4 className="font-serif text-xs font-bold text-stone-100 group-hover:text-amber-400 transition-colors line-clamp-1">
                    {swatch.name}
                  </h4>
                </div>

                <div className="pt-1 flex items-center justify-between text-[10px] text-amber-500 font-mono">
                  <span>{swatch.category}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Inquire →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Spec Modal */}
      {selectedTexture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
          <div className="bg-[#FDFBF7] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 max-w-4xl w-full rounded-xs overflow-hidden shadow-2xl relative my-auto">
            <button
              onClick={() => setSelectedTexture(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 bg-neutral-950 relative flex flex-col justify-between min-h-[320px] lg:min-h-[500px]">
                <img
                  src={selectedTexture.image}
                  alt={selectedTexture.name}
                  className="w-full h-full object-cover absolute inset-0 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/40" />

                <div className="relative z-10 p-6 flex justify-between items-start">
                  <span className="text-xs font-mono tracking-widest px-3 py-1 bg-neutral-900/90 text-white rounded-xs">
                    {selectedTexture.code}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
                    {selectedTexture.category} Collection
                  </span>
                  <h3 className="font-serif text-3xl font-light text-neutral-900 dark:text-neutral-100 mt-1">
                    {selectedTexture.name}
                  </h3>
                  <p className="text-xs font-mono text-stone-500 mt-1">
                    Code: {selectedTexture.code} • Thickness: {selectedTexture.thickness}
                  </p>
                </div>

                <p className="text-sm text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                  {selectedTexture.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onBookSiteVisitWithTexture(selectedTexture);
                      setSelectedTexture(null);
                    }}
                    className="w-full py-3.5 bg-[#1C1917] text-white dark:bg-white dark:text-[#1C1917] text-xs uppercase font-bold tracking-wider hover:bg-neutral-800 transition-colors shadow-lg"
                  >
                    Request Physical Sample Box ({selectedTexture.code})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Swatch Specific Quick Modal */}
      {selectedSwatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-[#FDFBF7] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 max-w-md w-full rounded-xs p-6 space-y-6 relative text-neutral-900 dark:text-neutral-100">
            <button
              onClick={() => setSelectedSwatch(null)}
              className="absolute top-4 right-4 p-2 text-stone-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
                Physical Swatch #{selectedSwatch.code}
              </span>
              <h3 className="font-serif text-2xl font-bold mt-1">
                {selectedSwatch.name}
              </h3>
            </div>

            <SwatchPatch swatch={selectedSwatch} className="w-full h-44" />

            <div className="space-y-1 text-xs text-neutral-600 dark:text-neutral-300">
              <p><strong>Category:</strong> {selectedSwatch.category}</p>
              <p><strong>Application Mode:</strong> {selectedSwatch.applicationMode}</p>
              <p><strong>Pattern Note:</strong> {selectedSwatch.texturePattern}</p>
            </div>

            <button
              onClick={() => {
                onBookSiteVisitWithTexture({
                  id: `swatch-${selectedSwatch.code}`,
                  name: selectedSwatch.name,
                  code: `SK-SWATCH-${selectedSwatch.code}`,
                  category: selectedSwatch.category,
                  description: selectedSwatch.texturePattern,
                  tactileFeel: selectedSwatch.applicationMode,
                  sheenLevel: 'Standard Architectural Grade',
                  thickness: '2.0 mm',
                  image: '',
                  bestApplications: ['Interior & Exterior Walls'],
                  recommendedColors: [],
                  maintenance: 'Washable',
                  interiorExterior: 'Both',
                  popular: true
                });
                setSelectedSwatch(null);
              }}
              className="w-full py-3 bg-[#1C1917] text-white dark:bg-white dark:text-[#1C1917] text-xs font-bold uppercase tracking-wider"
            >
              Order Sample Patch ({selectedSwatch.code})
            </button>
          </div>
        </div>
      )}

      {/* Brochure PDF Viewer Modal */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-[#FDFBF7] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 max-w-5xl w-full h-[85vh] rounded-xs flex flex-col relative text-neutral-900 dark:text-neutral-100">
            <div className="p-4 border-b border-[#E5DFD5] dark:border-neutral-800 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold">Official SK Texture Catalogue</h3>
                <p className="text-[10px] font-mono text-stone-500">SK-Texture-Catalogue.pdf</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/SK-Texture-Catalogue.pdf"
                  download="SK-Texture-Catalogue.pdf"
                  className="p-2 text-stone-500 hover:text-amber-600 transition-colors"
                  title="Download Catalog"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setIsBrochureModalOpen(false)}
                  className="p-2 text-stone-500 hover:text-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-stone-100 dark:bg-neutral-950 p-2 sm:p-4 overflow-hidden">
              <iframe
                src="/SK-Texture-Catalogue.pdf#toolbar=1"
                className="w-full h-full border-0 rounded-xs bg-white shadow-inner"
                title="SK Texture Catalogue PDF Brochure"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
