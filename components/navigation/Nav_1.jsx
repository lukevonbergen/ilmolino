'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => pathname === href;

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
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 relative">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`relative pb-1 transition hover:text-black ${
                isActive(href) ? 'text-black' : ''
              }`}
            >
              {label}
              {isActive(href) && (
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q25,10 50,5 T100,5"
                    fill="none"
                    stroke="#D97706"  // amber-600
                    strokeWidth="2"
                  />
                </svg>
              )}
            </a>
          ))}
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
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block hover:text-black"
            >
              {label}
            </a>
          ))}
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