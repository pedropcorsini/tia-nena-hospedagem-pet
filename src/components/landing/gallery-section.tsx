"use client";

import Image from "next/image";

import { Container } from "@/components/ui/container";
import { gallery } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";
import { useAutoScroll } from "@/hooks/use-auto-scroll";

const AUTOPLAY_SPEED_PX_PER_SEC = 28;
const REPEAT_COUNT = 2;

const rows = [1, 2, 3].map((row) => {
  const items = gallery.filter((item) => item.row === row);
  return Array.from({ length: REPEAT_COUNT }).flatMap(() => items);
});

function GalleryRow({ items, direction }: { items: typeof gallery; direction: 1 | -1 }) {
  const { scrollerRef, pauseAutoplay, scheduleResume, handlePointerDown, handlePointerMove, handlePointerUp } =
    useAutoScroll({ speedPxPerSec: AUTOPLAY_SPEED_PX_PER_SEC, direction });

  return (
    <div className="mx-auto w-full max-w-[728px] px-5 sm:max-w-[864px] sm:px-6 lg:max-w-[1020px] lg:px-8">
      <div
        ref={scrollerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onMouseEnter={pauseAutoplay}
        onMouseLeave={scheduleResume}
        onTouchStart={pauseAutoplay}
        onTouchEnd={scheduleResume}
        onTouchCancel={scheduleResume}
        className="flex cursor-grab items-start gap-4 overflow-x-auto active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] lg:gap-5 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className="w-40 shrink-0 overflow-hidden rounded-[2rem] border border-ink/8 bg-cream shadow-sm sm:w-48 lg:w-56"
          >
            <div className="relative aspect-square">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
              />
            </div>
            <figcaption className="px-4 py-3 text-center text-sm font-bold leading-5 text-ink/65">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function GallerySection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="gallery-title">
      <Container>
        <SectionHeading
          eyebrow="Bastidores"
          title="O dia a dia na hospedagem."
          description="Cada hóspede tem seu ritmo. Aqui estão alguns momentos da rotina real da Tia Nena."
        />
      </Container>

      <div className="mt-12 flex flex-col gap-4 lg:gap-5">
        {rows.map((items, index) => (
          <GalleryRow key={index} items={items} direction={index % 2 === 0 ? 1 : -1} />
        ))}
      </div>
    </section>
  );
}
