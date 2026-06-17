import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { links } from "@/data/landing";

export function FinalCta() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-label="Agendar avaliação">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-honey/25 blur-2xl" />
          <div className="absolute -bottom-20 left-12 h-56 w-56 rounded-full bg-honey/20 blur-2xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.22em] text-honey">
                Próximo passo
              </p>
              <h2 className="mt-3 font-heading text-3xl font-black tracking-tight sm:text-5xl">
                Antes de reservar, vamos entender se a hospedagem combina com o seu pet.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                Entre em contato via WhatsApp, conte a rotina do seu cão e combine uma avaliação com a Tia Nena.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" variant="ghost" className="border-white/18 text-white hover:bg-white/10">
                <a href={links.assessment} target="_blank" rel="noreferrer">
                  <WhatsappIcon className="h-5 w-5" />
                  Agendar avaliação
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
