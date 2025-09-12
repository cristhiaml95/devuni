import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Technologies from "@/components/Technologies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Devuni - Desarrollo Web, Apps Móviles y Automatización",
  description: "Descubre nuestros servicios de desarrollo de software: aplicaciones web, móviles, automatización de procesos y sistemas personalizados. Soluciones tecnológicas a medida.",
  keywords: "servicios desarrollo software, desarrollo web, aplicaciones móviles, automatización procesos, sistemas personalizados, devuni servicios",
  openGraph: {
    title: "Servicios | Devuni - Desarrollo Web, Apps Móviles y Automatización", 
    description: "Descubre nuestros servicios de desarrollo de software: aplicaciones web, móviles, automatización de procesos y sistemas personalizados.",
    type: "website",
  },
};

const ServiciosPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nuestros Servicios"
        description="Transformamos tus ideas en soluciones digitales robustas y escalables. Descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos."
      />
      <Features />
      <Technologies />
      
      {/* Sección adicional de servicios detallados */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Desarrollo Web */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <div className="bg-primary/10 text-primary inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Desarrollo Web
              </h3>
              <p className="text-body-color dark:text-body-color-dark mb-6">
                Creamos sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta plataformas web complejas.
              </p>
              <ul className="text-body-color dark:text-body-color-dark space-y-2 text-sm">
                <li>• Sitios web corporativos</li>
                <li>• E-commerce</li>
                <li>• Aplicaciones web (SPA/PWA)</li>
                <li>• Portales y plataformas</li>
              </ul>
            </div>

            {/* Aplicaciones Móviles */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <div className="bg-primary/10 text-primary inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Apps Móviles
              </h3>
              <p className="text-body-color dark:text-body-color-dark mb-6">
                Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android con las mejores tecnologías.
              </p>
              <ul className="text-body-color dark:text-body-color-dark space-y-2 text-sm">
                <li>• Apps nativas iOS/Android</li>
                <li>• Aplicaciones híbridas</li>
                <li>• React Native & Flutter</li>
                <li>• Integración con APIs</li>
              </ul>
            </div>

            {/* Automatización */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <div className="bg-primary/10 text-primary inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Automatización
              </h3>
              <p className="text-body-color dark:text-body-color-dark mb-6">
                Optimizamos procesos empresariales mediante automatización inteligente y sistemas personalizados.
              </p>
              <ul className="text-body-color dark:text-body-color-dark space-y-2 text-sm">
                <li>• Automatización de procesos</li>
                <li>• Sistemas de gestión</li>
                <li>• APIs y integraciones</li>
                <li>• Business Intelligence</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiciosPage;
