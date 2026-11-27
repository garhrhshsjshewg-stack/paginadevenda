import { useEffect, useState } from 'react';
import { OPEN_COOKIE_EVENT, readConsent, saveConsent } from '../lib/consent';
import { Link } from '../lib/router';
import { Icon } from './Icons';

type Prefs = { analytics: boolean; marketing: boolean };

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ analytics: false, marketing: false });

  useEffect(() => {
    const stored = readConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setPrefs({ analytics: stored.analytics, marketing: stored.marketing });
    }

    const open = () => {
      const current = readConsent();
      if (current) setPrefs({ analytics: current.analytics, marketing: current.marketing });
      setExpanded(true);
      setVisible(true);
    };

    window.addEventListener(OPEN_COOKIE_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_EVENT, open);
  }, []);

  const decide = (next: Prefs) => {
    saveConsent(next);
    setPrefs(next);
    setVisible(false);
    setExpanded(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie" role="region" aria-label="Preferências de cookies">
      <div className="cookie__card">
        <p className="cookie__title">
          <Icon name="cookie" />
          A gente usa cookies — e você decide quais
        </p>

        <p className="cookie__text">
          Usamos cookies <strong>necessários</strong> para o site funcionar (como guardar a sua escolha de idade e de
          consentimento). Cookies de <strong>análise</strong> e <strong>marketing</strong> ficam desligados até você
          autorizar. Detalhes na <Link to="/cookies">Política de Cookies</Link> e na{' '}
          <Link to="/privacidade">Política de Privacidade</Link>.
        </p>

        {expanded ? (
          <div className="cookie__cats">
            <div className="cookie__cat">
              <div>
                <strong>Estritamente necessários</strong>
                <span>Garantem o funcionamento do site e o registro do seu consentimento. Não podem ser desativados.</span>
              </div>
              <button type="button" className="switch" role="switch" aria-checked="true" aria-label="Cookies necessários (sempre ativos)" disabled />
            </div>

            <div className="cookie__cat">
              <div>
                <strong>Análise e desempenho</strong>
                <span>Ajudam a entender quais páginas são úteis, de forma agregada. Desligado por padrão.</span>
              </div>
              <button
                type="button"
                className="switch"
                role="switch"
                aria-checked={prefs.analytics}
                aria-label="Ativar cookies de análise"
                onClick={() => setPrefs((value) => ({ ...value, analytics: !value.analytics }))}
              />
            </div>

            <div className="cookie__cat">
              <div>
                <strong>Marketing</strong>
                <span>Permitem medir campanhas e mostrar conteúdo em outras plataformas. Desligado por padrão.</span>
              </div>
              <button
                type="button"
                className="switch"
                role="switch"
                aria-checked={prefs.marketing}
                aria-label="Ativar cookies de marketing"
                onClick={() => setPrefs((value) => ({ ...value, marketing: !value.marketing }))}
              />
            </div>
          </div>
        ) : null}

        <div className="cookie__actions">
          <button type="button" className="btn btn--primary" onClick={() => decide({ analytics: true, marketing: true })}>
            Aceitar todos
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => decide({ analytics: false, marketing: false })}>
            Somente essenciais
          </button>
          {expanded ? (
            <button type="button" className="btn btn--soft" onClick={() => decide(prefs)}>
              Salvar preferências
            </button>
          ) : (
            <button type="button" className="btn btn--soft" onClick={() => setExpanded(true)}>
              Personalizar
            </button>
          )}
          <button
            type="button"
            className="btn btn--link"
            onClick={() => {
              saveConsent({ analytics: false, marketing: false });
              setVisible(false);
              setExpanded(false);
            }}
          >
            Recusar opcionais e fechar
          </button>
        </div>
      </div>
    </div>
  );
}
