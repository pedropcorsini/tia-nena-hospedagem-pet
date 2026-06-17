import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { Container } from "@/components/ui/container";
import { brand, contactItems, links, navItems } from "@/data/landing";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(180px,0.45fr)_minmax(260px,0.55fr)] lg:items-start">
          <div className="max-w-md">
            <Image
              src="/images/logo-tia-nena.png"
              alt="Tia Nena Hospedagem"
              width={138}
              height={64}
              className="h-14 w-auto"
            />
            <p className="mt-5 leading-7 text-ink/65">
              Hospedagem familiar para cães, com cuidado atento, rotina individual e comunicação próxima.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-sm font-bold text-ink/65 transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-4 lg:justify-self-end">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 text-sm font-bold text-ink/70">
                  <Icon className="h-5 w-5 text-ink" aria-hidden />
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
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-colors duration-200 hover:bg-honey/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
              >
                <WhatsappIcon className="h-5 w-5" />
              </a>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Tia Nena"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-colors duration-200 hover:bg-honey/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm font-semibold text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</p>
          <p>Desenvolvido por Pedro Passos Corsini.</p>
        </div>
      </Container>
    </footer>
  );
}
