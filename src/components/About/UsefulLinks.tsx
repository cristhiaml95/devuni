import Link from "next/link";

const UsefulLinks = () => {
  const externalLinks = [
    {
      title: "React Official Documentation",
      url: "https://react.dev/",
      description: "La documentación oficial de React para desarrollo moderno",
      category: "Desarrollo Web"
    },
    {
      title: "Next.js Documentation",
      url: "https://nextjs.org/docs",
      description: "Guía completa para desarrollo con Next.js",
      category: "Desarrollo Web"
    },
    {
      title: "Google Developers",
      url: "https://developers.google.com/",
      description: "Recursos y herramientas de desarrollo de Google",
      category: "Herramientas"
    },
    {
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/es/",
      description: "Documentación web estándar de Mozilla",
      category: "Referencias"
    },
    {
      title: "GitHub",
      url: "https://github.com/",
      description: "Plataforma de desarrollo colaborativo",
      category: "Herramientas"
    },
    {
      title: "Stack Overflow",
      url: "https://stackoverflow.com/",
      description: "Comunidad de desarrolladores para resolver dudas",
      category: "Comunidad"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                Recursos Útiles para Desarrolladores
              </h2>
              <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                Herramientas y recursos que recomendamos para mantenerte actualizado en el mundo del desarrollo de software.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {externalLinks.map((link, index) => (
            <div key={index} className="w-full px-4 md:w-6/12 lg:w-4/12">
              <div className="mb-8 rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                <div className="mb-4">
                  <span className="mb-2 inline-block rounded bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {link.category}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-200"
                    title={`Visitar ${link.title}`}
                  >
                    {link.title}
                  </a>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  {link.description}
                </p>
                <div className="mt-4">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                    title={`Visitar ${link.title}`}
                  >
                    Visitar sitio
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;