
export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  images?: string[];
  type: 'Residential' | 'Commercial' | 'Industrial' | 'Subsale' | 'For Rent';
  description: string;
  features: string[];
}

export interface SearchFilters {
  area: string;
  budget: string;
  type: string;
}
