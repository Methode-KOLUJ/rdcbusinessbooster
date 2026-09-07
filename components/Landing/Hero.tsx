import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://res.cloudinary.com/dnpggdqyl/video/upload/v1788767215/Farm_rt9nly.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center mt-12 md:mt-20 lg:mt-28">

        <h1 className="uppercase mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white">
          RDC Agro Business 
          <span className="block text-accent text-5xl sm:text-6xl md:text-7xl">Booster 2026</span>
        </h1>

        <p className="hidden md:block mx-auto mb-10 max-w-4xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
          Un programme d&apos;appui et d&apos;accompagnement à
          l&apos;entrepreneuriat agricole collectif pour la jeunesse
          congolaise.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/inscription"
            className="rounded-xl bg-accent px-8 py-4 text-base font-bold text-white shadow-xl shadow-black/20 transition-all hover:scale-105 hover:bg-orange-600"
          >
            Je veux participer !
          </Link>
          <a
            href="/comment-participer"
            className="rounded-xl border-2 border-white/70 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-foreground"
          >
            Comment participer ?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
