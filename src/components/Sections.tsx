import {
  FEATURES,
  NOT_PROMISE,
  RECEIVE,
  SAMPLE_ANALYSES,
  STEPS,
  TESTIMONIALS,
  TICKER,
} from '../content';
import { Icon, Star } from './Icons';

export function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((item, index) => (
          <span className="ticker__item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="section" id="incluido" aria-labelledby="features-title">
      <div className="wrap">
        <div className="section__head reveal">
          <span className="eyebrow">O que você recebe</span>
          <h2 className="h2" id="features-title">
            Estrutura de estudo, não sorte
          </h2>
          <p className="lead">
            O grupo existe para você aprender a ler um jogo com critério. Cada publicação é explicada — inclusive quando
            a leitura não se confirma.
          </p>
        </div>

        <div className="grid">
          {FEATURES.map((feature) => (
            <article className="feature reveal" key={feature.title}>
              <span className="feature__icon">
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
    <section className="section" id="como-funciona" aria-labelledby="steps-title">
      <div className="wrap">
        <div className="section__head reveal">
          <span className="eyebrow">Como funciona</span>
          <h2 className="h2" id="steps-title">
            Três passos e você está dentro
          </h2>
          <p className="lead">
            Sem call de vendas, sem promessa milagrosa e sem enrolação. Escolheu o plano, recebeu o convite, começou a
            estudar.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((step) => (
            <article className="step reveal" key={step.n}>
              <span className="step__n">PASSO {step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Compare() {
  return (
    <section className="section" id="transparencia" aria-labelledby="compare-title">
      <div className="wrap">
        <div className="section__head section__head--center reveal">
          <span className="eyebrow">Transparência</span>
          <h2 className="h2" id="compare-title">
            O que está e o que não está no combinado
          </h2>
          <p className="lead">
            Deixamos tudo explícito antes da compra. É melhor você saber exatamente o que está comprando.
          </p>
        </div>

        <div className="grid grid--2">
          <div className="compare compare--yes reveal">
            <h3 className="compare__title">
              <Icon name="check" strokeWidth={2.4} />
              O que você recebe
            </h3>
            <ul>
              {RECEIVE.map((item) => (
                <li key={item}>
                  <Icon name="check" strokeWidth={2.6} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="compare compare--no reveal">
            <h3 className="compare__title">
              <Icon name="alert" />
              O que não prometemos
            </h3>
            <ul>
              {NOT_PROMISE.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Samples() {
  return (
    <section className="section" id="exemplos" aria-labelledby="samples-title">
      <div className="wrap">
        <div className="section__head reveal">
          <span className="eyebrow">Por dentro do grupo</span>
          <h2 className="h2" id="samples-title">
            Como é uma análise por dentro
          </h2>
          <p className="lead">
            Três exemplos da estrutura que publicamos todos os dias: o mercado estudado, os números que sustentam a
            leitura e o risco envolvido. Os nomes dos times são ilustrativos.
          </p>
        </div>

        <div className="grid">
          {SAMPLE_ANALYSES.map((sample, index) => (
            <article className="sample reveal" key={`${sample.league}-${index}`}>
              <div className="sample__head">
                <div>
                  <p className="sample__league">{sample.league}</p>
                  <h3>{sample.match}</h3>
                  <p className="sample__market">
                    {sample.time} · {sample.market}
                  </p>
                </div>
                <span className="chip">Exemplo</span>
              </div>

              <p className="metric__label">{sample.readLabel}</p>

              <div className="sample__metrics">
                {sample.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="metric__row">
                      <span className="metric__label">{metric.label}</span>
                      <span className="metric__hint">{metric.hint}</span>
                    </div>
                    <div className="metric__track" role="img" aria-label={`${metric.label}: ${metric.value} de 100`}>
                      <div className="metric__fill" style={{ width: `${metric.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <p className="sample__note">{sample.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="quotes-title">
      <div className="wrap">
        <div className="section__head reveal">
          <span className="eyebrow">Quem já participa</span>
          <h2 className="h2" id="quotes-title">
            Relatos sobre o método, não sobre dinheiro
          </h2>
          <p className="lead">
            Reunimos depoimentos sobre organização, clareza e gestão de risco. Nenhum deles é promessa de resultado.
          </p>
        </div>

        <div className="grid">
          {TESTIMONIALS.map((testimonial) => (
            <article className="quote reveal" key={testimonial.name}>
              <div className="quote__stars" aria-hidden="true">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p>“{testimonial.text}”</p>
              <footer>
                <span className="quote__avatar" aria-hidden="true">
                  {testimonial.name.slice(0, 1)}
                </span>
                <span>
                  <span className="quote__name">{testimonial.name}</span>
                  <br />
                  <span className="quote__role">{testimonial.role}</span>
                </span>
              </footer>
            </article>
          ))}
        </div>

        <p className="plans__foot">
          Depoimentos de assinantes identificados por iniciais, com autorização de uso. São experiências individuais e não
          representam garantia de resultado para outros assinantes.
        </p>
      </div>
    </section>
  );
}

export function CtaBand({ onOpenLead }: { onOpenLead: (planId?: string) => void }) {
  return (
    <section className="section section--tight" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="cta-band reveal">
          <h2 id="cta-title">Comece a estudar com método — sem ilusão de dinheiro fácil</h2>
          <p>
            Acesso imediato ao grupo, material de gestão de banca e 7 dias de garantia de arrependimento. Se não fizer
            sentido para você, devolvemos o valor integral.
          </p>
          <div className="cta-band__actions">
            <button type="button" className="btn btn--primary" onClick={() => onOpenLead('trimestral')}>
              Quero entrar no grupo
              <Icon name="arrow" />
            </button>
            <a href="#planos" className="btn btn--ghost">
              Comparar planos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalCallout() {
  return (
    <section className="section section--tight" aria-labelledby="legal-title">
      <div className="wrap">
        <div className="legal-callout reveal">
          <span className="legal-callout__head">
            <Icon name="alert" />
            Aviso importante · jogo responsável
          </span>
          <h2 id="legal-title">Este produto não garante ganhos</h2>
          <p>
            Apostas esportivas são atividade de risco e podem gerar perda financeira. O Nexo Palpites é um serviço de
            conteúdo, análise e educação esportiva: não é casa de apostas, não recebe depósitos, não opera apostas e não
            administra banca de terceiros. Nenhuma análise aqui publicada é promessa, garantia ou projeção de lucro.
            Resultados passados não garantem resultados futuros. Conteúdo destinado exclusivamente a maiores de 18 anos.
          </p>
          <p>
            Aposte apenas valores que você pode perder sem comprometer sua vida financeira. Se o jogo deixou de ser
            diversão, procure ajuda.
          </p>
          <div className="legal-callout__links">
            <a href="https://www.cvv.org.br" target="_blank" rel="noopener noreferrer">
              CVV · 188 (24h)
            </a>
            <a href="https://jogadoresanonimos.org.br" target="_blank" rel="noopener noreferrer">
              Jogadores Anônimos
            </a>
            <a href="/jogo-responsavel">Jogo responsável</a>
            <a href="/termos">Termos de uso</a>
          </div>
        </div>
      </div>
    </section>
  );
}
