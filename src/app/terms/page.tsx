import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Términos y Condiciones | DevUni - Desarrollo y Tecnología",
  description: "Lee los términos y condiciones de uso de los servicios de DevUni. Conoce tus derechos y responsabilidades al utilizar nuestros servicios.",
  keywords: "términos y condiciones, términos de uso, DevUni, servicios, desarrollo web, condiciones legales",
  authors: [{ name: "DevUni" }],
  creator: "DevUni",
  publisher: "DevUni",
  robots: "index, follow",
  openGraph: {
    title: "Términos y Condiciones | DevUni",
    description: "Lee los términos y condiciones de uso de los servicios de DevUni",
    type: "website",
    locale: "es_ES",
  },
};

const TermsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Términos y Condiciones"
        description="Lee los términos y condiciones de uso de nuestros servicios"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Términos y Condiciones
                </h2>
                
                <div className="mb-8 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  <p className="mb-6">
                    <strong>Fecha de última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
                  </p>
                  
                  <p className="mb-8">
                    Bienvenido a DevUni. Estos términos y condiciones rigen el uso de nuestros servicios de desarrollo 
                    web, aplicaciones móviles y soluciones tecnológicas.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    1. Aceptación de los Términos
                  </h3>
                  <p className="mb-8">
                    Al acceder y utilizar nuestros servicios, aceptas estar sujeto a estos términos y condiciones. 
                    Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    2. Descripción de Servicios
                  </h3>
                  <p className="mb-6">
                    DevUni ofrece servicios de:
                  </p>
                  <ul className="mb-8 list-disc pl-6">
                    <li className="mb-2">Desarrollo de sitios web y aplicaciones web</li>
                    <li className="mb-2">Desarrollo de aplicaciones móviles</li>
                    <li className="mb-2">Sistemas personalizados y automatización de procesos</li>
                    <li className="mb-2">Consultoría tecnológica</li>
                    <li className="mb-2">Mantenimiento y soporte técnico</li>
                  </ul>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    3. Condiciones de Uso
                  </h3>
                  <p className="mb-6">
                    Al utilizar nuestros servicios, te comprometes a:
                  </p>
                  <ul className="mb-8 list-disc pl-6">
                    <li className="mb-2">Proporcionar información veraz y actualizada</li>
                    <li className="mb-2">No utilizar nuestros servicios para actividades ilegales</li>
                    <li className="mb-2">Respetar los derechos de propiedad intelectual</li>
                    <li className="mb-2">Cumplir con todas las leyes aplicables</li>
                  </ul>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    4. Propiedad Intelectual
                  </h3>
                  <p className="mb-8">
                    Todo el contenido, código, diseños y materiales desarrollados por DevUni son propiedad de la empresa, 
                    excepto cuando se acuerde específicamente lo contrario en un contrato por escrito. El cliente obtiene 
                    una licencia de uso del producto final según los términos acordados.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    5. Pagos y Facturación
                  </h3>
                  <p className="mb-6">
                    Los términos de pago incluyen:
                  </p>
                  <ul className="mb-8 list-disc pl-6">
                    <li className="mb-2">Los precios están sujetos a los acuerdos específicos de cada proyecto</li>
                    <li className="mb-2">Se requiere un depósito inicial para comenzar el desarrollo</li>
                    <li className="mb-2">Los pagos son exigibles según el cronograma acordado</li>
                    <li className="mb-2">Los pagos tardíos pueden resultar en la suspensión del servicio</li>
                  </ul>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    6. Limitación de Responsabilidad
                  </h3>
                  <p className="mb-8">
                    DevUni no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten 
                    del uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad total no excederá el 
                    monto pagado por el servicio específico.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    7. Cancelación y Terminación
                  </h3>
                  <p className="mb-8">
                    Cualquiera de las partes puede terminar el servicio con previo aviso. En caso de terminación, 
                    el cliente será responsable del pago por todo el trabajo completado hasta la fecha de terminación.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    8. Confidencialidad
                  </h3>
                  <p className="mb-8">
                    DevUni se compromete a mantener la confidencialidad de toda la información proporcionada por el cliente 
                    y no divulgarla a terceros sin autorización expresa.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    9. Modificaciones
                  </h3>
                  <p className="mb-8">
                    Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                    Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    10. Ley Aplicable
                  </h3>
                  <p className="mb-8">
                    Estos términos se rigen por las leyes de Perú. Cualquier disputa se resolverá en los tribunales 
                    competentes de Lima, Perú.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    11. Contacto
                  </h3>
                  <p className="mb-6">
                    Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos:
                  </p>
                  <ul className="mb-8 list-disc pl-6">
                    <li className="mb-2">Email: cristhiamllerena@gmail.com</li>
                    <li className="mb-2">Teléfono: +51 932446031</li>
                    <li className="mb-2">Dirección: Lima, Perú</li>
                  </ul>

                  <div className="rounded-xs bg-primary/10 p-6">
                    <h4 className="mb-3 text-lg font-bold text-black dark:text-white">
                      Compromiso de Calidad
                    </h4>
                    <p className="text-sm">
                      En DevUni, nos comprometemos a proporcionar servicios de alta calidad y a mantener relaciones 
                      transparentes y profesionales con todos nuestros clientes.
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

export default TermsPage;
