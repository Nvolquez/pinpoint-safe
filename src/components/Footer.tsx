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

      <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Setra GPS. Todos los derechos reservados.</span>
        <div className="flex items-center gap-4">
          <a href="https://facebook.com/setragps" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com/setragps" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://tiktok.com/@setragps" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.8.1v-3.5a6.37 6.37 0 0 0-.8-.05A6.34 6.34 0 0 0 3.15 15.3 6.34 6.34 0 0 0 9.49 21.64a6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 3.76.92V6.69Z"/></svg>
          </a>
          <a href="https://youtube.com/@setragps" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
