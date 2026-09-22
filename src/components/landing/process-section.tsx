import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
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
              tone="light"
              eyebrow="Como funciona"
              title="A decisão acontece antes da reserva, não depois."
              description="A avaliação evita experiências ruins. Se a rotina do pet combinar com a hospedagem familiar, a estadia seguirá com tranquilidade para o tutor e conforto para o cão."
            />
            <Button asChild size="lg" variant="whatsapp" className="mt-8">
              <a href={links.scheduleVisit} target="_blank" rel="noreferrer">
                <WhatsappIcon className="h-5 w-5" />
                Começar pelo WhatsApp
              </a>
            </Button>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-1.5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur sm:grid-cols-[auto_1fr] sm:gap-6 sm:rounded-[2rem] sm:p-6"
              >
                <span className="font-heading text-3xl font-black text-honey sm:text-5xl">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-black text-white sm:text-2xl">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-white/68 sm:mt-2 sm:text-base sm:leading-7">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
