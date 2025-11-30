"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-semibold text-[#2D2D2D]">
              Minn Arc
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#categories" className="text-[#666666] hover:text-[#2D2D2D] transition-colors">
              Shop
            </Link>
            <Link href="/custom-orders" className="text-[#666666] hover:text-[#2D2D2D] transition-colors">
              Custom Orders
            </Link>
            <Link href="/patterns" className="text-[#666666] hover:text-[#2D2D2D] transition-colors">
              Patterns
            </Link>
            <a
              href={`https://ig.me/m/${process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5A3964] text-white px-6 py-2 rounded-full hover:bg-[#7B5285] transition-colors"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2D2D2D]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
            <Link
              href="/#categories"
              className="block text-[#666666] hover:text-[#2D2D2D] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/custom-orders"
              className="block text-[#666666] hover:text-[#2D2D2D] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Custom Orders
            </Link>
            <Link
              href="/patterns"
              className="block text-[#666666] hover:text-[#2D2D2D] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Patterns
            </Link>
            <a
              href={`https://ig.me/m/${process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#5A3964] text-white px-6 py-2 rounded-full text-center hover:bg-[#7B5285] transition-colors"
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
