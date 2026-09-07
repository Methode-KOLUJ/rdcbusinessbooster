import React from "react";
import { Metadata } from "next";
import CommentParticiper from "@/components/Comment-participer/CommentParticiper";

export const metadata: Metadata = {
  title: {
    absolute: 'Comment participer ? - RDC Agro Business Booster'
  },
  description: 'Prenez connaissance des 8 procédures à absolument savoir pour participer au programme RDC Agro Business Booster 2026',
  keywords: 'Création de coopérative, Business Booster, Agro RDC, Procédures, AGANO Services',
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
        <CommentParticiper />
      </main>
    </>
  );
};

export default page;