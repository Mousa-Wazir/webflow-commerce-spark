
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CustomerSidebar } from "./CustomerSidebar";
import { cn } from "@/lib/utils";

export function CustomerDashboardShell({
  children,
}: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {/* Use a subtle white & grey background gradient */}
      <div className="min-h-screen flex w-full bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-colors">
        {/* Sidebar (sticky, collapsible) */}
        <CustomerSidebar />
        {/* Main content area */}
        <main className={cn(
          "flex-1 flex flex-col items-center px-2 sm:px-8 pb-8 pt-4 w-0"
        )}>
          {/* Sidebar hamburger button for mobile */}
          <div className="block sm:hidden self-start mt-2">
            <SidebarTrigger>
              <span className="sr-only">Open sidebar</span>
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 transition border border-gray-300">
                <span className="w-5 h-0.5 bg-gray-700 mb-1 block rounded"></span>
                <span className="w-5 h-0.5 bg-gray-700 mt-1 block rounded"></span>
              </div>
            </SidebarTrigger>
          </div>
          <div className="w-full max-w-6xl animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

