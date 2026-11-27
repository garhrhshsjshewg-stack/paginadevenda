import { LEGAL_DOCS, findDoc } from '../content/legal';
import { openCookiePreferences } from '../lib/consent';
import { Link } from '../lib/router';
import { Icon } from './Icons';

export function LegalPage({ slug }: { slug: string }) {
  const doc = findDoc(slug);

  if (!doc) {
    return (
      <div className="wrap legal">
        <Link to="/" className="legal__back">
          <Icon name="arrow" /> Voltar para o site
        </Link>
        <h1>Página não encontrada</h1>
        <p className="legal__updated">O endereço acessado não existe.</p>
      </div>
    );
  }

  return (
    <main className="wrap legal">
      <Link to="/" className="legal__back">
        <Icon name="arrow" /> Voltar para o site
      </Link>

      <h1>{doc.title}</h1>
      <p className="legal__updated">Última atualização: {doc.updated}</p>
      {doc.intro ? <p className="lead">{doc.intro}</p> : null}

      <div className="legal__body">
        {doc.sections.map((section) => (
          <section className="legal__block" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list ? (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {doc.note ? <p className="legal__note">{doc.note}</p> : null}
      </div>

      <nav className="legal__nav" aria-label="Outros documentos">
        {LEGAL_DOCS.filter((item) => item.slug !== doc.slug).map((item) => (
          <Link key={item.slug} to={`/${item.slug}`}>
            {item.title}
          </Link>
        ))}
        <button
          type="button"
          onClick={openCookiePreferences}
          style={{
            padding: '8px 14px',
            borderRadius: 999,
            border: '1px solid var(--line)',
            background: 'var(--surface)',
            color: 'var(--muted)',
            fontSize: '0.8rem',
            fontWeight: 600,
          }}
        >
          Preferências de cookies
        </button>
      </nav>
    </main>
  );
}
