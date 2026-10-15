import LegalLayout from "@/components/LegalLayout";

const Privacidad = () => (
  <LegalLayout
    title="Política de privacidad · Setra GPS"
    description="Qué datos usa la app Setra GPS, para qué, con quién se comparten y cómo pedir su eliminación."
    path="/privacidad"
  >
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Política de privacidad</h1><p className="text-xs text-muted-foreground/70 mb-4">Setra GPS · Última actualización: 15 de octubre de 2026</p>
      <p className="mb-3">Esta política explica qué datos usa la aplicación móvil <strong className="font-semibold text-foreground">Setra GPS</strong> (Android e iOS), para qué los usa, con quién se comparten y cómo puedes pedir su eliminación. Setra GPS es un servicio de rastreo de vehículos: la app muestra la información de los equipos GPS asociados a tu cuenta.</p>
      <div className="rounded-xl border border-border bg-card p-4 my-5 text-sm"><strong className="font-semibold text-foreground">Responsable:</strong> Setra GPS (RNC 1-32-38118-1) · <a className="text-primary hover:underline" href="mailto:info@setragps.com">info@setragps.com</a> · <a className="text-primary hover:underline" href="https://app.setragps.com" target="_blank" rel="noopener noreferrer">app.setragps.com</a></div>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">1. Datos que se tratan</h2>
      <ul className="list-disc pl-6 space-y-1.5 my-3">
      <li><strong className="font-semibold text-foreground">Datos de la cuenta:</strong> tu usuario (correo) y contraseña. Se envían al servidor de Setra GPS solo para iniciar sesión. Las cuentas las crea Setra GPS o tu administrador; la app no permite registrarse por cuenta propia.</li>
      <li><strong className="font-semibold text-foreground">Datos de tus vehículos y equipos GPS:</strong> posición, velocidad, rumbo, estado del motor, sensores, historial de recorridos, eventos, alertas, geocercas, informes y servicios de mantenimiento. Los genera tu equipo GPS, los guarda el servidor y la app los muestra.</li>
      <li><strong className="font-semibold text-foreground">Identificador de notificaciones:</strong> para enviarte alertas, la app registra en el servidor un identificador del dispositivo de Firebase Cloud Messaging (Google).</li>
      <li><strong className="font-semibold text-foreground">Ubicación de tu teléfono:</strong> solo si tú lo permites, para mostrar tu posición en el mapa y calcular la distancia o la ruta hacia un vehículo. Se usa únicamente mientras la app está abierta, <strong className="font-semibold text-foreground">no se envía ni se guarda en nuestros servidores</strong> y la app no la usa en segundo plano.</li>
      <li><strong className="font-semibold text-foreground">Enlaces para compartir ubicación:</strong> si creas uno, el servidor guarda los vehículos elegidos y la fecha de vencimiento, y cualquier persona con el enlace podrá ver esos vehículos hasta que venza o lo elimines.</li>
      <li><strong className="font-semibold text-foreground">Datos técnicos de conexión:</strong> como en cualquier servicio web, el servidor puede registrar tu dirección IP y la fecha de las solicitudes por seguridad y funcionamiento.</li>
      </ul>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">2. Para qué se usan</h2>
      <p className="mb-3">Únicamente para prestar el servicio: iniciar sesión, mostrar tus vehículos, enviarte alertas y vencimientos, generar informes, compartir ubicación cuando tú lo pides y proteger tu cuenta. No usamos tus datos para publicidad ni para perfilarte.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">3. Datos guardados en tu teléfono</h2>
      <p className="mb-3">La sesión y tus preferencias (apariencia, vehículos favoritos u ocultos, etiquetas del mapa, PIN y biometría) se guardan en el almacenamiento seguro del sistema. La huella o el rostro los gestiona Android o iOS: la app no recibe ni guarda tus datos biométricos. Al cerrar sesión se borran los datos de la cuenta. Si activas el bloqueo de capturas de pantalla, la app lo hace con las funciones del propio sistema operativo y no guarda ninguna captura.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">4. Con quién se comparten</h2>
      <p className="mb-3">No vendemos tus datos ni mostramos publicidad. Intervienen estos proveedores solo para que la app funcione:</p>
      <ul className="list-disc pl-6 space-y-1.5 my-3">
      <li><strong className="font-semibold text-foreground">Google Firebase Cloud Messaging:</strong> entrega las notificaciones push.</li>
      <li><strong className="font-semibold text-foreground">Proveedor de mapas (OpenStreetMap u otro proveedor de teselas):</strong> al mostrar el mapa, tu dispositivo descarga imágenes del mapa y el proveedor recibe, como en cualquier descarga, tu dirección IP y la zona consultada. No recibe tu cuenta ni tus vehículos.</li>
      <li><strong className="font-semibold text-foreground">Servicio de mensajería (por ejemplo WhatsApp):</strong> solo cuando tú eliges compartir un enlace con esa aplicación.</li>
      </ul>
      <p className="mb-3">También podremos revelar información si una autoridad competente lo exige conforme a la ley.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">5. Conservación</h2>
      <p className="mb-3">Los datos de tu cuenta y de tus vehículos se conservan mientras tu cuenta esté activa y durante el tiempo necesario para prestar el servicio. El historial puede limpiarse según la configuración de tu servicio. Cuando se elimina una cuenta, sus datos se borran del servidor en un plazo razonable, salvo lo que la ley obligue a conservar.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">6. Seguridad</h2>
      <p className="mb-3">La comunicación con el servidor usa HTTPS (cifrada). La sesión se guarda en el almacenamiento seguro del dispositivo y puedes bloquear la app con PIN o biometría. Ningún sistema es infalible; protege tu contraseña y tu teléfono.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">7. Tus derechos y cómo eliminar tus datos</h2>
      <p className="mb-3">Puedes pedir acceso, corrección o eliminación de tus datos, y la eliminación de tu cuenta, escribiendo a <a className="text-primary hover:underline" href="mailto:info@setragps.com">info@setragps.com</a> desde el correo asociado a la cuenta e indicando &quot;Eliminar mi cuenta y mis datos&quot;. Verificaremos tu identidad y responderemos en un plazo razonable.</p>
      <p className="mb-3">Si usas la app a través de tu empresa u otra persona que administra la cuenta, la solicitud puede requerir su autorización. Para dejar de recibir notificaciones basta con desactivarlas en Ajustes del teléfono o cerrar sesión en la app.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">8. Menores de edad</h2>
      <p className="mb-3">Setra GPS no está dirigida a menores de 13 años y no recopilamos intencionalmente datos de menores.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">9. Uso responsable</h2>
      <p className="mb-3">El rastreo de una persona sin su conocimiento o autorización puede ser ilegal. Debes usar el servicio solo sobre vehículos y equipos propios o con permiso de su propietario.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">10. Cambios a esta política</h2>
      <p className="mb-3">Si esta política cambia, publicaremos la nueva versión en esta página con su fecha de actualización.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground mt-10 mb-3">11. Contacto</h2>
      <p className="mb-3"><a className="text-primary hover:underline" href="mailto:info@setragps.com">info@setragps.com</a></p>
  </LegalLayout>
);

export default Privacidad;
