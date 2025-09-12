import Link from "next/link";

interface ExternalResource {
  title: string;
  url: string;
  description: string;
  domain: string;
}

interface ExternalResourcesProps {
  category: "web" | "mobile" | "automation";
}

const ExternalResources = ({ category }: ExternalResourcesProps) => {
  const resources: Record<string, ExternalResource[]> = {
    web: [
      {
        title: "Next.js Documentación Oficial",
        url: "https://nextjs.org/docs",
        description: "Guía completa para desarrollo con Next.js",
        domain: "nextjs.org"
      },
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/es/docs/Web",
        description: "Documentación web estándar de Mozilla",
        domain: "developer.mozilla.org"
      },
      {
        title: "Can I Use",
        url: "https://caniuse.com/",
        description: "Compatibilidad de características web en navegadores",
        domain: "caniuse.com"
      },
      {
        title: "Google PageSpeed Insights",
        url: "https://pagespeed.web.dev/",
        description: "Herramienta de análisis de rendimiento web",
        domain: "pagespeed.web.dev"
      }
    ],
    mobile: [
      {
        title: "React Native Documentación",
        url: "https://reactnative.dev/docs/getting-started",
        description: "Guía oficial para desarrollo móvil con React Native",
        domain: "reactnative.dev"
      },
      {
        title: "Apple Developer Guidelines",
        url: "https://developer.apple.com/design/human-interface-guidelines/",
        description: "Guías de diseño de Apple para iOS",
        domain: "developer.apple.com"
      },
      {
        title: "Material Design",
        url: "https://m3.material.io/",
        description: "Sistema de diseño de Google para Android",
        domain: "m3.material.io"
      },
      {
        title: "App Store Connect",
        url: "https://developer.apple.com/app-store-connect/",
        description: "Plataforma de distribución de apps de Apple",
        domain: "developer.apple.com"
      }
    ],
    automation: [
      {
        title: "UiPath Academy",
        url: "https://academy.uipath.com/",
        description: "Cursos gratuitos de automatización RPA",
        domain: "academy.uipath.com"
      },
      {
        title: "Zapier",
        url: "https://zapier.com/",
        description: "Plataforma de automatización de workflows",
        domain: "zapier.com"
      },
      {
        title: "Microsoft Power Automate",
        url: "https://powerautomate.microsoft.com/",
        description: "Herramienta de automatización de Microsoft",
        domain: "powerautomate.microsoft.com"
      },
      {
        title: "Python Automation",
        url: "https://docs.python.org/3/library/",
        description: "Librerías oficiales de Python para automatización",
        domain: "docs.python.org"
      }
    ]
  };

  const categoryResources = resources[category] || [];

  return (
    <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
        Recursos útiles y referencias
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {categoryResources.map((resource, index) => (
          <div key={index} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
            <h4 className="mb-2 font-medium text-black dark:text-white">
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-200"
                title={`Visitar ${resource.title} en ${resource.domain}`}
              >
                {resource.title}
              </a>
            </h4>
            <p className="text-sm text-body-color dark:text-body-color-dark mb-2">
              {resource.description}
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {resource.domain}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExternalResources;