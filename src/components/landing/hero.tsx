import Image from "next/image";
import { CheckCircle2, HeartPulse, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { links } from "@/data/landing";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-warm-radial pt-32 sm:pt-36 lg:pt-40"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-honey/60 to-transparent" />
      <Container className="grid gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-honey/40 bg-white/75 px-4 py-2 text-sm font-bold text-cocoa shadow-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-ink" aria-hidden />
            Hospedagem familiar, sem gaiolas e com acompanhamento diário.
          </div>

          <h1
            id="hero-title"
            className="mt-7 font-heading text-5xl font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl"
          >
            Seu pet cuidado como parte da casa.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
            A Tia Nena recebe cães em um ambiente acolhedor, com rotina individual,
            supervisão atenta e comunicação próxima com os tutores.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <a href={links.assessment} target="_blank" rel="noreferrer">
                <WhatsappIcon className="h-5 w-5" />
                Agendar avaliação
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-honey/25 blur-2xl" />
          <div className="absolute -right-5 bottom-10 h-36 w-36 rounded-full bg-ink/10 blur-2xl" />

          <div className="relative rounded-[2.5rem] border border-white/80 bg-white/82 p-5 shadow-soft backdrop-blur">
            <div className="rounded-[2rem] bg-gradient-to-br from-cream via-sand to-white p-6">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem] border border-ink/8 bg-cream">
                <Image
                  src="/images/nena.jpeg"
                  alt="Nena, hóspede da Tia Nena Hospedagem"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                <div className="absolute left-5 top-5 rounded-3xl bg-white/88 p-4 shadow-card backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-honey text-ink">
                      <HeartPulse className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-black text-ink">Cuidado senior</p>
                      <p className="text-xs font-semibold text-ink/55">ritmo respeitado</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 rounded-3xl bg-ink p-4 text-white shadow-card">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-honey" aria-hidden />
                    <div>
                      <p className="font-heading text-sm font-black">Atualização enviada</p>
                      <p className="text-xs text-white/65">foto + rotina do dia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
