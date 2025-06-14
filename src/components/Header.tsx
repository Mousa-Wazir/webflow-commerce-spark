
import { useState } from 'react';
import { Menu, Search, ShoppingBag, User, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '#' }
  ];

  const getActiveTab = () => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.href === currentPath);
    return activeItem?.name || 'Home';
  };

  const handleTabClick = (tabName: string, href: string) => {
    if (href.startsWith('#')) {
      console.log(`${tabName} coming soon`);
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  const activeTab = getActiveTab();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')} 
              className="text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors"
            >
              Localena
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleTabClick(item.name, item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === item.name
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* NADRA Verification */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-200"
              onClick={() => navigate('/nadra-verification')}
            >
              <Shield className="h-4 w-4 mr-2" />
              NADRA Verify
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
              onClick={() => navigate('/signin')}
            >
              <User className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleTabClick(item.name, item.href)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    activeTab === item.name
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Button variant="ghost" className="w-full justify-start text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white"
                  onClick={() => navigate('/nadra-verification')}
                >
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
