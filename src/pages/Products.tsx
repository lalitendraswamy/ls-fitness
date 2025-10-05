import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ProductCategory } from '@/types/product';

const categories: { value: ProductCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'equipment', label: 'Equipment' },
  { value: 'apparel', label: 'Apparel' },
  { value: 'nutrition', label: 'Nutrition' },
  { value: 'accessories', label: 'Accessories' },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as ProductCategory | null;
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(categoryParam || 'all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category: ProductCategory | 'all') => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Browse our complete collection of premium fitness gear
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'secondary'}
                onClick={() => handleCategoryChange(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="mb-6 text-muted-foreground">
            Showing {filteredProducts.length} products
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
