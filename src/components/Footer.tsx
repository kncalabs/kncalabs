"use client";

import React from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-slate-900/90 py-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: KNCA Labs / AI-powered content automation. / Founded 2023 · South Korea / Operated by Stay C Jeju */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-2 group text-white font-semibold">
              <div className="w-5 h-5 rounded-md bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:border-sky-400 transition-colors">
                <Cpu className="w-3 h-3 text-sky-400" />
              </div>
              <span className="font-extrabold tracking-tight">KNCA Labs</span>
            </Link>

            <span className="text-slate-700 hidden sm:inline">·</span>
            <span className="text-slate-400">AI-powered content automation.</span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span className="text-slate-400 font-mono">Founded 2023 · South Korea</span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span className="text-slate-400 font-mono">Operated by Stay C Jeju</span>
          </div>

          {/* Right: Clean Legal & Copyright (Zero Clutter) */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 justify-center md:justify-end">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms
            </Link>
            <span className="text-slate-800">|</span>
            <span className="text-slate-300 font-medium">© 2026 KNCA Labs</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
