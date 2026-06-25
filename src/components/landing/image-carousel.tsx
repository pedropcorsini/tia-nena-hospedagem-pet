"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { gallery } from "@/data/landing";

const INTERVAL    = 5000;  // ms per slide — slow, readable
const TRANSITION  = 750;   // ms CSS transition
const SIZE        = 280;   // center image px (width & height)
const PEEK_OFFSET = 265;   // px offset left/right preview from center
const PEEK_SCALE  = 0.68;  // scale of side previews
const FAR_OFFSET  = 640;   // px offset for queued (off-screen) items

export function ImageCarousel() {
  const [active, setActive] = useState(0);
  const count = gallery.length;

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % count), INTERVAL);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="select-none" aria-label="Galeria de hóspedes">
      {/* track */}
      <div className="relative overflow-hidden" style={{ height: SIZE + 8 }}>
        {gallery.map((item, i) => {
          const r = ((i - active) % count + count) % count;
          const isCenter  = r === 0;
          const isRight   = r === 1;
          const isLeft    = r === count - 1;
          const isVisible = isCenter || isRight || isLeft;
          // items not yet shown queue on the right; already shown retire left
          const isFarRight = !isVisible && r <= Math.floor(count / 2);

          const offsetX = isCenter ? 0
            : isRight    ?  PEEK_OFFSET
            : isLeft     ? -PEEK_OFFSET
            : isFarRight ?  FAR_OFFSET
            :              -FAR_OFFSET;

          const scale   = isCenter ? 1 : isVisible ? PEEK_SCALE : 0.4;
          const opacity = isCenter ? 1 : isVisible ? 0.55 : 0;

          return (
            <div
              key={item.src}
              aria-hidden={!isCenter}
              style={{
                position:   "absolute",
                top:        "50%",
                left:       "50%",
                width:      SIZE,
                height:     SIZE,
                borderRadius: "1.5rem",
                overflow:   "hidden",
                transform:  `translate(calc(-50% + ${offsetX}px), -50%) scale(${scale})`,
                opacity,
                zIndex:     isCenter ? 20 : isVisible ? 10 : 0,
                transition: `transform ${TRANSITION}ms ease-in-out, opacity ${TRANSITION}ms ease-in-out`,
                boxShadow:  isCenter ? "0 20px 40px rgba(28,28,28,0.18)" : "none",
                pointerEvents: "none",
              }}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          );
        })}
      </div>

      {/* caption */}
      <p className="mt-4 text-center text-sm font-semibold text-ink/55">
        {gallery[active].caption}
      </p>

      {/* progress dots */}
      <div className="mt-3 flex justify-center gap-1.5" aria-hidden>
        {gallery.map((_, i) => (
          <span
            key={i}
            style={{
              display:         "inline-block",
              height:          6,
              width:           i === active ? 20 : 6,
              borderRadius:    999,
              backgroundColor: i === active ? "#E8A800" : "rgba(28,28,28,0.2)",
              transition:      "width 300ms ease, background-color 300ms ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
