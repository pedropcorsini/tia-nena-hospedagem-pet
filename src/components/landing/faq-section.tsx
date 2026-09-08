"use client";

import { useEffect, useId, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { faqs } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

export function FaqSection() {
  return (
    <section id="faq" className="bg-cream py-20 sm:py-24" aria-labelledby="faq-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Dúvidas comuns antes de deixar seu pet."
              description="Se algo importante não estiver aqui, o melhor caminho é conversar pelo WhatsApp e contar a rotina do seu cão."
            />
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const contentId = useId();

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div
      className={cn(
        "rounded-[1.6rem] border border-ink/8 bg-white p-5 shadow-sm",
        open && "border-honey/55",
      )}
    >
      <button
        type="button"
        className="flex w-full list-none items-center justify-between gap-5 text-left font-heading text-lg font-black text-ink"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((current) => !current)}
      >
        {question}
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-honey/18 text-ink transition-transform duration-200",
            open && "rotate-45",
          )}
        >
          +
        </span>
      </button>
      <div
        id={contentId}
        className="overflow-hidden transition-[max-height] duration-200 ease-in-out"
        style={{ maxHeight: open ? `${contentHeight}px` : "0px" }}
      >
        <div ref={contentRef} className="pt-4">
          <p className="leading-7 text-ink/66">{answer}</p>
        </div>
      </div>
    </div>
  );
}
