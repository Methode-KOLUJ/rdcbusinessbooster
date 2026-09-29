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
  "peer w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-foreground outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20";

const labelClass =
  "absolute left-3 -top-2.5 bg-white px-1 text-xs md:text-sm font-medium text-foreground/80 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/50 peer-focus:-top-2.5 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-brand-600 cursor-text pointer-events-none";

const Inscription = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      setLoading(true);
      try {
        const res = await fetch("/api/inscription", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        
        if (res.ok) {
          setSubmitted(true);
        } else {
          console.error("Erreur lors de l'inscription");
          // You could handle server errors here
        }
      } catch (error) {
        console.error("Erreur réseau:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {submitted && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-600/80 p-4 backdrop-blur-sm transition-all">
          <div className="relative w-full max-w-lg rounded-xl border border-white/20 bg-white p-8 text-center shadow-2xl sm:p-12 animate-in zoom-in-95 fade-in duration-300">
            <span className="mx-auto mb-6 grid size-20 place-items-center rounded-full bg-primary text-white shadow-lg shadow-green-500/30">
              <svg
                className="size-10"
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
            <h2 className="mb-4 text-2xl md:text-3xl uppercase font-mono tracking-tight text-accent">
              Candidature reçue !
            </h2>
            <p className="mx-auto mb-8 text-base md:text-lg leading-relaxed text-gray-600">
              Cher(e) <span className="text-gray-600">{form.nom}</span>,
              votre inscription a bien été reçue. Vous serez
              contacté par notre équipe pour la suite du programme. Consultez votre boîte mail pour lire la confirmation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="https://mail.google.com"
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm md:text-base font-bold text-white shadow-lg shadow-accent/30 transition-all hover:scale-105 hover:bg-orange-600"
              >
                Mon mail
              </Link>
              <button
                onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                }}
                type="button"
                className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark cursor-pointer px-8 py-3.5 text-sm md:text-base font-bold text-gray-50 transition-all hover:bg-gray-200"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Page header */}
      <section
        className="relative overflow-hidden bg-cover bg-center text-white py-20 sm:py-28 md:py-32 lg:py-42"
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

<section
  className="relative overflow-hidden py-24"
  id="formulaire"
>
  {/* Background + Parallax + Overlay */}
  <div className="absolute inset-0 z-0">
    {/* Image Parallax */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dnpggdqyl/image/upload/v1788767153/inscription_le35up.jpg')",
      }}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gray-100/85" />
  </div>

  {/* Contenu */}
  <div className="relative z-10 mx-auto max-w-3xl px-6">

            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-lg border border-foreground/10 bg-white p-8 shadow-xl shadow-brand-600/5 sm:p-10"
            >

              <div className="space-y-6">
                <div className="relative">
                  <input
                    id="nom"
                    type="text"
                    value={form.nom}
                    onChange={(e) => update("nom", e.target.value)}
                    className={inputClass}
                    placeholder=" "
                  />
                  <label htmlFor="nom" className={labelClass}>
                    Nom complet
                  </label>
                  {errors.nom && (
                    <p className="mt-1.5 text-sm font-medium text-danger">
                      {errors.nom}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                    placeholder=" "
                  />
                  <label htmlFor="email" className={labelClass}>
                    Adresse email
                  </label>
                  {errors.email && (
                    <p className="mt-1.5 text-sm font-medium text-danger">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="telephone"
                    type="tel"
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    className={inputClass}
                    placeholder=" "
                  />
                  <label htmlFor="telephone" className={labelClass}>
                    Numéro WhatSapp
                  </label>
                  {errors.telephone && (
                    <p className="mt-1.5 text-sm font-medium text-danger">
                      {errors.telephone}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <select
                    id="province"
                    value={form.province}
                    onChange={(e) => update("province", e.target.value)}
                    className={`${inputClass} ${
                      form.province ? "" : "text-transparent"
                    }`}
                  >
                    <option value="" disabled className="text-foreground hidden">
                    </option>
                    {provinces.map((province) => (
                      <option key={province} value={province} className="text-foreground">
                        {province}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="province" className={`absolute left-3 bg-white px-1 font-medium transition-all pointer-events-none ${form.province ? '-top-2.5 text-xs md:text-sm text-foreground/80' : 'top-3 text-base text-foreground/50'} peer-focus:-top-2.5 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-brand-600`}>
                    Province
                  </label>
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
                    <span className="text-xs md:text-sm lg:text-base leading-relaxed">
                      Je certifie avoir pris connaissance de toutes les
                      directives du programme{" "}
                      <span className="font-mono">
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
                disabled={loading}
                className="mt-10 w-full rounded-xl uppercase bg-accent px-8 py-4 text-base md:text-lg font-bold text-white shadow-lg shadow-accent/30 transition-all hover:scale-[1.02] hover:bg-orange-600 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
        </div>
      </section>
    </>
  );
};

export default Inscription;
