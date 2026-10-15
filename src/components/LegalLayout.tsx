import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface LegalLayoutProps {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}

const SITE = "https://setragps.com";

/** Estructura común de las páginas legales y de información de la app. */
const LegalLayout = ({ title, description, path, children }: LegalLayoutProps) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE}${path}`} />
    </Helmet>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default LegalLayout;
