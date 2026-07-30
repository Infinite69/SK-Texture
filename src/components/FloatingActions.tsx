import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenSiteVisit: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenSiteVisit }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919811221010?text=Hi%20SK%20Texture%2C%20I%20am%20interested%20in%20wall%20textures%20for%20my%20property."
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold font-mono pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>

      {/* Quick Phone Call */}
      <a
        href="tel:9811221010"
        className="pointer-events-auto p-3 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 rounded-full shadow-xl hover:scale-110 transition-all flex items-center justify-center"
        title="Call 9811221010"
        aria-label="Call 9811221010"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Back to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="pointer-events-auto p-2.5 bg-neutral-800 text-stone-200 rounded-full shadow-md hover:bg-neutral-700 transition-all"
          title="Scroll To Top"
          aria-label="Scroll To Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
