import { ProjectItem } from '../types';

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'DLF Magnolias Ultra-Luxury Villa Elevation',
    category: 'Luxury Villas',
    location: 'Golf Course Road, Gurugram',
    builderName: 'DLF Luxury Housing / Private Owner',
    areaCovered: '22,000 sq. ft.',
    productsUsed: ['SK Travertine Limestone (SK-TRV-09)', 'SK Board-Formed Concrete (SK-CNC-02)', 'Aquastop Hydrophobic Shield'],
    completionDate: 'November 2025',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Transforming a raw brick & concrete structure into a modern architectural landmark with Italian Travertine pitted plaster and fairface board-formed concrete accents.',
    customerReview: {
      quote: "SK Texture delivered exceptional precision. The Travertine finish on our 3-story elevation looks identical to real cut limestone slabs, with zero joints and total weatherproofing.",
      author: "Rajiv Singhania",
      role: "Villa Owner & MD, Apex Holdings"
    }
  },
  {
    id: 'proj-2',
    title: 'M3M Urbana Corporate Tower Facade',
    category: 'Commercial',
    location: 'Sector 67, Golf Course Ext. Road, Gurugram',
    builderName: 'M3M India',
    areaCovered: '85,000 sq. ft.',
    productsUsed: ['SK Quartz Mineral Granules (SK-GRN-08)', 'Super Fine Spray Grain (SK-SFS-15)', 'ThermaGuard Cool Wall'],
    completionDate: 'January 2026',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Large scale commercial elevation executed ahead of schedule with UV-reflective Quartz granules. Withstood monsoon storms without a single streak or color degradation.',
    customerReview: {
      quote: "We required a high-durability finish for 85k sq ft of commercial elevation. SK Texture's team deployed 40 master applicators and achieved a flawless uniform texture.",
      author: "Virender Ahuja",
      role: "VP Projects, M3M Infra"
    }
  },
  {
    id: 'proj-3',
    title: 'Bethesda Christian Academy Campus Facade',
    category: 'Schools',
    location: 'Revenue Estate of Bhati Village, Chattarpur, New Delhi',
    builderName: 'Bethesda Christian Welfare Society',
    areaCovered: '35,000 sq. ft.',
    productsUsed: ['SK Tuscan Earth Rustic (SK-RST-04)', 'SK Antique Terracotta Brick (SK-BRK-05)', 'Aquastop Hydrophobic Shield'],
    completionDate: 'October 2024',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Exterior architectural wall renovation employing our weather-proof rustic sand textures and heritage brick designs. Formulated with Aquastop hydrophobic silanes to block water penetration and resist algae growth on the school facades.',
    customerReview: {
      quote: "The exterior rustic finish provided by SK Texture has completely modernized our school building. It withstands heavy monsoon rains and looks highly aesthetic. The parents and administration are extremely pleased.",
      author: "Dr. P. J. Thomas",
      role: "Chairman, Bethesda Group of Institutions"
    }
  },
  {
    id: 'proj-4',
    title: 'Artemis Specialty Health Institute',
    category: 'Hospitals',
    location: 'Sector 51, Gurugram',
    builderName: 'Artemis Medicare',
    areaCovered: '62,000 sq. ft.',
    productsUsed: ['SK Aquastop Hydrophobic Shield (SK-WPF-01)', 'Super Fine Roller Velvet (SK-SFR-12)'],
    completionDate: 'October 2025',
    beforeImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Ultra-hygienic, washable, anti-microbial exterior coating engineered to resist monsoon dampness, fungal growth, and urban soot accumulation.',
    customerReview: {
      quote: "Healthcare facilities demand severe hygienic compliance. SK Texture provided non-toxic, anti-bacterial textured coatings that look pristine month after month.",
      author: "Karan Mehta",
      role: "Head Facilities Manager"
    }
  },
  {
    id: 'proj-5',
    title: 'IREO Skyon High-Rise Towers',
    category: 'Apartments',
    location: 'Sector 60, Gurugram',
    builderName: 'IREO City',
    areaCovered: '140,000 sq. ft.',
    productsUsed: ['Super Fine Spray Grain (SK-SFS-15)', 'SK Quartz Mineral Granules (SK-GRN-08)'],
    completionDate: 'May 2025',
    beforeImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'High-rise residential tower project featuring extreme weather protection and elegant off-white micro-stucco texture across 32 storeys.',
    customerReview: {
      quote: "Working at 120 meters height requires specialized safety protocols and steady hand skill. SK Texture executed 1.4 lakh sq ft with unmatched perfection.",
      author: "Anil Grover",
      role: "Chief Engineer, IREO"
    }
  },
  {
    id: 'proj-6',
    title: 'Central Park Resorts Sky Villas',
    category: 'Builders',
    location: 'Sector 48, Sohna Road, Gurugram',
    builderName: 'Central Park Developers',
    areaCovered: '95,000 sq. ft.',
    productsUsed: ['Carrara Stucco Marble (SK-MRB-01)', 'Satin Pearl Parlina (SK-PRL-03)'],
    completionDate: 'December 2025',
    beforeImage: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Interior luxury penthouse suites finished with metallic pearlescent Parlina and polished Venetian Stucco walls for high-net-worth buyers.',
    customerReview: {
      quote: "Our interior architects demanded a bespoke metallic pearl finish that would reflect ambient lighting smoothly. SK Texture exceeded our expectations.",
      author: "Sanjoy Roy",
      role: "Lead Architect, Studio Linea"
    }
  },
  {
    id: 'proj-7',
    title: 'Emaar Palm Drive Penthouse (Dummy)',
    category: 'Residential',
    location: 'Sector 66, Gurugram',
    builderName: 'Emaar India',
    areaCovered: '6,500 sq. ft.',
    productsUsed: ['Carrara Stucco Marble (SK-MRB-01)'],
    completionDate: 'Pending Update',
    beforeImage: 'https://images.unsplash.com/photo-1541535881962-e668f2244a26?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'],
    description: 'Dummy project details to be updated with project images and specific text later.',
    customerReview: {
      quote: "Placeholder review from client. Ready for update.",
      author: "Client Representative",
      role: "Resident"
    }
  },
  {
    id: 'proj-8',
    title: 'Tata Primanti Courtyard Villa (Dummy)',
    category: 'Luxury Villas',
    location: 'Sector 72, Gurugram',
    builderName: 'Tata Housing',
    areaCovered: '8,200 sq. ft.',
    productsUsed: ['SK Travertine Limestone (SK-TRV-09)'],
    completionDate: 'Pending Update',
    beforeImage: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'],
    description: 'Dummy project details to be updated with project images and specific text later.',
    customerReview: {
      quote: "Placeholder review from client. Ready for update.",
      author: "Client Representative",
      role: "Villa Owner"
    }
  },
  {
    id: 'proj-9',
    title: 'Vatika Signature Two (Dummy)',
    category: 'Builders',
    location: 'Sector 82, Gurugram',
    builderName: 'Vatika Group',
    areaCovered: '12,500 sq. ft.',
    productsUsed: ['SK Tuscan Earth Rustic (SK-RST-04)'],
    completionDate: 'Pending Update',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
    description: 'Dummy project details to be updated with project images and specific text later.',
    customerReview: {
      quote: "Placeholder review from client. Ready for update.",
      author: "Client Representative",
      role: "Developer"
    }
  },
  {
    id: 'proj-10',
    title: 'Godrej Frontier (Dummy)',
    category: 'Apartments',
    location: 'Sector 80, Gurugram',
    builderName: 'Godrej Properties',
    areaCovered: '45,000 sq. ft.',
    productsUsed: ['Super Fine Spray Grain (SK-SFS-15)'],
    completionDate: 'Pending Update',
    beforeImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80'],
    description: 'Dummy project details to be updated with project images and specific text later.',
    customerReview: {
      quote: "Placeholder review from client. Ready for update.",
      author: "Client Representative",
      role: "Project Head"
    }
  },
  {
    id: 'proj-11',
    title: 'Sobha City Tower (Dummy)',
    category: 'Apartments',
    location: 'Sector 108, Gurugram',
    builderName: 'Sobha Developers',
    areaCovered: '60,000 sq. ft.',
    productsUsed: ['SK Quartz Mineral Granules (SK-GRN-08)'],
    completionDate: 'Pending Update',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'],
    description: 'Dummy project details to be updated with project images and specific text later.',
    customerReview: {
      quote: "Placeholder review from client. Ready for update.",
      author: "Client Representative",
      role: "Site Engineer"
    }
  },
  {
    id: 'proj-12',
    title: 'Bestech Park View (Dummy)',
    category: 'Residential',
    location: 'Sector 92, Gurugram',
    builderName: 'Bestech India',
    areaCovered: '14,000 sq. ft.',
    productsUsed: ['Super Fine Roller Velvet (SK-SFR-12)'],
    completionDate: 'Pending Update',
    beforeImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'],
    description: 'Dummy project details to be updated with project images and specific text later.',
    customerReview: {
      quote: "Placeholder review from client. Ready for update.",
      author: "Client Representative",
      role: "Resident Manager"
    }
  },
  {
    id: 'proj-13',
    title: 'SS The Leaf (Dummy)',
    category: 'Residential',
    location: 'Sector 85, Gurugram',
    builderName: 'SS Group',
    areaCovered: '18,500 sq. ft.',
    productsUsed: ['SK Tuscan Earth Rustic (SK-RST-04)'],
    completionDate: 'Pending Update',
    beforeImage: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'],
    description: 'Dummy project details to be updated with project images and specific text later.',
    customerReview: {
      quote: "Placeholder review from client. Ready for update.",
      author: "Client Representative",
      role: "Resident"
    }
  },
  {
    id: 'proj-14',
    title: 'Trump Towers NCR Accent (Dummy)',
    category: 'Commercial',
    location: 'Sector 65, Gurugram',
    builderName: 'Trump Towers Delhi NCR',
    areaCovered: '8,000 sq. ft.',
    productsUsed: ['Satin Pearl Parlina (SK-PRL-03)'],
    completionDate: 'Pending Update',
    beforeImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1200&q=80'],
    description: 'Dummy project details to be updated with project images and specific text later.',
    customerReview: {
      quote: "Placeholder review from client. Ready for update.",
      author: "Client Representative",
      role: "Design Consultant"
    }
  },
  {
    id: 'proj-15',
    title: 'Pioneer Araya (Dummy)',
    category: 'Luxury Villas',
    location: 'Sector 62, Gurugram',
    builderName: 'Pioneer Urban',
    areaCovered: '11,000 sq. ft.',
    productsUsed: ['SK Travertine Limestone (SK-TRV-09)', 'Aquastop Hydrophobic Shield'],
    completionDate: 'Pending Update',
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'],
    description: 'Dummy project details to be updated with project images and specific text later.',
    customerReview: {
      quote: "Placeholder review from client. Ready for update.",
      author: "Client Representative",
      role: "Owner"
    }
  }
];
