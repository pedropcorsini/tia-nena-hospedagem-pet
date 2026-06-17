import { CareSection } from "@/components/landing/care-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { GallerySection } from "@/components/landing/gallery-section";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { ProcessSection } from "@/components/landing/process-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustStrip } from "@/components/landing/trust-strip";
import { brand } from "@/data/landing";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    description:
      "Hospedagem familiar para caes, sem gaiolas, com rotina individual e atualizacoes diarias.",
    telephone: brand.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sao Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: "Sao Paulo",
    sameAs: [brand.instagram],
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <CareSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <GallerySection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
