"use client";


import NewsLatterBox from "./NewsLatterBox";
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // 1. Buscar o crear contacto
      let { data: contact, error } = await supabase
        .from('contacts')
        .select('id')
        .eq('email', data.email)
        .single();

      if (!contact) {
        const { data: newContact, error: createError } = await supabase
          .from('contacts')
          .insert([
            {
              email: data.email,
              full_name: data.full_name,
              phone: data.phone,
              company_name: data.company_name,
            },
          ])
          .select('id')
          .single();
        if (createError) throw createError;
        contact = newContact;
      }

      // 2. Insertar mensaje
      const { error: msgError } = await supabase
        .from('contact_messages')
        .insert([
          {
            contact_id: contact.id,
            message: data.message,
            source: 'web',
            // Puedes agregar ip y user_agent si los tienes disponibles
          },
        ]);
      if (msgError) throw msgError;

      alert('Mensaje enviado exitosamente!');
      event.target.reset();
    } catch (error) {
      console.error('Error de envío:', error);
      alert('Ocurrió un error al enviar el mensaje.');
    }
  };

  return (
    <section id="contact" className="overflow-hidden bg-gray-50 dark:bg-gray-900 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-[#eaf4fb] px-8 py-11 shadow-three dark:bg-[#1e3a5f] sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contáctanos
              </h2>
              <p className="mb-12 text-base font-medium text-gray-700 dark:text-gray-300">
                ¿Listo para empezar tu próximo proyecto? Completa el formulario y nos pondremos en contacto contigo para discutir tus ideas.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Ingresa tu nombre"
                        className="border-stroke w-full rounded-xs border bg-[#d6e8f7] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2d4a6b] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Ingresa tu email"
                        className="border-stroke w-full rounded-xs border bg-[#d6e8f7] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2d4a6b] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Ingresa tu número de teléfono"
                        className="border-stroke w-full rounded-xs border bg-[#d6e8f7] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2d4a6b] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="company"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Empresa (Opcional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Nombre de tu empresa"
                        className="border-stroke w-full rounded-xs border bg-[#d6e8f7] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2d4a6b] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Mensaje
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Ingresa tu mensaje"
                        className="border-stroke w-full resize-none rounded-xs border bg-[#d6e8f7] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2d4a6b] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
