import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'process', label: 'Our Process' },
    { id: 'industries', label: 'Industries' },
    { id: 'infrastructure', label: 'Plant Machinery & Specifications' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <nav className="bg-white border-b-2 border-primary/20 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="rounded-lg overflow-hidden bg-[hsl(222,48%,20%)] p-0.5">
              <img src="/ahg-logo.jpg" alt="AHG Logo" className="h-12 w-auto" loading="eager" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[hsl(222,52%,28%)] leading-tight">Accurate Heavy Grinding</h1>
              <p className="text-xs text-muted-foreground">Precision Granite Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => onSectionChange(item.id)}
                className={`text-sm font-medium ${activeSection === item.id ? 'bg-[hsl(222,52%,28%)] text-white hover:bg-[hsl(222,52%,24%)]' : 'text-[hsl(222,45%,20%)] hover:text-[hsl(222,52%,28%)] hover:bg-[hsl(222,52%,28%)]/8'}`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;