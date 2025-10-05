import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-gym.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium fitness equipment"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold">
              🔥 Premium Fitness Equipment
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover premium fitness equipment, expert-curated gear, and top nutrition supplements. 
            Everything you need to reach your peak performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 text-lg px-8" asChild>
              <Link to="/products">
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/products?category=equipment">
                View Equipment
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Premium Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
