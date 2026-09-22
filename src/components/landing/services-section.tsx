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
    positionClassName: "right-10 -top-14",
    heightClassName: "h-[420px] xl:h-[500px]",
    objectPositionClassName: "object-top",
    widthClassName: "w-[300px] xl:w-[360px]",
    layer: "front",
    rotateClassName: "-rotate-6",
  },
  {
    id: "bulldog-frisbee",
    src: "/images/bulldog-frisbee.png",
    alt: "Cão hospedado na Tia Nena, brincando com frisbee",
    positionClassName: "left-10 -top-14",
    heightClassName: "h-[420px] xl:h-[500px]",
    objectPositionClassName: "object-top",
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

      <Container className="xl:px-[440px] 2xl:max-w-[1800px]">
        <SectionHeading
          eyebrow="Serviços"
          title="Hospedagem, creche e cuidados especiais."
          description="Cada serviço parte da mesma base: ambiente familiar, atenção individual e comunicação clara com o tutor."
          maxWidthClassName="max-w-3xl 2xl:max-w-4xl"
          titleClassName="2xl:text-6xl"
        />
      </Container>

      <div className="mt-12 px-5 sm:px-6 xl:pl-[410px] xl:pr-[410px]">
        <div className="mx-auto grid max-w-4xl gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-ink/8 bg-cream p-4 shadow-sm transition-colors duration-200 hover:border-honey/70 sm:rounded-[2rem] sm:p-6"
            >
              <h3 className="font-heading text-lg font-black text-ink sm:text-xl">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/66 sm:mt-3 sm:text-base sm:leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
