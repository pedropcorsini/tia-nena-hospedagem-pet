import { Container } from "@/components/ui/container";
import { services } from "@/data/landing";
import { SectionHeading } from "@/components/landing/section-heading";
import { DecorativeAnimal, type DecorativeAnimalProps } from "@/components/landing/decorative-animal";

const decorativeAnimals: (DecorativeAnimalProps & { id: string })[] = [
  {
    id: "nina",
    src: "/images/nina.png",
    alt: "Cadela hospedada na Tia Nena, em pé e à vontade",
    positionClassName: "left-0 bottom-0",
    objectPositionClassName: "object-left-bottom",
    layer: "front",
  },
  {
    id: "wendy",
    src: "/images/wendy.png",
    alt: "Cadela hospedada na Tia Nena, animada e brincalhona",
    positionClassName: "right-0 bottom-0",
    objectPositionClassName: "object-right-bottom",
    layer: "front",
    flip: true,
  },
  {
    id: "bulldog",
    src: "/images/bulldog-laco.png",
    alt: "Cão hospedado na Tia Nena, todo estiloso com laço",
    positionClassName: "right-10 -top-14 bottom-0",
    objectPositionClassName: "object-right-top",
    widthClassName: "w-[300px] xl:w-[360px]",
    layer: "front",
    rotateClassName: "-rotate-6",
  },
  {
    id: "bulldog-frisbee",
    src: "/images/bulldog-frisbee.png",
    alt: "Cão hospedado na Tia Nena, brincando com frisbee",
    positionClassName: "left-10 -top-14 bottom-0",
    objectPositionClassName: "object-left-top",
    widthClassName: "w-[300px] xl:w-[360px]",
    layer: "front",
    rotateClassName: "rotate-6",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative z-10 overflow-x-clip bg-white py-20 sm:py-24"
      aria-labelledby="services-title"
    >
      {decorativeAnimals.map(({ id, ...animal }) => (
        <DecorativeAnimal key={id} {...animal} />
      ))}

      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title="Hospedagem, creche e cuidados especiais sem clima de canil."
          description="Cada serviço parte da mesma base: ambiente familiar, atenção individual e comunicação clara com o tutor."
        />
      </Container>

      <div className="mt-12 px-5 sm:px-6 lg:pl-[260px] lg:pr-[300px] xl:pl-[320px] xl:pr-[360px]">
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
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
      </div>
    </section>
  );
}
