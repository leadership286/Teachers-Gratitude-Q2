"use client";
import React from "react";
import {  FaLinkedin } from "react-icons/fa"; // Icons for social media

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-500 to-purple-400 text-black py-6 ">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row px-6">
        {/* Footer Left: Logo or Text */}
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-xl font-bold">Rimsha Ansari</h3>
          <p className="mt-2 text-sm">&copy; 2025 All Rights Reserved</p>
        </div>

        {/* Footer Right: Social Media Icons */}
        <div className="flex space-x-6">

          <a href="https://linkedin.com/in/rimsha-ansari-leadership" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-400 transition duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </footer>
  );
}
