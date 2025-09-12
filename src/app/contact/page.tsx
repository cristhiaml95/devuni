import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Devuni - Presupuesto Gratuito para tu Proyecto",
  description: "¿Tienes un proyecto en mente? Contacta con Devuni para obtener un presupuesto gratuito y personalizado. Desarrollamos software a medida, webs y apps móviles.",
  keywords: "contacto devuni, presupuesto desarrollo software, cotización web, desarrollo aplicaciones, consulta tecnológica",
  openGraph: {
    title: "Contacto | Devuni - Presupuesto Gratuito para tu Proyecto",
    description: "¿Tienes un proyecto en mente? Contacta con Devuni para obtener un presupuesto gratuito y personalizado.",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contacto"
        description="¿Tienes un proyecto en mente? Nos encantaría conocer tu idea. Contáctanos para obtener un presupuesto personalizado y sin compromiso."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
