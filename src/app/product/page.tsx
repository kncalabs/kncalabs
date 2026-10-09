import React from "react";
import Navbar from "@/components/Navbar";
import ProductVisualization from "@/components/ProductVisualization";
import OneSourceManyOutputs from "@/components/OneSourceManyOutputs";
import Capabilities from "@/components/Capabilities";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Meet KNCA Product Features",
  description: "Explore KNCA's AI-native content automation capabilities, multi-channel workflow, and single source transformation.",
};

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#080c14] text-slate-100 relative">
      <Navbar />
      <div className="pt-24 space-y-12">
        <ProductVisualization />
        <OneSourceManyOutputs />
        <Capabilities />
        <WaitlistCTA />
      </div>
      <Footer />
    </main>
  );
}
