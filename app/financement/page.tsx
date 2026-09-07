import React from "react";
import { Metadata } from "next";
import Financement from "@/components/Financement/Financement";

export const metadata: Metadata = {
  title: {
    absolute: 'Financement - RDC Agro Business Booster'
  },
  description: 'Apprenez comment une coopérative de 30 personnes peut obtenir un financement à hauteur d\'un million de dollar',
  keywords: 'Coopérative, Business Booster, Agro RDC, Financement, 1 million, Banque mondiale et PND, FOGEC',
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
        <Financement />
      </main>
    </>
  );
};

export default page;