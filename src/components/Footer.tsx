import { BRAND, SUPPORT_EMAIL, SUPPORT_HOURS, SUPPORT_WHATSAPP } from '../content';
import { openCookiePreferences } from '../lib/consent';
import { Link } from '../lib/router';
import { BrandMark } from './Icons';

type Props = {
  onOpenLead: (planId?: string) => void;
};

export function Footer({ onOpenLead }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__about">
            <span className="brand">
              <span className="brand__mark">
                <BrandMark />
              </span>
              <span>{BRAND}</span>
            </span>
            <p>
              Grupo de análises esportivas e educação sobre leitura de mercado. Conteúdo para maiores de 18 anos, sem
              promessa de lucro.
            </p>
            <p style={{ marginTop: 10 }}>
              {SUPPORT_EMAIL}
              <br />
              WhatsApp {SUPPORT_WHATSAPP} · {SUPPORT_HOURS}
            </p>
          </div>

          <div>
            <h4>Produto</h4>
            <div className="footer__links">
              <a href="#como-funciona">Como funciona</a>
              <a href="#incluido">O que você recebe</a>
              <a href="#planos">Planos</a>
              <a href="#duvidas">Dúvidas</a>
              <button type="button" onClick={() => onOpenLead('trimestral')}>
                Falar com a equipe
              </button>
            </div>
          </div>

          <div>
            <h4>Legal</h4>
            <div className="footer__links">
              <Link to="/termos">Termos de uso</Link>
              <Link to="/privacidade">Política de privacidade</Link>
              <Link to="/cookies">Política de cookies</Link>
              <Link to="/jogo-responsavel">Jogo responsável</Link>
            </div>
          </div>

          <div>
            <h4>Privacidade</h4>
            <div className="footer__links">
              <button type="button" onClick={openCookiePreferences}>
                Preferências de cookies
              </button>
              <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer">
                ANPD
              </a>
              <a href="https://www.cvv.org.br" target="_blank" rel="noopener noreferrer">
                CVV · 188
              </a>
              <a href="https://jogadoresanonimos.org.br" target="_blank" rel="noopener noreferrer">
                Jogadores Anônimos
              </a>
            </div>
          </div>
        </div>

        <p className="footer__disclaimer">
          <strong>Aviso de risco:</strong> apostas esportivas envolvem risco real de perda financeira. Este site e o
          grupo {BRAND} oferecem conteúdo informativo e educacional; não somos casa de apostas, não recebemos depósitos,
          não operamos apostas e não garantimos qualquer resultado, ganho ou retorno. Resultados passados não garantem
          resultados futuros. Proibido para menores de 18 anos. Se o jogo deixou de ser diversão, procure ajuda: CVV 188
          (24h) ou Jogadores Anônimos Brasil.
        </p>

        <div className="footer__bottom">
          <span>
            © {year} {BRAND}. Todos os direitos reservados.
          </span>
          <span>CNPJ 00.000.000/0001-00 · São Paulo/SP</span>
        </div>
      </div>
    </footer>
  );
}
