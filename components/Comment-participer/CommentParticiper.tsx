import React from "react";
import Link from "next/link";

type StepList = { title?: string; items: string[] };

type Step = {
  num: string;
  title: string;
  intro: string[];
  lists?: StepList[];
  highlight?: { text: string; type: "cost" | "badge" };
  conclusion?: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Inscription gratuite",
    intro: [
      "Rendez-vous sur la page page inscription de ce site et inscrivez-vous en 2 minutes. L'inscription est totalement gratuite. Vous rejoignez la base de données des futurs agri-entrepreneurs congolais.",
    ],
  },
  {
    num: "02",
    title: "Formation d'éligibilité",
    intro: [
      "Suivez notre formation pour apprendre les bases de l'agriculture moderne, le fonctionnement du modèle coopératif, et comment accéder au financement bancaire.",
    ],
    highlight: {
      text: "Coût : 20 $ (paiement unique) pour vous assurer que vous êtes sérieux et motivé. Ce n'est pas un frais caché, c'est un filtre d'engagement.",
      type: "cost",
    },
    lists: [
      {
        title: "Contenu de la formation :",
        items: [
          "Bases de l'agriculture moderne (techniques culturales, gestion des sols)",
          "Comment fonctionne le financement agricole en RDC",
          "Pourquoi les banques financent les entités et non les individus",
          "Le modèle coopératif : droits, devoirs, gouvernance",
          "Préparation à l'entrepreneuriat agricole collectif",
        ],
      },
    ],
  },
  {
    num: "03",
    title: "Constitution du groupe",
    intro: [
      "Après la formation, vous rassemblez 29 autres personnes motivées. Cela peut être vos amis, votre famille, d'autres jeunes de votre quartier ou de votre village que vous avez rencontrés via notre plateforme.",
    ],
    highlight: {
      text: "30 personnes = 1 coopérative",
      type: "badge",
    },
  },
  {
    num: "04",
    title: "Cotisation",
    intro: [
      "Chaque membre cotise 100 $, l'objectif est de réunir 3 000 $ qui serviront à créer votre coopérative.",
      "Les 3 000 $ (prestation AGANO Services & Consultances Sarl) couvrent :",
    ],
    lists: [
      {
        items: [
          "Rédaction des statuts conformes OHADA",
          "Assistance à l'immatriculation au SCOOP",
          "Ouverture de compte bancaire pour la coopérative",
          "Kit de démarrage (documents administratifs, cachet, registres)",
          "Accompagnement post-création (3 mois)",
        ],
      },
    ],
  },
  {
    num: "05",
    title: "Création de la coopérative légale",
    intro: [
      "AGANO Services & Consultances Sarl crée votre coopérative en bonne et due forme :",
    ],
    lists: [
      {
        items: [
          "Statuts conformes à l'Acte Uniforme OHADA",
          "Immatriculation au SNCOOP",
          "Compte bancaire professionnel ouvert",
          "Numéro SNCOOP obtenu",
        ],
      },
    ],
    conclusion:
      "Votre coopérative devient une entité légale, bancable et éligible au financement.",
  },
  {
    num: "06",
    title: "Obtention du financement",
    intro: [
      "AGANO Services & Consultances Sarl monte votre dossier de financement complet et le présente aux institutions partenaires.",
    ],
    lists: [
      {
        title: "Ce que vous obtenez :",
        items: [
          "500.000 USD de prêt garanti par le FOGEC (disponible maintenant)",
          "500.000 USD de subvention Banque Mondiale / PND (à mobiliser)",
          "Un total de 1.000.000 USD pour votre coopérative.",
        ],
      },
    ],
  },
  {
    num: "07",
    title: "Gestion sécurisée des fonds et achat du matériel",
    intro: [
      "L'argent n'est pas remis aux membres. AGANO Services & Consultances Sarl gère les fonds de façon transparente et sécurisée :",
    ],
    lists: [
      {
        items: [
          "Compte bloqué à la banque",
          "Double signature (AGANO + Président de la coopérative)",
          "Achats centralisés aux meilleurs prix du marché",
          "Traçabilité totale (factures, photos, procès-verbaux)",
        ],
      },
      {
        title: "Vous recevez une exploitation agricole clé en main :",
        items: [
          "Tracteur + accessoires",
          "Système d'irrigation",
          "Semences améliorées + engrais",
          "Magasin de stockage + bureau",
          "Clôture du site",
        ],
      },
    ],
  },
  {
    num: "08",
    title: "Production et revenus",
    intro: [
      "Vous commencez à cultiver avec tout le matériel livré et installé, vous produisez et vous gagnez de l'argent et partagez équitablement les intérêts.",
    ],
    lists: [
      {
        items: [
          "Production : maïs, manioc, soja, etc.",
          "Revenus : jusqu'à 350 000 $ par an par coopérative",
          "Remboursement : le prêt FOGEC est remboursé sur la production",
          "Bénéfices : le reste est distribué aux membres",
        ],
      },
    ],
    conclusion:
      "En fin de programme, votre coopérative possède tous les actifs, vous êtes propriétaire de votre exploitation.",
  },
];

const Check = () => (
  <svg
    className="size-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const StepCard = ({ step }: { step: Step }) => (
  <div className="rounded-lg bg-white p-8 transition-all sm:p-12">
    <div className="mb-8 flex items-start gap-6">
      <span className="text-6xl md:text-8xl font-black leading-[0.8] tracking-tight text-blue-700/60 select-none">
        {step.num}
      </span>
      <h3 className="pt-2 text-2xl md:text-3xl lg:text-5xl font-black tracking-tight text-primary">
        {step.title}
      </h3>
    </div>

    <div className="space-y-4 md:pl-[5.5rem] md:pr-4">
      {step.intro.map((paragraph) => (
        <p
          key={paragraph}
          className="text-base md:text-lg lg:text-xl leading-relaxed text-foreground/75"
        >
          {paragraph}
        </p>
      ))}

      {step.highlight &&
        (step.highlight.type === "cost" ? (
          <p className="rounded-xl border-accent bg-orange-50 p-4 text-base md:text-lg font-medium leading-relaxed text-foreground/85">
            {step.highlight.text}
          </p>
        ) : (
          <p className="inline-block rounded-md bg-brand-600 px-8 py-3 text-lg md:text-xl font-black tracking-wide text-white shadow-lg shadow-brand-600/30">
            {step.highlight.text}
          </p>
        ))}

      {step.lists?.map((list) => (
        <div key={list.title ?? "list"}>
          {list.title && (
            <p className="mb-4 text-base md:text-lg font-bold text-foreground">
              {list.title}
            </p>
          )}
          <ul className="grid gap-3">
            {list.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-brand-50 px-5 py-3.5"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                  <Check />
                </span>
                <span className="text-sm md:text-base font-medium leading-relaxed text-foreground/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {step.conclusion && (
        <p className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-base md:text-lg font-semibold leading-relaxed text-white shadow-lg shadow-brand-600/20">
          {step.conclusion}
        </p>
      )}
    </div>
  </div>
);

const CommentParticiper = () => {
  return (
    <>
      {/* Page header */}
      <section
        className="relative overflow-hidden bg-cover bg-center text-white py-30 sm:py-38 md:py-40 lg:py-52"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnpggdqyl/image/upload/v1788767149/comment_pbruxw.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-brand-700/90 via-brand-800/80 to-brand-950/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="mb-6 md:mb-8 text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-accent">
            Comment participer&nbsp;?
          </h1>
          <p className="max-w-4xl text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-white/85">
            Les{" "}
            <strong className="text-white">8 étapes</strong> pour réussir dans
            le RDC Agro Business Booster 2026.
          </p>
        </div>
      </section>

    <section className="relative overflow-hidden py-24">
  {/* Background + Parallax + Overlay */}
  <div className="absolute inset-0 z-0">
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dnpggdqyl/image/upload/v1788767149/comment_pbruxw.jpg')",
      }}
    />

    <div className="absolute inset-0 bg-white/50" />
  </div>

  {/* Contenu */}
  <div className="relative z-10 mx-auto max-w-7xl px-6">
    <div className="space-y-10">
      {steps.map((step) => (
        <StepCard key={step.num} step={step} />
      ))}
    </div>
  </div>
</section>
    </>
  );
};

export default CommentParticiper;