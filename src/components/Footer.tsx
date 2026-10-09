"use client";

import React from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080c14] border-t border-slate-900 py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 p-0.5 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-sky-400" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">KNCA Labs</span>
            </Link>

            <p className="text-slate-300 font-medium text-xs leading-relaxed">
              AI-powered content automation company based in South Korea.
            </p>

            <div className="pt-2 border-t border-slate-800/80 max-w-sm space-y-1.5 text-xs text-slate-400 font-sans leading-relaxed">
              <p className="text-slate-300 font-mono text-[11px]">
                Founded in 2023 · South Korea
              </p>
              <p className="text-slate-300">
                <strong className="text-slate-200 font-semibold">Business Name:</strong> Stay C Jeju (스테이씨 제주)
              </p>
              <p className="text-slate-400 text-[11px]">
                KNCA Labs is operated by Stay C Jeju.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-6 flex flex-wrap gap-8 justify-start md:justify-end">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-white font-mono uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#product" className="hover:text-white transition-colors">
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-white font-mono uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 KNCA Labs. Operated by Stay C Jeju.</p>
          <div className="flex items-center gap-4 text-slate-500 font-mono text-[11px]">
            <span className="hover:text-slate-300 transition-colors">Designed with Integrity</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors">Static Export Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
