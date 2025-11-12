import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LiveDashboard from "@/components/LiveDashboard";
import ImpactMetrics from "@/components/ImpactMetrics";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <LiveDashboard />
      <ImpactMetrics />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
