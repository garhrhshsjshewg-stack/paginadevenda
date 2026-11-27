import { CHECKOUT_URL, CTA_LABEL, PLAN } from '../content';
import { Icon } from './Icons';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__pitch" aria-hidden="true" />
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">
            <Icon name="ball" /> Grupo de palpites e análises
          </span>

          <h1>
            Palpites e análises de futebol <span className="hl">em um só grupo</span>
          </h1>

          <p className="hero__lead">
            Acesso permanente ao grupo, com palpites esportivos e a análise dos jogos que embasa cada leitura. Você paga
            uma vez e continua com acesso — sem mensalidade.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={CHECKOUT_URL}>
              {CTA_LABEL}
            </a>
            <a className="btn btn--ghost" href="#conteudo">
              Ver o que você recebe
            </a>
          </div>

          <ul className="hero__meta">
            <li>
              <Icon name="lock" /> Pagamento único
            </li>
            <li>
              <Icon name="check" /> Acesso permanente
            </li>
            <li>
              <Icon name="shield" /> Conteúdo 18+
            </li>
          </ul>
        </div>

        <aside className="pricecard" aria-label="Resumo do plano permanente">
          <span className="pricecard__tag">{PLAN.name}</span>

          <p className="pricecard__price">
            {PLAN.price}
            <span>{PLAN.payment}</span>
          </p>

          <p className="pricecard__text">{PLAN.summary}</p>

          <ul className="pricecard__list">
            {PLAN.items.map((item) => (
              <li key={item}>
                <Icon name="check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a className="btn btn--primary btn--block" href={CHECKOUT_URL}>
            {CTA_LABEL}
          </a>

          <p className="pricecard__note">Sem mensalidade e sem renovação automática.</p>
        </aside>
      </div>
    </section>
  );
}
