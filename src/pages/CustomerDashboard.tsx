
import React from "react";
import { CustomerDashboardShell } from "@/components/customer-dashboard/CustomerDashboardShell";
import { CustomerWelcomeSection } from "@/components/customer-dashboard/CustomerWelcomeSection";
import { DashboardQuickLinks } from "@/components/customer-dashboard/DashboardQuickLinks";
import { DashboardRecentActivity } from "@/components/customer-dashboard/DashboardRecentActivity";

export default function CustomerDashboard() {
  // Ideally, the name, avatarUrl, and summary would come from auth/user context.
  return (
    <CustomerDashboardShell>
      <div className="w-full flex flex-col gap-4 pt-4 px-2 sm:px-8">
        <CustomerWelcomeSection
          userName="Ayesha"
          avatarUrl="https://randomuser.me/api/portraits/women/46.jpg"
          summary="View your latest orders, manage your wishlist, and check current rentals."
        />
        <DashboardQuickLinks />
        <DashboardRecentActivity />
      </div>
    </CustomerDashboardShell>
  );
}
