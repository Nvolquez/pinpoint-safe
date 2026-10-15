import { motion } from "framer-motion";
import appMockup from "@/assets/app-mockup.png";

const AppDemo = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6">
              Accede desde{" "}
              <span className="text-gradient-glow">cualquier lugar del mundo</span> y monitorea todo en tiempo real
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestra plataforma te permite ver la ubicación, historial de rutas, alertas y más desde tu celular o computadora.
          </p>
          <ul className="space-y-4">
            {[
              "Mapa interactivo con ubicación en vivo",
              "Panel de control intuitivo",
              "Reportes y estadísticas detalladas",
              "Compatible con iOS y Android",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                </div>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative animate-float">
            <img
              src={appMockup}
              alt="App de rastreo GPS Setra"
              width={800}
              height={800}
              loading="lazy"
              className="w-full max-w-md rounded-3xl"
            />
            <div className="absolute inset-0 rounded-3xl glow-primary opacity-30" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AppDemo;
