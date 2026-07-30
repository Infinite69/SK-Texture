/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TextureCatalogue } from './components/TextureCatalogue';
import { Projects } from './components/Projects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SiteVisitModal } from './components/Modals/SiteVisitModal';
import { TextureItem, ServiceItem, ProjectItem } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false);
  const [prefilledTextureCode, setPrefilledTextureCode] = useState('');

  // Handle dark mode class toggle on HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenSiteVisitWithTexture = (texture: TextureItem) => {
    setPrefilledTextureCode(texture.code);
    setSiteVisitModalOpen(true);
  };

  const handleOpenSiteVisit = () => {
    setPrefilledTextureCode('');
    setSiteVisitModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-amber-200 selection:text-neutral-900 transition-colors duration-300 ${darkMode ? 'dark bg-[#121110] text-neutral-100' : 'bg-[#FDFBF7] text-neutral-900'}`}>
      {/* Sticky Luxury Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSiteVisit={handleOpenSiteVisit}
      />

      {/* Main Page Sections */}
      <main>
        {/* Full-screen Hero Section */}
        <Hero onOpenSiteVisit={handleOpenSiteVisit} />

        {/* Texture Catalogue (Product Families & Swatch Catalogue 01-40) */}
        <TextureCatalogue
          onSelectTexture={(texture: TextureItem) => {}}
          onBookSiteVisitWithTexture={handleOpenSiteVisitWithTexture}
        />

        {/* Projects Showcase (Case Studies & Completed Elevations) */}
        <Projects
          onSelectProject={(project: ProjectItem) => {}}
          onBookSiteVisit={handleOpenSiteVisit}
        />

        {/* About Company */}
        <About />

        {/* Services & Scope */}
        <Services
          onSelectService={(service: ServiceItem) => {
            handleOpenSiteVisit();
          }}
          onBookSiteVisit={handleOpenSiteVisit}
        />

        {/* Why Choose SK Texture */}
        <WhyChooseUs />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Portfolio Gallery */}
        <Gallery />

        {/* 8-Step Application Process */}
        <Process />

        {/* Expandable FAQ */}
        <FAQ />

        {/* Contact & Google Maps */}
        <Contact preselectedTextureCode={prefilledTextureCode} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp & Call Triggers */}
      <FloatingActions onOpenSiteVisit={handleOpenSiteVisit} />

      {/* Site Visit Booking Modal */}
      <SiteVisitModal
        isOpen={siteVisitModalOpen}
        onClose={() => setSiteVisitModalOpen(false)}
        prefilledTextureCode={prefilledTextureCode}
      />
    </div>
  );
}
