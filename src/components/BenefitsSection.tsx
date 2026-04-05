import { motion } from "framer-motion";
import { MapPin, Bell, Route, Lock, Smartphone, Satellite } from "lucide-react";

const benefits = [
  { icon: MapPin, title: "Rastreo en tiempo real", desc: "Localiza tu vehículo al instante con precisión GPS." },
  { icon: Bell, title: "Alertas de encendido/apagado", desc: "Recibe notificaciones al instante cuando tu vehículo se enciende." },
  { icon: Route, title: "Historial de recorridos", desc: "Consulta rutas anteriores y analiza los movimientos." },
  { icon: Lock, title: "Apagado remoto", desc: "Detén el motor de tu vehículo desde tu celular." },
  { icon: Smartphone, title: "Control desde celular", desc: "Gestiona todo desde una app intuitiva y rápida." },
  { icon: Satellite, title: "Cobertura nacional", desc: "Señal GPS en toda República Dominicana." },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          ¿Por qué elegir <span className="text-gradient-primary">Setra GPS</span>?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Supervisa tu vehículo en todo momento desde tu celular con tecnología confiable y precisa.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow">
              <b.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
