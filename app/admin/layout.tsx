import AdminLayoutClient from '@/components/admin/AdminLayout';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    default: 'RDC Agro Business Booster',
    template: '%s | RDC Agro Business Booster'
  },
  description: 'Le programme RDC Agro Business Booster 2026 est destiné aux jeunes entrepreneurs agricoles Congolais recherchant financement',
  keywords: ["Coopérative", "Business Booster"," Agro RDC", "Inscription", "Banque mondiale et PND", "FOGEC", "Participer", "agriculture"],
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
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },

    ],
    apple: [
      { url: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icons/icon-32x32.ico',
  },
  openGraph: {
    title: 'RDC Agro Business Booster',
    description: 'Le programme RDC Agro Business Booster 2026 est destiné aux jeunes entrepreneurs agricoles Congolais recherchant financement',
    siteName: 'RDC Agro Business Booster 2026',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/Logos/Business_OG.jpg',
        width: 1000,
        height: 1000,
        alt: 'RDC Agro Business Booster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RDC Agro Business Booster 2026',
    description: 'Le programme RDC Agro Business Booster 2026 est destiné aux jeunes entrepreneurs agricoles Congolais recherchant financement',
    images: ['/Logos/Business_OG.jpg'],
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

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
