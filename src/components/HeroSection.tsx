import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/18097869806?text=Hola%2C%20quiero%20información%20sobre%20GPS%20vehicular";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    <img
      src={heroBg}
      alt="Vehículo con rastreo GPS en tiempo real en ciudad nocturna"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

    <div className="container mx-auto px-4 relative z-10 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
          <span className="text-sm text-muted-foreground">Rastreo en vivo 24/7</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Control total de tu vehículo{" "}
          <span className="text-gradient-primary">en tiempo real</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-xl">
          Protege tu inversión con tecnología GPS avanzada 24/7. Alertas instantáneas, historial de recorridos y apagado remoto desde tu celular.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-colors glow-primary"
          >
            <MapPin size={20} />
            Solicitar instalación
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-foreground font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            <MessageCircle size={20} />
            Hablar por WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
