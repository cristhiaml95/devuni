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
    'Devuni es tu partner tecnológico para el desarrollo de webs, mobile apps, automatizaciones y sistemas a medida. Impulsamos tu negocio con soluciones innovadoras.',
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
    <html suppressHydrationWarning lang="en">
      <head />

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