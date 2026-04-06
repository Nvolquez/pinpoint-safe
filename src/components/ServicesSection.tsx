import { motion } from "framer-motion";
import { Car, Building2, KeyRound, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Car, title: "Vehículos personales", desc: "Protege tu carro personal con GPS de alta precisión y monitoreo 24/7.", slug: "vehiculos" },
  { icon: Building2, title: "Flotas empresariales", desc: "Controla toda tu flota, optimiza rutas y reduce costos operativos.", slug: "flotas" },
  { icon: KeyRound, title: "Rent Car", desc: "Seguridad y control total para tu negocio de alquiler de vehículos.", slug: "rent-car" },
  { icon: Landmark, title: "Financieras", desc: "Monitorea vehículos financiados y protege tu cartera de activos.", slug: "financieras" },
];


const ServicesSection = () => (
  <section id="servicios" className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Nuestros <span className="text-gradient-primary">servicios</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Soluciones GPS adaptadas a cada necesidad. Instalación rápida y soporte continuo.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 flex flex-col hover:border-primary/50 transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-primary transition-shadow">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-1">{s.desc}</p>
            <Link
              to={`/servicios/${s.slug}`}
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Ver más →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
