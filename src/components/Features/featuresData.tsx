import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Image src="/images/features/web-development.svg" alt="Desarrollo Web a Medida" width={60} height={60} />,
    title: "web_development_title",
    paragraph: "web_development_paragraph",
  },
  {
    id: 2,
    icon: <Image src="/images/features/mobile-apps.svg" alt="Aplicaciones Móviles" width={60} height={60} />,
    title: "mobile_apps_title",
    paragraph: "mobile_apps_paragraph",
  },
  {
    id: 3,
    icon: <Image src="/images/features/process-automation.svg" alt="Automatización de Procesos" width={60} height={60} />,
    title: "process_automation_title",
    paragraph: "process_automation_paragraph",
  },
  {
    id: 4,
    icon: <Image src="/images/features/custom-systems.svg" alt="Sistemas a Medida" width={60} height={60} />,
    title: "custom_systems_title",
    paragraph: "custom_systems_paragraph",
  },
];

export default featuresData;
