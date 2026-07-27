# -*- coding: utf-8 -*-
"""Erzeugt fuer jeden Seitenbereich eine eigene HTML-Datei.

Hintergrund: Die Website schaltet im Browser zwischen Bereichen um. Fuer
Suchmaschinen ist das eine einzige Seite — Unterseiten tauchen dann nicht
als eigene Treffer auf. Dieses Skript legt fuer jeden Bereich eine echte
Datei an (produkte.html, loesungen.html, …), die denselben Inhalt zeigt
und beim Aufruf direkt den passenden Bereich oeffnet.

Aufruf:  python scripts/seiten_erzeugen.py
"""
import io, os, re, sys

sys.stdout.reconfigure(encoding='utf-8')
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))

BASIS = 'https://samolabs.de'

# Bereich -> (Dateiname, Titel, Beschreibung)
SEITEN = {
    'ueber':      ('ueber-uns.html', 'Über uns',
                   'Softwareentwicklung aus Jülich mit Wurzeln in Sarajevo. Wie aus Auftragsarbeit für Telekommunikationsanbieter eigene Branchensoftware wurde.'),
    'loesungen':  ('loesungen.html', 'Lösungen',
                   'Software für Werkstatt und Handel, Gastronomie, Transport und Außendienst. Auftrag, Kasse, Kundenkontakt und Auswertung in einem System.'),
    'produkte':   ('produkte.html', 'Produkte',
                   'samoRad, samoOrder, samoTransport, samoVertrieb, samoChat, samoPlan und samoTerminal — sieben Systeme im täglichen Einsatz.'),
    'praxis':     ('praxis.html', 'Praxis',
                   'Wie Betriebe mit unseren Systemen arbeiten und was sich für sie geändert hat.'),
    'neues':      ('presse.html', 'Presse und Neuigkeiten',
                   'Fachbeiträge zu Kassensicherung, elektronischer Rechnung und Digitalisierung im Mittelstand, dazu Meldungen aus dem Haus.'),
    'kontakt':    ('kontakt.html', 'Kontakt',
                   'Sprechen Sie mit uns über Ihre Abläufe. Telefon, Nachricht oder Formular — Sie erreichen unmittelbar einen Ansprechpartner.'),
    'partner':    ('partner.html', 'Partner',
                   'Zusammenarbeit mit Steuerberatung, Systemhäusern sowie Herstellern und Großhandel.'),
    'karriere':   ('karriere.html', 'Karriere',
                   'Arbeiten bei samoLabs: eigene Produkte entwickeln und betreiben, in einem kleinen Team.'),
    'entwickler': ('entwickler.html', 'Schnittstellen',
                   'Anbindung an Warenwirtschaft, Zahlung, Fiskalisierung, Nachrichtenversand und Auswertung.'),
    'support':    ('support.html', 'Support',
                   'Hilfe für Bestandskunden: Telefon, Nachricht, E-Mail und Antworten auf häufige Fälle.'),
    'modelle':    ('geschaeftsmodelle.html', 'Geschäftsmodelle',
                   'Produkt im Abo, Individualentwicklung oder Partnermodell — drei Wege, mit samoLabs zu arbeiten.'),
    'wissen':     ('wissen.html', 'Wissen',
                   'Leitfäden zu Kassensicherung, E-Rechnung und digitalen Belegen — verständlich erklärt für Betriebe im Mittelstand.'),
    'login':      ('anmelden.html', 'Anmeldebereich',
                   'Zugänge zu den samoLabs-Systemen für Betriebe, Mitarbeitende und Partner.'),
}


def kopf(titel, beschreibung, datei, bereich):
    return """<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{titel} — samoLabs</title>
<meta name="description" content="{beschreibung}">
<link rel="canonical" href="{basis}/{datei}">
<meta property="og:title" content="{titel} — samoLabs">
<meta property="og:description" content="{beschreibung}">
<meta property="og:url" content="{basis}/{datei}">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "{titel}",
  "description": "{beschreibung}",
  "url": "{basis}/{datei}",
  "isPartOf": {{ "@type": "WebSite", "name": "samoLabs", "url": "{basis}" }},
  "publisher": {{ "@type": "Organization", "name": "samoLabs", "url": "{basis}" }}
}}
</script>
<script>
  // Diese Datei existiert, damit Suchmaschinen den Bereich einzeln finden.
  // Im Browser öffnet sie unmittelbar den passenden Bereich der Hauptseite.
  location.replace('index.html#{bereich}');
</script>
<meta http-equiv="refresh" content="0; url=index.html#{bereich}">
</head>
<body>
<p>Sie werden weitergeleitet. Falls nicht,
   <a href="index.html#{bereich}">hier zum Bereich {titel}</a>.</p>
</body>
</html>
""".format(titel=titel, beschreibung=beschreibung, basis=BASIS, datei=datei, bereich=bereich)


def main():
    erzeugt = []
    for bereich, (datei, titel, beschreibung) in SEITEN.items():
        io.open(datei, 'w', encoding='utf-8').write(kopf(titel, beschreibung, datei, bereich))
        erzeugt.append(datei)

    # ── Sitemap ──────────────────────────────────────────────────────────
    import datetime
    heute = datetime.date.today().isoformat()
    eintraege = ['  <url><loc>%s/</loc><lastmod>%s</lastmod><priority>1.0</priority></url>' % (BASIS, heute)]
    for bereich, (datei, titel, besch) in SEITEN.items():
        eintraege.append('  <url><loc>%s/%s</loc><lastmod>%s</lastmod><priority>0.8</priority></url>'
                         % (BASIS, datei, heute))
    for datei in ['impressum.html', 'datenschutz.html', 'credits.html']:
        eintraege.append('  <url><loc>%s/%s</loc><lastmod>%s</lastmod><priority>0.3</priority></url>'
                         % (BASIS, datei, heute))
    sitemap = ('<?xml version="1.0" encoding="UTF-8"?>\n'
               '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
               + '\n'.join(eintraege) + '\n</urlset>\n')
    io.open('sitemap.xml', 'w', encoding='utf-8').write(sitemap)

    # ── robots.txt ───────────────────────────────────────────────────────
    io.open('robots.txt', 'w', encoding='utf-8').write(
        'User-agent: *\nAllow: /\n\nSitemap: %s/sitemap.xml\n' % BASIS)

    print('Seiten erzeugt:', len(erzeugt))
    for d in erzeugt:
        print('  ', d)
    print('sitemap.xml mit %d Adressen' % len(eintraege))
    print('robots.txt geschrieben')


if __name__ == '__main__':
    main()
