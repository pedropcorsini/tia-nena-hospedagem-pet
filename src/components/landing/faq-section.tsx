import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { faqs, links } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";

export function FaqSection() {
  return (
    <section id="faq" className="bg-cream py-20 sm:py-24" aria-labelledby="faq-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Duvidas comuns antes de deixar seu pet."
              description="Se algo importante nao estiver aqui, o melhor caminho e conversar pelo WhatsApp e contar a rotina do seu cao."
            />
            <Button asChild variant="outline" size="lg" className="mt-8 bg-white">
              <a href={links.askQuestions} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" aria-hidden />
                Falar com a Tia Nena
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.6rem] border border-ink/8 bg-white p-5 shadow-sm open:border-honey/55"
              >
                <summary className="cursor-pointer list-none font-heading text-lg font-black text-ink marker:hidden">
                  <span className="flex items-center justify-between gap-5">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-honey/18 text-ink transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-ink/66">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
