import LegalLayout from "@/components/LegalLayout";
import { Link } from "react-router-dom";

const Licencia = () => (
  <LegalLayout
    title="Licencia de uso · Setra GPS"
    description="Condiciones de la licencia de uso de la aplicación Setra GPS."
    path="/licencia"
  >
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Licencia de uso</h1><p className="text-xs text-muted-foreground/70 mb-4">Setra GPS · Última actualización: 15 de octubre de 2026</p>
      <p className="mb-3">Al instalar o usar Setra GPS aceptas estas condiciones.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">1. Licencia</h2>
      <p className="mb-3">Se te concede una licencia personal, no exclusiva e intransferible para usar la aplicación con tu cuenta de Setra GPS.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">2. Lo que no está permitido</h2>
      <ul className="list-disc pl-6 space-y-1.5 my-3">
      <li>Copiar, modificar, descompilar o redistribuir la aplicación.</li>
      <li>Usar la app para vigilar a personas sin su conocimiento o autorización.</li>
      <li>Compartir tu cuenta con terceros no autorizados.</li>
      </ul>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">3. Tu cuenta</h2>
      <p className="mb-3">Eres responsable de guardar tu contraseña y tu PIN y de la actividad realizada con tu cuenta.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">4. Disponibilidad</h2>
      <p className="mb-3">La ubicación depende de la señal del equipo GPS y de la red celular. Podemos actualizar o interrumpir el servicio por mantenimiento.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">5. Propiedad</h2>
      <p className="mb-3">La aplicación, su marca y su contenido pertenecen a Setra GPS. Esta licencia no transfiere propiedad.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">6. Componentes de código abierto</h2>
      <p className="mb-3">La app usa componentes de código abierto con sus propias licencias. Puedes verlas en la app, en Ajustes › Acerca de › Licencias de código abierto.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">7. Datos de mapas</h2>
      <p className="mb-3">Los mapas se muestran con datos de OpenStreetMap. © Colaboradores de OpenStreetMap, disponibles bajo la licencia ODbL (<a className="text-primary hover:underline" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">openstreetmap.org/copyright</a>).</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">8. Términos del servicio</h2>
      <p className="mb-3">El uso del servicio se rige además por los <Link className="text-primary hover:underline" to="/terminos">Términos y condiciones</Link> y la <Link className="text-primary hover:underline" to="/privacidad">Política de privacidad</Link>.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">9. Contacto</h2>
      <p className="mb-3"><a className="text-primary hover:underline" href="mailto:info@setragps.com">info@setragps.com</a></p>
  </LegalLayout>
);

export default Licencia;
