"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DemoRequestModal from "./DemoRequestModal";


export default function Navbar({ onRequestDemo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (section) => {
    setMenuOpen(false);
    router.push(`/#${section}`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1f3a60] bg-opacity-90 text-white shadow z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Nzasi Ventures Logo"
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>

        {/* CENTER MENU */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {["about", "solution", "partnership", "resources", "pricing", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className="hover:text-[#f7cf59] transition capitalize text-sm font-medium"
              >
                {section}
              </button>
            )
          )}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://afyanumeriq.com/login"
            className="flex items-center gap-1 text-[#f7cf59] hover:opacity-80 transition"
          >
          AfyaNumeriq Log In
          </a>

          <button
            onClick={onRequestDemo}
            className="px-4 py-2 bg-[#f7cf59] text-[#1f3a60] font-semibold rounded-xl hover:bg-yellow-400 transition"
          >
            Request Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-[#2a4b7c]/90 backdrop-blur-md`}
      >
        <div className="px-6 py-4 space-y-4">
          {["about", "solution", "partnership", "resources", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className="block w-full text-left hover:text-[#f7cf59] capitalize"
              >
                {section}
              </button>
            )
          )}

          <hr className="border-white/20 my-2" />

          <a
            href="https://afyanumeriq.com/login"
            className="block text-left hover:underline"
          >
            AfyaNumeriq Log In
          </a>

          <button
            onClick={() => {
              setMenuOpen(false);
              if (typeof onRequestDemo === "function")
              onRequestDemo();
            }}
            className="w-full mt-2 px-4 py-2 bg-[#f7cf59] text-[#1f3a60] font-semibold rounded-xl"
          >
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
