import Image from "next/image";
import { Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { brand } from "@/data/landing";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-ink pt-28 sm:pt-32"
      aria-labelledby="hero-title"
    >
      <Image
        src="/images/hero-fundo.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/40 to-ink/80" />

      <Container className="relative z-10 flex flex-col items-center py-16 text-center sm:py-20">
        <h1
          id="hero-title"
          className="max-w-4xl font-heading text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl"
        >
          Seu pet cuidado como parte da família.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
          A Tia Nena recebe cães em um ambiente acolhedor, com rotina individual,
          supervisão durante 24 horas e comunicação próxima com os tutores.
        </p>

        <div className="mt-9 flex justify-center">
          <Button
            asChild
            size="lg"
            variant="instagram"
            className="border-white/40 bg-white/15 text-white shadow-none backdrop-blur-md hover:border-white hover:bg-white/25"
          >
            <a href={brand.instagram} target="_blank" rel="noreferrer">
              <Instagram className="h-5 w-5" aria-hidden />
              Instagram
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
