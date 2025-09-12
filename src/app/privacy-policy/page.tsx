import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Privacidad | DevUni - Desarrollo y Tecnología",
  description: "Conoce cómo DevUni protege y maneja tu información personal. Nuestra política de privacidad explica qué datos recopilamos, cómo los usamos y tus derechos.",
  keywords: "política de privacidad, protección de datos, DevUni, privacidad, información personal, GDPR",
  authors: [{ name: "DevUni" }],
  creator: "DevUni",
  publisher: "DevUni",
  robots: "index, follow",
  openGraph: {
    title: "Política de Privacidad | DevUni",
    description: "Conoce cómo DevUni protege y maneja tu información personal",
    type: "website",
    locale: "es_ES",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Política de Privacidad"
        description="Conoce cómo protegemos y manejamos tu información personal"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Política de Privacidad
                </h2>
                
                <div className="mb-8 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  <p className="mb-6">
                    <strong>Fecha de última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
                  </p>
                  
                  <p className="mb-8">
                    En DevUni, valoramos y respetamos tu privacidad. Esta Política de Privacidad explica cómo recopilamos, 
                    usamos, compartimos y protegemos tu información personal cuando utilizas nuestros servicios.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    1. Información que Recopilamos
                  </h3>
                  <p className="mb-6">
                    Recopilamos información que nos proporcionas directamente, como:
                  </p>
                  <ul className="mb-8 list-disc pl-6">
                    <li className="mb-2">Nombre y apellidos</li>
                    <li className="mb-2">Dirección de correo electrónico</li>
                    <li className="mb-2">Número de teléfono</li>
                    <li className="mb-2">Información de la empresa o proyecto</li>
                    <li className="mb-2">Mensajes y comunicaciones que nos envías</li>
                  </ul>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    2. Cómo Utilizamos tu Información
                  </h3>
                  <p className="mb-6">
                    Utilizamos la información recopilada para:
                  </p>
                  <ul className="mb-8 list-disc pl-6">
                    <li className="mb-2">Proporcionar y mejorar nuestros servicios</li>
                    <li className="mb-2">Responder a tus consultas y solicitudes</li>
                    <li className="mb-2">Enviarte información sobre nuestros servicios (con tu consentimiento)</li>
                    <li className="mb-2">Cumplir con obligaciones legales</li>
                    <li className="mb-2">Detectar y prevenir fraudes</li>
                  </ul>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    3. Compartir Información
                  </h3>
                  <p className="mb-8">
                    No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las 
                    siguientes circunstancias: cuando tengas tu consentimiento, para cumplir con la ley, o para 
                    proteger nuestros derechos.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    4. Seguridad de los Datos
                  </h3>
                  <p className="mb-8">
                    Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu 
                    información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    5. Retención de Datos
                  </h3>
                  <p className="mb-8">
                    Conservamos tu información personal solo durante el tiempo necesario para cumplir con los 
                    propósitos para los cuales fue recopilada, a menos que la ley requiera un período de retención más largo.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    6. Tus Derechos
                  </h3>
                  <p className="mb-6">
                    Tienes derecho a:
                  </p>
                  <ul className="mb-8 list-disc pl-6">
                    <li className="mb-2">Acceder a tu información personal</li>
                    <li className="mb-2">Rectificar información incorrecta</li>
                    <li className="mb-2">Eliminar tu información personal</li>
                    <li className="mb-2">Limitar el procesamiento de tus datos</li>
                    <li className="mb-2">Portabilidad de datos</li>
                    <li className="mb-2">Oponerte al procesamiento</li>
                  </ul>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    7. Cookies y Tecnologías Similares
                  </h3>
                  <p className="mb-8">
                    Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, 
                    analizar el tráfico y personalizar el contenido. Puedes controlar las cookies a través de 
                    la configuración de tu navegador.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    8. Cambios en esta Política
                  </h3>
                  <p className="mb-8">
                    Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios 
                    significativos publicando la nueva política en nuestro sitio web.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    9. Contacto
                  </h3>
                  <p className="mb-6">
                    Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tu información, 
                    puedes contactarnos:
                  </p>
                  <ul className="mb-8 list-disc pl-6">
                    <li className="mb-2">Email: cristhiamllerena@gmail.com</li>
                    <li className="mb-2">Teléfono: +51 932446031</li>
                    <li className="mb-2">Dirección: Lima, Perú</li>
                  </ul>

                  <div className="rounded-xs bg-primary/10 p-6">
                    <h4 className="mb-3 text-lg font-bold text-black dark:text-white">
                      Compromiso con tu Privacidad
                    </h4>
                    <p className="text-sm">
                      En DevUni, nos comprometemos a proteger tu privacidad y manejar tu información personal 
                      de manera responsable y transparente. Si tienes alguna pregunta o inquietud, no dudes en contactarnos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
