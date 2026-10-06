import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Términos y Condiciones — Template Guy',
  description:
    'Términos y condiciones del servicio de invitaciones digitales de Template Guy.',
  robots: { index: true, follow: true },
}

export default function TerminosPage() {
  return (
    <>
      <Nav />
      <LegalPage
        eyebrow="Términos y Condiciones"
        title="Las reglas del juego,"
        italicTail="claras."
        lastUpdate="6 de octubre de 2026"
        intro={
          <p>
            Estos Términos y Condiciones regulan la prestación de servicios de diseño de
            invitaciones digitales y productos digitales relacionados ofrecidos por{' '}
            <strong>Omar Alejandro Romo García</strong>, operando bajo el nombre comercial de{' '}
            <strong>Template Guy</strong> (en adelante, &quot;el Prestador&quot;), con domicilio
            en Ocotlán, Jalisco, México. El uso o contratación de cualquiera de sus servicios
            implica la aceptación expresa de estos términos.
          </p>
        }
        sections={[
          {
            heading: 'Aceptación de los términos',
            body: (
              <>
                <p>
                  Al contratar cualquiera de los servicios ofrecidos por el Prestador —
                  sea mediante confirmación en mensaje directo, correo electrónico, o cualquier
                  canal digital — y al realizar el pago correspondiente, el Cliente acepta
                  expresamente los presentes Términos y Condiciones y el Aviso de Privacidad.
                </p>
                <p>
                  Dado que buena parte de la contratación ocurre fuera de este sitio web
                  (por ejemplo, vía mensaje directo tras una campaña publicitaria), el pago
                  del servicio constituye consentimiento expreso del Cliente, conforme al
                  Artículo 1803 del Código Civil Federal.
                </p>
              </>
            ),
          },
          {
            heading: 'Servicios ofrecidos',
            body: (
              <>
                <p>
                  El Prestador diseña invitaciones digitales editoriales para bodas, XV años
                  y fiestas infantiles, así como otros productos digitales accesorios
                  (plantillas, mini-sitios).
                </p>
                <p>
                  Cada invitación se entrega como un enlace web único personalizado,
                  accesible desde cualquier dispositivo con conexión a internet.
                </p>
                <p>
                  <strong>Operación como persona física:</strong> el Prestador opera actualmente
                  como persona física y no emite comprobante fiscal digital (CFDI/factura).
                  Los pagos se realizan vía transferencia o depósito bancario según acuerdo
                  previo.
                </p>
              </>
            ),
          },
          {
            heading: 'Planes y precios',
            body: (
              <>
                <p>
                  <strong>Plan Lanzamiento — $890 MXN:</strong> precio promocional disponible
                  para los primeros 10 Clientes. Incluye invitación digital completa, hasta
                  10 secciones, 2 revisiones, entrega en 5 días hábiles.
                </p>
                <p>
                  <strong>Plan Estándar — $1,290 MXN:</strong> precio regular. Incluye todo
                  lo del plan Lanzamiento más secciones ilimitadas, revisiones ilimitadas
                  hasta aprobación del Cliente, soporte prioritario, entrega en 3-5 días
                  hábiles.
                </p>
                <p>
                  Los precios están expresados en pesos mexicanos (MXN) y pueden actualizarse
                  sin previo aviso. El precio aplicable es el vigente al momento de la
                  confirmación del pedido.
                </p>
              </>
            ),
          },
          {
            heading: 'Proceso de trabajo y entrega',
            body: (
              <>
                <p>
                  Una vez confirmado el pago, el Prestador solicita al Cliente los datos
                  necesarios (nombres, fecha, fotografías, textos, preferencias de diseño).
                  El plazo de entrega comienza a correr a partir de que el Cliente proporciona
                  toda la información requerida.
                </p>
                <p>
                  Si el Cliente demora en entregar los datos, el plazo de entrega se extenderá
                  proporcionalmente. El Prestador no es responsable por retrasos imputables al
                  Cliente.
                </p>
                <p>
                  Las revisiones consisten en ajustes razonables al diseño ya presentado.
                  Cambios estructurales mayores que impliquen rediseño completo pueden
                  cotizarse por separado.
                </p>
              </>
            ),
          },
          {
            heading: 'Vida útil de la invitación',
            body: (
              <>
                <p>
                  La invitación permanecerá en línea desde su entrega y hasta{' '}
                  <strong>3 (tres) días naturales posteriores a la fecha del evento</strong>.
                  Transcurrido ese plazo, el Prestador procederá a eliminar permanentemente
                  todos los datos asociados (configuración, firmas, fotografías de invitados,
                  mensajes).
                </p>
                <p>
                  Antes de la eliminación, el Prestador habilitará para el Cliente la
                  posibilidad de descargar en formato PDF el libro de firmas y en formato
                  comprimido las fotografías subidas por los invitados. Es responsabilidad del
                  Cliente realizar la descarga en tiempo. Pasada la fecha, los datos no podrán
                  recuperarse.
                </p>
                <p>
                  Esta política permite al Prestador mantener costos accesibles y proteger la
                  privacidad de los invitados a largo plazo.
                </p>
              </>
            ),
          },
          {
            heading: 'Política de reembolsos',
            body: (
              <>
                <p>
                  <strong>Antes de iniciar el diseño:</strong> reembolso del 100% del monto
                  pagado, siempre que la cancelación se solicite por escrito dentro de las 72
                  horas posteriores al pago y antes de que el Prestador haya comenzado el
                  trabajo.
                </p>
                <p>
                  <strong>Trabajo en proceso:</strong> si el Prestador ya inició el diseño,
                  el reembolso será del 50% del monto pagado.
                </p>
                <p>
                  <strong>Invitación entregada:</strong> no procede reembolso una vez entregada
                  la invitación al Cliente.
                </p>
              </>
            ),
          },
          {
            heading: 'Uso de la invitación en portafolio',
            body: (
              <>
                <p>
                  El Prestador podrá incluir las invitaciones realizadas en su portafolio
                  público (sitio web, redes sociales, materiales promocionales) únicamente si
                  el Cliente lo autoriza expresamente mediante casilla de verificación al
                  momento de la contratación.
                </p>
                <p>
                  Si el Cliente no autoriza este uso, el Prestador se compromete a no publicar
                  ni compartir imágenes de la invitación en materiales promocionales.
                </p>
                <p>
                  El Cliente puede revocar esta autorización en cualquier momento enviando un
                  correo a <a className="underline" href="mailto:binomecreative@gmail.com">binomecreative@gmail.com</a>.
                </p>
              </>
            ),
          },
          {
            heading: 'Propiedad intelectual',
            body: (
              <>
                <p>
                  Los diseños, el código y los componentes técnicos de la plataforma son
                  propiedad del Prestador. El Cliente recibe una licencia de uso personal y
                  no exclusiva sobre la invitación entregada, limitada al evento contratado.
                </p>
                <p>
                  El Cliente mantiene en todo momento la propiedad de sus textos, fotografías
                  y datos personales. Al proporcionarlos, otorga al Prestador una licencia
                  limitada para usarlos exclusivamente en la prestación del servicio
                  contratado.
                </p>
              </>
            ),
          },
          {
            heading: 'Limitación de responsabilidad',
            body: (
              <>
                <p>
                  El Prestador no se hace responsable por caídas o interrupciones de los
                  servicios de terceros utilizados (Vercel, Neon, Vercel Blob, Google OAuth,
                  Spotify, YouTube), ni por fallas de conectividad de los invitados.
                </p>
                <p>
                  La responsabilidad del Prestador se limita al monto pagado por el Cliente
                  por el servicio contratado.
                </p>
              </>
            ),
          },
          {
            heading: 'Modificaciones a los términos',
            body: (
              <>
                <p>
                  El Prestador puede actualizar estos Términos y Condiciones en cualquier
                  momento. La versión vigente será siempre la publicada en{' '}
                  <a className="underline" href="/terminos">templateguy.mx/terminos</a>.
                </p>
                <p>
                  Las contrataciones realizadas antes de un cambio se regirán por la versión
                  vigente al momento del pago.
                </p>
              </>
            ),
          },
          {
            heading: 'Jurisdicción y ley aplicable',
            body: (
              <>
                <p>
                  Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos
                  Mexicanos. Cualquier controversia derivada de los mismos será sometida a la
                  jurisdicción de los tribunales de Guadalajara, Jalisco, México, renunciando
                  las partes a cualquier otro fuero que pudiera corresponderles.
                </p>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </>
  )
}
