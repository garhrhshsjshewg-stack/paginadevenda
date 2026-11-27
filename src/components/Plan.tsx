import { CHECKOUT_URL, CTA_LABEL, PLAN } from '../content';
import { Icon } from './Icons';

export function PlanSection() {
  return (
    <section className="section" id="plano">
      <div className="wrap">
        <header className="sec-head sec-head--center">
          <span className="eyebrow">
            <Icon name="lock" /> Plano disponível
          </span>
          <h2>Um plano, um pagamento</h2>
          <p className="lead">Não existe outro plano, mensalidade ou cobrança recorrente.</p>
        </header>

        <div className="plan">
          <div className="plan__card">
            <div className="plan__top">
              <h3>{PLAN.name}</h3>
              <span className="plan__badge">Acesso permanente</span>
            </div>

            <p className="plan__price">
              {PLAN.price}
              <span>{PLAN.payment}</span>
            </p>

            <ul className="plan__list">
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

            <p className="plan__note">
              Pagamento processado pela Sunize. Conteúdo destinado a maiores de 18 anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
