
import { useState } from 'react';
import { Menu, Search, ShoppingBag, User, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home Decor', href: '#' },
    { name: 'Furniture', href: '#' },
    { name: 'Clothing', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Handicrafts', href: '#' },
    { name: 'Health & Beauty', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-orange-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-600">LocalRent</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* NADRA Verification - Prominent */}
            <Button variant="outline" size="sm" className="hidden md:flex border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
              <Shield className="h-4 w-4 mr-2" />
              NADRA Verify
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-orange-100">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-orange-100">
              <User className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-orange-100">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-orange-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-orange-200 bg-white">
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-orange-200 space-y-3">
                <Button variant="ghost" className="w-full justify-start hover:bg-orange-100">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
                <Button variant="outline" className="w-full justify-start border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
                  <Shield className="h-5 w-5 mr-2" />
                  NADRA Verification
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
