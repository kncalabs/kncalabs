import React from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About KNCA Labs",
  description: "Learn more about KNCA Labs, an independent software studio building AI-powered content automation tools.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080c14] text-slate-100 relative">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
        <WaitlistCTA />
      </div>
      <Footer />
    </main>
  );
}
