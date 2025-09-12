import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import UsefulLinks from "@/components/About/UsefulLinks";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Devuni - Tu Partner en Desarrollo de Software",
  description: "Conoce a Devuni, tu socio tecnológico especializado en desarrollo de software a medida, aplicaciones web y móviles. Más de X años de experiencia creando soluciones digitales innovadoras.",
  keywords: "sobre devuni, empresa desarrollo software, equipo tecnológico, desarrollo web, aplicaciones móviles, automatización",
  openGraph: {
    title: "Sobre Nosotros | Devuni - Tu Partner en Desarrollo de Software",
    description: "Conoce a Devuni, tu socio tecnológico especializado en desarrollo de software a medida, aplicaciones web y móviles.",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre Nosotros"
        description="Conoce a Devuni, tu socio tecnológico especializado en crear soluciones digitales innovadoras que impulsan el crecimiento de tu negocio."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <UsefulLinks />
    </>
  );
};

export default AboutPage;
