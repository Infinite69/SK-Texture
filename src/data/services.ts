import { ServiceItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Marble Texture',
    iconName: 'Sparkles',
    shortDesc: 'Italian Venetian plaster & polished marble stucco for regal indoor feature walls.',
    longDesc: 'Our Marble Texture solutions replicate the timeless elegance of Italian Carrara, Travertine, and Calacatta marble slabs. Using imported mineral plasters and traditional trowel burnishing, we create high-gloss glass-like reflective surfaces that resist moisture and fading.',
    category: 'Interior',
    features: ['High-gloss reflective polish', 'Zero grout lines or slab seams', 'Eco-friendly slaked lime base', 'Custom vein color customization'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-2',
    title: 'Rustic Texture',
    iconName: 'Mountain',
    shortDesc: 'Deep, earthy stone grain finishes designed for rugged, weather-hardy exterior facades.',
    longDesc: 'Engineered for villas and commercial elevations subject to harsh sunlight and heavy monsoons. Incorporates graded quartzite and mineral pigments to give walls a natural stone masonry texture.',
    category: 'Exterior',
    features: ['Extreme UV & weather resistance', 'Hides underlying wall imperfections', 'High breathability preventing flaking', '10+ Year structural warranty'],
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-3',
    title: 'Concrete Finish (Microcement)',
    iconName: 'Box',
    shortDesc: 'Architectural raw beton and board-formed fairface concrete textures for minimalist aesthetics.',
    longDesc: 'Achieve the brutalist sophistication of raw shuttered concrete without structural weight or cracking risks. Ideal for modern villa elevations, loft interiors, and corporate headquarters.',
    category: 'Specialty',
    features: ['Board-formed shuttered illusion', 'Seamless industrial aesthetic', 'Scratch & stain resistant nano-seal', 'Available in light grey to charcoal'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-4',
    title: 'Granules Texture',
    iconName: 'Layers',
    shortDesc: 'Natural quartz chips embedded in acrylic matrix for ultra-durable exterior cladding.',
    longDesc: 'Composed of natural colored granite chips and quartz granules bound by acrylic resins. Delivers a thick, impact-resistant coating that withstands high winds and heavy dust.',
    category: 'Exterior',
    features: ['Natural non-fading stone colors', 'High abrasion & impact resistance', 'Ideal for high-rise elevations', 'Washable with high-pressure water jet'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-5',
    title: 'Parlina Finish',
    iconName: 'Sun',
    shortDesc: 'Silky metallic pearlescent coating that shifts softly with natural indoor lighting.',
    longDesc: 'A luxury interior finish incorporating micaceous pigments and pearlescent silk particles. Creates a shimmering, multi-dimensional wall surface that elevates boutique hotels, dining rooms, and executive suites.',
    category: 'Interior',
    features: ['Iridescent light shifting effect', 'Soft tactile velvet texture', 'Stain repellent coating', 'Rich champagne, gold, and silver tints'],
    image: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-6',
    title: 'Brick Texture',
    iconName: 'Grid',
    shortDesc: 'Authentic exposed terracotta brick and rustic clay wall cladding overlays.',
    longDesc: 'Recreates the charm of antique exposed brick walls with deep mortar joints. Applied over existing plaster walls without structural modifications, ideal for cafes, lofts, and boundary walls.',
    category: 'Exterior',
    features: ['Authentic clay brick feel', 'Lightweight non-structural solution', 'Anti-efflorescence protection', 'Custom red, white, or smoked brick tones'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-7',
    title: 'Super Fine Roller',
    iconName: 'Paintbrush',
    shortDesc: 'Refined uniform micro-grain texture applied via specialized stippling rollers.',
    longDesc: 'Provides a subtle, elegant orange-peel or fine leather grain texture across interior walls and residential corridors. Covers uneven plaster while adding rich depth.',
    category: 'Interior',
    features: ['Consistent fine stipple pattern', 'Hides hairline cracks', 'Scrubbable & easy to clean', 'Fast application on large areas'],
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-8',
    title: 'Super Fine Spray',
    iconName: 'Wind',
    shortDesc: 'Pneumatic spray texture application for seamless high-rise exterior elevations.',
    longDesc: 'Specialized pneumatic spray guns atomize texture compound into uniform micro-droplets, creating a crisp, modern stucco pattern ideal for multi-storey residential towers.',
    category: 'Exterior',
    features: ['Uniform micro-stucco distribution', 'High speed application', 'Superior adhesion on concrete', 'Zero sag or drippage'],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-9',
    title: 'Super Fine Compact',
    iconName: 'ShieldCheck',
    shortDesc: 'Compressed high-density matrix coating built for heavy traffic exterior areas.',
    longDesc: 'Troweled and compressed into a dense hard shell, this finish provides maximum resistance against physical impacts, scuffs, and windborne debris at ground level.',
    category: 'Protective',
    features: ['Ultra-dense impact shell', 'Resists mechanical scuffs', 'Ideal for entrance podiums', 'Longest service lifespan'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-10',
    title: 'Waterproof Coatings',
    iconName: 'Droplets',
    shortDesc: 'Elastomeric hydrophobic membranes that bridge cracks and seal out monsoon water.',
    longDesc: 'High-build elastomeric coatings with 300% elasticity that stretch over structural wall cracks. Formulated with hydrophobic silanes to keep exterior walls 100% dry.',
    category: 'Protective',
    features: ['Bridges up to 2mm live cracks', 'Hydrophobic rain repellent', 'Prevents dampness & algae growth', 'Breathable vapor barrier'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-11',
    title: 'Heat Reflective Coatings',
    iconName: 'Flame',
    shortDesc: 'Solar-reflective cool wall technology reducing indoor wall temperature by up to 7°C.',
    longDesc: 'Infused with hollow ceramic micro-spheres that reflect up to 88% of solar heat rays (IR & UV radiation). Significantly lowers indoor thermal load and AC energy costs.',
    category: 'Protective',
    features: ['Reflects 88% solar radiation', 'Lowers wall temp by 4°C - 7°C', 'Reduces HVAC power consumption', 'Anti-glare satin matte white'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-12',
    title: 'Exterior Painting',
    iconName: 'Palette',
    shortDesc: 'Architectural grade acrylic exterior paints formulated for extreme sun & rain.',
    longDesc: 'High-performance 100% acrylic exterior paint systems with silicone additives. Delivers rich, non-chalking, non-fading colors across large residential and commercial facades.',
    category: 'Exterior',
    features: ['Dust Proof tech', 'Color Lock UV pigments', 'Fungus & algae shield', '5-year color retention'],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-13',
    title: 'Interior Texture Finishes',
    iconName: 'Home',
    shortDesc: 'Custom interior wall textures from rustic lime wash to metallic accent panels.',
    longDesc: 'Bespoke interior wall treatments tailored to contemporary interior design concepts. We offer metallic, suede, concrete, stone, and geometric troweled textures for homes and offices.',
    category: 'Interior',
    features: ['Zero VOC & odor free', 'Washable & stain resistant', 'Custom color matching', 'Acoustic sound dampening properties'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-14',
    title: 'Commercial Building Textures',
    iconName: 'Building2',
    shortDesc: 'Large-scale facade texture application for IT parks, malls, and commercial plazas.',
    longDesc: 'Turnkey texture application services for commercial real estate developers. Backed by dedicated project managers, safety-certified scaffolding, and spray texture equipment.',
    category: 'Specialty',
    features: ['Fast turnaround execution', 'On-site safety compliance', 'Uniform quality control', 'Long-term builder warranties'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-15',
    title: 'Villa Exterior Finishes',
    iconName: 'Castle',
    shortDesc: 'Bespoke hand-crafted stone & plaster finishes for ultra-luxury private residences.',
    longDesc: 'Curated exterior finishes for luxury farmhouses and private villas in Gurugram, Delhi NCR, and Goa. Combines travertine, rustic stone, and copper/bronze metal accents.',
    category: 'Exterior',
    features: ['Tailored architectural styling', 'Premium imported raw materials', 'Master artisan application', 'Comprehensive 5-year protection'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  }
];
