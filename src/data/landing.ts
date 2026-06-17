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
  Phone,
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
  city: "São Paulo, SP",
  instagram: "https://www.instagram.com/",
};

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Cuidados", href: "#cuidados" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export const links = {
  scheduleVisit: whatsappUrl(
    "Olá! Gostaria de agendar uma visita à Tia Nena Hospedagem.",
  ),
  assessment: whatsappUrl(
    "Olá! Gostaria de agendar uma avaliação para a hospedagem do meu pet na Tia Nena.",
  ),
  askQuestions: whatsappUrl(
    "Olá! Gostaria de saber mais sobre a hospedagem da Tia Nena.",
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
    description: "Rotina acolhedora, sem baias, canis ou isolamento desnecessário.",
    icon: Home,
  },
  {
    title: "Atualização diária",
    description: "Fotos, vídeos e mensagens para você acompanhar a estadia.",
    icon: Camera,
  },
  {
    title: "Avaliação antes da hospedagem",
    description: "Conversa cuidadosa para entender temperamento, saúde e rotina.",
    icon: CalendarCheck,
  },
];

export const carePoints: IconCard[] = [
  {
    title: "Sem gaiolas",
    description: "Seu cão circula em ambiente familiar e supervisionado, com limites claros e seguros.",
    icon: ShieldCheck,
  },
  {
    title: "Rotina individual",
    description: "Alimentação, descanso, passeio e brincadeira respeitam o jeito de cada hóspede.",
    icon: Clock3,
  },
  {
    title: "Carinho com critério",
    description: "Afeto, observação e comunicação constante, sem promessas exageradas.",
    icon: HeartHandshake,
  },
  {
    title: "Apoio veterinário",
    description: "Rede de confiança para orientar situações de cuidado quando necessário.",
    icon: Stethoscope,
  },
];

export const services: IconCard[] = [
  {
    title: "Hospedagem familiar",
    description: "Estadia em ambiente de casa para viagens, compromissos ou períodos de ausência.",
    icon: Home,
  },
  {
    title: "Creche por período",
    description: "Uma rotina mais ativa e acompanhada para cães que precisam de companhia durante o dia.",
    icon: Dog,
  },
  {
    title: "Cuidados para idosos",
    description: "Acolhimento calmo, observação atenta e respeito ao ritmo de cães idosos.",
    icon: HeartPulse,
  },
  {
    title: "Pós-cirúrgico leve",
    description: "Suporte para tutores que precisam de acompanhamento e ambiente tranquilo após orientação veterinária.",
    icon: Activity,
  },
  {
    title: "Passeios e estímulo",
    description: "Atividades proporcionais à energia, idade e adaptação do pet.",
    icon: PawPrint,
  },
  {
    title: "Socialização assistida",
    description: "Contato gradual e supervisionado, sem forçar interações que gerem estresse.",
    icon: Bone,
  },
];

export const processSteps = [
  {
    title: "Conversa inicial",
    description: "Você conta a rotina, a saúde, os hábitos, as restrições e as datas desejadas.",
    icon: MessageCircle,
  },
  {
    title: "Visita e avaliação",
    description: "A Tia Nena conhece o pet e avalia se a hospedagem será uma boa experiência para todos.",
    icon: CheckCircle2,
  },
  {
    title: "Estadia acompanhada",
    description: "Durante a hospedagem, você recebe atualizações, e o pet segue uma rotina tranquila.",
    icon: Sparkles,
  },
];

export const testimonials = [
  {
    quote:
      "A diferença foi perceber que meu cachorro não ficou apenas hospedado. Ele foi cuidado como parte da casa.",
    author: "Mariana S.",
    pet: "tutora do Bento",
  },
  {
    quote:
      "Receber fotos todos os dias me deixou tranquila. A adaptação foi respeitosa e sem correria.",
    author: "Renata M.",
    pet: "tutora da Lola",
  },
  {
    quote:
      "Meu cão é idoso e precisa de mais paciência. A Tia Nena entendeu exatamente o que ele precisava.",
    author: "Carlos A.",
    pet: "tutor do Theo",
  },
];

export const galleryPlaceholders = [
  "Soneca depois do passeio",
  "Rotina com supervisão",
  "Espaço livre de gaiolas",
  "Atualizações para tutores",
];

export const faqs = [
  {
    question: "A hospedagem aceita qualquer cão?",
    answer:
      "A hospedagem depende de uma avaliação prévia. O objetivo é garantir segurança, adaptação e bem-estar para o seu pet e para os outros hóspedes.",
  },
  {
    question: "Meu cachorro fica em gaiola?",
    answer:
      "Não. A proposta da Tia Nena é oferecer hospedagem familiar, em ambiente de casa, com supervisão e rotina organizada.",
  },
  {
    question: "Vocês enviam fotos e vídeos?",
    answer:
      "Sim. Durante a estadia, os tutores recebem atualizações para acompanhar como o pet está se adaptando.",
  },
  {
    question: "Cães idosos podem se hospedar?",
    answer:
      "Sim, desde que a rotina e as necessidades sejam avaliadas antes. Cães idosos recebem cuidado mais calmo e observação atenta.",
  },
];

export const contactItems = [
  { label: brand.phone, icon: Phone },
  { label: brand.city, icon: MapPin },
];
