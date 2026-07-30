import React, { useState } from 'react';
import { PROJECTS_LIST } from '../data/projects';
import { ProjectItem, ProjectCategory } from '../types';
import { MapPin, Building, ShieldCheck, Calendar, ArrowRight, X, Quote, Star, Layers, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onBookSiteVisit: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onBookSiteVisit }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({});
  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const categories: ProjectCategory[] = [
    'All',
    'Residential',
    'Commercial',
    'Schools',
    'Hospitals',
    'Builders',
    'Apartments',
    'Luxury Villas'
  ];

  const filteredProjects = PROJECTS_LIST.filter(p => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleCategoryChange = (cat: ProjectCategory) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const handleSliderChange = (id: string, val: number) => {
    setSliderPositions(prev => ({ ...prev, [id]: val }));
  };

  return (
    <section id="projects" className="py-24 bg-[#FDFBF7] dark:bg-[#121110] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E5DFD5] dark:border-neutral-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 font-semibold">
              Real Transformations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-neutral-900 dark:text-neutral-100">
              Selected Architectural Case Studies
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light">
              Interactive before-and-after transformations across luxury villas, commercial towers, and educational campuses in Gurugram & Delhi NCR.
            </p>
          </div>

          <div className="text-xs font-mono text-stone-500 dark:text-stone-400 bg-[#F5F2EB] dark:bg-neutral-900 px-4 py-2 rounded-xs border border-[#E5DFD5] dark:border-neutral-800">
            Drag slider to view before / after wall state ↔
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 text-xs uppercase font-mono tracking-widest font-semibold transition-all rounded-xs ${
                activeCategory === cat
                  ? 'bg-[#1C1917] text-white dark:bg-[#FDFBF7] dark:text-[#1C1917] shadow-sm'
                  : 'bg-[#F5F2EB] dark:bg-neutral-900 text-stone-600 dark:text-stone-400 hover:bg-[#EBF5EE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => {
            const sliderVal = sliderPositions[project.id] ?? 50;

            return (
              <div
                key={project.id}
                className="bg-[#F5F2EB]/60 dark:bg-neutral-900/60 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Interactive Before/After Drag Slider Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden select-none group">
                  {/* After Image (Full Background) */}
                  <img
                    src={project.afterImage}
                    alt={`${project.title} After Finish`}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Before Image (Clipped overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderVal}%` }}
                  >
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} Before State`}
                      className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 max-w-none"
                      style={{ width: '100%', height: '100%' }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Badges */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest px-2 py-0.5 bg-[#1C1917]/90 text-white rounded-xs z-10 pointer-events-none">
                    BEFORE
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] font-mono tracking-widest px-2 py-0.5 bg-amber-600 text-white rounded-xs z-10 pointer-events-none font-bold">
                    AFTER
                  </span>

                  {/* Vertical Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl z-20 pointer-events-none"
                    style={{ left: `${sliderVal}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-stone-900 shadow-2xl flex items-center justify-center text-xs font-bold font-mono border border-stone-300">
                      ↔
                    </div>
                  </div>

                  {/* Invisible Native Drag Range Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderVal}
                    onChange={(e) => handleSliderChange(project.id, Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                    aria-label="Before/After Slider"
                  />
                </div>

                {/* Case Study Meta */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
                      {project.category} • {project.completionDate}
                    </span>
                    <h3
                      onClick={() => setSelectedProjectModal(project)}
                      className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer mt-1"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400 font-light">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span><strong>Location:</strong> {project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span><strong>Builder:</strong> {project.builderName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span><strong>Area Covered:</strong> {project.areaCovered}</span>
                    </div>
                  </div>

                  {/* Products Used Tags */}
                  <div className="pt-1 flex flex-wrap gap-1">
                    {project.productsUsed.map((prod, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-[#FDFBF7] dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 rounded-xs border border-[#E5DFD5] dark:border-neutral-700">
                        {prod}
                      </span>
                    ))}
                  </div>

                  {/* Review Quote Box */}
                  <div className="p-3 bg-[#FDFBF7] dark:bg-neutral-800/60 border-l-2 border-amber-600 rounded-r-xs space-y-1 border-t border-b border-r border-[#E5DFD5] dark:border-neutral-700">
                    <p className="text-xs italic text-neutral-700 dark:text-neutral-300">
                      "{project.customerReview.quote}"
                    </p>
                    <p className="text-[10px] font-semibold text-neutral-900 dark:text-neutral-100">
                      — {project.customerReview.author}, <span className="font-normal text-stone-500">{project.customerReview.role}</span>
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div
                  onClick={() => setSelectedProjectModal(project)}
                  className="p-4 bg-[#F5F2EB] dark:bg-neutral-900 border-t border-[#E5DFD5] dark:border-neutral-800 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 hover:text-amber-600 cursor-pointer transition-colors"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center pt-8">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3.5 bg-[#1C1917] hover:bg-neutral-800 text-white dark:bg-white dark:text-[#1C1917] dark:hover:bg-stone-200 text-xs font-mono font-bold uppercase tracking-widest rounded-xs transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Load More Projects</span>
              <span className="text-[10px] opacity-75 font-normal">
                ({filteredProjects.length - visibleCount} remaining)
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Project Case Study Modal */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
          <div className="bg-[#FDFBF7] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 max-w-4xl w-full rounded-xs overflow-hidden shadow-2xl relative my-auto p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-500 hover:text-neutral-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
                {selectedProjectModal.category} Case Study
              </span>
              <h3 className="font-serif text-3xl font-light text-neutral-900 dark:text-neutral-100 mt-1">
                {selectedProjectModal.title}
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-1">
                Completed: {selectedProjectModal.completionDate} • Area: {selectedProjectModal.areaCovered}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-1 block">Original Wall Condition</span>
                <img src={selectedProjectModal.beforeImage} alt="Before" className="w-full h-56 object-cover rounded-xs filter grayscale" referrerPolicy="no-referrer" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 mb-1 block">SK Texture Final Finish</span>
                <img src={selectedProjectModal.afterImage} alt="After" className="w-full h-56 object-cover rounded-xs" referrerPolicy="no-referrer" />
              </div>
            </div>

            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
              {selectedProjectModal.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#F5F2EB] dark:bg-neutral-800/60 rounded-xs border border-[#E5DFD5] dark:border-neutral-700">
              <div>
                <span className="text-[10px] font-mono text-stone-400 uppercase">Location</span>
                <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">{selectedProjectModal.location}</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-stone-400 uppercase">Developer</span>
                <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">{selectedProjectModal.builderName}</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-stone-400 uppercase">Total Surface</span>
                <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">{selectedProjectModal.areaCovered}</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-stone-400 uppercase">Guarantee</span>
                <p className="text-xs font-semibold text-amber-600 font-bold">5-Year Guarantee</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSelectedProjectModal(null);
                  onBookSiteVisit();
                }}
                className="w-full py-3.5 bg-[#1C1917] dark:bg-white text-white dark:text-[#1C1917] text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Schedule Free Site Visit For Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
