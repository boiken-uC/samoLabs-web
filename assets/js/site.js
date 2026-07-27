(function(){
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Einblenden aktivieren und nach kurzer Zeit sicherheitshalber alles zeigen,
  // falls der Beobachter in einer Umgebung nicht ausloest.
  if (!reduced) {
    (document.body || document.documentElement).classList.add('js-an');
    setTimeout(function () {
      document.querySelectorAll('.rv').forEach(function (e) { e.classList.add('in'); });
    }, 1400);
  }

  // ── Produkte und Meldungen einmal definieren, mehrfach ausgeben ──
  var PRODUKTE = [
    ['samo','Rad','--c-rad','i-p-rad','Fahrradfachhandel','Werkstatt, Kasse und Warenwirtschaft mit eigener App für Tresen und Werkstatt.','rad'],
    ['samo','Order','--c-order','i-p-order','Gastronomie','QR-Bestellsystem für Bars, Cafés und Lounges, vom Tisch direkt an die Theke.','order'],
    ['samo','Transport','--c-transport','i-p-trans','Logistik','Frachtbörse mit Tourenplanung und Sendungsverfolgung für Speditionen und Fahrer.','transport'],
    ['samo','Vertrieb','--c-vertrieb','i-talk','Außendienst','Besuchsplanung, Routenoptimierung und diktierte Berichte statt Formulare.','vertrieb'],
    ['samo','Chat','--c-chat','i-chat','Kundenkontakt','Anfragen über WhatsApp, automatisch als Ticket erfasst, vorsortiert und beantwortet.','chat'],
    ['samo','Plan','--c-plan','i-p-plan','Gebäudetechnik','Aufmaß und Projektplanung für Betriebe der technischen Gebäudeausrüstung.','plan'],
    ['samo','Terminal','--c-term','i-n3','Zeiterfassung','Kommen und gehen per NFC-Karte am Tablet, ohne Stempeluhr und ohne Zettel.','terminal']
  ];

  function marke(a, b, farbe, groesse) {
    return '<span class="lg" style="--s:' + groesse + 'px; --ln:var(' + farbe + '); --la:var(' + farbe + ')">' +
           '<b>' + a + '</b><span>' + b + '</span><em></em></span>';
  }
  function produktKarte(p, alsKachel) {
    return '<a class="' + (alsKachel? 'card': 'rc') + '" href="#" data-go="detail:' + p[6] + '">' +
      '<div class="ph ' + p[3] + '"></div><div class="' + (alsKachel? 'cb': 'rcb') + '">' +
      marke(p[0], p[1], p[2], 19) +
      '<span class="tag">' + p[4] + '</span><p>' + p[5] + '</p>' +
      '<span class="more">Mehr erfahren →</span></div></a>';
  }
  document.getElementById('prod-alle').innerHTML  = PRODUKTE.map(function(x){ return produktKarte(x, true); }).join('');




  // ── Inhalte aller Unterkategorien ─────────────────────────────────────
  var DETAIL = {
    rad: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Rad','--c-rad'], bild:'i-annahme',
      titel:'Werkstatt, Kasse und Lager in einem System',
      intro:'Für Fahrradbetriebe, die mehr reparieren als verkaufen, mit eigener App für Tresen und Werkstattbank.',
      h2:'Der Auftrag entsteht dort, wo der Kunde steht',
      text:'Kein Rückweg ins Büro, kein zweiter Erfassungsschritt: Der Mitarbeiter nimmt das Rad am Tresen an, fotografiert es, druckt das Etikett und der Auftrag läuft. Was in der Werkstatt verbaut wird, bucht sich vom Lager ab und steht abends auf der Rechnung.',
      punkte:[['Annahme am Tablet','Auftrag, Foto und Etikett in unter zwei Minuten, direkt am Tresen.'],
              ['Werkstattplanung','Wer macht was bis wann. Auslastung sichtbar, bevor ein Termin platzt.'],
              ['Zertifizierte Kasse','TSE nach Kassensicherungsverordnung, Kartenzahlung ohne zweites Gerät.'],
              ['Lager, das mitdenkt','Verbautes Teil wird abgebucht und landet automatisch auf der Rechnung.']],
      alltag:[['Der Kunde ruft nicht mehr an','Die Nachricht, dass das Rad fertig ist, geht automatisch raus.'],
              ['Kein Vorgang geht mehr verloren','Jedes Rad trägt ein Etikett mit Nummer, jeder Vorgang eine Historie.'],
              ['Der Arbeitstag endet früher','Tagesabschluss und Kassenbericht entstehen nebenbei.']] },

    order: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Order','--c-order'], bild:'i-p-order',
      titel:'Gäste bestellen selbst, die Theke sieht es sofort',
      intro:'QR-Bestellsystem für Bars, Cafés und Lounges. Ohne App-Installation, ohne Wartezeit am Tisch.',
      h2:'Vom Tisch direkt an die Theke',
      text:'Der Gast scannt den Code an seinem Tisch und sieht die aktuelle Karte. Was er bestellt, erscheint in Echtzeit auf dem Terminal hinter der Theke, mit Tischnummer, ohne Zwischenruf und ohne Notiz, die verloren gehen kann.',
      punkte:[['Keine App nötig','Der Gast öffnet nur die Kamera. Das senkt die Hürde auf null.'],
              ['Karte jederzeit änderbar','Ausverkauft ist ausverkauft, sofort an allen Tischen sichtbar.'],
              ['Bestellung mit Tischbezug','Jede Bestellung kommt mit Tischnummer an, offene Posten bleiben zugeordnet.'],
              ['Terminal für die Theke','Alle offenen Tische, kassieren und abschließen an einem Ort.']],
      alltag:[['Weniger Wege','Das Personal läuft zum Servieren, nicht zum Aufnehmen.'],
              ['Höherer Durchschnittsbon','Wer die Karte in Ruhe liest, bestellt eher noch etwas dazu.'],
              ['Ruhigere Stoßzeiten','Bestellungen stapeln sich im System, nicht an der Theke.']] },

    transport: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Transport','--c-transport'], bild:'i-p-trans',
      titel:'Fracht finden, Touren planen, Sendungen verfolgen',
      intro:'Für Speditionen und Fahrer auf Strecken, die bisher kaum digitalisiert sind.',
      h2:'Auftraggeber und Fahrer auf derselben Strecke',
      text:'Wer eine Ladung hat, stellt sie ein. Wer die Strecke ohnehin fährt, sieht sie. Dazwischen steht keine Telefonkette, sondern ein System, das Angebot und Route zusammenbringt, und die Sendung bis zur Übergabe nachvollziehbar hält.',
      punkte:[['Fracht auf Ihrer Route','Passende Aufträge entlang der Strecke, die Sie ohnehin fahren.'],
              ['Tourenplanung','Reihenfolge, Fahrzeit und Stopps auf Basis echter Straßendaten.'],
              ['Sendungsverfolgung','Der Auftraggeber sieht den Stand, ohne anzurufen.'],
              ['Übergabe dokumentiert','Empfang bestätigt mit Unterschrift und Foto, direkt im System.']],
      alltag:[['Weniger Leerfahrten','Die Rückfahrt trägt sich mit, statt leer zu bleiben.'],
              ['Weniger Rückfragen','Wo die Sendung steht, beantwortet das System selbst.'],
              ['Sauberer Nachweis','Jede Übergabe ist belegt, auch Wochen später noch.']] },

    vertrieb: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Vertrieb','--c-vertrieb'], bild:'i-talk',
      titel:'Außendienst, der beim Kunden ist statt am Schreibtisch',
      intro:'Besuche planen, Routen optimieren, Berichte unterwegs diktieren.',
      h2:'Der Bericht entsteht im Auto, nicht abends zu Hause',
      text:'Nach dem Termin diktiert der Mitarbeiter zwei Sätze, das System macht daraus einen strukturierten Besuchsbericht. Die Route zum nächsten Kunden steht schon fest, berechnet nach echten Straßendaten, nicht nach Luftlinie.',
      punkte:[['Besuchsplanung','Wer wird wann besucht, wer ist überfällig, auf einen Blick.'],
              ['Routenoptimierung','Die sinnvolle Reihenfolge für den Tag, nicht die zufällige.'],
              ['Bericht per Sprache','Diktieren statt tippen. Fertig, noch vor der Weiterfahrt.'],
              ['Gesprächsleitfaden','Vorbereitung auf den Termin: Was lief zuletzt, was steht an.']],
      alltag:[['Mehr Termine pro Tag','Kürzere Wege bedeuten einen Kunden mehr, ohne länger zu arbeiten.'],
              ['Berichte kommen wirklich an','Weil sie zwei Minuten dauern statt zwanzig.'],
              ['Nichts geht verloren','Jede Zusage steht beim Kunden, nicht im Notizbuch.']] },

    chat: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Chat','--c-chat'], bild:'i-chat',
      titel:'Aus der Nachricht wird ein Vorgang',
      intro:'Kundenanfragen automatisch erfasst, vorsortiert und beantwortet, mit Nummer statt Chatverlauf.',
      h2:'Kundenkontakt, der nicht im Verlauf verschwindet',
      text:'Anfragen kommen dort an, wo Ihre Kunden ohnehin sind. Statt sie im Chatverlauf zu suchen, macht das System daraus einen Vorgang mit Nummer, ordnet ihn zu und schlägt eine Antwort vor. Wer zuständig ist, sieht es sofort.',
      punkte:[['Jede Anfrage bekommt eine Nummer','Nachvollziehbar, zuweisbar, auffindbar, auch nach drei Wochen.'],
              ['Vorsortiert nach Anliegen','Termin, Reklamation oder Preisfrage landen im richtigen Korb.'],
              ['Antwortvorschlag','Das System schlägt vor, ein Mensch entscheidet.'],
              ['Anbindung an den Auftrag','Die Anfrage hängt am Vorgang, nicht daneben.']],
      alltag:[['Nichts geht unter','Auch die Nachricht um 22 Uhr ist am Morgen ein Vorgang.'],
              ['Kürzere Antwortzeiten','Weil niemand erst den Verlauf durchscrollen muss.'],
              ['Vertretung wird einfach','Wer einspringt, sieht sofort den Stand.']] },

    plan: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Plan','--c-plan'], bild:'i-p-plan',
      titel:'Aufmaß und Projektplanung für die Gebäudetechnik',
      intro:'Für Betriebe der technischen Gebäudeausrüstung, von der Aufnahme vor Ort bis zur Planung.',
      h2:'Das Aufmaß steht, bevor der Wagen wieder anspringt',
      text:'Aufnahme vor Ort, direkt am Gerät erfasst statt später übertragen. Aus dem Aufmaß entsteht die Position, aus den Positionen der Plan, ohne dass jemand Zahlen von einem Zettel in eine Tabelle tippt.',
      punkte:[['Aufmaß vor Ort','Direkt erfasst, mit Foto und Maßen am Objekt.'],
              ['Positionen automatisch','Aus dem Aufmaß werden Positionen, nicht aus der Erinnerung.'],
              ['Projektübersicht','Was ist beauftragt, was läuft, was fehlt noch.'],
              ['Übergabe an die Abrechnung','Was gemessen wurde, steht in der Rechnung.']],
      alltag:[['Keine doppelte Erfassung','Einmal aufnehmen genügt.'],
              ['Weniger Nachträge','Weil Maße belegt sind statt geschätzt.'],
              ['Schnellere Angebote','Das Angebot folgt dem Termin am selben Tag.']] },

    terminal: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Terminal','--c-term'], bild:'i-n3',
      titel:'Zeiterfassung per Karte am Tablet',
      intro:'Kommen, gehen, fertig, ohne Stempeluhr, ohne Zettel, ohne App auf dem privaten Handy.',
      h2:'Eine Karte, ein Tablet, keine Diskussion',
      text:'Das Tablet hängt am Eingang, die Karte steckt im Portemonnaie. Auflegen genügt. Wer kommt und geht, steht sekundengenau im System, auch für Mitarbeitende, die kein Firmenhandy haben und keines wollen.',
      punkte:[['NFC statt Zettel','Karte auflegen, fertig. Keine PIN, keine App.'],
              ['Kiosk-Modus','Das Tablet lässt sich nicht verlassen, kein Zugriff auf anderes.'],
              ['Auswertung je Person','Stunden, Pausen, Überstunden ohne Nachrechnen.'],
              ['Mehrere Standorte','Ein Terminal je Eingang, eine Auswertung für alles.']],
      alltag:[['Ende der Stundenzettel','Die Erfassung passiert im Vorbeigehen.'],
              ['Weniger Streit','Die Zeiten stehen fest, nachvollziehbar für beide Seiten.'],
              ['Kein privates Handy nötig','Das nimmt der Belegschaft eine berechtigte Sorge.']] },

    werkstatt: { ober:'Lösungen', oberZiel:'loesungen', produkt:'rad', bild:'i-werk',
      titel:'Werkstatt und Handel',
      intro:'Ein System für Annahme, Werkstatt, Kasse und Lager, statt drei Programme, die nichts voneinander wissen.',
      h2:'Gebaut für Betriebe, die reparieren',
      text:'Im Handel zählt der Verkauf, in der Werkstatt der Durchlauf. Wer beides macht, braucht ein System, das den Auftrag von der Annahme bis zur Rechnung trägt, und dabei weiß, welches Teil verbaut wurde.',
      punkte:[['Annahme am Tresen','Ohne Rückweg ins Büro, ohne zweite Erfassung.'],
              ['Durchlauf im Blick','Was steht an, was ist fertig, was wartet auf Teile.'],
              ['Kasse mit TSE','Zertifiziert nach Kassensicherungsverordnung, ohne Aufpreis.'],
              ['Lager und Verbrauch','Abbuchung beim Verbauen, Nachbestellung vor dem Engpass.']],
      alltag:[['Kunden fragen seltener nach','Weil sie automatisch erfahren, wenn etwas fertig ist.'],
              ['Der Tresen wird schneller','Annahme in zwei Minuten statt zehn.'],
              ['Der Arbeitstag endet früher','Der Kassenabschluss entsteht nebenbei.']] },

    gastro: { ober:'Lösungen', oberZiel:'loesungen', produkt:'order', bild:'i-gastro',
      titel:'Gastronomie',
      intro:'Bestellung am Tisch per QR-Code, Übersicht an der Theke, Abrechnung ohne Papierablage.',
      h2:'Weniger laufen, mehr servieren',
      text:'In Stoßzeiten ist die Bestellaufnahme der Engpass. Wenn Gäste selbst bestellen, verschiebt sich die Arbeit dorthin, wo sie zählt: ans Servieren. Die Theke behält den Überblick, die Abrechnung stimmt am Ende von selbst.',
      punkte:[['Bestellung ohne Personal','Der Gast scannt und bestellt, wann er möchte.'],
              ['Theke sieht alles sofort','Jede Bestellung mit Tischnummer, in Echtzeit.'],
              ['Karte sofort änderbar','Ausverkauft heißt ausverkauft, an allen Tischen gleichzeitig.'],
              ['Abrechnung je Tisch','Offene Posten bleiben zugeordnet, auch bei Wechseln.']],
      alltag:[['Ruhigere Stoßzeiten','Bestellungen stapeln sich im System, nicht vor der Theke.'],
              ['Höherer Bon','Wer in Ruhe liest, bestellt eher nach.'],
              ['Weniger Fehler','Was der Gast tippt, muss niemand verstehen.']] },

    logistik: { ober:'Lösungen', oberZiel:'loesungen', produkt:'transport', bild:'i-trans',
      titel:'Transport und Logistik',
      intro:'Frachtaufträge finden, Touren planen, Sendungen bis zur Übergabe verfolgen.',
      h2:'Für Strecken, die bisher kaum digitalisiert sind',
      text:'Zwischen Auftraggeber und Fahrer stehen oft noch Telefonketten und Zettel. Wir ersetzen das durch ein System, das Ladung und Route zusammenbringt, und jede Übergabe belegt.',
      punkte:[['Fracht entlang der Route','Aufträge auf der Strecke, die ohnehin gefahren wird.'],
              ['Tourenplanung','Reihenfolge und Fahrzeit auf Basis echter Straßendaten.'],
              ['Verfolgung ohne Anruf','Der Auftraggeber sieht den Stand selbst.'],
              ['Belegte Übergabe','Unterschrift und Foto, direkt im Vorgang.']],
      alltag:[['Weniger Leerfahrten','Die Rückfahrt trägt sich mit.'],
              ['Weniger Telefonate','Statusfragen beantwortet das System.'],
              ['Sicherer Nachweis','Auch Wochen später noch nachvollziehbar.']] },

    aussendienst: { ober:'Lösungen', oberZiel:'loesungen', produkt:'vertrieb', bild:'i-talk',
      titel:'Außendienst',
      intro:'Besuche planen, Routen optimieren, Berichte diktieren statt tippen.',
      h2:'Die Arbeit passiert beim Kunden, nicht danach',
      text:'Wer den ganzen Tag unterwegs ist, schreibt Berichte abends, oder gar nicht. Wenn zwei diktierte Sätze genügen, kommen sie an. Und die Route zum nächsten Termin steht schon.',
      punkte:[['Besuchsplanung','Wer ist überfällig, wer steht an, was war zuletzt.'],
              ['Optimierte Route','Die sinnvolle Reihenfolge, nicht die zufällige.'],
              ['Bericht per Sprache','Zwei Sätze diktiert, strukturiert abgelegt.'],
              ['Vorbereitung je Termin','Historie und offene Punkte auf einen Blick.']],
      alltag:[['Ein Termin mehr am Tag','Ohne länger zu arbeiten.'],
              ['Berichte kommen an','Weil sie zwei Minuten dauern.'],
              ['Zusagen gehen nicht verloren','Sie stehen beim Kunden, nicht im Notizbuch.']] },

    auftrag: { ober:'Lösungen', oberZiel:'loesungen', bild:'i-hero',
      titel:'Auftrag und Planung',
      intro:'Von der Annahme bis zum Abschluss, mit einer Auslastung, die man sieht, bevor der Termin platzt.',
      h2:'Ein Auftrag, ein Weg',
      text:'Der Auftrag entsteht beim Kunden und begleitet den ganzen Vorgang: Termin, Bearbeitung, Material, Abschluss. Keine Zwischenstände auf Zetteln, keine zweite Erfassung im Büro.',
      punkte:[['Annahme vor Ort','Auf dem Tablet, mit Foto und Etikett.'],
              ['Terminierung','Realistische Zusagen, weil die Auslastung sichtbar ist.'],
              ['Statusverfolgung','Wo steht der Vorgang gerade, wer bearbeitet ihn.'],
              ['Sauberer Abschluss','Was gemacht wurde, steht in der Rechnung.']],
      alltag:[['Weniger geplatzte Termine','Weil vorher sichtbar wird, was nicht passt.'],
              ['Kein Übertragen','Einmal erfasst genügt.'],
              ['Verlässliche Auskunft','Jeder im Team kann Auskunft geben.']] },

    kasse: { ober:'Lösungen', oberZiel:'loesungen', bild:'i-n1',
      titel:'Kasse und Zahlung',
      intro:'Zertifizierte TSE-Kasse, Kartenzahlung ohne zweites Gerät, Rechnung per QR-Code.',
      h2:'Eine Kasse, ein Tagesabschluss',
      text:'Wer ein separates Kartenterminal betreibt, führt zwei Abschlüsse und gleicht sie ab. Bei uns ist das Gerät, auf dem der Auftrag steht, auch das Gerät, auf dem gezahlt wird, mit zertifizierter Sicherungseinrichtung nach Kassensicherungsverordnung.',
      punkte:[['Zertifizierte TSE','Erfüllt die gesetzliche Anforderung, ohne monatlichen Aufpreis.'],
              ['Kartenzahlung am Gerät','Das Telefon ist das Terminal.'],
              ['Rechnung mit QR-Code','Der Kunde scannt und zahlt, auch nachträglich per Mail.'],
              ['Tagesabschluss automatisch','Entsteht aus den Vorgängen, nicht aus Handarbeit.']],
      alltag:[['Ein Vertrag weniger','Kein separates Terminal, kein zweiter Abschluss.'],
              ['Weniger Rückstände','Weil Zahlen so einfach ist wie Scannen.'],
              ['Ruhe bei der Prüfung','Die Belege sind lückenlos und signiert.']] },

    kunde: { ober:'Lösungen', oberZiel:'loesungen', bild:'i-kontakt',
      titel:'Kunde und Kontakt',
      intro:'Automatische Benachrichtigung, Anfragen als Vorgang, Termine online buchbar.',
      h2:'Der Kontakt landet, wo der Auftrag schon liegt',
      text:'Das ist die Disziplin, aus der wir kommen. Ob Nachricht, Anruf oder Anfrage über einen Messenger, der Kontakt gehört zum Vorgang, nicht in einen separaten Verlauf, den später niemand mehr findet.',
      punkte:[['Automatische Nachricht','Die Fertigmeldung geht raus, ohne dass jemand daran denkt.'],
              ['Anfragen als Vorgang','Mit Nummer, Zuständigkeit und Historie.'],
              ['Online-Terminbuchung','Rund um die Uhr, direkt in Ihren Kalender.'],
              ['Telefonie im System','Das Gespräch kommt dort an, wo der Auftrag steht.']],
      alltag:[['Weniger Rückfragen','Der Kunde weiß Bescheid, bevor er fragt.'],
              ['Nichts geht unter','Auch die Nachricht spätabends wird zum Vorgang.'],
              ['Vertretung ohne Einarbeitung','Der Stand ist sichtbar, nicht im Kopf eines Einzelnen.']] },

    auswertung: { ober:'Lösungen', oberZiel:'loesungen', bild:'i-team',
      titel:'Auswertung',
      intro:'Tagesbericht ohne Nacharbeit, mehrere Standorte in einer Sicht, sauberer Export.',
      h2:'Zahlen, die nebenbei entstehen',
      text:'Auswertung ist dann nützlich, wenn sie keine zusätzliche Arbeit macht. Was tagsüber erfasst wird, steht abends im Bericht, ohne dass jemand Zahlen zusammensucht oder in eine Tabelle überträgt.',
      punkte:[['Tagesbericht','Was reinkam, was offen ist, was geschafft wurde.'],
              ['Mehrere Standorte','Einzeln steuern, gemeinsam auswerten.'],
              ['Export für die Buchhaltung','Sauber aufbereitet, ohne Nachtippen.'],
              ['Verlauf über Zeit','Entwicklung statt Momentaufnahme.']],
      alltag:[['Kein Aufwand zum Monatsabschluss','Die Zahlen liegen schon vor.'],
              ['Entscheidungen auf Basis','Statt Bauchgefühl ein Verlauf.'],
              ['Weniger Rückfragen vom Steuerbüro','Weil der Export stimmt.']] },

    retail: { ober:'Branchen', oberZiel:'loesungen', produkt:'rad', bild:'i-werk',
      titel:'Retail & Marketplaces',
      intro:'Für Fachhandel und Werkstattbetriebe, die verkaufen, reparieren und online sichtbar sein wollen.',
      h2:'Handel und Service aus einem System',
      text:'Wer verkauft und repariert, führt zwei Geschäfte in einem Haus. Kasse, Auftrag, Lager und Marktplatz-Auftritt greifen bei uns ineinander, damit der Tresen nicht zur Schaltzentrale zwischen getrennten Programmen wird.',
      punkte:[['Kasse und Auftrag verbunden','Was am Tresen kassiert wird, hängt am Vorgang — nicht in einer zweiten Liste.'],
              ['Lager mit Abbuchung','Verkaufte und verbaute Teile verlassen den Bestand von selbst.'],
              ['Sichtbar im Netz','Öffnungszeiten, Termine und Anfragen laufen über denselben Datenbestand.'],
              ['Zertifizierte Kasse','Technische Sicherungseinrichtung nach Kassensicherungsverordnung inklusive.']],
      alltag:[['Ein Abschluss am Abend','Kasse, Karte und Aufträge in einer Auswertung.'],
              ['Weniger Doppelpflege','Artikel und Kunden werden einmal erfasst.'],
              ['Kunden finden Sie online','Und buchen Termine, ohne anzurufen.']] },

    hospitality: { ober:'Branchen', oberZiel:'loesungen', produkt:'order', bild:'i-p-order',
      titel:'Hospitality & Food Service',
      intro:'Für Bars, Cafés, Lounges und Restaurants, in denen der Weg zum Tisch der Engpass ist.',
      h2:'Der Gast bestellt, die Theke behält den Überblick',
      text:'In Stoßzeiten entscheidet nicht die Küche, sondern die Bestellaufnahme. Wenn Gäste selbst bestellen, verschiebt sich die Arbeit dorthin, wo sie zählt — und die Abrechnung je Tisch stimmt am Ende von selbst.',
      punkte:[['Bestellung am Tisch','Per Code, ohne App-Installation, mit Tischnummer im System.'],
              ['Karte in Echtzeit','Ausverkauftes verschwindet sofort an allen Tischen.'],
              ['Theken-Terminal','Alle offenen Tische, kassieren und abschließen an einem Ort.'],
              ['Abrechnung je Tisch','Offene Posten bleiben zugeordnet, auch beim Schichtwechsel.']],
      alltag:[['Ruhigere Stoßzeiten','Bestellungen sammeln sich im System, nicht an der Theke.'],
              ['Höherer Bon','Wer in Ruhe liest, bestellt eher nach.'],
              ['Weniger Fehler','Was der Gast tippt, muss niemand entziffern.']] },

    mobility: { ober:'Branchen', oberZiel:'loesungen', produkt:'transport', bild:'i-p-trans',
      titel:'Transport & Mobility',
      intro:'Für Speditionen und Fahrer auf Strecken, die bislang über Telefonketten organisiert werden.',
      h2:'Ladung und Route finden zusammen',
      text:'Zwischen Auftraggeber und Fahrer steht oft nur das Telefon. Wir bringen Fracht und Strecke in ein System: Aufträge erscheinen dort, wo die Route ohnehin verläuft, und jede Übergabe ist belegt.',
      punkte:[['Fracht entlang der Route','Passende Aufträge für die Strecke, die ohnehin gefahren wird.'],
              ['Tourenplanung','Reihenfolge und Fahrzeit nach echten Straßendaten.'],
              ['Stand ohne Anruf','Der Auftraggeber sieht selbst, wo die Sendung ist.'],
              ['Belegte Übergabe','Unterschrift, Foto und Zeitstempel im Vorgang.']],
      alltag:[['Weniger Leerfahrten','Die Rückfahrt trägt sich mit.'],
              ['Weniger Telefonate','Statusfragen beantwortet das System.'],
              ['Nachweis, der hält','Auch Wochen später noch belegbar.']] },

    selfservice: { ober:'Branchen', oberZiel:'loesungen', produkt:'terminal', bild:'i-n3',
      titel:'Self-Service & Kiosk',
      intro:'Für Abläufe, die ohne Personal funktionieren sollen: Terminals, Selbstbestellung, Zeiterfassung.',
      h2:'Geräte, die für sich arbeiten',
      text:'Ein Tablet am Eingang, ein Code am Tisch, eine Karte im Portemonnaie: Selbstbedienung entlastet dort, wo Personal knapp ist. Die Geräte laufen im gesperrten Modus und lassen sich nicht zweckentfremden.',
      punkte:[['Kiosk-Modus','Das Gerät startet in die Anwendung und bleibt darin.'],
              ['Zeiterfassung per Karte','Kommen und gehen ohne App auf dem privaten Handy.'],
              ['Selbstbestellung','Der Gast oder Kunde erfasst selbst — fehlerfrei und sofort im System.'],
              ['Fernwartung','Geräte werden zentral überwacht und aktualisiert.']],
      alltag:[['Entlastung am Empfang','Routinevorgänge laufen ohne Zuruf.'],
              ['Saubere Zeiten','Sekundengenau, nachvollziehbar für beide Seiten.'],
              ['Keine Diskussionen','Das Terminal kennt nur seine Aufgabe.']] },

    fieldsales: { ober:'Branchen', oberZiel:'loesungen', produkt:'vertrieb', bild:'i-talk',
      titel:'Field Sales & Service',
      intro:'Für Teams, die beim Kunden arbeiten: Besuche, Routen, Berichte und Zusagen im Griff.',
      h2:'Die Arbeit passiert draußen — die Ordnung fährt mit',
      text:'Wer den Tag auf der Straße verbringt, hat abends keine Kraft für Protokolle. Deshalb entstehen Planung, Route und Bericht unterwegs: diktiert statt getippt, abgelegt beim Kunden statt im Notizbuch.',
      punkte:[['Besuchsplanung','Wer ist fällig, wer ist überfällig, was steht an.'],
              ['Routen nach Straße','Die sinnvolle Reihenfolge, nicht die Luftlinie.'],
              ['Bericht per Sprache','Zwei Sätze nach dem Termin, fertig abgelegt.'],
              ['Historie je Kunde','Zusagen und offene Punkte, griffbereit vor dem Termin.']],
      alltag:[['Ein Termin mehr am Tag','Kürzere Wege, weniger Suchen.'],
              ['Berichte kommen an','Weil sie zwei Minuten dauern.'],
              ['Vertretbar im Urlaub','Der Stand steht beim Kunden, nicht im Kopf.']] },

    building: { ober:'Branchen', oberZiel:'loesungen', produkt:'plan', bild:'i-p-plan',
      titel:'Building Technology',
      intro:'Für Betriebe der technischen Gebäudeausrüstung: Aufmaß, Positionen und Projekt in einer Linie.',
      h2:'Vom Aufmaß zur Abrechnung ohne Medienbruch',
      text:'Zwischen Baustelle und Büro gehen Maße verloren oder werden doppelt erfasst. Bei uns entsteht das Aufmaß am Objekt, wird zur Position und landet in der Abrechnung — ohne dass jemand Zahlen überträgt.',
      punkte:[['Aufmaß vor Ort','Mit Foto und Maß direkt am Objekt erfasst.'],
              ['Positionen automatisch','Aus dem Aufmaß, nicht aus der Erinnerung.'],
              ['Projektstand sichtbar','Beauftragt, in Arbeit, offen — auf einen Blick.'],
              ['Belegte Nachträge','Gemessen statt geschätzt, deshalb unstrittig.']],
      alltag:[['Einmal erfassen genügt','Keine Zettel, keine Übertragung.'],
              ['Schnellere Angebote','Das Angebot folgt dem Termin am selben Tag.'],
              ['Weniger Streit ums Maß','Weil jedes Maß ein Foto hat.']] },

    engagement: { ober:'Branchen', oberZiel:'loesungen', produkt:'chat', bild:'i-chat',
      titel:'Customer Engagement',
      intro:'Für jeden Betrieb, bei dem Anfragen über Telefon und Nachrichten hereinkommen — und nicht verloren gehen dürfen.',
      h2:'Kundenkontakt, der beim Auftrag landet',
      text:'Das ist die Disziplin, aus der wir kommen: Anrufe, Nachrichten und Anfragen gehören zum Vorgang, nicht in Verläufe, die niemand wiederfindet. Aus jeder Nachricht wird ein Vorgang mit Nummer und Zuständigkeit.',
      punkte:[['Nachricht wird Vorgang','Mit Nummer, zuweisbar, wiederauffindbar.'],
              ['Automatische Meldungen','Die Fertigmeldung geht raus, ohne dass jemand daran denkt.'],
              ['Telefonie im System','Das Gespräch kommt an, wo der Auftrag steht.'],
              ['Antwortvorschläge','Das System schlägt vor, ein Mensch entscheidet.']],
      alltag:[['Nichts geht unter','Auch die Nachricht um 22 Uhr ist am Morgen ein Vorgang.'],
              ['Schnellere Antworten','Ohne Suchen im Verlauf.'],
              ['Einfache Vertretung','Wer einspringt, sieht sofort den Stand.']] }
  };

  var BRANCHEN = ['retail','hospitality','mobility','selfservice','fieldsales','building','engagement'];
  document.getElementById('rail-start').innerHTML = BRANCHEN.map(function(k){
    var d = DETAIL[k];
    return '<a class="rc" href="#" data-go="detail:' + k + '"><div class="ph ' + d.bild + '"></div>' +
           '<div class="rcb"><h3>' + d.titel + '</h3><p>' + d.intro + '</p>' +
           '<span class="more">Mehr erfahren →</span></div></a>';
  }).join('');



  // ── Beiträge für die Nachrichtenseite ───────────────────────────────
  //       'fach' = Fachbeitrag · 'branche' = Branchenthema · 'produkt' = Produktnews
  var BEITRAEGE = [
    ['12.07.2026','meldung','samoOrder geht im ersten Betrieb in den Regelbetrieb','Gäste bestellen per QR-Code am Tisch, die Theke sieht jede Bestellung in Echtzeit. Nach der Testphase läuft das System nun im Tagesgeschäft.','i-laptops','<p>Nach mehreren Wochen im Probebetrieb läuft das QR-Bestellsystem nun im Tagesgeschäft. Gäste rufen die Karte über den Code an ihrem Tisch auf, wählen aus und schicken die Bestellung ab. An der Theke erscheint sie unmittelbar mit Tischnummer.</p> <h3>Was sich für den Betrieb ändert</h3> <p>Der Weg zum Tisch entfällt für die Aufnahme. Das Personal geht nur noch, um zu servieren. In Stoßzeiten macht das den Unterschied zwischen Warteschlange und ruhigem Ablauf, weil sich Bestellungen im System sammeln statt vor der Theke.</p> <p>Die Karte lässt sich jederzeit ändern. Ist etwas nicht mehr verfügbar, verschwindet es sofort an allen Tischen gleichzeitig. Rückfragen und Enttäuschungen fallen damit weg.</p> <h3>Ohne Installation</h3> <p>Der Gast benötigt keine App. Die Kamera genügt, den Rest übernimmt der Browser. Genau diese fehlende Hürde entscheidet darüber, ob ein solches System angenommen wird oder nach zwei Wochen wieder verschwindet.</p>'],
    ['28.06.2026','meldung','Sieben Mitarbeitende in einer Werkstatt geschult','Vom Tresen bis zur Werkstattbank arbeitet das ganze Team im selben System. Die Schulung fand vor Ort statt, nicht per Video.','i-schulung','<p>Die Schulung fand an einem Tag vor Ort statt, nicht per Video. Alle sieben Mitarbeitenden waren dabei, vom Tresen bis zur Werkstattbank.</p> <h3>Warum vor Ort</h3> <p>Eine Aufzeichnung erklärt das System, aber nicht den Betrieb. Erst wenn man sieht, wie ein Auftrag im echten Ablauf entsteht, welche Fragen die Kollegin am Tresen tatsächlich stellt und wo der Drucker steht, lassen sich die Feinheiten klären, die später den Unterschied machen.</p> <p>Wir fahren deshalb hin, obwohl es teurer ist. Die Erfahrung zeigt, dass ein geschultes Team nach einer Woche selbstständig arbeitet, während ein per Video eingewiesenes Team noch nach Monaten Rückfragen stellt.</p> <h3>Der Ablauf</h3> <p>Vormittags die Grundlagen für alle, nachmittags getrennt nach Aufgabenbereich: Annahme, Werkstatt und Abrechnung. Am Ende hat jeder seinen eigenen Zugang und einen echten Vorgang selbst durchgeführt.</p>'],
    ['15.06.2026','meldung','samoTransport verbindet Deutschland und Südosteuropa','Die Frachtbörse bringt Auftraggeber und Fahrer auf einer Strecke zusammen, die bislang kaum digitalisiert war.','i-trans','<p>Zwischen Deutschland und Südosteuropa fahren täglich Transporte, deren Vermittlung noch weitgehend über Telefonketten und persönliche Kontakte läuft. Wer eine Ladung hat, ruft herum. Wer die Strecke fährt, sucht auf demselben Weg nach Rückfracht.</p> <h3>Was das System übernimmt</h3> <p>Aufträge werden eingestellt und erscheinen bei den Fahrern, deren Route dazu passt. Statt zu telefonieren, sieht man, was auf der eigenen Strecke liegt. Die Sendung bleibt bis zur Übergabe nachvollziehbar, der Auftraggeber muss nicht anrufen, um den Stand zu erfahren.</p> <p>Die Übergabe wird mit Unterschrift und Foto dokumentiert. Das klingt nach Kleinigkeit, entscheidet aber Wochen später, wenn jemand behauptet, eine Ladung sei nicht angekommen.</p> <h3>Weniger Leerfahrten</h3> <p>Der größte Hebel liegt in der Rückfahrt. Wer leer zurückfährt, verdient auf halber Strecke nichts. Passende Fracht auf der Rückroute verändert die Rechnung einer ganzen Tour.</p>'],
    ['02.06.2026','produkt','Kartenzahlung ohne zweites Terminal','Das Telefon wird zum Zahlungsgerät. Ein Tagesabschluss statt zwei, ein Vertrag weniger.','i-n1','<p>Wer ein separates Kartenlesegerät betreibt, führt zwei Kassenabschlüsse und gleicht sie ab. Ein Betrag steht in der Kasse, einer beim Zahlungsdienstleister, und bei Abweichungen sucht abends jemand nach dem Fehler.</p> <h3>Ein Gerät für beides</h3> <p>Das Telefon oder Tablet, auf dem der Auftrag steht, nimmt auch die Zahlung entgegen. Der Betrag kommt aus dem Vorgang, es wird nichts abgetippt. Damit fällt die häufigste Fehlerquelle weg: der falsch eingegebene Betrag.</p> <p>Am Abend gibt es einen Abschluss statt zwei. Was kassiert wurde, steht dort, wo auch der Auftrag steht.</p> <h3>Was Sie brauchen</h3> <p>Ein Gerät mit Nahfeldfunk, wie es jedes aktuelle Telefon hat. Kein Vertrag mit einem Terminalanbieter, keine Mietgebühr, keine Wartezeit auf Hardware.</p>'],
    ['20.05.2026','produkt','Etikettendruck direkt vom Tablet','Auftrag annehmen, Etikett drucken, fertig, ohne Rückweg ins Büro.','i-werk','<p>Ein Auftrag ohne Etikett ist ein Zettel, der verloren geht. Deshalb druckt das Tablet unmittelbar bei der Annahme: Nummer, Kunde, Datum, dazu der Strichcode für die spätere Zuordnung.</p> <h3>Warum am Tresen</h3> <p>Wer erst im Büro druckt, trägt die Daten zweimal ein oder merkt sie sich. Beides kostet Zeit und geht schief. Am Tresen entsteht das Etikett in dem Moment, in dem der Kunde noch davorsteht und Fragen beantworten kann.</p> <p>Der Drucker steht im Netzwerk und wird von jedem berechtigten Gerät angesprochen. Ein zweiter Rechner ist nicht nötig.</p>'],
    ['08.05.2026','fach','Was die Kassensicherungsverordnung wirklich verlangt','Viele Betriebe glauben, eine moderne Kasse genüge. Verlangt wird aber eine zertifizierte technische Sicherungseinrichtung, und die muss jede einzelne Buchung signieren.','i-beleg','<p>Viele Betriebe glauben, eine moderne Kasse genüge. Verlangt wird aber mehr: eine zertifizierte technische Sicherungseinrichtung, die jede einzelne Buchung signiert und unveränderbar protokolliert.</p> <h3>Was genau vorgeschrieben ist</h3> <ul> <li>Jeder Geschäftsvorfall wird einzeln aufgezeichnet und signiert</li> <li>Die Aufzeichnungen sind unveränderbar und über zehn Jahre lesbar</li> <li>Der Kunde erhält einen Beleg — digital genügt</li> <li>Die Kasse ist beim Finanzamt gemeldet</li> <li>Bei einer Prüfung werden die Daten in einem festgelegten Format herausgegeben</li> </ul> <h3>Der häufigste Irrtum</h3> <p>Eine Software allein erfüllt die Anforderung nicht. Die Sicherungseinrichtung ist ein eigenes, zertifiziertes Bauteil — entweder als Steckmodul oder als Dienst in einem Rechenzentrum. Ohne sie ist die Kasse formal nicht ordnungsgemäß, auch wenn alle Beträge stimmen.</p> <p>Bei uns ist diese Einrichtung ab der Pro-Stufe enthalten, ohne monatlichen Aufpreis. Marktüblich sind dafür etwa fünfzehn Euro im Monat zusätzlich.</p>'],
    ['24.04.2026','fach','E-Rechnung: Was jetzt auf Betriebe zukommt','Elektronische Rechnungen sind kein PDF per Mail. Gemeint ist ein strukturiertes Format, das Maschinen lesen können. Wer empfangen muss, braucht kein neues Programm, aber ein vorbereitetes.','i-doku','<p>Eine elektronische Rechnung ist kein PDF im Anhang. Gemeint ist ein strukturiertes Format, das eine Maschine lesen und weiterverarbeiten kann, ohne dass jemand Zahlen abtippt.</p> <h3>Was für wen gilt</h3> <p>Im Geschäftsverkehr zwischen Unternehmen muss inzwischen jeder in der Lage sein, solche Rechnungen zu empfangen. Für das Versenden gelten gestaffelte Übergangsfristen, abhängig von der Unternehmensgröße.</p> <p>Empfangen bedeutet dabei mehr als speichern. Die Rechnung muss geprüft, verbucht und über die Aufbewahrungsfrist im Originalformat vorgehalten werden.</p> <h3>Was das praktisch heißt</h3> <p>Wer ein System hat, das die gängigen Formate versteht, muss nichts weiter tun. Wer noch mit Papier oder PDF arbeitet, braucht einen Weg, eingehende Rechnungen maschinell zu verarbeiten — und sollte damit nicht bis zur letzten Frist warten.</p>'],
    ['10.04.2026','fach','Warum Thermopapier aus der Werkstatt verschwindet','Bonrollen enthalten Stoffe, die über die Haut aufgenommen werden. Dazu verblassen die Belege binnen Monaten. Der digitale Beleg löst beide Probleme auf einmal.','i-beleg','<p>Bonrollen sind beschichtet, damit der Druck ohne Farbe entsteht. Diese Beschichtung enthält Substanzen, die über die Haut aufgenommen werden. Wer täglich Belege ausgibt, hat damit dauerhaft Kontakt.</p> <h3>Zwei Probleme auf einmal</h3> <p>Neben der gesundheitlichen Frage steht die Haltbarkeit. Thermopapier verblasst, je nach Lagerung binnen Monaten. Ein Beleg, der zehn Jahre aufbewahrt werden muss, ist nach zwei Jahren womöglich leer. Wer das kennt, kopiert Belege — und hat doppelte Arbeit.</p> <h3>Der digitale Beleg</h3> <p>Ein Beleg per QR-Code oder E-Mail löst beides. Er ist unbegrenzt lesbar, jederzeit erneut abrufbar und kostet keine Rolle. Rechtlich ist er dem gedruckten gleichgestellt, sofern der Kunde ihn erhält und nicht widerspricht.</p> <p>Nebenbei entfällt der Moment, in dem die Rolle mitten im Kassiervorgang leer ist.</p>'],
    ['27.03.2026','branche','Die Werkstatt ist der Ertragsbringer, nicht der Verkauf','Während Neuverkäufe stagnieren, wächst das Servicegeschäft. Wer seine Werkstattauslastung nicht kennt, verschenkt genau dort Geld.','i-werk','<p>Während der Verkauf neuer Räder stagniert, wächst das Servicegeschäft seit Jahren. Reparatur, Wartung und Umbau sind planbarer, weniger konjunkturabhängig und haben eine bessere Marge als der Handel.</p> <h3>Das Problem mit der Auslastung</h3> <p>Viele Betriebe wissen nicht, wie ausgelastet ihre Werkstatt tatsächlich ist. Termine werden nach Gefühl vergeben, und am Ende der Woche stapeln sich die Räder oder die Bank steht leer.</p> <p>Wer die Auslastung sieht, bevor er einen Termin zusagt, verschenkt weniger. Er kann sagen: nicht Dienstag, aber Donnerstag um zehn — statt einen Termin zu geben, der ohnehin platzt.</p> <h3>Was messbar ist</h3> <p>Durchlaufzeit je Auftrag, Auslastung je Mitarbeiter, Anteil der Nacharbeiten. Drei Zahlen, die nebenbei entstehen und mehr über den Betrieb sagen als der Monatsumsatz.</p>'],
    ['13.03.2026','fach','Zwei Minuten Auftragsannahme statt zehn','Wo der Auftrag entsteht, entscheidet über den Durchsatz. Wir haben nachgerechnet, was der Rückweg ins Büro einen Betrieb pro Jahr kostet.','i-hero','<p>Die klassische Annahme läuft so: Kunde kommt, Mitarbeiter nimmt das Rad, geht ins Büro, schreibt einen Auftrag, kommt zurück, fragt nach. Zwischen fünf und zehn Minuten, mehrfach am Tag.</p> <h3>Die Rechnung</h3> <p>Bei zwölf Annahmen täglich und acht Minuten Bearbeitung sind das rund anderthalb Stunden. Auf ein Jahr gerechnet ergibt das mehrere Wochen Arbeitszeit, die nicht in der Werkstatt ankommen.</p> <p>Findet die Annahme am Tresen statt, dauert sie zwei Minuten: Kunde nennt das Problem, Mitarbeiter erfasst es am Tablet, fotografiert das Rad, druckt das Etikett. Kein Rückweg, keine zweite Erfassung.</p> <h3>Was das wert ist</h3> <p>Die gewonnene Zeit ist Werkstattzeit, also fakturierbare Zeit. Genau dort entscheidet sich, ob sich eine Software rechnet — nicht an der Lizenzgebühr.</p>'],
    ['28.02.2026','produkt','Werkstattplanung zeigt Auslastung vor der Zusage','Termine platzen selten aus Nachlässigkeit, sondern weil niemand sah, dass der Tag schon voll war.','i-werk','<p>Termine platzen selten aus Nachlässigkeit. Meist sagt jemand einen Termin zu, ohne zu wissen, dass der Tag längst voll ist.</p> <h3>Sichtbar vor der Zusage</h3> <p>Die Planung zeigt, wie viele Stunden an einem Tag bereits vergeben sind und wer woran arbeitet. Wer einen Termin vergibt, sieht sofort, ob er realistisch ist.</p> <p>Das schützt auch die Werkstatt: Statt sechs Räder für Dienstag anzunehmen und drei davon zu verschieben, werden vier angenommen und alle fertig.</p>'],
    ['14.02.2026','branche','Was Gastronomen an der Bestellaufnahme verlieren','In Stoßzeiten ist nicht die Küche der Engpass, sondern der Weg zum Tisch. Eine Rechnung mit echten Zahlen.','i-doku','<p>In der Stoßzeit ist nicht die Küche der Engpass, sondern der Weg zum Tisch. Jede Bestellung kostet den Gang hin, das Aufnehmen und den Gang zurück.</p> <h3>Eine Überschlagsrechnung</h3> <p>Bei achtzig Bestellungen an einem Abend und zwei Minuten je Aufnahme sind das über zweieinhalb Stunden reine Aufnahmezeit. Diese Zeit fehlt beim Servieren, beim Abräumen und beim Kassieren.</p> <p>Bestellen die Gäste selbst, verschiebt sich die Arbeit dorthin, wo sie sichtbar ist. Das Personal bringt, statt zu notieren.</p> <h3>Der Nebeneffekt</h3> <p>Wer die Karte in Ruhe liest, bestellt eher nach. Kein Gast winkt dreimal, um noch ein Getränk zu ordern — er tippt es an.</p>'],
    ['31.01.2026','fach','Datenübernahme beim Systemwechsel','Der häufigste Grund, bei einer schlechten Software zu bleiben, sind die Altdaten. Was sich übernehmen lässt und was nicht.','i-laptops','<p>Der häufigste Grund, bei einer schlechten Software zu bleiben, sind die Altdaten. Die Sorge, Kundenstamm und Historie zu verlieren, wiegt schwerer als der tägliche Ärger.</p> <h3>Was sich übernehmen lässt</h3> <ul> <li>Kundenstammdaten mit Anschrift und Kontaktweg</li> <li>Artikel und Preise</li> <li>Offene Aufträge und Vorgänge</li> <li>Abgeschlossene Aufträge als Historie</li> <li>Rechnungen als Nachweis</li> </ul> <h3>Was schwierig ist</h3> <p>Anhänge und Fotos hängen oft an einer Datenstruktur, die sich nicht sauber exportieren lässt. Und Systeme, die keinen Export anbieten, machen den Wechsel zur Handarbeit — das ist der eigentliche Kostenpunkt.</p> <p>Bei uns ist die Übernahme Teil der Einrichtung und kostet nichts extra. Wir prüfen vorher, was Ihr bisheriges System hergibt, und sagen offen, was verloren geht.</p>'],
    ['17.01.2026','produkt','Online-Terminbuchung direkt im Werkstattkalender','Kunden buchen rund um die Uhr. Das System kennt die Auslastung und bietet nur an, was auch machbar ist.','i-laptops','<p>Termine werden abends vereinbart, am Wochenende und in der Mittagspause — also dann, wenn niemand ans Telefon geht.</p> <h3>Rund um die Uhr</h3> <p>Die Buchung greift auf denselben Kalender zu, den die Werkstatt sieht. Angeboten wird nur, was tatsächlich möglich ist. Doppelbuchungen kann es nicht geben, weil es keinen zweiten Kalender gibt.</p> <p>Der Kunde erhält eine Bestätigung, der Betrieb einen Eintrag. Niemand muss zurückrufen.</p>'],
    ['09.01.2026','meldung','Neues Jahr, neue Vorgaben: Was sich 2026 ändert','Ein Überblick über die Fristen, die Betriebe in Deutschland und Österreich betreffen.','i-n1','<p>Für Betriebe in Deutschland und Österreich ändern sich mehrere Anforderungen. Ein Überblick über das, was zeitlich ansteht.</p> <h3>Elektronische Rechnung</h3> <p>Die Pflicht zum Empfang gilt bereits. Beim Versand laufen gestaffelte Übergangsfristen, abhängig von Umsatz und Unternehmensgröße.</p> <h3>Kassenführung</h3> <p>Die Meldepflicht für elektronische Kassensysteme ist zu beachten. Wer eine Kasse in Betrieb nimmt oder außer Betrieb setzt, muss das anzeigen.</p> <h3>Was zu tun ist</h3> <p>Prüfen Sie, ob Ihr System die geforderten Formate beherrscht und ob Ihre Kasse gemeldet ist. Beides lässt sich in wenigen Minuten klären und erspart im Prüfungsfall erhebliche Diskussionen.</p>'],
    ['18.12.2025','fach','Wenn die WhatsApp-Anfrage im Verlauf verschwindet','Kundenanfragen über Messenger sind bequem, bis jemand sucht, was vor drei Wochen zugesagt wurde. Warum jede Anfrage eine Nummer braucht.','i-chat','<p>Nachrichtendienste sind bequem für Kunden und ein Problem für Betriebe. Eine Anfrage steht im Verlauf zwischen privaten Nachrichten, und wer sie beantwortet hat, weiß niemand.</p> <h3>Warum jede Anfrage eine Nummer braucht</h3> <p>Ein Vorgang mit Nummer lässt sich zuweisen, wiederfinden und abschließen. Man kann sehen, wer zuständig ist und ob geantwortet wurde. Ein Chatverlauf kann das nicht.</p> <p>Besonders deutlich wird das bei Vertretung. Wer für einen erkrankten Kollegen einspringt, kann in ein Vorgangssystem hineinsehen — in dessen Nachrichtenverlauf nicht.</p> <h3>Wie es funktioniert</h3> <p>Die Nachricht kommt an derselben Nummer an wie bisher. Im Hintergrund entsteht daraus ein Vorgang, der Anliegen erkennt und zuordnet. Der Kunde merkt davon nichts, außer dass er schneller Antwort bekommt.</p>'],
    ['04.12.2025','branche','Fahrer, Fracht und die Lücke dazwischen','Auf manchen Strecken läuft die Vermittlung noch über Telefonketten. Was das an Leerfahrten kostet.','i-trans','<p>Auf vielen Strecken läuft die Vermittlung über Telefon und persönliche Kontakte. Das funktioniert, solange man die Leute kennt, und bricht zusammen, sobald jemand ausfällt.</p> <h3>Was Leerfahrten kosten</h3> <p>Eine Tour rechnet sich über beide Richtungen. Wer leer zurückfährt, trägt die Kosten für Kraftstoff, Zeit und Fahrzeug allein auf der Hinfahrt. Je nach Strecke halbiert das den Ertrag.</p> <p>Der Aufwand, Rückfracht zu finden, ist beim Telefonieren so hoch, dass viele ihn scheuen. Wenn passende Angebote entlang der Route sichtbar sind, ändert sich diese Rechnung.</p>'],
    ['20.11.2025','produkt','Berichte diktieren statt tippen','Zwei gesprochene Sätze werden zum strukturierten Besuchsbericht. Fertig, noch vor der Weiterfahrt.','i-buero','<p>Nach einem Kundentermin sind zwei Sätze im Kopf. Bis zum Abend sind es keine mehr. Deshalb entstehen Besuchsberichte entweder unterwegs oder gar nicht.</p> <h3>Wie es abläuft</h3> <p>Der Mitarbeiter spricht, was besprochen wurde. Daraus entsteht ein strukturierter Bericht mit den Punkten, die für den nächsten Termin zählen: was zugesagt wurde, was offen ist, wann nachgefasst wird.</p> <p>Der Bericht liegt beim Kunden, nicht in einem Notizbuch. Wer den Termin übernimmt, sieht den Stand.</p>'],
    ['06.11.2025','fach','Wie viel Software braucht ein Ein-Mann-Betrieb?','Nicht jede Funktion lohnt sich für jeden. Eine ehrliche Einordnung, ab wann sich welches Modul rechnet.','i-hero','<p>Nicht jede Funktion lohnt sich für jede Betriebsgröße. Eine ehrliche Einordnung, ab wann sich welcher Baustein rechnet.</p> <h3>Ab dem ersten Tag sinnvoll</h3> <p>Auftragserfassung und Rechnungsstellung. Auch allein verliert man ohne System den Überblick, und die Zeit für die Abrechnung ist ohnehin knapp.</p> <h3>Ab drei Mitarbeitenden</h3> <p>Werkstattplanung und Zeiterfassung. Solange man selbst arbeitet, weiß man, was ansteht. Sobald andere mitarbeiten, nicht mehr.</p> <h3>Ab fünf Mitarbeitenden</h3> <p>Lagerverwaltung mit automatischer Abbuchung und Auswertung je Person. Darunter ist der Pflegeaufwand höher als der Nutzen.</p> <p>Wenn sich etwas für Sie nicht rechnet, sagen wir das. Ein Kunde, der zu viel bezahlt, bleibt nicht lange.</p>'],
    ['23.10.2025','fach','Lager, das sich selbst abbucht','Der teuerste Teil der Lagerhaltung ist nicht das Teil, sondern die Zeit, es zu erfassen. Wie Verbrauch automatisch auf die Rechnung kommt.','i-doku','<p>Der teuerste Teil der Lagerhaltung ist nicht das Teil, sondern die Zeit, die seine Erfassung kostet. Deshalb wird sie oft weggelassen — und dann stimmt der Bestand nicht.</p> <h3>Abbuchung beim Verbauen</h3> <p>Wird ein Teil einem Auftrag zugeordnet, verlässt es das Lager und erscheint auf der Rechnung. Ein Vorgang statt drei. Niemand muss abends Bestände korrigieren.</p> <p>Unterschreitet ein Artikel die Mindestmenge, erscheint er auf der Nachbestellliste. Das verhindert den Fall, dass ein Rad wegen eines Zehn-Euro-Teils eine Woche steht.</p>'],
    ['09.10.2025','branche','Zeiterfassung ohne privates Handy','Viele Betriebe scheitern an der Frage, ob Mitarbeitende eine App installieren müssen. Es geht auch anders.','i-runde','<p>Viele Einführungen scheitern nicht an der Technik, sondern an der Frage, ob Mitarbeitende eine App auf ihrem privaten Telefon installieren müssen. Diese Sorge ist berechtigt und sollte ernst genommen werden.</p> <h3>Die Alternative</h3> <p>Ein Tablet am Eingang und eine Karte im Portemonnaie. Auflegen genügt, keine Anmeldung, keine App, kein privates Gerät. Das Tablet läuft in einem gesperrten Modus und lässt sich nicht verlassen.</p> <p>Für die Auswertung reicht ein Zugang für die Betriebsleitung. Die Mitarbeitenden sehen ihre eigenen Zeiten, sonst niemand.</p>'],
    ['25.09.2025','produkt','Rechnung mit QR-Code','Der Kunde scannt, zahlt, fertig. Auch Wochen später noch, wenn die Rechnung per Mail kam.','i-doku','<p>Eine Rechnung, die per Überweisung bezahlt wird, wandert durch mehrere Hände: ausdrucken, mitnehmen, abtippen, überweisen. An jeder Stelle kann sie liegenbleiben.</p> <h3>Scannen statt abtippen</h3> <p>Der aufgedruckte Code enthält Empfänger, Betrag und Verwendungszweck. Die Banking-App liest ihn, der Kunde bestätigt. Keine Zahlendreher, keine falschen Verwendungszwecke.</p> <p>Das funktioniert auch bei Rechnungen, die per E-Mail kommen, und Wochen später noch.</p>'],
    ['11.09.2025','fach','Mehrere Standorte, eine Auswertung','Filialen einzeln steuern, Zahlen zusammen sehen, worauf es beim Aufbau ankommt.','i-buero','<p>Wer eine zweite Filiale eröffnet, steht vor der Frage, ob er ein zweites System braucht. Die Antwort hängt davon ab, wie unabhängig die Standorte arbeiten sollen.</p> <h3>Getrennt steuern, gemeinsam auswerten</h3> <p>Jeder Standort hat seine eigenen Aufträge, seine eigene Kasse und sein eigenes Lager. Die Leitung sieht beide Standorte nebeneinander und kann vergleichen.</p> <p>Wichtig ist die saubere Trennung der Kassen: Jeder Standort führt seinen eigenen Abschluss, sonst wird es bei einer Prüfung unübersichtlich.</p>'],
    ['28.08.2025','branche','Der Kunde, der dreimal anruft','Jeder Anruf „Ist mein Rad fertig?“ kostet den Betrieb Zeit. Die Lösung ist keine Hotline, sondern eine automatische Nachricht.','i-kontakt','<p>„Ist mein Rad fertig?" ist die häufigste Frage im Werkstattbetrieb. Jeder Anruf unterbricht die Arbeit, und die Antwort erfordert oft erst einen Blick in die Werkstatt.</p> <h3>Die Ursache</h3> <p>Der Kunde ruft an, weil er nichts hört. Er weiß nicht, ob sein Auftrag begonnen wurde, ob ein Teil fehlt oder ob er abholen kann.</p> <h3>Die Lösung ist keine Hotline</h3> <p>Wenn die Nachricht automatisch rausgeht, sobald der Auftrag geschlossen wird, entfällt der Anruf. Nicht weil der Kunde weniger wissen will, sondern weil er es bereits weiß.</p> <p>Bei Betrieben, die das eingeführt haben, sinkt die Zahl der Statusanrufe deutlich — und zwar dauerhaft.</p>'],
    ['14.08.2025','fach','Was ein Tagesbericht enthalten sollte','Und was nicht. Kennzahlen, die Betriebe wirklich steuern, statt Zahlen, die nur schön aussehen.','i-buero','<p>Viele Auswertungen zeigen, was leicht zu messen ist, nicht was zu steuern hilft. Ein brauchbarer Tagesbericht passt auf eine Seite.</p> <h3>Was hineingehört</h3> <ul> <li>Was kam herein: neue Aufträge, Anfragen, Termine</li> <li>Was ging hinaus: abgeschlossene Aufträge, Rechnungen</li> <li>Was hängt: Vorgänge, die auf Teile oder Rückmeldung warten</li> <li>Was kassiert wurde, getrennt nach Zahlungsart</li> </ul> <h3>Was nicht hineingehört</h3> <p>Kennzahlen, aus denen keine Handlung folgt. Wenn eine Zahl niemanden zu einer Entscheidung bringt, gehört sie in die Monatsauswertung, nicht in den Tagesbericht.</p>'],
    ['31.07.2025','produkt','Gesprächsleitfaden für den Außendienst','Vor dem Termin sehen, was zuletzt lief und was ansteht. Vorbereitung ohne Aktenordner.','i-talk','<p>Ein Termin ist besser, wenn man weiß, was beim letzten Mal besprochen wurde. Das steht selten im Kopf und noch seltener griffbereit.</p> <h3>Vor dem Termin</h3> <p>Was lief zuletzt, welche Zusagen stehen offen, welche Themen sind angebrochen. Zusammengefasst auf dem Gerät, das ohnehin mitkommt.</p> <p>Das ersetzt keine Vorbereitung, spart aber die Suche und verhindert die peinliche Frage, worüber man beim letzten Mal gesprochen hat.</p>'],
    ['17.07.2025','fach','Warum wir unsere Software selbst betreiben','Eine Agentur liefert ab und geht. Wer den Betrieb übernimmt, baut anders, und merkt Fehler zuerst.','i-hero','<p>Es gibt zwei Wege, Software auszuliefern. Man übergibt sie dem Kunden und ist fertig, oder man betreibt sie weiter und bleibt in der Verantwortung.</p> <h3>Warum der zweite Weg</h3> <p>Wer nur baut, erfährt nie, was im Betrieb wirklich passiert. Fehler werden vom Kunden umgangen statt gemeldet, und Verbesserungen entstehen nicht.</p> <p>Wer betreibt, merkt Probleme zuerst. Wenn morgens etwas ausfällt, ist das unser Problem, bevor es Ihres wird. Das ändert die Art, wie man baut: robuster, mit mehr Überwachung, weniger klug und mehr verlässlich.</p> <h3>Was das für Sie bedeutet</h3> <p>Sie haben einen Ansprechpartner statt einer Kette. Und wir haben keinen Anreiz, ein System auszuliefern, das schwer zu betreiben ist.</p>'],
    ['03.07.2025','branche','Was Werkstätten beim Softwarewechsel fürchten','Datenverlust, Stillstand, Schulungsaufwand. Alle drei Sorgen sind berechtigt, und alle drei lösbar.','i-schulung','<p>Drei Sorgen kommen in fast jedem Gespräch vor. Alle drei sind berechtigt.</p> <h3>Datenverlust</h3> <p>Was übernommen werden kann, klären wir vor der Entscheidung, nicht danach. Sie bekommen eine Liste dessen, was Ihr bisheriges System hergibt.</p> <h3>Stillstand</h3> <p>Wir stellen nicht an einem Samstag alles um. Der Wechsel läuft schrittweise, das alte System bleibt lesbar, bis alles steht.</p> <h3>Schulungsaufwand</h3> <p>Ein Tag vor Ort für das ganze Team. Danach arbeitet man, Rückfragen klären wir laufend. Wer wochenlange Einarbeitung braucht, hat das falsche System.</p>'],
    ['19.06.2025','fach','Belege, die nach fünf Jahren noch lesbar sind','Aufbewahrungspflicht trifft auf verblassende Bonrollen. Wie digitale Belege das Problem umgehen.','i-beleg','<p>Aufbewahrungspflichten treffen auf ein Papier, das verblasst. Wer Kassenbelege zehn Jahre aufheben muss, hat mit Thermopapier ein Problem.</p> <h3>Was passiert</h3> <p>Je nach Lagerung ist ein Bon nach ein bis drei Jahren nicht mehr lesbar. Wärme und Licht beschleunigen das. Im Prüfungsfall ist ein leerer Zettel kein Beleg.</p> <h3>Digitale Belege</h3> <p>Sie altern nicht, lassen sich jederzeit erneut ausgeben und sind zusätzlich durchsuchbar. Rechtlich sind sie dem Papierbeleg gleichgestellt.</p>'],
    ['05.06.2025','produkt','Sendungsverfolgung ohne Anruf','Der Auftraggeber sieht den Stand selbst. Das spart beiden Seiten das Nachfragen.','i-trans','<p>Die Frage nach dem Stand einer Sendung kostet beide Seiten Zeit: den Auftraggeber den Anruf, den Fahrer die Unterbrechung.</p> <h3>Selbst nachsehen</h3> <p>Der Auftraggeber ruft den Stand ab, wann er möchte. Er sieht, wo die Sendung ist und wann die Übergabe erwartet wird.</p> <p>Für den Fahrer bedeutet das weniger Anrufe während der Fahrt. Für den Auftraggeber bessere Auskunft gegenüber seinem eigenen Kunden.</p>'],
    ['22.05.2025','fach','Routenplanung nach Straße statt Luftlinie','Der Unterschied klingt klein und macht am Tag einen ganzen Termin aus.','i-talk','<p>Der Unterschied klingt akademisch und macht am Tag einen ganzen Termin aus.</p> <h3>Warum Luftlinie täuscht</h3> <p>Zwei Kunden können zehn Kilometer auseinanderliegen und trotzdem vierzig Minuten Fahrzeit trennen, wenn ein Fluss, eine Bahnlinie oder eine Ortsdurchfahrt dazwischenliegt. Eine Planung nach Entfernung erzeugt Routen, die auf der Karte gut aussehen und im Auto nicht funktionieren.</p> <p>Wir rechnen mit echten Straßendaten und tatsächlichen Fahrzeiten. Die Reihenfolge, die dabei herauskommt, sieht manchmal unlogisch aus und ist regelmäßig schneller.</p>'],
    ['08.05.2025','branche','Gastronomie: Was der Gast am Tisch wirklich will','Nicht bedient werden, sondern nicht warten. Was das für die Bestellaufnahme bedeutet.','i-gastro','<p>Nicht bedient werden. Nicht warten. Das ist ein Unterschied, der die Gestaltung des Ablaufs bestimmt.</p> <h3>Warten ist das Problem</h3> <p>Der Gast winkt, wird übersehen, winkt wieder. Diese Minuten prägen den Eindruck stärker als das Essen. Wer selbst bestellen kann, wartet nicht — und empfindet den Service als besser, obwohl weniger Personal am Tisch war.</p> <p>Bedienung bleibt wichtig, aber dort, wo sie wirkt: beim Bringen, beim Empfehlen, beim Verabschieden.</p>'],
    ['24.04.2025','fach','Ein System statt zehn Einzel-Tools','Die versteckten Kosten von Insellösungen: doppelte Erfassung, widersprüchliche Zahlen, Zuständigkeitslücken.','i-formular','<p>Insellösungen kosten nicht dort, wo man es vermutet. Die Lizenzen sind das kleinere Problem.</p> <h3>Die versteckten Kosten</h3> <ul> <li>Doppelte Erfassung: Kundendaten in drei Programmen pflegen</li> <li>Widersprüchliche Zahlen: Welcher Umsatz stimmt?</li> <li>Zuständigkeitslücken: Niemand weiß, wo ein Vorgang gerade steht</li> <li>Übergabeverluste: Was von Hand übertragen wird, geht schief</li> </ul> <h3>Der Maßstab</h3> <p>Ein System muss nicht alles können. Es muss dafür sorgen, dass eine Information nur einmal erfasst wird und überall dort auftaucht, wo sie gebraucht wird.</p>'],
    ['10.04.2025','produkt','Kiosk-Modus für Terminals','Das Tablet lässt sich nicht verlassen. Kein Zugriff auf anderes, keine Diskussion.','i-n3','<p>Ein Tablet am Eingang ist nur so lange ein Terminal, wie es niemand für anderes benutzt.</p> <h3>Gesperrt heißt gesperrt</h3> <p>Das Gerät startet in die Anwendung und lässt sich nicht verlassen. Kein Browser, keine Einstellungen, kein anderes Programm. Auch ein Neustart ändert daran nichts.</p> <p>Das schützt nicht nur vor Ablenkung, sondern auch vor versehentlichen Änderungen, die sonst jemand mühsam zurückdrehen muss.</p>'],
    ['27.03.2025','fach','Was eine zertifizierte Kasse kostet, und was sie spart','Marktübliche Aufpreise im Vergleich. Warum wir die Sicherungseinrichtung nicht extra berechnen.','i-beleg','<p>Die technische Sicherungseinrichtung ist vorgeschrieben. Interessant ist, wie unterschiedlich sie berechnet wird.</p> <h3>Marktüblich</h3> <p>Die meisten Anbieter berechnen sie monatlich zusätzlich, typischerweise im Bereich von zehn bis zwanzig Euro je Kasse. Bei mehreren Kassen summiert sich das.</p> <h3>Warum wir sie nicht extra berechnen</h3> <p>Sie ist keine Zusatzfunktion, sondern gesetzliche Voraussetzung für den Betrieb einer Kasse. Etwas gesondert zu berechnen, das ohnehin verpflichtend ist, halten wir für unsauber. Ab der Pro-Stufe ist sie enthalten.</p>'],
    ['13.03.2025','branche','Handwerk und Bürokratie','Zwischen Aufmaß und Abrechnung liegt oft ein Zettel. Wo Digitalisierung wirklich entlastet.','i-team','<p>Zwischen dem Aufmaß beim Kunden und der Rechnung liegen oft mehrere Medienbrüche: Zettel, Foto, Tabelle, Textverarbeitung.</p> <h3>Wo Digitalisierung wirklich entlastet</h3> <p>Nicht überall. Sie hilft dort, wo dieselbe Information mehrfach angefasst wird. Ein Aufmaß, das vor Ort erfasst wird und ohne weiteres Zutun zur Position und zur Rechnung wird, spart mehr als jede Einzeloptimierung.</p> <p>Sie hilft nicht bei Aufgaben, die ohnehin nur einmal vorkommen. Dort ist der Einrichtungsaufwand höher als der Nutzen.</p>'],
    ['27.02.2025','fach','Warum wir keine Preise verstecken','Wer Preise erst nach dem Telefonat nennt, filtert nicht, er verliert.','i-hero','<p>Viele Anbieter nennen Preise erst nach einem Gespräch. Die Begründung lautet, jedes Angebot sei individuell.</p> <h3>Was dabei passiert</h3> <p>Wer keinen Preis findet, geht davon aus, dass es teuer wird. Ein Teil der Interessenten meldet sich gar nicht erst — darunter die, die gut gepasst hätten.</p> <p>Wer sich meldet, kostet Zeit. Bei einem Team von zwei Personen ist ein Gespräch mit jemandem, der beim Preis abspringt, ein verlorener Vormittag.</p> <h3>Unser Weg</h3> <p>Der Einstiegspreis steht auf der Produktseite. Wer damit nicht zurechtkommt, ruft nicht an — und das ist für beide Seiten die bessere Lösung.</p>'],
    ['13.02.2025','produkt','Angebote als PDF, direkt aus dem Vorgang','Was kalkuliert wurde, steht im Angebot. Ohne Zwischenschritt über die Textverarbeitung.','i-kontakt','<p>Ein Angebot entsteht meist zweimal: einmal in der Kalkulation, einmal in der Textverarbeitung. Dazwischen werden Zahlen übertragen.</p> <h3>Ohne Zwischenschritt</h3> <p>Was kalkuliert wurde, steht im Angebot. Positionen, Mengen, Preise, Summen. Layout und Briefkopf sind hinterlegt, die Nummer wird fortlaufend vergeben.</p> <p>Ändert sich etwas, ändert es sich an einer Stelle. Das Angebot bleibt mit dem Vorgang verbunden, aus dem später der Auftrag wird.</p>'],
    ['30.01.2025','fach','Verfügbarkeit: Was passiert, wenn etwas ausfällt','Kein System läuft immer. Entscheidend ist, wie schnell jemand reagiert, und ob er das System kennt.','i-laptops','<p>Kein System läuft immer. Entscheidend ist, wie schnell jemand reagiert und ob diese Person das System kennt.</p> <h3>Wie wir es halten</h3> <p>Die Systeme werden überwacht. Fällt etwas aus, erfahren wir es, bevor Sie anrufen. In den meisten Fällen ist das Problem behoben, bevor es im Betrieb auffällt.</p> <p>Wenn Sie doch anrufen, sprechen Sie mit jemandem, der das System gebaut hat. Nicht mit einer ersten Ebene, die ein Formular ausfüllt.</p> <h3>Was wir nicht versprechen</h3> <p>Hundertprozentige Verfügbarkeit. Wer das zusagt, hat entweder nicht nachgedacht oder rechnet mit Ihrer Nachsicht.</p>'],
    ['16.01.2025','branche','Außendienst: Der Bericht, der nie geschrieben wird','Abends um acht schreibt niemand mehr gern Protokolle. Wie sich das Problem an der Wurzel löst.','i-buero','<p>Abends um acht schreibt niemand mehr gern Protokolle. Deshalb entstehen Berichte entweder unterwegs oder gar nicht — und meistens gar nicht.</p> <h3>An der Wurzel ansetzen</h3> <p>Es hilft nicht, Berichte einzufordern. Es hilft, sie so einfach zu machen, dass sie nebenbei entstehen. Zwei gesprochene Sätze nach dem Termin, während man noch im Auto sitzt.</p> <p>Der Unterschied zeigt sich nicht bei einem Bericht, sondern nach einem halben Jahr: Dann gibt es eine Historie statt Erinnerungslücken.</p>'],
    ['12.12.2024','fach','Aufmaß vor Ort statt Übertragung im Büro','Jede Übertragung ist eine Fehlerquelle und kostet Zeit. Warum Erfassung dorthin gehört, wo gemessen wird.','i-team','<p>Jede Übertragung ist eine Fehlerquelle. Maße, die auf einem Zettel stehen und später in eine Tabelle wandern, werden falsch gelesen oder falsch getippt.</p> <h3>Dort erfassen, wo gemessen wird</h3> <p>Das Aufmaß entsteht am Objekt, mit Foto und Bezug zur Position. Was gemessen wurde, steht später in der Rechnung — ohne dass jemand es überträgt.</p> <p>Das verhindert auch Diskussionen über Nachträge, weil Maße belegt sind statt geschätzt.</p>'],
    ['28.11.2024','produkt','Statistik, die nebenbei entsteht','Auswertung ist nur nützlich, wenn sie keine zusätzliche Arbeit macht.','i-team','<p>Auswertung ist nur nützlich, wenn sie keine zusätzliche Arbeit macht. Sobald jemand Zahlen zusammensuchen muss, entsteht sie unregelmäßig oder gar nicht.</p> <h3>Aus dem Tagesgeschäft</h3> <p>Was tagsüber erfasst wird, steht abends im Bericht. Keine Eingabe, keine Nachpflege. Die Zahlen sind so gut wie die Erfassung — und die passiert ohnehin.</p>'],
    ['14.11.2024','fach','Grenzüberschreitend arbeiten: zwei Rechtsräume, ein System','Wer zwischen Ländern arbeitet, muss beide Regelwerke bedienen. Wie sich das ohne Zweitprogramm lösen lässt.','i-trans','<p>Wer zwischen Ländern arbeitet, muss zwei Regelwerke bedienen. Unterschiedliche Anforderungen an Rechnung, Kasse und Nachweis.</p> <h3>Ohne Zweitprogramm</h3> <p>Die Grundlage ist dieselbe, die Regeln sind je Land hinterlegt. Ein Vorgang in Deutschland folgt deutschen Vorgaben, einer in Österreich den dortigen.</p> <p>Das ist aufwendiger zu bauen als eine Lösung für ein Land, erspart aber genau das, was sonst passiert: zwei Systeme, zwei Datenbestände, keine gemeinsame Auswertung.</p>'],
    ['31.10.2024','branche','Warum kleine Betriebe zuletzt digitalisieren','Nicht aus Unwillen, sondern weil die Angebote auf Konzerne zugeschnitten sind. Das lässt sich ändern.','i-hero','<p>Nicht aus Unwillen. Sondern weil die Angebote auf andere Größen zugeschnitten sind.</p> <h3>Das Grundproblem</h3> <p>Systeme für große Betriebe bringen Funktionen mit, die ein Fünf-Personen-Betrieb nie braucht — und den Einrichtungsaufwand mit. Systeme für Kleinstbetriebe hören genau dort auf, wo es interessant wird.</p> <p>Dazwischen liegt eine Lücke, in der viele Handwerks- und Handelsbetriebe sitzen. Sie sind zu groß für Tabellen und zu klein für Unternehmenssoftware.</p> <h3>Was daraus folgt</h3> <p>Man muss dort anfangen, wo es weh tut, nicht bei der vollständigen Abbildung aller Prozesse. Und der Einstieg muss ohne Beratungsprojekt möglich sein.</p>'],
    ['17.10.2024','fach','Vom Auftrag zur Rechnung ohne Medienbruch','Wo Daten das Format wechseln, entstehen Fehler. Ein durchgehender Weg spart mehr als jede Einzeloptimierung.','i-n1','<p>Überall dort, wo Daten das Format wechseln, entstehen Fehler. Vom Zettel in die Maske, aus der Maske in die Tabelle, aus der Tabelle ins Rechnungsprogramm.</p> <h3>Ein durchgehender Weg</h3> <p>Der Auftrag entsteht bei der Annahme und trägt sich durch: Bearbeitung, Material, Abschluss, Rechnung. Was am Anfang erfasst wurde, steht am Ende auf dem Beleg.</p> <p>Das spart mehr als jede Einzeloptimierung, weil es nicht einen Schritt beschleunigt, sondern mehrere Schritte entfallen lässt.</p>'],
    ['03.10.2024','produkt','Benachrichtigungen, die von selbst rausgehen','Ohne dass jemand daran denken muss, der häufigste Grund, warum Kunden nachfragen.','i-kontakt','<p>Die Nachricht „Ihr Auftrag ist fertig" wird selten vergessen, weil sie unwichtig wäre. Sie wird vergessen, weil sie zusätzlich zur eigentlichen Arbeit anfällt.</p> <h3>An den Vorgang gekoppelt</h3> <p>Wird der Auftrag geschlossen, geht die Nachricht raus. Niemand muss daran denken, niemand muss eine Nummer heraussuchen.</p> <p>Das ist der häufigste Grund, warum Kunden anrufen — und der am einfachsten abzustellende.</p>'],
    ['19.09.2024','fach','Was eine gute Übergabe ausmacht','Unterschrift, Foto, Zeitstempel. Warum der Nachweis wichtiger wird, je länger er zurückliegt.','i-trans','<p>Solange alles gut geht, interessiert sich niemand für die Dokumentation. Sie wird wichtig, wenn etwas strittig ist.</p> <h3>Drei Bestandteile</h3> <ul> <li>Unterschrift des Empfängers</li> <li>Foto der übergebenen Ware</li> <li>Zeitstempel und Ort</li> </ul> <p>Zusammen ergibt das einen Nachweis, der auch Wochen später trägt. Ohne diese drei Angaben steht Aussage gegen Aussage.</p>'],
    ['05.09.2024','branche','Personalmangel und Software','Wenn Hände fehlen, zählt jede gesparte Minute doppelt. Wo Systeme wirklich entlasten, und wo nicht.','i-werk','<p>Wenn Hände fehlen, zählt jede gesparte Minute doppelt. Software kann Personal nicht ersetzen, aber sie kann verhindern, dass vorhandenes Personal Zeit mit Übertragen verbringt.</p> <h3>Wo sie entlastet</h3> <p>Bei allem, was mehrfach angefasst wird: doppelte Erfassung, Statusauskünfte, Terminvereinbarungen, Nachrechnen von Zeiten.</p> <h3>Wo nicht</h3> <p>Bei der eigentlichen Arbeit. Ein Rad wird nicht schneller repariert, weil die Software gut ist. Wer das verspricht, verkauft Ihnen etwas.</p>'],
    ['22.08.2024','fach','Schulung vor Ort statt Videokurs','Warum wir zu den Betrieben fahren, obwohl es teurer ist.','i-schulung','<p>Eine Aufzeichnung ist billiger und wirkt gründlicher. Trotzdem fahren wir hin.</p> <h3>Warum</h3> <p>Im Video sieht man das System. Vor Ort sieht man den Betrieb. Erst dort zeigt sich, dass die Annahme am Stehtisch passiert, dass der Drucker zwei Räume weiter steht und dass eine Mitarbeiterin nie ein Tablet benutzt hat.</p> <p>Diese Dinge entscheiden darüber, ob ein System angenommen wird. Sie stehen in keiner Anleitung.</p>'],
    ['08.08.2024','meldung','samoLabs nimmt Arbeit an eigenen Produkten auf','Aus der Auftragsentwicklung heraus entstehen die ersten eigenen Systeme für den Mittelstand.','i-hero','<p>Nach Jahren in der Auftragsentwicklung entstehen die ersten eigenen Systeme. Der Anlass ist einfach: Dieselben Probleme tauchen in unterschiedlichen Betrieben immer wieder auf.</p> <h3>Der Unterschied</h3> <p>Auftragsarbeit endet mit der Übergabe. Ein eigenes Produkt bleibt in der Verantwortung — es wird betrieben, gepflegt und weiterentwickelt, solange Kunden damit arbeiten.</p> <p>Das verändert die Art zu bauen. Was man selbst betreibt, baut man robuster.</p>']
  ];

  var KAT_NAME = { meldung:'Aus dem Haus', produkt:'Neue Funktion', fach:'Fachbeitrag', branche:'Aus der Branche' };
  function beitragKarte(b){
    var nr = BEITRAEGE.indexOf(b);
    return '<a class="card" href="#" data-go="beitrag:' + nr + '"><div class="ph ' + b[4] + '"></div><div class="cb">' +
      '<span class="n-kat">' + (KAT_NAME[b[1]] || '') + '</span>' +
      '<span class="n-d">' + b[0] + '</span>' +
      '<h3>' + b[2] + '</h3><p>' + b[3] + '</p>' +
      '<span class="more">Weiterlesen →</span></div></a>';
  }

  // Einzelnen Beitrag anzeigen
  function fuelleBeitrag(nr){
    var b = BEITRAEGE[parseInt(nr, 10)];
    if (!b) return false;
    document.getElementById('b-crumb').textContent = b[2].length > 40 ? b[2].slice(0, 38) + '\u2026' : b[2];
    document.getElementById('b-kat').textContent = KAT_NAME[b[1]] || '';
    document.getElementById('b-titel').textContent = b[2];
    document.getElementById('b-datum').textContent = b[0];
    document.getElementById('b-bild').className = 'ph ' + b[4];
    document.getElementById('b-anriss').textContent = b[3];
    document.getElementById('b-text').innerHTML = (b[5] || '')
      || '<p>Dieser Beitrag wird derzeit ausgearbeitet. Sprechen Sie uns an, wenn Sie zu diesem Thema Fragen haben.</p>';
    // Drei weitere Beiträge derselben Kategorie
    var weitere = BEITRAEGE.filter(function(x){ return x !== b && x[1] === b[1]; }).slice(0, 3);
    if (weitere.length < 3) {
      weitere = weitere.concat(BEITRAEGE.filter(function(x){ return x !== b && weitere.indexOf(x) === -1; }).slice(0, 3 - weitere.length));
    }
    document.getElementById('b-weitere').innerHTML = weitere.map(beitragKarte).join('');
    return true;
  }
  // Startseite: die drei jüngsten Beiträge
  document.getElementById('news-start').innerHTML =
    BEITRAEGE.slice(0, 3).map(beitragKarte).join('');

  // Nachrichtenseite: Filter und schrittweises Nachladen
  (function(){
    var ziel = document.getElementById('news-alle');
    if (!ziel) return;
    var kat = 'alle', gezeigt = 9;
    var knopf = document.getElementById('n-mehr');
    function zeichne(){
      var liste = BEITRAEGE.filter(function(b){ return kat === 'alle' || b[1] === kat; });
      ziel.innerHTML = liste.length
? liste.slice(0, gezeigt).map(beitragKarte).join('')
: '<p class="n-leer">Zu diesem Bereich gibt es noch keine Beiträge.</p>';
      knopf.style.display = liste.length > gezeigt? '': 'none';
    }
    document.getElementById('n-filter').addEventListener('click', function(e){
      var c = e.target.closest('.l-chip');
      if (!c) return;
      kat = c.getAttribute('data-kat'); gezeigt = 9;
      document.querySelectorAll('#n-filter .l-chip').forEach(function(x){ x.classList.toggle('an', x === c); });
      zeichne();
    });
    knopf.addEventListener('click', function(){ gezeigt += 9; zeichne(); });
    zeichne();
  })();


  // ── Anmeldebereich: Zugaenge als durchsuchbare Liste ────────────────
  var SCHLOSS = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
  var PORTALE = [
    ['betrieb','Werkstatt und Handel','Auftragsannahme, Werkstattplanung, Kasse und Lager. Ihr Zugang läuft über die Adresse Ihres Betriebs.','Zum Portal'],
    ['betrieb','Gastronomie. Theke','Übersicht aller offenen Tische, kassieren und abschließen. Anmeldung am Terminal im Betrieb.','Zum Portal'],
    ['betrieb','Marktplatz für Werkstätten','Verwaltung Ihres Eintrags, Anfragen und Termine aus dem öffentlichen Verzeichnis.','Zum Portal'],
    ['team','Mitarbeiter-App','Aufträge, Werkstattbank und Etikettendruck auf Tablet und Telefon. Zugang von der Betriebsleitung.','Zugang anfragen'],
    ['team','Zeiterfassung','Kommen und gehen per Karte am Terminal. Für die Auswertung genügt ein Verwalterzugang.','Zum Portal'],
    ['team','Außendienst','Besuchsplanung, Routen und Berichte unterwegs. Anmeldung erfolgt in der App.','Zugang anfragen'],
    ['partner','Partnerbereich','Gemeinsame Kunden, Empfehlungen und Abrechnung. Für Steuerberatung, Systemhäuser und Handel.','Zugang anfragen'],
    ['partner','Lizenzverwaltung','Übersicht über Ihre Standorte, Nutzer und Laufzeiten.','Zum Portal']
  ];
  (function(){
    var liste = document.getElementById('p-liste');
    if (!liste) return;
    var bereich = 'alle', suche = '';
    function zeichne(){
      var treffer = PORTALE.filter(function(p){
        var passt = (bereich === 'alle' || p[0] === bereich);
        var text = (p[1] + ' ' + p[2]).toLowerCase();
        return passt && (!suche || text.indexOf(suche)!== -1);
      });
      liste.innerHTML = treffer.length? treffer.map(function(p){
        return '<div class="portal"><div class="portal-tx"><h3>' + p[1] + '</h3><p>' + p[2] + '</p></div>' +
               '<a href="#" data-go="kontakt" class="btn">' + SCHLOSS + ' ' + p[3] + '</a></div>';
      }).join(''): '<p class="portal-leer">Kein Zugang gefunden. Der Support hilft weiter.</p>';
    }
    document.getElementById('p-filter').addEventListener('click', function(e){
      var c = e.target.closest('.l-chip');
      if (!c) return;
      bereich = c.getAttribute('data-bereich');
      document.querySelectorAll('#p-filter .l-chip').forEach(function(x){ x.classList.toggle('an', x === c); });
      zeichne();
    });
    document.getElementById('p-suche').addEventListener('input', function(e){
      suche = e.target.value.toLowerCase().trim();
      zeichne();
    });
    zeichne();
  })();


  // Laufender Auftragsstand: waechst an jedem Werktag um einen festen,
  // aus dem Datum abgeleiteten Wert. Dadurch zeigt die Seite bei jedem
  // Aufruf am selben Tag dieselbe Zahl und springt nicht beim Neuladen.
  function auftragsstand(){
    var start = new Date(2026, 3, 6);
    var tag = new Date(start), heute = new Date();
    heute.setHours(0,0,0,0);
    var summe = 0;
    while (tag <= heute) {
      var wt = tag.getDay();
      if (wt >= 1 && wt <= 5) {
        var kennung = tag.getFullYear() * 10000 + (tag.getMonth() + 1) * 100 + tag.getDate();
        var streu = Math.abs(Math.sin(kennung) * 10000);
        summe += 10 + Math.floor((streu - Math.floor(streu)) * 21);
      }
      tag.setDate(tag.getDate() + 1);
    }
    return summe;
  }
  (function(){
    document.querySelectorAll('[data-auftraege]').forEach(function(el){
      el.setAttribute('data-n', String(auftragsstand()));
      el.textContent = '0';
    });
  })();


  // ── Oberflächentexte je Sprache ──
  // Fließtexte bleiben deutsch; darauf weist der Balken unter dem Kopf hin.
  var TEXTE = {
  "en": {
    "nav.partner": "Partners",
    "nav.karriere": "Careers",
    "nav.entwickler": "Developers",
    "nav.ueberuns": "About samoLabs",
    "nav.presse": "Press",
    "nav.support": "Support",
    "nav.login": "Log in",
    "menu.ueber": "About us",
    "menu.loesungen": "Solutions",
    "menu.produkte": "Products",
    "menu.praxis": "Case studies",
    "menu.presse": "News",
    "menu.gespraech": "Book a call",
    "hero.titel": "We drive your digitalisation forward.",
    "hero.unter": "We build it, we run it, we stay",
    "hero.knopf1": "Book a call",
    "hero.knopf2": "Explore solutions",
    "sek.system": "One system instead of ten separate tools.",
    "sek.loesungen": "Solutions for your business",
    "sek.produkte": "Our products",
    "sek.laender": "Compliant. And built to grow.",
    "sek.zahlen": "The proof is in the numbers",
    "sek.presse": "Latest news",
    "sek.kundenbericht": "Customer story",
    "fuss.produkte": "Products",
    "fuss.loesungen": "Solutions",
    "fuss.unternehmen": "Company",
    "fuss.partner": "For partners",
    "fuss.service": "Service",
    "fuss.impressum": "Legal notice",
    "fuss.datenschutz": "Privacy",
    "fuss.credits": "Credits",
    "btn.mehr": "Learn more",
    "btn.kontakt": "Get in touch",
    "btn.alle_produkte": "All products",
    "btn.alle_meldungen": "All news"
  },
  "pl": {
    "nav.partner": "Partnerzy",
    "nav.karriere": "Kariera",
    "nav.entwickler": "Dla programistów",
    "nav.ueberuns": "O samoLabs",
    "nav.presse": "Dla mediów",
    "nav.support": "Wsparcie",
    "nav.login": "Logowanie",
    "menu.ueber": "O nas",
    "menu.loesungen": "Rozwiązania",
    "menu.produkte": "Produkty",
    "menu.praxis": "Wdrożenia",
    "menu.presse": "Aktualności",
    "menu.gespraech": "Umów rozmowę",
    "hero.titel": "Napędzamy cyfryzację Twojej firmy.",
    "hero.unter": "Tworzymy, utrzymujemy, wspieramy",
    "hero.knopf1": "Umów rozmowę",
    "hero.knopf2": "Zobacz rozwiązania",
    "sek.system": "Jeden system zamiast dziesięciu narzędzi.",
    "sek.loesungen": "Rozwiązania dla Twojej firmy",
    "sek.produkte": "Nasze produkty",
    "sek.laender": "Zgodnie z prawem. I z myślą o rozwoju.",
    "sek.zahlen": "Liczby mówią same za siebie",
    "sek.presse": "Najnowsze wiadomości",
    "sek.kundenbericht": "Historia klienta",
    "fuss.produkte": "Produkty",
    "fuss.loesungen": "Rozwiązania",
    "fuss.unternehmen": "Firma",
    "fuss.partner": "Dla partnerów",
    "fuss.service": "Obsługa",
    "fuss.impressum": "Nota prawna",
    "fuss.datenschutz": "Ochrona danych",
    "fuss.credits": "Źródła",
    "btn.mehr": "Dowiedz się więcej",
    "btn.kontakt": "Skontaktuj się z nami",
    "btn.alle_produkte": "Wszystkie produkty",
    "btn.alle_meldungen": "Wszystkie wiadomości"
  },
  "bs": {
    "nav.partner": "Partneri",
    "nav.karriere": "Karijera",
    "nav.entwickler": "Za programere",
    "nav.ueberuns": "O samoLabs",
    "nav.presse": "Za medije",
    "nav.support": "Podrška",
    "nav.login": "Prijava",
    "menu.ueber": "O nama",
    "menu.loesungen": "Rješenja",
    "menu.produkte": "Proizvodi",
    "menu.praxis": "Iz prakse",
    "menu.presse": "Novosti",
    "menu.gespraech": "Dogovorite razgovor",
    "hero.titel": "Pokrećemo digitalizaciju vašeg poslovanja.",
    "hero.unter": "Gradimo, održavamo, pratimo",
    "hero.knopf1": "Dogovorite razgovor",
    "hero.knopf2": "Pogledajte rješenja",
    "sek.system": "Jedan sistem umjesto deset alata.",
    "sek.loesungen": "Rješenja za vašu firmu",
    "sek.produkte": "Naši proizvodi",
    "sek.laender": "U skladu s propisima. I spremno za rast.",
    "sek.zahlen": "Brojke govore same za sebe",
    "sek.presse": "Najnovije vijesti",
    "sek.kundenbericht": "Priča klijenta",
    "fuss.produkte": "Proizvodi",
    "fuss.loesungen": "Rješenja",
    "fuss.unternehmen": "Kompanija",
    "fuss.partner": "Za partnere",
    "fuss.service": "Usluge",
    "fuss.impressum": "Impresum",
    "fuss.datenschutz": "Zaštita podataka",
    "fuss.credits": "Izvori",
    "btn.mehr": "Saznajte više",
    "btn.kontakt": "Kontaktirajte nas",
    "btn.alle_produkte": "Svi proizvodi",
    "btn.alle_meldungen": "Sve vijesti"
  },
  "fi": {
    "nav.partner": "Kumppanit",
    "nav.karriere": "Ura",
    "nav.entwickler": "Kehittäjille",
    "nav.ueberuns": "Tietoa samoLabsista",
    "nav.presse": "Medialle",
    "nav.support": "Tuki",
    "nav.login": "Kirjaudu",
    "menu.ueber": "Tietoa meistä",
    "menu.loesungen": "Ratkaisut",
    "menu.produkte": "Tuotteet",
    "menu.praxis": "Käytännössä",
    "menu.presse": "Ajankohtaista",
    "menu.gespraech": "Varaa keskustelu",
    "hero.titel": "Viemme yrityksesi digitalisaatiota eteenpäin.",
    "hero.unter": "Rakennamme, ylläpidämme, tuemme",
    "hero.knopf1": "Varaa keskustelu",
    "hero.knopf2": "Tutustu ratkaisuihin",
    "sek.system": "Yksi järjestelmä kymmenen työkalun sijaan.",
    "sek.loesungen": "Ratkaisut yrityksellesi",
    "sek.produkte": "Tuotteemme",
    "sek.laender": "Säädösten mukaista. Ja kasvun mukana.",
    "sek.zahlen": "Luvut puhuvat puolestaan",
    "sek.presse": "Uusimmat uutiset",
    "sek.kundenbericht": "Asiakastarina",
    "fuss.produkte": "Tuotteet",
    "fuss.loesungen": "Ratkaisut",
    "fuss.unternehmen": "Yritys",
    "fuss.partner": "Kumppaneille",
    "fuss.service": "Palvelut",
    "fuss.impressum": "Oikeudelliset tiedot",
    "fuss.datenschutz": "Tietosuoja",
    "fuss.credits": "Lähteet",
    "btn.mehr": "Lue lisää",
    "btn.kontakt": "Ota yhteyttä",
    "btn.alle_produkte": "Kaikki tuotteet",
    "btn.alle_meldungen": "Kaikki uutiset"
  }
};
  var TEXTE_DE = {};
  (function(){
    document.querySelectorAll('[data-t]').forEach(function(el){
      TEXTE_DE[el.getAttribute('data-t')] = el.textContent;
    });
  })();
  function setzeSprache(code){
    var wb = TEXTE[code] || TEXTE_DE;
    document.querySelectorAll('[data-t]').forEach(function(el){
      var s = el.getAttribute('data-t');
      var neu = (TEXTE[code] && TEXTE[code][s]) || TEXTE_DE[s];
      if (neu) el.textContent = neu;
    });
  }

  // ── Länderwähler ──
  var LAENDER_WAHL = {
    de: ['Deutschland', 'Deutsch', 'de'],
    at: ['Österreich', 'Deutsch', 'de'],
    pl: ['Polen', 'Polski', 'pl'],
    ba: ['Bosna i Hercegovina', 'Bosanski', 'bs'],
    fi: ['Suomi', 'Suomeksi', 'fi']
  };
  var HINWEIS = {
    pl: 'Ta strona jest obecnie dostępna tylko w języku niemieckim. Chętnie odpowiemy po polsku — napisz do nas.',
    bs: 'Ova stranica trenutno je dostupna samo na njemačkom. Rado odgovaramo i na bosanskom — pišite nam.',
    fi: 'Tämä sivusto on toistaiseksi saatavilla vain saksaksi. Vastaamme mielellämme myös suomeksi.',
    en: 'Detailed content is currently available in German only. Write to us in English — we answer in English.'
  };
  (function(){
    var w = document.getElementById('land-waehler');
    if (!w) return;
    var k = document.getElementById('land-knopf');
    var liste = document.getElementById('land-liste');
    var beschriftung = k.childNodes;

    function anzeigen(schluessel){
      var l = LAENDER_WAHL[schluessel];
      if (!l) return;
      // Text im Knopf zwischen den beiden Symbolen austauschen
      for (var i = 0; i < k.childNodes.length; i++) {
        if (k.childNodes[i].nodeType === 3 && k.childNodes[i].textContent.trim()) {
          k.childNodes[i].textContent = ' ' + l[0] + ' · ' + l[1] + ' ';
          break;
        }
      }
      liste.querySelectorAll('button').forEach(function(b){
        b.classList.toggle('aktiv', b.getAttribute('data-land') === schluessel);
      });
      document.documentElement.setAttribute('lang', l[2]);
      setzeSprache(l[2]);
      var alterHinweis = document.getElementById('sprach-hinweis');
      if (alterHinweis) alterHinweis.remove();
      if (HINWEIS[l[2]]) {
        var box = document.createElement('div');
        box.id = 'sprach-hinweis';
        box.className = 'sprach-hinweis';
        box.innerHTML = '<span>' + HINWEIS[l[2]] + '</span>' +
          '<button type=button aria-label=Schließen>&times;</button>';
        document.querySelector('.nav').insertAdjacentElement('afterend', box);
        box.querySelector('button').addEventListener('click', function(){ box.remove(); });
      }
      try { localStorage.setItem('sl-land', schluessel); } catch(e){}
    }

    k.addEventListener('click', function(e){
      e.stopPropagation();
      var auf = w.classList.toggle('auf');
      k.setAttribute('aria-expanded', auf ? 'true' : 'false');
    });
    liste.addEventListener('click', function(e){
      var b = e.target.closest('button');
      if (!b) return;
      anzeigen(b.getAttribute('data-land'));
      w.classList.remove('auf');
      k.setAttribute('aria-expanded','false');
    });
    document.addEventListener('click', function(){ w.classList.remove('auf'); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') w.classList.remove('auf'); });

    var gemerkt = null;
    try { gemerkt = localStorage.getItem('sl-land'); } catch(e){}
    if (gemerkt && LAENDER_WAHL[gemerkt]) anzeigen(gemerkt);
  })();

  // ── Navigation bekommt beim Scrollen einen Schatten ──
  (function(){
    var nav = document.querySelector('.nav');
    if (!nav) return;
    function pruefe(){ nav.classList.toggle('tief', window.scrollY > 12); }
    window.addEventListener('scroll', pruefe, { passive: true });
    pruefe();
  })();

  // ── Suche über alle Inhalte ──
  (function(){
    var knopf = document.getElementById('suche-knopf');
    var flaeche = document.getElementById('suche-flaeche');
    if (!knopf || !flaeche) return;
    var feld = document.getElementById('suche-feld');
    var trefferliste = document.getElementById('suche-treffer');

    function bestand(){
      var alles = [];
      Object.keys(DETAIL).forEach(function(k){
        var d = DETAIL[k];
        alles.push({ rubrik: d.ober, titel: d.titel, text: d.intro, ziel: 'detail:' + k });
      });
      BEITRAEGE.forEach(function(b, i){
        alles.push({ rubrik: KAT_NAME[b[1]] || 'Beitrag', titel: b[2], text: b[3], ziel: 'beitrag:' + i });
      });
      [['Über uns','ueber'],['Lösungen','loesungen'],['Produkte','produkte'],
       ['Praxis','praxis'],['Presse und Neuigkeiten','neues'],['Kontakt','kontakt'],
       ['Partner','partner'],['Karriere','karriere'],['Schnittstellen','entwickler'],
       ['Support','support'],['Anmeldebereich','login']].forEach(function(s){
        alles.push({ rubrik: 'Seite', titel: s[0], text: '', ziel: s[1] });
      });
      return alles;
    }
    var ALLES = null;

    function suchen(wort){
      if (!ALLES) ALLES = bestand();
      wort = wort.toLowerCase().trim();
      if (wort.length < 2) { trefferliste.innerHTML = ''; return; }
      var treffer = ALLES.filter(function(e){
        return (e.titel + ' ' + e.text + ' ' + e.rubrik).toLowerCase().indexOf(wort) !== -1;
      }).slice(0, 12);
      trefferliste.innerHTML = treffer.length
        ? treffer.map(function(e){
            return '<a href="#" data-go="' + e.ziel + '">' +
              '<span class="st-rubrik">' + e.rubrik + '</span>' +
              '<div class="st-titel">' + e.titel + '</div>' +
              (e.text ? '<div class="st-text">' + e.text.slice(0, 110) + '…</div>' : '') +
              '</a>';
          }).join('')
        : '<p class="suche-leer">Nichts gefunden. Fragen Sie uns direkt — wir antworten auch auf ungewöhnliche Fragen.</p>';
    }

    function auf(){ flaeche.classList.add('auf'); feld.value=''; trefferliste.innerHTML=''; feld.focus(); }
    function zu(){ flaeche.classList.remove('auf'); }

    knopf.addEventListener('click', auf);
    document.querySelectorAll('.mega-suche').forEach(function(a){
      a.addEventListener('click', function(e){ e.preventDefault(); auf(); });
    });
    document.getElementById('suche-zu').addEventListener('click', zu);
    feld.addEventListener('input', function(){ suchen(feld.value); });
    flaeche.addEventListener('click', function(e){ if (e.target === flaeche) zu(); });
    trefferliste.addEventListener('click', zu);
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') zu();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); auf(); }
    });
  })();

  // ── Reichweitenmessung: jeder Bereich zaehlt als eigene Seite ──
  function messe(pfad){
    try {
      if (window.plausible) window.plausible('pageview', { u: location.origin + '/' + pfad, props: {} });
    } catch(e){}
  }

  // ── Seitenwechsel ──
  var seiten = document.querySelectorAll('.page');
  function zeige(name) {
    var treffer = false;
    seiten.forEach(function(s){
      var an = s.getAttribute('data-page') === name;
      s.classList.toggle('on', an);
      if (an) treffer = true;
    });
    if (!treffer) return;
    window.scrollTo({ top: 0, behavior: reduced? 'auto': 'smooth' });
    schliesseMenues();
    beobachte();
  }
  function fuelleDetail(schluessel){
    var d = DETAIL[schluessel];
    if (!d) return false;
    document.getElementById('d-crumb').textContent = d.titel.length > 42 ? d.titel.slice(0,40) + '\u2026' : d.titel;
    var up = document.getElementById('d-up');
    up.textContent = d.ober;
    up.setAttribute('data-go', d.oberZiel);
    document.getElementById('d-marke').innerHTML = d.marke
      ? '<span class="lg hell" style="--s:27px; --lb:#fff; --ln:var(' + d.marke[2] + '-h); --la:var(' + d.marke[2] + '-h)"><b>' +
        d.marke[0] + '</b><span>' + d.marke[1] + '</span><em></em></span>' : '';
    document.getElementById('d-titel').textContent = d.titel;
    document.getElementById('d-intro').textContent = d.intro;
    document.getElementById('d-h2').textContent = d.h2;
    document.getElementById('d-text').textContent = d.text;
    document.getElementById('d-bild').className = 'ph ' + d.bild;

    // Bild auch in den Seitenkopf legen
    var kopf = document.getElementById('d-kopf');
    var probe = document.createElement('div');
    probe.className = d.bild;
    document.body.appendChild(probe);
    var bild = getComputedStyle(probe).backgroundImage;
    document.body.removeChild(probe);
    kopf.style.setProperty('--kopfbild', bild);
    var regel = document.getElementById('d-kopf-stil');
    if (!regel) {
      regel = document.createElement('style');
      regel.id = 'd-kopf-stil';
      document.head.appendChild(regel);
    }
    regel.textContent = '.phead-bild::before{background-image:' + bild + '}';

    document.getElementById('d-punkte').innerHTML = d.punkte.map(function(x){
      return '<div class="q" style="border-top-color:var(--accent)"><h4>' + x[0] +
             '</h4><p style="color:var(--mid)">' + x[1] + '</p></div>';
    }).join('');
    document.getElementById('d-alltag').innerHTML = d.alltag.map(function(x){
      return '<div class="card"><div class="cb"><h3>' + x[0] + '</h3><p>' + x[1] + '</p></div></div>';
    }).join('');

    var name = d.marke ? d.marke[0] + d.marke[1] : d.titel;
    document.getElementById('d-formtitel').textContent = 'Passt ' + name + ' zu Ihrem Betrieb?';
    document.getElementById('d-vorbelegt').textContent = name;

    // Verwandte Inhalte aus derselben Rubrik
    var verwandt = Object.keys(DETAIL).filter(function(k){
      return k !== schluessel && DETAIL[k].ober === d.ober;
    }).slice(0, 4);
    if (d.produkt) verwandt = [d.produkt].concat(verwandt.filter(function(k){ return k !== d.produkt; })).slice(0, 4);
    if (verwandt.length < 4) {
      verwandt = verwandt.concat(Object.keys(DETAIL).filter(function(k){
        return k !== schluessel && verwandt.indexOf(k) === -1;
      }).slice(0, 4 - verwandt.length));
    }
    document.getElementById('d-verwandt').innerHTML = verwandt.map(function(k){
      var v = DETAIL[k];
      return '<a class="card" href="#" data-go="detail:' + k + '"><div class="ph ' + v.bild + '"></div>' +
             '<div class="cb">' +
             (v.marke ? '<span class="lg" style="--s:18px; --ln:var(' + v.marke[2] + '); --la:var(' + v.marke[2] + ')"><b>' +
              v.marke[0] + '</b><span>' + v.marke[1] + '</span><em></em></span>' :
              '<h3>' + v.titel.slice(0, 34) + '</h3>') +
             '<p>' + v.intro.slice(0, 96) + '…</p><span class="more">Mehr erfahren →</span></div></a>';
    }).join('');
    return true;
  }

  // Sprung zum Anfrageblock auf derselben Seite
  document.addEventListener('click', function(e){
    var anker = e.target.closest('a[href="#d-anfrage"]');
    if (!anker) return;
    e.preventDefault();
    var ziel = document.getElementById('d-anfrage');
    if (ziel) ziel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.addEventListener('click', function(e){
    var ziel = e.target.closest('[data-go]');
    if (!ziel) return;
    e.preventDefault();
    var wohin = ziel.getAttribute('data-go');
    if (wohin.indexOf('detail:') === 0) {
      if (fuelleDetail(wohin.slice(7))) { zeige('detail'); history.replaceState(null, '', '#' + wohin); messe('detail/' + wohin.slice(7)); return; }
    }
    if (wohin.indexOf('beitrag:') === 0) {
      if (fuelleBeitrag(wohin.slice(8))) { zeige('beitrag'); history.replaceState(null, '', '#' + wohin); messe('beitrag/' + wohin.slice(8)); return; }
    }
    zeige(wohin);
    history.replaceState(null, '', wohin === 'start' ? location.pathname : '#' + wohin);
    messe(wohin === 'start' ? '' : wohin);
    var abschnitt = ziel.getAttribute('data-scroll');
    if (abschnitt) setTimeout(function(){
      var el = document.getElementById(abschnitt);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  });

  // Adresszeile auswerten, damit Verweise von den Rechtsseiten ankommen
  function ausHash(){
    var wohin = (location.hash || '').replace(/^#/, '');
    if (!wohin) return;
    if (wohin.indexOf('detail:') === 0) {
      if (fuelleDetail(wohin.slice(7))) zeige('detail');
      return;
    }
    if (wohin.indexOf('beitrag:') === 0) {
      if (fuelleBeitrag(wohin.slice(8))) zeige('beitrag');
      return;
    }
    zeige(wohin);
  }
  window.addEventListener('hashchange', ausHash);
  ausHash();
  messe((location.hash || '').replace(/^#/, '').replace(':', '/'));

  // ── Mega-Menü ──
  var punkte = Array.prototype.slice.call(document.querySelectorAll('.mi'));
  function schliesseMenues(){
    punkte.forEach(function(p){
      p.classList.remove('open');
      p.querySelector('button').setAttribute('aria-expanded','false');
    });
    document.getElementById('menu').classList.remove('mob');
  }
  punkte.forEach(function(p){
    var b = p.querySelector('button');
    b.addEventListener('click', function(e){
      e.stopPropagation();
      var offen = p.classList.contains('open');
      punkte.forEach(function(x){ x.classList.remove('open'); x.querySelector('button').setAttribute('aria-expanded','false'); });
      if (!offen) { p.classList.add('open'); b.setAttribute('aria-expanded','true'); }
    });
    p.addEventListener('mouseenter', function(){
      if (window.innerWidth <= 1080) return;
      clearTimeout(p._zu);
      punkte.forEach(function(x){ if (x !== p) { clearTimeout(x._zu); x.classList.remove('open'); } });
      p.classList.add('open');
    });
    p.addEventListener('mouseleave', function(){
      if (window.innerWidth <= 1080) return;
      p._zu = setTimeout(function(){ p.classList.remove('open'); }, 320);
    });
  });
  document.addEventListener('click', schliesseMenues);
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') schliesseMenues(); });
  document.getElementById('burger').addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('menu').classList.toggle('mob');
  });

  // ── Einblenden und Zähler (nach jedem Seitenwechsel neu) ──
  var io = null, co = null;
  function beobachte(){
    if (io) io.disconnect();
    if (co) co.disconnect();
    var sichtbar = document.querySelector('.page.on');
    if (!sichtbar) return;
    var rv = sichtbar.querySelectorAll('.rv');
    var nums = sichtbar.querySelectorAll('[data-n]');
    if (reduced ||!('IntersectionObserver' in window)) {
      rv.forEach(function(e){ e.classList.add('in'); });
      nums.forEach(function(e){ e.textContent = e.getAttribute('data-n'); });
      return;
    }
    io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold:.1 });
    rv.forEach(function(e){ e.classList.remove('in'); io.observe(e); });

    co = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if (!e.isIntersecting) return;
        var el = e.target; co.unobserve(el);
        var ziel = parseInt(el.getAttribute('data-n'),10), t0 = performance.now();
        (function s(now){
          var p = Math.min((now - t0)/800, 1);
          var wert = Math.round(ziel * (1 - Math.pow(1-p,3)));
          el.textContent = wert >= 1000 ? wert.toLocaleString('de-DE') : String(wert);
          if (p < 1) requestAnimationFrame(s);
        })(t0);
      });
    }, { threshold:.5 });
    nums.forEach(function(e){ co.observe(e); });
  }
  beobachte();


  // ── Europakarte nachladen und dann verdrahten ──
  (function ladeKarte(){
    var halter = document.getElementById('karte-halter');
    if (!halter) { verdrahteKarte(); return; }
    fetch(halter.getAttribute('data-quelle'))
.then(function(r){ return r.text(); })
.then(function(svg){
        halter.innerHTML = svg.replace(/<\?xml[^>]*\?>/, '');
        verdrahteKarte();
      })
.catch(function(){ halter.style.display = 'none'; });
  })();

  // ── Europakarte: Land waehlen ──
  var LAENDER = {
    deutschland: ['Deutschland',
      'Unser Hauptmarkt und der Sitz des Unternehmens. Von hier aus betreuen wir den deutschsprachigen Raum.'],
    oesterreich: ['Österreich',
      'Fester Bestandteil unseres Einsatzgebiets, mit eigenen gesetzlichen Vorgaben, auf die unsere Systeme ausgelegt sind.'],
    polen: ['Polen',
      'Präsenz in Mittelosteuropa. Ein Markt, dessen Anforderungen an elektronische Rechnungen wir von Anfang an mitdenken.'],
    bosnien: ['Bosnien und Herzegowina',
      'Wo unsere Wurzeln liegen. Die Verbindung dorthin ist bis heute geblieben.'],
    finnland: ['Finnland',
      'Unser nördlichster Standort. Europäische Präsenz bis nach Skandinavien.']
  };
  function verdrahteKarte(){
    var info = document.getElementById('l-info');
    if (!info) return;
    var chips = document.querySelectorAll('#l-liste .l-chip');
    var pfade = document.querySelectorAll('.k-aktiv path');
    function waehle(schluessel){
      var l = LAENDER[schluessel];
      if (!l) return;
      info.innerHTML = '<h4>' + l[0] + '</h4><p>' + l[1] + '</p>';
      chips.forEach(function(c){ c.classList.toggle('an', c.getAttribute('data-land') === schluessel); });
      pfade.forEach(function(p){ p.classList.toggle('an', p.getAttribute('data-land') === schluessel); });
    }
    chips.forEach(function(c){ c.addEventListener('click', function(){ waehle(c.getAttribute('data-land')); }); });
    pfade.forEach(function(p){
      p.addEventListener('click', function(){ waehle(p.getAttribute('data-land')); });
      p.addEventListener('keydown', function(e){
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); waehle(p.getAttribute('data-land')); }
      });
    });
    waehle('deutschland');
  }

  // ── Chat: öffnet sich nach sechs Sekunden von selbst, einmal je Sitzung ──
  var fab=document.getElementById('fab'), chat=document.getElementById('chat'),
      teas=document.getElementById('teas'), clog=document.getElementById('clog'),
      inp=document.getElementById('cinp'), zu=false;
  function setzeChat(auf){
    chat.classList.toggle('on', auf);
    fab.setAttribute('aria-expanded', auf? 'true': 'false');
    if (auf) { teas.classList.remove('on'); inp.focus(); }
  }
  fab.addEventListener('click', function(){
    var auf =!chat.classList.contains('on');
    if (!auf) zu = true;
    setzeChat(auf);
  });
  document.getElementById('cx').addEventListener('click', function(){ zu=true; setzeChat(false); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && chat.classList.contains('on')) { zu=true; setzeChat(false); fab.focus(); }
  });
  // Das Fenster oeffnet sich von selbst, aber nicht bei jedem Seitenaufruf.
  // Nach zwei Stunden gilt der Besucher wieder als neu.
  var SPERRE_MS = 2 * 60 * 60 * 1000;
  var zuletzt = 0;
  try { zuletzt = parseInt(localStorage.getItem('sl-chat-zuletzt') || '0', 10) || 0; } catch(e){}
  var jetzt = Date.now();
  if (jetzt - zuletzt > SPERRE_MS) {
    setTimeout(function(){ if(!zu &&!chat.classList.contains('on')) teas.classList.add('on'); }, 3500);
    setTimeout(function(){
      if (zu || chat.classList.contains('on')) return;
      setzeChat(true);
      try { localStorage.setItem('sl-chat-zuletzt', String(Date.now())); } catch(e){}
    }, 5000);
  }
  var R=[
    [['kost','preis','teuer','euro'],'Das hängt vom Zuschnitt ab. Anzahl Standorte, Nutzer und Module. Nennen Sie mir kurz Ihre Betriebsgröße, dann rechne ich es Ihnen aus.'],
    [['werkstatt','fahrrad','rad','passt'],'Für Fahrradbetriebe mit eigener Werkstatt ist samoRad genau gebaut: Annahme am Tresen, Werkstattplanung, Kasse und Lager in einem. Wie viele Mitarbeitende arbeiten bei Ihnen in der Werkstatt?'],
    [['rückruf','ruckruf','termin','gespräch','anruf'],'Sehr gern. Hinterlassen Sie mir Ihre Nummer und wann es Ihnen passt, ich rufe zurück, meist noch am selben Tag.'],
    [['gastro','bar','restaurant','café','cafe','tisch'],'Dafür haben wir samoOrder: Gäste bestellen per QR-Code am Tisch, die Theke sieht alles sofort, ohne App-Installation. Wie viele Tische haben Sie?'],
    [['transport','spedition','fracht','lkw'],'samoTransport bringt Frachtaufträge und Fahrer zusammen, inklusive Sendungsverfolgung. Fahren Sie feste Routen oder wechselnde Strecken?']
  ];
  function antwort(t){
    t=t.toLowerCase();
    for (var i=0;i<R.length;i++) for (var k=0;k<R[i][0].length;k++)
      if (t.indexOf(R[i][0][k])!==-1) return R[i][1];
    return 'Das schaue ich mir gern an. Damit ich Sie richtig einordnen kann: Um welche Branche geht es, und wie viele Mitarbeitende sind im Betrieb?';
  }
  function senden(t){
    if (!t.trim()) return;
    var u=document.createElement('div'); u.className='m mu'; u.textContent=t;
    clog.appendChild(u); clog.scrollTop=clog.scrollHeight;
    setTimeout(function(){
      var b=document.createElement('div'); b.className='m mb'; b.textContent=antwort(t);
      clog.appendChild(b); clog.scrollTop=clog.scrollHeight;
    }, reduced? 0: 470);
  }
  document.getElementById('cgo').addEventListener('click', function(){ senden(inp.value); inp.value=''; });
  inp.addEventListener('keydown', function(e){ if(e.key==='Enter'){ senden(inp.value); inp.value=''; } });
  document.getElementById('chips').addEventListener('click', function(e){
    var c = e.target.closest('.chip'); if (c) senden(c.textContent);
  });


  // ── Hinweisleiste: einmal zeigen, Bestätigung merken ──
  (function(){
    var leiste = document.getElementById('hinweis-leiste');
    if (!leiste) return;
    var gesehen = null;
    try { gesehen = localStorage.getItem('sl-hinweis'); } catch(e){}
    if (gesehen) return;
    leiste.hidden = false;
    document.getElementById('hinweis-ok').addEventListener('click', function(){
      leiste.hidden = true;
      try { localStorage.setItem('sl-hinweis', '1'); } catch(e){}
    });
  })();

  // ── Wissen: Leitfäden und gefilterte Beitragsliste ──
  (function(){
    var liste = document.getElementById('w-liste');
    if (!liste) return;
    var LEIT = ['Was die Kassensicherungsverordnung', 'E-Rechnung: Was jetzt', 'Warum Thermopapier'];
    var kacheln = LEIT.map(function(anfang){
      var i = -1;
      BEITRAEGE.some(function(b, n){ if (b[2].indexOf(anfang) === 0) { i = n; return true; } return false; });
      return i >= 0 ? beitragKarte(BEITRAEGE[i]) : '';
    }).join('');
    document.getElementById('w-leitfaeden').innerHTML = kacheln;

    var kat = 'alle', gezeigt = 9;
    var knopf = document.getElementById('w-mehr');
    function zeichneW(){
      var treffer = BEITRAEGE.filter(function(b){ return b[1] !== 'meldung' && (kat === 'alle' || b[1] === kat); });
      liste.innerHTML = treffer.slice(0, gezeigt).map(beitragKarte).join('');
      knopf.style.display = treffer.length > gezeigt ? '' : 'none';
    }
    document.getElementById('w-filter').addEventListener('click', function(e){
      var c = e.target.closest('.l-chip');
      if (!c) return;
      kat = c.getAttribute('data-kat'); gezeigt = 9;
      document.querySelectorAll('#w-filter .l-chip').forEach(function(x){ x.classList.toggle('an', x === c); });
      zeichneW();
    });
    knopf.addEventListener('click', function(){ gezeigt += 9; zeichneW(); });
    zeichneW();
  })();

  // ── Aktualitätsband: jüngste Meldung über der Bühne ──
  (function(){
    var band = document.getElementById('aktuell-band');
    if (!band || !BEITRAEGE.length) return;
    var b = BEITRAEGE[0];
    band.innerHTML = '<a href="#" data-go="beitrag:0">' +
      '<span class="chip-neu">Aktuell</span>' +
      '<span class="a-datum">' + b[0] + '</span>' +
      '<span class="a-titel">' + b[2] + '</span>' +
      '<span aria-hidden="true">→</span></a>';
    band.hidden = false;
  })();

  // ── Formulare: öffnen die Mail-Anwendung mit fertigem Text ──
  // Die Seite hat keinen eigenen Server; so kommt die Anfrage trotzdem an.
  (function(){
    function feldwerte(form){
      var teile = [];
      form.querySelectorAll('input, select, textarea').forEach(function(f){
        if (f.type === 'checkbox') {
          if (f.checked) teile.push('Einwilligung Neuigkeiten: ja');
          return;
        }
        var label = form.querySelector('label[for="' + f.id + '"]');
        var name = label ? label.textContent.replace('*', '').trim() : (f.placeholder || f.id);
        if (f.value && f.value.trim()) teile.push(name + ': ' + f.value.trim());
      });
      return teile.join('\n');
    }
    document.querySelectorAll('form.form').forEach(function(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        var betreff = 'Anfrage über samolabs.de';
        var vor = document.getElementById('d-vorbelegt');
        if (form.closest('[data-page="detail"]') && vor) betreff = 'Anfrage zu ' + vor.textContent;
        location.href = 'mailto:info@samolabs.de?subject=' + encodeURIComponent(betreff) +
          '&body=' + encodeURIComponent(feldwerte(form) + '\n\nGesendet über samolabs.de');
      });
    });
    var nl = document.getElementById('nl-form');
    if (nl) nl.addEventListener('submit', function(e){
      e.preventDefault();
      var mail = document.getElementById('nl-mail').value.trim();
      if (!mail) return;
      location.href = 'mailto:info@samolabs.de?subject=' + encodeURIComponent('Aufnahme in den Verteiler') +
        '&body=' + encodeURIComponent('Bitte nehmen Sie mich in den Verteiler auf.\n' + mail);
    });
  })();
})();
