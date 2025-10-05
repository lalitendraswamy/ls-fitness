import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,82,0,0.15)]">
      {discount > 0 && (
        <Badge className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground">
          -{discount}%
        </Badge>
      )}
      
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <div className="flex items-center gap-1 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-semibold">{product.rating}</span>
          </div>
          <span className="text-muted-foreground">({product.reviews})</span>
        </div>

        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">₹ {product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹ {product.originalPrice}
            </span>
          )}
        </div>

        <Button className="w-full gap-2" asChild>
          <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="h-4 w-4" />
            Buy Now
          </a>
        </Button>
      </div>
    </div>
  );
};
