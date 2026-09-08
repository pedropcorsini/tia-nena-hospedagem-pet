import { Container } from "@/components/ui/container";
import { carePoints } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";

export function CareSection() {
  return (
    <section id="cuidados" className="bg-cream py-20 sm:py-24" aria-labelledby="care-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Cuidado com critério"
              title="Não é canil. É uma rotina de casa pensada para o seu cão."
              description="Antes de confirmar a hospedagem, a Tia Nena entende comportamento, saúde, rotina e necessidades específicas."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {carePoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-ink/8 bg-white p-6 shadow-card transition-colors duration-200 hover:border-honey/45"
              >
                <h3 className="font-heading text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
