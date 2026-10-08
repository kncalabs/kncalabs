"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cpu, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["product", "how-it-works", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/60 py-3.5 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand: KNCA Labs */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 p-0.5 flex items-center justify-center group-hover:border-sky-500/50 transition-colors">
              <Cpu className="w-5 h-5 text-sky-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">
                KNCA Labs
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono font-medium border border-slate-700">
                AI
              </span>
            </div>
          </Link>

          {/* Middle/Right Active Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#product"
              className={`text-sm font-medium transition-colors ${
                activeSection === "product" ? "text-sky-400 font-bold" : "text-slate-300 hover:text-white"
              }`}
            >
              Product
            </Link>
            <Link
              href="#how-it-works"
              className={`text-sm font-medium transition-colors ${
                activeSection === "how-it-works" ? "text-sky-400 font-bold" : "text-slate-300 hover:text-white"
              }`}
            >
              How It Works
            </Link>
            <Link
              href="#about"
              className={`text-sm font-medium transition-colors ${
                activeSection === "about" ? "text-sky-400 font-bold" : "text-slate-300 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium transition-colors ${
                activeSection === "contact" ? "text-sky-400 font-bold" : "text-slate-300 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right CTA Button: Explore KNCA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#product"
              className="relative inline-flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 px-4.5 py-2.5 rounded-xl transition-all"
            >
              <span>Explore KNCA</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080c14]/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-3">
            <Link
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 font-medium ${activeSection === "product" ? "text-sky-400 font-bold" : "text-slate-300"}`}
            >
              Product
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 font-medium ${activeSection === "how-it-works" ? "text-sky-400 font-bold" : "text-slate-300"}`}
            >
              How It Works
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 font-medium ${activeSection === "about" ? "text-sky-400 font-bold" : "text-slate-300"}`}
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 font-medium ${activeSection === "contact" ? "text-sky-400 font-bold" : "text-slate-300"}`}
            >
              Contact
            </Link>
          </nav>
          <div className="pt-2">
            <Link
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center inline-flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 border border-slate-700 py-3 rounded-xl"
            >
              <span>Explore KNCA</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
