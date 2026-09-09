import {
  Activity,
  Camera,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Dog,
  HeartHandshake,
  HeartPulse,
  Home,
  Key,
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
  instagram: "https://www.instagram.com/tianenahospedagem/",
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
    title: "Sem baias",
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
    title: "Pós-cirúrgico",
    description: "Suporte para tutores que precisam de acompanhamento e ambiente tranquilo após orientação veterinária.",
    icon: Activity,
  },
  {
    title: "Passeios",
    description: "Atividades proporcionais à energia, idade e adaptação do pet.",
    icon: PawPrint,
  },
  {
    title: "Petsitter",
    description: "Visitas na casa do seu pet para alimentação, passeio e companhia, sem tirá-lo da rotina que já conhece.",
    icon: Key,
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
    quote: [
      "Ter a Nena na minha vida e na do Wilson mudou tudo.",
      "O Wilson, ou melhor, o senhor Wilson, passou por muita coisa antes de ser resgatado, e os traumas faziam com que ele tivesse medo de outros cães e só se sentisse seguro comigo ou com meus pais.",
      "Quando precisei deixá-lo sozinho, conheci a Creche da Tia Nena. Na primeira vez ele estava inseguro, mas, aos poucos, ela conquistou a confiança dele. Hoje vejo um Wilson leve, que brinca, passeia, faz amigos e aproveita cada momento.",
      "Mais do que um lugar para ficar enquanto estou fora, a Nena deu ao Wilson a oportunidade de voltar a confiar e ser feliz. E isso não tem preço.",
      "Obrigada por cuidar dele com tanto amor e por ser, de verdade, a segunda mãe do Wilson.",
    ].join("\n\n"),
    author: "Marcela",
    pet: "tutora do Wilson",
  },
  {
    quote:
      "A experiência em deixar os meus cachorros foi muito boa, foram muito bem recebidos e cuidados, dando atenção e carinho aos meus meninos, o que me faz sempre deixá-los em suas mãos. Recomendo e indico, pois o cuidado, amor e a dedicação fazem toda a diferença na hora de recomendar. Parabéns e obrigada por sempre nos atenderem bem.",
    author: "Rosângela",
    pet: "tutora do Arthur e Romeu",
  },
  {
    quote: [
      "A Tia Nena é um anjo que Deus colocou na minha vida. O Ozzy já tinha sido reprovado em 3 creches por não ser sociável com outros cães além da irmã. Ela ia para uma creche (daquelas cheiaaas de cachorros) e ele ficava sozinho em casa, triste.",
      "A Van teve toda a paciência do mundo para acolhê-lo e aos poucos ir socializando com os demais cachorros. O fato de ser uma casa, com poucos cães, ambiente familiar, é maravilhoso! Eles AMAM, tremem de emoção quando saem no táxi dog. Quando eu preciso viajar, a Van sempre me socorre e hospeda minha duplinha - eu fico totalmente tranquila pois sei que eles estão no melhor lugar, na segunda casa deles.",
      "Eu sou imensamente grata pela Tia Nena e sua família por todo amor e cuidado com meus filhos de 4 patas.",
    ].join("\n\n"),
    author: "Ana Júlia",
    pet: "tutora do Ozzy e Gaia",
  },
  {
    quote: [
      "Quero falar um pouco sobre o trabalho incrível da Tia Nena (Vanessa), que cuida dos nossos amigos de quatro patas com tanto carinho e dedicação. Um hotel/creche que é um verdadeiro paraíso para os meus gordos!",
      "Gordo, Mada e Kati sempre foram felizes aos seus cuidados… agora tenho o Lorenzo e a Gabriela que ficam todos os dias e muitas noites sob os seus cuidados, e eu fico tranquila, sabendo que estão em excelentes mãos.",
      "A Tia Nena (Vanessa) tem um jeito especial de entender cada um deles, proporcionando amor, atenção e atividades que eles adoram. O ambiente é seguro e acolhedor, e posso dizer com certeza que ela faz tudo com paixão. Por isso, a indico de olhos fechados para quem procura um lugar confiável e carinhoso para deixar seus pets. Com certeza, Lorenzo e Gabriela e recentemente o Joca sempre saem felizes e saudáveis de lá!",
    ].join("\n\n"),
    author: "Elaine",
    pet: "tutora do Joca, Gabi e Lolô",
  },
  {
    quote: [
      "A Vanessa desde o primeiro contato, se mostrou muito atenciosa, fomos conhecer o local e gostamos.",
      "A adaptação do Luck (Corgi) foi muito rápida, pets sociáveis, brincalhões, um ambiente acolhedor e familiar.",
      "A Vanessa sempre cuidadosa, reportando o dia do pet com vídeos.",
      "Recomendo o local para a hospedagem de seus Pets.",
    ].join("\n\n"),
    author: "Carlos",
    pet: "tutor do Luck",
  },
  {
    quote: [
      "Sempre quando viajo, deixo o trio com a Tia Nena.",
      "Melhor lugar da ZN. Lugar que eu confio demais, que sei que meus cachorros estão sendo bem cuidados e recebendo o carinho de quem ama cachorro de verdade.",
      "Quando vou buscar o trio, parece que não querem ir embora kkkk.",
    ].join("\n\n"),
    author: "Lucas",
    pet: "tutor do Bob, Pirata e Billy",
  },
];

export const gallery = [
  { src: "/images/bisteca.jpeg", caption: "Bistecão", row: 1 },
  { src: "/images/Tekila.jpg", caption: "Tekila", row: 1 },
  { src: "/images/batata.png", caption: "Batata", row: 1 },
  { src: "/images/Bob.png", caption: "Bob", row: 1 },
  { src: "/images/buda.jpg", caption: "Buda", row: 1 },
  { src: "/images/tekila-2.jpg", caption: "Tekila", row: 1 },
  { src: "/images/azeitonao.png", caption: "Azeitonão", row: 1 },
  { src: "/images/luck.jpeg", caption: "Luck", row: 1 },
  { src: "/images/dog2.jpeg", caption: "Kiba", row: 2 },
  { src: "/images/gabi.jpeg", caption: "Gabizinha", row: 2 },
  { src: "/images/lolo-banco.jpeg", caption: "Lolô", row: 2 },
  { src: "/images/batatinha.jpg", caption: "Batatinha", row: 2 },
  { src: "/images/lolo-coberta.jpeg", caption: "Lolô - beeeem quentinho", row: 2 },
  { src: "/images/menino-dengoso.png", caption: "Menino Dengoso", row: 2 },
  { src: "/images/lolo-2.jpg", caption: "Lolô", row: 2 },
  { src: "/images/margarida-e-wilson.jpeg", caption: "Margarida e Wilson", row: 2 },
  { src: "/images/nina.jpeg", caption: "Nina", row: 3 },
  { src: "/images/ozzy.jpeg", caption: "Ozzy", row: 3 },
  { src: "/images/pirata.jpeg", caption: "Pirata", row: 3 },
  { src: "/images/pos-operatorio.jpeg", caption: "Luke - Cuidado pós-cirúrgico", row: 3 },
  { src: "/images/lolo-dormindinho.jpg", caption: "Lolô dormindinho", row: 3 },
  { src: "/images/gabi-dando-oi.jpg", caption: "Gabi dando oi<3", row: 3 },
  { src: "/images/baleia.jpeg", caption: "Baleia", row: 3 },
] satisfies { src: string; caption: string; row: 1 | 2 | 3 }[];

export const faqs = [
  {
    question: "A hospedagem aceita qualquer cão?",
    answer:
      "A hospedagem depende de uma avaliação prévia. O objetivo é garantir segurança, adaptação e bem-estar para o seu pet e para os outros hóspedes.",
  },
  {
    question: "Meu cachorro fica em baia?",
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
