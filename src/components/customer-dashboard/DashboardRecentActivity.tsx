import React from "react";
import { User, ShoppingBag, MessageCircle, Package, Heart } from "lucide-react";

interface ActivityItem {
  icon: React.ElementType;
  content: string;
  time: string;
}

const recentData: ActivityItem[] = [
  {
    icon: ShoppingBag,
    content: "You placed order #2394 for 2 items.",
    time: "2 hours ago"
  },
  {
    icon: Heart,
    content: "Added 'Designer Handbag' to wishlist.",
    time: "3 hours ago"
  },
  {
    icon: MessageCircle,
    content: "Messaged seller about 'Coffee Table'.",
    time: "Yesterday"
  },
  {
    icon: Package,
    content: "Rental: 'Traditional Dress' is now active.",
    time: "2 days ago"
  },
  {
    icon: User,
    content: "Profile updated.",
    time: "3 days ago"
  },
]

export function DashboardRecentActivity() {
  return (
    <section className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow p-4 sm:p-6 animate-fade-in mt-2">
      <div className="flex items-center mb-3">
        <span className="font-bold text-lg text-black">Recent Activity</span>
      </div>
      <div className="divide-y divide-gray-100 max-h-48 sm:max-h-64 overflow-y-auto pr-1 scroll-smooth">
        {recentData.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-3 first:pt-0 last:pb-0 animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <item.icon className="w-6 h-6 text-black flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-sm text-black truncate">{item.content}</span>
              <span className="text-xs text-gray-600">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
