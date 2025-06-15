
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
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Avatar UI
const userInfo = {
  name: "Ayesha",
  avatarUrl: "https://randomuser.me/api/portraits/women/46.jpg",
};

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
    <Sidebar className="z-40 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 w-[75px] sm:w-56 shadow-xl flex flex-col">
      <SidebarContent>
        {/* User avatar and name at the top */}
        <div className="flex items-center gap-3 px-4 py-4 mt-2">
          <img
            src={userInfo.avatarUrl}
            alt={userInfo.name}
            className="w-10 h-10 rounded-full border-2 border-indigo-400 object-cover shadow"
          />
          <span
            className={
              isMobile
                ? "text-base font-semibold text-white"
                : "hidden sm:block text-base font-semibold text-white"
            }
            style={{ lineHeight: "1" }}
          >
            {userInfo.name}
          </span>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-lg font-bold mt-3 mb-2 pl-6 hidden sm:block tracking-wide drop-shadow-lg">
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
