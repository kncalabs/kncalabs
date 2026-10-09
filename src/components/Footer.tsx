"use client";

import React from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#030712] border-t border-white/10 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand Identity: Linear / Apple Style */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-2 group text-white font-semibold">
              <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                <Cpu className="w-3 h-3 text-slate-300" />
              </div>
              <span className="font-bold tracking-tight">KNCA Labs</span>
            </Link>

            <span className="text-slate-700 hidden sm:inline">·</span>
            <span className="text-slate-400">AI-powered content automation company</span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span className="text-slate-500 font-mono">Founded 2023 · South Korea</span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span className="text-slate-500 font-mono">Operated by Stay C Jeju</span>
          </div>

          {/* Right: Legal & Copyright */}
          <div className="flex items-center gap-5 text-xs font-mono text-slate-500 justify-center md:justify-end">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms
            </Link>
            <span className="text-slate-800">/</span>
            <span className="text-slate-400 font-medium">© 2026 KNCA Labs. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
