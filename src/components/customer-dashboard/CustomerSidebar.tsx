
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
  useSidebar,
} from "@/components/ui/sidebar";
import { Package, Heart, Star, MessageCircle, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

const items = [
  { label: "My Orders", icon: Package, href: "/orders" },
  { label: "Wishlist", icon: Heart, href: "/wishlist" },
  { label: "Reviews", icon: Star, href: "/reviews" },
  { label: "Chat", icon: MessageCircle, href: "/chat" },
  { label: "Profile", icon: User, href: "/profile" },
];

export function CustomerSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useSidebar();

  return (
    <Sidebar className="z-40 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 w-[75px] sm:w-56 shadow-xl ">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-lg font-bold mt-4 mb-2 pl-6 hidden sm:block tracking-wide drop-shadow-lg">
            Localena
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl my-1 text-sm font-medium transition
                    ${
                      location.pathname === item.href
                        ? "bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 hover:text-white"
                    }
                    `}
                    onClick={() => navigate(item.href)}
                  >
                    <div className="inline-flex items-center w-full">
                      <item.icon size={22} className="mr-0 sm:mr-2" />
                      <span
                        className={
                          // Agar mobile hai to always show, warna sirf sm aur above pe visible
                          isMobile
                            ? "inline"
                            : "hidden sm:inline"
                        }
                      >
                        {item.label}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter className="absolute bottom-0 left-0 w-full p-4 sm:pl-6 text-gray-400">
          <span className="text-xs font-semibold tracking-wide">© {new Date().getFullYear()} Localena</span>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
