import { CHECKOUT_URL, PLANS } from '../content';
import { Icon } from './Icons';

type Props = {
  onOpenLead: (planId?: string) => void;
};

export function Plans({ onOpenLead }: Props) {
  return (
    <section className="section" id="planos" aria-labelledby="plans-title">
      <div className="wrap">
        <div className="section__head section__head--center reveal">
          <span className="eyebrow">Planos</span>
          <h2 className="h2" id="plans-title">
            Escolha quanto tempo quer estudar
          </h2>
          <p className="lead">
            Todos os planos dão acesso ao mesmo grupo e ao mesmo material. A diferença é o tempo de acesso e os extras.
            Sem renovação automática escondida.
          </p>
        </div>

        <div className="plans">
          {PLANS.map((plan) => (
            <article className={`plan reveal${plan.featured ? ' plan--featured' : ''}`} key={plan.id}>
              {plan.badge ? <span className="plan__badge">{plan.badge}</span> : null}

              <p className="plan__name">{plan.name}</p>

              <p className="plan__price">
                <span className="plan__currency">R$</span>
                <span className="plan__value">{plan.price}</span>
                <span className="plan__cents">,{plan.cents}</span>
              </p>
              <p className="plan__period">{plan.period}</p>

              <p className="plan__tagline">{plan.tagline}</p>

              {plan.save ? (
                <span className="plan__save">
                  <Icon name="check" strokeWidth={2.6} />
                  {plan.save}
                </span>
              ) : null}

              <ul className="plan__perks">
                {plan.perks.map((perk) => (
                  <li key={perk}>
                    <Icon name="check" strokeWidth={2.6} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <div className="plan__action">
                {CHECKOUT_URL ? (
                  <a
                    className={`btn btn--block ${plan.featured ? 'btn--primary' : 'btn--ghost'}`}
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assinar o plano {plan.name.toLowerCase()}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={`btn btn--block ${plan.featured ? 'btn--primary' : 'btn--ghost'}`}
                    onClick={() => onOpenLead(plan.id)}
                  >
                    Quero o plano {plan.name.toLowerCase()}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="plans__foot">
          Pagamento único por período, sem cobrança recorrente automática. Você tem <strong>7 dias corridos</strong> para
          desistir com reembolso integral (art. 49 do Código de Defesa do Consumidor). Produto destinado a maiores de 18
          anos.
        </p>
      </div>
    </section>
  );
}
