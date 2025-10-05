import { Link } from 'react-router-dom';
import { Dumbbell, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Dumbbell className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              LS Fitness
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/products?category=equipment" className="text-foreground hover:text-primary transition-colors">
              Equipment
            </Link>
            <Link to="/products?category=nutrition" className="text-foreground hover:text-primary transition-colors">
              Nutrition
            </Link>
          </div>

          <Button variant="default" size="sm" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Cart (0)
          </Button>
        </div>
      </div>
    </nav>
  );
};
