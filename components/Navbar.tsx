"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Schedule", href: "/schedule" },
    { label: "Standings", href: "/standings" },
    { label: "Teams", href: "/teams" },
    { label: "Bracket", href: "/bracket" },
    { label: "Stats", href: "/stats" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27] border-b border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-bold text-primary-500">
              FFSA CDS
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-semibold text-[#e0e0e0] hover:text-primary-500 transition-colors duration-200 border-b-2 border-transparent hover:border-primary-500"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#e0e0e0] hover:text-primary-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[#1f2937] bg-[#0f1724] pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 font-semibold text-[#e0e0e0] hover:text-primary-500 hover:bg-[#1a1f35] transition-colors duration-200 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

