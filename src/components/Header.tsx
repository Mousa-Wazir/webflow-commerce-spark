
import { useState } from 'react';
import { Menu, Search, Heart, User, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCartWishlist } from '@/store/CartWishlistContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, wishlist } = useCartWishlist();

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

  const activeTab = getActiveTab();

  return (
    <header className="sticky top-0 z-50 bg-gray-600 backdrop-blur supports-[backdrop-filter]:bg-gray-600/90 border-b border-[#E0E0E0] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-extrabold text-white tracking-tight hover:text-gray-200 transition-colors"
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
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-100 hover:bg-gray-500 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* Wishlist */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-500 transition-all duration-200"
                onClick={() => navigate('/wishlist')}
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full border border-white">{wishlist.length}</span>
                )}
              </Button>
            </div>
            {/* Cart */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-500 transition-all duration-200"
                onClick={() => navigate('/cart')}
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full border border-white">{cart.length}</span>
                )}
              </Button>
            </div>
            {/* User / Auth */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-gray-500 transition-all duration-200"
              onClick={() => navigate('/signin')}
            >
              <User className="h-5 w-5" />
            </Button>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-gray-500 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#E0E0E0] bg-gray-600 shadow-lg">
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
                      ? 'bg-white text-gray-800 shadow-sm'
                      : 'text-gray-100 hover:bg-gray-500 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-[#E0E0E0] space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-500"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-500 relative"
                  onClick={() => {
                    navigate('/wishlist');
                    setIsMenuOpen(false);
                  }}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                  {wishlist.length > 0 && (
                    <span className="absolute top-1 right-8 bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded-full border border-white">{wishlist.length}</span>
                  )}
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-500 relative"
                  onClick={() => {
                    navigate('/cart');
                    setIsMenuOpen(false);
                  }}
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Cart
                  {cart.length > 0 && (
                    <span className="absolute top-1 right-7 bg-green-500 text-white text-xs font-bold px-1 py-0.5 rounded-full border border-white">{cart.length}</span>
                  )}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
