import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/process', label: 'Process' },
  { path: '/industries', label: 'Industries' },
  { path: '/infrastructure', label: 'Machinery' },
  { path: '/contact', label: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img src="/ahg-logo.jpg" alt="AHG" className="h-16 w-auto flex-shrink-0" loading="eager" />
            <div className="leading-tight">
              <span className="block text-base font-bold text-[hsl(222,52%,28%)]">Accurate Heavy Grinding</span>
              <span className="block text-xs text-muted-foreground">Precision Granite Services</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, label }) => {
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                    active
                      ? 'text-[hsl(222,52%,28%)] bg-[hsl(222,52%,28%)]/8'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded text-muted-foreground hover:text-foreground hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-3 space-y-1">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === path
                    ? 'text-[hsl(222,52%,28%)] bg-[hsl(222,52%,28%)]/8'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
