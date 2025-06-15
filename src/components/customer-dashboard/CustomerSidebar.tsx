
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Home, ShoppingBag, Package, Heart, Star, MessageCircle, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

const items = [
  { label: "Home", icon: Home, href: "/dashboard" },
  { label: "Products", icon: ShoppingBag, href: "/products" },
  { label: "My Orders", icon: Package, href: "/orders" },
  { label: "Wishlist", icon: Heart, href: "/wishlist" },
  { label: "Reviews", icon: Star, href: "/reviews" },
  { label: "Chat", icon: MessageCircle, href: "/chat" },
  { label: "Profile", icon: User, href: "/profile" },
];

export function CustomerSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar className="z-40 min-h-screen bg-gray-900 w-[75px] sm:w-56">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-lg font-bold mt-4 mb-2 pl-6 hidden sm:block">
            Localena
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl my-1 text-sm font-medium transition
                    ${location.pathname === item.href
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"}
                    `}
                    onClick={() => navigate(item.href)}
                  >
                    <div className="inline-flex items-center w-full">
                      <item.icon size={22} className="mr-0 sm:mr-2" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter className="absolute bottom-0 left-0 w-full p-4 sm:pl-6 text-gray-500">
          <span className="text-xs">© {new Date().getFullYear()} Localena</span>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
