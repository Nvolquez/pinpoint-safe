import LocationLayout from "@/components/LocationLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Lista de todas las ciudades con sus rutas
const ciudades = [
  { nombre: "Santo Domingo", ruta: "/santo-domingo" },
  { nombre: "Santiago", ruta: "/santiago" },
  { nombre: "Punta Cana", ruta: "/punta-cana" },
  { nombre: "La Romana", ruta: "/la-romana" },
  { nombre: "San Pedro de Macorís", ruta: "/san-pedro" },
  { nombre: "San Cristóbal", ruta: "/san-cristobal" },
  { nombre: "Haina", ruta: "/haina" },
  { nombre: "La Vega", ruta: "/la-vega" },
  { nombre: "San Francisco de Macorís", ruta: "/san-francisco-de-macoris" },
  { nombre: "Puerto Plata", ruta: "/puerto-plata" },
  { nombre: "Bonao", ruta: "/bonao" },
  { nombre: "Baní", ruta: "/bani" },
  { nombre: "Higüey", ruta: "/higuey" },
  { nombre: "Moca", ruta: "/moca" },
];

// Configuración de la animación
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } // Hace que aparezcan una por una
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Ubicaciones = () => {
  return (
    <LocationLayout><section className="relative pb-20">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse-glow" /> 
              Cobertura Nacional
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-6">
              Nuestras <span className="text-gradient-glow">Ubicaciones</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Brindamos servicio de instalación de GPS a domicilio en los principales puntos estratégicos de la República Dominicana. Encuentra tu ciudad y agenda hoy mismo.
            </p>
          </motion.div>
        </div>

        {/* Cuadrícula de Ciudades */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {ciudades.map((ciudad, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link 
                to={ciudad.ruta}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-border/50 bg-card hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 group h-full text-center"
              >
                {/* Ícono de Pin de Mapa */}
                <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {ciudad.nombre}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section></LocationLayout>
  );
};

export default Ubicaciones;