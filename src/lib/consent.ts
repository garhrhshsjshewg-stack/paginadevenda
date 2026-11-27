import { CONSENT_KEY, CONSENT_VERSION } from '../content';

export type ConsentState = {
  id: string;
  version: string;
  ts: string;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export const OPEN_COOKIE_EVENT = 'nexo:open-cookie';

function makeId(): string {
  const random = Math.random().toString(36).slice(2, 10);
  return `c_${Date.now().toString(36)}_${random}`;
}

export function readConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.version !== CONSENT_VERSION) return null;
    return {
      id: parsed.id ?? makeId(),
      version: CONSENT_VERSION,
      ts: parsed.ts ?? new Date().toISOString(),
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

export function saveConsent(prefs: { analytics: boolean; marketing: boolean }): ConsentState {
  const state: ConsentState = {
    id: makeId(),
    version: CONSENT_VERSION,
    ts: new Date().toISOString(),
    necessary: true,
    analytics: prefs.analytics,
    marketing: prefs.marketing,
  };

  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  } catch {
    /* modo privado / storage bloqueado: o banner reaparece na próxima visita */
  }

  // Registro do consentimento no servidor (prova de auditoria).
  void fetch('/api/consent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: state.id, analytics: state.analytics, marketing: state.marketing, version: state.version }),
  }).catch(() => undefined);

  // Só depois do consentimento carregamos qualquer medição.
  window.dispatchEvent(new CustomEvent('nexo:consent-changed', { detail: state }));

  return state;
}

export function openCookiePreferences(): void {
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_EVENT));
}
