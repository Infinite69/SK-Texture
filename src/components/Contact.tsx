import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, MessageSquare, Calendar, Send, CheckCircle2, Upload } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  preselectedTextureCode?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedTextureCode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Gurugram',
    propertyType: 'Luxury Villa',
    areaSqFt: '2500',
    textureCode: preselectedTextureCode || 'SK-MRB-01',
    preferredDate: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F2EB] dark:bg-[#1A1816] transition-colors duration-300 border-b border-[#E5DFD5] dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 font-semibold">
            Headquarters & Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-neutral-900 dark:text-neutral-100">
            Connect with SK Texture
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
            Book a free site visit, request physical sample boxes, or visit our design studio in Gurugram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Info & Map */}
          <div className="lg:col-span-5 bg-[#FDFBF7] dark:bg-neutral-950 p-8 rounded-xs border border-[#E5DFD5] dark:border-neutral-800 shadow-xl space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                Studio Contact Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs text-stone-400 uppercase block">Head Office</span>
                    <strong className="font-medium text-neutral-900 dark:text-neutral-100">303, The Solitaire Plaza, Gurugram, Haryana, India</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs text-stone-400 uppercase block">Direct Phone & WhatsApp</span>
                    <div className="space-x-3 font-semibold text-neutral-900 dark:text-neutral-100">
                      <a href="tel:9811221010" className="hover:text-amber-600">9811221010</a>
                      <span>•</span>
                      <a href="tel:7982399273" className="hover:text-amber-600">7982399273</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs text-stone-400 uppercase block">Official Email</span>
                    <a href="mailto:sktexture1@gmail.com" className="font-semibold text-neutral-900 dark:text-neutral-100 hover:text-amber-600">
                      sktexture1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs text-stone-400 uppercase block">Website</span>
                    <a href="https://www.sktexture.com" target="_blank" rel="noreferrer" className="font-semibold text-neutral-900 dark:text-neutral-100 hover:text-amber-600">
                      www.sktexture.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E5DFD5] dark:border-neutral-800">
                <a
                  href="tel:9811221010"
                  className="py-3 px-4 bg-[#1C1917] text-white dark:bg-white dark:text-[#1C1917] text-center text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919811221010?text=Hi%20SK%20Texture%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20wall%20textures."
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 bg-emerald-700 text-white text-center text-xs font-bold uppercase tracking-wider hover:bg-emerald-800 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Gurugram Map Frame Preview */}
            <div className="rounded-xs overflow-hidden border border-[#E5DFD5] dark:border-neutral-800 h-48 bg-stone-200 dark:bg-neutral-900 relative">
              <iframe
                title="SK Texture Gurugram Office Location"
                src="https://maps.google.com/maps?q=Solitaire%20Plaza%20Gurugram&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale opacity-80 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Book Free Site Visit & Instant Quote Form */}
          <div className="lg:col-span-7 bg-[#FDFBF7] dark:bg-neutral-950 p-8 rounded-xs border border-[#E5DFD5] dark:border-neutral-800 shadow-xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  Site Visit Request Received!
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto">
                  Thank you, <strong className="font-semibold text-neutral-900 dark:text-neutral-100">{formData.fullName}</strong>. Senior texture consultant will call you at <strong className="font-semibold text-neutral-900 dark:text-neutral-100">{formData.phone}</strong> within 2 hours to confirm your free site measurement & sample box.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#1C1917] text-white text-xs uppercase font-bold"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    Get Free Site Visit & Instant Quote
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Free on-site measurement & physical sample box delivery in Gurugram, Delhi NCR & Pan-India.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajiv Singhania"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-3 text-xs bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9811221010"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 text-xs bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-3 text-xs bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full p-3 text-xs bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none"
                    >
                      <option>Luxury Villa</option>
                      <option>Apartment / Penthouse</option>
                      <option>Commercial Tower</option>
                      <option>School / Hospital</option>
                      <option>Builder Housing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                      Approx Area (Sq Ft)
                    </label>
                    <input
                      type="number"
                      value={formData.areaSqFt}
                      onChange={(e) => setFormData({ ...formData, areaSqFt: e.target.value })}
                      className="w-full p-3 text-xs bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                      Preferred Site Visit Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full p-3 text-xs bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                      Interested Texture Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SK-MRB-01 or SK-CNC-02"
                      value={formData.textureCode}
                      onChange={(e) => setFormData({ ...formData, textureCode: e.target.value })}
                      className="w-full p-3 text-xs bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                    Specific Requirements / Project Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention elevation height, interior/exterior details, or architect specifications..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 text-xs bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1C1917] dark:bg-white text-white dark:text-[#1C1917] text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-500" />
                  <span>Book Free Site Visit & Request Quote</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
