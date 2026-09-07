"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Comment participer ?", href: "/comment-participer" },
  { label: "Financement", href: "/financement" },
  {label :"À propos de nous", href : "/#a-propos"},
  { label: "FAQ", href: "/#faq" },
  { label: "Postuler", href: "/inscription" },
];

const legalLinks = [
  { label: "Politique de confidentialité", href: "#" },
  { label: "Mentions légales", href: "#" },
  { label: "Conditions générales de vente", href: "#" },
];

const Partenaires = [
  {Nom : "ANAPI", profil : "https://res.cloudinary.com/dnpggdqyl/image/upload/v1788768027/ANAPI_zli8pn.jpg"},
  {Nom : "ANADEC", profil : "https://res.cloudinary.com/dnpggdqyl/image/upload/v1788768026/ANADEC_nmlkrm.jpg"},
  {Nom : "Banque Mondiale", profil : "https://res.cloudinary.com/dnpggdqyl/image/upload/v1788768027/BANQUE_rhbr5e.png"},
  {Nom : "FOGEC", profil : "https://res.cloudinary.com/dnpggdqyl/image/upload/v1788768027/FOGEC_rpmpvr.jpg"},
  {Nom : "FPI", profil : "https://res.cloudinary.com/dnpggdqyl/image/upload/v1788768027/FPI_juzrls.jpg"},
];

const Year = new Date().getFullYear()

const Icon = ({
  d,
  className = "size-5",
}: {
  d: string;
  className?: string;
}) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

const contactIcon = {
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
  mail: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  globe:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.04a15.7 15.7 0 0 0-.92-4.29A8 8 0 0 1 19.9 11zM12 4.04c.82 1.2 1.46 2.51 1.89 3.96h-3.78c.43-1.45 1.07-2.76 1.89-3.96zM4.1 11h3.04a15.7 15.7 0 0 0 .92 4.29A8 8 0 0 1 4.1 11zM12 19.96a12.3 12.3 0 0 1-1.89-3.96h3.78c-.43 1.45-1.07 2.76-1.89 3.96zM8.06 12c0-1.36.12-2.68.37-4h7.14c.25 1.32.37 2.64.37 4s-.12 2.68-.37 4H8.43a12.1 12.1 0 0 1-.37-4z",
};

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/243999005148",
    d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.71.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.35a9.4 9.4 0 0 1-1.44-5A9.41 9.41 0 0 1 12.05 2.1a9.41 9.41 0 0 1 9.4 9.4 9.41 9.41 0 0 1-9.4 9.4v.6M12.05.12A11.58 11.58 0 0 0 .33 11.7c0 2.04.53 4.03 1.55 5.79L.13 24l6.66-1.74a11.56 11.56 0 0 0 5.26 1.25 11.58 11.58 0 0 0 11.58-11.59A11.58 11.58 0 0 0 12.05.12z",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/aganoservices",
    d: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
  label: "Instagram",
  href: "https://www.instagram.com/agano_services/",
  d: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"
},
{
  label: "TikTok",
  href: "#",
  d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.2h-3.17v13.4a2.89 2.89 0 1 1-2.89-2.89c.3 0 .6.05.87.14V9.92a6.06 6.06 0 1 0 5.18 6V9.11a7.96 7.96 0 0 0 4.66 1.5V7.44a4.85 4.85 0 0 1-.88-.75z"
},
{
  label: "YouTube",
  href: "https://www.youtube.com/@AganoServicesConsultances",
  d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.8V8.2l6.5 3.8-6.5 3.8z"
} 
];

const Footer = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href.startsWith("/#") ? pathname === "/" : pathname === href;

  if(pathname === "/inscription" || pathname.startsWith('/admin')){
    return
  }

  return (
    <footer className="bg-ink text-white ">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="min-w-0">
            <div className="mb-4 inline-flex overflow-hidden rounded-xl bg-white">
              <Image
                src="/logos/Logo.png"
                alt="RDC Agro Business Booster"
                width={176}
                height={44}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-lg font-bold text-white">
              RDC AGRO BUSINESS BOOSTER 2026
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Un programme d&apos;appui créé par{" "}
              <span className="font-semibold text-white">
                AGANO Services &amp; Consultances SARL
              </span>
              .
            </p>
            <blockquote className="mt-6 border-l-4 border-accent pl-5 text-sm leading-relaxed text-white/75">
              « Faire de la jeunesse congolaise une force entrepreneuriale au
              service de la souveraineté alimentaire de la Nation. »
              <footer className="mt-2 not-italic font-semibold text-white">
                SEM Félix Antoine Tshisekedi, Président de la RDC
              </footer>
            </blockquote>
          </div>

          <div className="min-w-0">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Icon
                  d={contactIcon.phone}
                  className="size-5 shrink-0 text-white/60"
                />
                <span>
                  +243 801776888
                 
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  d={contactIcon.mail}
                  className="size-5 shrink-0 text-white/60"
                />
                <a
                  href="mailto:contact@rdcbusinessbooster.com"
                  className="hover:text-accent hover:underline"
                >
                  contact@rdcbusinessbooster.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  d={contactIcon.globe}
                  className="size-5 shrink-0 text-white/60"
                />
                <a
                  href="https://www.rdcbusinessbooster.com"
                  className="hover:text-accent hover:underline"
                >
                  www.rdcbusinessbooster.com
                </a>
              </li>
            </ul>

            <h4 className="mb-4 mt-8 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Suivez-nous
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-accent"
                >
                  <Icon d={social.d} className="size-5.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Liens rapides
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`transition-colors ${
                      isActive(link.href)
                        ? "font-semibold text-accent"
                        : "text-white/80 hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mb-4 mt-8 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Partenaires
            </h4>
            <ul className="grid grid-cols-5 gap-2">
              {Partenaires.map((Partn) => (
                <li key={Partn.Nom} className="flex flex-col items-center gap-1.5">
                  <span className="relative aspect-square w-full overflow-hidden rounded-lg bg-white p-1.5">
                    <Image
                      src={Partn.profil}
                      alt={Partn.Nom}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 20vw, 6rem"
                    />
                  </span>
                  <p className="text-center text-[11px] font-light leading-tight">
                    {Partn.Nom}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/50 lg:flex-row">
          <p>
            © {Year} AGANO Services &amp; Consultances SARL. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1.5">
            Développé avec <span className="text-pink-700">❤</span> par{" "}
            <span className="font-semibold text-white/80"><a href="https://kolujdev.tech/" target="_blank">KOLUJ DEV</a></span>
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
