"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Minimalist Wordmark: KNCA */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-base font-bold tracking-wider text-white uppercase font-mono">
              KNCA <span className="text-slate-500 font-light">LABS</span>
            </span>
          </Link>

          {/* Minimal Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-400">
            <Link
              href="#the-workflow"
              className="hover:text-white transition-colors"
            >
              Workflow
            </Link>
            <Link
              href="#capabilities"
              className="hover:text-white transition-colors"
            >
              Publishing
            </Link>
            <Link
              href="#the-idea"
              className="hover:text-white transition-colors"
            >
              The Idea
            </Link>
            <Link
              href="#trust-and-access"
              className="hover:text-white transition-colors"
            >
              Company
            </Link>
          </nav>

          {/* Right Action: Minimal High-Contrast Pill */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#trust-and-access"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/10 text-xs font-mono font-medium transition-all"
            >
              Request Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/5 pt-4 space-y-3 font-mono text-xs">
            <Link
              href="#the-workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-400 hover:text-white py-1"
            >
              Workflow
            </Link>
            <Link
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-400 hover:text-white py-1"
            >
              Publishing
            </Link>
            <Link
              href="#the-idea"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-400 hover:text-white py-1"
            >
              The Idea
            </Link>
            <Link
              href="#trust-and-access"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-400 hover:text-white py-1"
            >
              Company
            </Link>
            <div className="pt-2">
              <Link
                href="#trust-and-access"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-full bg-white text-black font-semibold text-xs"
              >
                Request Access
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
