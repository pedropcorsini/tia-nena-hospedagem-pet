import { Container } from "@/components/ui/container";
import { services } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-24" aria-labelledby="services-title">
      <Container>
        <SectionHeading
          eyebrow="Servicos"
          title="Hospedagem, creche e cuidados especiais sem clima de canil."
          description="Cada servico parte da mesma base: ambiente familiar, atencao individual e comunicacao clara com o tutor."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="relative overflow-hidden rounded-[2rem] border border-ink/8 bg-cream p-6 shadow-sm transition-colors duration-200 hover:border-tomato/30"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-honey/18" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-tomato shadow-sm">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="relative mt-8 font-heading text-xl font-black text-ink">
                  {service.title}
                </h3>
                <p className="relative mt-3 leading-7 text-ink/66">{service.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
