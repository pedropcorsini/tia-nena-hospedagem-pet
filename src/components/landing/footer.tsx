import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

import { Container } from "@/components/ui/container";
import { brand, contactItems, links, navItems } from "@/data/landing";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto_auto]">
          <div className="max-w-sm">
            <Image
              src="/images/logo-tia-nena.png"
              alt="Tia Nena Hospedagem"
              width={138}
              height={64}
              className="h-14 w-auto"
            />
            <p className="mt-5 leading-7 text-ink/65">
              Hospedagem familiar para caes com cuidado atento, rotina individual e comunicacao proxima.
            </p>
          </div>

          <nav aria-label="Links do rodape" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-sm font-bold text-ink/65 transition-colors duration-200 hover:text-tomato"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 text-sm font-bold text-ink/70">
                  <Icon className="h-5 w-5 text-tomato" aria-hidden />
                  {item.label}
                </div>
              );
            })}
            <div className="flex gap-3 pt-2">
              <a
                href={links.askQuestions}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Tia Nena"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-tomato shadow-sm transition-colors duration-200 hover:bg-honey/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Tia Nena"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-tomato shadow-sm transition-colors duration-200 hover:bg-honey/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm font-semibold text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</p>
          <p>Landing page focada em acolhimento, confianca e conversao.</p>
        </div>
      </Container>
    </footer>
  );
}
