"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Sparkles } from "lucide-react";

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

            <p className="text-slate-300 font-medium text-xs">
              AI Content Automation Platform
            </p>

            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              KNCA Labs is an independent software studio focused on building practical AI-powered automation tools for content creation and digital workflows.
            </p>

            <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[11px] pt-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Claude for Startups Candidate Web Showcase</span>
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
          <p>© 2026 KNCA Labs. All rights reserved.</p>
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
