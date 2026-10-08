"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-slate-800 shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 animate-fade-in-up"
    >
      <ArrowUp className="w-5 h-5 text-sky-400" />
    </button>
  );
}
