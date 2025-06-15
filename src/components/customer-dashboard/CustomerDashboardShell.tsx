
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CustomerSidebar } from "./CustomerSidebar";
import { cn } from "@/lib/utils";

export function CustomerDashboardShell({
  children,
}: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        {/* Sidebar (sticky, collapsible) */}
        <CustomerSidebar />
        {/* Main content area */}
        <main className={cn(
          "flex-1 flex flex-col items-center px-2 sm:px-8 pb-8 pt-4 w-0",
        )}>
          {/* Sidebar hamburger button for mobile */}
          <div className="block sm:hidden self-start mt-2">
            <SidebarTrigger>
              <span className="sr-only">Open sidebar</span>
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <span className="w-5 h-0.5 bg-gray-600 mb-1 block rounded"></span>
                <span className="w-5 h-0.5 bg-gray-600 mt-1 block rounded"></span>
              </div>
            </SidebarTrigger>
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
