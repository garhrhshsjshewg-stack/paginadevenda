/**
 * Verificação de responsividade e dos botões de compra.
 *
 * Mede o transbordo horizontal real em várias larguras, confere se todos os
 * botões de compra apontam para o mesmo checkout e valida o conteúdo do plano.
 * Sai com código 1 quando qualquer asserção falha.
 *
 * Uso: node scripts/check-responsive.mjs
 */
import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PLAYWRIGHT = '/opt/appjet/browser/node_modules/playwright/index.js';
const CHROMIUM = '/opt/appjet/browser-binaries/chromium-1234/chrome-linux64/chrome';

const CHECKOUT = 'https://pay.sunize.com.br/KGPybKel';
const CTA = 'QUERO ENTRAR NO GRUPO';
const WIDTHS = [320, 360, 390, 414, 480, 768, 1024, 1280, 1440];
const FORBIDDEN = ['7 dias', 'Plano Essencial', 'Plano Pro', 'R$ 149', 'R$ 79'];

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 4173;
const base = `http://127.0.0.1:${PORT}`;

const failures = [];

async function main() {
  const { chromium } = (await import(PLAYWRIGHT)).default;

  const server = spawn(process.execPath, ['server.js'], {
    cwd: root,
    env: { ...process.env, PORT: String(PORT) },
    stdio: 'ignore',
  });

  try {
    let up = false;
    for (let i = 0; i < 80; i += 1) {
      try {
        const res = await fetch(`${base}/api/health`);
        if (res.ok) {
          up = true;
          break;
        }
      } catch {
        /* servidor ainda subindo */
      }
      await new Promise((r) => setTimeout(r, 250));
    }
    if (!up) throw new Error(`servidor não respondeu em ${base}`);

    const browser = await chromium.launch({ executablePath: CHROMIUM, args: ['--no-sandbox'] });
    const report = [];

    for (const width of WIDTHS) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const pageErrors = [];
      page.on('pageerror', (e) => pageErrors.push(String(e)));

      await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
      await page.getByRole('button', { name: /Sim, tenho 18/ }).click();
      await page.getByRole('button', { name: /Somente essenciais/ }).click();
      await page.waitForTimeout(300);

      const m = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const docW = document.documentElement.scrollWidth;
        const offenders = [];
        for (const el of document.querySelectorAll('body *')) {
          const r = el.getBoundingClientRect();
          if (!r.width && !r.height) continue;
          if (el.classList.contains('skip')) continue; // link de acessibilidade fora da tela por design
          if (r.right > vw + 1 || r.left < -1) {
            offenders.push({
              tag: el.tagName.toLowerCase(),
              cls: String(el.className).slice(0, 60),
              left: Math.round(r.left),
              right: Math.round(r.right),
            });
          }
        }
        const ctas = [...document.querySelectorAll('a.btn--primary')].map((a) => ({
          label: a.textContent.trim(),
          href: a.getAttribute('href'),
          width: Math.round(a.getBoundingClientRect().width),
        }));
        return { vw, docW, offenders, ctas, text: document.body.innerText };
      });

      if (m.docW > m.vw) failures.push(`${width}px: rolagem horizontal de ${m.docW - m.vw}px`);
      if (m.offenders.length) {
        failures.push(`${width}px: ${m.offenders.length} elemento(s) fora da tela — ${JSON.stringify(m.offenders.slice(0, 4))}`);
      }
      if (pageErrors.length) failures.push(`${width}px: erro de página — ${pageErrors.join(' | ')}`);
      if (!m.text.includes('R$ 32,99')) failures.push(`${width}px: preço R$ 32,99 não encontrado`);
      if (!m.text.includes('Plano Permanente')) failures.push(`${width}px: nome do plano não encontrado`);
      for (const item of FORBIDDEN) {
        if (m.text.toLowerCase().includes(item.toLowerCase())) failures.push(`${width}px: texto proibido "${item}"`);
      }
      if (m.ctas.length < 4) failures.push(`${width}px: apenas ${m.ctas.length} botão(ões) de compra`);
      for (const cta of m.ctas) {
        if (cta.href !== CHECKOUT) failures.push(`${width}px: botão "${cta.label}" aponta para ${cta.href}`);
        if (cta.label !== CTA) failures.push(`${width}px: botão com texto inesperado "${cta.label}"`);
        if (cta.width > 460) failures.push(`${width}px: botão largo demais (${cta.width}px)`);
      }

      report.push({
        width,
        overflowX: m.docW - m.vw,
        offenders: m.offenders.length,
        ctas: m.ctas.length,
        ctaWidth: m.ctas[0]?.width ?? 0,
      });
      await page.close();
    }

    // Páginas legais também não podem transbordar.
    for (const slug of ['privacidade', 'termos', 'cookies', 'jogo-responsavel']) {
      const page = await browser.newPage({ viewport: { width: 360, height: 900 } });
      await page.goto(`${base}/${slug}`, { waitUntil: 'domcontentloaded' });
      await page.getByRole('button', { name: /Sim, tenho 18/ }).click();
      await page.getByRole('button', { name: /Somente essenciais/ }).click();
      await page.waitForTimeout(200);
      const over = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const docW = document.documentElement.scrollWidth;
        const text = document.body.innerText.toLowerCase();
        return { vw, docW, text };
      });
      if (over.docW > over.vw) failures.push(`/${slug}: rolagem horizontal de ${over.docW - over.vw}px`);
      for (const item of FORBIDDEN) {
        if (over.text.includes(item.toLowerCase())) failures.push(`/${slug}: texto proibido "${item}"`);
      }
      await page.close();
    }

    await browser.close();

    console.log(JSON.stringify({ ok: failures.length === 0, widths: report, failures }, null, 1));
  } finally {
    server.kill('SIGKILL');
  }

  if (failures.length) {
    console.error(`\nFALHOU (${failures.length}):\n- ${failures.join('\n- ')}`);
    process.exit(1);
  }
  console.log('\nOK: sem rolagem horizontal, botões corretos e plano único em todas as larguras.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
