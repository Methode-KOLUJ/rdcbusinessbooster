import React from "react";
import { Metadata } from "next";
import Inscription from "@/components/Inscription/Inscription";


export const metadata: Metadata = {
  title: {
    absolute: 'Inscription - RDC Agro Business Booster'
  },
  description: 'Inscrivez-vous au programme RDC Agro Business Booster 2026 en remplissant ce bref formulaire',
  keywords: 'Coopérative, Business Booster, Agro RDC, Inscription, Banque mondiale et PND, FOGEC, Participer',
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
        <Inscription />
      </main>
    </>
  );
};

export default page;