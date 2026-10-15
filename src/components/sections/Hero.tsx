import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Rastreo GPS vehicular" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>

    <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-32">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse-glow" /> Tecnología GPS Avanzada
          </span>

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Rastreo GPS en República Dominicana:{" "}
            <span className="text-gradient-glow">Control total de tu vehículo</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
            Protege tu inversión con tecnología GPS avanzada 24/7. Rastreo vehicular confiable en toda República Dominicana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="https://wa.me/18097869806?text=Hola%2C%20quiero%20solicitar%20instalación%20de%20GPS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-bold text-lg glow-primary hover:opacity-90 transition-opacity text-center"
            >
              Solicitar instalación
            </a>
            <a
              href="https://wa.me/18097869806"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-secondary text-secondary font-heading font-bold text-lg hover:bg-secondary hover:text-secondary-foreground transition-colors text-center"
            >
              Hablar por WhatsApp
            </a>
            <a
              href="mailto:info@setragps.com?subject=Solicitud%20de%20información%20GPS"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-heading font-bold text-lg hover:bg-muted transition-colors text-center flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Enviar correo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
