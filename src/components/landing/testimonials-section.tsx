import { Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { testimonials } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-cream py-20 sm:py-24" aria-labelledby="testimonials-title">
      <Container>
        <SectionHeading
          eyebrow="Prova social"
          title="O tutor precisa confiar antes de viajar tranquilo."
          description="A landing foi pensada para mostrar cuidado real: comunicacao, previsibilidade e acolhimento sem exageros comerciais."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="rounded-[2rem] border border-ink/8 bg-white p-6 shadow-card"
            >
              <div className="flex gap-1 text-honey" aria-label="Avaliacao 5 estrelas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-6 text-lg font-semibold leading-8 text-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-ink/8 pt-5">
                <p className="font-heading text-base font-black text-ink">{testimonial.author}</p>
                <p className="text-sm font-semibold text-ink/55">{testimonial.pet}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
