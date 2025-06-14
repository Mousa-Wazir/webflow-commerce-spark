
import { useState } from 'react';
import { Menu, Search, Heart, User, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState([] as string[]);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '#' },
  ];

  const getActiveTab = () => {
    const currentPath = location.pathname;
    const activeItem = navItems.find((item) => item.href === currentPath);
    return activeItem?.name || 'Home';
  };

  // Wishlist demo logic: store in state
  const handleWishlistClick = () => {
    // Navigate to wishlist or show a toast (demo)
    alert('Wishlist coming soon!');
  };

  const handleCartClick = () => {
    // Navigate or show a toast
    alert('Cart feature coming soon!');
  };

  const activeTab = getActiveTab();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-[#E0E0E0] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-extrabold text-[#222] tracking-tight hover:text-[#000] transition-colors"
            >
              Localena
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (!item.href.startsWith('#')) navigate(item.href);
                }}
                className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                  activeTab === item.name
                    ? 'bg-[#222] text-white shadow-sm'
                    : 'text-[#444] hover:bg-[#F1F1F1] hover:text-[#000]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="text-[#222] hover:bg-[#F1F1F1] transition-all duration-200"
              onClick={handleWishlistClick}
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Button>
            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="text-[#222] hover:bg-[#F1F1F1] transition-all duration-200"
              onClick={handleCartClick}
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
            {/* User / Auth */}
            <Button
              variant="ghost"
              size="icon"
              className="text-[#222] hover:bg-[#F1F1F1] transition-all duration-200"
              onClick={() => navigate('/signin')}
            >
              <User className="h-5 w-5" />
            </Button>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#222] hover:bg-[#F1F1F1] transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#E0E0E0] bg-white shadow-lg">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (!item.href.startsWith('#')) navigate(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    activeTab === item.name
                      ? 'bg-[#222] text-white shadow-sm'
                      : 'text-[#444] hover:bg-[#F1F1F1] hover:text-[#000]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-[#E0E0E0] space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[#222] hover:bg-[#F1F1F1]"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[#222] hover:bg-[#F1F1F1]"
                  onClick={handleWishlistClick}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[#222] hover:bg-[#F1F1F1]"
                  onClick={handleCartClick}
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Cart
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
