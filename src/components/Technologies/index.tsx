
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
            <div className="flex flex-wrap items-center justify-center rounded-xs bg-gray-50 px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {technologiesData.map((tech) => (
                <SingleTechnology key={tech.id} technology={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

const SingleTechnology = ({ technology }: { technology: Technology }) => {
  const { name } = technology;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <div className="text-base text-body-color dark:text-body-color-dark font-semibold">
        {name}
      </div>
    </div>
  );
};
