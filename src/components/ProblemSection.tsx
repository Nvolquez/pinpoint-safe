import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle } from "lucide-react";
import theftScene from "@/assets/theft-scene.jpg";

const ProblemSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src={theftScene}
            alt="Escena de robo de vehículo nocturno"
            className="w-full h-80 lg:h-[420px] object-cover rounded-2xl"
            loading="lazy"
            width={960}
            height={640}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-2 glass px-4 py-2 rounded-full">
            <ShieldAlert className="text-secondary" size={18} />
            <span className="text-sm font-medium text-secondary">Alerta de seguridad</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Mientras duermes…{" "}
            <span className="text-gradient-alert">alguien podría estar llevándose tu vehículo</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            República Dominicana registra miles de robos de vehículos cada año. Sin un sistema de rastreo, recuperar tu inversión puede ser imposible.
          </p>

          <div className="space-y-4">
            {[
              "Control total desde tu celular",
              "Alertas instantáneas de movimiento",
              "Ubicación exacta en segundos",
              "Apagado remoto del motor",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-primary shrink-0" size={20} />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg transition-colors glow-secondary"
          >
            Protege tu vehículo ahora
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
