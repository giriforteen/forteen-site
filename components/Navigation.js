'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/Forteen_Logo.svg" 
              alt="Forteen Consulting" 
              width={180}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 transition">
              Services
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-orange-600 transition">
              Programs
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-700 hover:text-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/programs"
              className="block py-2 text-gray-700 hover:text-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
