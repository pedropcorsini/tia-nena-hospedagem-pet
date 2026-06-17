import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { links, processSteps } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";

export function ProcessSection() {
  return (
    <section id="processo" className="bg-ink py-20 text-white sm:py-24" aria-labelledby="process-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Como funciona"
              title="A decisao acontece antes da reserva, nao depois."
              description="A avaliacao evita experiencias ruins. Se a rotina do pet combinar com a hospedagem familiar, a estadia segue com previsibilidade para o tutor e conforto para o cao."
            />
            <Button asChild size="lg" variant="primary" className="mt-8">
              <a href={links.scheduleVisit} target="_blank" rel="noreferrer">
                Comecar pelo WhatsApp
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </Button>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:grid-cols-[auto_1fr] sm:p-6"
                >
                  <div className="flex items-center gap-4 sm:block">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-honey text-ink">
                      <Icon className="h-7 w-7" aria-hidden />
                    </span>
                    <span className="font-heading text-sm font-black text-white/35 sm:mt-5 sm:block">
                      ETAPA 0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-black text-white">{step.title}</h3>
                    <p className="mt-2 leading-7 text-white/68">{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
