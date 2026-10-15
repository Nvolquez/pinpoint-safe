import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, Truck, Key, Building2 } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "GPS para Vehículos",
    desc: "Protege tu vehículo personal con rastreo GPS en tiempo real, alertas y control total.",
    href: "/gps-vehicular",
  },
  {
    icon: Truck,
    title: "GPS para Flotas",
    desc: "Optimiza tus operaciones con monitoreo de flotilla empresarial en tiempo real.",
    href: "/rastreo-flotas",
  },
  {
    icon: Key,
    title: "GPS para Rent Car",
    desc: "Control total de tus vehículos de alquiler. Rastreo, alertas y reportes.",
    href: "/gps-rent-car",
  },
  {
    icon: Building2,
    title: "GPS para Financieras",
    desc: "Protege tu cartera vehicular con localización y apagado remoto.",
    href: "/gps-financieras",
  },
];

const ServicesPreview = () => (
  <section id="servicios" className="py-20 md:py-28 bg-card/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6">
              Nuestros {" "}
              <span className="text-gradient-glow">servicios</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Soluciones GPS para cada necesidad
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={s.href}
              className="block glass-card rounded-xl p-6 h-full hover:border-primary/40 transition-all group gradient-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <span className="text-primary text-sm font-semibold group-hover:underline">
                Ver más →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
