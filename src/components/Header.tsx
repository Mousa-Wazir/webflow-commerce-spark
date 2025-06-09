
import { useState } from 'react';
import { Menu, Search, ShoppingBag, User, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-600">LocalRent</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleTabClick(item.name)}
                className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 hover:shadow-md ${
                  activeTab === item.name
                    ? 'bg-orange-100 text-orange-600 shadow-md border-b-2 border-orange-500'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* NADRA Verification - Prominent */}
            <Button variant="outline" size="sm" className="hidden md:flex border-green-500 text-green-600 hover:bg-green-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-300">
              <Shield className="h-4 w-4 mr-2" />
              NADRA Verify
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-orange-100 hover:shadow-md transition-all duration-300">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-orange-100 hover:shadow-md transition-all duration-300">
              <User className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-orange-100 hover:shadow-md transition-all duration-300">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-orange-100 hover:shadow-md transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleTabClick(item.name)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 hover:shadow-md ${
                    activeTab === item.name
                      ? 'bg-orange-100 text-orange-600 shadow-md border-l-4 border-orange-500'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button variant="ghost" className="w-full justify-start hover:bg-orange-100 hover:shadow-md transition-all duration-300">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
                <Button variant="outline" className="w-full justify-start border-green-500 text-green-600 hover:bg-green-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-300">
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
