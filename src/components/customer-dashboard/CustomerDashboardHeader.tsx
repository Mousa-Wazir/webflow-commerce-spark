
import { useNavigate, useLocation } from "react-router-dom";
import { Heart, Search, LogOut } from "lucide-react";
import { useCartWishlist } from "@/store/CartWishlistContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "#" }, // Replace with real route if available
];

export function CustomerDashboardHeader() {
  const { wishlist, cart } = useCartWishlist();
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = navItems.find((item) => item.href === location.pathname)?.name || "Home";

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 gap-3">
        {/* Logo */}
        <button
          onClick={() => navigate("/dashboard")}
          className="text-2xl font-extrabold text-gray-900 tracking-tight focus:outline-none hover:text-indigo-700 transition"
        >
          Localena
        </button>

        {/* Navbar Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              onClick={() => {
                if (!item.href.startsWith("#")) navigate(item.href);
              }}
              className={`rounded-md px-4 py-2 font-medium text-base ${
                activeTab === item.name
                  ? "bg-indigo-100 text-indigo-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Search Bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex-1 max-w-md mx-3 hidden md:block"
        >
          <div className="relative">
            <Input
              type="search"
              placeholder="Search dashboard..."
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-indigo-400"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </form>

        {/* Icons */}
        <div className="flex items-center gap-2 relative">
          {/* Cart - Attractive style */}
          <Button
            variant="ghost"
            size="icon"
            className="relative bg-green-500 hover:bg-green-600 active:bg-green-700 shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white flex items-center justify-center"
            onClick={() => navigate("/cart")}
            aria-label="Cart"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <Search className="h-5 w-5 text-white drop-shadow-lg" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full border border-white shadow">
                {cart.length}
              </span>
            )}
          </Button>
          
          {/* Wishlist */}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:bg-gray-200 relative"
            onClick={() => navigate("/wishlist")}
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full border border-white">
                {wishlist.length}
              </span>
            )}
          </Button>
          {/* Sign Out Icon (UI only, does not log out) */}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:bg-gray-200"
            aria-label="Sign Out"
            onClick={() => {
              // UI only: You can add real sign out logic later
              alert("Signed out (mock UI)");
            }}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col gap-2 px-3 pb-2">
        <div className="flex gap-2">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              onClick={() => {
                if (!item.href.startsWith("#")) navigate(item.href);
              }}
              className={`flex-1 font-medium text-base ${
                activeTab === item.name
                  ? "bg-indigo-100 text-indigo-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="w-full mt-2">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search dashboard..."
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-indigo-400"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </form>
      </div>
    </header>
  );
}
