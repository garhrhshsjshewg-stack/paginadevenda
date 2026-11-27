export const BRAND = 'Império VIP';
export const BRAND_SHORT = 'Império VIP';
export const TAGLINE = 'Grupo de palpites e análises esportivas';

export const SUPPORT_EMAIL = 'contato@imperiovip.com.br';
export const SUPPORT_WHATSAPP = '(11) 90000-0000';
export const SUPPORT_HOURS = 'Seg a Sáb, 9h às 20h';

/** Canal único de suporte ao cliente: Telegram. */
export const SUPPORT_TELEGRAM_URL = 'https://t.me/SUPIMPERIO';
export const SUPPORT_TELEGRAM_LABEL = 'FALAR COM O SUPORTE';
export const SUPPORT_TELEGRAM_TEXT =
  'Precisa de ajuda ou tem alguma dúvida? Nossa equipe de suporte está disponível pelo Telegram para ajudar você.';

/** Link único de pagamento. Todos os botões de compra da página apontam para cá. */
export const CHECKOUT_URL = 'https://pay.sunize.com.br/KGPybKel';

/** Texto único de todos os botões de compra. */
export const CTA_LABEL = 'QUERO ENTRAR NO GRUPO';

export const AGE_KEY = 'nexo.age.v1';
export const CONSENT_KEY = 'nexo.consent.v1';
export const CONSENT_VERSION = '1.0';

export const PLAN = {
  name: 'Plano Permanente',
  price: 'R$ 32,99',
  payment: 'Pagamento único',
  summary: 'Acesso permanente ao grupo.',
  items: [
    'Acesso permanente ao grupo',
    'Palpites esportivos publicados no grupo',
    'Análises dos jogos que acompanham os palpites',
    'Pagamento único, sem mensalidade',
  ],
} as const;

export const NAV = [
  { label: 'O que você recebe', href: '#conteudo' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Dúvidas', href: '#duvidas' },
] as const;

export type Testimonial = {
  name: string;
  rating: number;
  date: string;
  text: string;
};

/**
 * Avaliações reais de participantes.
 *
 * Deixe a lista vazia enquanto não houver depoimentos verdadeiros: a página
 * mostra um estado vazio honesto em vez de inventar nomes, notas ou comentários.
 * Para publicar uma avaliação real, adicione um item com o nome informado pelo
 * participante, a nota de 1 a 5, a data e o comentário enviado por ele.
 */
export const TESTIMONIALS: Testimonial[] = [];
