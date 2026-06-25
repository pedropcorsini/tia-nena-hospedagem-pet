import Image from "next/image";

import { Container } from "@/components/ui/container";
import { gallery } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";

export function GallerySection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="gallery-title">
      <Container>
        <SectionHeading
          eyebrow="Bastidores"
          title="O dia a dia na hospedagem."
          description="Cada hóspede tem seu ritmo. Aqui estão alguns momentos da rotina real da Tia Nena."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-[2rem] border border-ink/8 bg-cream shadow-sm"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-semibold leading-5 text-ink/65">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
