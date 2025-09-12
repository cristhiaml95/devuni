import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {/* Light mode with radial gradient background - clear center */}
              <div className="relative w-full h-full rounded-3xl p-4 shadow-xl dark:hidden group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Radial gradient background - transparent center, colored edges */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-blue-100/30 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-radial from-white/0 via-white/20 to-blue-50/50 rounded-3xl"></div>
                
                {/* Subtle corner accents only */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-transparent rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-indigo-200/20 to-transparent rounded-br-3xl"></div>
                
                <Image
                  src="/images/about/about-image-2.png"
                  alt="about image"
                  fill
                  className="relative z-10 object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Dark mode with radial gradient background - clear center */}
              <div className="relative w-full h-full rounded-3xl p-4 shadow-xl hidden dark:block group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Radial gradient background - transparent center, subtle edges */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-800/20 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-radial from-gray-900/0 via-gray-900/10 to-gray-700/30 rounded-3xl"></div>
                
                {/* Subtle corner accents only */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-br-3xl"></div>
                
                <Image
                  src="/images/about/about-image-2-dark.png"
                  alt="about image"
                  fill
                  className="relative z-10 object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  1. Descubrimiento y Planificación
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  Comenzamos cada proyecto con una fase de descubrimiento para entender a fondo tus objetivos. Planificamos cada detalle para asegurar que el resultado final cumpla con tus expectativas.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  2. Diseño y Desarrollo Ágil
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  Nuestro equipo de diseño y desarrollo trabaja en ciclos ágiles, permitiendo flexibilidad y entregas rápidas. Te mantenemos informado y participando en cada etapa del proceso.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  3. Despliegue y Evolución
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  Lanzamos tu producto al mercado y te acompañamos en su evolución. Ofrecemos soporte continuo y planes de mejora para que tu solución crezca junto a tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
