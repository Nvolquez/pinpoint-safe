import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const CTASection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6">
              Protege tu vehículo {" "}
              <span className="text-gradient-glow">hoy mismo</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Tu vehículo no puede esperar. Protégelo ahora con la mejor tecnología GPS de República Dominicana.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="https://wa.me/18097869806"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-[#25D366] text-white font-heading font-bold text-lg hover:bg-[#1ebe5d] transition-colors flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.228A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.696-6.044-1.882l-.424-.296-2.794.733.746-2.72-.325-.463A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
            WhatsApp ahora
          </a>
          <a
            href="mailto:info@setragps.com"
            className="px-8 py-4 rounded-lg border border-border text-foreground font-heading font-bold text-lg hover:bg-muted transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Correo electrónico
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
