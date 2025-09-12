import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import type { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Devuni | Desarrollo de Software a Medida',
    template: '%s | Devuni',
  },
  description:
    'Desarrollamos webs, apps móviles, automatizaciones y sistemas a medida. Impulsamos tu negocio con soluciones digitales innovadoras.',
  keywords: [
    'desarrollo web',
    'aplicaciones móviles',
    'automatización',
    'sistemas a medida',
    'software',
    'devuni',
    'agencia de desarrollo',
    'transformación digital',
  ],
  authors: [{ name: 'Devuni', url: 'https://devuni.com' }],
  creator: 'Devuni',
  publisher: 'Devuni',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://devuni.com',
    title: 'Devuni | Desarrollo de Software a Medida',
    description: 'Transformamos ideas en soluciones digitales. Desarrollo web, móvil, automatizaciones y software a medida.',
    siteName: 'Devuni',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devuni | Desarrollo de Software a Medida',
    description: 'Tu socio tecnológico para crear webs, apps y sistemas que impulsan tu negocio.',
    creator: '@tuTwitter',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head>
        <meta httpEquiv="Content-Language" content="es" />
        <link rel="icon" href="/images/favicon-devuni.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/favicon-devuni.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon-devuni.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon-devuni.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon-devuni.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon-devuni.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon-devuni.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon-devuni.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon-devuni.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon-devuni.png" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
      </body>
    </html>
  );
}
