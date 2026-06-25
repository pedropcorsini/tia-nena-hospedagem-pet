import type { Metadata } from "next";
import { Nunito_Sans, Varela_Round } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tia-nena-hospedagem-pet.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tia Nena Hospedagem Pet | Hospedagem familiar para cães",
    template: "%s | Tia Nena Hospedagem Pet",
  },
  description:
    "Hospedagem familiar para cães em São Paulo, sem baias, com rotina individual, atualizações diárias e cuidado especial para idosos.",
  keywords: [
    "hospedagem para cães",
    "hotel para cachorro",
    "creche para cachorro",
    "hospedagem familiar pet",
    "Tia Nena Hospedagem",
  ],
  openGraph: {
    title: "Tia Nena Hospedagem Pet",
    description:
      "Seu pet cuidado como parte da casa: hospedagem familiar, sem baias e com acompanhamento diário.",
    url: siteUrl,
    siteName: "Tia Nena Hospedagem Pet",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tia Nena Hospedagem Pet",
    description: "Hospedagem familiar para cães com cuidado atento e rotina individual.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${varelaRound.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
