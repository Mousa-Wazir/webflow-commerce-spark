
import React from "react";

export function CustomerWelcomeSection({
  userName,
  avatarUrl,
  summary,
}: {
  userName: string;
  avatarUrl: string;
  summary: string;
}) {
  return (
    <section className="w-full max-w-3xl mx-auto mt-2 mb-4 flex items-center gap-4 bg-gradient-to-r from-gray-50 via-white to-gray-100 rounded-2xl shadow animate-fade-in p-5 sm:p-8">
      <img
        src={avatarUrl}
        alt={`${userName} avatar`}
        className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
      />
      <div className="flex flex-col min-w-0">
        <span className="text-lg sm:text-xl font-semibold text-gray-900">Welcome back, {userName} 👋</span>
        <span className="text-sm text-gray-600 mt-1 truncate">{summary}</span>
      </div>
    </section>
  );
}
