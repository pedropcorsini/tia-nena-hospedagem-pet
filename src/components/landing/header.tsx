"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { links, navItems } from "@/data/landing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur-xl transition-shadow duration-200",
        scrolled && "shadow-[0_10px_28px_rgba(28,28,28,0.08)]",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-5">
          <Link
            href="#inicio"
            className="flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
            aria-label="Tia Nena Hospedagem, ir para o início"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/logo-tia-nena.png"
              alt="Tia Nena Hospedagem"
              width={132}
              height={62}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 font-heading text-sm font-bold text-ink/72 transition-colors duration-200 hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="accent" size="md">
              <a href={links.scheduleVisit} target="_blank" rel="noreferrer">
                <WhatsappIcon className="h-4 w-4" />
                Agendar visita
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition-colors duration-200 hover:bg-honey/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden border-t border-ink/10 bg-cream transition-[grid-template-rows] duration-200 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <Container className="py-5">
            <nav className="flex flex-col gap-2" aria-label="Menu mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl bg-white px-4 py-3 font-heading font-bold text-ink shadow-sm transition-colors duration-200 hover:bg-honey/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="accent" size="lg" className="mt-2 w-full">
                <a href={links.scheduleVisit} target="_blank" rel="noreferrer">
                  <WhatsappIcon className="h-5 w-5" />
                  Agendar visita
                </a>
              </Button>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
