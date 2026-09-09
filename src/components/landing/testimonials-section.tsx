"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ExpandableTestimonial } from "@/components/landing/expandable-testimonial";
import { testimonials } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";
import { useAutoScroll } from "@/hooks/use-auto-scroll";

const AUTOPLAY_SPEED_PX_PER_SEC = 28;
const loopedTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  const {
    scrollerRef,
    pauseAutoplay,
    scheduleResume,
    scrollByPage,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerEnter,
  } = useAutoScroll({ speedPxPerSec: AUTOPLAY_SPEED_PX_PER_SEC });

  return (
    <section id="depoimentos" className="bg-cream py-20 sm:py-24" aria-labelledby="testimonials-title">
      <Container>
        <SectionHeading
          eyebrow="Prova social"
          title="O tutor precisa confiar antes de viajar tranquilo."
          description="Quem deixa seu pet aos cuidados de outra pessoa precisa sentir segurança. Por isso, a experiência de outros tutores ajuda a mostrar como o cuidado acontece na prática."
        />

        <div
          ref={scrollerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerEnter={handlePointerEnter}
          onTouchStart={pauseAutoplay}
          onTouchEnd={scheduleResume}
          onTouchCancel={scheduleResume}
          className="mt-12 flex cursor-grab items-start gap-5 overflow-x-auto pb-4 active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loopedTestimonials.map((testimonial, index) => (
            <figure
              key={`${testimonial.author}-${index}`}
              className="w-[85%] shrink-0 rounded-[2rem] border border-ink/8 bg-white p-6 shadow-card lg:w-[calc((100%-2.5rem)/3)]"
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

        <div className="mt-8 hidden justify-center gap-4 lg:flex">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            aria-label="Depoimento anterior"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink/12 bg-white text-ink transition-colors duration-200 hover:border-honey/70 hover:bg-honey/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            aria-label="Próximo depoimento"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink/12 bg-white text-ink transition-colors duration-200 hover:border-honey/70 hover:bg-honey/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </Container>
    </section>
  );
}
