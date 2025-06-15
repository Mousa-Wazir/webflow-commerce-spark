
import React, { useState } from "react";
import { CustomerDashboardHeader } from "@/components/customer-dashboard/CustomerDashboardHeader";
import { CustomerDashboardShell } from "@/components/customer-dashboard/CustomerDashboardShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function ProfileSettings() {
  const navigate = useNavigate();
  // Demo initial data
  const [form, setForm] = useState({
    name: "Ayesha",
    email: "ayesha@email.com",
    phone: "+92 300 1234567"
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // UI only. Normally submit to backend.
    alert("Profile saved (mock UI only).");
    navigate("/profile");
  }

  return (
    <>
      <CustomerDashboardHeader />
      <CustomerDashboardShell>
        <div className="max-w-2xl w-full mx-auto bg-white/90 border rounded-2xl shadow-lg p-6 mt-10 flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Profile Settings</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={form.name} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className="flex gap-2 mt-2">
              <Button type="submit" className="w-full sm:w-auto">Save</Button>
              <Button type="button" variant="outline" onClick={() => navigate("/profile")} className="w-full sm:w-auto">Cancel</Button>
            </div>
          </form>
        </div>
      </CustomerDashboardShell>
    </>
  );
}
