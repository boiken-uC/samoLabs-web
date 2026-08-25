// Prod-Pruefung samolabs.de: samoOrder-Detailseite, H-Scroll, Pageerrors, Screenshots.
// Laeuft auf samosrv mit dem Puppeteer aus ~/led-render.
const puppeteer = require('/home/aim/led-render/node_modules/puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const fehler = [];
  const ergebnis = {};

  async function neueSeite(vp) {
    const page = await browser.newPage();
    page.on('pageerror', e => fehler.push(vp.name + ': ' + e.message));
    await page.setViewport(vp);
    return page;
  }

  // ── 1) Mobil 390px: Startseite ──
  const mobilVp = { name: 'mobil-start', width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 };
  let page = await neueSeite(mobilVp);
  await page.goto('https://samolabs.de/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1800));
  ergebnis.mobilStart = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth
  }));

  // Navigation real anklicken: Produktkachel samoOrder -> Detailseite
  const kachelDa = await page.evaluate(() => !!document.querySelector('[data-go="detail:order"]'));
  ergebnis.kachelDa = kachelDa;
  if (kachelDa) {
    await page.evaluate(() => { document.querySelector('[data-go="detail:order"]').click(); });
    await new Promise(r => setTimeout(r, 1500));
    ergebnis.mobilDetail = await page.evaluate(() => ({
      seiteAn: !!document.querySelector('.page[data-page="detail"].on'),
      titel: (document.getElementById('d-titel') || {}).textContent || '',
      icons: document.querySelectorAll('.q-ic').length,
      hatBogenPunkt: document.body.innerText.indexOf('Aufkleber-Bögen auf Vorrat') !== -1,
      hatBogenBlock: document.body.innerText.indexOf('Der QR-Bogen liegt bereit') !== -1,
      hatFaq: document.body.innerText.indexOf('Wie kommen die QR-Codes auf die Tische?') !== -1,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    }));
    // Screenshot der samoOrder-Sektion (Punkte mit Icons) mobil
    const sek = await page.$('#detail .sec .split');
    if (sek) await sek.screenshot({ path: '/tmp/samoorder-mobil-390.png' });
  }
  await page.close();

  // ── 2) Desktop 1440px: Detailseite direkt per Hash ──
  const deskVp = { name: 'desktop', width: 1440, height: 1000, deviceScaleFactor: 1 };
  page = await neueSeite(deskVp);
  await page.goto('https://samolabs.de/#detail:order', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1800));
  ergebnis.desktop = await page.evaluate(() => ({
    seiteAn: !!document.querySelector('.page[data-page="detail"].on'),
    icons: document.querySelectorAll('.q-ic').length,
    hatBogenBlock: document.body.innerText.indexOf('Der QR-Bogen liegt bereit') !== -1,
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth
  }));
  const sekD = await page.$('#detail .sec .split');
  if (sekD) await sekD.screenshot({ path: '/tmp/samoorder-desktop.png' });
  // Zusatz: Tab-Navigation klickbar? Zurueck zu Produkte
  await page.evaluate(() => { const el = document.querySelector('[data-go="produkte"]'); if (el) el.click(); });
  await new Promise(r => setTimeout(r, 1000));
  ergebnis.navZurueck = await page.evaluate(() => {
    const on = document.querySelector('.page.on');
    return on ? on.getAttribute('data-page') : null;
  });
  await page.close();

  await browser.close();
  ergebnis.pageerrors = fehler;
  console.log(JSON.stringify(ergebnis, null, 2));
})().catch(e => { console.error('FEHLER', e); process.exit(1); });
