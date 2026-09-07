"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Accueil", href: "/" },
  { label: "À propos de nous", href: "/#a-propos" },
{ label: "Comment participer ?", href: "/comment-participer" },
  { label: "FAQ", href: "/#faq" },
  { label: "Financement", href: "/financement" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = links
      .map((link) => link.href.split("#")[1])
      .filter((id): id is string => !!id && !!document.getElementById(id));
    if (ids.length === 0) return;
    const onScroll = () => {
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const isActive = (link: { href: string }) => {
    if (link.href === "/")
      return pathname === "/" && activeSection === null;
    if (link.href.includes("#")) {
      const id = link.href.split("#")[1];
      return pathname === "/" && activeSection === id;
    }
    return pathname === link.href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-green-900/5"
          : "bg-transparent "
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className={`grid place-items-center overflow-hidden rounded-lg shadow-md transition-colors ${
              scrolled ? "bg-none" : "bg-white"
            }`}
          >
<Image
              src="/logos/Logo.png"
              alt="RDC Agro Business Booster"
              width={176}
              height={44}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm lg:text-base font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:rounded-full after:bg-accent after:transition-all after:duration-300 after:content-[''] ${
                  active
                    ? scrolled
                      ? "text-primary after:w-full"
                      : "text-white after:w-full"
                    : scrolled
                      ? "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
                      : "text-white/90 hover:text-white after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/inscription"
            className="rounded-xl bg-accent px-6 py-2.5 text-sm md:text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-orange-600 hover:shadow-primary/40"
          >
            Postuler
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className={`grid size-10 place-items-center rounded-xl transition-colors md:hidden ${
            scrolled
              ? "text-primary-dark hover:bg-primary/10"
              : "text-white hover:bg-white/10"
          }`}
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`mx-4 mb-4 space-y-1 rounded-2xl p-3 shadow-xl ${
              scrolled
                ? "bg-white"
                : "bg-white/95 backdrop-blur-md"
            }`}
          >
            {links.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/85 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/inscription"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl bg-accent px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-orange-600"
            >
              Postuler
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
