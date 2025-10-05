import { Link } from 'react-router-dom';
import { Dumbbell, Mail, Phone, MapPin } from 'lucide-react';
import moment from "moment";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">LS Fitness</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted source for premium fitness equipment and gear. Helping you achieve your fitness goals.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=equipment" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/products?category=nutrition" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Nutrition
                </Link>
              </li>
              <li>
                <Link to="/products?category=apparel" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Apparel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary" />
                ls_fitness.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary" />
                8125815404
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {moment().year()} LS Fitness. All rights reserved. | Affiliate Disclosure: We may earn commissions from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  );
};
