import { motion } from "framer-motion";
import { MapPin, Bell, Car, Lock, Smartphone, Satellite } from "lucide-react";

const benefits = [
  { icon: MapPin, title: "Rastreo en tiempo real", desc: "Ubicación exacta de tu vehículo segundo a segundo." },
  { icon: Bell, title: "Alertas de encendido/apagado", desc: "Notificaciones instantáneas cuando tu vehículo se enciende o apaga." },
  { icon: Car, title: "Historial de recorridos", desc: "Revisa todas las rutas y paradas realizadas." },
  { icon: Lock, title: "Apagado remoto", desc: "Desactiva el motor de tu vehículo desde tu celular." },
  { icon: Smartphone, title: "Control desde celular", desc: "Monitorea todo desde cualquier dispositivo." },
  { icon: Satellite, title: "Cobertura iternacional", desc: "Contamos con Sim Card (chip) internacionales para mayor cobertura toda República Dominicana y resto del mundo." },
];

const Benefits = () => (
  <section id="beneficios" className="py-20 md:py-28 bg-card/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6">
              ¿Por qué elegir {" "}
              <span className="text-gradient-glow">Setra GPS</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Supervisa tu vehículo en todo momento desde tu celular con tecnología confiable y precisa
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 hover:border-primary/40 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
