import { TextureItem } from '../types';

export const TEXTURE_CATALOGUE: TextureItem[] = [
  {
    id: 'tex-1',
    name: 'Carrara Stucco Marble Finish',
    code: 'SK-MRB-01',
    category: 'Interior',
    description: 'An exquisite Venetian plaster finish echoing pure Italian Carrara marble. Crafted with refined lime slake and mineral dust for high polish and depth.',
    tactileFeel: 'Ultra Smooth Glassy Polish',
    sheenLevel: 'High Lustre Mirror Gloss',
    thickness: '1.0 - 1.5 mm',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['Luxury Living Rooms', 'Feature Accent Walls', 'Hotel Lobbies', 'Master Suites'],
    recommendedColors: [
      { name: 'Carrara White', hex: '#F5F5F3' },
      { name: 'Warm Cream', hex: '#EDE8D0' },
      { name: 'Calacatta Gold', hex: '#E2D3BE' },
      { name: 'Nero Charcoal', hex: '#2C2E33' }
    ],
    maintenance: 'Wipe clean with soft microfiber cloth. Water-resistant sealant applied.',
    interiorExterior: 'Interior',
    popular: true
  },
  {
    id: 'tex-2',
    name: 'Royale Mineral Stucco Plaster',
    code: 'SK-RST-04',
    category: 'Both',
    description: 'A premium, deep textured mineral plaster finish featuring organic granular aggregates that reflect rustic earth tones with extreme durability.',
    tactileFeel: 'Deep Granular Rough Texture',
    sheenLevel: 'Matte Mineral Finish',
    thickness: '2.5 - 3.5 mm',
    image: 'https://www.asianpaints.com/content/dam/asian_paints/textures/wall-shots/LXE1002CMB1003.jpg',
    bestApplications: ['Villa Exteriors', 'Boundary Walls', 'Resort Facades', 'Courtyard Features'],
    recommendedColors: [
      { name: 'Tuscan Beige', hex: '#D8C3A5' },
      { name: 'Terracotta Earth', hex: '#C27D60' },
      { name: 'Desert Sand', hex: '#E5D3B3' },
      { name: 'Stone Grey', hex: '#8E8D8A' }
    ],
    maintenance: 'High-pressure water washable. Anti-fungal and UV resistant.',
    interiorExterior: 'Both',
    popular: true
  },
  {
    id: 'tex-3',
    name: 'Board-Formed Raw Concrete (Fairface)',
    code: 'SK-CNC-02',
    category: 'Both',
    description: 'Sleek industrial microcement formulation mimicking authentic shuttered architectural concrete boards with tie-rod marks and crisp grey grain.',
    tactileFeel: 'Smooth Tactile Industrial Cement',
    sheenLevel: 'Satin Matte Finish',
    thickness: '2.0 - 3.0 mm',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['Modern Architectural Facades', 'Corporate Offices', 'Minimalist Interiors', 'Retails Spaces'],
    recommendedColors: [
      { name: 'Raw Beton Grey', hex: '#A8A7A1' },
      { name: 'Charcoal Cement', hex: '#53565A' },
      { name: 'Off-White Concrete', hex: '#E3E2DD' },
      { name: 'Smoked Ash', hex: '#707372' }
    ],
    maintenance: 'Zero maintenance, scratch resistant with clear hydrophobic nano-sealant.',
    interiorExterior: 'Both',
    popular: true
  },
  {
    id: 'tex-4',
    name: 'Quartz Mineral Granules',
    code: 'SK-GRN-08',
    category: 'Exterior',
    description: 'Heavy-duty exterior texture composed of graded colored quartz chips encased in clear acrylic polymers. Maximum impact & weather resistance.',
    tactileFeel: 'Uniform Coarse Pebble Texture',
    sheenLevel: 'Low Sheen Mineral Polish',
    thickness: '2.0 - 2.5 mm',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['High-Rise Tower Facades', 'Commercial Plazas', 'School Exteriors', 'Balcony Walls'],
    recommendedColors: [
      { name: 'Quartz White', hex: '#EBEBEB' },
      { name: 'Granite Grey', hex: '#7D8285' },
      { name: 'Sandstone Gold', hex: '#D6C09D' },
      { name: 'Desert Coral', hex: '#B8826D' }
    ],
    maintenance: 'Washable with water jet. Non-fading pigments guaranteed for 10+ years.',
    interiorExterior: 'Exterior',
    popular: true
  },
  {
    id: 'tex-5',
    name: 'Satin Pearl Parlina Finish',
    code: 'SK-PRL-03',
    category: 'Interior',
    description: 'A luxurious interior metallic plaster finish that catches ambient light with soft pearlescent reflection, changing hues smoothly as you walk by.',
    tactileFeel: 'Silky Velvet Touch',
    sheenLevel: 'Soft Iridescent Pearl Glow',
    thickness: '0.8 - 1.2 mm',
    image: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['Master Bedrooms', 'Dining Room Features', 'Jewelry Boutiques', 'Executive Cabins'],
    recommendedColors: [
      { name: 'Opal Pearl', hex: '#F0EFEA' },
      { name: 'Champagne Shimmer', hex: '#E6D7C3' },
      { name: 'Rose Gold Silk', hex: '#E8C5B8' },
      { name: 'Titanium Metallic', hex: '#C4C8CC' }
    ],
    maintenance: 'Gently wipeable with damp cloth.',
    interiorExterior: 'Interior',
    popular: true
  },
  {
    id: 'tex-6',
    name: 'Antique Terracotta Brick Texture',
    code: 'SK-BRK-05',
    category: 'Both',
    description: 'Recreates the warm nostalgia of exposed clay brickwork with precision grooved mortar joints, without adding heavy structural load.',
    tactileFeel: 'Authentic Rough Clay Brick',
    sheenLevel: 'Earthy Matte',
    thickness: '5.0 - 8.0 mm',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['Cafe Exteriors', 'Loft Apartments', 'Boundary Walls', 'Restaurant Interiors'],
    recommendedColors: [
      { name: 'Heritage Red Brick', hex: '#9E4738' },
      { name: 'Rustic Terracotta', hex: '#B5654C' },
      { name: 'Loft White Brick', hex: '#F2EFEB' },
      { name: 'Smoked Charcoal Brick', hex: '#3B3B3B' }
    ],
    maintenance: 'Sealed against dampness and efflorescence.',
    interiorExterior: 'Both',
    popular: true
  },
  {
    id: 'tex-7',
    name: 'Super Fine Roller Velvet',
    code: 'SK-SFR-12',
    category: 'Both',
    description: 'Ultra-refined uniform textured coating applied with micro-rollers for a subtle, sophisticated leather-like grain that hides minor wall flaws.',
    tactileFeel: 'Fine Velvet Grain',
    sheenLevel: 'Eggshell Soft Sheen',
    thickness: '1.2 - 1.8 mm',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['Residential Complex Corridors', 'Hospital Exterior Walls', 'Apartment Facades'],
    recommendedColors: [
      { name: 'Linen White', hex: '#F7F6F0' },
      { name: 'Pebble Grey', hex: '#C2C1BA' },
      { name: 'Pale Ochre', hex: '#E3C8A8' }
    ],
    maintenance: 'Easily scrubbable, dust repellent.',
    interiorExterior: 'Both',
    popular: false
  },
  {
    id: 'tex-8',
    name: 'Super Fine Spray Grain',
    code: 'SK-SFS-15',
    category: 'Exterior',
    description: 'Precision pneumatic spray texture delivering perfectly distributed micro-droplet stucco pattern across large commercial tower elevations.',
    tactileFeel: 'Uniform Micro-Stucco Drop',
    sheenLevel: 'Low Sheen Exterior Grade',
    thickness: '1.5 - 2.0 mm',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['Commercial Towers', 'Group Housing Societies', 'Institutional Buildings'],
    recommendedColors: [
      { name: 'Pure White Spray', hex: '#FAFAFA' },
      { name: 'Classic Beige', hex: '#EAE0D0' },
      { name: 'Cool Slate', hex: '#9AA0A6' }
    ],
    maintenance: 'High durability against wind-blown dust and heavy rains.',
    interiorExterior: 'Exterior',
    popular: false
  },
  {
    id: 'tex-9',
    name: 'Super Fine Compact Shield',
    code: 'SK-SFC-18',
    category: 'Exterior',
    description: 'Compressed dense acrylic matrix texture engineered for maximum scratch and scuff resistance on high-traffic exterior podiums.',
    tactileFeel: 'Dense Troweled Smooth Grain',
    sheenLevel: 'Matte Protective Finish',
    thickness: '2.0 - 2.5 mm',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['Building Podiums', 'Shopping Mall Entrances', 'Parking Elevational Walls'],
    recommendedColors: [
      { name: 'Concrete Grey', hex: '#9E9E9E' },
      { name: 'Sandstone Beige', hex: '#D8C3A5' }
    ],
    maintenance: 'Extremely tough matrix, pressure washer safe.',
    interiorExterior: 'Exterior',
    popular: false
  },
  {
    id: 'tex-10',
    name: 'Aquastop Hydrophobic Waterproof Coating',
    code: 'SK-WPF-01',
    category: 'Specialty',
    description: 'Elastomeric siliconized texture barrier capable of bridging hairline cracks up to 2mm while blocking monsoon water penetration completely.',
    tactileFeel: 'Flexible Rubbery Tactile Shield',
    sheenLevel: 'Low Sheen Matte',
    thickness: '1.5 - 2.0 mm',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['Heavy Windward Facades', 'Coastal & Rain-Exposed Walls', 'Basement Shaft Walls'],
    recommendedColors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Warm Cream', hex: '#F5F0E6' },
      { name: 'Mist Grey', hex: '#E0E4E8' }
    ],
    maintenance: 'Self-cleaning lotus effect technology — dirt washes away in rain.',
    interiorExterior: 'Exterior',
    popular: true
  },
  {
    id: 'tex-11',
    name: 'ThermaGuard Heat Reflective Cool Wall',
    code: 'SK-THR-02',
    category: 'Specialty',
    description: 'Infused with microscopic ceramic hollow spheres that reflect up to 88% of solar infrared radiation, reducing indoor wall temperature by 4°C to 7°C.',
    tactileFeel: 'Smooth Satin Thermal Barrier',
    sheenLevel: 'High Solar Reflective Matt',
    thickness: '1.2 - 1.5 mm',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['Sun-Exposed South/West Facades', 'Rooftop Parapets', 'Factory & School Exterior Walls'],
    recommendedColors: [
      { name: 'Solar Pure White', hex: '#FFFFFF' },
      { name: 'Ice Cream Beige', hex: '#FAF5EE' },
      { name: 'Reflective Platinum', hex: '#E8E8E8' }
    ],
    maintenance: 'Reduces HVAC cooling bills by up to 18%. Washable.',
    interiorExterior: 'Exterior',
    popular: true
  },
  {
    id: 'tex-12',
    name: 'Travertine Natural Limestone Texture',
    code: 'SK-TRV-09',
    category: 'Both',
    description: 'Recreates the authentic pitted grooves and subtle horizontal veining of natural Italian travertine limestone for high-end luxury residences.',
    tactileFeel: 'Chiseled Limestone Texture',
    sheenLevel: 'Silky Matte Stone',
    thickness: '2.5 - 3.5 mm',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    bestApplications: ['Luxury Villa Entrance Porticos', 'Feature Stairwell Walls', 'Boutique Hotel Facades'],
    recommendedColors: [
      { name: 'Roman Travertine', hex: '#E3D2BF' },
      { name: 'Navona Beige', hex: '#F0E5D8' },
      { name: 'Silver Travertine', hex: '#B8B5B1' }
    ],
    maintenance: 'Protective clear coat prevents dust accumulation in pits.',
    interiorExterior: 'Both',
    popular: true
  }
];
