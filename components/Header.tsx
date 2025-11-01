'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dark border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">As</span>
              <span className="text-primary"> Multi</span>
            </div>
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-dark-card rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-dark-card rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-dark-card rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-dark-card rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/disclaimer"
              className="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-dark-card rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
