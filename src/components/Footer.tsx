import { BRAND, NAV, SUPPORT_EMAIL, SUPPORT_HOURS, SUPPORT_WHATSAPP, TAGLINE } from '../content';
import { LEGAL_DOCS } from '../content/legal';
import { openCookiePreferences } from '../lib/consent';
import { Link } from '../lib/router';
import { Icon } from './Icons';

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div className="ftr__brand">
            <span className="brand__mark" aria-hidden="true">
              <Icon name="ball" />
            </span>
            <div>
              <p className="ftr__name">{BRAND}</p>
              <p className="ftr__about">{TAGLINE}. Acesso permanente ao grupo, com pagamento único.</p>
            </div>
          </div>

          <nav className="ftr__col" aria-label="Seções">
            <p className="ftr__title">Navegação</p>
            <ul className="ftr__list">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a className="ftr__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="ftr__col" aria-label="Documentos legais">
            <p className="ftr__title">Documentos</p>
            <ul className="ftr__list">
              {LEGAL_DOCS.map((doc) => (
                <li key={doc.slug}>
                  <Link className="ftr__link" to={`/${doc.slug}`}>
                    {doc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ftr__col">
            <p className="ftr__title">Contato</p>
            <ul className="ftr__list">
              <li className="ftr__contact">
                <Icon name="mail" />
                <a className="ftr__link" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li className="ftr__contact">
                <Icon name="users" />
                <span>{SUPPORT_WHATSAPP}</span>
              </li>
              <li className="ftr__contact">
                <Icon name="lock" />
                <span>{SUPPORT_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="ftr__bottom">
          <p className="ftr__note">
            © {new Date().getFullYear()} {BRAND}. Conteúdo destinado a maiores de 18 anos. Não há promessa de ganho.
            Apostas envolvem risco de perda financeira.
          </p>

          <div className="ftr__legal">
            <button type="button" className="btn btn--link" onClick={openCookiePreferences}>
              Preferências de cookies
            </button>
            <a className="btn btn--link" href="https://www.cvv.org.br" target="_blank" rel="noopener noreferrer">
              CVV · 188
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
