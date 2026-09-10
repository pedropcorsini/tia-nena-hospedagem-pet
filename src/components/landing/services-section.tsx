import { Container } from "@/components/ui/container";
import { services } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-24" aria-labelledby="services-title">
      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title="Hospedagem, creche e cuidados especiais sem clima de canil."
          description="Cada serviço parte da mesma base: ambiente familiar, atenção individual e comunicação clara com o tutor."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-ink/8 bg-cream p-6 shadow-sm transition-colors duration-200 hover:border-honey/70"
            >
              <h3 className="font-heading text-xl font-black text-ink">{service.title}</h3>
              <p className="mt-3 leading-7 text-ink/66">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
