export interface Product {
  id: string;
  name: string;
  category: 'equipment' | 'apparel' | 'nutrition' | 'accessories';
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  affiliateLink: string;
  inStock: boolean;
  featured?: boolean;
}

export type ProductCategory = Product['category'];
