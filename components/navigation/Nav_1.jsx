'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 md:px-12 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/logo/logo_ilmolino.png"
            alt="Il Molino Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-black transition">Home</a>
          <a href="/gallery" className="hover:text-black transition">Gallery</a>
          <a href="/contact" className="hover:text-black transition">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/menu"
            className="bg-amber-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow hover:bg-amber-700 transition"
          >
            View Menu
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4 text-sm font-medium text-gray-700">
          <a href="/" onClick={() => setIsOpen(false)} className="block hover:text-black">Home</a>
          <a href="/gallery" onClick={() => setIsOpen(false)} className="block hover:text-black">Gallery</a>
          <a href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-black">Contact</a>

          <a
            href="/menu"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-amber-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-amber-700 transition"
          >
            View Menu
          </a>
        </div>
      )}
    </header>
  );
}