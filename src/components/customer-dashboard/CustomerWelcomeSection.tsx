
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
    <section className="w-full max-w-3xl mx-auto mt-2 mb-4 flex items-center gap-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-2xl shadow-lg animate-fade-in p-5 sm:p-8 border-2 border-indigo-600/10">
      <img
        src={avatarUrl}
        alt={`${userName} avatar`}
        className="w-16 h-16 rounded-full border-4 border-indigo-300 shadow-md object-cover"
      />
      <div className="flex flex-col min-w-0">
        <span className="text-lg sm:text-2xl font-bold text-white drop-shadow">Welcome back, {userName} 👋</span>
        <span className="text-sm sm:text-base text-indigo-100 mt-1 truncate">{summary}</span>
      </div>
    </section>
  );
}
