import React from "react";
import { GraduationCap, Ship, Landmark, UserX } from "lucide-react";

const steps = [
  {
    title: "Inscription gratuite",
    description: "Première étape, sans frais, pour intégrer le programme.",
  },
  {
    title: "Création des coopératives légales",
    description: "Statuts conformes à l'Acte Uniforme OHADA.",
  },
  {
    title: "Obtention des financements",
    description: "Prêt garanti FOGEC et subvention Banque Mondiale.",
  },
  {
    title: "Réception des exploitations clé en main",
    description: "Matériel, intrants et équipements livrés.",
  },
];

const constats = [
  { text: "Plus de 80% des jeunes diplômés Congolais sont sans emploi", icon: GraduationCap },
  { text: "La RDC importe encore une grande partie de sa nourriture", icon: Ship },
  { text: "Les banques ne financent pas les individus, elles financent les entités légales", icon: Landmark },
  { text: "Un jeune seul ne peut pas obtenir un prêt bancaire individuellement", icon: UserX },
];

const comparatif = [
  {
    seul: "Aucun accès au crédit bancaire",
    coop: "Entité légale bancable",
  },
  {
    seul: "Pas de garantie pour le FOGEC",
    coop: "Éligible à la garantie FOGEC",
  },
  {
    seul: "Prix élevés sur le marché",
    coop: "Achats groupés = prix réduits",
  },
  {
    seul: "Difficulté à vendre",
    coop: "Commercialisation collective",
  },
  {
    seul: "Aucun soutien de l'État",
    coop: "Partenariat avec ANAPI, ANADEC, FOGEC, FPI",
  },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent">
    {children}
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

const About = () => {
  return (
    <section id="a-propos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-2">
          <img
            src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1788767166/about_luoiek.png"
            alt="À propos du programme RDC Agro Business Booster"
            className="w-full rounded-md object-cover shadow-xl shadow-brand-600/10"
          />
          <div>
            <h2 className="mb-6 text-3xl uppercase md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-foreground">
              À propos du programme
            </h2>
            <p className="text-left text-lg md:text-xl leading-relaxed text-foreground/70">
              Le programme RDC Agro Business Booster est créé par la société{" "}
              <span className="font-mono">
                <a href="anoservicesconsultances.com" target="_blank">AGANO Services &amp; Consultances Sarl</a>
              </span>
              . Ce programme transforme les jeunes Congolais en
              agri-entrepreneurs structurés, formés et financés. RDC Business
              Booster créera des coopératives constituées de 30 jeunes chacune,
              et une somme d&apos;un million de dollars <span className="font-mono"> (1.000.000 $)</span> sera
              consacrée à la matérialisation des projets agricoles.
            </p>
          </div>
        </div>

        {/* Qui est derrière */}
        <div className="mb-24">
          <div className="mb-10 max-w-7xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-primary mb-6 md:mb-8 lg:mb-10">
              Qui est derrière ce programme ?
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed text-foreground/70">
              <span className="font-mono"> RDC Agro Business Booster 2026</span> est un programme
              d&apos;appui créé et opéré par{" "}
              <span className="font-mono">AGANO Services &amp; Consultances Sarl</span>, une
              société de droit congolais spécialisée dans l&apos;accompagnement
              des entrepreneurs et la création d&apos;entités légales. AGANO ne
              se contente pas de former les participants : il les accompagne de
              A à Z, à travers ces étapes :
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group rounded-lg border border-foreground/20 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-xl hover:shadow-brand-600/10"
              >
                <span className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-accent group-hover:text-white">
                  <span className="text-xl font-black">{i + 1}</span>
                </span>
                <h4 className="mb-2 text-lg lg:text-xl font-black text-foreground">
                  {step.title}
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-foreground/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="mb-24 items-center text-center overflow-hidden rounded-lg bg-blue-700 p-10 text-white shadow-2xl shadow-brand-600/20 sm:p-14">
          <p className="max-w-6xl text-center text-lg sm:text-xl md:text-2xl font-extralight leading-snug">
            Notre mission est de faire de la jeunesse congolaise une force entrepreneuriale au
            service de la souveraineté alimentaire de la Nation, conformément à la vision du Chef de l&apos;État, SEM Félix Antoine
            Tshisekedi.
          </p>
        </div>

        {/* Pourquoi ce programme existe */}
        <div className="mb-24">
          <div className="mb-10 max-w-7xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6 md:mb-8 lg:mb-10 text-primary">
              Pourquoi ce programme existe-t-il ?
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/70">
              La République Démocratique du Congo possède{" "}
              <span className="font-mono text-brand-700">
                80 millions 
              </span> d&apos;hectares{" "}
              de terres arables, le plus grand potentiel agricole
              d&apos;Afrique. Pourtant le constat reste amer :
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {constats.map((constat) => (
              <div
                key={constat.text}
                className="group relative h-full rounded-xl border border-foreground/10 bg-white p-8 md:p-10 hover:shadow-xl hover:shadow-brand-600/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-brand-800/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-brand-100 group-hover:border-brand-600/30 shadow-sm text-brand-600">
                    <constat.icon className="size-6 transition-colors" />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-foreground/80 group-hover:text-foreground transition-colors">
                    {constat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modèle coopératif */}
        <div className="mb-24">
          <div className="mb-10 max-w-7xl">
            <h3 className="mb-6 md:mb-8 lg:mb-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-primary">
              Le modèle coopératif
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/70">
              Notre modèle coopératif repose sur un principe universel simple :
             <span className="font-mono"> « L&apos;union fait la force »</span>. Rassembler 30 candidats par
              équipe, créer leurs coopératives légales conformément à
              l&apos;Acte Uniforme OHADA, puis octroyer{" "}
              <span className="font-mono">1.000.000 $</span>{" "}
              par coopérative après formation et formalisation.
            </p>
          </div>

          <div className="grid gap-2 lg:grid-cols-3">
            <div className="group relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-lg p-10 text-center text-white shadow-xl shadow-accent/20 transition-all hover:-translate-y-3">
              <img
                src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1788767140/equipe_wkyllv.png"
                alt=""
                className="absolute inset-0 h-full w-full object-contain scale-[0.9] opacity-90"
              />
              <div className="absolute inset-0 bg-blue-700/98" />
              <span className="relative z-10 text-6xl font-black md:text-7xl lg:text-8xl">30</span>
              <p className="relative z-10 mt-2 font-semibold text-base tracking-widest md:text-lg lg:text-xl">
                Jeunes par coopérative
              </p>
            </div>
            <div className="group relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-lg p-10 text-center text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-3 hover:scale-[1.02]">
              <img
                src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1788767138/argent_y8zy18.png"
                alt=""
                className="absolute inset-0 h-full w-full object-contain scale-[0.9]"
              />
              <div className="absolute inset-0 bg-orange-600/98" />
              <span className="relative z-10 text-3xl font-black md:text-4xl lg:text-5xl">1.000.000 $</span>
              <p className="relative z-10 mt-2 font-semibold text-base tracking-widest md:text-lg lg:text-xl">
                Par coopérative financée
              </p>
            </div>
            <div className="group relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-lg border border-foreground/10 p-8 text-center transition-all hover:-translate-y-3">
              <img
                src="https://res.cloudinary.com/dnpggdqyl/image/upload/v1788767139/tracteur_zbm63h.png"
                alt=""
                className="absolute inset-0 h-full w-full object-contain scale-[0.9]"
              />
              <div className="absolute inset-0 bg-blue-700/98" />
              <span className="relative z-10 text-3xl font-black uppercase text-white md:text-4xl lg:text-5xl">
                Matériels
              </span>
              <p className="relative z-10 mt-2 text-base leading-relaxed text-white md:mt-4 md:text-lg">
                Achetés via <strong> Agano Services &amp; Consultances</strong>, la société derrière le programme <strong> RDC Agro Business Booster 2026</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Pourquoi une coopérative ? */}
        <div>
          <div className="mx-auto mb-10 max-w-6xl text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-foreground mb-6 md:mb-8 lg:mb-10">
              Pourquoi une coopérative ?
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/70">
              La coopérative est la clé qui ouvre les portes du financement.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-foreground/10 shadow-xl shadow-brand-600/5">
            <div className="overflow-x-auto">
<table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr className="text-white">
                    <th className="bg-ink px-8 py-5 text-center text-base md:text-lg lg:text-xl uppercase font-bold">
                      Seul (individu)
                    </th>
                    <th className="bg-brand-600 px-8 py-5 text-center text-base md:text-lg lg:text-xl uppercase font-bold">
                      En groupe (coopérative)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparatif.map((row, i) => (
                    <tr
                      key={row.seul}
                      className={i % 2 === 0 ? "bg-white" : "bg-brand-50/60"}
                    >
                      <td className="px-8 py-5 text-left text-sm md:text-lg leading-relaxed text-foreground/60">
                        <span className="inline-flex items-center gap-3">
                          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-danger text-white">
                            <svg
                              className="size-3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                          {row.seul}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-left">
                        <span className="inline-flex items-center gap-3 text-sm md:text-lg font-semibold leading-relaxed text-foreground">
                          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                            <svg
                              className="size-3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          {row.coop}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
