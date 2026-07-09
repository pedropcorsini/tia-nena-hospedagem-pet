"use client";

import { useId, useState } from "react";

function getPreview(quote: string, maxLength: number) {
  const normalized = quote.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const clipped = normalized.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(" ");
  const safeClip = lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped;

  return `${safeClip.trim()}...`;
}

type ExpandableTestimonialProps = {
  quote: string;
  previewLength?: number;
};

export function ExpandableTestimonial({
  quote,
  previewLength = 220,
}: ExpandableTestimonialProps) {
  const [expanded, setExpanded] = useState(false);
  const quoteId = useId();
  const isLong = quote.replace(/\s+/g, " ").trim().length > previewLength;
  const visibleQuote = isLong && !expanded ? getPreview(quote, previewLength) : quote;

  return (
    <div>
      <blockquote
        id={quoteId}
        className="mt-6 text-lg font-semibold leading-8 text-ink"
      >
        <span aria-hidden="true">“</span>
        <span className="whitespace-pre-line">{visibleQuote}</span>
        <span aria-hidden="true">”</span>
      </blockquote>

      {isLong ? (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={quoteId}
          className="mt-4 rounded-full border border-honey/55 bg-honey/12 px-4 py-2 font-heading text-sm font-extrabold text-ink transition-colors duration-200 hover:bg-honey/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Mostrar menos" : "Ler mais"}
        </button>
      ) : null}
    </div>
  );
}
