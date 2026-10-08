import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProblemSolution from "@/components/ProblemSolution";
import SolutionSection from "@/components/SolutionSection";
import OsmuSection from "@/components/OsmuSection";
import ClaudeForStartups from "@/components/ClaudeForStartups";
import ProductShowcase from "@/components/ProductShowcase";
import AiArchitecture from "@/components/AiArchitecture";
import DevStageRoadmap from "@/components/DevStageRoadmap";
import AboutSection from "@/components/AboutSection";
import WaitlistCTA from "@/components/WaitlistCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#080c14] overflow-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ProblemSolution />
      <SolutionSection />
      <OsmuSection />
      <ClaudeForStartups />
      <ProductShowcase />
      <AiArchitecture />
      <DevStageRoadmap />
      <AboutSection />
      <WaitlistCTA />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
