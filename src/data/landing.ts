import {
  Activity,
  Bone,
  Camera,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Dog,
  HeartHandshake,
  HeartPulse,
  Home,
  MapPin,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { whatsappUrl } from "@/lib/utils";

export const brand = {
  name: "Tia Nena Hospedagem",
  phone: "(11) 95903-1252",
  whatsapp: "5511959031252",
  city: "Sao Paulo, SP",
  instagram: "https://www.instagram.com/",
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cuidados", href: "#cuidados" },
  { label: "Servicos", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export const links = {
  scheduleVisit: whatsappUrl(
    "Ola! Gostaria de agendar uma visita a Tia Nena Hospedagem.",
  ),
  assessment: whatsappUrl(
    "Ola! Gostaria de agendar uma avaliacao para hospedagem do meu pet na Tia Nena.",
  ),
  askQuestions: whatsappUrl(
    "Ola! Gostaria de saber mais sobre a hospedagem da Tia Nena.",
  ),
};

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const trustHighlights: IconCard[] = [
  {
    title: "Casa de verdade",
    description: "Rotina acolhedora, sem baias, canis ou isolamento desnecessario.",
    icon: Home,
  },
  {
    title: "Atualizacao diaria",
    description: "Fotos, videos e mensagens para voce acompanhar a estadia.",
    icon: Camera,
  },
  {
    title: "Avaliacao antes da hospedagem",
    description: "Conversa cuidadosa para entender temperamento, saude e rotina.",
    icon: CalendarCheck,
  },
];

export const carePoints: IconCard[] = [
  {
    title: "Sem gaiolas",
    description: "Seu cao circula em ambiente familiar e supervisionado, com limites claros e seguros.",
    icon: ShieldCheck,
  },
  {
    title: "Rotina individual",
    description: "Alimentacao, descanso, passeio e brincadeira respeitam o jeito de cada hospede.",
    icon: Clock3,
  },
  {
    title: "Carinho com criterio",
    description: "Afeto, observacao e comunicacao constante, sem promessas exageradas.",
    icon: HeartHandshake,
  },
  {
    title: "Apoio veterinario",
    description: "Rede de confianca para orientar situacoes de cuidado quando necessario.",
    icon: Stethoscope,
  },
];

export const services: IconCard[] = [
  {
    title: "Hospedagem familiar",
    description: "Estadia em ambiente de casa para viagens, compromissos ou periodos de ausencia.",
    icon: Home,
  },
  {
    title: "Creche por periodo",
    description: "Uma rotina mais ativa e acompanhada para caes que precisam de companhia durante o dia.",
    icon: Dog,
  },
  {
    title: "Cuidados para idosos",
    description: "Acolhimento calmo, observacao atenta e respeito ao ritmo de caes senior.",
    icon: HeartPulse,
  },
  {
    title: "Pos-cirurgico leve",
    description: "Suporte para tutores que precisam de acompanhamento e ambiente tranquilo apos orientacao veterinaria.",
    icon: Activity,
  },
  {
    title: "Passeios e estimulo",
    description: "Atividades proporcionais a energia, idade e adaptacao do pet.",
    icon: PawPrint,
  },
  {
    title: "Socializacao assistida",
    description: "Contato gradual e supervisionado, sem forcar interacoes que gerem estresse.",
    icon: Bone,
  },
];

export const processSteps = [
  {
    title: "Conversa inicial",
    description: "Voce conta a rotina, saude, habitos, restricoes e datas desejadas.",
    icon: MessageCircle,
  },
  {
    title: "Visita e avaliacao",
    description: "A Tia Nena conhece o pet e valida se a hospedagem e uma boa experiencia para todos.",
    icon: CheckCircle2,
  },
  {
    title: "Estadia acompanhada",
    description: "Durante a hospedagem, voce recebe atualizacoes e o pet segue uma rotina tranquila.",
    icon: Sparkles,
  },
];

export const testimonials = [
  {
    quote:
      "A diferenca foi perceber que meu cachorro nao ficou apenas hospedado. Ele foi cuidado como parte da casa.",
    author: "Mariana S.",
    pet: "tutora do Bento",
  },
  {
    quote:
      "Receber fotos todos os dias me deixou tranquila. A adaptacao foi respeitosa e sem correria.",
    author: "Renata M.",
    pet: "tutora da Lola",
  },
  {
    quote:
      "Meu cao e idoso e precisa de mais paciencia. A Tia Nena entendeu exatamente o que ele precisava.",
    author: "Carlos A.",
    pet: "tutor do Theo",
  },
];

export const galleryPlaceholders = [
  "Soneca depois do passeio",
  "Rotina com supervisao",
  "Espaco livre de gaiolas",
  "Atualizacoes para tutores",
];

export const faqs = [
  {
    question: "A hospedagem aceita qualquer cao?",
    answer:
      "A hospedagem depende de uma avaliacao previa. O objetivo e garantir seguranca, adaptacao e bem-estar para o seu pet e para os outros hospedes.",
  },
  {
    question: "Meu cachorro fica em gaiola?",
    answer:
      "Nao. A proposta da Tia Nena e hospedagem familiar, em ambiente de casa, com supervisao e rotina organizada.",
  },
  {
    question: "Vocês mandam fotos e videos?",
    answer:
      "Sim. Durante a estadia, os tutores recebem atualizacoes para acompanhar como o pet esta se adaptando.",
  },
  {
    question: "Caes idosos podem se hospedar?",
    answer:
      "Sim, desde que a rotina e as necessidades sejam avaliadas antes. Caes idosos recebem cuidado mais calmo e observacao atenta.",
  },
];

export const contactItems = [
  { label: brand.phone, icon: MessageCircle },
  { label: brand.city, icon: MapPin },
];
