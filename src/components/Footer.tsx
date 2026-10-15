import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { termsSections, termsLastUpdated } from "@/data/termsContent";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const socials = [
    { name: "WhatsApp", url: "https://wa.me/18097869806", icon: "wa" },
    { name: "Facebook", url: "https://facebook.com/setragps", icon: "fb" },
    { name: "Instagram", url: "https://instagram.com/setragps", icon: "ig" },
    { name: "Twitter", url: "https://twitter.com/setragps", icon: "tw" },
  ];

  return (
    <footer id="contacto" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Setra GPS" width={36} height={36} className="w-9 h-9" />
              <span className="font-heading font-bold text-lg text-foreground">
                Setra <span className="text-primary">GPS</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Rastreo GPS vehicular en República Dominicana. Control total de tu vehículo en tiempo real.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/gps-vehicular" className="text-muted-foreground hover:text-primary transition-colors">GPS Vehicular</Link></li>
              <li><Link to="/rastreo-flotas" className="text-muted-foreground hover:text-primary transition-colors">GPS Flotas</Link></li>
              <li><Link to="/gps-rent-car" className="text-muted-foreground hover:text-primary transition-colors">GPS Rent Car</Link></li>
              <li><Link to="/gps-financieras" className="text-muted-foreground hover:text-primary transition-colors">GPS Financieras</Link></li>
              <li><Link to="/ubicaciones" className="text-muted-foreground hover:text-primary transition-colors">Nuestra Cobertura</Link></li>
              <li>
                <a href="https://status.setragps.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
                  Estatus del Sistema
                </a>
              </li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:18097869806" className="hover:text-primary transition-colors">1-809-786-9806</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.228A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.696-6.044-1.882l-.424-.296-2.794.733.746-2.72-.325-.463A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                <a href="https://wa.me/18097869806" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:info@setragps.com" className="hover:text-primary transition-colors">info@setragps.com</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Santo Domingo, República Dominicana</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Redes Sociales</h4>
            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <SocialIcon type={s.icon} />
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Setra GPS. Todos los derechos reservados.</span>
          <button onClick={() => setShowTerms(true)} className="hover:text-primary transition-colors">Términos y Condiciones</button>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ type }: { type: string }) => {
  const cls = "w-4 h-4 text-primary";
  if (type === "fb")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    );
  if (type === "ig")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    );
  if (type === "wa")
    return (
     <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.228A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.696-6.044-1.882l-.424-.296-2.794.733.746-2.72-.325-.463A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  );
};

const TermsModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div
        className="relative bg-card border border-border rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X size={20} />
        </button>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Términos y Condiciones</h2>
        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{section.title}</h3>
              {section.content && <p>{section.content}</p>}
              {section.list && (
                <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">Última actualización: {termsLastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
