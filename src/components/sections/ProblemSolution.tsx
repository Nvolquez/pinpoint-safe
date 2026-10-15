import { motion } from "framer-motion";
import theftScene from "@/assets/theft-scene.jpg";

const ProblemSolution = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src={theftScene}
            alt="Robo de vehículo - protege tu inversión"
            width={800}
            height={600}
            loading="lazy"
            className="w-full h-auto rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="relative px-3 py-1 rounded-full bg-destructive/20 text-destructive text-sm font-medium border border-destructive/30">
              <span className="absolute inset-0 rounded-full bg-destructive/30 animate-ping" />
              <span className="relative">⚠️ Alerta de seguridad</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Mientras duermes… alguien podría estar{" "}
            <span className="text-gradient-glow">llevándose tu vehículo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Con Setra GPS tienes control total, alertas instantáneas y ubicación exacta en segundos. Tu vehículo no puede esperar.
          </p>
          <div className="space-y-3">
            {["Alertas en tiempo real al encender tu vehículo", "Ubicación exacta en segundos", "Apagado remoto del motor", "Historial de rutas completo"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse-glow" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/18097869806?text=Quiero%20proteger%20mi%20vehículo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-heading font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Protégelo ahora
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
