import { useEffect, useRef, useState } from 'react';
import { PLANS } from '../content';
import { Icon } from './Icons';

type Props = {
  open: boolean;
  planId: string;
  onClose: () => void;
};

type Status = 'idle' | 'sending' | 'done' | 'error';

export function LeadModal({ open, planId, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [plan, setPlan] = useState(planId);
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setPlan(planId);
    setStatus('idle');
    setError('');
    document.body.classList.add('is-locked');
    const timer = window.setTimeout(() => firstField.current?.focus(), 120);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [open, planId, onClose]);

  if (!open) return null;

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (name.trim().length < 2) {
      setError('Informe seu nome.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError('Informe um e-mail válido.');
      return;
    }
    if (!accepted) {
      setError('Para continuar, é preciso concordar com os termos e a política de privacidade.');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), whatsapp: whatsapp.trim(), plan }),
      });
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setError(data.error ?? 'Não foi possível enviar agora. Tente novamente em instantes.');
        setStatus('error');
        return;
      }
      setStatus('done');
    } catch {
      setError('Falha de conexão. Verifique sua internet e tente novamente.');
      setStatus('error');
    }
  };

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="lead-title" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div className="modal">
        <div className="modal__head">
          <div>
            <h2 id="lead-title">{status === 'done' ? 'Recebemos seus dados' : 'Quero entrar no grupo'}</h2>
            {status !== 'done' ? (
              <p className="modal__sub">
                Deixe seu contato e a nossa equipe envia o link de acesso e tira suas dúvidas. Sem cobrança automática e
                sem promessa de ganhos.
              </p>
            ) : null}
          </div>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Fechar">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {status === 'done' ? (
          <div style={{ marginTop: 18 }}>
            <div className="form__ok">
              <strong>Pedido registrado com sucesso</strong>
              <p>
                Vamos falar com você no e-mail <strong>{email}</strong> com os próximos passos do plano{' '}
                {PLANS.find((item) => item.id === plan)?.name ?? 'escolhido'}.
              </p>
              <p>Lembre-se: conteúdo para maiores de 18 anos. Nenhum resultado é garantido.</p>
            </div>
            <button type="button" className="btn btn--ghost btn--block" style={{ marginTop: 14 }} onClick={onClose}>
              Fechar
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="lead-name">Nome</label>
              <input
                id="lead-name"
                ref={firstField}
                type="text"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="lead-email">E-mail</label>
              <input
                id="lead-email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="voce@email.com"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="lead-whats">WhatsApp (opcional)</label>
              <input
                id="lead-whats"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={whatsapp}
                onChange={(event) => setWhatsapp(event.target.value)}
                placeholder="(11) 90000-0000"
              />
            </div>

            <div className="field">
              <label htmlFor="lead-plan">Plano de interesse</label>
              <select id="lead-plan" value={plan} onChange={(event) => setPlan(event.target.value)}>
                {PLANS.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} — R$ {item.price},{item.cents} {item.period}
                  </option>
                ))}
              </select>
            </div>

            <label className="check">
              <input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} />
              <span>
                Declaro ter 18 anos ou mais, li e aceito os <a href="/termos" style={{ color: 'var(--brand)' }}>Termos de Uso</a> e
                a <a href="/privacidade" style={{ color: 'var(--brand)' }}>Política de Privacidade</a>, e entendo que o
                produto não garante ganhos.
              </span>
            </label>

            {error ? <p className="form__error">{error}</p> : null}

            <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar meus dados'}
              {status === 'sending' ? null : <Icon name="arrow" />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
