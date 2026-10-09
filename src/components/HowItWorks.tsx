"use client";

import React, { useState, useEffect } from "react";
import { FileInput, Brain, RefreshCw, SendHorizontal, ArrowRight, Check } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Capture",
      desc: "Collect your source content.",
      icon: FileInput,
      badge: "INPUT"
    },
    {
      number: "02",
      title: "Understand",
      desc: "AI analyzes context and meaning.",
      icon: Brain,
      badge: "ANALYSIS"
    },
    {
      number: "03",
      title: "Transform",
      desc: "Generate platform-specific content.",
      icon: RefreshCw,
      badge: "TRANSFORM"
    },
    {
      number: "04",
      title: "Distribute",
      desc: "Publish across multiple channels.",
      icon: SendHorizontal,
      badge: "DISTRIBUTE"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-[#080c14] relative border-t border-slate-800/80">
      {/* Background Subtle Tech Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 -z-10" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>PIPELINE WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            How It Works
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Turn one source into a complete content workflow — powered by AI.
          </p>
        </div>

        {/* 4-Step Visual Flow Grid with Seamless Connecting Motion */}
        <div className="mt-16 sm:mt-20 relative">
          
          {/* Subtle Connecting Beam Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-slate-800/80 -z-0 pointer-events-none">
            {/* Animated Flow Pulse Beam */}
            <div
              className="h-full bg-gradient-to-r from-transparent via-sky-400 to-transparent transition-all duration-700 ease-out"
              style={{
                width: "28%",
                marginLeft: `${activeStep * 24}%`
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="relative group flex flex-col cursor-pointer"
                >
                  <div
                    className={`h-full rounded-2xl border p-6 sm:p-7 transition-all duration-500 backdrop-blur-sm flex flex-col justify-between ${
                      isActive
                        ? "bg-slate-900/95 border-sky-500/60 shadow-lg shadow-sky-500/10 ring-1 ring-sky-500/30 scale-[1.02]"
                        : isPast
                        ? "bg-slate-900/60 border-slate-700/60"
                        : "bg-slate-900/30 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50"
                    }`}
                  >
                    <div className="space-y-4">
                      
                      {/* Top Row: Icon + Badge + Step Pulse */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "bg-sky-500/20 border-sky-400/80 text-sky-300 shadow-md shadow-sky-500/20"
                              : isPast
                              ? "bg-slate-800 border-slate-700 text-sky-400"
                              : "bg-slate-800/60 border-slate-700/60 text-slate-400"
                          }`}
                        >
                          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div className="flex items-center gap-2">
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                          )}
                          <span
                            className={`text-[10px] font-mono border px-2.5 py-0.5 rounded-full font-semibold tracking-wider transition-colors ${
                              isActive
                                ? "bg-sky-500/20 text-sky-300 border-sky-400/40"
                                : "bg-slate-950 text-slate-400 border-slate-800"
                            }`}
                          >
                            {step.badge}
                          </span>
                        </div>
                      </div>

                      {/* Step Number & Title */}
                      <div className="space-y-1 pt-1">
                        <span
                          className={`text-[11px] font-mono font-semibold tracking-wider block transition-colors ${
                            isActive ? "text-sky-300" : "text-sky-400/70"
                          }`}
                        >
                          {step.number} — STEP
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight flex items-center justify-between">
                          <span>{step.title}</span>
                          {isActive && (
                            <span className="text-[10px] font-mono text-sky-400 border border-sky-500/40 px-2 py-0.5 rounded-md bg-sky-950/60">
                              ACTIVE
                            </span>
                          )}
                        </h3>
                      </div>

                      {/* Step Description */}
                      <p className="text-sm text-slate-300 font-medium leading-relaxed pt-1">
                        {step.desc}
                      </p>

                    </div>

                    {/* Bottom Connecting Flow Motion Status */}
                    <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
                      <span className={isActive ? "text-sky-400 font-semibold" : "text-slate-500"}>
                        {isActive ? "Processing flow..." : isPast ? "Processed" : "Queued"}
                      </span>

                      {!isLast ? (
                        <div className="flex items-center gap-1">
                          <span className="hidden sm:inline text-[10px] text-slate-500">Next</span>
                          <ArrowRight
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isActive
                                ? "text-sky-400 translate-x-1"
                                : "text-slate-600"
                            }`}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                          <Check className="w-3.5 h-3.5" />
                          <span>Delivered</span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Stepper Progress Indicator Dots (Mobile & Tablet) */}
          <div className="flex justify-center items-center gap-2 mt-8 lg:hidden">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                aria-label={`Go to step ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeStep === i ? "w-8 bg-sky-400" : "w-2 bg-slate-800"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
