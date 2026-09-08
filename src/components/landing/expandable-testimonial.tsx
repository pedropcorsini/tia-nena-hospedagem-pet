"use client";

import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ExpandableTestimonialProps = {
  quote: string;
};

export function ExpandableTestimonial({ quote }: ExpandableTestimonialProps) {
  const [expanded, setExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLong, setIsLong] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState(0);
  const [fullHeight, setFullHeight] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);
  const quoteId = useId();
  const normalized = quote.replace(/\s+/g, " ").trim();

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    el.classList.add("line-clamp-4");
    const collapsed = el.offsetHeight;
    const full = el.scrollHeight;

    setFullHeight(full);
    setCollapsedHeight(collapsed);
    setIsLong(full > collapsed + 1);
  }, [normalized]);

  const showClamp = isLong && !expanded && !isAnimating;

  function handleToggle() {
    setIsAnimating(true);
    setExpanded((current) => !current);
  }

  return (
    <div>
      <blockquote
        id={quoteId}
        className="mt-6 text-lg font-semibold leading-8 text-ink"
      >
        <p
          ref={textRef}
          className={cn(
            "whitespace-pre-line",
            isLong && "overflow-hidden transition-[max-height] duration-200 ease-in-out",
            showClamp && "line-clamp-4",
          )}
          style={isLong ? { maxHeight: `${expanded ? fullHeight : collapsedHeight}px` } : undefined}
          onTransitionEnd={() => setIsAnimating(false)}
        >
          “{normalized}”
        </p>
      </blockquote>

      {isLong ? (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={quoteId}
          className="mt-4 rounded-full border border-honey/55 bg-honey/12 px-4 py-2 font-heading text-sm font-extrabold text-ink transition-colors duration-200 hover:bg-honey/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={handleToggle}
        >
          {expanded ? "Mostrar menos" : "Ler mais"}
        </button>
      ) : null}
    </div>
  );
}
