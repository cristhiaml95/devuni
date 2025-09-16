"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { GoogleAuthButton, UserProfile } from "@/components/Auth/GoogleAuth";
import { subscribeToNewsletter } from "@/lib/supabase";

const NewsLatterBox = () => {
  const { user, loading } = useAuth();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!user) return;
    
    setIsSubscribing(true);
    setMessage("");
    
    try {
      const result = await subscribeToNewsletter(
        user.email!,
        user.user_metadata?.full_name
      );
      
      if (result.error) {
        setMessage("Error al suscribirse. Por favor intenta de nuevo.");
      } else {
        setMessage("¡Suscripción exitosa! Gracias por unirte a nuestro boletín.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("Error inesperado. Por favor intenta de nuevo.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleManualSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    
    // Manual subscription for users who don't want to use Google
    try {
      setIsSubscribing(true);
      // Simulate subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage("¡Suscripción exitosa!");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setMessage("Error al suscribirse.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="shadow-three dark:bg-gray-800 relative z-10 rounded-xs bg-[#eaf4fb] p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-white">
        Suscríbete a Nuestro Boletín
      </h3>
      <p className="border-body-color/25 text-body-color mb-8 border-b pb-8 text-base leading-relaxed dark:border-white/25 dark:text-body-color-dark">
        Recibe en tu correo las últimas noticias sobre tecnología, nuestros nuevos proyectos y artículos de interés. Sin spam, solo contenido de valor.
      </p>
      
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
        </div>
      ) : user ? (
        <div className="space-y-4">
          <UserProfile className="mb-4" showSignOut={true} />
          {message && (
            <div className={`rounded-xs p-3 text-sm ${
              message.includes("Error") 
                ? "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300"
                : "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
            }`}>
              {message}
            </div>
          )}
          {/* El usuario autenticado ya está suscrito, no mostrar botón */}
          <div className="text-green-700 dark:text-green-300 text-sm font-medium">Ya eres parte del boletín.</div>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <GoogleAuthButton 
              text="Suscribirse con Google"
              className="w-full justify-center"
            />
          </div>
          {message && (
            <div className={`rounded-xs p-3 text-sm ${
              message.includes("Error") 
                ? "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300"
                : "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
            }`}>
              {message}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsLatterBox;
