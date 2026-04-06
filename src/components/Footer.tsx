import { MapPin, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-primary" size={24} />
            <span className="font-display text-lg font-bold">
              Setra <span className="text-primary">GPS</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Rastreo GPS vehicular en República Dominicana. Protege tu inversión con tecnología avanzada.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#inicio" className="hover:text-foreground transition-colors">Inicio</a></li>
            <li><a href="#beneficios" className="hover:text-foreground transition-colors">Beneficios</a></li>
            <li><a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>GPS para vehículos</li>
            <li>GPS para flotas</li>
            <li>GPS para Rent Car</li>
            <li>GPS para financieras</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contacto</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href="https://wa.me/18091234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <MessageCircle size={16} className="text-green-500" />
              +1 (809) 123-4567
            </a>
            <a href="mailto:info@setragps.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail size={16} className="text-primary" />
              info@setragps.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Setra GPS. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
