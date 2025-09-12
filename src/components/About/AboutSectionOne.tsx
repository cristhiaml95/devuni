import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color dark:text-body-color-dark mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Tu Socio Tecnológico para la Innovación Digital"
                paragraph="En Devuni, somos más que una simple agencia de desarrollo. Nos convertimos en tu socio tecnológico, comprometidos con el éxito de tu proyecto. Trabajamos contigo para entender tus necesidades y ofrecerte soluciones a medida que impulsen tu negocio."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Soluciones a Medida" />
                    <List text="Equipo de Expertos" />
                    <List text="Procesos Ágiles" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Soporte Continuo" />
                    <List text="Enfoque en el Cliente" />
                    <List text="Calidad Garantizada" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                {/* Light mode with radial gradient - clear center */}
                <div className="relative w-full h-full rounded-3xl p-4 shadow-xl dark:hidden group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Radial gradient background - completely transparent center */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-indigo-100/30 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-radial from-white/0 via-white/10 to-blue-50/40 rounded-3xl"></div>
                  
                  {/* Corner accents only */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-blue-200/25 to-transparent rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-indigo-200/25 to-transparent rounded-bl-3xl"></div>
                  
                  <Image
                    src="/images/about/about-image.png"
                    alt="about-image"
                    fill
                    className="relative z-10 object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Dark mode with radial gradient - clear center */}
                <div className="relative w-full h-full rounded-3xl p-4 shadow-xl hidden dark:block group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Radial gradient background - completely transparent center */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-800/20 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-radial from-gray-900/0 via-gray-900/5 to-gray-700/25 rounded-3xl"></div>
                  
                  {/* Corner accents only */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-blue-500/15 to-transparent rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-indigo-500/15 to-transparent rounded-bl-3xl"></div>
                  
                  <Image
                    src="/images/about/about-image-dark.png"
                    alt="about-image"
                    fill
                    className="relative z-10 object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
