
import { Technology } from "@/types/technology";
import SectionTitle from "../Common/SectionTitle";
import technologiesData from "./technologiesData";

const Technologies = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <SectionTitle
          title="Tecnologías con las que Trabajamos"
          paragraph="Utilizamos las herramientas y tecnologías más modernas y eficientes para construir soluciones de alta calidad."
          center
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-xs bg-gray-50 px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]
              dark:bg-gradient-to-br dark:from-[#071226] dark:to-[#0b1220]">
              {technologiesData.map((tech, i) => (
                <SingleTechnology key={tech.id} technology={tech} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

const SingleTechnology = ({ technology, index }: { technology: Technology; index?: number }) => {
  const { name } = technology;
  const delay = index ? `${index * 80}ms` : '0ms';

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <div
        className="rounded px-3 py-2 w-full max-w-[180px] text-center bg-white shadow-md ring-1 ring-gray-100 tech-entrance tech-playful-hover tech-press tech-reduced-motion
          dark:bg-gradient-to-br dark:from-[#071226]/60 dark:to-[#0b1220]/60 dark:shadow-[0_12px_30px_rgba(2,6,23,0.6)] dark:ring-1 dark:ring-white/6"
        style={{ animationDelay: delay }}
      >
        <div className="text-base text-body-color dark:text-white font-semibold">
          {name}
        </div>
      </div>
    </div>
  );
};
