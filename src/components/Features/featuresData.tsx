import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Image src="/images/features/web-development.png" alt="Desarrollo Web a Medida" width={200} height={200} className="object-contain w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 xl:w-48 xl:h-48" />,
    title: "Desarrollo Web a Medida",
    paragraph: "Creamos sitios web únicos y personalizados usando las últimas tecnologías como React, Next.js y Node.js. Desde landing pages hasta plataformas e-commerce complejas, desarrollamos soluciones web que destacan en diseño, funcionalidad y SEO.",
  },
  {
    id: 2,
    icon: <Image src="/images/features/mobile-apps.png" alt="Aplicaciones Móviles" width={200} height={200} className="object-contain w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 xl:w-48 xl:h-48" />,
    title: "Aplicaciones Móviles Nativas",
    paragraph: "Desarrollamos apps móviles nativas para iOS y Android que ofrecen experiencias excepcionales. Utilizamos React Native y tecnologías nativas para crear aplicaciones rápidas, intuitivas y optimizadas para cada plataforma móvil.",
  },
  {
    id: 3,
    icon: <Image src="/images/features/process-automation.png" alt="Automatización de Procesos" width={200} height={200} className="object-contain w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 xl:w-48 xl:h-48" />,
    title: "Automatización de Procesos",
    paragraph: "Optimizamos tus operaciones empresariales mediante automatización inteligente. Implementamos workflows, integraciones de APIs y sistemas que reducen tareas manuales, aumentan la eficiencia y minimizan errores en tu negocio.",
  },
  {
    id: 4,
    icon: <Image src="/images/features/custom-systems.png" alt="Sistemas a Medida" width={200} height={200} className="object-contain w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 xl:w-48 xl:h-48" />,
    title: "Sistemas Personalizados",
    paragraph: "Diseñamos y desarrollamos sistemas de gestión empresarial adaptados a tus necesidades específicas. CRM, ERP, plataformas de gestión y herramientas administrativas que se ajustan perfectamente a tu modelo de negocio.",
  },
];

export default featuresData;
