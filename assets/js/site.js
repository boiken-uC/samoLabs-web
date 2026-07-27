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
  document.getElementById('rail-start').innerHTML = PRODUKTE.map(function(x){ return produktKarte(x, false); }).join('');
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

    werkstatt: { ober:'Lösungen', oberZiel:'loesungen', bild:'i-werk',
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

    gastro: { ober:'Lösungen', oberZiel:'loesungen', bild:'i-gastro',
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

    logistik: { ober:'Lösungen', oberZiel:'loesungen', bild:'i-trans',
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

    aussendienst: { ober:'Lösungen', oberZiel:'loesungen', bild:'i-talk',
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
              ['Weniger Rückfragen vom Steuerbüro','Weil der Export stimmt.']] }
  };


  // ── Beiträge für die Nachrichtenseite ───────────────────────────────
  //       'fach' = Fachbeitrag · 'branche' = Branchenthema · 'produkt' = Produktnews
  var BEITRAEGE = [
    ['12.07.2026','meldung','samoOrder geht im ersten Betrieb in den Regelbetrieb','Gäste bestellen per QR-Code am Tisch, die Theke sieht jede Bestellung in Echtzeit. Nach der Testphase läuft das System nun im Tagesgeschäft.','i-laptops'],
    ['28.06.2026','meldung','Sieben Mitarbeitende in einer Werkstatt geschult','Vom Tresen bis zur Werkstattbank arbeitet das ganze Team im selben System. Die Schulung fand vor Ort statt, nicht per Video.','i-schulung'],
    ['15.06.2026','meldung','samoTransport verbindet Deutschland und Südosteuropa','Die Frachtbörse bringt Auftraggeber und Fahrer auf einer Strecke zusammen, die bislang kaum digitalisiert war.','i-trans'],
    ['02.06.2026','produkt','Kartenzahlung ohne zweites Terminal','Das Telefon wird zum Zahlungsgerät. Ein Tagesabschluss statt zwei, ein Vertrag weniger.','i-n1'],
    ['20.05.2026','produkt','Etikettendruck direkt vom Tablet','Auftrag annehmen, Etikett drucken, fertig, ohne Rückweg ins Büro.','i-werk'],
    ['08.05.2026','fach','Was die Kassensicherungsverordnung wirklich verlangt','Viele Betriebe glauben, eine moderne Kasse genüge. Verlangt wird aber eine zertifizierte technische Sicherungseinrichtung, und die muss jede einzelne Buchung signieren.','i-beleg'],
    ['24.04.2026','fach','E-Rechnung: Was jetzt auf Betriebe zukommt','Elektronische Rechnungen sind kein PDF per Mail. Gemeint ist ein strukturiertes Format, das Maschinen lesen können. Wer empfangen muss, braucht kein neues Programm, aber ein vorbereitetes.','i-doku'],
    ['10.04.2026','fach','Warum Thermopapier aus der Werkstatt verschwindet','Bonrollen enthalten Stoffe, die über die Haut aufgenommen werden. Dazu verblassen die Belege binnen Monaten. Der digitale Beleg löst beide Probleme auf einmal.','i-beleg'],
    ['27.03.2026','branche','Die Werkstatt ist der Ertragsbringer, nicht der Verkauf','Während Neuverkäufe stagnieren, wächst das Servicegeschäft. Wer seine Werkstattauslastung nicht kennt, verschenkt genau dort Geld.','i-werk'],
    ['13.03.2026','fach','Zwei Minuten Auftragsannahme statt zehn','Wo der Auftrag entsteht, entscheidet über den Durchsatz. Wir haben nachgerechnet, was der Rückweg ins Büro einen Betrieb pro Jahr kostet.','i-hero'],
    ['28.02.2026','produkt','Werkstattplanung zeigt Auslastung vor der Zusage','Termine platzen selten aus Nachlässigkeit, sondern weil niemand sah, dass der Tag schon voll war.','i-werk'],
    ['14.02.2026','branche','Was Gastronomen an der Bestellaufnahme verlieren','In Stoßzeiten ist nicht die Küche der Engpass, sondern der Weg zum Tisch. Eine Rechnung mit echten Zahlen.','i-doku'],
    ['31.01.2026','fach','Datenübernahme beim Systemwechsel','Der häufigste Grund, bei einer schlechten Software zu bleiben, sind die Altdaten. Was sich übernehmen lässt und was nicht.','i-laptops'],
    ['17.01.2026','produkt','Online-Terminbuchung direkt im Werkstattkalender','Kunden buchen rund um die Uhr. Das System kennt die Auslastung und bietet nur an, was auch machbar ist.','i-laptops'],
    ['09.01.2026','meldung','Neues Jahr, neue Vorgaben: Was sich 2026 ändert','Ein Überblick über die Fristen, die Betriebe in Deutschland und Österreich betreffen.','i-n1'],
    ['18.12.2025','fach','Wenn die WhatsApp-Anfrage im Verlauf verschwindet','Kundenanfragen über Messenger sind bequem, bis jemand sucht, was vor drei Wochen zugesagt wurde. Warum jede Anfrage eine Nummer braucht.','i-chat'],
    ['04.12.2025','branche','Fahrer, Fracht und die Lücke dazwischen','Auf manchen Strecken läuft die Vermittlung noch über Telefonketten. Was das an Leerfahrten kostet.','i-trans'],
    ['20.11.2025','produkt','Berichte diktieren statt tippen','Zwei gesprochene Sätze werden zum strukturierten Besuchsbericht. Fertig, noch vor der Weiterfahrt.','i-buero'],
    ['06.11.2025','fach','Wie viel Software braucht ein Ein-Mann-Betrieb?','Nicht jede Funktion lohnt sich für jeden. Eine ehrliche Einordnung, ab wann sich welches Modul rechnet.','i-hero'],
    ['23.10.2025','fach','Lager, das sich selbst abbucht','Der teuerste Teil der Lagerhaltung ist nicht das Teil, sondern die Zeit, es zu erfassen. Wie Verbrauch automatisch auf die Rechnung kommt.','i-doku'],
    ['09.10.2025','branche','Zeiterfassung ohne privates Handy','Viele Betriebe scheitern an der Frage, ob Mitarbeitende eine App installieren müssen. Es geht auch anders.','i-runde'],
    ['25.09.2025','produkt','Rechnung mit QR-Code','Der Kunde scannt, zahlt, fertig. Auch Wochen später noch, wenn die Rechnung per Mail kam.','i-doku'],
    ['11.09.2025','fach','Mehrere Standorte, eine Auswertung','Filialen einzeln steuern, Zahlen zusammen sehen, worauf es beim Aufbau ankommt.','i-buero'],
    ['28.08.2025','branche','Der Kunde, der dreimal anruft','Jeder Anruf „Ist mein Rad fertig?“ kostet den Betrieb Zeit. Die Lösung ist keine Hotline, sondern eine automatische Nachricht.','i-kontakt'],
    ['14.08.2025','fach','Was ein Tagesbericht enthalten sollte','Und was nicht. Kennzahlen, die Betriebe wirklich steuern, statt Zahlen, die nur schön aussehen.','i-buero'],
    ['31.07.2025','produkt','Gesprächsleitfaden für den Außendienst','Vor dem Termin sehen, was zuletzt lief und was ansteht. Vorbereitung ohne Aktenordner.','i-talk'],
    ['17.07.2025','fach','Warum wir unsere Software selbst betreiben','Eine Agentur liefert ab und geht. Wer den Betrieb übernimmt, baut anders, und merkt Fehler zuerst.','i-hero'],
    ['03.07.2025','branche','Was Werkstätten beim Softwarewechsel fürchten','Datenverlust, Stillstand, Schulungsaufwand. Alle drei Sorgen sind berechtigt, und alle drei lösbar.','i-schulung'],
    ['19.06.2025','fach','Belege, die nach fünf Jahren noch lesbar sind','Aufbewahrungspflicht trifft auf verblassende Bonrollen. Wie digitale Belege das Problem umgehen.','i-beleg'],
    ['05.06.2025','produkt','Sendungsverfolgung ohne Anruf','Der Auftraggeber sieht den Stand selbst. Das spart beiden Seiten das Nachfragen.','i-trans'],
    ['22.05.2025','fach','Routenplanung nach Straße statt Luftlinie','Der Unterschied klingt klein und macht am Tag einen ganzen Termin aus.','i-talk'],
    ['08.05.2025','branche','Gastronomie: Was der Gast am Tisch wirklich will','Nicht bedient werden, sondern nicht warten. Was das für die Bestellaufnahme bedeutet.','i-gastro'],
    ['24.04.2025','fach','Ein System statt zehn Einzel-Tools','Die versteckten Kosten von Insellösungen: doppelte Erfassung, widersprüchliche Zahlen, Zuständigkeitslücken.','i-formular'],
    ['10.04.2025','produkt','Kiosk-Modus für Terminals','Das Tablet lässt sich nicht verlassen. Kein Zugriff auf anderes, keine Diskussion.','i-n3'],
    ['27.03.2025','fach','Was eine zertifizierte Kasse kostet, und was sie spart','Marktübliche Aufpreise im Vergleich. Warum wir die Sicherungseinrichtung nicht extra berechnen.','i-beleg'],
    ['13.03.2025','branche','Handwerk und Bürokratie','Zwischen Aufmaß und Abrechnung liegt oft ein Zettel. Wo Digitalisierung wirklich entlastet.','i-team'],
    ['27.02.2025','fach','Warum wir keine Preise verstecken','Wer Preise erst nach dem Telefonat nennt, filtert nicht, er verliert.','i-hero'],
    ['13.02.2025','produkt','Angebote als PDF, direkt aus dem Vorgang','Was kalkuliert wurde, steht im Angebot. Ohne Zwischenschritt über die Textverarbeitung.','i-kontakt'],
    ['30.01.2025','fach','Verfügbarkeit: Was passiert, wenn etwas ausfällt','Kein System läuft immer. Entscheidend ist, wie schnell jemand reagiert, und ob er das System kennt.','i-laptops'],
    ['16.01.2025','branche','Außendienst: Der Bericht, der nie geschrieben wird','Abends um acht schreibt niemand mehr gern Protokolle. Wie sich das Problem an der Wurzel löst.','i-buero'],
    ['12.12.2024','fach','Aufmaß vor Ort statt Übertragung im Büro','Jede Übertragung ist eine Fehlerquelle und kostet Zeit. Warum Erfassung dorthin gehört, wo gemessen wird.','i-team'],
    ['28.11.2024','produkt','Statistik, die nebenbei entsteht','Auswertung ist nur nützlich, wenn sie keine zusätzliche Arbeit macht.','i-team'],
    ['14.11.2024','fach','Grenzüberschreitend arbeiten: zwei Rechtsräume, ein System','Wer zwischen Ländern arbeitet, muss beide Regelwerke bedienen. Wie sich das ohne Zweitprogramm lösen lässt.','i-trans'],
    ['31.10.2024','branche','Warum kleine Betriebe zuletzt digitalisieren','Nicht aus Unwillen, sondern weil die Angebote auf Konzerne zugeschnitten sind. Das lässt sich ändern.','i-hero'],
    ['17.10.2024','fach','Vom Auftrag zur Rechnung ohne Medienbruch','Wo Daten das Format wechseln, entstehen Fehler. Ein durchgehender Weg spart mehr als jede Einzeloptimierung.','i-n1'],
    ['03.10.2024','produkt','Benachrichtigungen, die von selbst rausgehen','Ohne dass jemand daran denken muss, der häufigste Grund, warum Kunden nachfragen.','i-kontakt'],
    ['19.09.2024','fach','Was eine gute Übergabe ausmacht','Unterschrift, Foto, Zeitstempel. Warum der Nachweis wichtiger wird, je länger er zurückliegt.','i-trans'],
    ['05.09.2024','branche','Personalmangel und Software','Wenn Hände fehlen, zählt jede gesparte Minute doppelt. Wo Systeme wirklich entlasten, und wo nicht.','i-werk'],
    ['22.08.2024','fach','Schulung vor Ort statt Videokurs','Warum wir zu den Betrieben fahren, obwohl es teurer ist.','i-schulung'],
    ['08.08.2024','meldung','samoLabs nimmt Arbeit an eigenen Produkten auf','Aus der Auftragsentwicklung heraus entstehen die ersten eigenen Systeme für den Mittelstand.','i-hero']
  ];

  var KAT_NAME = { meldung:'Aus dem Haus', produkt:'Neue Funktion', fach:'Fachbeitrag', branche:'Aus der Branche' };
  function beitragKarte(b){
    return '<article class="card"><div class="ph ' + b[4] + '"></div><div class="cb">' +
      '<span class="n-kat">' + (KAT_NAME[b[1]] || '') + '</span>' +
      '<span class="n-d">' + b[0] + '</span>' +
      '<h3>' + b[2] + '</h3><p>' + b[3] + '</p></div></article>';
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
    var start = new Date(2025, 0, 6);
    var tag = new Date(start), heute = new Date();
    heute.setHours(0,0,0,0);
    var summe = 0;
    while (tag <= heute) {
      var wt = tag.getDay();
      if (wt >= 1 && wt <= 5) {
        var kennung = tag.getFullYear() * 10000 + (tag.getMonth() + 1) * 100 + tag.getDate();
        var streu = Math.abs(Math.sin(kennung) * 10000);
        summe += 45 + Math.floor((streu - Math.floor(streu)) * 66);
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
    "hero.titel": "Achieve more through innovation and growth",
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
    "hero.titel": "Więcej możliwości dzięki innowacjom i rozwojowi",
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
    "hero.titel": "Više postignuća kroz inovacije i rast",
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
    "hero.titel": "Enemmän aikaan innovaatioilla ja kasvulla",
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
    document.getElementById('d-crumb').textContent = d.titel.length > 42? d.titel.slice(0,40) + '\u2026': d.titel;
    var up = document.getElementById('d-up');
    up.textContent = d.ober;
    up.setAttribute('data-go', d.oberZiel);
    document.getElementById('d-marke').innerHTML = d.marke
? '<span class="lg hell" style="--s:27px; --lb:#fff; --ln:var(' + d.marke[2] + '-h); --la:var(' + d.marke[2] + '-h)"><b>' +
        d.marke[0] + '</b><span>' + d.marke[1] + '</span><em></em></span>': '';
    document.getElementById('d-titel').textContent = d.titel;
    document.getElementById('d-intro').textContent = d.intro;
    document.getElementById('d-h2').textContent = d.h2;
    document.getElementById('d-text').textContent = d.text;
    document.getElementById('d-bild').className = 'ph ' + d.bild;
    document.getElementById('d-punkte').innerHTML = d.punkte.map(function(x){
      return '<div class="q" style="border-top-color:var(--accent)"><h4>' + x[0] +
             '</h4><p style="color:var(--mid)">' + x[1] + '</p></div>';
    }).join('');
    document.getElementById('d-alltag').innerHTML = d.alltag.map(function(x){
      return '<div class="card"><div class="cb"><h3>' + x[0] + '</h3><p>' + x[1] + '</p></div></div>';
    }).join('');
    document.getElementById('d-cta').textContent =
      'Passt ' + (d.marke? d.marke[0] + d.marke[1]: 'das') + ' zu Ihrem Betrieb?';
    return true;
  }

  document.addEventListener('click', function(e){
    var ziel = e.target.closest('[data-go]');
    if (!ziel) return;
    e.preventDefault();
    var wohin = ziel.getAttribute('data-go');
    if (wohin.indexOf('detail:') === 0) {
      if (fuelleDetail(wohin.slice(7))) { zeige('detail'); history.replaceState(null, '', '#' + wohin); return; }
    }
    zeige(wohin);
    history.replaceState(null, '', wohin === 'start' ? location.pathname : '#' + wohin);
  });

  // Adresszeile auswerten, damit Verweise von den Rechtsseiten ankommen
  function ausHash(){
    var wohin = (location.hash || '').replace(/^#/, '');
    if (!wohin) return;
    if (wohin.indexOf('detail:') === 0) {
      if (fuelleDetail(wohin.slice(7))) zeige('detail');
      return;
    }
    zeige(wohin);
  }
  window.addEventListener('hashchange', ausHash);
  ausHash();

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
      if (window.innerWidth > 1080) {
        punkte.forEach(function(x){ x.classList.remove('open'); });
        p.classList.add('open');
      }
    });
    p.addEventListener('mouseleave', function(){
      if (window.innerWidth > 1080) p.classList.remove('open');
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
})();
