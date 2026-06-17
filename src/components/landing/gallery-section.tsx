import { Camera, PawPrint } from "lucide-react";

import { Container } from "@/components/ui/container";
import { galleryPlaceholders } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";

export function GallerySection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="gallery-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Bastidores"
            title="Espaço preparado para receber fotos reais da rotina."
            description="Enquanto as fotos definitivas não entram, os placeholders mantêm a composição premium sem depender de imagens externas genéricas."
          />

          <div className="grid grid-cols-2 gap-4">
            {galleryPlaceholders.map((label, index) => (
              <article
                key={label}
                className="group min-h-48 overflow-hidden rounded-[2rem] border border-ink/8 bg-cream p-4 shadow-sm sm:min-h-64"
              >
                <div className="flex h-full flex-col justify-between rounded-[1.4rem] bg-gradient-to-br from-honey/24 via-white to-ink/5 p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-honey text-ink shadow-sm">
                    {index % 2 === 0 ? (
                      <PawPrint className="h-6 w-6" aria-hidden />
                    ) : (
                      <Camera className="h-6 w-6" aria-hidden />
                    )}
                  </span>
                  <div>
                    <p className="font-heading text-lg font-black text-ink">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-ink/52">Foto real entra aqui</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
