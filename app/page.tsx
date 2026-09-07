import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Landing/Hero";
import About from "@/components/Landing/About";
import Faq from "@/components/Landing/Faq";

export const metadata: Metadata = {
  title: {
    absolute: 'Accueil - RDC Agro Business Booster'
  },
  description: 'Le programme RDC Agro Business Booster 2026 est destiné aux jeunes entrepreneurs agricoles Congolais recherchant financement',
  keywords: 'Coopérative, Business Booster, Agro RDC, Inscription, Banque mondiale et PND, FOGEC, Participer, agriculture',
  openGraph: {
    title: 'RDC Agro Business Booster',
    description: 'Le programme n° 1 pour la jeunesse entrepreneuriale Congolaise',
    type: 'website',
  },
};


const page = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Faq />
      </main>
    </>
  );
};

export default page;
