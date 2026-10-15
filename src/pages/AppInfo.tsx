import LegalLayout from "@/components/LegalLayout";
import { Link } from "react-router-dom";

const AppInfo = () => (
  <LegalLayout
    title="Información de la aplicación · Setra GPS"
    description="Setra GPS: app para ver y controlar tus vehículos rastreados por GPS en tiempo real."
    path="/app"
  >
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Setra GPS</h1><p className="text-xs text-muted-foreground/70 mb-4">Información de la aplicación</p>
      <p className="mb-3">Setra GPS es la aplicación móvil para Android y iOS con la que consultas y controlas tus vehículos rastreados por GPS, en tiempo real y desde cualquier parte.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">Qué puedes hacer</h2>
      <ul className="list-disc pl-6 space-y-1.5 my-3">
      <li>Ver tus vehículos en el mapa y en lista, con estado, velocidad, ubicación y dirección actual.</li>
      <li>Consultar el historial de recorridos y reproducirlos, con el trayecto coloreado por velocidad y los eventos del período (cruces de geocercas, encendido y apagado, otros avisos).</li>
      <li>Recibir notificaciones de eventos y alertas, y administrar tus alertas.</li>
      <li>Crear y administrar tus geocercas (circulares o de polígono) y ver en cuáles está cada vehículo.</li>
      <li>Enviar comandos a tus equipos GPS y consultar los comandos enviados.</li>
      <li>Ver y administrar los sensores de tus vehículos y los conductores de tu cuenta.</li>
      <li>Consultar vencimientos del servicio y de mantenimiento, con aviso previo.</li>
      <li>Generar informes y descargarlos.</li>
      <li>Compartir la ubicación de tus vehículos con un enlace temporal.</li>
      <li>Proteger la app con PIN y huella o rostro.</li>
      <li>Pedir ayuda a soporte por WhatsApp o correo.</li>
      </ul>
      <p className="text-xs text-muted-foreground/70 mb-4">Las funciones disponibles dependen de los permisos de tu cuenta.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">Cómo empezar</h2>
      <p className="mb-3">Inicia sesión con el usuario y la contraseña de tu cuenta Setra GPS. Si aún no tienes cuenta, solicítala a tu proveedor o escríbenos.</p>
      <div className="rounded-xl border border-border bg-card p-4 my-5 text-sm"><strong className="font-semibold text-foreground">Soporte:</strong> <a className="text-primary hover:underline" href="mailto:info@setragps.com">info@setragps.com</a><br /> <span className="text-xs text-muted-foreground/70">Soporte técnico 24/7: 1-809-786-9806 · <a className="text-primary hover:underline" href="mailto:soporte@volpasolutions.com">soporte@volpasolutions.com</a></span></div>
      <p className="text-xs text-muted-foreground/70 mb-4">Consulta también la <Link className="text-primary hover:underline" to="/privacidad">Política de privacidad</Link>, los <Link className="text-primary hover:underline" to="/terminos">Términos y condiciones</Link> y la <Link className="text-primary hover:underline" to="/licencia">Licencia de uso</Link>.</p>
  </LegalLayout>
);

export default AppInfo;
