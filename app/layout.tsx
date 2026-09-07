import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "RDC Agro Business Booster 2026",
  description:
    "Un programme d'appui et d'accompagnement à l'entrepreneuriat agricole collectif pour la jeunesse congolaise.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </html>
  );
}
