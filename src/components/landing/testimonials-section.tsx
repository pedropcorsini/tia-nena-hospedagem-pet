import { Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ExpandableTestimonial } from "@/components/landing/expandable-testimonial";
import { testimonials } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-cream py-20 sm:py-24" aria-labelledby="testimonials-title">
      <Container>
        <SectionHeading
          eyebrow="Prova social"
          title="O tutor precisa confiar antes de viajar tranquilo."
          description="Quem deixa seu pet aos cuidados de outra pessoa precisa sentir segurança. Por isso, a experiência de outros tutores ajuda a mostrar como o cuidado acontece na prática."
        />

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-wrap lg:justify-center lg:overflow-visible lg:pb-0 lg:snap-none [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="w-[85%] shrink-0 snap-start rounded-[2rem] border border-ink/8 bg-white p-6 shadow-card lg:w-[calc((100%-2.5rem)/3)]"
            >
              <div className="flex gap-1 text-honey" aria-label="Avaliação 5 estrelas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" aria-hidden />
                ))}
              </div>
              <ExpandableTestimonial quote={testimonial.quote} />
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
