"use client";

import SectionTitle from "../Common/SectionTitle";
export default function Video() {

  return (
    <>
      <section className="relative z-10 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-16 md:py-20 lg:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container relative z-10">
          <SectionTitle
            title="Conoce Nuestro Trabajo"
            paragraph="Descubre cómo transformamos ideas en soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio."
            center
            mb="80px"
          />
        </div>

        {/* Enhanced Video Container */}
        <div className="relative">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              {/* Outer Glow Container */}
              <div className="relative group">
                {/* Multiple Layered Shadows */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Main Video Container */}
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-2 shadow-2xl">
                  {/* Inner Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
                    
                    {/* Video with Enhanced Styling */}
                    <div className="relative aspect-video">
                      {/* Play Button Overlay (decorative) */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                          <div className="w-0 h-0 border-l-[16px] border-l-blue-600 border-y-[12px] border-y-transparent ml-1"></div>
                        </div>
                      </div>
                      
                      {/* Actual Video */}
                      <video
                        src="/videos/devuni.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                      />
                      
                      {/* Corner Decorations */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-blue-500 rounded-tl-lg opacity-60"></div>
                      <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-indigo-500 rounded-tr-lg opacity-60"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-purple-500 rounded-bl-lg opacity-60"></div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-pink-500 rounded-br-lg opacity-60"></div>
                    </div>
                    
                    {/* Video Info Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex items-center space-x-4 text-white">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium">EN VIVO</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">DevUni - Soluciones Tecnológicas</h3>
                          <p className="text-sm opacity-80">Transformando ideas en realidad digital</p>
                        </div>
                        <div className="text-sm opacity-70">4K • 60fps</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg opacity-80 group-hover:scale-110 group-hover:rotate-45 transition-all duration-500"></div>
                <div className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-lg opacity-70 group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg opacity-75 group-hover:scale-110 group-hover:rotate-90 transition-all duration-600"></div>
                <div className="absolute -bottom-4 -left-8 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg opacity-80 group-hover:scale-120 group-hover:-rotate-90 transition-all duration-800"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Background Shape */}
          <div className="absolute inset-0 z-[-1] opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-600/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-600/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </>
  );
};
