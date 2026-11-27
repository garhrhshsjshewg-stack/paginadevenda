export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
  note?: string;
};

export const LEGAL_UPDATED = 'Novembro de 2026';

const PRIVACIDADE: LegalDoc = {
  slug: 'privacidade',
  title: 'Política de Privacidade',
  updated: LEGAL_UPDATED,
  intro:
    'Esta política explica quais dados este site trata, para quê e quais são os seus direitos, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).',
  sections: [
    {
      title: '1. Quem é o responsável',
      paragraphs: [
        'Este site divulga um grupo de palpites e análises esportivas. O responsável pelo tratamento dos dados é o titular deste site, cujo canal de contato está informado no rodapé e na seção de contato abaixo.',
      ],
    },
    {
      title: '2. Dados que tratamos',
      paragraphs: ['Tratamos apenas o necessário para o site funcionar e para atender quem entra em contato:'],
      list: [
        'Registro do seu consentimento de cookies: identificador aleatório, data e hora e categorias autorizadas.',
        'Dados que você informa voluntariamente ao falar com o suporte, como nome, e-mail e conteúdo da mensagem.',
        'Dados de navegação agregados, somente se você autorizar cookies de análise ou marketing.',
      ],
    },
    {
      title: '3. Pagamentos',
      paragraphs: [
        'A compra do plano é concluída em uma página de pagamento externa, da plataforma Sunize. Os dados de cartão são informados diretamente nessa plataforma e não passam por este site, que não armazena informações de pagamento.',
      ],
    },
    {
      title: '4. Bases legais',
      list: [
        'Consentimento, para cookies opcionais e comunicações (art. 7º, I, da LGPD).',
        'Execução de contrato, para viabilizar o acesso ao grupo após a compra (art. 7º, V).',
        'Cumprimento de obrigação legal ou regulatória, quando aplicável (art. 7º, II).',
        'Legítimo interesse, para segurança e prevenção a fraudes (art. 7º, IX).',
      ],
    },
    {
      title: '5. Cookies',
      paragraphs: [
        'Cookies estritamente necessários guardam a sua confirmação de idade e as suas escolhas de consentimento. Cookies de análise e de marketing ficam desligados até você autorizar e podem ser revistos a qualquer momento em “Preferências de cookies”, no rodapé. Detalhes na Política de Cookies.',
      ],
    },
    {
      title: '6. Compartilhamento',
      paragraphs: [
        'Não vendemos dados pessoais. O compartilhamento ocorre apenas com a plataforma de pagamento, para processar a compra, e com provedores de infraestrutura necessários para manter o site no ar, sempre limitado à finalidade original.',
      ],
    },
    {
      title: '7. Por quanto tempo guardamos',
      paragraphs: [
        'O registro de consentimento é mantido enquanto for necessário para comprovar a sua escolha. Mensagens de suporte são guardadas pelo tempo necessário ao atendimento e ao cumprimento de obrigações legais, e depois eliminadas ou anonimizadas.',
      ],
    },
    {
      title: '8. Seus direitos',
      paragraphs: ['Você pode, a qualquer momento, solicitar:'],
      list: [
        'Confirmação da existência de tratamento e acesso aos dados.',
        'Correção de dados incompletos, inexatos ou desatualizados.',
        'Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.',
        'Informação sobre compartilhamentos realizados.',
        'Revogação do consentimento e oposição a tratamentos específicos.',
      ],
    },
    {
      title: '9. Segurança',
      paragraphs: [
        'Adotamos medidas técnicas e administrativas para proteger os dados tratados, como transmissão criptografada e acesso restrito. Nenhum ambiente é totalmente imune a incidentes; caso ocorra um incidente relevante, os titulares afetados e a ANPD serão comunicados na forma da lei.',
      ],
    },
    {
      title: '10. Contato',
      paragraphs: [
        'Para exercer seus direitos ou tirar dúvidas sobre esta política, use o e-mail informado no rodapé do site. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).',
      ],
    },
  ],
  note: 'Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data de última atualização aparece no topo desta página.',
};

const TERMOS: LegalDoc = {
  slug: 'termos',
  title: 'Termos de Uso',
  updated: LEGAL_UPDATED,
  intro:
    'Ao comprar o plano ou utilizar este site, você declara ter lido e concordado com estes termos. Leia com atenção antes de concluir a compra.',
  sections: [
    {
      title: '1. Objeto',
      paragraphs: [
        'Este site oferece a venda de acesso a um grupo de palpites e análises esportivas. O conteúdo tem finalidade informativa e recreativa, voltada a pessoas maiores de 18 anos.',
      ],
    },
    {
      title: '2. Plano e pagamento',
      paragraphs: [
        'O único plano oferecido é o Plano Permanente, no valor de R$ 32,99, em pagamento único. Não há mensalidade, assinatura, renovação automática ou qualquer outro plano.',
        'O pagamento é processado em página externa da plataforma Sunize. A liberação do acesso ocorre após a confirmação do pagamento pela plataforma.',
      ],
    },
    {
      title: '3. Acesso ao grupo',
      paragraphs: [
        'Após a confirmação do pagamento, as instruções para entrar no grupo são enviadas ao contato informado na compra. O acesso é permanente, sem prazo de validade, e destinado ao uso pessoal do comprador.',
      ],
    },
    {
      title: '4. Ausência de garantia de resultado',
      paragraphs: [
        'Não garantimos acerto, lucro, retorno financeiro ou qualquer resultado. Palpite é uma leitura sobre um evento esportivo e pode estar errado.',
        'Este site não é casa de apostas, não recebe apostas e não intermedeia valores apostados. Qualquer aposta é decisão e responsabilidade exclusiva do usuário, feita em plataformas de terceiros.',
        'Apostas envolvem risco de perda financeira. Nunca aposte valor que você não pode perder.',
      ],
    },
    {
      title: '5. Idade mínima',
      paragraphs: [
        'O conteúdo é destinado exclusivamente a pessoas maiores de 18 anos. Ao confirmar a idade e comprar, você declara atender a esse requisito.',
      ],
    },
    {
      title: '6. Direito de arrependimento',
      paragraphs: [
        'O comprador pode solicitar o cancelamento da compra nos prazos e nas condições previstos no Código de Defesa do Consumidor, pelo canal de atendimento informado neste site. Pedidos são analisados e respondidos pelo mesmo canal.',
      ],
    },
    {
      title: '7. Conduta e uso do conteúdo',
      paragraphs: [
        'O conteúdo do grupo é de uso pessoal. Não é permitido reproduzir, revender, redistribuir ou publicar comercialmente os palpites e análises recebidos sem autorização.',
      ],
    },
    {
      title: '8. Limitação de responsabilidade',
      paragraphs: [
        'Não nos responsabilizamos por decisões de aposta, perdas financeiras, bloqueios ou alterações de regras de plataformas de terceiros, nem por indisponibilidades técnicas fora do nosso controle.',
      ],
    },
    {
      title: '9. Propriedade intelectual',
      paragraphs: [
        'Textos, marca, identidade visual e materiais do grupo pertencem ao responsável por este site e são protegidos pela legislação aplicável.',
      ],
    },
    {
      title: '10. Alterações e foro',
      paragraphs: [
        'Estes termos podem ser atualizados a qualquer momento, com a data de revisão indicada nesta página. A relação é regida pelas leis brasileiras, com foro no domicílio do consumidor quando assim previsto em lei.',
      ],
    },
  ],
  note: 'Em caso de dúvida sobre estes termos, fale com o suporte antes de concluir a compra.',
};

const COOKIES: LegalDoc = {
  slug: 'cookies',
  title: 'Política de Cookies',
  updated: LEGAL_UPDATED,
  intro:
    'Usamos cookies para o site funcionar e, com a sua autorização, para entender o uso das páginas. Você decide o que pode ser ativado.',
  sections: [
    {
      title: '1. O que são cookies',
      paragraphs: [
        'Cookies são pequenos arquivos guardados no seu navegador. Também usamos o armazenamento local do navegador para lembrar escolhas, como a confirmação de idade.',
      ],
    },
    {
      title: '2. Categorias que utilizamos',
      list: [
        'Estritamente necessários: mantêm o site funcionando e registram a sua confirmação de idade e as suas escolhas de consentimento. Não podem ser desativados.',
        'Análise e desempenho: ajudam a entender, de forma agregada, quais páginas são úteis. Desligados por padrão.',
        'Marketing: permitem medir campanhas e apresentar conteúdo em outras plataformas. Desligados por padrão.',
      ],
    },
    {
      title: '3. Como você controla',
      paragraphs: [
        'No primeiro acesso, o banner permite aceitar todos, manter apenas os essenciais ou personalizar por categoria. A qualquer momento, o link “Preferências de cookies”, no rodapé, reabre o painel para revisar ou revogar a escolha.',
      ],
    },
    {
      title: '4. Registro do consentimento',
      paragraphs: [
        'Cada escolha é registrada com um identificador aleatório, a data, a hora e as categorias autorizadas, para que seja possível comprovar o consentimento. Esse registro não identifica você pessoalmente.',
      ],
    },
    {
      title: '5. Cookies de terceiros',
      paragraphs: [
        'A página de pagamento é externa, operada pela Sunize, e pode usar cookies próprios durante o checkout, conforme as políticas dessa plataforma. Este site não controla esses cookies.',
      ],
    },
    {
      title: '6. Desativar no navegador',
      paragraphs: [
        'Você também pode bloquear ou apagar cookies nas configurações do navegador. Ao fazer isso, algumas escolhas podem não ser lembradas e o banner de consentimento pode reaparecer.',
      ],
    },
  ],
  note: 'Dúvidas sobre cookies podem ser enviadas ao canal de contato informado no rodapé.',
};

const JOGO_RESPONSAVEL: LegalDoc = {
  slug: 'jogo-responsavel',
  title: 'Jogo Responsável',
  updated: LEGAL_UPDATED,
  intro:
    'Apostar deve ser entretenimento com valor que você pode perder — nunca uma fonte de renda ou uma forma de resolver problemas financeiros. Estas orientações valem para qualquer pessoa que acompanhe nosso conteúdo.',
  sections: [
    {
      title: '1. Sem promessa de ganho',
      paragraphs: [
        'Não prometemos acerto, lucro ou retorno. Palpites e análises são leituras sobre jogos e podem errar. Resultados anteriores não garantem resultados futuros.',
      ],
    },
    {
      title: '2. Sinais de alerta',
      list: [
        'Apostar valores maiores do que você planejou, para tentar recuperar perdas.',
        'Pedir dinheiro emprestado ou usar recursos essenciais para apostar.',
        'Esconder de familiares ou amigos quanto tempo ou dinheiro você gasta.',
        'Sentir ansiedade, irritação ou culpa relacionada a apostas.',
        'Aumentar as apostas de forma crescente para sentir a mesma emoção.',
      ],
    },
    {
      title: '3. Combinados práticos',
      list: [
        'Defina antes quanto pode gastar e trate esse valor como custo de entretenimento.',
        'Estabeleça limite de tempo e faça pausas.',
        'Não aposte para recuperar perdas nem sob influência de álcool.',
        'Não faça de apostas uma fonte de renda ou uma forma de pagar contas.',
      ],
    },
    {
      title: '4. Apenas maiores de 18 anos',
      paragraphs: [
        'O conteúdo é restrito a maiores de 18 anos. Se você é menor de idade, não utilize este site e converse com um adulto de confiança caso o assunto apostas apareça.',
      ],
    },
    {
      title: '5. Onde buscar ajuda',
      paragraphs: ['Se o jogo deixou de ser diversão, procure apoio gratuito e sigiloso:'],
      list: [
        'CVV — Centro de Valorização da Vida: ligue 188, 24 horas, gratuito.',
        'Jogadores Anônimos Brasil: grupos de apoio para quem tem problema com jogos e apostas.',
        'CAPS e unidades públicas de saúde mental do seu município.',
      ],
    },
  ],
  note: 'Este site não é casa de apostas, não recebe apostas e não garante resultados.',
};

export const LEGAL_DOCS: LegalDoc[] = [PRIVACIDADE, TERMOS, COOKIES, JOGO_RESPONSAVEL];

export function findDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((doc) => doc.slug === slug);
}
