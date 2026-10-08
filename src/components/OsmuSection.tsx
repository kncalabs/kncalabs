"use client";

import React from "react";
import { FileText, Video, Film, Share2, Mail, Image as ImageIcon, Sliders, Sparkles, ArrowUpRight } from "lucide-react";

export default function OsmuSection() {
  const outputs = [
    {
      id: "blog",
      title: "Blog",
      desc: "Designed to support SEO-optimized articles and long-form posts.",
      icon: FileText,
      tag: "Editorial",
      status: "Planned workflow"
    },
    {
      id: "short-video",
      title: "Short-form Video",
      desc: "Designed to support short-form scripts and caption structuring.",
      icon: Video,
      tag: "Video",
      status: "Planned workflow"
    },
    {
      id: "long-video",
      title: "Long-form Video",
      desc: "Designed to support long-form video briefing scripts.",
      icon: Film,
      tag: "Video",
      status: "Planned workflow"
    },
    {
      id: "social-posts",
      title: "Social Posts",
      desc: "Designed to support platform-tailored social media summaries.",
      icon: Share2,
      tag: "Social",
      status: "Planned workflow"
    },
    {
      id: "newsletter",
      title: "Newsletter",
      desc: "Designed to support email newsletter briefings.",
      icon: Mail,
      tag: "Email",
      status: "Planned workflow"
    },
    {
      id: "image-prompts",
      title: "Image Prompts",
      desc: "Designed to support visual asset image prompt generation.",
      icon: ImageIcon,
      tag: "Visual",
      status: "Planned workflow"
    },
    {
      id: "platform-specific",
      title: "Platform-specific Content",
      desc: "Designed to support custom format and tone optimization for target channels.",
      icon: Sliders,
      tag: "Custom",
      status: "Planned workflow"
    }
  ];

  return (
    <section id="osmu" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
            One Source Multi Use
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            One Source. <span className="text-gradient">Multiple Uses.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Designed to support single source transformation into multi-channel output formats.
          </p>
        </div>

        {/* Center Hub & 7 Surrounding Output Nodes */}
        <div className="mt-16 max-w-6xl mx-auto">
          
          {/* Central Source Hub Card */}
          <div className="max-w-md mx-auto rounded-3xl glass-panel p-8 text-center border-2 border-sky-500/30 bg-sky-950/10 shadow-2xl relative">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-sky-400 font-bold tracking-widest uppercase">
              INPUT CORE
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1">
              ONE SOURCE
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Designed to ingest a single source text and pipeline multi-channel output generation.
            </p>
          </div>

          {/* Connecting Branching Lines Label */}
          <div className="text-center my-8">
            <span className="text-xs font-mono text-slate-500 border border-slate-800 px-4 py-1.5 rounded-full bg-slate-950">
              ↓ Planned Workflows for Multi-Channel Expansion ↓
            </span>
          </div>

          {/* 7 Output Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outputs.map((out) => {
              const Icon = out.icon;
              return (
                <div
                  key={out.id}
                  className="glass-panel p-6 rounded-2xl space-y-3 glass-panel-hover border border-slate-800 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 border border-slate-800 px-2 py-0.5 rounded-full bg-slate-950">
                        {out.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white flex items-center justify-between">
                        <span>{out.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-500" />
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">
                        {out.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
