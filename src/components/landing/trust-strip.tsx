import { Container } from "@/components/ui/container";
import { trustHighlights } from "@/data/landing";

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-10" aria-label="Diferenciais principais">
      <Container>
        <div className="grid gap-4 rounded-[2rem] border border-ink/8 bg-white p-4 shadow-soft md:grid-cols-3">
          {trustHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-[1.5rem] bg-cream p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-honey text-ink">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h2 className="font-heading text-lg font-black text-ink">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-ink/65">{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
