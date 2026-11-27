import { SAMPLE_ANALYSES } from '../content';
import { Icon } from './Icons';

type Props = {
  onOpenLead: (planId?: string) => void;
};

export function Hero({ onOpenLead }: Props) {
  const sample = SAMPLE_ANALYSES[0];

  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="wrap">
        <div className="hero__layout">
          <div>
            <span className="eyebrow">Grupo de análises esportivas</span>

            <h1 className="hero__title" id="hero-title">
              Palpites com <em>análise de verdade</em> — e nenhuma promessa de dinheiro fácil.
            </h1>

            <p className="hero__sub">
              Um grupo de estudo esportivo com leitura de dados, contexto de jogo e material de gestão de risco. Você
              entende o raciocínio de cada análise e decide o que faz sentido para você.
            </p>

            <div className="hero__actions">
              <button type="button" className="btn btn--primary" onClick={() => onOpenLead('trimestral')}>
                Quero entrar no grupo
                <Icon name="arrow" className="btn__icon" />
              </button>
              <a href="#planos" className="btn btn--ghost">
                Ver planos e preços
              </a>
            </div>

            <p className="hero__note">
              <Icon name="shield" />
              <span>
                Conteúdo educativo e de entretenimento para maiores de 18 anos. <strong>Não garantimos ganhos</strong>:
                apostas envolvem risco real de perda. Aposte apenas o que você pode perder.
              </span>
            </p>

            <div className="hero__badges">
              <span className="pill pill--18">+18 anos</span>
              <span className="pill">Sem promessa de lucro</span>
              <span className="pill">7 dias de garantia</span>
              <span className="pill">Cookies só com consentimento</span>
            </div>
          </div>

          <div className="card hero-card" aria-label="Exemplo ilustrativo de análise">
            <div className="hero-card__top">
              <span className="chip">Exemplo ilustrativo</span>
              <span className="hero-card__time">{sample.time}</span>
            </div>

            <h2 className="hero-card__match">{sample.match}</h2>
            <p className="hero-card__league">
              {sample.league} · Mercado: {sample.market}
            </p>

            <div className="hero-card__metrics">
              {sample.metrics.map((metric, index) => (
                <div key={metric.label}>
                  <div className="metric__row">
                    <span className="metric__label">{metric.label}</span>
                    <span className="metric__hint">{metric.hint}</span>
                  </div>
                  <div
                    className="metric__track"
                    role="img"
                    aria-label={`${metric.label}: ${metric.value} de 100`}
                  >
                    <div
                      className="metric__fill"
                      style={{ width: `${metric.value}%`, animationDelay: `${index * 120}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="hero-card__foot">
              <Icon name="alert" />
              <span>
                Conteúdo demonstrativo. Não é recomendação de aposta nem garantia de resultado. Resultados passados não
                garantem resultados futuros.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
