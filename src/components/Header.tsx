import { useEffect, useState } from 'react';
import { BRAND, BRAND_SHORT } from '../content';
import { BrandMark } from './Icons';

type Props = {
  onOpenLead: (planId?: string) => void;
};

const links = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#incluido', label: 'O que você recebe' },
  { href: '#planos', label: 'Planos' },
  { href: '#duvidas', label: 'Dúvidas' },
];

export function Header({ onOpenLead }: Props) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header${stuck ? ' is-stuck' : ''}`}>
      <div className="wrap">
        <div className="header__inner">
          <a href="#topo" className="brand" aria-label={`${BRAND} — início`}>
            <span className="brand__mark">
              <BrandMark />
            </span>
            <span>
              {BRAND_SHORT}
              <span style={{ color: 'var(--brand)' }}>.</span>
            </span>
          </a>

          <nav className="nav" aria-label="Navegação principal">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__cta">
            <button type="button" className="btn btn--primary btn--sm" onClick={() => onOpenLead('trimestral')}>
              Quero entrar
            </button>
          </div>

          <button
            type="button"
            className={`burger${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="menu-mobile" className={`mobile-nav${open ? ' is-open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className="btn btn--primary btn--block"
          onClick={() => {
            setOpen(false);
            onOpenLead('trimestral');
          }}
        >
          Quero entrar no grupo
        </button>
      </div>
    </header>
  );
}
