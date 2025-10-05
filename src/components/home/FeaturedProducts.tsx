import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts = () => {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Top-rated gear chosen by fitness professionals</p>
          </div>
          <Button variant="outline" className="gap-2 hidden md:flex" asChild>
            <Link to="/products">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="gap-2" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
