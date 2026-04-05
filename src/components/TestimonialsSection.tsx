import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Dueño de flota de transporte",
    text: "Recuperé mi vehículo en menos de 2 horas gracias a Setra GPS. Ahora tengo control total de mis 15 unidades.",
  },
  {
    name: "María S.",
    role: "Propietaria de Rent Car",
    text: "Desde que instalé GPS en mis vehículos de alquiler, la seguridad y el control han mejorado al 100%.",
  },
  {
    name: "José R.",
    role: "Usuario particular",
    text: "Me notificaron que mi carro se encendió a las 3am. Gracias al apagado remoto, evité el robo.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Lo que dicen nuestros <span className="text-gradient-primary">clientes</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-xl p-6 flex flex-col"
          >
            <Quote className="text-primary/30 mb-4" size={32} />
            <p className="text-foreground mb-6 flex-1">"{t.text}"</p>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="text-secondary fill-secondary" size={16} />
              ))}
            </div>
            <p className="font-display font-semibold">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
