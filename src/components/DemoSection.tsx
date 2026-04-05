import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const DemoSection = () => (
  <section className="py-24 bg-card overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Accede desde <span className="text-gradient-primary">cualquier lugar</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Monitorea todo en tiempo real desde tu celular, tablet o computadora. Nuestra plataforma es rápida, segura e intuitiva.
          </p>

          <div className="space-y-5">
            {[
              { icon: Smartphone, text: "App móvil para iOS y Android" },
              { icon: Monitor, text: "Panel web de control avanzado" },
              { icon: Globe, text: "Acceso desde cualquier navegador" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="text-primary" size={20} />
                </div>
                <span className="text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={appMockup}
            alt="Aplicación móvil de rastreo GPS Setra mostrando mapa con rutas"
            className="w-72 sm:w-80 animate-float drop-shadow-2xl"
            loading="lazy"
            width={800}
            height={900}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default DemoSection;
