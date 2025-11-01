'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dark border-b border-dark-border sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-primary">As</span> Multi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/categories" className="text-gray-300 hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/disclaimer" className="text-gray-300 hover:text-primary transition-colors">
              Disclaimer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/categories" className="block text-gray-300 hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/disclaimer" className="block text-gray-300 hover:text-primary transition-colors">
              Disclaimer
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
