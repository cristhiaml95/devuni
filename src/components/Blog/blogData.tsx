import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "5 Ventajas de Usar Next.js para tu Próxima Web App",
    paragraph:
      "Descubre por qué Next.js se ha convertido en el framework de React preferido para construir aplicaciones web modernas, rápidas y escalables.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Javier Gómez",
      image: "/images/blog/author-02.png",
      designation: "Desarrollador Frontend",
    },
    tags: ["Next.js", "Web"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "¿Nativa o Híbrida? Cómo Elegir la Mejor Opción para tu App",
    paragraph:
      "Analizamos las diferencias clave entre el desarrollo de aplicaciones nativas e híbridas para ayudarte a tomar la mejor decisión para tu proyecto.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "María López",
      image: "/images/blog/author-02.png",
      designation: "Desarrolladora Móvil",
    },
    tags: ["Mobile", "Apps"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Automatiza tus Procesos y Aumenta la Productividad",
    paragraph:
      "La automatización de procesos (RPA) puede ser un cambio de juego para tu negocio. Te contamos cómo empezar y qué beneficios puedes esperar.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "David Chen",
      image: "/images/blog/author-03.png",
      designation: "Especialista en Automatización",
    },
    tags: ["Automatización", "RPA"],
    publishDate: "2025",
  },
];
export default blogData;
