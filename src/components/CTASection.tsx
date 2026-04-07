import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/18097869806?text=Hola%2C%20quiero%20proteger%20mi%20vehículo%20con%20GPS";

const CTASection = () => (
  <section id="contacto" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
    <div className="absolute inset-0 grid-bg opacity-20" />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Protege tu vehículo{" "}
          <span className="text-gradient-alert">hoy mismo</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Tu vehículo no puede esperar. Contáctanos ahora y recibe instalación en menos de 24 horas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-foreground font-bold px-10 py-4 rounded-lg transition-colors text-lg w-full sm:w-auto"
          >
            <MessageCircle size={22} />
            WhatsApp
          </a>
          <a
            href="tel:+18097869806"
            className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary/50 text-foreground font-semibold px-10 py-4 rounded-lg transition-colors text-lg w-full sm:w-auto"
          >
            <Phone size={22} />
            Llamar ahora
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
