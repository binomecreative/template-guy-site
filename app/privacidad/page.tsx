import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad — Template Guy',
  description:
    'Aviso de Privacidad de Template Guy conforme a la LFPDPPP de México.',
  robots: { index: true, follow: true },
}

export default function PrivacidadPage() {
  return (
    <>
      <Nav />
      <LegalPage
        eyebrow="Aviso de Privacidad"
        title="Tus datos,"
        italicTail="con cuidado."
        lastUpdate="6 de octubre de 2026"
        intro={
          <p>
            El presente Aviso de Privacidad se emite en cumplimiento de la{' '}
            <strong>Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares</strong> (LFPDPPP) y su Reglamento. Describe cómo{' '}
            <strong>Omar Alejandro Romo García</strong>, operando bajo el nombre comercial
            de <strong>Template Guy</strong> (en adelante, &quot;el Responsable&quot;),
            trata los datos personales de sus Clientes y de los invitados a los eventos
            cuyas invitaciones diseña.
          </p>
        }
        sections={[
          {
            heading: 'Responsable del tratamiento',
            body: (
              <>
                <p>
                  <strong>Omar Alejandro Romo García</strong>, con domicilio en Ocotlán,
                  Jalisco, México, operando bajo el nombre comercial de Template Guy /
                  Binôme Studio, es responsable del tratamiento, protección y resguardo de
                  los datos personales que recopila a través de sus servicios.
                </p>
                <p>
                  Para cualquier asunto relacionado con el tratamiento de datos personales,
                  el titular puede contactar al Responsable en{' '}
                  <a className="underline" href="mailto:binomecreative@gmail.com">
                    binomecreative@gmail.com
                  </a>.
                </p>
              </>
            ),
          },
          {
            heading: 'Datos personales que se recaban',
            body: (
              <>
                <p>Del <strong>Cliente que contrata el servicio</strong>:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nombre completo</li>
                  <li>Correo electrónico y número de WhatsApp</li>
                  <li>Nombres de los novios o festejado(a)</li>
                  <li>Fecha, lugar y detalles del evento</li>
                  <li>Fotografías proporcionadas para la invitación</li>
                  <li>Datos bancarios para transferencias (según caso)</li>
                </ul>
                <p className="mt-4">De los <strong>invitados que interactúan con la invitación</strong>:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nombre y relación con los novios (en libro de firmas, opcional)</li>
                  <li>Mensaje escrito (en libro de firmas)</li>
                  <li>Fotografías voluntariamente subidas (galería colaborativa)</li>
                  <li>
                    Hash SHA-256 truncado de la dirección IP (uso exclusivo para evitar spam;
                    no permite identificar a la persona)
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>No se recaban datos personales sensibles</strong> (origen étnico,
                  religión, estado de salud, preferencias sexuales, etc.).
                </p>
              </>
            ),
          },
          {
            heading: 'Finalidades del tratamiento',
            body: (
              <>
                <p>Los datos se tratan para las siguientes finalidades primarias:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Diseñar, personalizar y entregar la invitación digital</li>
                  <li>Permitir que los invitados firmen y suban fotos durante el evento</li>
                  <li>Dar soporte al Cliente antes, durante y después del evento</li>
                  <li>Cobrar el servicio contratado</li>
                </ul>
                <p className="mt-4">Y para las siguientes finalidades secundarias (previa autorización):</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Incluir la invitación como caso de estudio en el portafolio público del
                    Responsable, con autorización expresa del Cliente mediante casilla al
                    contratar.
                  </li>
                </ul>
                <p className="mt-4">
                  Si el Cliente no desea que su invitación aparezca en el portafolio público,
                  puede manifestarlo al momento de contratar o posteriormente escribiendo a{' '}
                  <a className="underline" href="mailto:binomecreative@gmail.com">
                    binomecreative@gmail.com
                  </a>. La negativa no condiciona la prestación del servicio.
                </p>
              </>
            ),
          },
          {
            heading: 'Dónde se almacenan los datos',
            body: (
              <>
                <p>
                  Los datos se almacenan en infraestructura de proveedores de servicios en
                  la nube con medidas de seguridad adecuadas:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Base de datos (textos, firmas, configuración):</strong> Neon Inc.
                    (Postgres administrado), servidores en Estados Unidos.
                  </li>
                  <li>
                    <strong>Fotografías e imágenes:</strong> Vercel Inc. (Blob privado),
                    servidores en Estados Unidos. Las fotografías se guardan en modo privado
                    y se sirven únicamente a través de un proxy autenticado.
                  </li>
                  <li>
                    <strong>Autenticación del administrador:</strong> Google LLC (OAuth).
                  </li>
                </ul>
                <p className="mt-4">
                  Estos proveedores cuentan con medidas de seguridad técnicas y
                  administrativas conformes a estándares internacionales (SOC 2, ISO 27001).
                </p>
              </>
            ),
          },
          {
            heading: 'Transferencias de datos',
            body: (
              <>
                <p>
                  El Responsable no vende ni cede datos personales a terceros con fines
                  comerciales. Las únicas transferencias que ocurren son las necesarias para
                  prestar el servicio (almacenamiento en los proveedores mencionados).
                </p>
                <p>
                  Al contratar el servicio, el Cliente consiente estas transferencias
                  necesarias.
                </p>
              </>
            ),
          },
          {
            heading: 'Tiempo de conservación',
            body: (
              <>
                <p>
                  Los datos relacionados con una invitación específica se conservan desde su
                  entrega y hasta <strong>3 (tres) días naturales posteriores a la fecha
                  del evento</strong>.
                </p>
                <p>
                  Transcurrido ese plazo, el Responsable procede a eliminar permanentemente
                  todos los datos asociados a esa invitación (configuración, firmas,
                  fotografías de invitados, mensajes). Esta eliminación es irreversible.
                </p>
                <p>
                  Los datos del Cliente necesarios para fines contables (nombre, correo,
                  monto pagado) se conservan hasta por 5 años conforme al Código Fiscal de
                  la Federación.
                </p>
              </>
            ),
          },
          {
            heading: 'Derechos ARCO',
            body: (
              <>
                <p>
                  Todo titular de datos personales tiene derecho a <strong>Acceder</strong>,{' '}
                  <strong>Rectificar</strong>, <strong>Cancelar</strong> u{' '}
                  <strong>Oponerse</strong> al tratamiento de sus datos (derechos ARCO).
                </p>
                <p>
                  Para ejercer cualquiera de estos derechos, el titular puede enviar un
                  correo a{' '}
                  <a className="underline" href="mailto:binomecreative@gmail.com">
                    binomecreative@gmail.com
                  </a>{' '}
                  con la siguiente información:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nombre completo del titular</li>
                  <li>Correo electrónico o teléfono de contacto</li>
                  <li>Descripción clara y precisa del derecho que desea ejercer</li>
                  <li>Datos a los que desea aplicar el derecho</li>
                  <li>
                    Copia simple de identificación oficial (INE, pasaporte) para acreditar
                    identidad
                  </li>
                </ul>
                <p className="mt-4">
                  El Responsable responderá a la solicitud en un plazo máximo de 20 días
                  hábiles conforme al artículo 32 LFPDPPP.
                </p>
                <p>
                  Si el titular considera que el Responsable no cumplió con sus derechos,
                  puede presentar una queja ante el{' '}
                  <strong>Instituto Nacional de Transparencia, Acceso a la Información y
                  Protección de Datos Personales (INAI)</strong>: www.inai.org.mx.
                </p>
              </>
            ),
          },
          {
            heading: 'Uso de cookies y tecnologías similares',
            body: (
              <>
                <p>
                  El sitio web de Template Guy utiliza almacenamiento local del navegador
                  (<em>localStorage</em>) para funcionalidades técnicas básicas, como
                  recordar que un invitado ya abrió la invitación (para no mostrar la
                  pantalla de bienvenida en cada visita).
                </p>
                <p>
                  Estos datos permanecen únicamente en el dispositivo del usuario y no se
                  transmiten al Responsable ni a terceros.
                </p>
                <p>
                  No se utilizan cookies de rastreo publicitario ni de análisis de
                  comportamiento sin consentimiento.
                </p>
              </>
            ),
          },
          {
            heading: 'Medidas de seguridad',
            body: (
              <>
                <p>
                  El Responsable ha adoptado las siguientes medidas técnicas y
                  administrativas para proteger los datos personales:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cifrado en tránsito (HTTPS) en todas las comunicaciones</li>
                  <li>Autenticación OAuth con proveedor validado (Google) para el panel administrativo</li>
                  <li>Almacenamiento de fotografías en modo privado con proxy autenticado</li>
                  <li>Rate limiting por hash de IP para prevenir spam o abuso</li>
                  <li>Acceso restringido al panel administrativo únicamente a correos autorizados</li>
                  <li>Eliminación programada 3 días post-evento</li>
                </ul>
              </>
            ),
          },
          {
            heading: 'Cambios al Aviso de Privacidad',
            body: (
              <>
                <p>
                  El Responsable se reserva el derecho de actualizar este Aviso de Privacidad
                  en cualquier momento. La versión vigente estará siempre publicada en{' '}
                  <a className="underline" href="/privacidad">templateguy.mx/privacidad</a>.
                </p>
                <p>
                  Los cambios sustanciales serán notificados al Cliente mediante correo
                  electrónico.
                </p>
              </>
            ),
          },
          {
            heading: 'Aceptación',
            body: (
              <>
                <p>
                  Al contratar los servicios del Responsable, el Cliente manifiesta que
                  ha leído, comprendido y aceptado los términos del presente Aviso de
                  Privacidad, otorgando su consentimiento expreso para el tratamiento de
                  sus datos personales conforme a lo aquí descrito.
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
