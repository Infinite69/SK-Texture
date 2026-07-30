import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Send, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledTextureCode?: string;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  isOpen,
  onClose,
  prefilledTextureCode = ''
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: 'Gurugram',
    propertyType: 'Luxury Villa',
    preferredDate: '',
    textureCode: prefilledTextureCode,
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.5 } });
    } catch (err) {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 max-w-lg w-full rounded-sm overflow-hidden shadow-2xl relative p-6 sm:p-8 space-y-6 my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Site Visit Booked!
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-300">
              Our texture specialist will contact you shortly at <strong className="font-semibold text-neutral-900 dark:text-neutral-100">{formData.phone}</strong> to confirm your visit time & bring physical sample boards.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-stone-900 text-white text-xs font-bold uppercase"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600">
                <Calendar className="w-4 h-4" />
                <span>Complimentary On-Site Inspection</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                Book Free Site Visit
              </h3>
              <p className="text-xs text-neutral-500">
                We measure walls, inspect moisture levels, and bring physical 1x1 ft real texture sample boards.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajiv Singhania"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-2.5 text-xs bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="9811221010"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 text-xs bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">City / Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full p-2.5 text-xs bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full p-2.5 text-xs bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none"
                  >
                    <option>Luxury Villa</option>
                    <option>Apartment / Penthouse</option>
                    <option>Commercial Tower</option>
                    <option>School / Hospital</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full p-2.5 text-xs bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none"
                  />
                </div>
              </div>

              {prefilledTextureCode && (
                <div className="p-2 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-mono rounded-xs border border-amber-200 dark:border-amber-800">
                  Selected Texture Sample: <strong>{prefilledTextureCode}</strong>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-amber-500" />
              <span>Confirm Free Site Visit Booking</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
