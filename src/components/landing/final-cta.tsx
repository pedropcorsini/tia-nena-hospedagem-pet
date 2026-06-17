import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { links } from "@/data/landing";

export function FinalCta() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-label="Agendar avaliacao">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-honey/25 blur-2xl" />
          <div className="absolute -bottom-20 left-12 h-56 w-56 rounded-full bg-tomato/25 blur-2xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.22em] text-honey">
                Proximo passo
              </p>
              <h2 className="mt-3 font-heading text-3xl font-black tracking-tight sm:text-5xl">
                Antes de reservar, vamos entender se a hospedagem combina com o seu pet.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                Chame no WhatsApp, conte a rotina do seu cao e combine uma avaliacao com a Tia Nena.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" variant="primary">
                <a href={links.assessment} target="_blank" rel="noreferrer">
                  Agendar avaliacao
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="border-white/18 text-white hover:bg-white/10">
                <a href={links.askQuestions} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  Tirar duvidas
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
