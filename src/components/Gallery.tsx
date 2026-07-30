import React, { useState } from 'react';
import { ZoomIn, X, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; category: string } | null>(null);

  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      title: 'Italian Travertine Villa Elevation',
      category: 'Luxury Villa'
    },
    {
      src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      title: 'Carrara Venetian Plaster Feature Wall',
      category: 'Marble Texture'
    },
    {
      src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      title: 'Raw Board-Formed Concrete Shuttering',
      category: 'Concrete Finish'
    },
    {
      src: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      title: 'Tuscan Earth Granular Facade',
      category: 'Rustic Finish'
    },
    {
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      title: 'Terracotta Exposed Clay Brick Plaster',
      category: 'Brick Texture'
    },
    {
      src: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
      title: 'Commercial Corporate Plaza Elevation',
      category: 'Granules Texture'
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      title: 'Granite & Quartz Pebble Cladding',
      category: 'Exterior'
    },
    {
      src: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1200&q=80',
      title: 'Satin Pearl Parlina Living Room',
      category: 'Interior Parlina'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#FDFBF7] dark:bg-[#121110] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 font-semibold">
            Architectural Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-neutral-900 dark:text-neutral-100">
            Texture Inspiration Gallery
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
            Click any image to open full screen high-resolution architectural lightbox.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="relative group overflow-hidden rounded-xs cursor-pointer border border-[#E5DFD5] dark:border-neutral-800 shadow-xs break-inside-avoid"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 bg-amber-600 text-white w-fit uppercase font-bold rounded-xs">
                  {item.category}
                </span>

                <div className="space-y-1 text-white">
                  <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <ZoomIn className="w-4 h-4" />
                    <span>View Lightbox</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-xl animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full space-y-4 text-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[80vh] mx-auto object-contain rounded-xs shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="text-white space-y-1">
              <span className="text-xs font-mono uppercase text-amber-400 tracking-widest">{selectedImage.category}</span>
              <h3 className="font-serif text-2xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
