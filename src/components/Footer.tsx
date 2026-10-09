"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#030712] border-t border-white/5 py-10 text-slate-500 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Pure Brand Wordmark & Copyright */}
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white font-bold tracking-wider hover:text-slate-300 transition-colors uppercase">
              KNCA LABS
            </Link>
            <span className="text-slate-700">·</span>
            <span className="text-slate-500">© 2026. All rights reserved.</span>
          </div>

          {/* Right: Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
