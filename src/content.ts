export const BRAND = 'Nexo Palpites';
export const BRAND_SHORT = 'Nexo';
export const TAGLINE = 'Análise esportiva com transparência';
export const SUPPORT_EMAIL = 'contato@nexopalpites.com.br';
export const SUPPORT_WHATSAPP = '(11) 90000-0000';
export const SUPPORT_HOURS = 'Seg a Sáb, 9h às 20h';

/** Se você já tem um checkout (Hotmart, Kiwify, Eduzz, Stripe...), cole a URL em VITE_CHECKOUT_URL.
 *  Sem essa variável, os botões abrem o formulário de contato interno. */
export const CHECKOUT_URL: string = (import.meta.env.VITE_CHECKOUT_URL ?? '').trim();

export const AGE_KEY = 'nexo.age.v1';
export const CONSENT_KEY = 'nexo.consent.v1';
export const CONSENT_VERSION = '2024-11';

export type Plan = {
  id: string;
  name: string;
  price: string;
  cents: string;
  period: string;
  tagline: string;
  perks: string[];
  featured?: boolean;
  badge?: string;
  save?: string;
};

export const PLANS: Plan[] = [
  {
    id: 'mensal',
    name: 'Mensal',
    price: '59',
    cents: '90',
    period: '/mês',
    tagline: 'Para conhecer o grupo sem compromisso longo.',
    perks: [
      'Acesso ao grupo de análises no WhatsApp',
      'Análises publicadas de segunda a domingo',
      'Leitura de dados e contexto de cada jogo',
      'Guia de gestão de risco (banca) em PDF',
      'Suporte por mensagem em horário comercial',
    ],
  },
  {
    id: 'trimestral',
    name: 'Trimestral',
    price: '149',
    cents: '90',
    period: '/3 meses',
    tagline: 'O equilíbrio entre tempo de estudo e preço.',
    featured: true,
    badge: 'Mais escolhido',
    save: 'Economize 17%',
    perks: [
      'Tudo do plano Mensal',
      '3 meses de acesso contínuo',
      'Relatório mensal de desempenho do grupo',
      'Aulas curtas de leitura de mercado (4 módulos)',
      'Prioridade nas respostas do suporte',
    ],
  },
  {
    id: 'anual',
    name: 'Anual',
    price: '449',
    cents: '90',
    period: '/12 meses',
    tagline: 'Para quem trata o estudo como rotina.',
    save: 'Economize 37%',
    perks: [
      'Tudo do plano Trimestral',
      '12 meses de acesso contínuo',
      'Encontros ao vivo de análise (1x por mês)',
      'Planilha de controle de banca completa',
      'Renovação com preço travado',
    ],
  },
];

export type IconName =
  | 'chart'
  | 'shield'
  | 'book'
  | 'wallet'
  | 'users'
  | 'clock'
  | 'check'
  | 'arrow'
  | 'cookie'
  | 'lock'
  | 'alert'
  | 'heart';

export const FEATURES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'chart',
    title: 'Leitura de dados, não achismo',
    text: 'Cada análise traz os números que sustentam a leitura: forma recente, médias, contexto de tabela e desfalques.',
  },
  {
    icon: 'book',
    title: 'Explicação do raciocínio',
    text: 'Você não recebe só um palpite solto. Recebe o porquê, o cenário e o que invalidaria aquela leitura.',
  },
  {
    icon: 'wallet',
    title: 'Gestão de risco',
    text: 'Material de banca com unidades de aposta, limites e registro. Método de organização, sem promessa de retorno.',
  },
  {
    icon: 'clock',
    title: 'Rotina previsível',
    text: 'Publicações em horários definidos, com resumo do dia. Nada de mensagem aleatória no meio da madrugada.',
  },
  {
    icon: 'users',
    title: 'Comunidade moderada',
    text: 'Grupo com regras claras, sem promessa de lucro, sem "sinal garantido" e sem venda de esquema milagroso.',
  },
  {
    icon: 'shield',
    title: 'Transparência no histórico',
    text: 'Publicamos o histórico do grupo como ele é, incluindo os erros. Resultado passado não garante resultado futuro.',
  },
];

export const STEPS: { n: string; title: string; text: string }[] = [
  {
    n: '01',
    title: 'Escolha o plano',
    text: 'Três opções de acesso, com 7 dias de garantia de arrependimento conforme o Código de Defesa do Consumidor.',
  },
  {
    n: '02',
    title: 'Receba o convite',
    text: 'Após a confirmação, você recebe no e-mail e no WhatsApp o link do grupo e o guia inicial de leitura.',
  },
  {
    n: '03',
    title: 'Acompanhe as análises',
    text: 'Todos os dias publicamos as leituras do dia com contexto. Você decide o que faz sentido para você.',
  },
];

export type SampleAnalysis = {
  league: string;
  match: string;
  time: string;
  market: string;
  readLabel: string;
  metrics: { label: string; value: number; hint: string }[];
  note: string;
};

export const SAMPLE_ANALYSES: SampleAnalysis[] = [
  {
    league: 'Brasileirão Série A',
    match: 'Time A x Time B',
    time: 'Hoje · 16:00',
    market: 'Total de gols',
    readLabel: 'Leitura: cenário de jogo truncado',
    metrics: [
      { label: 'Média de gols (últ. 5)', value: 58, hint: '2,1 por jogo' },
      { label: 'Contexto de tabela', value: 74, hint: 'briga direta na parte de baixo' },
      { label: 'Desfalques ofensivos', value: 66, hint: '2 titulares fora' },
    ],
    note: 'Exemplo demonstrativo de estrutura de análise. Não é recomendação de aposta.',
  },
  {
    league: 'Premier League',
    match: 'Time C x Time D',
    time: 'Amanhã · 11:30',
    market: 'Handicap asiático',
    readLabel: 'Leitura: favorito com margem curta',
    metrics: [
      { label: 'Desempenho em casa', value: 81, hint: '7V em 10' },
      { label: 'Criação de chances', value: 63, hint: 'xG 1,8 por jogo' },
      { label: 'Risco de rotação', value: 41, hint: 'jogo de copa na semana' },
    ],
    note: 'Exemplo demonstrativo de estrutura de análise. Não é recomendação de aposta.',
  },
  {
    league: 'Liga Betplay',
    match: 'Time E x Time F',
    time: 'Hoje · 21:15',
    market: 'Ambas marcam',
    readLabel: 'Leitura: dois ataques eficientes, defesas expostas',
    metrics: [
      { label: 'Jogos com BTTS', value: 71, hint: '7 dos últimos 10' },
      { label: 'Finalizações sofridas', value: 68, hint: 'alta nas duas equipes' },
      { label: 'Clima e altitude', value: 35, hint: 'chuva prevista' },
    ],
    note: 'Exemplo demonstrativo de estrutura de análise. Não é recomendação de aposta.',
  },
];

export const RECEIVE: string[] = [
  'Análises diárias com contexto, dados e o que invalidaria a leitura',
  'Guia de gestão de banca e planilha de controle',
  'Aulas curtas de leitura de mercado (módulos objetivos)',
  'Histórico do grupo publicado sem maquiagem',
  'Comunidade moderada, com regras de convivência',
  'Suporte humano por mensagem em horário comercial',
];

export const NOT_PROMISE: string[] = [
  'Não prometemos lucro, retorno ou "acerto garantido"',
  'Não vendemos "sinal infalível" nem robô milagroso',
  'Não fazemos aposta por você, nem administramos a sua banca',
  'Não indicamos cassino, slots ou jogos de azar',
  'Não damos conselho financeiro ou de investimento',
  'Não escondemos resultados negativos do histórico',
];

export const TESTIMONIALS: { name: string; role: string; text: string }[] = [
  {
    name: 'Rafael M.',
    role: 'Assinante desde 2023',
    text: 'O que me fez ficar foi a clareza do raciocínio. Eu entendia o motivo da análise, mesmo quando ela não batia.',
  },
  {
    name: 'Camila S.',
    role: 'Assinante trimestral',
    text: 'Gostei da organização: horário certo, resumo do dia e nenhum exagero de "vamos ficar ricos". Isso me passou confiança.',
  },
  {
    name: 'Diego P.',
    role: 'Assinante anual',
    text: 'A parte de gestão de banca mudou minha relação com aposta. Hoje eu tenho limite e registro, o que antes não existia.',
  },
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Vocês garantem lucro?',
    a: 'Não. Nenhuma análise séria pode garantir resultado em evento esportivo — quem promete isso está enganando você. O que entregamos é estudo, contexto e método de organização. Decisão e risco continuam sendo seus.',
  },
  {
    q: 'Então o que eu recebo exatamente?',
    a: 'Acesso a um grupo com análises diárias explicadas (dados, contexto e o que invalidaria a leitura), material de gestão de banca, aulas curtas de leitura de mercado e um histórico publicado com acertos e erros.',
  },
  {
    q: 'Isso é aposta?',
    a: 'O produto é conteúdo de análise e estudo esportivo. Não somos casa de apostas, não recebemos depósito e não operamos apostas por você. Aposta é uma atividade de risco, permitida apenas para maiores de 18 anos, e a decisão é sempre sua.',
  },
  {
    q: 'Como recebo o acesso?',
    a: 'Depois da confirmação do pagamento você recebe o convite do grupo no e-mail informado e também no WhatsApp. O prazo normal é de poucos minutos.',
  },
  {
    q: 'Posso cancelar?',
    a: 'Sim. Você tem 7 dias corridos a partir da compra para desistir com reembolso integral do valor pago, conforme o art. 49 do Código de Defesa do Consumidor. Depois disso, o plano não é renovado automaticamente e você pode não renovar quando quiser.',
  },
  {
    q: 'Preciso entender muito de futebol?',
    a: 'Não. As análises são escritas em linguagem simples e explicam os termos técnicos. O material inicial leva cerca de 40 minutos para ser lido.',
  },
  {
    q: 'É permitido para menores de 18 anos?',
    a: 'Não. Todo o conteúdo é destinado exclusivamente a maiores de 18 anos. Se você é menor de idade, não prossiga.',
  },
  {
    q: 'Como vocês tratam meus dados?',
    a: 'Seguimos a LGPD (Lei 13.709/2018). Coletamos apenas o necessário para entregar o acesso e falar com você. Você pode pedir acesso, correção ou exclusão quando quiser pela nossa página de privacidade. Cookies só são ativados com o seu consentimento.',
  },
];

export const TICKER: string[] = [
  'Sem promessa de lucro',
  'Conteúdo para maiores de 18 anos',
  'Histórico publicado com erros e acertos',
  'Gestão de risco inclusa',
  '7 dias de garantia',
  'Cookies só com consentimento',
  'Conteúdo educativo',
  'Aposte apenas o que pode perder',
];
