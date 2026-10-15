import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ServicesPreview from "@/components/sections/ServicesPreview";
import AppDemo from "@/components/sections/AppDemo";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Brands from "@/components/sections/Brands";
import CTASection from "@/components/sections/CTASection";
import ContactForm from "@/components/sections/ContactForm";
import { Helmet } from "react-helmet-async";

const Index = () => (
  <>
    <Helmet>
      <title>Rastreo GPS Vehicular en RD | Setra GPS</title>
      <meta name="description" content="Protege tu vehículo con rastreo GPS en tiempo real, alertas y control total desde tu celular. Instalación rápida en República Dominicana." />
      <meta name="keywords" content="rastreo GPS vehicular, GPS para carros en República Dominicana, localizador GPS RD, rastreo de vehículos en tiempo real, GPS para flotillas" />
      <link rel="canonical" href="https://setragps.com" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Setra GPS",
        "description": "Rastreo GPS vehicular en República Dominicana",
        "telephone": "+1-809-786-9806",
        "address": { "@type": "PostalAddress", "addressLocality": "Santo Domingo", "addressCountry": "DO" },
        "url": "https://setragps.com"
      })}</script>
    </Helmet>
    <Navbar />
    <main>
      <Hero />
      <Benefits />
      <ProblemSolution />
      <ServicesPreview />
      <AppDemo />
      <Testimonials />
      <Clients />
      <Brands />
      <ContactForm />
      <CTASection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
