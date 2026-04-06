import { motion } from "framer-motion";

const clients = [
  { name: "Grupo Empresarial del Caribe", url: "https://ejemplo.com" },
  { name: "AutoRent RD", url: "https://ejemplo.com" },
  { name: "Transporte Luna", url: "https://ejemplo.com" },
  { name: "Financiera del Este", url: "https://ejemplo.com" },
  { name: "FlotaMax", url: "https://ejemplo.com" },
  { name: "RentaCar Premium", url: "https://ejemplo.com" },
];

const ClientsSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
          Empresas que <span className="text-gradient-primary">confían en nosotros</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Más de 100 empresas y particulares protegen sus vehículos con Setra GPS
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {clients.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-xl p-6 flex items-center justify-center min-h-[100px]"
          >
            <span className="font-display font-semibold text-sm text-center text-foreground/70">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
