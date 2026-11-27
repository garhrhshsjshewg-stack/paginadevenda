import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
const DIST = path.join(__dirname, 'dist');
const DATA_DIR = path.join(__dirname, 'data');
const APP_NAME = 'Nexo Palpites';

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', true);

app.use(express.json({ limit: '32kb' }));

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=()');
  next();
});

/* ---------- persistência simples em NDJSON ---------- */
function persist(fileName, record) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.appendFileSync(path.join(DATA_DIR, fileName), `${JSON.stringify(record)}\n`, 'utf8');
    return true;
  } catch (error) {
    console.error(`[${APP_NAME}] falha ao gravar ${fileName}:`, error?.message ?? error);
    return false;
  }
}

/* ---------- rate limit em memória ---------- */
const hits = new Map();

function rateLimit(key, limit, windowMs) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now - entry.start > windowMs) {
    hits.set(key, { start: now, count: 1 });
    return true;
  }
  entry.count += 1;
  return entry.count <= limit;
}

setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of hits) {
    if (now - entry.start > 3_600_000) hits.delete(key);
  }
}, 600_000).unref?.();

function clientIp(req) {
  return req.ip ?? req.socket?.remoteAddress ?? 'unknown';
}

const isEmail = (value) => typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

/* ---------- API ---------- */
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: APP_NAME, uptime: Math.round(process.uptime()) });
});

app.post('/api/consent', (req, res) => {
  const { id, analytics, marketing, version } = req.body ?? {};

  if (!rateLimit(`consent:${clientIp(req)}`, 40, 600_000)) {
    return res.status(429).json({ ok: false, error: 'Muitas requisições. Tente novamente mais tarde.' });
  }

  const record = {
    kind: 'consent',
    id: typeof id === 'string' && id.length <= 64 ? id : null,
    analytics: Boolean(analytics),
    marketing: Boolean(marketing),
    version: typeof version === 'string' ? version.slice(0, 20) : null,
    at: new Date().toISOString(),
  };

  persist('consents.ndjson', record);
  return res.json({ ok: true, recorded: record.at });
});

app.post('/api/lead', (req, res) => {
  const { name, email, whatsapp, plan } = req.body ?? {};

  if (!rateLimit(`lead:${clientIp(req)}`, 6, 3_600_000)) {
    return res.status(429).json({ ok: false, error: 'Muitos envios. Aguarde um pouco e tente novamente.' });
  }

  const cleanName = typeof name === 'string' ? name.trim().slice(0, 120) : '';
  const cleanEmail = typeof email === 'string' ? email.trim().slice(0, 160) : '';
  const cleanPhone = typeof whatsapp === 'string' ? whatsapp.replace(/[^\d+\s()\-]/g, '').slice(0, 30) : '';
  const cleanPlan = typeof plan === 'string' ? plan.slice(0, 40) : 'nao-informado';

  if (cleanName.length < 2) {
    return res.status(400).json({ ok: false, error: 'Informe seu nome completo.' });
  }
  if (!isEmail(cleanEmail)) {
    return res.status(400).json({ ok: false, error: 'Informe um e-mail válido.' });
  }

  const record = {
    kind: 'lead',
    id: `lead_${Date.now().toString(36)}`,
    name: cleanName,
    email: cleanEmail.toLowerCase(),
    whatsapp: cleanPhone,
    plan: cleanPlan,
    at: new Date().toISOString(),
  };

  persist('leads.ndjson', record);

  return res.status(201).json({ ok: true, id: record.id });
});

/* ---------- front-end estático ---------- */
app.use(
  express.static(DIST, {
    index: false,
    maxAge: '1h',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    },
  }),
);

app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ ok: false, error: 'Rota não encontrada.' });
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return res.status(405).json({ ok: false, error: 'Método não permitido.' });
  }
  const indexFile = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexFile)) {
    return next(new Error('Build ausente: rode "npm run build" antes de iniciar o servidor.'));
  }
  res.setHeader('Cache-Control', 'no-cache');
  return res.sendFile(indexFile);
});

app.use((error, _req, res, _next) => {
  console.error(`[${APP_NAME}]`, error?.message ?? error);
  res.status(500).type('text/plain').send('Erro interno do servidor.');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[${APP_NAME}] servidor em http://0.0.0.0:${PORT}`);
});
