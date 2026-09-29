import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

// export const metadata: Metadata = {
//   title: "RDC Agro Business Booster 2026",
//   description:
//     "Nous sommes un programme d'appui et d'accompagnement à l'entrepreneuriat agricole collectif pour la jeunesse congolaise.",
// };

// TODO: Replace with your actual domain
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : 'https://www.rdcbusinessbooster.com';


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'RDC Agro Business Booster',
    template: '%s | RDC Agro Business Booster',
  },
  description: 'Nous sommes un programme d\'appui et d\'accompagnement à l\'entrepreneuriat agricole collectif pour la jeunesse congolaise.',
  keywords: [
    'Coopérative', 'Business Booster', 'Agro RDC', 'Agriculture', 
    'Entrepreneuriat', 'Agro-industrie', 'Agri-preneur', 'Développement', 
    'Inscription', 'Banque mondiale et PND', 'FOGEC', 'Participer', 'agriculture'
  ],
  authors: [{ name: 'RDC Agro Business Booster' }],
  creator: 'RDC Agro Business Booster',
  publisher: 'RDC Agro Business Booster',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'RDC Agro Business Booster',
    description: 'Nous sommes un programme d\'appui et d\'accompagnement à l\'entrepreneuriat agricole collectif pour la jeunesse congolaise.',
    url: baseUrl,
    siteName: 'RDC Agro Business Booster',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/logos/Business_OG.jpg',
        width: 1000,
        height: 1000,
        alt: 'RDC Agro Business Booster 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RDC Agro Business Booster',
    description: 'Nous sommes un programme d\'appui et d\'accompagnement à l\'entrepreneuriat agricole collectif pour la jeunesse congolaise.',
    images: ['/logos/Business_OG.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
