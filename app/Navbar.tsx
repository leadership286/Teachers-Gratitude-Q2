"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-cyan-400 to-green-400 text-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-semibold">Rimsha Ansari</div>
          <span className="text-bg text-white">Teacher Gratitude Web</span>
        </div>

     
      </div>
    </nav>
  );
}
