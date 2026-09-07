"use client";

import { useState } from "react";
import Link from "next/link";

const provinces = ["Kinshasa", "Haut-Katanga"];

type FormState = {
  nom: string;
  email: string;
  telephone: string;
  province: string;
  certifie: boolean;
};

const initialForm: FormState = {
  nom: "",
  email: "",
  telephone: "",
  province: "",
  certifie: false,
};

const inputClass =
  "w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20";

const labelClass =
  "mb-2 block text-sm md:text-base font-medium text-foreground";

const Inscription = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};

    if (!form.nom.trim()) next.nom = "Veuillez entrer votre nom complet.";
    if (!form.email.trim()) {
      next.email = "Veuillez entrer votre adresse email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Adresse email invalide.";
    }
    if (!form.telephone.trim()) {
      next.telephone = "Veuillez entrer votre numéro de téléphone.";
    } else if (!/^\+?[0-9 ]{8,15}$/.test(form.telephone.trim())) {
      next.telephone = "Numéro de téléphone invalide.";
    }
    if (!form.province) next.province = "Veuillez choisir votre province.";
    if (!form.certifie)
      next.certifie =
        "Vous devez certifier avoir pris connaissance des directives du programme.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* Page header */}
      <section
        className="relative overflow-hidden bg-cover bg-center text-white py-20 sm:py-28 md:py-32 lg:py-40"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnpggdqyl/image/upload/v1788767153/inscription_le35up.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/90 via-brand-800/80 to-brand-950/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="mb-6 md:mb-8 text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-accent">
            Rejoignez le programme
          </h1>
          <p className="max-w-4xl text-lg md:text-xl lg:text-2xl leading-relaxed text-white/85">
            L&apos;inscription est gratuite et se fait en 2 minutes. Vous
            rejoignez la base de données des futurs agri-entrepreneurs
            congolais.
          </p>
          <div className="mt-8 md:mt-10 lg:mt-12">
            <Link
              href={"#formulaire"}
              className="border bg-accent font-bold hover:bg-orange-600 border-gray-100 p-4 rounded-2xl"
            >
              Commencer !
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-24" id="formulaire">
        <div className="mx-auto max-w-3xl px-6">
          {submitted ? (
            <div className="rounded-xl border z-50 border-brand-600/20 bg-white p-2 text-center shadow-xl shadow-brand-600/5 sm:p-14">
              <span className="mx-auto mb-6 grid size-16 place-items-center rounded-full bg-brand-600 text-white">
                <svg
                  className="size-8"
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
              <h2 className="mb-6 text-2xl md:text-3xl uppercase font-black tracking-tight text-primary">
                Candidature validée !
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-foreground/70">
                Cher(e) <strong className="text-brand-700">{form.nom}</strong>,
                votre inscription a bien été reçue. Vous serez
                contacté par notre équipe pour la suite du programme. Consultez quotidiennement votre <strong> boîte mail</strong>.
              </p>
              <Link
                href="/"
                className="inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:scale-105 hover:bg-orange-600"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-lg border border-foreground/10 bg-white p-8 shadow-xl shadow-brand-600/5 sm:p-10"
            >
              <h2 className="mb-8 md:mb-10 text-2xl uppercase md:text-3xl lg:text-5xl text-center font-black tracking-tight text-blue-700">
                Inscription
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="nom" className={labelClass}>
                    Votre Nom
                  </label>
                  <input
                    id="nom"
                    type="text"
                    placeholder="Nom complet"
                    value={form.nom}
                    onChange={(e) => update("nom", e.target.value)}
                    className={inputClass}
                  />
                  {errors.nom && (
                    <p className="mt-1.5 text-sm font-medium text-danger">
                      {errors.nom}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Adresse email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Adresse mail correct"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm font-medium text-danger">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="telephone" className={labelClass}>
                    Numéro de téléphone
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    placeholder="+243 000 000 000"
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    className={inputClass}
                  />
                  {errors.telephone && (
                    <p className="mt-1.5 text-sm font-medium text-danger">
                      {errors.telephone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="province" className={labelClass}>
                    Province
                  </label>
                  <select
                    id="province"
                    value={form.province}
                    onChange={(e) => update("province", e.target.value)}
                    className={`${inputClass} ${
                      form.province ? "" : "text-foreground/80"
                    }`}
                  >
                    <option value="" disabled>
                      Choisissez votre province
                    </option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                  {errors.province && (
                    <p className="mt-1.5 text-sm font-medium text-danger">
                      {errors.province}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="certifie"
                    className="flex cursor-pointer items-start gap-3 text-foreground/80"
                  >
                    <input
                      id="certifie"
                      type="checkbox"
                      checked={form.certifie}
                      onChange={(e) => update("certifie", e.target.checked)}
                      className="mt-0.5 size-5 shrink-0 cursor-pointer accent-brand-600"
                    />
                    <span className="text-sm md:text-base leading-relaxed">
                      Je certifie avoir pris connaissance de toutes les
                      directives du programme{" "}
                      <span className="font-semibold">
                        RDC Agro Business Booster
                      </span>
                      .
                    </span>
                  </label>
                  {errors.certifie && (
                    <p className="mt-1.5 text-sm font-medium text-danger">
                      {errors.certifie}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 w-full rounded-xl uppercase bg-accent px-8 py-4 text-base md:text-lg font-bold text-white shadow-lg shadow-accent/30 transition-all hover:scale-[1.02] hover:bg-orange-600"
              >
                Envoyer
              </button>

              <p className="mt-4 text-center text-sm text-foreground/60">
                L&apos;inscription est totalement gratuite. Aucun frais de
                dossier n&apos;est demandé.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Inscription;
