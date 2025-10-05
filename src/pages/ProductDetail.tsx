import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, ChevronLeft, Check } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-8 gap-2" asChild>
            <Link to="/products">
              <ChevronLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-lg px-4 py-2">
                  -{discount}% OFF
                </Badge>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3 capitalize">
                  {product.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-bold text-primary">₹ {product.price}</span>
                  {product.originalPrice && (
                    <span className="text-2xl text-muted-foreground line-through">
                      ₹ {product.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold">Key Features:</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2 text-lg flex-1" asChild>
                    <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="h-5 w-5" />
                      Buy Now
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" className="text-lg">
                    Add to Wishlist
                  </Button>
                </div>

                {product.inStock ? (
                  <p className="text-sm text-green-500 mt-4">✓ In Stock - Ships within 24 hours</p>
                ) : (
                  <p className="text-sm text-destructive mt-4">Out of Stock</p>
                )}
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
