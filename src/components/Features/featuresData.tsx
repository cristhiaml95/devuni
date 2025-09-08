import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
        <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
        <line x1="2" y1="9" x2="22" y2="9"></line>
        <line x1="6" y1="6" x2="6" y2="6"></line>
        <line x1="10" y1="6" x2="10" y2="6"></line>
      </svg>
    ),
    title: "Desarrollo Web a Medida",
    paragraph:
      "Creamos sitios web y aplicaciones web modernas, rápidas y seguras, adaptadas a las necesidades de tu negocio para una presencia online impactante.",
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
      </svg>
    ),
    title: "Aplicaciones Móviles",
    paragraph:
      "Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android, ofreciendo experiencias de usuario fluidas y atractivas.",
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
        <path d="M12 2v6"></path>
        <path d="M12 16v6"></path>
        <path d="M16 6l-4 4-4-4"></path>
        <path d="M8 18l4-4 4 4"></path>
        <path d="M20.49 9A9 9 0 1 1 3.51 9"></path>
      </svg>
    ),
    title: "Automatización de Procesos",
    paragraph:
      "Optimizamos tus operaciones y mejoramos la eficiencia de tu empresa mediante la automatización de tareas y flujos de trabajo repetitivos.",
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M12 18v-6"></path>
        <path d="M9 15h6"></path>
      </svg>
    ),
    title: "Sistemas a Medida",
    paragraph:
      "Diseñamos y construimos soluciones de software personalizadas que se integran perfectamente con tus sistemas existentes para resolver desafíos específicos.",
  },
];

export default featuresData;