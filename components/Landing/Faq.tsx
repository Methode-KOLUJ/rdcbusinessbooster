"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "C'est quoi RDC AGRO BUSINESS BOOSTER 2026 ?",
    a: "C'est un programme d'appui créé par AGANO Services & Consultances SARL. Il accompagne les jeunes Congolais dans la création de coopératives agricoles légales et dans l'obtention d'un financement jusqu'à 1 000 000 USD.",
  },
  {
    q: "L'inscription est-elle vraiment gratuite ?",
    a: "Oui, l'inscription sur notre site (www.rdcbusinessbooster.com) est totalement gratuite. Vous payez uniquement la formation d'éligibilité (20 $) après votre inscription.",
  },
  {
    q: "Pourquoi dois-je payer 20 $ pour la formation ?",
    a: "Ces 20 $ garantissent votre sérieux et votre engagement. Cela permet d'éviter les inscriptions de personnes non motivées. La formation vous donne toutes les clés pour réussir votre projet agricole collectif.",
  },
  {
    q: "Pourquoi 100 $ par personne pour créer la coopérative ?",
    a: "Les 3 000 (100 × 30 personnes) couvrent les frais de création légale de la coopérative : rédaction des statuts OHADA, immatriculation, compte bancaire, kit de démarrage, et accompagnement. C'est un investissement de départ pour créer une entité légale qui pourra recevoir 1 000 000 USD.",
  },
  {
    q: "Est-ce que l'argent du FOGEC est à rembourser ?",
    a: "Oui, le 500 000 du prêt garanti par le FOGEC est à rembourser sur 5 à 10 ans. Mais vous avez un différé de 2 ans (pas de remboursement la 1ère année). Le remboursement se fait sur la production agricole. Avec 350 000 de revenus par an, c'est tout à fait faisable.",
  },
  {
    q: "Est-ce que l'argent de la Banque Mondiale est à rembourser ?",
    a: "Non. Les 500 000 $ de la subvention Banque Mondiale / PND sont une subvention de développement. Ils ne sont pas à rembourser. C'est un investissement de l'État congolais pour créer des emplois et assurer la souveraineté alimentaire.",
  },
  {
    q: "Pourquoi l'argent n'est-il pas donné directement aux membres ?",
    a: "Pour protéger la coopérative. 1 000 000 USD remis directement à 30 personnes créerait des conflits, des achats inutiles et un risque de non-remboursement. AGANO sécurise l'argent sur un compte bloqué, achète le matériel, et livre une exploitation clé en main. Les membres reçoivent une exploitation, pas de l'argent liquide.",
  },
  {
    q: "Puis-je m'inscrire si je n'ai pas de groupe de 30 personnes ?",
    a: "Oui. Inscrivez-vous d'abord. Après la formation, notre plateforme vous mettra en relation avec d'autres jeunes inscrits dans votre province pour former votre groupe de 30.",
  },
  {
    q: "Quels sont les partenaires de ce programme ?",
    a: "Ce programme est sous le haut patronage de : ANAPI, ANADEC, FOGEC et FPI. Avec le soutien financier de la Banque Mondiale dans le cadre du Plan National de Développement (PND 2024-2028).",
  },
  {
    q: "Et si je ne rembourse pas le prêt FOGEC ?",
    a: "Le prêt est garanti à 70% par le FOGEC, ce qui signifie que la banque est protégée. Mais pour la coopérative, ne pas rembourser signifie perdre les actifs (tracteur, terrain, etc.) et ne plus être éligible à aucun financement futur. Avec l'accompagnement d'AGANO SERVICES & CONSULTANCES SARL, le remboursement est planifié et sécurisé.",
  },
  {
    q: "Puis-je rejoindre le programme si je suis déjà agriculteur ?",
    a: "Oui, absolument ! Vous pouvez rejoindre ou créer une coopérative avec d'autres agriculteurs de votre région pour bénéficier du financement et des achats groupés.",
  },
  {
    q: "Quelles cultures sont concernées ?",
    a: "Le programme couvre principalement : Maïs (culture de base), Manioc, Soja, Riz et Légumes (tomate, oignon, piment, etc.). Selon les besoins du marché et les spécificités de votre province.",
  },
  {
    q: "Comment contacter AGANO SERVICES & CONSULTANCES SARL ?",
    a: "Téléphone : +243 999 005 148 · Email : contact@rdcbusinessbooster.com · Site : www.rdcbusinessbooster.com",
  },
];

const FaqItem = ({
  item,
  open,
  onToggle,
}: {
  item: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className={`overflow-hidden rounded-lg border transition-all duration-300 ${
        open
          ? "border-primary/30 bg-white shadow-lg shadow-green-900/5"
          : "border-foreground/10 bg-white hover:border-primary/30 hover:shadow-md"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold md:font-black text-blue-800">
          {item.q}
        </span>
        <span
          className={`grid size-8 shrink-0 place-items-center rounded-full text-lg font-bold transition-all duration-300 ${
            open
              ? "rotate-45 bg-primary text-white"
              : "bg-primary/10 text-primary"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm md:text-base font-mono lg:text-lg leading-relaxed text-foreground/75">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-brand-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-foreground">
            Tout ce que vous devez savoir
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-lg md:text-xl text-foreground/70">
            Les réponses claires à toutes vos questions sur le programme, le
            financement et la création de votre coopérative.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          <div className="sticky top-24 lg:block">
            <div className="overflow-hidden hidden md:block rounded-lg shadow-green-900/10">
              <Image
                src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1788769207/FAQ_eqopha.svg"
                alt="Illustration agricole : coopérative, champs et cultures"
                width={100}
                height={200}
                className="aspect-video h-[500px] w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-lg bg-primary-dark p-8 text-white shadow-xl shadow-primary/20">
              <h3 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-black">
                Prêt à vous lancer ?
              </h3>
              <p className="mb-6 text-white/90">
              L'inscription est gratuite, rejoignez des milliers de jeunes Congolais qui bâtissent l'avenir du pays !
              </p>
              <a
                href="/inscription"
                className="inline-block rounded-xl hover:bg-accent bg-orange-600 px-8 py-3.5 font-bold text-white shadow-lg transition-all hover:scale-105"
              >
                Je me lance aussi !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
