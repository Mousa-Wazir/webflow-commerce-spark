
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export const SecuritySettingsSection: React.FC = () => {
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [twoFA, setTwoFA] = useState(false);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Password changed", description: "Password has been changed (mock UI)." });
    setPassword("");
    setShowForm(false);
  };

  return (
    <div className="flex flex-col gap-4 bg-gray-100/70 rounded-lg p-5 border">
      <h3 className="font-semibold text-base mb-1 text-gray-900">Security</h3>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <span className="w-36 text-gray-600 font-medium">Password:</span>
          <span className="font-mono tracking-wider text-gray-800">********</span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowForm(!showForm)}
          >
            Change Password
          </Button>
        </div>
        {showForm && (
          <form onSubmit={handleChangePassword} className="flex flex-col sm:flex-row items-center gap-2 mt-2">
            <Input
              type="password"
              name="new-password"
              placeholder="New password"
              autoComplete="new-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="max-w-xs"
              required
            />
            <Button type="submit" size="sm">Save</Button>
            <Button type="button" variant="ghost" size="sm" onClick={() => setShowForm(false)}>Cancel</Button>
          </form>
        )}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-2">
          <span className="w-36 text-gray-600 font-medium">Two-Factor Auth:</span>
          <Switch checked={twoFA} onCheckedChange={setTwoFA} />
          <span className="text-gray-500">{twoFA ? "Enabled" : "Disabled"}</span>
        </div>
      </div>
    </div>
  );
};
