
import React from "react";
import { CustomerDashboardHeader } from "@/components/customer-dashboard/CustomerDashboardHeader";
import { CustomerDashboardShell } from "@/components/customer-dashboard/CustomerDashboardShell";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  // Demo user data (in a real app, use context or API)
  const user = {
    firstName: "Ayesha",
    lastName: "Khan",
    email: "ayesha@email.com",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    phone: "+92 300 1234567",
  };

  return (
    <>
      <CustomerDashboardHeader />
      <CustomerDashboardShell>
        <div className="max-w-2xl w-full mx-auto bg-white/90 border rounded-2xl shadow-lg p-6 mt-10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={user.avatar}
              alt={user.firstName + " " + user.lastName}
              className="w-24 h-24 rounded-full border-4 border-indigo-200 shadow object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {user.firstName} {user.lastName}
              </h2>
              <div className="text-gray-500 text-sm">{user.email}</div>
              <div className="text-gray-500 text-sm">{user.phone}</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-4 border-t">
            <div className="flex gap-3">
              <span className="w-28 text-gray-500">First Name:</span>
              <span className="text-gray-900 font-medium">{user.firstName}</span>
            </div>
            <div className="flex gap-3">
              <span className="w-28 text-gray-500">Last Name:</span>
              <span className="text-gray-900 font-medium">{user.lastName}</span>
            </div>
            <div className="flex gap-3">
              <span className="w-28 text-gray-500">Email:</span>
              <span className="text-gray-900 font-medium">{user.email}</span>
            </div>
            <div className="flex gap-3">
              <span className="w-28 text-gray-500">Phone:</span>
              <span className="text-gray-900 font-medium">{user.phone}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button variant="outline" onClick={() => navigate("/profile/settings")} className="w-full sm:w-auto">
              Edit Profile Settings
            </Button>
          </div>
        </div>
      </CustomerDashboardShell>
    </>
  );
}
