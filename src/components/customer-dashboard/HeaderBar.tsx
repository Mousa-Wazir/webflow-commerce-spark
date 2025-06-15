
import { useState } from "react";
import { Menu, X, ShoppingCart, Bell, User } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "My Orders", href: "/orders" },
  { name: "Wishlist", href: "/wishlist" },
  { name: "Reviews", href: "/reviews" },
  { name: "Chat", href: "/chat" },
  { name: "Profile", href: "/profile" },
];

export function HeaderBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-40 bg-gray-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-2 sm:px-6 h-16">
        {/* Logo */}
        <a href="/" className="text-xl font-extrabold text-white tracking-tight">Localena</a>
        {/* Desktop Tabs */}
        <div className="hidden lg:flex gap-1">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className="px-3 py-2 rounded-full text-sm font-semibold text-white hover:bg-gray-800 transition-all"
            >
              {tab.name}
            </a>
          ))}
        </div>
        {/* Right Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="relative text-white hover:bg-gray-800 rounded-full p-2 transition">
            <ShoppingCart size={22} />
            {/* Cart Count badge */}
            <span className="absolute -top-1 -right-1 text-xs bg-green-500 text-white rounded-full px-1">3</span>
          </button>
          <button className="relative text-white hover:bg-gray-800 rounded-full p-2 transition">
            <Bell size={22} />
            {/* Notification dot */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          {/* Profile Dropdown */}
          <button className="text-white hover:bg-gray-800 rounded-full p-2 transition">
            <User size={22} />
          </button>
          {/* Hamburger for mobile */}
          <button className="lg:hidden text-white ml-1" onClick={() => setOpen(!open)} aria-label="Open Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile menu overlay */}
      <div
        className={cn(
          "lg:hidden fixed top-0 left-0 w-full h-full bg-black/50 z-50 transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />
      <aside className={cn(
        "lg:hidden fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-xl z-50 transform transition-transform duration-300",
        open ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
            <span className="font-extrabold text-white text-xl">Localena</span>
            <button onClick={() => setOpen(false)} aria-label="Close Menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col mt-4 gap-0">
            {tabs.map(tab => (
              <a
                key={tab.name}
                href={tab.href}
                className="px-5 py-3 text-base font-medium hover:bg-gray-800 active:bg-gray-700 rounded-none transition"
                onClick={() => setOpen(false)}
              >
                {tab.name}
              </a>
            ))}
          </nav>
          <div className="flex gap-2 mt-auto px-4 py-4 border-t border-gray-800">
            <button className="bg-gray-800 rounded-full p-2">
              <ShoppingCart size={20} />
            </button>
            <button className="bg-gray-800 rounded-full p-2">
              <Bell size={20} />
            </button>
            <button className="bg-gray-800 rounded-full p-2">
              <User size={20} />
            </button>
          </div>
        </div>
      </aside>
    </header>
  );
}
