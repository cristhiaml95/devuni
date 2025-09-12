import { Feature } from "@/types/feature";
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 dark:bg-gray-800 dark:shadow-2xl sm:p-6 lg:p-8 xl:p-10">
          {/* Enhanced Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          
          {/* Large Image Container - Now the main focus */}
          <div className="relative mb-6 flex flex-col items-center sm:mb-8">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>
            
            {/* Main Image Container */}
            <div className="relative flex h-40 w-40 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/15 to-primary/5 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl sm:h-48 sm:w-48 lg:h-60 lg:w-60 xl:h-64 xl:w-64">
              {/* Inner Container with Glass Effect */}
              <div className="flex h-36 w-36 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm shadow-inner transition-all duration-300 group-hover:bg-white/90 dark:bg-gray-700/80 dark:group-hover:bg-gray-700/90 sm:h-44 sm:w-44 lg:h-56 lg:w-56 xl:h-60 xl:w-60">
                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  {icon}
                </div>
              </div>
              
              {/* Floating Decoration Rings */}
              <div className="absolute -inset-2 rounded-full border-2 border-primary/20 transition-all duration-500 group-hover:scale-125 group-hover:border-primary/40"></div>
              <div className="absolute -inset-4 rounded-full border border-primary/10 transition-all duration-700 group-hover:scale-150 group-hover:border-primary/30"></div>
            </div>
          </div>
          
          {/* Content with Enhanced Typography */}
          <div className="relative text-center">
            <h3 className="mb-4 text-xl font-bold text-black transition-all duration-300 group-hover:text-primary group-hover:scale-105 sm:text-2xl lg:text-3xl xl:text-3xl dark:text-white dark:group-hover:text-primary">
              {title}
            </h3>
            <p className="text-body-color dark:text-body-color-dark mx-auto text-sm leading-relaxed font-medium transition-opacity duration-300 group-hover:opacity-90 sm:text-base lg:text-lg max-w-xs sm:max-w-sm lg:max-w-none">
              {paragraph}
            </p>
          </div>
          
          {/* Enhanced Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-300 group-hover:scale-150 group-hover:rotate-45 sm:h-32 sm:w-32"></div>
          <div className="absolute -top-2 -left-2 h-16 w-16 rounded-full bg-gradient-to-br from-primary/15 to-primary/8 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-45 sm:h-20 sm:w-20"></div>
          
          {/* Spotlight Effect */}
          <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-white/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-50 dark:bg-white/10"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
