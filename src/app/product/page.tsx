import React from "react";
import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import SolutionSection from "@/components/SolutionSection";
import OsmuSection from "@/components/OsmuSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Meet KNCA Product Features",
  description: "Explore KNCA's AI-native content automation capabilities, multi-channel workflow, and single source transformation.",
};

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#080c14] text-slate-100 relative">
      <Navbar />
      <div className="pt-16">
        <ProductShowcase />
        <SolutionSection />
        <OsmuSection />
      </div>
      <Footer />
    </main>
  );
}
