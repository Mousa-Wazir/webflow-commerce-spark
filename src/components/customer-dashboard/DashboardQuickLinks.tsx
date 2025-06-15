
import React from "react";
import { ShoppingBag, Heart, MessageCircle, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

type QuickLink = {
  icon: React.ElementType;
  label: string;
  count: number;
  bg: string; // tailwind bg color
  path: string;
};

const quickLinks: QuickLink[] = [
  {
    icon: ShoppingBag,
    label: "My Orders",
    count: 3,
    bg: "from-blue-50 to-blue-100",
    path: "/orders",
  },
  {
    icon: Heart,
    label: "Wishlist",
    count: 7,
    bg: "from-pink-50 to-pink-100",
    path: "/wishlist",
  },
  {
    icon: MessageCircle,
    label: "Chats",
    count: 2,
    bg: "from-green-50 to-green-100",
    path: "/chat",
  },
  {
    icon: Package,
    label: "Active Rentals",
    count: 1,
    bg: "from-amber-50 to-amber-100",
    path: "/rentals",
  },
];

export function DashboardQuickLinks() {
  const navigate = useNavigate();

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-3 sm:mb-6 animate-fade-in">
      {quickLinks.map(({ icon: Icon, label, count, bg, path }) => (
        <button
          key={label}
          className={`
            flex flex-col items-center justify-center rounded-2xl py-4 sm:py-6 px-2 bg-gradient-to-br ${bg} shadow hover:scale-[1.05] transition-transform duration-200
            active:scale-95 focus:ring-2 focus:ring-black focus:outline-none
          `}
          onClick={() => navigate(path)}
        >
          <div className="relative">
            <Icon className="w-7 h-7 text-gray-800" />
            <span className="absolute -top-2 -right-3 min-w-6 h-6 px-2 bg-gray-900 text-white text-xs font-bold flex items-center justify-center rounded-full shadow">
              {count}
            </span>
          </div>
          <span className="mt-2 text-base font-medium text-gray-800">{label}</span>
        </button>
      ))}
    </div>
  );
}
