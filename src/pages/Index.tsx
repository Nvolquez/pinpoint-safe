import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import DemoSection from "@/components/DemoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <BenefitsSection />
      <ProblemSection />
      <ServicesSection />
      <DemoSection />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
