import { BRAND, CONSENT_VERSION, SUPPORT_EMAIL, SUPPORT_WHATSAPP } from '../content';

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
  note?: string;
};

export const LEGAL_UPDATED = 'Novembro de 2024';

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: 'privacidade',
    title: 'Política de Privacidade',
    description: 'Como o Nexo Palpites trata seus dados pessoais conforme a LGPD (Lei 13.709/2018).',
    updated: LEGAL_UPDATED,
    intro:
      `Esta política explica quais dados o ${BRAND} coleta, por que coleta, como protege e como você pode exercer os seus direitos como titular de dados, conforme a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).`,
    sections: [
      {
        title: '1. Quem é o controlador dos seus dados',
        paragraphs: [
          `O controlador dos dados pessoais tratados neste site é o ${BRAND}, inscrito no CNPJ 00.000.000/0001-00, com sede em São Paulo/SP.`,
          `Contato do encarregado de dados (DPO): ${SUPPORT_EMAIL}. WhatsApp de atendimento: ${SUPPORT_WHATSAPP}.`,
        ],
      },
      {
        title: '2. Quais dados coletamos',
        list: [
          'Dados de identificação e contato: nome e e-mail informados por você no formulário de interesse.',
          'Dados de comunicação: número de WhatsApp, quando você opta por informar para receber o acesso ao grupo.',
          'Dados de navegação: páginas visitadas, tipo de dispositivo e navegador — apenas se você autorizar cookies de análise.',
          'Registro de consentimento: data, hora e categorias de cookies aceitas ou recusadas.',
          'Dados de compra: quando houver contratação, os dados de pagamento são processados diretamente pela plataforma de pagamentos, que é a controladora dessas informações. Não armazenamos número completo de cartão.',
        ],
      },
      {
        title: '3. Para que usamos os dados e com qual base legal',
        list: [
          'Responder ao seu contato e enviar o acesso ao grupo — execução de contrato ou procedimentos preliminares (art. 7º, V da LGPD).',
          'Enviar comunicações sobre o produto e o conteúdo — com o seu consentimento (art. 7º, I), revogável a qualquer momento.',
          'Cumprir obrigações legais, fiscais e regulatórias — obrigação legal (art. 7º, II).',
          'Medir audiência e melhorar a página — consentimento para cookies analíticos (art. 7º, I).',
          'Prevenir fraudes e garantir a segurança do site — legítimo interesse (art. 7º, IX), sempre limitado ao necessário.',
        ],
      },
      {
        title: '4. Cookies e tecnologias semelhantes',
        paragraphs: [
          'Cookies estritamente necessários funcionam sempre, pois garantem o funcionamento básico do site (por exemplo, guardar a sua escolha de consentimento). Cookies de análise e de marketing só são ativados depois de você autorizar.',
          'Você pode mudar de ideia a qualquer momento clicando em "Preferências de cookies" no rodapé. A lista completa de cookies está na Política de Cookies.',
        ],
      },
      {
        title: '5. Com quem compartilhamos',
        list: [
          'Provedores de infraestrutura de hospedagem e e-mail, que atuam como operadores e seguem nossas instruções.',
          'Plataforma de pagamentos, quando você contrata um plano.',
          'Ferramentas de análise de audiência, somente se você consentir com cookies analíticos.',
          'Autoridades públicas, quando houver requisição legal fundamentada.',
        ],
        paragraphs: [
          'Não vendemos dados pessoais. Não usamos seus dados para decisões automatizadas que afetem seus direitos.',
        ],
      },
      {
        title: '6. Transferência internacional',
        paragraphs: [
          'Alguns fornecedores de infraestrutura podem processar dados fora do Brasil. Nesses casos, exigimos cláusulas contratuais e garantias compatíveis com os arts. 33 a 36 da LGPD.',
        ],
      },
      {
        title: '7. Por quanto tempo guardamos',
        paragraphs: [
          'Dados de contato são mantidos enquanto durar o relacionamento e por até 24 meses após o último contato, salvo prazo legal maior. Registros de consentimento são mantidos por 5 anos, para comprovar a conformidade. Dados fiscais seguem os prazos legais aplicáveis.',
        ],
      },
      {
        title: '8. Seus direitos',
        paragraphs: ['Você pode, a qualquer momento, solicitar:'],
        list: [
          'Confirmação de que tratamos seus dados e acesso a eles.',
          'Correção de dados incompletos, inexatos ou desatualizados.',
          'Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.',
          'Portabilidade, nos termos da regulamentação da ANPD.',
          'Eliminação de dados tratados com base em consentimento.',
          'Informação sobre compartilhamentos e sobre a possibilidade de não consentir.',
          'Revogação do consentimento.',
        ],
        paragraphs2: [],
      },
      {
        title: '9. Como exercer seus direitos',
        paragraphs: [
          `Envie um e-mail para ${SUPPORT_EMAIL} com o assunto "LGPD" e o direito que deseja exercer. Respondemos em até 15 dias. Se você entender que sua solicitação não foi atendida, pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).`,
        ],
      },
      {
        title: '10. Segurança da informação',
        paragraphs: [
          'Adotamos medidas técnicas e administrativas para proteger os dados, como conexão criptografada (HTTPS), controle de acesso restrito, registro de consentimento e minimização de coleta. Nenhum sistema é 100% imune a incidentes; caso ocorra incidente relevante, comunicaremos os titulares afetados e a ANPD, conforme a lei.',
        ],
      },
      {
        title: '11. Menores de idade',
        paragraphs: [
          'O conteúdo é destinado exclusivamente a maiores de 18 anos. Não coletamos intencionalmente dados de crianças ou adolescentes. Se identificarmos esse tipo de coleta, os dados serão eliminados.',
        ],
      },
      {
        title: '12. Alterações desta política',
        paragraphs: [
          `A versão vigente é a publicada nesta página (versão ${CONSENT_VERSION}). Mudanças relevantes serão comunicadas no site e, quando necessário, exigirão novo consentimento.`,
        ],
      },
    ],
    note: 'Este documento é um modelo informativo e não substitui a análise de um advogado especializado em proteção de dados e direito digital.',
  },
  {
    slug: 'termos',
    title: 'Termos de Uso',
    description: 'Condições de contratação e uso do grupo de análises esportivas Nexo Palpites.',
    updated: LEGAL_UPDATED,
    intro:
      'Ao contratar ou utilizar o grupo de análises, você declara que leu, entendeu e concorda com estas condições. Se não concordar, não prossiga com a contratação.',
    sections: [
      {
        title: '1. Objeto do serviço',
        paragraphs: [
          `O ${BRAND} é um serviço de conteúdo informativo e educacional sobre esportes. Entregamos análises com dados e contexto, material de gestão de risco e aulas de leitura de mercado, por meio de grupo de mensagens e materiais digitais.`,
          'O serviço NÃO é: casa de apostas, plataforma de jogos, consultoria financeira, gestão de investimentos ou administração de banca de terceiros.',
        ],
      },
      {
        title: '2. Ausência de garantia de resultado',
        paragraphs: [
          'Este produto não promete, não projeta e não garante ganhos, lucros, retornos ou índice de acerto. Apostas esportivas dependem de variáveis fora de qualquer controle e podem gerar perda total do valor apostado.',
          'Qualquer exemplo, histórico ou número apresentado tem finalidade demonstrativa e não constitui promessa de repetição. Resultados passados não garantem resultados futuros.',
          'A decisão de apostar, o valor apostado e o risco são integralmente seus.',
        ],
      },
      {
        title: '3. Público-alvo e idade mínima',
        paragraphs: [
          'O conteúdo é destinado exclusivamente a pessoas maiores de 18 anos. Ao contratar, você declara ter 18 anos ou mais e capacidade civil plena.',
        ],
      },
      {
        title: '4. Pagamento e acesso',
        paragraphs: [
          'O pagamento é único por período contratado, processado por plataforma de pagamentos parceira. O acesso é liberado após a confirmação do pagamento, normalmente em poucos minutos.',
          'O acesso é pessoal e intransferível. O compartilhamento do link do grupo, do material ou de trechos das análises com terceiros pode gerar o cancelamento do acesso, sem devolução, respondendo o infrator pelas perdas e danos.',
        ],
      },
      {
        title: '5. Direito de arrependimento e cancelamento',
        paragraphs: [
          'Você pode desistir da compra no prazo de 7 dias corridos a partir da data de contratação, com reembolso integral do valor pago, conforme o art. 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990).',
          `Para exercer esse direito, basta enviar um e-mail para ${SUPPORT_EMAIL} informando o pedido. O reembolso é processado na mesma forma de pagamento em até 30 dias.`,
          'Não há renovação automática: ao fim do período contratado, o acesso simplesmente termina, se você não fizer nova contratação.',
        ],
      },
      {
        title: '6. Conduta no grupo',
        list: [
          'É proibido divulgar outros grupos, esquemas, "sinais garantidos" ou promessas de lucro.',
          'É proibido desrespeitar, assediar ou discriminar outros participantes.',
          'É proibido compartilhar conteúdo ilegal ou de terceiros sem autorização.',
          'A moderação pode remover mensagens e cancelar acessos que violem estas regras, sem devolução, em caso de violação grave.',
        ],
      },
      {
        title: '7. Propriedade intelectual',
        paragraphs: [
          'Textos, análises, planilhas, aulas e identidade visual são protegidos por direitos autorais e pertencem ao Nexo Palpites. É vedada a reprodução, revenda ou distribuição sem autorização escrita, sob pena das medidas legais cabíveis (Lei nº 9.610/1998).',
        ],
      },
      {
        title: '8. Limitação de responsabilidade',
        paragraphs: [
          'Não nos responsabilizamos por perdas financeiras decorrentes de decisões de aposta do usuário, por indisponibilidade de plataformas de terceiros, por problemas de conexão do usuário ou por uso indevido do conteúdo.',
          'Nada nestes termos exclui direitos do consumidor previstos em lei.',
        ],
      },
      {
        title: '9. Jogo responsável',
        paragraphs: [
          'Recomendamos limites de tempo e de valor, registro de apostas e pausas. Se você identifica perda de controle, procure ajuda: CVV 188 (24h) ou Jogadores Anônimos Brasil.',
        ],
      },
      {
        title: '10. Foro e legislação',
        paragraphs: [
          'Aplica-se a legislação brasileira. Eventuais controvérsias podem ser resolvidas pela plataforma consumidor.gov.br ou no foro do domicílio do consumidor, conforme o Código de Defesa do Consumidor.',
        ],
      },
    ],
    note: 'Este documento é um modelo informativo e não substitui a revisão por um advogado.',
  },
  {
    slug: 'cookies',
    title: 'Política de Cookies',
    description: 'Quais cookies o site usa, para quê e como você pode gerenciar ou revogar o consentimento.',
    updated: LEGAL_UPDATED,
    intro:
      'Cookies são pequenos arquivos guardados no seu navegador. Usamos o mínimo possível e só ativamos categorias opcionais com o seu consentimento, conforme a LGPD.',
    sections: [
      {
        title: '1. Categorias de cookies',
        list: [
          'Estritamente necessários (sempre ativos): guardam a sua escolha de consentimento e a confirmação de idade. Sem eles, o site não funciona corretamente. Base legal: legítimo interesse e cumprimento de obrigação legal.',
          'Análise e desempenho (opcionais, desativados por padrão): medem páginas visitadas e tempo de leitura para melhorar o conteúdo. Só são carregados se você autorizar.',
          'Marketing (opcionais, desativados por padrão): permitem medir campanhas e mostrar conteúdo relevante em outras plataformas. Só são carregados se você autorizar.',
        ],
      },
      {
        title: '2. Cookies que usamos hoje',
        list: [
          'nexo.consent.v1 — armazenamento local (localStorage) — guarda suas preferências de cookies e o registro de data/hora. Validade: até você limpar o navegador ou atualizar a versão do consentimento.',
          'nexo.age.v1 — armazenamento local — guarda a confirmação de que você tem 18 anos ou mais.',
          'Cookies de análise e de marketing — não são instalados até você aceitar as categorias correspondentes.',
        ],
      },
      {
        title: '3. Como aceitar, recusar ou revogar',
        paragraphs: [
          'No primeiro acesso, mostramos um banner com as opções "Aceitar todos", "Somente essenciais" e "Salvar preferências". Recusar categorias opcionais não limita o acesso ao conteúdo.',
          'Para mudar a escolha depois, clique em "Preferências de cookies" no rodapé do site, a qualquer momento, ou limpe os dados do site no seu navegador para que o banner apareça novamente.',
        ],
      },
      {
        title: '4. Cookies no seu navegador',
        paragraphs: [
          'Você também pode bloquear ou apagar cookies nas configurações do navegador (Chrome, Safari, Firefox, Edge). Atenção: bloquear cookies necessários pode impedir o funcionamento do site e o registro da sua escolha.',
        ],
      },
      {
        title: '5. Registro de consentimento',
        paragraphs: [
          'Cada decisão é registrada com identificador, data, hora e versão do documento, para que possamos comprovar o consentimento e respeitar a sua vontade.',
        ],
      },
    ],
    note: 'Se você ativar ferramentas de terceiros (ex.: Google Analytics, Meta Pixel), inclua-as na lista do item 2 antes de publicar.',
  },
  {
    slug: 'jogo-responsavel',
    title: 'Jogo Responsável',
    description: 'Orientações de aposta consciente, sinais de alerta e onde buscar ajuda.',
    updated: LEGAL_UPDATED,
    intro:
      'Apostar deve ser entretenimento com valor que você pode perder — nunca uma fonte de renda ou uma forma de resolver problemas financeiros. Estas orientações valem para qualquer pessoa que acompanhe nosso conteúdo.',
    sections: [
      {
        title: '1. Sinais de alerta',
        list: [
          'Apostar valores maiores do que planejou, para tentar recuperar perdas.',
          'Pedir dinheiro emprestado ou usar limite de crédito para apostar.',
          'Esconder de familiares quanto tempo ou dinheiro é gasto em apostas.',
          'Ansiedade, irritabilidade ou insônia quando não consegue apostar.',
          'Prejudicar trabalho, estudos, sono ou relações por causa das apostas.',
        ],
      },
      {
        title: '2. Boas práticas',
        list: [
          'Defina antes o valor máximo do mês e trate como dinheiro já gasto em lazer.',
          'Estabeleça limite de tempo e use alarme para encerrar a sessão.',
          'Nunca aposte para recuperar prejuízo ("caçar perdas").',
          'Não aposte sob efeito de álcool, cansaço ou emoção forte.',
          'Registre suas apostas: o que você vê no papel é diferente da memória.',
          'Não use dinheiro reservado a contas, aluguel, alimentação ou dívidas.',
        ],
      },
      {
        title: '3. Onde buscar ajuda',
        list: [
          'CVV — Centro de Valorização da Vida: ligue 188 (24 horas, gratuito) ou acesse cvv.org.br.',
          'Jogadores Anônimos Brasil: jogadoresanonimos.org.br — grupos de apoio gratuitos.',
          'CAPS — Centro de Atenção Psicossocial da sua cidade: atendimento pelo SUS.',
          'Se houver dívidas: procure orientação gratuita do Procon do seu estado ou de um serviço de educação financeira.',
        ],
      },
      {
        title: '4. Compromisso do Nexo Palpites',
        paragraphs: [
          'Não prometemos ganhos, não vendemos "sinal garantido", não indicamos cassino ou jogos de azar e não fazemos aposta por você. Nosso conteúdo é educativo, para maiores de 18 anos, e incentiva a gestão de risco e o limite pessoal.',
        ],
      },
    ],
    note: 'Se você sente que perdeu o controle, procure ajuda profissional. Este conteúdo não substitui atendimento médico ou psicológico.',
  },
];

export function findDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((doc) => doc.slug === slug);
}
