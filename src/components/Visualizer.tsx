import React, { useState } from 'react';
import { TEXTURE_CATALOGUE } from '../data/textures';
import { TextureItem } from '../types';
import { Eye, Layers, Palette, RefreshCw, Sparkles, Check, Download, ArrowRight, Sun, Moon, Maximize2 } from 'lucide-react';

interface VisualizerProps {
  onBookSiteVisitWithTexture: (texture: TextureItem) => void;
}

export const Visualizer: React.FC<VisualizerProps> = ({ onBookSiteVisitWithTexture }) => {
  const [selectedScene, setSelectedScene] = useState<'villa' | 'living' | 'lobby' | 'balcony'>('villa');
  const [selectedTexture, setSelectedTexture] = useState<TextureItem>(TEXTURE_CATALOGUE[0]);
  const [selectedColor, setSelectedColor] = useState(TEXTURE_CATALOGUE[0].recommendedColors[0]);
  const [lighting, setLighting] = useState<'day' | 'sunset' | 'night'>('day');

  const scenes = [
    {
      id: 'villa',
      name: 'Luxury Villa Elevation',
      bgImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
      type: 'Exterior Facade'
    },
    {
      id: 'living',
      name: 'Penthouse Living Room',
      bgImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
      type: 'Interior Feature Wall'
    },
    {
      id: 'lobby',
      name: 'Hotel & Corporate Lobby',
      bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
      type: 'Commercial Atrium'
    },
    {
      id: 'balcony',
      name: 'Estate Balcony Elevation',
      bgImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=85',
      type: 'Exterior Cladding'
    }
  ];

  const currentScene = scenes.find(s => s.id === selectedScene) || scenes[0];

  const getLightingClass = () => {
    switch (lighting) {
      case 'sunset':
        return 'sepia-[0.35] hue-rotate-[-15deg] brightness-90';
      case 'night':
        return 'brightness-75 contrast-125 saturate-75 blue-filter';
      default:
        return 'brightness-100 contrast-100';
    }
  };

  return (
    <section id="visualizer" className="py-24 bg-[#121110] text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Wall Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FDFBF7]">
            Real-Time Surface Configurator
          </h2>
          <p className="text-sm text-neutral-400 font-light">
            Experiment with finishes, architectural lighting, and bespoke color swatches on live villa facades and feature walls.
          </p>
        </div>

        {/* Studio Canvas Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#1C1918] border border-neutral-800 rounded-xs overflow-hidden p-6 sm:p-8 shadow-2xl">
          
          {/* Left / Center Interactive Preview Canvas */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden border border-neutral-800 shadow-inner group">
              {/* Scene Base Image */}
              <img
                src={currentScene.bgImage}
                alt={currentScene.name}
                className={`w-full h-full object-cover transition-all duration-700 ${getLightingClass()}`}
                referrerPolicy="no-referrer"
              />

              {/* Texture Color Overlay Simulation */}
              <div
                className="absolute inset-0 mix-blend-multiply transition-all duration-700 pointer-events-none opacity-55"
                style={{ backgroundColor: selectedColor.hex }}
              />

              {/* Tactile Texture Grain Mask */}
              <div
                className="absolute inset-0 transition-all duration-700 pointer-events-none opacity-45 mix-blend-overlay"
                style={{
                  backgroundImage: `url(${selectedTexture.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Overlay Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest px-3 py-1 bg-neutral-900/90 text-white backdrop-blur-md rounded-xs border border-neutral-800">
                  {currentScene.name}
                </span>
                <span className="text-[10px] font-mono tracking-widest px-3 py-1 bg-amber-600 text-white backdrop-blur-md rounded-xs uppercase font-bold">
                  {selectedTexture.code} • {selectedColor.name}
                </span>
              </div>

              {/* Lighting Mood Switcher in Corner */}
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 p-1.5 bg-neutral-900/90 backdrop-blur-md rounded-xs border border-neutral-800">
                <button
                  onClick={() => setLighting('day')}
                  className={`p-1.5 rounded-xs text-xs flex items-center gap-1 ${lighting === 'day' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'}`}
                  title="Natural High Noon Light"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono hidden sm:inline">Daylight</span>
                </button>
                <button
                  onClick={() => setLighting('sunset')}
                  className={`p-1.5 rounded-xs text-xs flex items-center gap-1 ${lighting === 'sunset' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'}`}
                  title="Golden Hour Lighting"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono hidden sm:inline">Golden Hour</span>
                </button>
                <button
                  onClick={() => setLighting('night')}
                  className={`p-1.5 rounded-xs text-xs flex items-center gap-1 ${lighting === 'night' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'}`}
                  title="Evening Spotlights"
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono hidden sm:inline">Evening</span>
                </button>
              </div>
            </div>

            {/* Scene Selector Bar */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">1. Select Architectural Canvas:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {scenes.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedScene(s.id as any)}
                    className={`p-3 text-left rounded-xs border text-xs transition-all ${
                      selectedScene === s.id
                        ? 'border-amber-400 bg-neutral-900 text-white font-semibold shadow-md'
                        : 'border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className="block font-medium truncate">{s.name}</span>
                    <span className="text-[10px] text-neutral-500 uppercase">{s.type}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Controls Column */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Texture Finish Selector */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">2. Select Finish</span>
                  <span className="text-[10px] font-mono text-amber-400">{selectedTexture.code}</span>
                </div>

                <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                  {TEXTURE_CATALOGUE.map(tex => (
                    <button
                      key={tex.id}
                      onClick={() => {
                        setSelectedTexture(tex);
                        setSelectedColor(tex.recommendedColors[0]);
                      }}
                      className={`w-full p-2.5 rounded-xs border text-left flex items-center gap-3 transition-all ${
                        selectedTexture.id === tex.id
                          ? 'border-amber-400 bg-neutral-900 text-white font-semibold shadow-sm'
                          : 'border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:bg-neutral-900'
                      }`}
                    >
                      <img src={tex.image} alt={tex.name} className="w-9 h-9 object-cover rounded-xs" referrerPolicy="no-referrer" />
                      <div className="truncate">
                        <span className="block text-xs truncate font-medium">{tex.name}</span>
                        <span className="text-[10px] text-neutral-500 font-mono">{tex.code} • {tex.thickness}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Swatch Picker */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">3. Select Color Shade</span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedTexture.recommendedColors.map((col, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(col)}
                      className={`p-2 rounded-xs border text-xs flex items-center gap-2 transition-all ${
                        selectedColor.name === col.name
                          ? 'border-amber-400 bg-neutral-900 text-white font-semibold shadow-xs'
                          : 'border-neutral-800 bg-neutral-900/40 text-neutral-400'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full border border-neutral-700 shadow-xs" style={{ backgroundColor: col.hex }} />
                      <span className="truncate text-[11px]">{col.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Action */}
            <div className="pt-4 space-y-2">
              <button
                onClick={() => onBookSiteVisitWithTexture(selectedTexture)}
                className="w-full py-4 bg-[#FDFBF7] text-[#1C1917] hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xl flex items-center justify-center gap-2"
              >
                <span>Order Physical Sample Board ({selectedTexture.code})</span>
                <ArrowRight className="w-4 h-4 text-amber-700" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
