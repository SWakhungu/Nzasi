"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1f3a60] bg-opacity-90 text-white shadow z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo only */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Nzasi Ventures Logo"
            width={80}
            height={80}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-[#f7cf59] transition">
            About
          </a>
          <a href="#solution" className="hover:text-[#f7cf59] transition">
            Solution
          </a>
          <a href="#partnership" className="hover:text-[#f7cf59] transition">
            Partnership
          </a>
          <a href="#resources" className="hover:text-[#f7cf59] transition">
            Resources
          </a>
          <a href="#contact" className="hover:text-[#f7cf59] transition">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              // Close (X)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger (3 lines)
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

      {/* Mobile Menu Dropdown with Frosted Glass Effect */}
      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out origin-top ${
          menuOpen
            ? "max-h-96 opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-0"
        } overflow-hidden bg-[#2a4b7c]/70 backdrop-blur-md`}
      >
        <div className="px-6 py-4 space-y-4">
          <a
            href="#about"
            className="block hover:text-[#f7cf59] transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#solution"
            className="block hover:text-[#f7cf59] transition"
            onClick={() => setMenuOpen(false)}
          >
            Solution
          </a>
          <a
            href="#partnership"
            className="block hover:text-[#f7cf59] transition"
            onClick={() => setMenuOpen(false)}
          >
            Partnership
          </a>
          <a
            href="#resources"
            className="block hover:text-[#f7cf59] transition"
            onClick={() => setMenuOpen(false)}
          >
            Resources
          </a>
          <a
            href="#contact"
            className="block hover:text-[#f7cf59] transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
