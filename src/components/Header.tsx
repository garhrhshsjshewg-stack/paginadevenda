import { BRAND, CHECKOUT_URL, CTA_LABEL, NAV } from '../content';
import { Link } from '../lib/router';
import { Icon } from './Icons';

export function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr__inner">
        <Link to="/" className="brand" ariaLabel={`${BRAND} — página inicial`}>
          <span className="brand__mark" aria-hidden="true">
            <Icon name="ball" />
          </span>
          <span className="brand__text">
            <span className="brand__name">{BRAND}</span>
            <span className="brand__tag">Palpites e análises</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Seções da página">
          {NAV.map((item) => (
            <a className="nav__link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary btn--sm hdr__cta" href={CHECKOUT_URL}>
          {CTA_LABEL}
        </a>
      </div>
    </header>
  );
}
