/**
 * Contenido de Términos y Condiciones.
 * Edita este archivo para actualizar el texto en la página y el modal.
 */

export interface TermsSection {
  title: string;
  content?: string;
  list?: string[];
}

export const termsLastUpdated = "Abril 2026";

export const termsSections: TermsSection[] = [
  {
    title: "1. Aceptación de los Términos",
    content:
      "Al contratar los servicios de Setra GPS, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.",
  },
  {
    title: "2. Descripción del Servicio",
    content:
      "Setra GPS ofrece servicios de rastreo GPS vehicular en tiempo real, incluyendo monitoreo de ubicación, alertas de movimiento, historial de recorridos y control remoto del vehículo, según el plan contratado.",
  },
  {
    title: "3. Instalación del Dispositivo",
    content:
      "La instalación del dispositivo GPS debe ser realizada exclusivamente por personal autorizado de Setra GPS. El cliente se compromete a no manipular, remover o alterar el dispositivo instalado. Cualquier daño causado por manipulación no autorizada no será cubierto por la garantía.",
  },
  {
    title: "4. Obligaciones del Cliente",
    list: [
      "Proporcionar información veraz y actualizada al momento de la contratación.",
      "Mantener al día los pagos correspondientes al plan contratado.",
      "Notificar a Setra GPS sobre cualquier cambio de vehículo o transferencia de propiedad.",
      "No utilizar el servicio para actividades ilícitas.",
    ],
  },
  {
    title: "5. Pagos y Facturación",
    content:
      "Los servicios se facturan de manera mensual o según el plan contratado. El incumplimiento de pago por más de 30 días podrá resultar en la suspensión del servicio. La reactivación estará sujeta a un cargo adicional.",
  },
  {
    title: "6. Privacidad y Datos",
    content:
      "Setra GPS se compromete a proteger la información personal y datos de ubicación de sus clientes. Los datos recopilados se utilizarán exclusivamente para la prestación del servicio contratado y no serán compartidos con terceros sin autorización previa del cliente, salvo requerimiento legal.",
  },
  {
    title: "7. Limitación de Responsabilidad",
    content:
      "Setra GPS no será responsable por pérdidas derivadas de interferencias de señal GPS, fallos en la red de telecomunicaciones, desastres naturales u otros eventos fuera de su control. El servicio de rastreo es una herramienta de apoyo y no garantiza la recuperación del vehículo en caso de robo.",
  },
  {
    title: "8. Cancelación del Servicio",
    content:
      "El cliente puede cancelar el servicio en cualquier momento notificando con al menos 15 días de anticipación. No se realizarán reembolsos por períodos parciales ya facturados. El dispositivo GPS deberá ser devuelto o se aplicará un cargo por el equipo.",
  },
  {
    title: "9. Modificaciones",
    content:
      "Setra GPS se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán notificados a los clientes con al menos 30 días de anticipación a través de los canales de comunicación registrados.",
  },
  {
    title: "10. * Compatibilidad",
    content:
      "* La disponibilidad de ciertas funcionalidades está condicionada a la compatibilidad del vehículo y a las especificaciones técnicas del sistema instalado (cuando aplique).",
  },
  {
    title: "11. Contacto",
    content: "Para consultas sobre estos términos, puede comunicarse con nosotros:",
    list: [
      "Teléfono: 1-809-786-9806",
      "WhatsApp: 1-809-786-9806",
      "Correo: info@setragps.com",
    ],
  },
];
