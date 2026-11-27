import { CHECKOUT_URL, CTA_LABEL, PLAN, TESTIMONIALS } from '../content';
import { Icon, type IconName } from './Icons';

type Feature = { icon: IconName; title: string; text: string };

const FEATURES: Feature[] = [
  {
    icon: 'users',
    title: 'Palpites no grupo',
    text: 'Os palpites esportivos publicados no grupo ficam disponíveis para consulta dos participantes.',
  },
  {
    icon: 'chart',
    title: 'Análises dos jogos',
    text: 'Cada palpite vem acompanhado da análise do confronto, com o raciocínio que sustenta a leitura.',
  },
  {
    icon: 'lock',
    title: 'Acesso permanente',
    text: 'Você entra uma vez e continua no grupo. Não existe renovação mensal nem prazo de validade.',
  },
  {
    icon: 'check',
    title: 'Pagamento único',
    text: 'R$ 32,99 uma única vez, no checkout da Sunize. Sem assinatura e sem cobrança recorrente.',
  },
];

const STEPS = [
  {
    title: 'Clique em “QUERO ENTRAR NO GRUPO”',
    text: 'O botão abre a página de pagamento do plano permanente.',
  },
  {
    title: 'Pague R$ 32,99 uma única vez',
    text: 'O pagamento é processado na página segura da Sunize.',
  },
  {
    title: 'Receba o acesso ao grupo',
    text: 'Depois da confirmação do pagamento, você recebe as instruções para entrar no grupo.',
  },
];

export function WhatYouGet() {
  return (
    <section className="section" id="conteudo">
      <div className="wrap">
        <header className="sec-head">
          <span className="eyebrow">
            <Icon name="ball" /> O que você recebe
          </span>
          <h2>Tudo reunido em um grupo só</h2>
          <p className="lead">
            Um espaço para acompanhar palpites esportivos e as análises que explicam cada leitura de jogo — com acesso
            permanente e sem mensalidade.
          </p>
        </header>

        <div className="features">
          {FEATURES.map((feature) => (
            <article className="feature" key={feature.title}>
              <span className="feature__icon" aria-hidden="true">
                <Icon name={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="section section--alt" id="como-funciona">
      <div className="wrap">
        <header className="sec-head">
          <span className="eyebrow">
            <Icon name="lock" /> Como funciona
          </span>
          <h2>Da compra ao grupo em três passos</h2>
          <p className="lead">Sem cadastro neste site: a compra é concluída direto na página de pagamento.</p>
        </header>

        <ol className="steps">
          {STEPS.map((step, index) => (
            <li className="step" key={step.title}>
              <span className="step__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Reviews() {
  const count = TESTIMONIALS.length;

  return (
    <section className="section" id="avaliacoes">
      <div className="wrap">
        <header className="sec-head">
          <span className="eyebrow">
            <Icon name="star" /> Avaliações
          </span>
          <h2>O que dizem os participantes</h2>
          <p className="lead">
            Esta área reúne avaliações de quem já participa do grupo. Só publicamos depoimentos reais, enviados pelos
            próprios participantes.
          </p>
        </header>

        {count === 0 ? (
          <div className="reviews__empty">
            <div className="stars" role="img" aria-label="Sem avaliações publicadas">
              {[0, 1, 2, 3, 4].map((index) => (
                <Icon name="starOutline" key={index} />
              ))}
            </div>

            <h3>Ainda não há avaliações publicadas</h3>
            <p>
              Nenhum depoimento foi criado ou simulado para este site. Quando as primeiras avaliações verdadeiras forem
              enviadas por participantes, elas aparecem aqui com a nota e o comentário.
            </p>
            <p className="reviews__hint">Já participa do grupo? Sua avaliação pode ser publicada nesta seção.</p>
          </div>
        ) : (
          <div className="reviews__grid">
            {TESTIMONIALS.map((item) => (
              <article className="review" key={`${item.name}-${item.date}`}>
                <div className="stars" role="img" aria-label={`${item.rating} de 5 estrelas`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon name={star <= item.rating ? 'star' : 'starOutline'} key={star} />
                  ))}
                </div>
                <p className="review__text">{item.text}</p>
                <footer className="review__head">
                  <strong className="review__name">{item.name}</strong>
                  <span className="review__date">{item.date}</span>
                </footer>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section section--tight">
      <div className="wrap">
        <div className="cta-band">
          <div className="cta-band__inner">
            <h2>Entre no grupo com acesso permanente</h2>
            <p>
              {PLAN.name} · {PLAN.price} em pagamento único. Você paga uma vez e continua com acesso ao grupo.
            </p>
            <a className="btn btn--primary" href={CHECKOUT_URL}>
              {CTA_LABEL}
            </a>
            <p className="cta-band__note">Conteúdo para maiores de 18 anos. Não há promessa de ganho.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RiskNote() {
  return (
    <section className="risk">
      <div className="wrap risk__inner">
        <span className="risk__icon" aria-hidden="true">
          <Icon name="alert" />
        </span>
        <div>
          <h2 className="risk__title">Aviso importante</h2>
          <p>
            Este site divulga palpites e análises esportivas. Não somos casa de apostas e não garantimos acerto, lucro ou
            qualquer resultado. Apostas envolvem risco de perda financeira: use apenas valor que você pode perder. O
            conteúdo é destinado a maiores de 18 anos.
          </p>
        </div>
      </div>
    </section>
  );
}
