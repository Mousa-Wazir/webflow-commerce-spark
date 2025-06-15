
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
    bg: "from-indigo-100 via-indigo-50 to-white",
    path: "/orders",
  },
  {
    icon: Heart,
    label: "Wishlist",
    count: 7,
    bg: "from-pink-100 via-pink-50 to-white",
    path: "/wishlist",
  },
  {
    icon: MessageCircle,
    label: "Chats",
    count: 2,
    bg: "from-green-100 via-green-50 to-white",
    path: "/chat",
  },
  {
    icon: Package,
    label: "Active Rentals",
    count: 1,
    bg: "from-amber-100 via-amber-50 to-white",
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
            flex flex-col items-center justify-center rounded-2xl py-4 sm:py-6 px-2
            bg-gradient-to-br ${bg} shadow-md hover:shadow-xl hover:scale-[1.06] active:scale-95 transition-transform duration-300
            focus:ring-2 focus:ring-indigo-500 focus:outline-none
            border border-gray-200
          `}
          onClick={() => navigate(path)}
        >
          <div className="relative">
            <Icon className="w-7 h-7 text-gray-800 drop-shadow" />
            <span className="absolute -top-3 -right-4 min-w-6 h-6 px-2
              bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-white text-xs font-bold flex items-center justify-center rounded-full shadow-md border border-white">
              {count}
            </span>
          </div>
          <span className="mt-2 text-base font-medium text-gray-800">{label}</span>
        </button>
      ))}
    </div>
  );
}
