import React from "react";
import Link from "next/link";
import { Car, Users, TrendingDown, Swords, ShoppingCart, CreditCard, SearchX } from "lucide-react";

const fogec: [string, string][] = [
  ["Montant", "500.000 USD par coopérative"],
  ["Garantie", "FOGEC (garantit 70% du prêt)"],
  ["Durée de remboursement", "5 à 10 ans"],
  ["Différé", "2 ans (pas de remboursement la 1ère année)"],
  ["Taux d'intérêt", "9% à 12% par an (taux préférentiel)"],
];

const banqueMondiale: [string, string][] = [
  ["Montant", "500 000 USD par coopérative"],
  ["Nature", "Subvention de développement"],
  [
    "Remboursement",
    "Aucun — c'est un investissement de l'État pour l'emploi des jeunes",
  ],
  [
    "Disponibilité",
    "À mobiliser — l'enveloppe est en cours de négociation avec la Banque Mondiale",
  ],
];

const sources = [
  {
    source: "FOGEC",
    montant: "500 000 $",
    nature: "Prêt garanti",
    remboursement: "Oui (5-10 ans)",
    disponible: "Maintenant",
    total: false,
  },
  {
    source: "Banque Mondiale",
    montant: "500 000 $",
    nature: "Subvention",
    remboursement: "Non",
    disponible: "À mobiliser",
    total: false,
  },
  {
    source: "Total",
    montant: "1 000 000 $",
    nature: "Mixte",
    remboursement: "",
    disponible: "",
    total: true,
  },
];

const loterie = [
  { text: "Vous achetez une belle voiture au lieu d'investir", icon: Car },
  { text: "Vos amis et votre famille vous demandent de l'argent", icon: Users },
  { text: "En 6 mois, il ne reste plus rien", icon: TrendingDown },
];

const risques = [
  { text: `Conflits internes (Pourquoi lui il a plus que moi ?)`, icon: Swords },
  { text: "Achats inutiles et mal négociés", icon: ShoppingCart },
  { text: "Difficulté à rembourser le prêt FOGEC", icon: CreditCard },
  { text: "Absence de traçabilité pour la Banque Mondiale", icon: SearchX },
];

const solution = [
  {
    mecanisme: "Compte bloqué",
    detail:
      "L'argent est sur un compte spécial à la banque. Il ne peut pas être retiré librement.",
  },
  {
    mecanisme: "Double signature",
    detail:
      "Chaque paiement nécessite la signature d'AGANO + du Président de la coopérative.",
  },
  {
    mecanisme: "Achats centralisés",
    detail: "AGANO achète tout le matériel aux meilleurs prix du marché.",
  },
  {
    mecanisme: "Traçabilité totale",
    detail:
      "Chaque dépense est justifiée par une facture, une photo et un procès-verbal.",
  },
  {
    mecanisme: "Rapport mensuel",
    detail:
      "Un rapport financier est envoyé chaque mois à la coopérative.",
  },
  {
    mecanisme: "Audit externe",
    detail:
      "Un cabinet indépendant vérifie les comptes chaque trimestre.",
  },
];

const InfoTable = ({
  headers,
  rows,
}: {
  headers: [string, string];
  rows: [string, string][];
}) => (
  <div className="overflow-hidden rounded-lg border border-foreground/10 shadow-xl shadow-brand-600/5">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr className="text-white">
            <th className="bg-brand-600 px-8 py-5 text-center text-base md:text-lg lg:text-xl uppercase font-bold">
              {headers[0]}
            </th>
            <th className="bg-brand-700 px-8 py-5 text-center text-base md:text-lg lg:text-xl uppercase font-bold">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, detail], i) => (
            <tr
              key={label}
              className={i % 2 === 0 ? "bg-white" : "bg-brand-50/60"}
            >
              <td className="px-8 py-5 text-left text-sm md:text-lg font-semibold text-foreground">
                {label}
              </td>
              <td className="px-8 py-5 text-left text-sm md:text-lg leading-relaxed text-foreground/70">
                {detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SectionNumber = ({ number }: { number: string }) => (
  <span className="text-6xl md:text-8xl font-black leading-[0.8] tracking-tight text-blue-700/60 select-none">
    {number}
  </span>
);

const Check = () => (
  <svg
    className="size-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Cross = () => (
  <svg
    className="size-3"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Financement = () => {
  return (
    <>
      {/* Page header */}
      <section
        className="relative overflow-hidden bg-cover bg-center text-white py-26 sm:py-30 md:py-36 lg:py-46"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnpggdqyl/image/upload/v1788767698/finance_tjvzuc.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/90 via-brand-800/80 to-brand-950/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="mb-6 text-accent text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Comment votre coopérative obtient{" "}
            <span>1.000.000 USD</span> ?
          </h1>
          <p className="max-w-4xl text-lg md:text-xl lg:text-2xl leading-relaxed text-white/85">
            Le programme RDC Agro Business Booster 2026 vous donne accès à{" "}
            <strong className="text-white">2 sources de financement complémentaires.</strong>
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Source 1 : FOGEC */}
          <div className="mb-24">
            <div className="mb-10">
              <div className="mb-8 flex items-start gap-6">
                <SectionNumber number="01" />
                <h2 className="pt-2 text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-primary">
                  Prêt Bancaire Garanti par le FOGEC
                </h2>
              </div>
              <p className="max-w-7xl text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/70 md:pl-[5.5rem]">
                <strong className="font-semibold text-brand-700">
                  Disponible dès maintenant :
                </strong>{" "}
                dès que votre coopérative est créée, AGANO monte votre
                dossier de prêt bancaire garanti par le{" "}
                <span className="font-semibold text-brand-700">
                  Fonds de Garantie de l&apos;Entrepreneuriat Congolais
                  (FOGEC)
                </span>
                .
              </p>
            </div>
            <InfoTable headers={["Élément", "Détail"]} rows={fogec} />
          </div>

          {/* Source 2 : Banque Mondiale */}
          <div className="mb-24">
            <div className="mb-10">
              <div className="mb-8 flex items-start gap-6">
                <SectionNumber number="02" />
                <h2 className="pt-2 text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-primary">
                  Subvention PND / Banque Mondiale
                </h2>
              </div>
              <p className="max-w-7xl text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/70 md:pl-[5.5rem]">
                Cette source de financement est{" "}
                <strong className="font-semibold text-brand-700">
                  en cours de mobilisation
                </strong>{" "}
                dans le cadre du Plan National de Développement
                (PND 2024-2028) qui prévoit{" "}
                <span className="font-semibold text-brand-700">
                  11 milliards USD
                </span>{" "}
                pour l&apos;agriculture congolaise.
              </p>
            </div>
            <InfoTable headers={["Élément", "Détail"]} rows={banqueMondiale} />
          </div>

          {/* Condition d'obtention */}
          <div className="mb-24">
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-primary">
              Condition d&apos;obtention
            </h2>
            <p className="mb-10 max-w-4xl text-lg md:text-xl leading-relaxed text-foreground/70">
              Être une{" "}
              <strong className="font-semibold text-brand-700">
                coopérative performante
              </strong>{" "}
              qui démontre des résultats concrets (production, emplois créés,
              traçabilité).
            </p>
            <div className="overflow-hidden rounded-lg border border-foreground/10 shadow-xl shadow-brand-600/5">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse">
                  <thead>
                    <tr className="text-white">
                      <th className="bg-brand-900 px-8 py-5 text-center text-base md:text-lg uppercase font-bold">
                        Source
                      </th>
                      <th className="bg-brand-600 px-8 py-5 text-center text-base md:text-lg uppercase font-bold">
                        Montant
                      </th>
                      <th className="bg-brand-600 px-8 py-5 text-center text-base md:text-lg uppercase font-bold">
                        Nature
                      </th>
                      <th className="bg-brand-600 px-8 py-5 text-center text-base md:text-lg uppercase font-bold">
                        Remboursement
                      </th>
                      <th className="bg-brand-600 px-8 py-5 text-center text-base md:text-lg uppercase font-bold">
                        Disponible
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sources.map((row, i) => (
                      <tr
                        key={row.source}
                        className={
                          row.total
                            ? "bg-brand-700 text-white"
                            : i % 2 === 0
                              ? "bg-white"
                              : "bg-brand-50/60"
                        }
                      >
                        <td
                          className={`px-8 py-5 text-center text-sm md:text-lg ${
                            row.total
                              ? "font-black text-white"
                              : "font-semibold text-foreground"
                          }`}
                        >
                          {row.source}
                        </td>
                        <td
                          className={`px-8 py-5 text-center text-sm md:text-lg ${
                            row.total
                              ? "font-black text-accent"
                              : "font-bold text-brand-700"
                          }`}
                        >
                          {row.montant}
                        </td>
                        <td
                          className={`px-8 py-5 text-center text-sm md:text-lg ${
                            row.total
                              ? "font-semibold text-white"
                              : "text-foreground/70"
                          }`}
                        >
                          {row.nature}
                        </td>
                        <td
                          className={`px-8 py-5 text-center text-sm md:text-lg ${
                            row.total
                              ? "text-white/70"
                              : "text-foreground/70"
                          }`}
                        >
                          {row.remboursement}
                        </td>
                        <td
                          className={`px-8 py-5 text-center text-sm md:text-lg ${
                            row.total
                              ? "text-white/70"
                              : "text-foreground/70"
                          }`}
                        >
                          {row.disponible}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pourquoi pas d'argent liquide */}
          <div className="mb-24">
            <h2 className="mb-10 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-primary">
              Pourquoi l&apos;argent n&apos;est pas donné aux
              membres&nbsp;?
            </h2>

            {/* Mise en situation */}
            <div className="rounded-lg bg-cream p-2 md:p-8 lg:p-10">
              <h3 className="mb-6 text-xl md:text-2xl lg:text-3xl font-black text-foreground">
                Mise en situation
              </h3>
              <p className="mb-6 text-lg md:text-xl leading-relaxed text-foreground/75">
                Imaginez que vous gagniez{" "}
                <strong className="font-semibold text-brand-700">
                  1 000 000 USD
                </strong> à la loterie
                . Si on vous donne tout l&apos;argent d&apos;un coup, que
                risque-t-il d&apos;arriver&nbsp;?
              </p>
              <ul className="grid gap-2 sm:grid-cols-3">
                {loterie.map((item) => (
                  <li
                    key={item.text}
                    className="group relative h-full rounded-xl border border-foreground/10 bg-white p-8 md:p-10 hover:shadow-xl hover:shadow-brand-600/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-brand-600/20 to-brand-800/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-brand-100 group-hover:border-brand-600/30 shadow-sm text-brand-600">
                        <item.icon className="size-6 transition-colors" />
                      </div>
                      <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-foreground/80 group-hover:text-foreground transition-colors">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg leading-relaxed text-foreground/75">
                C&apos;est pareil pour une coopérative,{" "}
                <strong className="font-semibold text-brand-700">
                  1 000 000 USD, 
                </strong> c&apos;est beaucoup d&apos;argent.{" "}
                Si on le donne directement aux 30 membres, les risques sont&nbsp;:
              </p>
            </div>

            {/* Risques */}
            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {risques.map((risque) => (
                <div
                  key={risque.text}
                  className="group relative h-full rounded-xl border border-foreground/10 bg-white p-8 md:p-10 hover:shadow-xl hover:shadow-danger/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-danger/20 to-danger/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-danger/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-danger/10 group-hover:border-danger/30 shadow-sm text-danger">
                      <risque.icon className="size-6 transition-colors" />
                    </div>
                    <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-foreground/80 group-hover:text-foreground transition-colors">
                      {risque.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notre solution */}
          <div className="mb-24">
            <h2 className="mb-10 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-primary">
              Notre solution
            </h2>
            <InfoTable
              headers={["Mécanisme", "Comment ça marche ?"]}
              rows={solution.map((s) => [s.mecanisme, s.detail])}
            />
          </div>

          {/* En résumé */}
          <div className="overflow-hidden hidden rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 p-10 text-white shadow-2xl shadow-brand-600/20 sm:p-14">
            <p className="max-w-6xl text-lg md:text-xl leading-relaxed text-white/90">
              Vous ne recevez pas de l&apos;argent liquide. Vous recevez une{" "}
              <strong className="font-semibold text-white">
                exploitation agricole clé en main
              </strong>{" "}
              (tracteur, semences, irrigation, magasin, etc.). Tout est acheté,
              livré et installé par{" "}
              <strong className="font-semibold text-white">
                AGANO Services &amp; Consultances Sarl
              </strong>
              . La coopérative devient{" "}
              <strong className="font-semibold text-white">
                propriétaire de tous les actifs
              </strong>
              . C&apos;est ce système qui garantit le succès du programme et la
              confiance de nos partenaires (FOGEC, Banque Mondiale, etc.).
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/inscription"
                className="rounded-xl bg-accent px-8 py-4 text-base font-bold text-white shadow-xl shadow-black/20 transition-all hover:scale-105 hover:bg-orange-600"
              >
                Je veux lancer ma coopérative !
              </Link>
              <Link
                href="/comment-participer"
                className="rounded-xl border-2 border-white/70 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-brand-700"
              >
                Comment participer ?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Financement;