# -*- coding: utf-8 -*-
"""Haengt an CSS und JS eine Kennung aus dem Dateiinhalt.

Hintergrund: Der Webserver liefert diese Dateien mit einer Zwischen-
speicherung von 30 Tagen aus ("immutable"). Ohne wechselnde Kennung
sehen Besucher nach einer Aenderung wochenlang die alte Fassung.

Vor jedem Ausliefern aufrufen:
    python scripts/versionieren.py
"""
import hashlib, io, os, re, sys

sys.stdout.reconfigure(encoding='utf-8')
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))

DATEIEN = ['index.html', 'impressum.html', 'datenschutz.html', 'credits.html']


def kennung(pfad):
    with open(pfad, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()[:8]


def main():
    k_css = kennung('assets/css/site.css')
    k_js = kennung('assets/js/site.js')

    geaendert = []
    for datei in DATEIEN:
        if not os.path.exists(datei):
            continue
        s = io.open(datei, encoding='utf-8').read()
        vorher = s
        s = re.sub(r'(href="assets/css/site\.css)(\?v=[a-f0-9]+)?"',
                   r'\1?v=%s"' % k_css, s)
        s = re.sub(r'(src="assets/js/site\.js)(\?v=[a-f0-9]+)?"',
                   r'\1?v=%s"' % k_js, s)
        if s != vorher:
            io.open(datei, 'w', encoding='utf-8').write(s)
            geaendert.append(datei)

    print('Kennung  CSS %s  JS %s' % (k_css, k_js))
    print('Angepasst:', ', '.join(geaendert) if geaendert else 'nichts zu tun')


if __name__ == '__main__':
    main()
