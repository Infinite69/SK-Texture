export type Category = 'All' | 'Exterior' | 'Interior' | 'Protective' | 'Specialty';

export type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Schools' | 'Hospitals' | 'Builders' | 'Apartments' | 'Luxury Villas';

export interface TextureItem {
  id: string;
  name: string;
  code: string;
  category: 'Exterior' | 'Interior' | 'Both' | 'Specialty';
  description: string;
  tactileFeel: string;
  sheenLevel: string;
  thickness: string;
  image: string;
  bestApplications: string[];
  recommendedColors: { name: string; hex: string }[];
  maintenance: string;
  interiorExterior: 'Interior' | 'Exterior' | 'Both';
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  builderName: string;
  areaCovered: string;
  productsUsed: string[];
  completionDate: string;
  beforeImage: string;
  afterImage: string;
  galleryImages: string[];
  description: string;
  customerReview: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  category: 'Exterior' | 'Interior' | 'Protective' | 'Specialty';
  features: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrLocation: string;
  image: string;
  rating: number;
  quote: string;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Waterproofing' | 'Durability' | 'Service & Pricing';
}

export interface SiteVisitFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  propertyType: string;
  areaSqFt: string;
  preferredDate: string;
  notes: string;
}
