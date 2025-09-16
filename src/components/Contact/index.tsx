
"use client";
import NewsLatterBox from "./NewsLatterBox";
import { useAuth } from "@/contexts/AuthContext";



import { useState } from "react";

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  message: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const { user } = useAuth();
  const [formState, setFormState] = useState<FormState>({
    full_name: user?.user_metadata?.full_name || '',
    email: user?.email || '',
    phone: '',
    company_name: '',
    message: '',
  });
  const [errors, setErrors] = useState<ErrorState>({});
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const validate = (): ErrorState => {
    const errs: ErrorState = {};
    if (!user && !formState.full_name.trim()) errs.full_name = 'Nombre requerido';
    if (!user && !formState.email.trim()) errs.email = 'Email requerido';
    else if (!user && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formState.email)) errs.email = 'Email inválido';
    if (!formState.phone.trim()) errs.phone = 'Teléfono requerido';
    if (!formState.message.trim()) errs.message = 'Mensaje requerido';
    return errs;
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      // 1. Buscar o crear contacto (no actualizar si ya existe)
      let contact;
      if (user) {
        // Buscar por id (que es igual a user.id)
        let { data, error } = await supabase
          .from('contacts')
          .select('id')
          .eq('id', user.id)
          .single();
        if (!data) {
          // Si no existe, crear con id = user.id
          const { data: newContact, error: createError } = await supabase
            .from('contacts')
            .insert([
              {
                id: user.id,
                user_id: user.id,
                email: user.email,
                full_name: user.user_metadata?.full_name || '',
                phone: formState.phone,
                company_name: formState.company_name,
              },
            ])
            .select('id')
            .single();
          if (createError) throw createError;
          contact = newContact;
        } else {
          contact = data;
        }
      } else {
        // No autenticado: buscar por email
        let { data, error } = await supabase
          .from('contacts')
          .select('id')
          .eq('email', formState.email)
          .single();
        if (!data) {
          const { data: newContact, error: createError } = await supabase
            .from('contacts')
            .insert([
              {
                email: formState.email,
                full_name: formState.full_name,
                phone: formState.phone,
                company_name: formState.company_name,
              },
            ])
            .select('id')
            .single();
          if (createError) throw createError;
          contact = newContact;
        } else {
          contact = data;
        }
      }

      // 2. Insertar mensaje
      const { error: msgError } = await supabase
        .from('contact_messages')
        .insert([
          {
            contact_id: contact.id,
            message: formState.message,
            source: 'web',
          },
        ]);
      if (msgError) throw msgError;

      // 3. Insertar en contact_updates
      const updatePayload = {
        contact_id: contact.id,
        email: user ? user.email : formState.email,
        full_name: user ? user.user_metadata?.full_name : formState.full_name,
        phone: formState.phone,
        company_name: formState.company_name,
        source: 'web',
        changed_fields: {},
      };
      await supabase.from('contact_updates').insert([updatePayload]);

      setSuccessMsg('¡Mensaje enviado exitosamente!');
      setFormState({
        full_name: user?.user_metadata?.full_name || '',
        email: user?.email || '',
        phone: '',
        company_name: '',
        message: '',
      });
    } catch (error) {
      console.error('Error de envío:', error);
      setErrorMsg('Ocurrió un error al enviar el mensaje.');
    } finally {
      setSubmitting(false);
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
              <h2 className="mb-2 mt-2 text-3xl font-extrabold text-center text-gray-900 dark:text-white tracking-tight">Contáctanos</h2>
              <p className="mb-8 text-center text-gray-700 dark:text-gray-300 text-base font-medium">
                ¿Listo para empezar tu próximo proyecto? Completa el formulario y nos pondremos en contacto contigo para discutir tus ideas.
              </p>
              <form onSubmit={handleSubmit} autoComplete="off" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {!user && (
                  <div className="col-span-1">
                    <label htmlFor="full_name" className="block mb-1 font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary align-middle">
                        {/* User outline icon */}
                        <svg className="w-5 h-5 block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5a7.5 7.5 0 0115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z"/></svg>
                      </span>
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      value={formState.full_name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/60 transition ${errors.full_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                      disabled={submitting}
                    />
                    {errors.full_name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 14a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 16Zm1-8h-2v6h2V8Z"/></svg>{errors.full_name}</p>}
                  </div>
                )}
                {!user && (
                  <div className="col-span-1">
                    <label htmlFor="email" className="block mb-1 font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary align-middle">
                        {/* Mail outline icon */}
                        <svg className="w-5 h-5 block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.876 1.8l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625a2.25 2.25 0 01-.876-1.8V6.75"/></svg>
                      </span>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/60 transition ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                      disabled={submitting}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 14a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 16Zm1-8h-2v6h2V8Z"/></svg>{errors.email}</p>}
                  </div>
                )}
                <div className="col-span-1">
                  <label htmlFor="phone" className="block mb-1 font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary align-middle">
                      {/* Heroicons phone outline icon */}
                      <svg className="w-5 h-5 block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.478c.636 0 1.197.417 1.342 1.033l.7 2.982a1.35 1.35 0 01-.31 1.308l-1.2 1.2a16.5 16.5 0 006.364 6.364l1.2-1.2a1.35 1.35 0 011.308-.31l2.982.7a1.35 1.35 0 011.033 1.342V19.5a2.25 2.25 0 01-2.25 2.25A17.25 17.25 0 012.25 6.75z"/></svg>
                    </span>
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-2 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/60 transition ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                    disabled={submitting}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 14a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 16Zm1-8h-2v6h2V8Z"/></svg>{errors.phone}</p>}
                </div>
                <div className="col-span-1">
                  <label htmlFor="company_name" className="block mb-1 font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary align-middle">
                      {/* Office building outline icon */}
                      <svg className="w-5 h-5 block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21V3.75A.75.75 0 014.5 3h15a.75.75 0 01.75.75V21m-16.5 0h16.5m-16.5 0v-2.25a.75.75 0 01.75-.75h15a.75.75 0 01.75.75V21m-10.5-6.75h3m-3 3h3m-3-6h3"/></svg>
                    </span>
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    value={formState.company_name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
                    disabled={submitting}
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="message" className="block mb-1 font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary align-middle">
                      {/* Heroicons chat bubble outline icon */}
                      <svg className="w-5 h-5 block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 15.75a2.25 2.25 0 01-2.25 2.25H6.25L2.75 21.25V6.75A2.25 2.25 0 015 4.5h14.5a2.25 2.25 0 012.25 2.25v9z"/></svg>
                    </span>
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-2 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/60 transition ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                    disabled={submitting}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 14a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 16Zm1-8h-2v6h2V8Z"/></svg>{errors.message}</p>}
                </div>
                {successMsg && <div className="mb-4 text-green-600 font-semibold flex items-center gap-2 justify-center"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-1 14.59l-4.3-4.3 1.42-1.42L11 13.76l5.88-5.88 1.42 1.42-7.3 7.29Z"/></svg></span>{successMsg}</div>}
                {errorMsg && <div className="mb-4 text-red-600 font-semibold flex items-center gap-2 justify-center"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm1 14h-2v-2h2v2Zm0-4h-2V7h2v5Z"/></svg></span>{errorMsg}</div>}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-primary/90 transition disabled:opacity-50 flex items-center justify-center gap-2"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        {/* Paper plane outline icon */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12l16.5-7.5-7.5 16.5-2.25-6.75-6.75-2.25z"/></svg>
                        Enviar mensaje
                      </>
                    )}
                  </button>
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
