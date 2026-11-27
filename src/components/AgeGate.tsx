import { useEffect, useState } from 'react';
import { AGE_KEY } from '../content';
import { Link } from '../lib/router';

export type AgeState = 'unknown' | 'ok' | 'denied';

export function readAge(): AgeState {
  try {
    const value = window.localStorage.getItem(AGE_KEY);
    if (value === 'ok') return 'ok';
    if (value === 'denied') return 'denied';
  } catch {
    /* storage indisponível: pergunta novamente */
  }
  return 'unknown';
}

export function writeAge(state: 'ok' | 'denied'): void {
  try {
    window.localStorage.setItem(AGE_KEY, state);
  } catch {
    /* ignora */
  }
}

type Props = {
  state: AgeState;
  onConfirm: () => void;
  onDeny: () => void;
};

export function AgeGate({ state, onConfirm, onDeny }: Props) {
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    document.body.classList.add('is-locked');
    return () => document.body.classList.remove('is-locked');
  }, []);

  return (
    <div className="agegate" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div className="agegate__card">
        <span className="agegate__mark" aria-hidden="true">
          18+
        </span>

        {state === 'denied' ? (
          <>
            <h1 id="age-title">Acesso restrito</h1>
            <p>
              Este conteúdo é destinado exclusivamente a pessoas maiores de 18 anos. Como você informou ser menor de
              idade, o acesso não é permitido.
            </p>
            <div className="agegate__blocked">
              Se você acha que esse conteúdo não é adequado para você, converse com um adulto de confiança. Se o assunto
              for jogo ou aposta, existem canais gratuitos de apoio.
            </div>
            <div className="agegate__actions">
              <a className="btn btn--ghost btn--block" href="https://www.cvv.org.br" target="_blank" rel="noopener noreferrer">
                CVV · 188 (24h, gratuito)
              </a>
              <button type="button" className="btn btn--soft btn--block" onClick={onDeny}>
                Voltar
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 id="age-title">Você tem 18 anos ou mais?</h1>
            <p>
              Este site fala sobre análises de eventos esportivos e apostas. O conteúdo é destinado apenas a maiores de
              18 anos e não promete ganhos.
            </p>
            <div className="agegate__actions">
              <button type="button" className="btn btn--primary btn--block" onClick={onConfirm}>
                Sim, tenho 18 anos ou mais
              </button>
              <button
                type="button"
                className="btn btn--ghost btn--block"
                onClick={() => {
                  setShowHelp(true);
                  onDeny();
                }}
              >
                Não tenho 18 anos
              </button>
            </div>

            {showHelp ? null : (
              <p className="agegate__small">
                Ao confirmar, você declara ter idade legal para acessar conteúdo sobre apostas esportivas. Saiba mais em{' '}
                <Link to="/jogo-responsavel">jogo responsável</Link>.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
