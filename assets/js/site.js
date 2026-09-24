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
    ['samo','Rad','--c-rad','i-p-rad','Fahrradfachhandel','Annahme, Werkstatt, Kasse, Lager und Einkauf in einem System, mit eigener App für Tresen und Werkstattbank.','rad'],
    ['samo','Order','--c-order','i-p-order','Gastronomie','QR-Bestellsystem mit zertifizierter Kasse: Gäste scannen den Tisch-Code und bestellen selbst, direkt an die Theke.','order'],
    ['samo','Transport','--c-transport','i-p-trans','Logistik','Frachtbörse mit Tourenplanung und Sendungsverfolgung für Speditionen und Fahrer.','transport'],
    ['samo','Vertrieb','--c-vertrieb','i-talk','Außendienst','Besuchsplanung, Routenoptimierung und diktierte Berichte statt Formulare.','vertrieb'],
    ['samo','Chat','--c-chat','i-chat','Kundenkontakt','Anfragen über WhatsApp, automatisch als Ticket erfasst, vorsortiert und beantwortet.','chat'],
    ['samo','Bot','--c-bot','i-bot','Kundenkontakt','KI-Assistent, der auf Website und WhatsApp rund um die Uhr antwortet, qualifiziert und an Ihr Team übergibt.','bot'],
    ['samo','Plan','--c-plan','i-p-plan','Gebäudetechnik','Aufmaß und Projektplanung für Betriebe der technischen Gebäudeausrüstung.','plan'],
    ['samo','Terminal','--c-term','i-n3','Zeiterfassung','Kommen und gehen per NFC-Karte am Tablet, ohne Stempeluhr und ohne Zettel.','terminal'],
    ['samo','Kiosk','--c-kiosk','i-n1','Digitale Werbeflächen','Werbung, Angebote und Speisekarten auf den eigenen Displays. Zentral im Browser gepflegt statt am Gerät.','kiosk']
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
  // Startseite: dieselben Produktkacheln wie auf der Produktseite
  var prodHeim = document.getElementById('prod-heim');
  if (prodHeim) prodHeim.innerHTML =
    PRODUKTE.map(function(x){ return produktKarte(x, true); }).join('') +
    '<a class="card" href="#" data-go="modelle"><div class="cb">' +
    '<h3>Nichts passt genau?</h3>' +
    '<p>Dann bauen wir nach Maß, auf derselben Grundlage wie unsere Produkte, betrieben von uns.</p>' +
    '<span class="more">Individualentwicklung →</span></div></a>';

  var prodStart = document.getElementById('prod-start');
  if (prodStart) prodStart.innerHTML =
    PRODUKTE.map(function(x){ return produktKarte(x, true); }).join('') +
    '<a class="card" href="#" data-go="modelle"><div class="cb">' +
    '<h3>Nichts passt genau?</h3>' +
    '<p>Dann bauen wir nach Maß, auf derselben Grundlage wie unsere Produkte, betrieben von uns.</p>' +
    '<span class="more">Individualentwicklung →</span></div></a>';




  // ── Inline-Icons (Lucide-Stil) für die Merkmal-Kacheln der Detailseiten ──
  function ic(inneres) {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
           'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inneres + '</svg>';
  }
  var IC = {
    annahme:   ic('<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>'),
    kalender:  ic('<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>'),
    schild:    ic('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'),
    paket:     ic('<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>'),
    warenkorb: ic('<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>'),
    beleg:     ic('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>'),
    glocke:    ic('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>'),
    handy:     ic('<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>'),
    kamera:    ic('<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>'),
    karte:     ic('<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>'),
    speicher:  ic('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>'),
    diagramm:  ic('<path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>'),
    lkw:       ic('<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>'),
    route:     ic('<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>'),
    stift:     ic('<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>'),
    mikro:     ic('<path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/>'),
    posteingang: ic('<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>'),
    personen:  ic('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
    lineal:    ic('<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z"/><path d="m7.5 10.5 2 2"/><path d="m10.5 7.5 2 2"/><path d="m13.5 4.5 2 2"/><path d="m4.5 13.5 2 2"/>'),
    nfc:       ic('<path d="M6 8.32a7.43 7.43 0 0 1 0 7.36"/><path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"/><path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"/><path d="M16.37 2a20.16 20.16 0 0 1 0 20"/>'),
    uhr:       ic('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
    vorgang:   ic('<path d="M4 9h16"/><path d="M4 15h16"/><path d="M10 3 8 21"/><path d="M16 3l-2 18"/>'),
    monitor:   ic('<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>'),
    schichten: ic('<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>'),
    suche:     ic('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),
    ort:       ic('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'),
    sprechblase: ic('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
    verbindung: ic('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
    bild:      ic('<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>'),
    koppeln:   ic('<path d="M2.59 17.41A2 2 0 0 0 2 18.83V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.17a2 2 0 0 0 1.41-.59l.82-.81a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>'),
    schloss:   ic('<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>')
  };

  // ── Inhalte aller Unterkategorien ─────────────────────────────────────
  var DETAIL = {
    rad: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Rad','--c-rad'], bild:'i-annahme',
      titel:'Werkstatt, Kasse und Lager in einem System',
      intro:'Das vollständige Betriebssystem für den Fahrradfachhandel: Annahme, Werkstattplanung, Kasse, Rechnung, Lager und Einkauf in einem Datenbestand, mit eigener App für Tresen und Werkstattbank.',
      h2:'Der Auftrag entsteht dort, wo der Kunde steht',
      text:'Kein Rückweg ins Büro, kein zweiter Erfassungsschritt: Der Mitarbeiter nimmt das Rad am Tresen an, fotografiert es, druckt das Etikett und der Auftrag läuft. Was in der Werkstatt verbaut wird, bucht sich vom Lager ab und steht abends auf der Rechnung. Ein Betrieb, ein System, vom ersten Kundenkontakt bis zum Export für die Steuerberatung.',
      punkte:[['Annahme am Tablet','Auftrag, Foto und Etikett in unter zwei Minuten, direkt am Tresen.', IC.annahme],
              ['Werkstattplanung','Wer macht was bis wann. Auslastung sichtbar, bevor ein Termin platzt.', IC.kalender],
              ['Zertifizierte Kasse','TSE nach Kassensicherungsverordnung, Kartenzahlung ohne zweites Gerät.', IC.schild],
              ['Lager, das mitdenkt','Verbautes Teil wird abgebucht und landet automatisch auf der Rechnung.', IC.paket],
              ['Einkauf beim Lieferanten','Artikel suchen, in den Warenkorb legen, bestellen, über die Branchenschnittstelle, ohne Portalwechsel.', IC.warenkorb],
              ['Rechnung aus dem Vorgang','Was gemacht wurde, steht in der Rechnung, mit QR-Code zur Sofortzahlung.', IC.beleg],
              ['Service-Erinnerungen','Die fällige Inspektion meldet sich von selbst. Wiederkehrender Umsatz ohne Nachtelefonieren.', IC.glocke],
              ['Eigene App für die Werkstatt','Annahme, Werkstattbank und Ausgabe als native App, nicht nur im Browser.', IC.handy]],
      alltag:[['Der Kunde ruft nicht mehr an','Die Nachricht, dass das Rad fertig ist, geht automatisch raus.'],
              ['Kein Vorgang geht mehr verloren','Jedes Rad trägt ein Etikett mit Nummer, jeder Vorgang eine Historie.'],
              ['Der Arbeitstag endet früher','Tagesabschluss und Kassenbericht entstehen nebenbei.'],
              ['Die Werkstatt wartet seltener auf Teile','Was zur Neige geht, steht auf der Nachbestellliste, bevor ein Rad deswegen stehen bleibt.'],
              ['Wareneingang dauert Minuten, nicht Stunden','Der Karton-Aufkleber wird fotografiert, nicht abgetippt.'],
              ['Der Monatsabschluss kostet keinen Abend','Umsätze, Belege und Exporte liegen vor, bevor jemand danach fragt.']]  /* tiefe:rad */,
      bloecke:[
        ['Die Annahme ist der halbe Auftrag','Am Tresen entscheidet sich, wie glatt der Rest läuft. Deshalb beginnt samoRad dort: Kunde suchen oder anlegen, Rad fotografieren, Arbeiten erfassen, Etikett drucken. Alles in einem Durchgang am Tablet, während der Kunde noch dasteht und Fragen beantworten kann. Was hier sauber erfasst ist, muss später niemand rekonstruieren. Die Werkstatt sieht den Auftrag sofort mit allem, was sie braucht: Foto, Fehlerbeschreibung, Zusagen, Termin.','i-annahme'],
        ['Die Werkstatt weiß morgens, was heute machbar ist','Der teuerste Termin ist der, den man zusagt und nicht hält. In samoRad hängt jeder Auftrag an einem Datum und an einer Person: Der Kalender zeigt, was angenommen, in Arbeit, fertig oder blockiert ist, und wie voll die kommenden Tage wirklich sind. Zeiten lassen sich am Auftrag starten und stoppen, sodass am Ende nicht geschätzt werden muss, wie lange etwas gedauert hat. Wer am Tresen einen Termin zusagt, sieht dieselbe Auslastung wie der Kollege an der Werkbank. Zusagen werden dadurch realistisch statt optimistisch, und die Saisonwochen planbar statt hektisch.','i-team'],
        ['Wareneingang, den niemand abtippt','Ein neues Rad kommt im Karton, und auf dem Karton steht bereits alles, was der Bestand braucht: Hersteller, Modell, Rahmennummer, Größe, Farbe. Statt diese Angaben abzuschreiben, fotografiert der Mitarbeiter den Aufkleber. samoRad liest Text und Codes aus und legt den Artikel mit den erkannten Feldern an. Was der Scan nicht sicher erkennt, bleibt sichtbar und ist in Sekunden korrigiert. Aus einer Lieferung von zwanzig Rädern wird damit eine Viertelstunde Arbeit statt eines halben Nachmittags, und die Rahmennummer steht dort, wo sie bei Garantie oder Diebstahl gebraucht wird.','i-papier'],
        ['Das Lager arbeitet mit, statt gepflegt zu werden','Bestände stimmen nur, wenn ihre Pflege nebenbei passiert. Wird ein Teil einem Auftrag zugeordnet, verlässt es den Bestand und steht auf der Rechnung. Ein Handgriff statt drei. Unterschreitet ein Artikel seine Mindestmenge, erscheint er auf der Nachbestellliste, bevor ein Rad wegen eines Zehn-Euro-Teils eine Woche steht. Und weil Einkauf, Verbrauch und Verkauf im selben System liegen, wissen Sie am Jahresende, was das Lager wirklich kostet.','i-n3'],
        ['Nachbestellen, ohne das Fenster zu wechseln','Teile bestellt man am besten dort, wo man sieht, dass sie fehlen. samoRad bindet die Kataloge der Lieferanten über die Branchenschnittstelle VeloConnect direkt ein: suchen, Verfügbarkeit und Einkaufspreis prüfen, in den Warenkorb legen, bestellen, im selben System, in dem der Auftrag steht. Die Bestellung geht elektronisch an den Lieferanten, der Status kommt zurück, und beides bleibt nachvollziehbar dokumentiert. Kein zweites Portal, keine Sammelmail, kein Nachfragen, ob die Bestellung angekommen ist.','i-laptops'],
        ['Kartenzahlung ohne eigenen Bankvertrag','Kassieren Sie, wie Ihre Kunden zahlen wollen: Karte am Gerät, kontaktlos, Zahlungslink in der Rechnung. Die Abwicklung läuft über einen der größten Zahlungsabwickler weltweit. Das Geld fließt direkt auf Ihr Konto, ohne dass Sie einen eigenen Vertrag mit einer Bank verhandeln müssen. Wir richten alles ein, der Betrag kommt aus dem Vorgang, und der Tagesabschluss stimmt, weil Kasse und Kartenzahlung nie getrennt waren.','i-n1'],
        ['Abrechnung, die der Prüfung standhält','Jede Buchung signiert die zertifizierte TSE, jeder Beleg liegt GoBD-konform ab, die Exporte für Steuerberatung und Kassenprüfung sind bereit, bevor jemand danach fragt. Rechnungen entstehen aus dem Vorgang, mit QR-Code zur Sofortzahlung, auf Wunsch in Raten, inklusive korrektem Storno. Jede Änderung an einem Vorgang wird protokolliert, jeder Zugriff ist einer Person zugeordnet. Was auf der Rechnung steht, ist bis zum Foto in der Annahme belegt.','i-beleg'],
        ['Der Kunde erledigt selbst, was ihn selbst betrifft','Jede Rückfrage, die der Kunde ohne Anruf beantworten kann, kostet Ihren Betrieb keine Zeit mehr. Über einen persönlichen Link, ohne Passwort, ohne App, sieht er den Stand seines Auftrags, bekommt automatisch Bescheid, wenn sich etwas ändert, und bucht freie Termine selbst. Der Betrieb bleibt dabei Herr des Verfahrens: Was sichtbar ist und welche Termine buchbar sind, legen Sie fest. Das Telefon am Tresen klingelt seltener, obwohl der Kunde besser informiert ist als vorher.','i-kunde-laden'],
        ['Aus dem Verkauf wird wiederkehrender Umsatz','Der größte Wert eines Kunden entsteht nach dem ersten Auftrag. samoRad erinnert automatisch an die fällige Inspektion, per Nachricht oder E-Mail, mit direktem Buchungslink. Der Kunde bucht, der Termin steht im Kalender, die Werkstatt plant vor. So wird aus einer einmaligen Reparatur ein planbarer Service, der die Auslastung in ruhigen Wochen füllt und die Bindung erhöht.','i-kontakt'],
        ['Ein System, drei Arbeitsplätze','Am Tresen steht ein Tablet, an der Werkbank ein Telefon, im Kassenbereich ein fester Bildschirm, und alle drei zeigen denselben Vorgang. Die Mitarbeiter-App gibt es als installierbare Anwendung für Android und als Desktop-Arbeitsplatz; sie ist keine verkleinerte Webseite, sondern auf die Handgriffe zugeschnitten, die an der jeweiligen Station wirklich anfallen: Annahme, Werkstatt, Ausgabe, Kalender. Wer das Gerät wechselt, wechselt nicht das System, und muss nichts doppelt erfassen.','i-p-rad'],
        ['Ihre Daten liegen in Deutschland und gehören Ihnen','Jeder Betrieb bekommt seinen eigenen Datenbestand auf Servern in Deutschland, betrieben von der samoLabs. Keine gemeinsamen Datentöpfe, keine Zweitverwertung Ihrer Kundendaten, kein Training fremder Systeme. Auskunft, Export und Löschung nach Datenschutz-Grundverordnung sind eingebaut statt nachträglich organisiert: Ein Kundendatensatz lässt sich vollständig exportieren oder revisionssicher anonymisieren, Aufbewahrungsfristen laufen im Hintergrund mit. Und wenn Sie eines Tages gehen wollen, nehmen Sie alles mit. Vollständig und maschinenlesbar.','i-doku'],
        ['Beim E-Bike wird die Akte zur Wertsache','Ein Rad für viertausend Euro verändert die Ansprüche an die Werkstatt: Der Kunde erwartet Nachweise, die Versicherung verlangt die Rahmennummer, die Garantie hängt an dokumentierten Inspektionen. In samoRad trägt jedes Rad seine vollständige Akte. Fotos von der Annahme, verbaute Teile, erledigte Arbeiten, Termine. Beim Wiederverkauf, im Garantiefall oder nach einem Diebstahl ist alles da, was sonst mühsam rekonstruiert werden müsste.','i-story'],
        ['Die Saison bricht nicht mehr über den Betrieb herein','Im April wollen alle gleichzeitig aufs Rad, im November steht die Werkstatt still. Das ist die Branche, kein Betriebsfehler. Planbar wird es trotzdem: Der Kalender zeigt, wie voll die kommenden Wochen wirklich sind, Service-Erinnerungen holen Inspektionen gezielt in die ruhigen Monate, und die Auswertung zeigt, welche Wochen das Jahr tragen. Der Frühjahrsstau wird kleiner, der Winter wertvoller.','i-n2'],
        ['Verkauf und Werkstatt sind ein Geschäft, kein Nebeneinander','Das verkaufte Rad von heute ist der Serviceauftrag von morgen. Weil Handel und Werkstatt in samoRad denselben Datenbestand teilen, beginnt die Historie eines Rades nicht bei der ersten Reparatur, sondern beim Verkauf: Rahmennummer, Ausstattung, Übergabedatum. Die erste Inspektion meldet sich von selbst, das Zubehör landet auf demselben Bon, und der Kunde bleibt derselbe Kunde, egal, an welchem Tresen er steht.','']
      ],
      fragen:[
        ['Wir arbeiten heute mit Zetteln. Wie groß ist der Umstieg wirklich?','Kleiner als befürchtet: Kundenstamm und offene Vorgänge übernehmen wir, geschult wird ein Tag vor Ort, und in der ersten Woche läuft das alte Verfahren parallel weiter. Die meisten Teams arbeiten nach wenigen Tagen selbstständig.'],
        ['Brauchen wir neue Geräte?','Ein handelsübliches Android-Tablet für den Tresen und ein Etikettendrucker genügen für den Start. Vorhandene Rechner bleiben nutzbar, die Anwendung läuft im Browser.'],
        ['Können wir bei unseren Lieferanten weiter bestellen?','Ja. samoRad bindet Lieferantenkataloge über die Branchenschnittstelle VeloConnect ein; welche Lieferanten das in Ihrem Fall sind, richten wir gemeinsam mit Ihren bestehenden Konditionen ein. Ihre Zugangsdaten liegen verschlüsselt im System, Ihre Einkaufspreise bleiben Ihre Sache.'],
        ['Wir haben bereits eine Warenwirtschaft. Muss die weg?','Nicht zwingend. Wo ein System sauber läuft, binden wir es an, statt es zu ersetzen. Welche Daten in welche Richtung fließen, legen wir vorher gemeinsam fest. Wo doppelte Pflege heute täglich Zeit kostet, ist die Ablösung oft der ehrlichere Weg. Das entscheiden wir nach Ihrem Bestand, nicht nach unserem Produktkatalog.'],
        ['Wie lange dauert die Einrichtung?','Von der Zusage bis zum ersten echten Auftrag vergehen in der Regel wenige Wochen: Datenübernahme und Einrichtung laufen im Hintergrund, die Schulung findet an einem Tag im Betrieb statt, danach arbeitet das gewohnte Verfahren eine Woche parallel weiter. Den Umstieg legen wir bewusst nicht in die Hochsaison.'],
        ['Was passiert mit unseren Daten, wenn wir kündigen?','Sie bekommen jederzeit einen vollständigen Export in gängigen Formaten. Ihre Daten gehören Ihnen, auch beim Abschied.'],
        ['Können wir mehrere Filialen zentral führen?','Ja. Jeder Standort arbeitet eigenständig, die Auswertung führt sie in einer Sicht zusammen. Umsatz, Auslastung und Bestände je Filiale und im Vergleich.'],
        ['Wie bildet samoRad E-Bikes ab?','Wie jedes Rad, nur zählt hier die Akte doppelt: Rahmennummer, verbaute Teile, dokumentierte Inspektionen und Fotos hängen am Rad. Für Garantie, Versicherung und Wiederverkauf ist belegt, was gemacht wurde und wann.'],
        ['Hilft das System gegen den Frühjahrsstau?','Es macht ihn kleiner: Service-Erinnerungen holen Inspektionen in die ruhigen Monate, und der Kalender zeigt vor der Zusage, wie voll die Woche wirklich ist. Die Saison bleibt Saison, aber sie überrascht nicht mehr.'],
        ['Wir verkaufen auch, nicht nur Werkstatt. Deckt samoRad den Handel ab?','Ja. Verkauf, Zubehör und Werkstatt laufen über dieselbe Kasse und denselben Kundenstamm; das verkaufte Rad startet mit seiner Historie ab Übergabe. Getrennte Systeme für Laden und Werkstatt braucht es nicht.']
      ]},

    order: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Order','--c-order'], bild:'i-p-order',
      titel:'Gäste bestellen selbst, die Theke sieht es sofort',
      intro:'QR-Bestell- und Kassensystem für Restaurants, Imbisse, Bars und Cafés. Gäste scannen den Code am Tisch und bestellen selbst, ohne App-Installation, ohne Wartezeit am Tisch.',
      h2:'Vom Tisch direkt an die Theke',
      text:'Der Gast scannt den Code an seinem Tisch und sieht die aktuelle Karte. Was er bestellt, erscheint in Echtzeit auf dem Terminal hinter der Theke, mit Tischnummer, ohne Zwischenruf und ohne Notiz, die verloren gehen kann. Das Personal serviert, statt aufzunehmen.',
      punkte:[['Bestellen per Tisch-QR','Der Gast öffnet nur die Kamera, keine App, keine Anmeldung. Bestellt wird, sobald der Gast so weit ist.',
               '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>'],
              ['Aufkleber-Bögen auf Vorrat','Die QR-Bögen sind generisch vorgedruckt. Ein Bogen wird im Betrieb freigeschaltet, danach ordnen sich die Codes automatisch den Tischen zu.',
               '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>'],
              ['Sofort an der Theke','Jede Bestellung erscheint in Echtzeit mit Tischnummer. Weniger Wege für das Personal, kürzere Wartezeit für den Gast.',
               '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>'],
              ['Zertifizierte Kasse dahinter','Jede Buchung TSE-signiert, die Abläufe GoBD-konform. Bestellung und Abrechnung aus einer Hand, Daten in Deutschland.',
               '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>'],
              ['Karte in Minuten geändert','Preise, Tagesangebote, Ausverkauftes. Sofort an jedem Tisch aktuell. Kein Neudruck, kein Zettel über der Karte.', IC.stift],
              ['Stationen im Takt','Getränke an die Theke, Speisen in die Küche. Jede Station sieht ihre offenen Positionen in Reihenfolge.', IC.schichten],
              ['Auswertung je Tag und Tisch','Was der Abend gebracht hat, steht morgens fest, ohne Zettelrechnung.', IC.diagramm],
              ['Läuft bei Netzausfall weiter','Das Terminal arbeitet offline weiter und gleicht ab, sobald Verbindung besteht.', IC.verbindung]],
      alltag:[['Weniger Wege','Das Personal läuft zum Servieren, nicht zum Aufnehmen.'],
              ['Höherer Durchschnittsbon','Wer die Karte in Ruhe liest, bestellt eher noch etwas dazu.'],
              ['Ruhigere Stoßzeiten','Bestellungen stapeln sich im System, nicht an der Theke.'],
              ['Abrechnen ohne Zettelsuche','Jeder Tisch führt seine offenen Posten selbst, auch beim Schichtwechsel.'],
              ['Die Karte ist nie veraltet','Preisänderung um 17 Uhr, gültig um 17:01, an allen Tischen gleichzeitig.'],
              ['Der Abschluss stimmt von selbst','Bar und Karte laufen im selben Kassenabschluss zusammen, nach Zahlarten getrennt.']]  /* tiefe:order */, bloecke:[['Die Karte lebt, die Theke behält den Überblick','Die Speisekarte ist bei samoOrder kein PDF, sondern ein lebender Bestand: Preise ändern, Artikel ausblenden, Tagesangebote einstellen. Sofort sichtbar an jedem Tisch. Bestellungen laufen mit Tischnummer an der Theke auf und werden dort abgearbeitet, kassiert und abgeschlossen. Auch bei vollem Haus bleibt nachvollziehbar, welcher Tisch was bekommen hat und was noch offen ist.','i-gastro'],['Der QR-Bogen liegt bereit, bevor der Tisch ihn braucht','Die Aufkleber-Bögen von samoOrder sind bewusst generisch: auf Vorrat gedruckt statt je Betrieb gefertigt. Bei der Einrichtung wird ein Bogen über seine Bogen-ID für den Betrieb freigeschaltet, ab dann ordnet das System jeden Code automatisch dem richtigen Tisch zu. Neue Terrasse, zusätzlicher Tisch, abgelöster Aufkleber: aufkleben, freischalten, weiterarbeiten. Kein Warten auf eine Druckerei, kein Neudruck bei jeder Änderung.','i-papier'],['Kartenzahlung ohne eigenen Bankvertrag','Kassieren Sie, wie Ihre Kunden zahlen wollen: Karte am Gerät, kontaktlos, Zahlungslink in der Rechnung. Die Abwicklung läuft über einen der größten Zahlungsabwickler weltweit. Das Geld fließt direkt auf Ihr Konto, ohne dass Sie einen eigenen Vertrag mit einer Bank verhandeln müssen. Wir richten alles ein, der Betrag kommt aus dem Vorgang, und der Tagesabschluss stimmt, weil Kasse und Kartenzahlung nie getrennt waren.','i-n1'],['Gebaut für den Abend mit Warteschlange','Ein Bestellsystem beweist sich nicht am Dienstagnachmittag, sondern am Samstagabend. Deshalb ist samoOrder auf Stoßzeiten ausgelegt: Bestellungen sammeln sich geordnet im System statt an der Theke, die Küche sieht die Reihenfolge, und das Personal läuft zum Servieren statt zum Aufnehmen. Fällt das Netz aus, arbeitet das Terminal weiter und gleicht ab, sobald die Verbindung zurück ist.','i-beleg'],['Der Bon steigt, ohne dass jemand drängt','Wer die Karte in Ruhe liest, bestellt anders: der zweite Espresso, die Nachspeise, das Wasser zum Wein dazu. samoOrder legt dem Gast nichts nahe. Es nimmt nur die Hürde weg, jemanden heranwinken zu müssen. Nachbestellungen passieren, wenn der Impuls da ist, nicht wenn zufällig jemand am Tisch vorbeikommt. Genau das sieht man am Ende des Abends im Abschluss.','i-tisch'],['Stationen sehen nur, was sie angeht','Getränke gehören an die Theke, Speisen in die Küche. samoOrder verteilt jede Bestellung an ihre Station: Dort steht, was offen ist und in welcher Reihenfolge. Abgehakt wird, was rausgeht, und niemand ruft quer durch den Raum. Der Tisch bleibt trotzdem ein Vorgang: Was zusammengehört, wird zusammen abgerechnet.','i-gastro'],['Zahlen, die dem Betreiber gehören','Welcher Tisch läuft, welche Stunde trägt den Abend, was bleibt vom Samstag: Die Auswertung zeigt Umsatz je Tag, Tisch und Artikel. Eingebaut statt in einer Tabellenkalkulation nachgebaut. Ihre Daten liegen dabei in Deutschland und gehören Ihnen: Export jederzeit, Zweitverwertung nie.','i-doku']], fragen:[['Müssen unsere Gäste eine App installieren?','Nein. Der Gast scannt den Code am Tisch mit der Kamera, die Karte öffnet sich im Browser. Genau diese fehlende Hürde entscheidet, ob Gäste mitmachen.'],['Wie kommen die QR-Codes auf die Tische?','Als vorgedruckte Aufkleber-Bögen, die auf Vorrat liegen. Ein Bogen wird über seine Bogen-ID für Ihren Betrieb freigeschaltet, danach ordnet das System die Codes automatisch den Tischen zu. Zusätzliche Tische oder Ersatz brauchen keinen Neudruck.'],['Können wir bar und mit Karte gemischt kassieren?','Ja. Die Theke kassiert je Tisch bar oder mit Karte, auch geteilt. Alles landet im selben Abschluss, die Kassensicherung signiert jede Buchung.'],['Was kostet der Einstieg?','Ein Tablet für die Theke und die QR-Aufsteller. Mehr Hardware braucht es nicht. Die Einrichtung übernehmen wir, die Karte pflegen Sie danach selbst.'],['Funktioniert das auch auf der Terrasse?','Ja. Der Bogen klebt am Tisch, der Gast braucht nur den Empfang seines eigenen Telefons. Und fällt das WLAN an der Theke aus, arbeitet das Terminal weiter und gleicht später ab.'],['Können Gäste weiterhin beim Personal bestellen?','Natürlich. Die Theke erfasst jede Bestellung auch selbst. Der QR-Weg entlastet das Personal, er ersetzt es nicht. Beide Wege landen im selben Vorgang je Tisch.'],['Brauchen wir eine eigene Anzeige für die Küche?','Nur wenn Küche und Theke getrennt arbeiten: Dann bekommt jede Station ihre eigene Sicht auf einem Tablet. In der kleinen Bar genügt das Terminal an der Theke.']]},

    transport: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Transport','--c-transport'], bild:'i-p-trans',
      titel:'Fracht finden, Touren planen, Sendungen verfolgen',
      intro:'Für Speditionen und Fahrer auf Strecken, die bisher kaum digitalisiert sind.',
      h2:'Auftraggeber und Fahrer auf derselben Strecke',
      text:'Wer eine Ladung hat, stellt sie ein. Wer die Strecke ohnehin fährt, sieht sie. Dazwischen steht keine Telefonkette, sondern ein System, das Angebot und Route zusammenbringt, und die Sendung bis zur Übergabe nachvollziehbar hält.',
      punkte:[['Fracht auf Ihrer Route','Passende Aufträge entlang der Strecke, die Sie ohnehin fahren.', IC.lkw],
              ['Tourenplanung','Reihenfolge, Fahrzeit und Stopps auf Basis echter Straßendaten.', IC.route],
              ['Sendungsverfolgung','Der Auftraggeber sieht den Stand, ohne anzurufen.', IC.ort],
              ['Übergabe dokumentiert','Empfang bestätigt mit Unterschrift und Foto, direkt im System.', IC.stift],
              ['Auftrag mit allem dran','Ladung, Termine, Übergabeorte, Ansprechpartner. Vollständig im Vorgang statt in drei Anrufen.', IC.vorgang],
              ['Ankunft, die stimmt','Zusagen aus echten Fahrzeiten. Der Empfänger weiß, wann es so weit ist.', IC.uhr],
              ['Alles auf dem Telefon des Fahrers','Aufträge, Navigation und Übergabe auf dem Android-Gerät, ohne Papier im Führerhaus.', IC.handy],
              ['Wochen später noch belegt','Auftrag, Unterschrift und Fotos bleiben im Vorgang, solange Sie sie brauchen.', IC.speicher]],
      alltag:[['Weniger Leerfahrten','Die Rückfahrt trägt sich mit, statt leer zu bleiben.'],
              ['Weniger Rückfragen','Wo die Sendung steht, beantwortet das System selbst.'],
              ['Sauberer Nachweis','Jede Übergabe ist belegt, auch Wochen später noch.'],
              ['Das Büro arbeitet am Stück','Statusanrufe entfallen. Die Disposition wird seltener unterbrochen.'],
              ['Zusagen halten','Ankunftszeiten kommen aus der Route, nicht aus dem Bauchgefühl.'],
              ['Diskussionen werden kurz','Unterschrift, Foto und Zeitstempel beenden Streit, bevor er anfängt.']]  /* tiefe:transport */, bloecke:[['Die Rückfahrt entscheidet die Rechnung','Eine Tour rechnet sich über beide Richtungen. samoTransport zeigt Fracht entlang der Strecke, die ohnehin gefahren wird, statt Telefonkette eine Liste passender Aufträge mit Ladung, Terminen und Übergabeorten. Wer regelmäßig fährt, baut sich feste Routen auf, auf denen das System von selbst vorschlägt, was dazu passt.','i-trans'],['Jede Übergabe hält vor Gericht','Solange alles gut geht, interessiert die Dokumentation niemanden. Wichtig wird sie, wenn Wochen später jemand behauptet, eine Ladung sei beschädigt oder nie angekommen. Deshalb gehört zu jeder Übergabe die Unterschrift des Empfängers, ein Foto der Ware und der Zeitstempel mit Ort. Automatisch im Vorgang abgelegt, nicht in einer Fototasche im Handschuhfach.','i-doku'],['Die Tour steht, bevor der Motor läuft','Eine Route entsteht nicht aus der Reihenfolge, in der die Aufträge eingegangen sind. samoTransport rechnet mit echten Straßendaten: Fahrzeit, sinnvolle Reihenfolge der Stopps, realistische Ankunftszeiten. Wer weiß, wann er wo ist, kann Zusagen machen, die halten, und sieht vor der Abfahrt, ob eine zusätzliche Ladung noch in den Tag passt oder nur die Marge frisst.','i-buero'],['Der Auftraggeber fragt nicht mehr nach','Die häufigste Unterbrechung im Speditionsalltag ist der Anruf: Wo steht die Sendung? samoTransport beantwortet diese Frage, bevor sie gestellt wird. Der Auftraggeber sieht den Stand selbst, angenommen, unterwegs, übergeben, und erfährt es, wenn sich etwas ändert. Das Büro verliert damit nicht nur Telefonate, sondern die Unterbrechungen, die jede Disposition ausbremsen.','i-kontakt'],['Der Fahrer braucht kein Büro, nur sein Telefon','Alles, was unterwegs gebraucht wird, passt in die Jackentasche: die Aufträge des Tages, die Navigation zur Übergabe, die Empfangsbestätigung mit Unterschrift und Foto. Kein Klemmbrett, kein Durchschlag, keine Fototasche im Handschuhfach, und keine Fahrt ins Büro, nur um Papiere abzugeben. Was der Fahrer erfasst, liegt in dem Moment im Vorgang, in dem es passiert.','i-papier'],['Sprachgrenzen sind keine Auftragsgrenzen','Auf Strecken zwischen Deutschland und Südosteuropa wechselt die Sprache öfter als der Fahrer. samoTransport zeigt Auftraggeber und Fahrer denselben Vorgang jeweils in ihrer Sprache. Was vereinbart ist, versteht jeder Beteiligte, und die Übergabe ist belegt, egal in welcher Sprache sie stattfand. Missverständnisse sind auf diesen Strecken keine Anekdoten, sondern Kostenfaktoren.','i-runde'],['Klein anfangen ist der normale Weg','Ein Fahrzeug, eine feste Strecke, die ersten Aufträge. So beginnen die meisten. samoTransport verlangt keine Flotte und keine IT-Abteilung: angemeldet, eingewiesen, gefahren. Was dazukommt, Fahrzeuge, Strecken, Kollegen, kommt einfach dazu. Gewachsen wird im Betrieb, nicht im Vertrag.','i-team']], fragen:[['Für welche Strecken lohnt sich das?','Überall dort, wo Vermittlung heute über Anrufe läuft. Gestartet sind wir zwischen Deutschland und Südosteuropa; das System selbst ist streckenneutral.'],['Was braucht der Fahrer unterwegs?','Ein Android-Telefon. Aufträge, Navigation zur Übergabe und die Empfangsbestätigung laufen darauf, ohne Papier im Führerhaus.'],['Sehen Auftraggeber unsere Preise?','Nein. Konditionen bleiben zwischen den Beteiligten des jeweiligen Auftrags; das System macht Angebote sichtbar, nicht Ihre Kalkulation.'],['Bleiben die Daten einer Sendung nach der Zustellung verfügbar?','Ja. Auftrag, Übergabebeleg, Unterschrift und Fotos bleiben im Vorgang und lassen sich auch Wochen später aufrufen. Genau dafür wird dokumentiert.'],['Wie kommen wir als Neue an Aufträge?','Über Ihre Strecke: Sie hinterlegen, was Sie ohnehin fahren, und sehen passende Ladungen entlang der Route. Auftraggeber stellen ein, was zu transportieren ist. Zusammengebracht wird im System statt am Telefon.'],['In welchen Sprachen läuft das System?','Mehrsprachig: Auftraggeber und Fahrer sehen denselben Vorgang jeweils in ihrer Sprache. Auf Strecken über Grenzen ist das keine Komfortfrage, sondern Voraussetzung.'],['Was kostet der Einstieg an Ausrüstung?','Ein Android-Telefon je Fahrer genügt. Keine Geräte im Fahrzeug, kein Einbau, keine Werkstatttermine.']]},

    vertrieb: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Vertrieb','--c-vertrieb'], bild:'i-talk',
      titel:'Außendienst, der beim Kunden ist statt am Schreibtisch',
      intro:'Besuche planen, Routen optimieren, Berichte unterwegs diktieren.',
      h2:'Der Bericht entsteht im Auto, nicht abends zu Hause',
      text:'Nach dem Termin diktiert der Mitarbeiter zwei Sätze, das System macht daraus einen strukturierten Besuchsbericht. Die Route zum nächsten Kunden steht schon fest, berechnet nach echten Straßendaten, nicht nach Luftlinie.',
      punkte:[['Besuchsplanung','Wer wird wann besucht, wer ist überfällig, auf einen Blick.', IC.kalender],
              ['Routenoptimierung','Die sinnvolle Reihenfolge für den Tag, nicht die zufällige.', IC.route],
              ['Bericht per Sprache','Diktieren statt tippen. Fertig, noch vor der Weiterfahrt.', IC.mikro],
              ['Gesprächsleitfaden','Vorbereitung auf den Termin: Was lief zuletzt, was steht an.', IC.beleg],
              ['Wiedervorlage statt Erinnerung','Aus „Ich melde mich" wird ein Datum, das von selbst wiederkommt.', IC.glocke],
              ['Kundenakte in der Tasche','Historie, Ansprechpartner, Zusagen. Vollständig am Telefon, bevor Sie aussteigen.', IC.handy],
              ['Überfällige fallen auf','Wer zu lange nicht besucht wurde, rückt von selbst nach vorn.', IC.uhr],
              ['Auswertung ohne Überwachung','Gezählt werden Besuche und Berichte, keine Bewegungsprofile.', IC.diagramm]],
      alltag:[['Mehr Termine pro Tag','Kürzere Wege bedeuten einen Kunden mehr, ohne länger zu arbeiten.'],
              ['Berichte kommen wirklich an','Weil sie zwei Minuten dauern statt zwanzig.'],
              ['Nichts geht verloren','Jede Zusage steht beim Kunden, nicht im Notizbuch.'],
              ['Die Woche plant sich selbst','Fälligkeit und Fahrzeit ergeben den Plan, nicht der Zufall.'],
              ['Übergaben funktionieren','Die Vertretung liest die Historie, statt den Vorgänger anzurufen.'],
              ['Berichte liegen vor','Niemand muss sie einsammeln. Sie entstehen unterwegs.']]  /* tiefe:vertrieb */, bloecke:[['Der Tag plant sich nach Straße, nicht nach Luftlinie','Zwei Kunden können auf der Karte nah beieinander liegen und trotzdem vierzig Minuten auseinander. samoVertrieb rechnet mit echten Fahrzeiten und schlägt die Reihenfolge vor, die tatsächlich funktioniert. Wer fällig ist, rückt nach vorn; wer überfällig ist, fällt auf. Am Ende des Tages steht ein Termin mehr im Kalender, ohne dass jemand länger unterwegs war.','i-buero'],['Der Bericht entsteht, solange der Termin frisch ist','Nach dem Gespräch zwei Sätze ins Telefon: was besprochen wurde, was zugesagt ist, wann nachgefasst wird. Daraus wird ein strukturierter Bericht beim Kunden, nicht im Notizbuch, nicht im Kopf. Vor dem nächsten Termin liegt die ganze Historie griffbereit: letzte Themen, offene Zusagen, wunde Punkte. Vertretung wird damit vom Blindflug zum Weiterspielen.','i-laptops'],['Vorbereitet in zwei Minuten statt zwanzig','Vor einem Termin zählt nicht, was im System alles steht, sondern was jetzt relevant ist: die letzten Themen, offene Zusagen, der Grund des letzten Ärgers. samoVertrieb stellt genau das zusammen, bevor der Mitarbeiter aussteigt. Wer vorbereitet hineingeht, führt ein anderes Gespräch als jemand, der sich erinnern muss, und eine Vertretung wird vom Blindflug zum Weiterspielen.','i-buero'],['Zusagen werden Wiedervorlagen, nicht Zettel','Der teuerste Satz im Vertrieb lautet: „Ich melde mich nächste Woche." Was im Bericht als Zusage steht, wird zur Wiedervorlage mit Datum und taucht in der Tagesplanung wieder auf, statt in einem Notizbuch zu verschwinden. Kein Interessent geht verloren, weil ein Zettel weg ist, und die Leitung sieht offene Zusagen, ohne nachfragen zu müssen.','i-runde'],['Das Notizbuch war nie das Problem. Das Übertragen war es','Notizen macht jeder Außendienst. Verloren geht, was zwischen Notiz und System liegt: der Abend, an dem übertragen werden sollte, das Wochenende dazwischen, die Woche danach. samoVertrieb streicht diesen Zwischenschritt. Diktiert ist erfasst, erfasst ist beim Kunden, und die Zusage vom Dienstag ist am Donnerstag eine Wiedervorlage, keine Erinnerungslücke.','i-papier'],['Führung sieht den Stand, nicht den Standort','Zahlen führen besser als Kontrolle: welche Kunden überfällig sind, welche Zusagen offen, wie viele Besuche die Woche trägt. samoVertrieb wertet Arbeit aus, keine Bewegung. Bewegungsprofile gibt es bewusst nicht. Das Team weiß das. Und genau deshalb trägt es das System mit, statt Wege darum herum zu suchen.','i-runde'],['Der Neue übernimmt ein Gebiet, keinen Karteikasten','Wenn ein Außendienstler geht, ging früher sein Wissen mit: welche Kunden heikel sind, was zugesagt wurde, wer nur dienstags Zeit hat. In samoVertrieb steht das beim Kunden. Der Nachfolger fährt vom ersten Tag mit der vollen Historie, und muss sich nicht bei jedem Termin dafür entschuldigen, dass er neu ist.','i-team']], fragen:[['Funktioniert das Diktieren auch bei Dialekt und Fachbegriffen?','Ja, und was das System nicht sauber versteht, bleibt als Rohtext erhalten und lässt sich in Sekunden korrigieren. Nichts geht verloren.'],['Können wir unsere Kundenliste importieren?','Ja, aus Tabellen oder dem Export Ihres bisherigen Systems, inklusive Adressen und Ansprechpartnern. Die Zuordnung prüfen wir gemeinsam bei der Einrichtung.'],['Sieht die Leitung, wo die Mitarbeiter gerade sind?','Nein. Geplant und ausgewertet werden Besuche und Berichte, keine Bewegungsprofile. Das schützt das Vertrauen im Team, und Sie rechtlich.'],['Wie lange dauert es, bis der Außendienst damit arbeitet?','Kurz, weil sich die Bedienung an den Tagesablauf hält: planen, hinfahren, diktieren. Eingewiesen wird das Team gemeinsam an einem Tag; die ersten Wochen begleiten wir. Widerstand entsteht erfahrungsgemäß nicht an der Technik, sondern an Systemen, die zusätzliche Arbeit machen.'],['Läuft das auch ohne ständige Netzverbindung?','Tagesplan und Kundenakte liegen auf dem Gerät, diktiert wird auch ohne Empfang. Abgeglichen wird, sobald wieder Netz da ist. Ein Funkloch kostet keinen Bericht.'],['Wir haben schon ein CRM. Passt das zusammen?','Wenn ein System bleiben soll, binden wir es an; Kundenliste und Historie lassen sich übernehmen. Oft ersetzt samoVertrieb allerdings genau die Tabelle, die bisher CRM hieß.'],['Was sieht der einzelne Mitarbeiter?','Sein Gebiet, seine Kunden und alles, was er für den Termin braucht. Wer darüber hinaus was sieht, legen Sie über Rollen fest.']]},

    chat: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Chat','--c-chat'], bild:'i-chat',
      titel:'Aus der Nachricht wird ein Vorgang',
      intro:'Kundenanfragen automatisch erfasst, vorsortiert und beantwortet, mit Nummer statt Chatverlauf.',
      h2:'Kundenkontakt, der nicht im Verlauf verschwindet',
      text:'Anfragen kommen dort an, wo Ihre Kunden ohnehin sind. Statt sie im Chatverlauf zu suchen, macht das System daraus einen Vorgang mit Nummer, ordnet ihn zu und schlägt eine Antwort vor. Wer zuständig ist, sieht es sofort.',
      punkte:[['Jede Anfrage bekommt eine Nummer','Nachvollziehbar, zuweisbar, auffindbar, auch nach drei Wochen.', IC.vorgang],
              ['Vorsortiert nach Anliegen','Termin, Reklamation oder Preisfrage landen im richtigen Korb.', IC.posteingang],
              ['Antwortvorschlag','Das System schlägt vor, ein Mensch entscheidet.', IC.sprechblase],
              ['Anbindung an den Auftrag','Die Anfrage hängt am Vorgang, nicht daneben.', IC.verbindung],
              ['Alle Kanäle, ein Eingang','WhatsApp, E-Mail, Formular. Ein Posteingang statt vier Apps.', IC.schichten],
              ['Antwortzeit wird messbar','Wie schnell Ihr Team antwortet, steht im System, nicht im Gefühl.', IC.uhr],
              ['Bausteine für Wiederkehrendes','Öffnungszeiten, Anfahrt, Abläufe: einmal sauber formuliert, immer griffbereit.', IC.beleg],
              ['samoBot davor, wenn Sie wollen','Der KI-Assistent beantwortet Routinefragen sofort, und übergibt den Rest mit Verlauf.', IC.personen]],
      alltag:[['Nichts geht unter','Auch die Nachricht um 22 Uhr ist am Morgen ein Vorgang.'],
              ['Kürzere Antwortzeiten','Weil niemand erst den Verlauf durchscrollen muss.'],
              ['Vertretung wird einfach','Wer einspringt, sieht sofort den Stand.'],
              ['Das private Handy bleibt privat','Kundenkontakt läuft über den Betrieb, nicht über die Nummer eines Mitarbeiters.'],
              ['Antworten werden vollständiger','Wer Vorschläge prüft, statt unter Druck zu tippen, vergisst nichts.'],
              ['Zuständigkeit ist geklärt','Am Vorgang steht, wer übernimmt, nicht im Flurfunk.']]  /* tiefe:chat */, bloecke:[['Ein Posteingang für alles, was Kunden schreiben','WhatsApp, E-Mail, Formular, bald auch der Anruf über den Sprachdialog: samoChat führt alle Kanäle in einem Posteingang zusammen. Jede Nachricht wird ein Vorgang mit Nummer und Zuständigkeit. Zuweisbar, wiederauffindbar, abschließbar. Der Verlauf bleibt beim Kunden, nicht auf dem Handy eines Mitarbeiters, der gerade im Urlaub ist.','i-kontakt'],['Das System schlägt vor, ein Mensch entscheidet','Für wiederkehrende Anliegen formuliert samoChat Antwortvorschläge aus Ihren eigenen Informationen: Öffnungszeiten, Preise, Terminlagen, Auftragsstatus. Der Mitarbeiter prüft, passt an, schickt ab, oder lässt Routinefälle nach Freigabe automatisch beantworten. So sinkt die Antwortzeit, ohne dass ein Roboter Ihre Kundenbeziehung führt. Wer den Erstkontakt ganz automatisieren will, stellt samoBot davor. Den KI-Assistenten, der Routinefragen sofort beantwortet und alles Weitere mit vollem Verlauf an samoChat übergibt.','i-schulung'],['Wer zuständig ist, steht am Vorgang','Die meisten verlorenen Anfragen gehen nicht verloren, weil niemand sie gelesen hätte, sondern weil jeder annahm, ein anderer kümmere sich. In samoChat trägt jeder Vorgang eine Zuständigkeit: zuweisen, übernehmen, übergeben. Sichtbar für alle. Doppelantworten hören auf, Urlaubsvertretung wird zur Übergabe statt zur Rekonstruktion, und am Monatsende lässt sich belegen, wie schnell Ihr Team tatsächlich antwortet.','i-runde'],['Die Anfrage endet dort, wo der Auftrag beginnt','Ein Posteingang, der nur Nachrichten sammelt, verschiebt das Problem. samoChat ist deshalb an den Vorgang angebunden: Aus der Anfrage wird ein Auftrag, ein Termin oder ein Ticket im Fachsystem, mit dem Verlauf daran, nicht daneben. Wer später wissen will, warum etwas so vereinbart wurde, findet die Antwort am selben Ort wie die Rechnung.','i-doku'],['Die Nummer gehört dem Betrieb, nicht dem Gerät','So wächst es in vielen Betrieben: Kunden schreiben dem Mitarbeiter, den sie kennen, auf dessen privates Telefon. Das geht gut, bis der in den Urlaub fährt, krank wird oder kündigt. samoChat zieht den Kundenkontakt auf eine geschäftliche Nummer über die offizielle Schnittstelle: Der Verlauf gehört zum Kunden und zum Betrieb, geantwortet wird vom Arbeitsplatz aus, und beim Abschied nimmt niemand ein Adressbuch mit.','i-chat'],['Aus Ihren Angaben, nicht aus dem Internet','Antwortvorschläge taugen nur, wenn sie stimmen. samoChat formuliert aus dem, was Sie hinterlegt haben, Öffnungszeiten, Preise, Abläufe, Terminlagen, nicht aus dem, was irgendwo im Netz steht. Ändert sich etwas, ändern Sie es an einer Stelle, und jede künftige Antwort stimmt wieder.','i-laptops'],['Am Monatsende wissen Sie, worüber Kunden schreiben','Wenn jede Anfrage ein Vorgang ist, wird aus dem Posteingang eine Auswertung: was am häufigsten gefragt wird, wo Reklamationen entstehen, wie schnell geantwortet wird. Das sind die Stellen, an denen sich Abläufe, Preislisten oder Öffnungszeiten wirklich verbessern lassen. Belegt statt vermutet.','i-buero']], fragen:[['Brauchen wir eine eigene WhatsApp-Nummer?','Ja, eine geschäftliche Nummer über die offizielle Schnittstelle. Wir richten sie mit Ihnen ein. Ihre private Nummer bleibt privat.'],['Was passiert nachts und am Wochenende?','Anfragen laufen auf und werden zu Vorgängen; auf Wunsch bestätigt das System den Eingang und nennt die Geschäftszeiten. Am Morgen ist nichts verloren.'],['Können mehrere Mitarbeiter gleichzeitig antworten?','Ja. Vorgänge lassen sich zuweisen, übernehmen und übergeben. Wer antwortet, ist am Vorgang sichtbar. Doppelantworten gehören damit der Vergangenheit an.'],['Was passiert mit dem Verlauf, wenn ein Mitarbeiter geht?','Nichts. Der Verlauf hängt am Kunden und am Vorgang, nicht am Gerät oder am Konto eines Einzelnen. Wer übernimmt, liest sich in Minuten ein. Das ist der eigentliche Grund, warum Kundenkontakt nicht über private Telefone laufen sollte.'],['Können wir unsere E-Mail-Adressen behalten?','Ja. Bestehende Adressen laufen in den Posteingang ein, geantwortet wird unter Ihrer Adresse. Für Ihre Kunden ändert sich nichts. Außer der Verlässlichkeit.'],['Woher nimmt samoChat die Antwortvorschläge?','Aus dem, was Sie hinterlegen: Öffnungszeiten, Preise, Abläufe. Bei der Einrichtung übernehmen wir vieles aus Website und Unterlagen; nachgeschärft wird im laufenden Betrieb.'],['Was unterscheidet das von WhatsApp Business auf dem Handy?','Die App verwaltet Chats, samoChat führt Vorgänge: mit Nummer, Zuständigkeit, Anbindung an den Auftrag und Auswertung. Der Unterschied zeigt sich ab dem zweiten Mitarbeiter. Spätestens im Urlaub.']]},

    bot: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Bot','--c-bot'], bild:'i-bot',
      titel:'Der erste Kontakt, der nie schließt',
      intro:'Ein KI-Assistent, der auf Ihrer Website und über WhatsApp rund um die Uhr antwortet, auf Basis Ihrer eigenen Informationen, im Ton Ihres Unternehmens.',
      h2:'Erreichbar, wenn Ihre Kunden fragen, nicht erst am nächsten Werktag',
      text:'Ein Großteil aller Anfragen wiederholt sich: Öffnungszeiten, Verfügbarkeit, Preise, Bearbeitungsdauer. samoBot beantwortet diese sofort, auf Basis Ihrer eigenen Angaben und im Ton Ihres Unternehmens. Was außerhalb seines gesicherten Wissens liegt, übergibt er an einen Mitarbeiter, statt zu raten.',
      punkte:[['Rund um die Uhr erreichbar','Auch um 23 Uhr bekommt der Kunde eine Antwort, nicht erst am Montag.', IC.uhr],
              ['Aus Ihren eigenen Informationen','Trainiert auf Ihre Preise, Leistungen und Texte, keine erfundenen Auskünfte.', IC.speicher],
              ['Qualifiziert, statt nur zu plaudern','Fragt nach, was Sie wissen müssen, und macht aus dem Gespräch einen Termin oder eine Anfrage.', IC.suche],
              ['Übergibt an den Menschen','Bei komplexeren Anliegen übergibt er den Vorgang samt Verlauf an samoChat.', IC.personen],
              ['Im Ton Ihres Hauses','Ob herzlich oder sachlich: Der Assistent schreibt so, wie Ihr Betrieb spricht.', IC.sprechblase],
              ['Jede Unterhaltung nachlesbar','Sie sehen, was gefragt und geantwortet wurde, und schärfen nach.', IC.beleg],
              ['Grenzen, die Sie setzen','Was der Bot selbst beantworten darf, legen Sie fest.', IC.schild],
              ['Live auf dieser Seite','Der Assistent unten rechts ist samoBot selbst. Probieren Sie ihn aus.', IC.monitor]],
      alltag:[['Weniger Standardfragen im Team','Ein großer Teil der Anfragen ist beantwortet, bevor jemand sie liest.'],
              ['Kein Interessent wartet','Die Sofortantwort hält den Kunden im Gespräch, statt ihn weiterziehen zu lassen.'],
              ['Ein Assistent, viele Kanäle','Website-Fenster und WhatsApp aus einer gemeinsamen Wissensbasis.'],
              ['Der Feierabend hält','Um 23 Uhr antwortet der Assistent, nicht jemand mit schlechtem Gewissen.'],
              ['Anfragen kommen vollständig an','Der Bot fragt nach, was fehlt. Die Rückfragerunde am Morgen entfällt.'],
              ['Einmal gepflegt, überall richtig','Eine Änderung in der Wissensbasis. Website und WhatsApp antworten beide richtig.']]  /* tiefe:bot */,
      bloecke:[['Ein Assistent, den Sie mit Ihrem Wissen füttern','samoBot lernt aus dem, was Sie ohnehin haben: Website, Preisliste, Leistungsbeschreibung, häufige Fragen. Er antwortet in Ihrem Namen und in Ihrem Ton, und sagt „das kläre ich für Sie", wo er unsicher ist, statt etwas zu erfinden. Sie sehen jede Unterhaltung und schärfen nach, wo es nötig ist.','i-schulung'],['Von der Antwort zum Auftrag','Reine Konversation schafft keinen Mehrwert. samoBot fragt gezielt nach, bündelt die relevanten Angaben und überführt sie in einen Termin, eine Bestellung oder eine qualifizierte Anfrage, bei Bedarf nahtlos an samoChat übergeben. So entsteht aus dem ersten Kontakt ein strukturierter Vorgang statt eines verlorenen Chats.','i-laptops'],['Nachts entsteht der Vorgang, nicht nur die Nachricht','Der Unterschied zwischen einem Anrufbeantworter und samoBot zeigt sich am Morgen: Da liegt kein „Bitte zurückrufen", sondern ein qualifizierter Vorgang, mit Namen, Anliegen, Wunschtermin und allem, was der Bot nachgefragt hat. Ihr Team beginnt den Tag mit Entscheidungen statt mit Rückfragen.','i-kontakt'],['Ehrlich bleiben ist eingebaut','Ein Assistent, der rät, kostet mehr Vertrauen, als er Zeit spart. samoBot antwortet deshalb nur aus dem hinterlegten Wissen Ihres Betriebs. Wo es endet, sagt er das, und übergibt an einen Menschen, mit vollem Verlauf, ohne dass der Kunde von vorn beginnt. Das klingt selbstverständlich; es ist die wichtigste Entscheidung im Umgang mit KI im Kundenkontakt.','i-doku'],['Sie sehen, was er sagt, und machen ihn besser','Jede Unterhaltung liegt nachlesbar vor. Wo der Bot passen musste, ergänzen Sie die Wissensbasis; wo er zu weit ging, ziehen Sie die Grenze enger. So wird der Assistent Woche für Woche messbar besser, mit Ihrem Wissen, nicht mit fremden Daten.','i-buero']],
      fragen:[['Erfindet der Bot Antworten?','Nein. samoBot antwortet aus Ihren hinterlegten Informationen; bei Unsicherheit gibt er ehrlich an einen Menschen weiter, statt zu raten. Sie legen fest, was er selbst beantworten darf.'],['Wo läuft samoBot?','Als Chat-Fenster auf Ihrer Website und über WhatsApp. Beide aus derselben Wissensbasis. Der Assistent auf dieser Seite ist samoBot selbst, live.'],['Was hat samoBot mit samoChat zu tun?','samoBot ist der automatische Erstkontakt, samoChat der Posteingang für Ihr Team. Der Bot beantwortet das Einfache sofort und reicht alles andere mit vollem Verlauf an samoChat weiter. Sie können mit einem starten und das andere jederzeit ergänzen.'],['Wie lange dauert die Einrichtung?','Kurz: Website, Preisliste und die Antworten auf Ihre zehn häufigsten Fragen ergeben die erste Wissensbasis. Nachgeschärft wird im laufenden Betrieb. Anhand echter Unterhaltungen, nicht am Reißbrett.'],['Antwortet der Bot auch auf Englisch oder Polnisch?','Ja, er antwortet in der Sprache, in der gefragt wird. Die Inhalte kommen weiterhin aus Ihrer Wissensbasis.'],['Was passiert mit den Gesprächen?','Sie bleiben bei Ihrem Betrieb: einsehbar für Sie, gespeichert in Deutschland, kein Training fremder Modelle mit Ihren Kundendaten.']]},

    plan: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Plan','--c-plan'], bild:'i-p-plan',
      titel:'Aufmaß und Projektplanung für die Gebäudetechnik',
      intro:'Für Betriebe der technischen Gebäudeausrüstung, von der Aufnahme vor Ort bis zur Planung.',
      h2:'Das Aufmaß steht, bevor der Wagen wieder anspringt',
      text:'Aufnahme vor Ort, direkt am Gerät erfasst statt später übertragen. Aus dem Aufmaß entsteht die Position, aus den Positionen der Plan, ohne dass jemand Zahlen von einem Zettel in eine Tabelle tippt.',
      punkte:[['Aufmaß vor Ort','Direkt erfasst, mit Foto und Maßen am Objekt.', IC.lineal],
              ['Positionen automatisch','Aus dem Aufmaß werden Positionen, nicht aus der Erinnerung.', IC.vorgang],
              ['Projektübersicht','Was ist beauftragt, was läuft, was fehlt noch.', IC.schichten],
              ['Übergabe an die Abrechnung','Was gemessen wurde, steht in der Rechnung.', IC.beleg],
              ['Foto am Maß','Jedes Aufmaß trägt Foto und Zeitpunkt. Belegt statt geschätzt.', IC.kamera],
              ['Funktioniert ohne Empfang','Im Keller wird lokal erfasst, abgeglichen wird später.', IC.verbindung],
              ['Bausteine statt Blankoseite','Leistungsverzeichnisse und Vorlagen einmal anlegen, immer wiederverwenden.', IC.schichten],
              ['Angebot am selben Tag','Aus dem Termin wird das Angebot, nicht aus der Woche danach.', IC.uhr]],
      alltag:[['Keine doppelte Erfassung','Einmal aufnehmen genügt.'],
              ['Weniger Nachträge','Weil Maße belegt sind statt geschätzt.'],
              ['Schnellere Angebote','Das Angebot folgt dem Termin am selben Tag.'],
              ['Nichts wird übertragen','Gemessen ist erfasst. Der Zettel als Zwischenschritt entfällt.'],
              ['Die Baustelle fragt seltener','Der Monteur sieht, was geplant ist und was er morgen mitnimmt.'],
              ['Mengen ohne Misstrauen','Hinter jeder Zahl stehen Foto und Zeitpunkt.']]  /* tiefe:plan */, bloecke:[['Vom Aufmaß zur Position ohne Zwischenschritt','Auf der Baustelle zählt, dass die Erfassung dort passiert, wo gemessen wird: Maß, Foto, Bemerkung. Direkt am Objekt, dem Raum und der Position zugeordnet. Im Büro liegt das Aufmaß dann nicht als Zettel, sondern als Datensatz, aus dem Positionen und Mengen entstehen. Der klassische Fehler, falsch abgelesen, falsch übertragen, hat schlicht keinen Platz mehr, an dem er passieren könnte.','i-team'],['Nachträge, über die niemand streitet','Der teuerste Streit im Projektgeschäft ist der über Mengen. samoPlan legt zu jedem Maß das Foto und den Zeitpunkt ab; was abgerechnet wird, ist belegt statt geschätzt. Ändert sich das Projekt, entsteht der Nachtrag aus dem dokumentierten Bestand. Nachvollziehbar für Sie, Ihren Auftraggeber und im Zweifel für Dritte.','i-papier'],['Das Angebot folgt dem Termin, nicht der Woche danach','Wer zuerst anbietet, gewinnt öfter. Weil Aufmaß und Positionen bereits vor Ort entstehen, steht das Angebot am selben Tag, nicht dann, wenn im Büro Zeit war, die Zettel zu sortieren. Für den Auftraggeber ist genau das der sichtbare Unterschied zwischen zwei Betrieben, die technisch dasselbe können.','i-buero'],['Ein Projekt, ein Stand für alle','Projektgeschäft scheitert selten an der Technik und oft an der Übersicht: Was ist beauftragt, was läuft, was fehlt, worauf wartet die Baustelle. samoPlan hält diesen Stand an einer Stelle, für die Bauleitung, das Büro und den Monteur, der wissen muss, was er morgen mitnimmt. Ein gemeinsamer Stand erspart die Rückfragen, die heute den halben Vormittag kosten.','i-team'],['Jedes Projekt kennt seinen Stand, auch nach Wochen Pause','Projekte der Gebäudetechnik ruhen oft: auf Genehmigungen, auf dem Gewerk davor, auf Material. Gefährlich ist nicht die Pause, sondern der Wiederanlauf, wenn niemand mehr sicher weiß, was besprochen war. In samoPlan ist der Stand konserviert. Aufmaße, Positionen, Änderungen. Weitergemacht wird, wo aufgehört wurde, nicht bei null.','i-doku'],['Baustelle und Büro sehen denselben Stand','Zwischen draußen und drinnen gehen Projekte kaputt: Das Büro plant mit dem Stand von letzter Woche, die Baustelle arbeitet nach dem von heute. samoPlan hält beide auf demselben Datensatz. Was vor Ort erfasst wird, liegt im Büro, bevor der Wagen zurück ist, und was das Büro ändert, sieht der Monteur am Morgen.','i-laptops'],['Genauigkeit ist hier kein Anspruch, sondern Werkzeug','Aufmaß ist Vertrauenssache. Gegenüber Auftraggeber, Bauleitung und im Zweifel gegenüber Dritten. Deshalb dokumentiert samoPlan nicht großzügig, sondern genau: Maß, Foto, Zeitpunkt, Urheber. Betriebe, die so arbeiten, gewinnen die Projekte, bei denen Nachweise zählen, und schlafen bei Nachträgen besser.','']], fragen:[['Funktioniert die Erfassung auch ohne Netz im Keller?','Ja. Vor Ort wird lokal erfasst und abgeglichen, sobald wieder Verbindung besteht. Kein Maß hängt am Empfang.'],['Können wir unsere Positionsvorlagen weiterverwenden?','Ja, bestehende Leistungsverzeichnisse und Vorlagen lassen sich übernehmen und als Bausteine wiederverwenden.'],['Für welche Betriebsgröße ist das gedacht?','Vom Zwei-Mann-Betrieb bis zum Projektteam. Klein gestartet wächst das System mit. Es ist dieselbe Grundlage wie bei unseren übrigen Produkten.'],['Wie kommen die Maße in die Abrechnung?','Aus dem Aufmaß entstehen Positionen und Mengen, die in Angebot und Rechnung übernommen werden. Niemand überträgt Zahlen von Hand, und was abgerechnet wird, ist mit Foto und Zeitpunkt belegt.'],['Wir planen in CAD. Ersetzt samoPlan das?','Nein. samoPlan ersetzt den Weg vom Objekt in die Kalkulation, nicht die Fachplanung. Maße und Positionen lassen sich exportieren und dort weiterverwenden, wo Sie planen.'],['Was braucht der Monteur vor Ort?','Ein Android-Tablet oder -Telefon. Gemessen wird wie bisher. Erfasst wird nur dort, wo gemessen wird, statt abends im Büro.']]},

    terminal: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Terminal','--c-term'], bild:'i-n3',
      titel:'Zeiterfassung per Karte am Tablet',
      intro:'Kommen, gehen, fertig, ohne Stempeluhr, ohne Zettel, ohne App auf dem privaten Handy.',
      h2:'Eine Karte, ein Tablet, keine Diskussion',
      text:'Das Tablet hängt am Eingang, die Karte steckt im Portemonnaie. Auflegen genügt. Wer kommt und geht, steht sekundengenau im System, auch für Mitarbeitende, die kein Firmenhandy haben und keines wollen.',
      punkte:[['NFC statt Zettel','Karte auflegen, fertig. Keine PIN, keine App.', IC.nfc],
              ['Kiosk-Modus','Das Tablet lässt sich nicht verlassen, kein Zugriff auf anderes.', IC.monitor],
              ['Auswertung je Person','Stunden, Pausen, Überstunden ohne Nachrechnen.', IC.diagramm],
              ['Mehrere Standorte','Ein Terminal je Eingang, eine Auswertung für alles.', IC.ort],
              ['Export für die Lohnabrechnung','Stunden je Person und Monat, bereit für Steuerbüro oder Lohnsoftware.', IC.beleg],
              ['Karten in Sekunden zugeordnet','Neue Mitarbeitende bekommen eine Karte vom Stapel. Auflegen, zuordnen, fertig.', IC.karte],
              ['Pausen laufen mit','Pausenregeln, wie Ihr Betrieb sie hat. Die Auswertung rechnet sie ein.', IC.uhr],
              ['Startet sich selbst','Nach Stromausfall oder Neustart steht das Terminal wieder in der Erfassung.', IC.verbindung]],
      alltag:[['Ende der Stundenzettel','Die Erfassung passiert im Vorbeigehen.'],
              ['Weniger Streit','Die Zeiten stehen fest, nachvollziehbar für beide Seiten.'],
              ['Kein privates Handy nötig','Das nimmt der Belegschaft eine berechtigte Sorge.'],
              ['Die Lohnabrechnung wird kürzer','Die Stunden liegen exportbereit vor, statt zusammengesucht zu werden.'],
              ['Neue starten sofort','Karte vom Stapel, einmal zugeordnet. Erfasst ab der ersten Schicht.'],
              ['Vertrauen statt Verdacht','Erfasst wird Zeit, nicht Verhalten: keine App, kein privates Gerät, keine Ortung.']]  /* tiefe:terminal */, bloecke:[['Ein Terminal, das nur seine Aufgabe kennt','Das Tablet am Eingang läuft im gesperrten Modus: Es startet in die Zeiterfassung und lässt sich nicht verlassen, kein Browser, keine Spiele, keine versehentlich verstellten Einstellungen. Karte auflegen, kommen oder gehen, fertig. Auch nach einem Stromausfall startet das Gerät wieder in genau diesen Zustand.','i-n3'],['Auswertung, der beide Seiten trauen','Zeiten, die sekundengenau und automatisch entstehen, ersparen die unangenehmste Diskussion im Betrieb. Mitarbeitende sehen ihre eigenen Stunden, die Leitung sieht Summen, Pausen und Überstunden. Exportierbar für die Lohnabrechnung. Und weil keine App auf privaten Telefonen nötig ist, gibt es auch keine Debatte über Dienstliches auf dem eigenen Gerät.','i-runde'],['Mehrere Eingänge, eine Auswertung','Sobald ein Betrieb mehr als eine Tür hat, beginnt die Zettelwirtschaft von vorn. samoTerminal löst das über Geräte statt über Ausnahmen: Jeder Eingang bekommt sein Tablet, jedes Tablet gehört zu einem Standort, und die Auswertung führt alles zusammen. Gesteuert wird je Standort, ausgewertet je Person, exportiert in einem Durchgang für die Lohnabrechnung.','i-buero'],['Nachträge, die sichtbar bleiben','Karten werden vergessen, Schichten verschieben sich, jemand ist beim Kunden statt im Haus. Deshalb kann die Leitung Zeiten nachtragen. Jeder Nachtrag bleibt aber als solcher gekennzeichnet, mit Zeitpunkt und Urheber. Genau das ist der Unterschied zwischen einer Erfassung, der beide Seiten trauen, und einer Liste, über die diskutiert wird.','i-doku'],['Von der Karte bis zur Lohnabrechnung ein Weg','Am Monatsende zählt nicht die Erfassung, sondern was aus ihr wird: Stunden, Pausen und Überstunden je Person, als Export für das Steuerbüro oder die Lohnsoftware. Was heute aus Stundenzetteln zusammengesucht wird, liegt vor, bevor jemand danach fragt. Die Lohnabrechnung wird von der Monatsaufgabe zur Formalität.','i-beleg'],['Eingeführt an einem Vormittag','Ein Tablet an die Wand, Karten an das Team, einmal gemeinsam durchgespielt. Mehr ist es nicht. Keine Software auf den Arbeitsplätzen, keine App-Einweisung, keine Passwortliste. Mittags stempelt die erste Schicht, und die Frage, wie das mit den Pausen gerechnet wird, beantwortet die Auswertung statt des Aushangs.','i-team'],['Karten kommen und gehen, das System bleibt','Mitarbeitende wechseln, Karten gehen verloren, zur Saison kommen Aushilfen. samoTerminal ist darauf gebaut: Eine verlorene Karte wird gesperrt und ersetzt, ohne dass Zeiten verloren gehen; eine neue wird vom Stapel zugeordnet, ohne dass jemand die IT anruft. Verwaltung, die eigene Arbeit erzeugt, wandert zurück auf den Zettel. Deshalb erzeugt diese keine.','i-papier']], fragen:[['Was kostet ein zusätzlicher Standort?','Ein weiteres Tablet und Karten für das Team. Die Auswertung läuft für alle Standorte zusammen, gesteuert wird je Standort.'],['Was ist, wenn jemand seine Karte vergisst?','Die Leitung kann Zeiten nachtragen; der Nachtrag ist als solcher gekennzeichnet. So bleibt die Auswertung ehrlich.'],['Erfüllt das die Pflicht zur Arbeitszeiterfassung?','Die Erfassung ist systematisch, manipulationsgeschützt und je Person auswertbar. Genau das verlangt die Rechtsprechung. Die konkrete Ausgestaltung stimmen Sie mit Ihrer Lohnstelle ab.'],['Was passiert bei einem Stromausfall?','Das Gerät startet von selbst wieder in die Zeiterfassung und bleibt gesperrt. Niemand muss etwas einstellen, und niemand kommt an das Tablet dahinter.'],['Sehen Mitarbeitende ihre eigenen Zeiten?','Ja, jeder sieht die eigenen Stunden. Diese Nachvollziehbarkeit ist die Grundlage dafür, dass beide Seiten der Erfassung trauen.'],['Funktioniert das bei Schichten über Mitternacht?','Ja. Kommen und Gehen gehören zum selben Arbeitstag, auch wenn ein Datumswechsel dazwischenliegt.'],['Wie schnell ist eine Aushilfe angelegt?','In der Zeit, die das Auflegen der Karte dauert: Person anlegen, Karte zuordnen, fertig. Saisonkräfte sind kein Verwaltungsprojekt.']]},

    kiosk: { ober:'Produkte', oberZiel:'produkte', marke:['samo','Kiosk','--c-kiosk'], bild:'i-n1',
      titel:'Ihre Bildschirme zeigen, was heute gilt',
      intro:'Digitale Werbeflächen für den eigenen Betrieb: Werbung, Angebote und Speisekarten zentral im Browser pflegen. Die Displays im Verkaufsraum spielen den Ablauf von selbst.',
      h2:'Der Bildschirm ändert sich, ohne dass jemand hingeht',
      text:'Was laufen soll, wird im Portal hochgeladen und an die richtige Stelle der Wiedergabeliste geschoben, als Bild oder als PDF. Kurz darauf zeigt jedes gekoppelte Display den neuen Ablauf, ohne USB-Stick, ohne Leiter, ohne Termin mit einer Agentur. Wer einen Preis ändert, ändert ihn genau einmal.',
      punkte:[['Wiedergabeliste im Browser','Bild oder PDF hochladen, Reihenfolge und Standzeit festlegen, einzelne Inhalte still schalten. Mehr Bedienung braucht es nicht.', IC.bild],
              ['Display koppeln per Code','Das neue Gerät zeigt einen sechsstelligen Code, der im Portal eingetragen wird. Danach spielt es Ihren Ablauf. Die Einrichtung dauert eine Minute.', IC.koppeln],
              ['Geräte im Blick','Welches Display läuft und wann es sich zuletzt gemeldet hat, steht im Portal. Ein dunkler Bildschirm fällt damit auf, bevor ein Kunde davorsteht.', IC.monitor],
              ['Tablets im Kiosk-Modus','Die Geräte kommen eingerichtet und gesperrt: Sie starten in den Ablauf und lassen sich nicht verlassen, auch nach einem Stromausfall.', IC.schloss],
              ['Standzeit je Inhalt','Das Wochenangebot länger, der kurze Hinweis kürzer. Jede Seite hat ihre Zeit.', IC.uhr],
              ['Still schalten statt löschen','Die Aktion ist vorbei? Ein Schalter. Der Inhalt bleibt für das nächste Mal.', IC.schichten],
              ['Läuft ohne Netz weiter','Der Ablauf spielt aus dem Zwischenspeicher, bis die Verbindung zurück ist.', IC.verbindung],
              ['Alle Displays, ein Ablauf','Theke, Eingang, Schaufenster. Überall derselbe Stand, gepflegt an einer Stelle.', IC.ort]],
      alltag:[['Die Aktion hängt, sobald sie beschlossen ist','Zwischen Entscheidung und Bildschirm liegen Minuten, kein Werktag.'],
              ['Kein Stick wandert mehr durch den Betrieb','Niemand sucht die richtige Datei, niemand steckt sie am Gerät ein.'],
              ['Ein dunkles Display bleibt nicht unbemerkt','Weil im Portal steht, welches Gerät sich zuletzt gemeldet hat.'],
              ['Preise stimmen überall','Geändert wird einmal im Portal, nicht an jedem Gerät.'],
              ['Aktionen liegen bereit','Vorbereitet im Portal, still geschaltet bis zum Start. Ein Schalter genügt.'],
              ['Der Feierabend bleibt ungestört','Kein „Fahr nochmal hin, der Bildschirm hängt". Der Status steht im Portal.']],
      bloecke:[
        ['Einmal gepflegt, auf allen Bildschirmen zu sehen','Der Aufwand an einer Werbefläche steckt selten im Gestalten, sondern im Verteilen: Datei auf den Stick, Stick zum Gerät, Gerät neu starten, und das je Bildschirm einmal. samoKiosk dreht das um. Bilder und PDF-Seiten liegen im Portal, dort entstehen Reihenfolge und Standzeit, dort wird ein Inhalt still gestellt, wenn die Aktion vorbei ist. Alle Displays des Betriebs spielen denselben Ablauf und übernehmen Änderungen im laufenden Betrieb, ohne dass jemand vor Ort sein muss.','i-laptops'],
        ['Ein Display, das sich selbst meldet','Ein neues Gerät wird aufgestellt, eingeschaltet und zeigt einen sechsstelligen Code. Dieser Code wird einmal im Portal eingetragen. Danach gehört das Display zu Ihrem Betrieb und spielt Ihren Ablauf. Ab da meldet es sich regelmäßig von selbst: Sie sehen, welches Gerät online ist und wann es sich zuletzt gemeldet hat, und lassen es bei Bedarf aus dem Portal neu laden. Fällt die Verbindung aus, läuft der Ablauf aus dem Zwischenspeicher weiter und gleicht ab, sobald das Netz zurück ist. Der Gast merkt davon nichts.','i-gastro'],
        ['Geräte, die aus einer Hand kommen','Ein Bildschirm, der unbeaufsichtigt im Verkaufsraum hängt, muss zwei Dinge können: laufen und nichts anderes zulassen. Deshalb liefern wir die Tablets vorbereitet aus, im gesperrten Kiosk-Modus: nur der Ablauf, kein Browser, keine andere Anwendung, keine erreichbaren Einstellungen. Verwaltet werden sie über dieselbe Geräteverwaltung, mit der wir auch die Kassen- und Zeiterfassungsgeräte unserer Kunden betreuen. Ein Ansprechpartner für Software, Gerät und Betrieb. In Entwicklung ist die nächste Ausbaustufe, in der derselbe Bildschirm zum Bestellterminal wird und die Bestellung in samoOrder weiterläuft; verfügbar ist sie noch nicht.','i-n3'],
        ['Die Werbefläche rechnet sich nach innen','Ein Bildschirm im Verkaufsraum verkauft nicht nur. Er erspart Wege. Die Speisekarte über der Theke, die Preisliste am Empfang, der Hinweis auf die Aktionswoche: alles Stellen, an denen heute laminierte Zettel hängen, die jemand drucken, tauschen und entsorgen muss. samoKiosk macht daraus eine Pflegeaufgabe von Minuten, und der Betrieb sieht überall gleich aktuell aus, auch wenn es hektisch wird.','i-tisch'],
        ['Klein anfangen, an der Theke','Der Einstieg ist bewusst unspektakulär: ein Tablet an der Theke, gekoppelt in einer Minute, dahinter das Portal. Wer mehr Flächen will, koppelt mehr Geräte. Die Pflege bleibt dieselbe. Und weil die Geräte aus derselben Betreuung kommen wie unsere Kassen- und Zeiterfassungssysteme, gibt es für alles einen Ansprechpartner statt dreier Zuständigkeiten.','i-n1']
      ],
      fragen:[
        ['Brauchen wir dafür neue Fernseher?','Nein. samoKiosk spielt auf Tablets, die wir eingerichtet und gesperrt ausliefern, für Theke, Eingang oder Schaufenster. Größere Flächen sind möglich; welches Gerät dafür taugt, klären wir vorher gemeinsam, statt es pauschal zuzusagen.'],
        ['Was passiert, wenn das Netz ausfällt?','Das Display spielt aus seinem Zwischenspeicher weiter und holt sich die Wiedergabeliste, sobald die Verbindung zurück ist. Ein kurzer Ausfall bleibt dem Gast damit verborgen.'],
        ['Kann am Gerät jemand etwas verstellen?','Nein. Das Tablet startet in den Ablauf und lässt sich nicht verlassen: kein Browser, keine andere Anwendung, keine erreichbaren Einstellungen. Auch nach einem Stromausfall kommt es genau in diesen Zustand zurück.'],
        ['Wer gestaltet die Inhalte?','Sie, mit dem, was Sie ohnehin haben: Bilder und PDF-Seiten, etwa aus Canva, PowerPoint oder von Ihrer Druckerei. samoKiosk verteilt die Inhalte; gestalten müssen Sie nicht im System.'],
        ['Wie schnell ist eine Änderung auf dem Bildschirm?','Hochgeladen im Portal, übernehmen die gekoppelten Displays den neuen Ablauf im laufenden Betrieb. Zwischen Entscheidung und Bildschirm liegen Minuten, kein Werktag.'],
        ['Können wir mit einem einzigen Display starten?','Ja, genau so ist es gedacht: ein Gerät an der Theke, gekoppelt in einer Minute. Weitere Flächen kommen dazu, wenn sie sich lohnen. Die Pflege im Portal bleibt dieselbe.']
      ],
      verwandt:['order','chat']},

    schulung: { ober:'Service', oberZiel:'support', bild:'i-schulung',
      titel:'Einweisung und Schulung',
      intro:'Wir kommen zu Ihnen: ein Tag im Betrieb, das ganze Team, geübt an echten Vorgängen statt an Beispieldaten.',
      h2:'Ein System wird nicht gelesen, es wird benutzt',
      text:'Die beste Anwendung nützt wenig, wenn sie nach der Einführung nur von zwei Leuten bedient wird. Deshalb gehört die Einweisung bei der samoLabs zur Einführung dazu. Vor Ort, mit allen, die später damit arbeiten, an den Abläufen Ihres Betriebs.',
      punkte:[['Vor Ort statt per Video','Im Video sieht man das System, vor Ort sieht man den Betrieb. Wir fahren dorthin, wo gearbeitet wird.', IC.personen],
              ['Das ganze Team, nicht nur die Leitung','Vormittags die Grundlagen für alle, nachmittags getrennt nach Aufgabe: Annahme, Werkstatt, Abrechnung.', IC.kalender],
              ['An echten Vorgängen geübt','Gearbeitet wird mit Ihren Daten und Ihren Fällen. Am Ende hat jeder einen vollständigen Vorgang selbst durchgeführt.', IC.annahme],
              ['Begleitung nach dem Start','In der ersten Woche läuft das gewohnte Verfahren parallel weiter, Rückfragen klären wir laufend. Direkt, ohne Warteschleife.', IC.verbindung]],
      alltag:[['Das Team arbeitet nach Tagen, nicht nach Monaten','Wer einen Vorgang einmal selbst durchgeführt hat, sucht danach keine Anleitung mehr.'],
              ['Niemand wird abgehängt','Auch Kolleginnen und Kollegen, die noch nie ein Tablet bedient haben, kommen mit. Genau dafür ist der Tag da.'],
              ['Weniger Störungen später','Was am Schulungstag geklärt ist, taucht im Betrieb nicht mehr als Problem auf.']],
      bloecke:[['Warum wir hinfahren, obwohl es teurer ist','Eine Aufzeichnung ist billiger und wirkt gründlicher. Trotzdem fahren wir hin. Im Video sieht man das System, vor Ort sieht man den Betrieb: dass die Annahme am Stehtisch passiert, dass der Drucker zwei Räume weiter steht, dass eine Mitarbeiterin noch nie ein Tablet benutzt hat. Diese Dinge entscheiden darüber, ob ein System angenommen wird, und sie stehen in keiner Anleitung. Die Erfahrung zeigt: Ein geschultes Team arbeitet nach einer Woche selbstständig, ein per Video eingewiesenes stellt nach Monaten noch dieselben Fragen.','i-schulung'],
               ['Der Umstieg wird geplant, nicht ausprobiert','Vor dem Schulungstag steht die Vorbereitung: Kundenstamm und offene Vorgänge werden übernommen, Stammdaten, Drucker und Zugänge eingerichtet, Rollen vergeben. Am Tag selbst geht es deshalb nicht um Installation, sondern um Arbeit. Danach bleibt das gewohnte Verfahren eine Woche lesbar und nutzbar, damit niemand unter Druck umsteigen muss. Den Termin legen wir bewusst nicht in Ihre Hochsaison.','i-team']],
      fragen:[['Wie lange dauert die Schulung?','In der Regel ein Tag im Betrieb: vormittags die Grundlagen für alle, nachmittags getrennt nach Aufgabenbereich. Wer danach noch unsicher ist, bekommt eine kurze Nachschulung. Das klären wir im laufenden Betrieb, nicht über ein Ticketformular.'],
              ['Müssen wir dafür schließen?','Nein. Wir legen die Schulung in die ruhigen Stunden Ihres Tages und arbeiten mit dem Team in Gruppen, damit der Betrieb weiterlaufen kann.'],
              ['Geht das auch aus der Ferne?','Für Auffrischungen, neue Kolleginnen und Kollegen oder zusätzliche Module: ja. Die Ersteinweisung machen wir bewusst vor Ort, weil sich dort zeigt, wie Ihr Betrieb wirklich arbeitet.'],
              ['Wer schult uns. Ein Trainer oder ein Entwickler?','Die Person, die das System kennt. Bei der samoLabs sind Entwicklung, Einweisung und Support nicht auf drei Abteilungen verteilt; wer Ihnen etwas erklärt, kann es auch ändern.']]},

    werkstatt: { /* hub:werkstatt */ praxis:true, ph2:'Lösungen für Ihre Werkstatt', spalten:[['Nehmen Sie Aufträge an, statt Zettel zu stapeln','Annahme am Tresen mit Foto, Etikett und Termin in einem Durchgang, während der Kunde noch dasteht. Was sauber erfasst ist, muss später niemand entziffern.'],['Kassieren Sie prüfungsfest','Die zertifizierte Kassensicherung signiert jede Buchung, der Tagesabschluss entsteht von selbst. Bar, Karte oder Zahlungslink. Alles im selben Abschluss.'],['Behalten Sie Lager und Zahlen im Blick','Teile buchen sich beim Verbau ab, die Nachbestellliste füllt sich von selbst. Mehr als 1.500 Aufträge liefen so bereits durch unsere Systeme.']], portfolio:['rad','terminal','chat'], ober:'Lösungen', oberZiel:'loesungen', produkt:'rad', bild:'i-p-rad',
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
              ['Der Arbeitstag endet früher','Der Kassenabschluss entsteht nebenbei.']],
      bloecke:[['Drei Programme sind zwei zu viel','Der typische Werkstatt-Arbeitsplatz heute: eine Kasse, die nichts vom Auftrag weiß, eine Tabelle für das Lager, ein Kalender an der Wand, und dazwischen Mitarbeiter, die Informationen von A nach B tragen. Jede Übertragung kostet Zeit und erzeugt Fehler. Deshalb bauen wir keine Insellösungen, sondern ein System, in dem Annahme, Werkstatt, Kasse und Lager denselben Vorgang teilen. Nicht weil „integriert" gut klingt, sondern weil das Abtippen aufhören muss.','i-annahme'],
               ['Vom Zettelkasten zum System, ohne Stillstand','Kein Betrieb kann für eine Software-Einführung schließen. Deshalb läuft der Umstieg neben dem Tagesgeschäft: Kundenstamm und offene Vorgänge werden vorher übernommen, geschult wird an einem Tag im Betrieb, und in der ersten Woche bleibt das gewohnte Verfahren parallel nutzbar. Den Termin legen wir in Ihre ruhige Zeit, nicht in den April.','i-schulung']],
      fragen:[['Wir sind eine kleine Werkstatt mit zwei Leuten. Lohnt sich das?','Gerade dann: Je kleiner das Team, desto teurer ist die Stunde, die abends an Zetteln und Kassenabschluss hängt. Das System wächst mit, vom Zwei-Mann-Betrieb bis zur Filialkette bleibt es dieselbe Grundlage.'],
              ['Was ist mit unseren alten Daten?','Kundenstamm und offene Vorgänge übernehmen wir bei der Einrichtung. Was Ihr bisheriges System exportieren kann, prüfen wir vorher gemeinsam.'],
              ['Welche Hardware brauchen wir wirklich?','Für den Start: ein Android-Tablet am Tresen und ein Etikettendrucker. Vorhandene Rechner bleiben nutzbar. Die Anwendung läuft im Browser.'],
              ['Funktioniert das auch für andere Reparaturbetriebe als Fahrrad?','Die Grundlage, Annahme, Vorgang, Kasse, Lager, ist branchenneutral. Am weitesten ausgebaut ist samoRad für den Fahrradfachhandel; ob Ihr Betrieb passt, klären wir in einem Gespräch ehrlich.']] },

    gastro: { /* hub:gastro */ ph2:'Lösungen für Ihre Gastronomie', spalten:[['Lassen Sie Gäste bestellen, wenn sie so weit sind','Code am Tisch scannen, Karte im Browser, keine App. Das Personal serviert, statt aufzunehmen, gerade am vollen Samstagabend.'],['Kassieren Sie an einem Ort','Die Theke führt alle Tische, bar und Karte laufen im selben Abschluss zusammen. Die Kassensicherung signiert jede Buchung automatisch.'],['Ändern Sie die Karte in Minuten','Preise, Tagesangebote, Ausverkauftes: sofort an jedem Tisch aktuell. Kein Neudruck, keine Zettel über der alten Karte.']], portfolio:['order','terminal','chat'], ober:'Lösungen', oberZiel:'loesungen', produkt:'order', bild:'i-gastro',
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
              ['Weniger Fehler','Was der Gast tippt, muss niemand verstehen.']],
      bloecke:[['Der Samstagabend ist der Härtetest','Ein Gastro-System beweist sich nicht am Dienstagnachmittag. Es beweist sich, wenn die Terrasse voll ist, zwei Aushilfen neu sind und die Küche am Limit läuft. Genau dafür ist die Kombination gebaut: Gäste bestellen selbst, die Theke behält jeden Tisch im Blick, die Kasse signiert nebenbei. Das Personal läuft zum Servieren. Der Engpass Bestellaufnahme ist weg.','i-gastro'],
               ['Personal ist knapp. Wege sind teuer','Die schwierigste Stelle in der Gastronomie ist heute nicht die Miete, sondern der Dienstplan. Wenn Gäste am Tisch bestellen, ersetzt das keine Servicekraft. Es macht die vorhandenen wirksamer: weniger Aufnahmewege, weniger Missverständnisse, mehr Zeit am Gast. Und die Zeiterfassung am Eingang macht aus dem Dienstplan-Gefühl belastbare Stunden.','i-tisch']],
      fragen:[['Passt das für ein Café mit zwölf Tischen?','Ja, gerade dort. Ein Tablet an der Theke, QR-Bögen auf die Tische, fertig. Das System ist auf kleine Betriebe ausgelegt, nicht von der Systemgastronomie heruntergeschnitten.'],
              ['Was sagen die Gäste dazu?','Kein App-Zwang, keine Registrierung, nur Kamera und Karte im Browser. Wer lieber beim Personal bestellt, bestellt beim Personal; beides landet im selben Vorgang.'],
              ['Sind wir damit kassenrechtlich sauber?','Ja. Jede Buchung signiert die zertifizierte TSE, die Abläufe sind GoBD-konform, die Exporte für die Prüfung liegen bereit. Bestellung und Kasse kommen aus einer Hand.'],
              ['Können wir mit der Bestellung starten und später erweitern?','Ja. Jedes Modul steht für sich, alles läuft auf derselben Grundlage. Viele starten mit samoOrder und nehmen samoTerminal oder samoKiosk dazu, wenn der Betrieb es hergibt.']] },

    logistik: { /* hub:logistik */ ph2:'Lösungen für Transport und Logistik', spalten:[['Füllen Sie die Rückfahrt','Fracht entlang der Strecke, die ohnehin gefahren wird, als Liste passender Aufträge statt einer Telefonkette. Die Tour rechnet sich über beide Richtungen.'],['Dokumentieren Sie jede Übergabe','Unterschrift des Empfängers, Foto der Ware, Zeitstempel mit Ort. Automatisch im Vorgang. Wenn Wochen später jemand reklamiert, liegt alles vor.'],['Bleiben Sie erreichbar, ohne am Telefon zu hängen','Anfragen aus WhatsApp und E-Mail werden Vorgänge mit Nummer und Zuständigkeit. Nichts versandet im Postfach eines Einzelnen.']], portfolio:['transport','chat','terminal'], ober:'Lösungen', oberZiel:'loesungen', produkt:'transport', bild:'i-trans',
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
              ['Sicherer Nachweis','Auch Wochen später noch nachvollziehbar.']],
      bloecke:[['Zwischen Ladung und Fahrer steht heute ein Telefon','Ladung zu vergeben? Drei Anrufe. Strecke halb leer? Noch mehr Anrufe. Diese Branche organisiert erhebliche Werte über Zuruf, nicht, weil es gut funktioniert, sondern weil es nie anders war. Wir ersetzen die Telefonkette durch ein System, das Angebot und Route zusammenbringt und jede Vereinbarung dokumentiert. Der Anruf bleibt fürs Menschliche.','i-trans'],
               ['Vertrauen entsteht aus Belegen, nicht aus Beteuerungen','Auf langen Strecken mit wechselnden Partnern zählt am Ende, was belegt ist: wer wann was übernommen hat, in welchem Zustand, mit wessen Unterschrift. Deshalb hängt an jeder Übergabe der Beleg mit Foto und Zeitstempel. Automatisch, nicht als Extraaufwand. So arbeiten auch neue Partner vom ersten Auftrag an auf einer Grundlage, über die man nicht streiten muss.','i-doku']],
      fragen:[['Wir fahren feste Strecken. Was bringt uns das System?','Die Rückfahrt: Fracht entlang der Strecke, die Sie ohnehin fahren, als Liste statt Telefonkette. Und die Dokumentation, die bei Reklamationen Wochen später den Unterschied macht.'],
              ['Was brauchen unsere Fahrer?','Ein Android-Telefon. Aufträge, Navigation und Empfangsbestätigung laufen darauf. Keine Geräte im Fahrzeug, kein Einbau.'],
              ['Funktioniert das über Grenzen hinweg?','Ja, dafür ist es gebaut: mehrsprachig, gestartet zwischen Deutschland und Südosteuropa. Auftraggeber und Fahrer sehen denselben Vorgang in ihrer Sprache.'],
              ['Bleiben unsere Konditionen vertraulich?','Ja. Sichtbar sind Angebote, nicht Ihre Kalkulation. Konditionen bleiben zwischen den Beteiligten des Auftrags.']] },

    aussendienst: { /* hub:aussendienst */ ph2:'Lösungen für Ihren Außendienst', spalten:[['Planen Sie nach echten Fahrzeiten','Die Tagesroute entsteht aus Straße und Fälligkeit, nicht aus Luftlinie. Ein Termin mehr am Tag, ohne länger unterwegs zu sein.'],['Berichten Sie, solange es frisch ist','Zwei diktierte Sätze nach dem Termin werden ein strukturierter Bericht beim Kunden. Nichts bleibt im Notizbuch oder im Kopf.'],['Bereiten Sie jeden Termin in zwei Minuten vor','Letzte Themen, offene Zusagen, wunde Punkte. Die ganze Historie liegt griffbereit. Vertretung wird vom Blindflug zum Weiterspielen.']], portfolio:['vertrieb','chat','plan'], ober:'Lösungen', oberZiel:'loesungen', produkt:'vertrieb', bild:'i-talk',
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
              ['Zusagen gehen nicht verloren','Sie stehen beim Kunden, nicht im Notizbuch.']],
      bloecke:[['Verkauft wird beim Kunden. Verwaltet wird zu oft am Schreibtisch','Jede Stunde, die ein Außendienst mit Berichten, Routenplanung und Zettelsuche verbringt, fehlt beim Kunden. Deshalb dreht sich hier alles um eine Zahl: Termine pro Tag. Echte Fahrzeiten statt Luftlinie, der Bericht als Diktat statt als Abendprogramm, die Vorbereitung als Zwei-Minuten-Zusammenfassung. Das Ergebnis ist kein schnellerer Vertrieb, sondern ein anwesenderer.','i-talk'],
               ['Wissen gehört dem Betrieb, nicht dem Kofferraum','Gebiete wechseln, Leute gehen, Vertretungen springen ein. Ob das reibungslos läuft oder ein halbes Jahr kostet, entscheidet sich daran, wo das Kundenwissen liegt: im Notizbuch des Vorgängers oder beim Kunden im System. Historie, Zusagen und Wiedervorlagen am Kunden machen jeden Wechsel zur Übergabe statt zum Neuanfang.','i-team']],
      fragen:[['Unsere Leute sind keine Computerfreunde. Nehmen die das an?','Die Bedienung folgt dem Tag: planen, hinfahren, diktieren. Wer sprechen kann, kann berichten, und was das System nicht sauber versteht, bleibt als Text erhalten und ist in Sekunden korrigiert.'],
              ['Werden die Mitarbeiter dabei überwacht?','Nein. Ausgewertet werden Besuche und Berichte, keine Bewegungsprofile. Das ist eine bewusste Entscheidung. Sie schützt das Vertrauen im Team und Sie rechtlich.'],
              ['Wie kommen unsere Kunden ins System?','Per Import aus Tabellen oder dem Export Ihres bisherigen Systems. Adressen, Ansprechpartner, Historie. Die Zuordnung prüfen wir gemeinsam bei der Einrichtung.'],
              ['Was bringt die Kombination mit samoChat?','Anfragen, die im Büro landen, hängen am selben Kunden wie die Besuche. Der Außendienst sieht vor dem Termin auch, was der Kunde zuletzt geschrieben hat, nicht nur, was er zuletzt gesagt hat.']] },

    auftrag: { /* hub:auftrag */ praxis:true, ph2:'Lösungen rund um den Auftrag', spalten:[['Erfassen Sie am Ort des Geschehens','Am Tresen, auf der Baustelle, im Fahrzeug. Der Auftrag entsteht dort, wo er passiert, mit Foto und Zuordnung. Übertragen muss ihn niemand mehr.'],['Verfolgen Sie jeden Stand','Vom Eingang über die Bearbeitung bis zur Abholung: Jeder im Team sieht denselben Stand, der Kunde wird automatisch benachrichtigt.'],['Rechnen Sie ab, was belegt ist','Positionen entstehen aus dem Vorgang, nicht aus dem Gedächtnis. Was auf der Rechnung steht, ist dokumentiert, bis zum Foto.']], portfolio:['rad','plan','vertrieb'], ober:'Lösungen', oberZiel:'loesungen', bild:'i-hero',
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
              ['Verlässliche Auskunft','Jeder im Team kann Auskunft geben.']],
      fragen:[['Unsere Aufträge entstehen an ganz verschiedenen Orten. Passt das?','Genau dafür ist die Erfassung gebaut: am Tresen, auf der Baustelle, im Fahrzeug, immer mit Foto und Zuordnung. Wo der Auftrag entsteht, ist dem System egal; dass er vollständig entsteht, nicht.'],
              ['Sehen alle im Team denselben Stand?','Ja, das ist der Kern: ein Vorgang, ein Stand, für Tresen, Werkstatt und Büro. Wer etwas ändert, ändert es für alle sichtbar.'],
              ['Wie erfährt der Kunde vom Stand seines Auftrags?','Automatisch: Statusmeldungen gehen per Nachricht oder E-Mail raus, auf Wunsch mit persönlichem Link zum Auftragsstand. Das Telefon klingelt spürbar seltener.']] },

    kasse: { /* hub:kasse */ praxis:true, ph2:'Lösungen rund um Kasse und Zahlung', spalten:[['Kassieren Sie auf jedem Weg','Bar, Karte am Gerät, Zahlungslink in der Rechnung. Die Abwicklung läuft über einen etablierten Zahlungsdienstleister, das Geld fließt direkt auf Ihr Konto. Ohne eigenen Bankenvertrag.'],['Bleiben Sie prüfungsfest','Die zertifizierte technische Sicherungseinrichtung signiert jede Buchung. Die Exporte für die Prüfung liegen bereit, bevor jemand danach fragt.'],['Schließen Sie ab, ohne zu rechnen','Der Tagesabschluss entsteht aus den Buchungen. Kasse und Kartenzahlung waren nie getrennt, also muss sie auch niemand abgleichen.']], portfolio:['rad','order','terminal'], ober:'Lösungen', oberZiel:'loesungen', bild:'i-n1',
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
              ['Ruhe bei der Prüfung','Die Belege sind lückenlos und signiert.']]  /* tiefe:kasse */, bloecke:[['Kartenzahlung ohne eigenen Bankvertrag','Kassieren Sie, wie Ihre Kunden zahlen wollen: Karte am Gerät, kontaktlos, Zahlungslink in der Rechnung. Die Abwicklung läuft über einen der größten Zahlungsabwickler weltweit. Das Geld fließt direkt auf Ihr Konto, ohne dass Sie einen eigenen Vertrag mit einer Bank verhandeln müssen. Wir richten alles ein, der Betrag kommt aus dem Vorgang, und der Tagesabschluss stimmt, weil Kasse und Kartenzahlung nie getrennt waren.','i-n1']],
      fragen:[['Brauchen wir einen eigenen Vertrag mit einer Bank?','Nein. Die Kartenzahlung läuft über einen etablierten Zahlungsabwickler, das Geld fließt direkt auf Ihr Konto. Wir richten alles ein.'],
              ['Ist die TSE wirklich inklusive?','Ja, die zertifizierte technische Sicherungseinrichtung gehört dazu, ohne monatlichen Aufpreis. Jede Buchung wird signiert, die Exporte für die Kassenprüfung liegen bereit.'],
              ['Was passiert bei einer Kassennachschau?','Sie exportieren, was der Prüfer verlangt. Die Daten liegen im geforderten Format bereit. Genau für diesen Moment ist alles GoBD-konform aufgebaut.']]},

    kunde: { /* hub:kunde */ ph2:'Lösungen rund um Ihre Kunden', spalten:[['Antworten Sie schneller, als man erwartet','Anfragen aus allen Kanälen landen in einem Posteingang, Antwortvorschläge entstehen aus Ihren eigenen Informationen. Ein Mensch entscheidet, das System beschleunigt.'],['Kennen Sie jeden Verlauf','Der Gesprächsverlauf bleibt beim Kunden, nicht auf dem Handy eines Mitarbeiters. Wer übernimmt, liest sich in Minuten ein.'],['Melden Sie sich von selbst','Ihr Auftrag ist fertig, Ihr Termin steht, Ihre Ware ist da. Statusmeldungen gehen automatisch raus, per Nachricht oder E-Mail.']], portfolio:['chat','vertrieb','order'], ober:'Lösungen', oberZiel:'loesungen', bild:'i-kontakt',
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
              ['Vertretung ohne Einarbeitung','Der Stand ist sichtbar, nicht im Kopf eines Einzelnen.']],
      fragen:[['Über welche Kanäle erreichen uns Kunden dann?','WhatsApp, E-Mail und Website-Formular laufen in einem Posteingang zusammen, als Vorgänge mit Nummer und Zuständigkeit statt verstreuter Nachrichten.'],
              ['Bleibt der Kontakt persönlich, wenn ein System dazwischen ist?','Er wird persönlicher: Wer antwortet, sieht den ganzen Verlauf und die offenen Vorgänge des Kunden. Das System sortiert und schlägt vor. Entscheiden und formulieren bleibt Sache Ihres Teams.'],
              ['Was bringt das Kundenportal?','Der Kunde sieht über einen persönlichen Link den Stand seines Auftrags, bekommt Änderungen automatisch mit und bucht freie Termine selbst, ohne Passwort, ohne App. Weniger Anrufe, besser informierte Kunden.']] },

    auswertung: { /* hub:auswertung */ praxis:true, ph2:'Lösungen rund um Zahlen und Berichte', spalten:[['Sehen Sie den Tag auf einen Blick','Umsatz, offene Aufträge, Auslastung, nicht als Excel-Bastelei am Abend, sondern live aus dem laufenden Betrieb.'],['Vergleichen Sie, was zählt','Zeiträume, Standorte, Leistungen: Die Auswertung zeigt, womit Sie Geld verdienen und wo es versickert.'],['Exportieren Sie ohne Nacharbeit','Lohnliste, Kassendaten, Umsatzübersicht. Die Exporte passen zu dem, was Lohnstelle und Prüfung erwarten.']], portfolio:['rad','vertrieb','terminal'], ober:'Lösungen', oberZiel:'loesungen', bild:'i-team',
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
              ['Weniger Rückfragen vom Steuerbüro','Weil der Export stimmt.']],
      fragen:[['Müssen wir dafür Berichte bauen?','Nein. Die Auswertungen entstehen aus dem laufenden Betrieb. Umsatz, Auslastung und offene Aufträge liegen vor, ohne dass jemand abends eine Tabelle pflegt.'],
              ['Können wir mehrere Standorte vergleichen?','Ja: je Standort einzeln und im Vergleich. Umsatz, Auslastung, Bestände. Jeder Standort arbeitet eigenständig, die Auswertung führt zusammen.'],
              ['Bekommt unsere Steuerberatung, was sie braucht?','Ja, die Exporte passen zu dem, was Lohnstelle und Prüfung erwarten. Kassendaten, Lohnliste, Umsatzübersicht. Ohne Nacharbeit und ohne Sonderformat.']] },

    retail: { /* hub:retail */ praxis:true, ph2:'Lösungen für Retail und Handel', spalten:[['Verbinden Sie Tresen, Werkstatt und Lager','Verkauf, Service und Bestand laufen in einem System, kein Abtippen zwischen Kasse und Warenwirtschaft, kein doppelter Kundenstamm.'],['Kassieren Sie, wie Ihre Kunden zahlen','Bar, kontaktlos, Zahlungslink. Abgewickelt über einen etablierten Zahlungsdienstleister, signiert von der Kassensicherung. Der Abschluss stimmt am ersten Tag.'],['Binden Sie Kunden über den Kauf hinaus','Servicetermine, Statusmeldungen, Historie am Kunden: Wer einmal gekauft hat, hat einen Grund wiederzukommen.']], portfolio:['rad','terminal','chat'], ober:'Branchen', oberZiel:'loesungen', produkt:'rad', bild:'i-p-rad',
      titel:'Retail & Marketplaces',
      intro:'Für Fachhandel und Werkstattbetriebe, die verkaufen, reparieren und online sichtbar sein wollen.',
      h2:'Handel und Service aus einem System',
      text:'Wer verkauft und repariert, führt zwei Geschäfte in einem Haus. Kasse, Auftrag, Lager und Marktplatz-Auftritt greifen bei uns ineinander, damit der Tresen nicht zur Schaltzentrale zwischen getrennten Programmen wird.',
      punkte:[['Kasse und Auftrag verbunden','Was am Tresen kassiert wird, hängt am Vorgang, nicht in einer zweiten Liste.'],
              ['Lager mit Abbuchung','Verkaufte und verbaute Teile verlassen den Bestand von selbst.'],
              ['Sichtbar im Netz','Öffnungszeiten, Termine und Anfragen laufen über denselben Datenbestand.'],
              ['Zertifizierte Kasse','Technische Sicherungseinrichtung nach Kassensicherungsverordnung inklusive.']],
      alltag:[['Ein Abschluss am Abend','Kasse, Karte und Aufträge in einer Auswertung.'],
              ['Weniger Doppelpflege','Artikel und Kunden werden einmal erfasst.'],
              ['Kunden finden Sie online','Und buchen Termine, ohne anzurufen.']] },

    hospitality: { /* hub:hospitality */ ph2:'Lösungen für Gastgeber', spalten:[['Verkürzen Sie den Weg zur Bestellung','Vom Platz aus bestellen, ohne zu warten und ohne App. Der Umsatz pro Tisch steigt, weil die zweite Runde nicht am Winken scheitert.'],['Entlasten Sie Ihr Team in der Stoßzeit','Bestellungen sammeln sich geordnet statt an der Theke. Das Personal serviert. Die Reihenfolge hält das System.'],['Führen Sie alle Umsätze zusammen','Tische, Theke, Kartenzahlung: ein Abschluss, prüfungsfest signiert. Der Abend endet nicht mit einer Rechenstunde.']], portfolio:['order','terminal','chat'], ober:'Branchen', oberZiel:'loesungen', produkt:'order', bild:'i-p-order',
      titel:'Hospitality & Food Service',
      intro:'Für Bars, Cafés, Lounges und Restaurants, in denen der Weg zum Tisch der Engpass ist.',
      h2:'Der Gast bestellt, die Theke behält den Überblick',
      text:'In Stoßzeiten entscheidet nicht die Küche, sondern die Bestellaufnahme. Wenn Gäste selbst bestellen, verschiebt sich die Arbeit dorthin, wo sie zählt, und die Abrechnung je Tisch stimmt am Ende von selbst.',
      punkte:[['Bestellung am Tisch','Per Code, ohne App-Installation, mit Tischnummer im System.'],
              ['Karte in Echtzeit','Ausverkauftes verschwindet sofort an allen Tischen.'],
              ['Theken-Terminal','Alle offenen Tische, kassieren und abschließen an einem Ort.'],
              ['Abrechnung je Tisch','Offene Posten bleiben zugeordnet, auch beim Schichtwechsel.']],
      alltag:[['Ruhigere Stoßzeiten','Bestellungen sammeln sich im System, nicht an der Theke.'],
              ['Höherer Bon','Wer in Ruhe liest, bestellt eher nach.'],
              ['Weniger Fehler','Was der Gast tippt, muss niemand entziffern.']] },

    mobility: { /* hub:mobility */ ph2:'Lösungen für Mobilität und Transport', spalten:[['Planen Sie Touren, die sich rechnen','Echte Fahrzeiten statt Luftlinie, Fracht entlang der Strecke statt Leerkilometer. Die Marge entsteht in der Planung.'],['Belegen Sie jede Übergabe','Unterschrift, Foto, Zeitstempel. Automatisch dokumentiert. Reklamationen werden Nachschlagen statt Streit.'],['Steuern Sie das Team unterwegs','Aufträge, Status und Rückfragen laufen aufs Gerät im Fahrzeug. Das Büro sieht den Stand, ohne hinterherzutelefonieren.']], portfolio:['transport','vertrieb','terminal'], ober:'Branchen', oberZiel:'loesungen', produkt:'transport', bild:'i-p-trans',
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

    selfservice: { /* hub:selfservice */ ph2:'Lösungen für Selbstbedienung', spalten:[['Lassen Sie Kunden selbst starten','Bestellung per Code, Terminal am Eingang, Karte statt Schlange. Ihr Angebot funktioniert auch, wenn gerade niemand am Tresen steht.'],['Halten Sie die Geräte im Zaum','Terminals laufen im gesperrten Modus und starten nach Stromausfall wieder in genau diesen Zustand. Gewartet wird aus der Ferne.'],['Kassieren Sie ohne Personal am Gerät','Kartenzahlung direkt am Terminal, abgewickelt über einen etablierten Zahlungsdienstleister, signiert von der Kassensicherung. Der Umsatz läuft in denselben Abschluss wie alles andere.']], portfolio:['order','terminal','chat'], ober:'Branchen', oberZiel:'loesungen', produkt:'terminal', bild:'i-n3',
      titel:'Self-Service & Kiosk',
      intro:'Für Abläufe, die ohne Personal funktionieren sollen: Terminals, Selbstbestellung, Zeiterfassung.',
      h2:'Geräte, die für sich arbeiten',
      text:'Ein Tablet am Eingang, ein Code am Tisch, eine Karte im Portemonnaie: Selbstbedienung entlastet dort, wo Personal knapp ist. Die Geräte laufen im gesperrten Modus und lassen sich nicht zweckentfremden.',
      punkte:[['Kiosk-Modus','Das Gerät startet in die Anwendung und bleibt darin.'],
              ['Zeiterfassung per Karte','Kommen und gehen ohne App auf dem privaten Handy.'],
              ['Selbstbestellung','Der Gast oder Kunde erfasst selbst. Fehlerfrei und sofort im System.'],
              ['Fernwartung','Geräte werden zentral überwacht und aktualisiert.']],
      alltag:[['Entlastung am Empfang','Routinevorgänge laufen ohne Zuruf.'],
              ['Saubere Zeiten','Sekundengenau, nachvollziehbar für beide Seiten.'],
              ['Keine Diskussionen','Das Terminal kennt nur seine Aufgabe.']] },

    fieldsales: { /* hub:fieldsales */ ph2:'Lösungen für den Vertrieb im Feld', spalten:[['Machen Sie aus Fahrzeit Besuchszeit','Die Route entsteht aus Fälligkeit und Straße. Wer heute dran ist, steht vorn. Wer überfällig ist, fällt auf.'],['Halten Sie fest, was besprochen wurde','Diktat nach dem Termin, strukturierter Bericht beim Kunden. Die Historie gehört dem Betrieb, nicht dem Notizbuch.'],['Fassen Sie nach, bevor es kalt wird','Zusagen werden Wiedervorlagen, Wiedervorlagen werden Termine. Kein Interessent geht verloren, weil der Zettel weg ist.']], portfolio:['vertrieb','chat','plan'], ober:'Branchen', oberZiel:'loesungen', produkt:'vertrieb', bild:'i-talk',
      titel:'Field Sales & Service',
      intro:'Für Teams, die beim Kunden arbeiten: Besuche, Routen, Berichte und Zusagen im Griff.',
      h2:'Die Arbeit passiert draußen. Die Ordnung fährt mit',
      text:'Wer den Tag auf der Straße verbringt, hat abends keine Kraft für Protokolle. Deshalb entstehen Planung, Route und Bericht unterwegs: diktiert statt getippt, abgelegt beim Kunden statt im Notizbuch.',
      punkte:[['Besuchsplanung','Wer ist fällig, wer ist überfällig, was steht an.'],
              ['Routen nach Straße','Die sinnvolle Reihenfolge, nicht die Luftlinie.'],
              ['Bericht per Sprache','Zwei Sätze nach dem Termin, fertig abgelegt.'],
              ['Historie je Kunde','Zusagen und offene Punkte, griffbereit vor dem Termin.']],
      alltag:[['Ein Termin mehr am Tag','Kürzere Wege, weniger Suchen.'],
              ['Berichte kommen an','Weil sie zwei Minuten dauern.'],
              ['Vertretbar im Urlaub','Der Stand steht beim Kunden, nicht im Kopf.']] },

    building: { /* hub:building */ ph2:'Lösungen für Bau und Handwerk', spalten:[['Messen Sie einmal, nutzen Sie es überall','Aufmaß mit Foto direkt am Objekt. Daraus entstehen Positionen und Mengen. Der Übertragungsfehler hat keinen Platz mehr, an dem er passieren könnte.'],['Belegen Sie Nachträge, statt zu verhandeln','Zu jedem Maß liegen Foto und Zeitpunkt im Vorgang. Was abgerechnet wird, ist dokumentiert statt geschätzt.'],['Erfassen Sie Zeiten dort, wo gearbeitet wird','Kommen und Gehen am Terminal, sekundengenau und auswertbar je Baustelle. Die Lohnabrechnung bekommt Daten statt Diskussionen.']], portfolio:['plan','terminal','chat'], ober:'Branchen', oberZiel:'loesungen', produkt:'plan', bild:'i-p-plan',
      titel:'Building Technology',
      intro:'Für Betriebe der technischen Gebäudeausrüstung: Aufmaß, Positionen und Projekt in einer Linie.',
      h2:'Vom Aufmaß zur Abrechnung ohne Medienbruch',
      text:'Zwischen Baustelle und Büro gehen Maße verloren oder werden doppelt erfasst. Bei uns entsteht das Aufmaß am Objekt, wird zur Position und landet in der Abrechnung, ohne dass jemand Zahlen überträgt.',
      punkte:[['Aufmaß vor Ort','Mit Foto und Maß direkt am Objekt erfasst.'],
              ['Positionen automatisch','Aus dem Aufmaß, nicht aus der Erinnerung.'],
              ['Projektstand sichtbar','Beauftragt, in Arbeit, offen, auf einen Blick.'],
              ['Belegte Nachträge','Gemessen statt geschätzt, deshalb unstrittig.']],
      alltag:[['Einmal erfassen genügt','Keine Zettel, keine Übertragung.'],
              ['Schnellere Angebote','Das Angebot folgt dem Termin am selben Tag.'],
              ['Weniger Streit ums Maß','Weil jedes Maß ein Foto hat.']] },

    engagement: { /* hub:engagement */ ph2:'Lösungen für Kundenkontakt und Bindung', spalten:[['Seien Sie erreichbar, wo Ihre Kunden schreiben','WhatsApp, E-Mail, Formular. Ein Posteingang, ein Verlauf je Kunde. Keine Anfrage hängt vom Diensthandy eines Einzelnen ab.'],['Antworten Sie mit System','Vorschläge aus Ihren eigenen Informationen, geprüft von einem Menschen. Routinefälle laufen nach Freigabe automatisch.'],['Machen Sie aus Anfragen Aufträge','Aus dem Gespräch wird ein Vorgang, aus dem Vorgang ein Termin oder eine Bestellung. Der Übergang passiert im selben System, ohne Medienbruch.']], portfolio:['chat','vertrieb','order'], ober:'Branchen', oberZiel:'loesungen', produkt:'chat', bild:'i-chat',
      titel:'Omnichannel Customer Engagement',
      intro:'Kundenkontakt über alle Kanäle. WhatsApp, Telefon, E-Mail und Web laufen in einem Posteingang zusammen.',
      h2:'Alle Kanäle, ein Vorgang',
      text:'Das ist die Disziplin, aus der wir kommen: Ob der Kunde anruft, eine WhatsApp schreibt, mailt oder das Formular nutzt. Alles landet im selben Posteingang und wird zum Vorgang mit Nummer und Zuständigkeit. Kein Kanal führt ins Leere, kein Verlauf geht verloren. Als nächster Kanal folgt der Sprachdialog (IVR). Das Handwerk, mit dem unser Gründer angefangen hat.',
      punkte:[['Ein Posteingang für alle Kanäle','WhatsApp, Telefon, E-Mail und Web in einer Übersicht.'],
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
['12.06.2026','fach','Wem Ihre Kundendaten wirklich gehören','Datenschutz ist kein Formular, das man einmal ausfüllt. Er entscheidet, ob Sie beim Anbieterwechsel Ihre eigenen Kundendaten mitnehmen können, oder zurücklassen müssen.','i-doku','<p>Die Datenschutz-Grundverordnung gilt vielen Betrieben als lästige Pflicht, die man mit einer Einwilligungserklärung auf der Website abhakt. Das ist ein teurer Irrtum. Entscheidend ist nicht das Formular, sondern die Frage, wer die tatsächliche Verfügungsgewalt über Ihre Kundendaten hat. Sie oder Ihr Softwareanbieter.</p> <h3>Was Datenhoheit im Betriebsalltag bedeutet</h3> <p>Datenhoheit ist kein juristischer Begriff, sondern eine praktische Machtfrage. Wer Ihre Kundenstammdaten, Auftragshistorien und Rechnungen speichert, bestimmt am Ende die Bedingungen. Der samoLabs betreibt deshalb bewusst nach klaren Prinzipien:</p> <ul><li>Serverstandort ausschliesslich in Deutschland, keine Ausleitung in Rechtsräume ohne angemessenes Schutzniveau.</li><li>Verschlüsselte Speicherung und Übertragung, getrennte Mandanten ohne gemeinsame Datentöpfe.</li><li>Klare Zugriffsrechte: Ihre Mitarbeiter sehen, was sie brauchen, nicht mehr.</li><li>Keine Weitergabe oder Zweitverwertung Ihrer Daten für Werbung oder das Training fremder Systeme.</li></ul> <h3>Der eine Test, den jeder Anbieter bestehen muss</h3> <p>Fragen Sie Ihren Softwareanbieter, wie Sie Ihre kompletten Daten wieder herausbekommen, wenn Sie kündigen. Die Antwort verrät alles. Bei der samoLabs gehören Ihre Daten Ihnen: Sie erhalten auf Wunsch einen vollständigen, maschinenlesbaren Export Ihrer Kunden, Aufträge und Belege, ohne Aufpreis, ohne Wartezeit, ohne Klauseln im Kleingedruckten.</p> <blockquote>Ein System, aus dem Sie nicht mehr herauskommen, ist kein Werkzeug, sondern eine Falle.</blockquote> <h3>Datenschutz, der den Betrieb nicht ausbremst</h3> <p>Guter Datenschutz kostet keine Produktivität, wenn er von Anfang an eingebaut ist. Löschfristen, Auskunftsersuchen und Protokollierung laufen im Hintergrund mit, statt jedes Mal manuelle Arbeit zu erzeugen. So erfüllen Sie Ihre Pflichten aus der DSGVO, ohne dass ein einziger Handgriff an der Werkbank oder am Tresen länger dauert.</p>'],
['26.06.2026','fach','Aus einem Auftrag planbaren Umsatz machen','Ein repariertes Fahrrad ist kein abgeschlossener Vorgang, sondern der Beginn einer Kundenbeziehung. Wer die nächste Inspektion automatisch anstößt, fuellt seine Werkstatt planbar.','i-kontakt','<p>Der häufigste Umsatzverlust in Werkstätten steht in keiner Bilanz: Es ist der Kunde, der nach der Reparatur geht und einfach nicht wiederkommt. Nicht aus Unzufriedenheit, sondern weil ihn niemand erinnert hat. Jeder abgeschlossene Auftrag, der nicht in einen nächsten mündet, ist verschenkte Kapazität.</p> <h3>Warum die Erinnerung den Unterschied macht</h3> <p>Ein Fahrrad braucht nach einigen Monaten die nächste Inspektion, die Bremsen wollen nachgestellt, die Schaltung neu justiert werden. Der Kunde weiss das selten. Der Betrieb weiss es genau, und hat mit jeder Reparatur die Datengrundlage, um den richtigen Zeitpunkt vorherzusagen. samoRad nutzt genau diese Historie: Aus dem Leistungsdatum und der Art der Arbeit entsteht automatisch der Anlass für die nächste Kontaktaufnahme.</p> <h3>Vom Hinweis zum gebuchten Termin</h3> <p>Eine Erinnerung allein bringt wenig, wenn der Kunde danach erst telefonieren muss. Deshalb enthält jede Service-Nachricht einen direkten Buchungslink. Der Kunde tippt auf einen freien Termin, und dieser landet ohne Zwischenschritt in Ihrem Werkstattkalender.</p> <ul><li>Automatischer Versand zum errechneten Wartungszeitpunkt, ohne dass jemand eine Liste pflegen muss.</li><li>Direkter Buchungslink statt Telefonschleife. Der Kunde bucht, wann es ihm passt.</li><li>Auslastung der ruhigen Wochen, weil Termine vorgezogen statt verpasst werden.</li><li>Messbare Rückkehrquote statt Bauchgefühl.</li></ul> <h3>Aus Einmalgeschäft wird planbarer Umsatz</h3> <p>Wer seine Kundschaft systematisch zurückholt, verwandelt einen Stapel einzelner Aufträge in einen kalkulierbaren Grundstock an Auslastung. Das ist der Unterschied zwischen einer Werkstatt, die auf Laufkundschaft hofft, und einem Betrieb, der seine kommenden Wochen kennt.</p>'],
['10.07.2026','fach','Karten akzeptieren, ohne zur Bank zu müssen','Ein eigener Akzeptanzvertrag mit der Bank kostet Wochen und Grundgebühren. Es geht auch anders: kontaktlos kassieren, Geld direkt aufs eigene Konto, ohne monatliche Fixkosten.','i-beleg','<p>Wer heute Karten akzeptieren will, landet schnell auf dem klassischen Weg: ein Akzeptanzvertrag mit der Bank, Bonitätsprüfung, Grundgebühren und Wochen der Wartezeit, bevor die erste kontaktlose Zahlung durchläuft. Für viele Betriebe steht dieser Aufwand in keinem Verhältnis zum Nutzen, und sie kassieren weiter nur bar, obwohl längst jeder Kunde die Karte zückt.</p> <h3>Kartenakzeptanz ohne den Umweg über die Bank</h3> <p>Es geht einfacher. Über einen etablierten Zahlungsdienstleister, einen der groessten Zahlungsabwickler weltweit, akzeptieren Sie Karten- und Kontaktloszahlung direkt am Gerät, ohne selbst einen eigenen Akzeptanzvertrag abzuschliessen. Die technische und regulatorische Abwicklung übernimmt der Dienstleister im Hintergrund. Sie kassieren, der Betrag landet auf Ihrem Konto.</p> <h3>Transparente Kosten statt Fixkostenfalle</h3> <p>Der entscheidende Unterschied liegt im Preismodell. Statt monatlicher Grundgebühren, die auch in umsatzschwachen Wochen anfallen, zahlen Sie ausschliesslich pro Transaktion:</p> <ul><li>Transaktionsgebühr von 1,89–2,89 %, ohne Grundgebühr.</li><li>Keine Fixkosten, kein Mindestumsatz, kein Risiko in ruhigen Monaten.</li><li>Auszahlung direkt auf Ihr eigenes Konto.</li><li>Kontaktlos, Karte und mobile Bezahldienste ohne separate Zusatzhardware für jede Variante.</li></ul> <h3>Direkt in Ihre Abläufe eingebaut</h3> <p>Die Zahlung ist kein separates Terminal neben der Kasse, sondern Teil des Vorgangs. Ob der Kunde in der Werkstatt über samoRad abrechnet oder am Tisch über samoOrder bestellt. Die Kartenzahlung schliesst den Beleg direkt ab, sauber dokumentiert und mit der zertifizierten TSE verbunden.</p>'],
['15.06.2026','fach','Ein Posteingang für alle Kanäle','Die meisten Betriebe verwalten Kundenkontakt nicht an einem Ort, sondern an fünf. Warum WhatsApp, E-Mail, Formular und bald der Anruf in einen einzigen Vorgangs-Posteingang gehören.','i-chat','<p>WhatsApp auf dem Firmenhandy, das Kontaktformular im Mailpostfach, die Bewertungsantwort im Portal, der versprochene Rückruf auf einem Notizzettel: Die meisten Betriebe steuern ihren Kundenkontakt nicht an einem Ort, sondern an fünf. Jeder Kanal hat sein eigenes Postfach, seine eigene Zuständigkeit und seine eigene Lücke, durch die eine Anfrage fällt.</p> <h3>Warum getrennte Postfächer der eigentliche Fehler sind</h3> <p>Kanäle zu trennen bedeutet, Wissen zu trennen. Wer die E-Mail beantwortet, sieht die WhatsApp-Nachricht desselben Kunden von vorletzter Woche nicht. Es entsteht kein Bild vom Kunden, sondern ein Dutzend Fragmente, verteilt über Geräte, Personen und Apps.</p> <h3>Aus jeder Anfrage wird ein Vorgang</h3> <p>Der samoLabs dreht das Prinzip um. Nicht der Kanal ist die Einheit, sondern der Vorgang. Ob eine Nachricht über WhatsApp, E-Mail, das Formular oder demnächst über den Anruf hereinkommt, samoChat legt sie als einen zuweisbaren Vorgang mit eindeutiger Nummer an, im selben Posteingang wie alles andere.</p> <ul><li>Eine Nummer, unter der die komplette Historie kanalübergreifend zusammenläuft.</li><li>Eine klare Zuständigkeit, sichtbar für das ganze Team statt versteckt auf einem Gerät.</li><li>Ein Status, der zeigt, ob offen, in Arbeit oder erledigt, ohne Rückfrage im Flur.</li><li>Eine Antwort, die im selben Vorgang landet, egal über welchen Kanal der Kunde nachfasst.</li></ul> <h3>Was das im Alltag ändert</h3> <p>Nichts geht mehr im Verlauf verloren, weil es keinen Verlauf mehr gibt, den man durchscrollen muss. Ein Mitarbeiter, der übernimmt, sieht sofort, was zugesagt wurde und was noch aussteht. Urlaub, Feierabend und Personalwechsel hören auf, Wissenslücken zu erzeugen.</p>'],
['03.07.2026','fach','Der Anruf, der nicht verloren geht','Ein besetzter Anschluss und eine Warteschleife sind kein Kundenkontakt, sondern sein Abbruch. Warum jeder Betrieb einen eigenen Erstkontakt am Telefon braucht, der einordnet und zurückruft.','i-talk','<p>Ein Anruf ist der direkteste Weg, den ein Kunde wählen kann, und für viele Betriebe der unzuverlässigste Empfang. Es klingelt ins Leere, weil alle in der Werkstatt oder beim Kunden sind. Es landet in einer Mailbox, die niemand konsequent abhört. Oder der Anrufer hängt in einer Warteschleife und legt nach neunzig Sekunden auf.</p> <h3>Warum die Warteschleife das teuerste Postfach ist</h3> <p>Ein verpasster Anruf hinterlässt keine Spur. Keine Nummer, kein Anliegen, kein Name, den man zurückrufen könnte. Anders als eine Nachricht, die liegen bleibt, verschwindet der Anruf vollständig. Genau deshalb braucht Telefonie keinen weiteren Anrufbeantworter, sondern einen echten Erstkontakt, der aufnimmt, was der Anrufer will, auch dann, wenn kein Mensch frei ist.</p> <h3>Der Sprachdialog als Erstkontakt</h3> <p>samoBot nimmt den Anruf entgegen, bevor er verloren geht. Er fragt in natürlicher Sprache nach dem Anliegen, ordnet es ein und hält Name und Rückrufwunsch fest, statt den Anrufer in eine Schleife zu schicken.</p> <ul><li>Der Anrufer nennt sein Anliegen und wird eingeordnet, statt gegen ein Besetztzeichen zu sprechen.</li><li>Aus dem Gespräch wird ein Vorgang mit Nummer, Thema und Rückrufwunsch, nicht ein vergessener Klingelton.</li><li>Was samoBot nicht abschliessend klären kann, übergibt er sauber an einen Mitarbeiter, mit dem gesamten Kontext.</li></ul> <h3>Telefonie gehört in denselben Posteingang</h3> <p>Der eigentliche Gewinn entsteht, weil der Anruf nicht in einem eigenen Silo landet. Er fliesst in samoChat in denselben Vorgangs-Posteingang wie WhatsApp, E-Mail und Formular. Ruft derselbe Kunde später an, sieht Ihr Team seine offene Anfrage von gestern.</p>'],
['24.07.2026','fach','Wann sich Individualsoftware lohnt','Nicht jeder Betrieb braucht Software nach Mass, und nicht jeder ist mit Standard gut bedient. Eine ehrliche Einordnung, wann welche Wahl die richtige ist.','i-laptops','<p>Software nach Mass klingt nach der besseren Lösung, weil sie nach mehr klingt. Das ist ein schlechter Massstab. Die richtige Frage ist nicht, was aufwendiger ist, sondern was Ihre Abläufe am wenigsten verbiegt. Manchmal ist das ein Standardprodukt, das seit Jahren erprobt ist. Manchmal ist es eine Anwendung, die genau Ihren Betrieb abbildet und nichts sonst.</p> <h3>Wann Standardsoftware die richtige Wahl ist</h3> <p>Standard ist stark, wo ein Problem überall gleich aussieht. Buchhaltung, Lohn, klassische Warenwirtschaft folgen Regeln, die für den ganzen Markt gelten und die niemand für sich neu erfinden sollte. Wenn Ihre Abläufe zu einem bewährten Produkt passen, fahren Sie mit Standard schneller, günstiger und ruhiger.</p> <h3>Wann sich der Bau nach Mass rechnet</h3> <p>Massarbeit lohnt sich dort, wo Ihr Ablauf der Grund ist, warum Kunden zu Ihnen kommen, und keine Standardlösung ihn ohne Verrenkung trifft. Die Anzeichen sind konkret:</p> <ul><li>Sie halten mehrere Programme mit Tabellen und Zuruf zusammen, weil kein Produkt Ihren Prozess ganz abdeckt.</li><li>Sie zahlen für Funktionsumfang, den Sie nie nutzen, und vermissen zugleich das eine, worauf es ankommt.</li><li>Ihr Wettbewerbsvorteil steckt genau in dem Ablauf, den die Software gerade behindert statt trägt.</li></ul> <h3>Der Unterschied, der bleibt: Betrieb</h3> <p>Eine Anwendung nach Mass ist nur so viel wert wie ihr laufender Betrieb. Der samoLabs baut nicht nur, sie betreibt. Hosting, Updates, Sicherheit und Weiterentwicklung bleiben in einer Hand, und die Software wächst mit Ihrem Betrieb, statt an dem Tag zu veralten, an dem sie fertig wird.</p>'],

    ['12.07.2026','meldung','samoOrder geht im ersten Betrieb in den Regelbetrieb','Gäste bestellen per QR-Code am Tisch, die Theke sieht jede Bestellung in Echtzeit. Nach der Testphase läuft das System nun im Tagesgeschäft.','i-laptops','<p>Nach mehreren Wochen im Probebetrieb läuft das QR-Bestellsystem nun im Tagesgeschäft. Gäste rufen die Karte über den Code an ihrem Tisch auf, wählen aus und schicken die Bestellung ab. An der Theke erscheint sie unmittelbar mit Tischnummer.</p> <h3>Was sich für den Betrieb ändert</h3> <p>Der Weg zum Tisch entfällt für die Aufnahme. Das Personal geht nur noch, um zu servieren. In Stoßzeiten macht das den Unterschied zwischen Warteschlange und ruhigem Ablauf, weil sich Bestellungen im System sammeln statt vor der Theke.</p> <p>Die Karte lässt sich jederzeit ändern. Ist etwas nicht mehr verfügbar, verschwindet es sofort an allen Tischen gleichzeitig. Rückfragen und Enttäuschungen fallen damit weg.</p> <h3>Ohne Installation</h3> <p>Der Gast benötigt keine App. Die Kamera genügt, den Rest übernimmt der Browser. Genau diese fehlende Hürde entscheidet darüber, ob ein solches System angenommen wird oder nach zwei Wochen wieder verschwindet.</p>'],
    ['28.06.2026','meldung','Sieben Mitarbeitende in einer Werkstatt geschult','Vom Tresen bis zur Werkstattbank arbeitet das ganze Team im selben System. Die Schulung fand vor Ort statt, nicht per Video.','i-schulung','<p>Die Schulung fand an einem Tag vor Ort statt, nicht per Video. Alle sieben Mitarbeitenden waren dabei, vom Tresen bis zur Werkstattbank.</p> <h3>Warum vor Ort</h3> <p>Eine Aufzeichnung erklärt das System, aber nicht den Betrieb. Erst wenn man sieht, wie ein Auftrag im echten Ablauf entsteht, welche Fragen die Kollegin am Tresen tatsächlich stellt und wo der Drucker steht, lassen sich die Feinheiten klären, die später den Unterschied machen.</p> <p>Wir fahren deshalb hin, obwohl es teurer ist. Die Erfahrung zeigt, dass ein geschultes Team nach einer Woche selbstständig arbeitet, während ein per Video eingewiesenes Team noch nach Monaten Rückfragen stellt.</p> <h3>Der Ablauf</h3> <p>Vormittags die Grundlagen für alle, nachmittags getrennt nach Aufgabenbereich: Annahme, Werkstatt und Abrechnung. Am Ende hat jeder seinen eigenen Zugang und einen echten Vorgang selbst durchgeführt.</p>'],
    ['15.06.2026','meldung','samoTransport verbindet Deutschland und Südosteuropa','Die Frachtbörse bringt Auftraggeber und Fahrer auf einer Strecke zusammen, die bislang kaum digitalisiert war.','i-trans','<p>Zwischen Deutschland und Südosteuropa fahren täglich Transporte, deren Vermittlung noch weitgehend über Telefonketten und persönliche Kontakte läuft. Wer eine Ladung hat, ruft herum. Wer die Strecke fährt, sucht auf demselben Weg nach Rückfracht.</p> <h3>Was das System übernimmt</h3> <p>Aufträge werden eingestellt und erscheinen bei den Fahrern, deren Route dazu passt. Statt zu telefonieren, sieht man, was auf der eigenen Strecke liegt. Die Sendung bleibt bis zur Übergabe nachvollziehbar, der Auftraggeber muss nicht anrufen, um den Stand zu erfahren.</p> <p>Die Übergabe wird mit Unterschrift und Foto dokumentiert. Das klingt nach Kleinigkeit, entscheidet aber Wochen später, wenn jemand behauptet, eine Ladung sei nicht angekommen.</p> <h3>Weniger Leerfahrten</h3> <p>Der größte Hebel liegt in der Rückfahrt. Wer leer zurückfährt, verdient auf halber Strecke nichts. Passende Fracht auf der Rückroute verändert die Rechnung einer ganzen Tour.</p>'],
    ['02.06.2026','produkt','Kartenzahlung ohne zweites Terminal','Das Telefon wird zum Zahlungsgerät. Ein Tagesabschluss statt zwei, ein Vertrag weniger.','i-n1','<p>Wer ein separates Kartenlesegerät betreibt, führt zwei Kassenabschlüsse und gleicht sie ab. Ein Betrag steht in der Kasse, einer beim Zahlungsdienstleister, und bei Abweichungen sucht abends jemand nach dem Fehler.</p> <h3>Ein Gerät für beides</h3> <p>Das Telefon oder Tablet, auf dem der Auftrag steht, nimmt auch die Zahlung entgegen. Der Betrag kommt aus dem Vorgang, es wird nichts abgetippt. Damit fällt die häufigste Fehlerquelle weg: der falsch eingegebene Betrag.</p> <p>Am Abend gibt es einen Abschluss statt zwei. Was kassiert wurde, steht dort, wo auch der Auftrag steht.</p> <h3>Was Sie brauchen</h3> <p>Ein Gerät mit Nahfeldfunk, wie es jedes aktuelle Telefon hat. Kein Vertrag mit einem Terminalanbieter, keine Mietgebühr, keine Wartezeit auf Hardware.</p>'],
    ['20.05.2026','produkt','Etikettendruck direkt vom Tablet','Auftrag annehmen, Etikett drucken, fertig, ohne Rückweg ins Büro.','i-p-rad','<p>Ein Auftrag ohne Etikett ist ein Zettel, der verloren geht. Deshalb druckt das Tablet unmittelbar bei der Annahme: Nummer, Kunde, Datum, dazu der Strichcode für die spätere Zuordnung.</p> <h3>Warum am Tresen</h3> <p>Wer erst im Büro druckt, trägt die Daten zweimal ein oder merkt sie sich. Beides kostet Zeit und geht schief. Am Tresen entsteht das Etikett in dem Moment, in dem der Kunde noch davorsteht und Fragen beantworten kann.</p> <p>Der Drucker steht im Netzwerk und wird von jedem berechtigten Gerät angesprochen. Ein zweiter Rechner ist nicht nötig.</p>'],
    ['08.05.2026','fach','Was die Kassensicherungsverordnung wirklich verlangt','Viele Betriebe glauben, eine moderne Kasse genüge. Verlangt wird aber eine zertifizierte technische Sicherungseinrichtung, und die muss jede einzelne Buchung signieren.','i-beleg','<p>Viele Betriebe glauben, eine moderne Kasse genüge. Verlangt wird aber mehr: eine zertifizierte technische Sicherungseinrichtung, die jede einzelne Buchung signiert und unveränderbar protokolliert.</p> <h3>Was genau vorgeschrieben ist</h3> <ul> <li>Jeder Geschäftsvorfall wird einzeln aufgezeichnet und signiert</li> <li>Die Aufzeichnungen sind unveränderbar und über zehn Jahre lesbar</li> <li>Der Kunde erhält einen Beleg. Digital genügt</li> <li>Die Kasse ist beim Finanzamt gemeldet</li> <li>Bei einer Prüfung werden die Daten in einem festgelegten Format herausgegeben</li> </ul> <h3>Der häufigste Irrtum</h3> <p>Eine Software allein erfüllt die Anforderung nicht. Die Sicherungseinrichtung ist ein eigenes, zertifiziertes Bauteil. Entweder als Steckmodul oder als Dienst in einem Rechenzentrum. Ohne sie ist die Kasse formal nicht ordnungsgemäß, auch wenn alle Beträge stimmen.</p>'],
    ['24.04.2026','fach','E-Rechnung: Was jetzt auf Betriebe zukommt','Elektronische Rechnungen sind kein PDF per Mail. Gemeint ist ein strukturiertes Format, das Maschinen lesen können. Wer empfangen muss, braucht kein neues Programm, aber ein vorbereitetes.','i-doku','<p>Eine elektronische Rechnung ist kein PDF im Anhang. Gemeint ist ein strukturiertes Format, das eine Maschine lesen und weiterverarbeiten kann, ohne dass jemand Zahlen abtippt.</p> <h3>Was für wen gilt</h3> <p>Im Geschäftsverkehr zwischen Unternehmen muss inzwischen jeder in der Lage sein, solche Rechnungen zu empfangen. Für das Versenden gelten gestaffelte Übergangsfristen, abhängig von der Unternehmensgröße.</p> <p>Empfangen bedeutet dabei mehr als speichern. Die Rechnung muss geprüft, verbucht und über die Aufbewahrungsfrist im Originalformat vorgehalten werden.</p> <h3>Was das praktisch heißt</h3> <p>Wer ein System hat, das die gängigen Formate versteht, muss nichts weiter tun. Wer noch mit Papier oder PDF arbeitet, braucht einen Weg, eingehende Rechnungen maschinell zu verarbeiten, und sollte damit nicht bis zur letzten Frist warten.</p>'],
    ['10.04.2026','fach','Warum Thermopapier aus der Werkstatt verschwindet','Bonrollen enthalten Stoffe, die über die Haut aufgenommen werden. Dazu verblassen die Belege binnen Monaten. Der digitale Beleg löst beide Probleme auf einmal.','i-beleg','<p>Bonrollen sind beschichtet, damit der Druck ohne Farbe entsteht. Diese Beschichtung enthält Substanzen, die über die Haut aufgenommen werden. Wer täglich Belege ausgibt, hat damit dauerhaft Kontakt.</p> <h3>Zwei Probleme auf einmal</h3> <p>Neben der gesundheitlichen Frage steht die Haltbarkeit. Thermopapier verblasst, je nach Lagerung binnen Monaten. Ein Beleg, der zehn Jahre aufbewahrt werden muss, ist nach zwei Jahren womöglich leer. Wer das kennt, kopiert Belege, und hat doppelte Arbeit.</p> <h3>Der digitale Beleg</h3> <p>Ein Beleg per QR-Code oder E-Mail löst beides. Er ist unbegrenzt lesbar, jederzeit erneut abrufbar und kostet keine Rolle. Rechtlich ist er dem gedruckten gleichgestellt, sofern der Kunde ihn erhält und nicht widerspricht.</p> <p>Nebenbei entfällt der Moment, in dem die Rolle mitten im Kassiervorgang leer ist.</p>'],
    ['27.03.2026','branche','Die Werkstatt ist der Ertragsbringer, nicht der Verkauf','Während Neuverkäufe stagnieren, wächst das Servicegeschäft. Wer seine Werkstattauslastung nicht kennt, verschenkt genau dort Geld.','i-p-rad','<p>Während der Verkauf neuer Räder stagniert, wächst das Servicegeschäft seit Jahren. Reparatur, Wartung und Umbau sind planbarer, weniger konjunkturabhängig und haben eine bessere Marge als der Handel.</p> <h3>Das Problem mit der Auslastung</h3> <p>Viele Betriebe wissen nicht, wie ausgelastet ihre Werkstatt tatsächlich ist. Termine werden nach Gefühl vergeben, und am Ende der Woche stapeln sich die Räder oder die Bank steht leer.</p> <p>Wer die Auslastung sieht, bevor er einen Termin zusagt, verschenkt weniger. Er kann sagen: nicht Dienstag, aber Donnerstag um zehn, statt einen Termin zu geben, der ohnehin platzt.</p> <h3>Was messbar ist</h3> <p>Durchlaufzeit je Auftrag, Auslastung je Mitarbeiter, Anteil der Nacharbeiten. Drei Zahlen, die nebenbei entstehen und mehr über den Betrieb sagen als der Monatsumsatz.</p>'],
    ['13.03.2026','fach','Zwei Minuten Auftragsannahme statt zehn','Wo der Auftrag entsteht, entscheidet über den Durchsatz. Wir haben nachgerechnet, was der Rückweg ins Büro einen Betrieb pro Jahr kostet.','i-hero','<p>Die klassische Annahme läuft so: Kunde kommt, Mitarbeiter nimmt das Rad, geht ins Büro, schreibt einen Auftrag, kommt zurück, fragt nach. Zwischen fünf und zehn Minuten, mehrfach am Tag.</p> <h3>Die Rechnung</h3> <p>Bei zwölf Annahmen täglich und acht Minuten Bearbeitung sind das rund anderthalb Stunden. Auf ein Jahr gerechnet ergibt das mehrere Wochen Arbeitszeit, die nicht in der Werkstatt ankommen.</p> <p>Findet die Annahme am Tresen statt, dauert sie zwei Minuten: Kunde nennt das Problem, Mitarbeiter erfasst es am Tablet, fotografiert das Rad, druckt das Etikett. Kein Rückweg, keine zweite Erfassung.</p> <h3>Was das wert ist</h3> <p>Die gewonnene Zeit ist Werkstattzeit, also fakturierbare Zeit. Genau dort entscheidet sich, ob sich eine Software rechnet, nicht an der Lizenzgebühr.</p>'],
    ['28.02.2026','produkt','Werkstattplanung zeigt Auslastung vor der Zusage','Termine platzen selten aus Nachlässigkeit, sondern weil niemand sah, dass der Tag schon voll war.','i-p-rad','<p>Termine platzen selten aus Nachlässigkeit. Meist sagt jemand einen Termin zu, ohne zu wissen, dass der Tag längst voll ist.</p> <h3>Sichtbar vor der Zusage</h3> <p>Die Planung zeigt, wie viele Stunden an einem Tag bereits vergeben sind und wer woran arbeitet. Wer einen Termin vergibt, sieht sofort, ob er realistisch ist.</p> <p>Das schützt auch die Werkstatt: Statt sechs Räder für Dienstag anzunehmen und drei davon zu verschieben, werden vier angenommen und alle fertig.</p>'],
    ['14.02.2026','branche','Was Gastronomen an der Bestellaufnahme verlieren','In Stoßzeiten ist nicht die Küche der Engpass, sondern der Weg zum Tisch. Eine Rechnung mit echten Zahlen.','i-doku','<p>In der Stoßzeit ist nicht die Küche der Engpass, sondern der Weg zum Tisch. Jede Bestellung kostet den Gang hin, das Aufnehmen und den Gang zurück.</p> <h3>Eine Überschlagsrechnung</h3> <p>Bei achtzig Bestellungen an einem Abend und zwei Minuten je Aufnahme sind das über zweieinhalb Stunden reine Aufnahmezeit. Diese Zeit fehlt beim Servieren, beim Abräumen und beim Kassieren.</p> <p>Bestellen die Gäste selbst, verschiebt sich die Arbeit dorthin, wo sie sichtbar ist. Das Personal bringt, statt zu notieren.</p> <h3>Der Nebeneffekt</h3> <p>Wer die Karte in Ruhe liest, bestellt eher nach. Kein Gast winkt dreimal, um noch ein Getränk zu ordern. Er tippt es an.</p>'],
    ['31.01.2026','fach','Datenübernahme beim Systemwechsel','Der häufigste Grund, bei einer schlechten Software zu bleiben, sind die Altdaten. Was sich übernehmen lässt und was nicht.','i-laptops','<p>Der häufigste Grund, bei einer schlechten Software zu bleiben, sind die Altdaten. Die Sorge, Kundenstamm und Historie zu verlieren, wiegt schwerer als der tägliche Ärger.</p> <h3>Was sich übernehmen lässt</h3> <ul> <li>Kundenstammdaten mit Anschrift und Kontaktweg</li> <li>Artikel und Preise</li> <li>Offene Aufträge und Vorgänge</li> <li>Abgeschlossene Aufträge als Historie</li> <li>Rechnungen als Nachweis</li> </ul> <h3>Was schwierig ist</h3> <p>Anhänge und Fotos hängen oft an einer Datenstruktur, die sich nicht sauber exportieren lässt. Und Systeme, die keinen Export anbieten, machen den Wechsel zur Handarbeit. Das ist der eigentliche Kostenpunkt.</p> <p>Bei uns ist die Übernahme Teil der Einrichtung und kostet nichts extra. Wir prüfen vorher, was Ihr bisheriges System hergibt, und sagen offen, was verloren geht.</p>'],
    ['17.01.2026','produkt','Online-Terminbuchung direkt im Werkstattkalender','Kunden buchen rund um die Uhr. Das System kennt die Auslastung und bietet nur an, was auch machbar ist.','i-laptops','<p>Termine werden abends vereinbart, am Wochenende und in der Mittagspause, also dann, wenn niemand ans Telefon geht.</p> <h3>Rund um die Uhr</h3> <p>Die Buchung greift auf denselben Kalender zu, den die Werkstatt sieht. Angeboten wird nur, was tatsächlich möglich ist. Doppelbuchungen kann es nicht geben, weil es keinen zweiten Kalender gibt.</p> <p>Der Kunde erhält eine Bestätigung, der Betrieb einen Eintrag. Niemand muss zurückrufen.</p>'],
    ['09.01.2026','meldung','Neues Jahr, neue Vorgaben: Was sich 2026 ändert','Ein Überblick über die Fristen, die Betriebe in Deutschland und Österreich betreffen.','i-n1','<p>Für Betriebe in Deutschland und Österreich ändern sich mehrere Anforderungen. Ein Überblick über das, was zeitlich ansteht.</p> <h3>Elektronische Rechnung</h3> <p>Die Pflicht zum Empfang gilt bereits. Beim Versand laufen gestaffelte Übergangsfristen, abhängig von Umsatz und Unternehmensgröße.</p> <h3>Kassenführung</h3> <p>Die Meldepflicht für elektronische Kassensysteme ist zu beachten. Wer eine Kasse in Betrieb nimmt oder außer Betrieb setzt, muss das anzeigen.</p> <h3>Was zu tun ist</h3> <p>Prüfen Sie, ob Ihr System die geforderten Formate beherrscht und ob Ihre Kasse gemeldet ist. Beides lässt sich in wenigen Minuten klären und erspart im Prüfungsfall erhebliche Diskussionen.</p>'],
    ['18.12.2025','fach','Wenn die WhatsApp-Anfrage im Verlauf verschwindet','Kundenanfragen über Messenger sind bequem, bis jemand sucht, was vor drei Wochen zugesagt wurde. Warum jede Anfrage eine Nummer braucht.','i-chat','<p>Nachrichtendienste sind bequem für Kunden und ein Problem für Betriebe. Eine Anfrage steht im Verlauf zwischen privaten Nachrichten, und wer sie beantwortet hat, weiß niemand.</p> <h3>Warum jede Anfrage eine Nummer braucht</h3> <p>Ein Vorgang mit Nummer lässt sich zuweisen, wiederfinden und abschließen. Man kann sehen, wer zuständig ist und ob geantwortet wurde. Ein Chatverlauf kann das nicht.</p> <p>Besonders deutlich wird das bei Vertretung. Wer für einen erkrankten Kollegen einspringt, kann in ein Vorgangssystem hineinsehen, in dessen Nachrichtenverlauf nicht.</p> <h3>Wie es funktioniert</h3> <p>Die Nachricht kommt an derselben Nummer an wie bisher. Im Hintergrund entsteht daraus ein Vorgang, der Anliegen erkennt und zuordnet. Der Kunde merkt davon nichts, außer dass er schneller Antwort bekommt.</p>'],
    ['04.12.2025','branche','Fahrer, Fracht und die Lücke dazwischen','Auf manchen Strecken läuft die Vermittlung noch über Telefonketten. Was das an Leerfahrten kostet.','i-trans','<p>Auf vielen Strecken läuft die Vermittlung über Telefon und persönliche Kontakte. Das funktioniert, solange man die Leute kennt, und bricht zusammen, sobald jemand ausfällt.</p> <h3>Was Leerfahrten kosten</h3> <p>Eine Tour rechnet sich über beide Richtungen. Wer leer zurückfährt, trägt die Kosten für Kraftstoff, Zeit und Fahrzeug allein auf der Hinfahrt. Je nach Strecke halbiert das den Ertrag.</p> <p>Der Aufwand, Rückfracht zu finden, ist beim Telefonieren so hoch, dass viele ihn scheuen. Wenn passende Angebote entlang der Route sichtbar sind, ändert sich diese Rechnung.</p>'],
    ['20.11.2025','produkt','Berichte diktieren statt tippen','Zwei gesprochene Sätze werden zum strukturierten Besuchsbericht. Fertig, noch vor der Weiterfahrt.','i-buero','<p>Nach einem Kundentermin sind zwei Sätze im Kopf. Bis zum Abend sind es keine mehr. Deshalb entstehen Besuchsberichte entweder unterwegs oder gar nicht.</p> <h3>Wie es abläuft</h3> <p>Der Mitarbeiter spricht, was besprochen wurde. Daraus entsteht ein strukturierter Bericht mit den Punkten, die für den nächsten Termin zählen: was zugesagt wurde, was offen ist, wann nachgefasst wird.</p> <p>Der Bericht liegt beim Kunden, nicht in einem Notizbuch. Wer den Termin übernimmt, sieht den Stand.</p>'],
    ['06.11.2025','fach','Wie viel Software braucht ein Ein-Mann-Betrieb?','Nicht jede Funktion lohnt sich für jeden. Eine ehrliche Einordnung, ab wann sich welches Modul rechnet.','i-hero','<p>Nicht jede Funktion lohnt sich für jede Betriebsgröße. Eine ehrliche Einordnung, ab wann sich welcher Baustein rechnet.</p> <h3>Ab dem ersten Tag sinnvoll</h3> <p>Auftragserfassung und Rechnungsstellung. Auch allein verliert man ohne System den Überblick, und die Zeit für die Abrechnung ist ohnehin knapp.</p> <h3>Ab drei Mitarbeitenden</h3> <p>Werkstattplanung und Zeiterfassung. Solange man selbst arbeitet, weiß man, was ansteht. Sobald andere mitarbeiten, nicht mehr.</p> <h3>Ab fünf Mitarbeitenden</h3> <p>Lagerverwaltung mit automatischer Abbuchung und Auswertung je Person. Darunter ist der Pflegeaufwand höher als der Nutzen.</p> <p>Wenn sich etwas für Sie nicht rechnet, sagen wir das. Ein Kunde, der zu viel bezahlt, bleibt nicht lange.</p>'],
    ['23.10.2025','fach','Lager, das sich selbst abbucht','Der teuerste Teil der Lagerhaltung ist nicht das Teil, sondern die Zeit, es zu erfassen. Wie Verbrauch automatisch auf die Rechnung kommt.','i-doku','<p>Der teuerste Teil der Lagerhaltung ist nicht das Teil, sondern die Zeit, die seine Erfassung kostet. Deshalb wird sie oft weggelassen, und dann stimmt der Bestand nicht.</p> <h3>Abbuchung beim Verbauen</h3> <p>Wird ein Teil einem Auftrag zugeordnet, verlässt es das Lager und erscheint auf der Rechnung. Ein Vorgang statt drei. Niemand muss abends Bestände korrigieren.</p> <p>Unterschreitet ein Artikel die Mindestmenge, erscheint er auf der Nachbestellliste. Das verhindert den Fall, dass ein Rad wegen eines Zehn-Euro-Teils eine Woche steht.</p>'],
    ['09.10.2025','branche','Zeiterfassung ohne privates Handy','Viele Betriebe scheitern an der Frage, ob Mitarbeitende eine App installieren müssen. Es geht auch anders.','i-runde','<p>Viele Einführungen scheitern nicht an der Technik, sondern an der Frage, ob Mitarbeitende eine App auf ihrem privaten Telefon installieren müssen. Diese Sorge ist berechtigt und sollte ernst genommen werden.</p> <h3>Die Alternative</h3> <p>Ein Tablet am Eingang und eine Karte im Portemonnaie. Auflegen genügt, keine Anmeldung, keine App, kein privates Gerät. Das Tablet läuft in einem gesperrten Modus und lässt sich nicht verlassen.</p> <p>Für die Auswertung reicht ein Zugang für die Betriebsleitung. Die Mitarbeitenden sehen ihre eigenen Zeiten, sonst niemand.</p>'],
    ['25.09.2025','produkt','Rechnung mit QR-Code','Der Kunde scannt, zahlt, fertig. Auch Wochen später noch, wenn die Rechnung per Mail kam.','i-doku','<p>Eine Rechnung, die per Überweisung bezahlt wird, wandert durch mehrere Hände: ausdrucken, mitnehmen, abtippen, überweisen. An jeder Stelle kann sie liegenbleiben.</p> <h3>Scannen statt abtippen</h3> <p>Der aufgedruckte Code enthält Empfänger, Betrag und Verwendungszweck. Die Banking-App liest ihn, der Kunde bestätigt. Keine Zahlendreher, keine falschen Verwendungszwecke.</p> <p>Das funktioniert auch bei Rechnungen, die per E-Mail kommen, und Wochen später noch.</p>'],
    ['11.09.2025','fach','Mehrere Standorte, eine Auswertung','Filialen einzeln steuern, Zahlen zusammen sehen, worauf es beim Aufbau ankommt.','i-buero','<p>Wer eine zweite Filiale eröffnet, steht vor der Frage, ob er ein zweites System braucht. Die Antwort hängt davon ab, wie unabhängig die Standorte arbeiten sollen.</p> <h3>Getrennt steuern, gemeinsam auswerten</h3> <p>Jeder Standort hat seine eigenen Aufträge, seine eigene Kasse und sein eigenes Lager. Die Leitung sieht beide Standorte nebeneinander und kann vergleichen.</p> <p>Wichtig ist die saubere Trennung der Kassen: Jeder Standort führt seinen eigenen Abschluss, sonst wird es bei einer Prüfung unübersichtlich.</p>'],
    ['28.08.2025','branche','Der Kunde, der dreimal anruft','Jeder Anruf „Ist mein Rad fertig?“ kostet den Betrieb Zeit. Die Lösung ist keine Hotline, sondern eine automatische Nachricht.','i-kontakt','<p>„Ist mein Rad fertig?" ist die häufigste Frage im Werkstattbetrieb. Jeder Anruf unterbricht die Arbeit, und die Antwort erfordert oft erst einen Blick in die Werkstatt.</p> <h3>Die Ursache</h3> <p>Der Kunde ruft an, weil er nichts hört. Er weiß nicht, ob sein Auftrag begonnen wurde, ob ein Teil fehlt oder ob er abholen kann.</p> <h3>Die Lösung ist keine Hotline</h3> <p>Wenn die Nachricht automatisch rausgeht, sobald der Auftrag geschlossen wird, entfällt der Anruf. Nicht weil der Kunde weniger wissen will, sondern weil er es bereits weiß.</p> <p>Bei Betrieben, die das eingeführt haben, sinkt die Zahl der Statusanrufe deutlich, und zwar dauerhaft.</p>'],
    ['14.08.2025','fach','Was ein Tagesbericht enthalten sollte','Und was nicht. Kennzahlen, die Betriebe wirklich steuern, statt Zahlen, die nur schön aussehen.','i-buero','<p>Viele Auswertungen zeigen, was leicht zu messen ist, nicht was zu steuern hilft. Ein brauchbarer Tagesbericht passt auf eine Seite.</p> <h3>Was hineingehört</h3> <ul> <li>Was kam herein: neue Aufträge, Anfragen, Termine</li> <li>Was ging hinaus: abgeschlossene Aufträge, Rechnungen</li> <li>Was hängt: Vorgänge, die auf Teile oder Rückmeldung warten</li> <li>Was kassiert wurde, getrennt nach Zahlungsart</li> </ul> <h3>Was nicht hineingehört</h3> <p>Kennzahlen, aus denen keine Handlung folgt. Wenn eine Zahl niemanden zu einer Entscheidung bringt, gehört sie in die Monatsauswertung, nicht in den Tagesbericht.</p>'],
    ['31.07.2025','produkt','Gesprächsleitfaden für den Außendienst','Vor dem Termin sehen, was zuletzt lief und was ansteht. Vorbereitung ohne Aktenordner.','i-talk','<p>Ein Termin ist besser, wenn man weiß, was beim letzten Mal besprochen wurde. Das steht selten im Kopf und noch seltener griffbereit.</p> <h3>Vor dem Termin</h3> <p>Was lief zuletzt, welche Zusagen stehen offen, welche Themen sind angebrochen. Zusammengefasst auf dem Gerät, das ohnehin mitkommt.</p> <p>Das ersetzt keine Vorbereitung, spart aber die Suche und verhindert die peinliche Frage, worüber man beim letzten Mal gesprochen hat.</p>'],
    ['17.07.2025','fach','Warum wir unsere Software selbst betreiben','Eine Agentur liefert ab und geht. Wer den Betrieb übernimmt, baut anders, und merkt Fehler zuerst.','i-hero','<p>Es gibt zwei Wege, Software auszuliefern. Man übergibt sie dem Kunden und ist fertig, oder man betreibt sie weiter und bleibt in der Verantwortung.</p> <h3>Warum der zweite Weg</h3> <p>Wer nur baut, erfährt nie, was im Betrieb wirklich passiert. Fehler werden vom Kunden umgangen statt gemeldet, und Verbesserungen entstehen nicht.</p> <p>Wer betreibt, merkt Probleme zuerst. Wenn morgens etwas ausfällt, ist das unser Problem, bevor es Ihres wird. Das ändert die Art, wie man baut: robuster, mit mehr Überwachung, weniger klug und mehr verlässlich.</p> <h3>Was das für Sie bedeutet</h3> <p>Sie haben einen Ansprechpartner statt einer Kette. Und wir haben keinen Anreiz, ein System auszuliefern, das schwer zu betreiben ist.</p>'],
    ['03.07.2025','branche','Was Werkstätten beim Softwarewechsel fürchten','Datenverlust, Stillstand, Schulungsaufwand. Alle drei Sorgen sind berechtigt, und alle drei lösbar.','i-schulung','<p>Drei Sorgen kommen in fast jedem Gespräch vor. Alle drei sind berechtigt.</p> <h3>Datenverlust</h3> <p>Was übernommen werden kann, klären wir vor der Entscheidung, nicht danach. Sie bekommen eine Liste dessen, was Ihr bisheriges System hergibt.</p> <h3>Stillstand</h3> <p>Wir stellen nicht an einem Samstag alles um. Der Wechsel läuft schrittweise, das alte System bleibt lesbar, bis alles steht.</p> <h3>Schulungsaufwand</h3> <p>Ein Tag vor Ort für das ganze Team. Danach arbeitet man, Rückfragen klären wir laufend. Wer wochenlange Einarbeitung braucht, hat das falsche System.</p>'],
    ['19.06.2025','fach','Belege, die nach fünf Jahren noch lesbar sind','Aufbewahrungspflicht trifft auf verblassende Bonrollen. Wie digitale Belege das Problem umgehen.','i-beleg','<p>Aufbewahrungspflichten treffen auf ein Papier, das verblasst. Wer Kassenbelege zehn Jahre aufheben muss, hat mit Thermopapier ein Problem.</p> <h3>Was passiert</h3> <p>Je nach Lagerung ist ein Bon nach ein bis drei Jahren nicht mehr lesbar. Wärme und Licht beschleunigen das. Im Prüfungsfall ist ein leerer Zettel kein Beleg.</p> <h3>Digitale Belege</h3> <p>Sie altern nicht, lassen sich jederzeit erneut ausgeben und sind zusätzlich durchsuchbar. Rechtlich sind sie dem Papierbeleg gleichgestellt.</p>'],
    ['05.06.2025','produkt','Sendungsverfolgung ohne Anruf','Der Auftraggeber sieht den Stand selbst. Das spart beiden Seiten das Nachfragen.','i-trans','<p>Die Frage nach dem Stand einer Sendung kostet beide Seiten Zeit: den Auftraggeber den Anruf, den Fahrer die Unterbrechung.</p> <h3>Selbst nachsehen</h3> <p>Der Auftraggeber ruft den Stand ab, wann er möchte. Er sieht, wo die Sendung ist und wann die Übergabe erwartet wird.</p> <p>Für den Fahrer bedeutet das weniger Anrufe während der Fahrt. Für den Auftraggeber bessere Auskunft gegenüber seinem eigenen Kunden.</p>'],
    ['22.05.2025','fach','Routenplanung nach Straße statt Luftlinie','Der Unterschied klingt klein und macht am Tag einen ganzen Termin aus.','i-talk','<p>Der Unterschied klingt akademisch und macht am Tag einen ganzen Termin aus.</p> <h3>Warum Luftlinie täuscht</h3> <p>Zwei Kunden können zehn Kilometer auseinanderliegen und trotzdem vierzig Minuten Fahrzeit trennen, wenn ein Fluss, eine Bahnlinie oder eine Ortsdurchfahrt dazwischenliegt. Eine Planung nach Entfernung erzeugt Routen, die auf der Karte gut aussehen und im Auto nicht funktionieren.</p> <p>Wir rechnen mit echten Straßendaten und tatsächlichen Fahrzeiten. Die Reihenfolge, die dabei herauskommt, sieht manchmal unlogisch aus und ist regelmäßig schneller.</p>'],
    ['08.05.2025','branche','Gastronomie: Was der Gast am Tisch wirklich will','Nicht bedient werden, sondern nicht warten. Was das für die Bestellaufnahme bedeutet.','i-gastro','<p>Nicht bedient werden. Nicht warten. Das ist ein Unterschied, der die Gestaltung des Ablaufs bestimmt.</p> <h3>Warten ist das Problem</h3> <p>Der Gast winkt, wird übersehen, winkt wieder. Diese Minuten prägen den Eindruck stärker als das Essen. Wer selbst bestellen kann, wartet nicht, und empfindet den Service als besser, obwohl weniger Personal am Tisch war.</p> <p>Bedienung bleibt wichtig, aber dort, wo sie wirkt: beim Bringen, beim Empfehlen, beim Verabschieden.</p>'],
    ['24.04.2025','fach','Ein System statt zehn Einzel-Tools','Die versteckten Kosten von Insellösungen: doppelte Erfassung, widersprüchliche Zahlen, Zuständigkeitslücken.','i-formular','<p>Insellösungen kosten nicht dort, wo man es vermutet. Die Lizenzen sind das kleinere Problem.</p> <h3>Die versteckten Kosten</h3> <ul> <li>Doppelte Erfassung: Kundendaten in drei Programmen pflegen</li> <li>Widersprüchliche Zahlen: Welcher Umsatz stimmt?</li> <li>Zuständigkeitslücken: Niemand weiß, wo ein Vorgang gerade steht</li> <li>Übergabeverluste: Was von Hand übertragen wird, geht schief</li> </ul> <h3>Der Maßstab</h3> <p>Ein System muss nicht alles können. Es muss dafür sorgen, dass eine Information nur einmal erfasst wird und überall dort auftaucht, wo sie gebraucht wird.</p>'],
    ['10.04.2025','produkt','Kiosk-Modus für Terminals','Das Tablet lässt sich nicht verlassen. Kein Zugriff auf anderes, keine Diskussion.','i-n3','<p>Ein Tablet am Eingang ist nur so lange ein Terminal, wie es niemand für anderes benutzt.</p> <h3>Gesperrt heißt gesperrt</h3> <p>Das Gerät startet in die Anwendung und lässt sich nicht verlassen. Kein Browser, keine Einstellungen, kein anderes Programm. Auch ein Neustart ändert daran nichts.</p> <p>Das schützt nicht nur vor Ablenkung, sondern auch vor versehentlichen Änderungen, die sonst jemand mühsam zurückdrehen muss.</p>'],
    ['27.03.2025','fach','Was eine zertifizierte Kasse kostet, und was sie spart','Marktübliche Aufpreise im Vergleich. Warum wir die Sicherungseinrichtung nicht extra berechnen.','i-beleg','<p>Die technische Sicherungseinrichtung ist vorgeschrieben. Interessant ist, wie unterschiedlich sie berechnet wird.</p> <h3>Marktüblich</h3> <p>Die meisten Anbieter berechnen sie monatlich zusätzlich, typischerweise im Bereich von zehn bis zwanzig Euro je Kasse. Bei mehreren Kassen summiert sich das.</p> <h3>Warum wir sie nicht extra berechnen</h3> <p>Sie ist keine Zusatzfunktion, sondern gesetzliche Voraussetzung für den Betrieb einer Kasse. Etwas gesondert zu berechnen, das ohnehin verpflichtend ist, halten wir für unsauber. Ab der Pro-Stufe ist sie enthalten.</p>'],
    ['13.03.2025','branche','Handwerk und Bürokratie','Zwischen Aufmaß und Abrechnung liegt oft ein Zettel. Wo Digitalisierung wirklich entlastet.','i-team','<p>Zwischen dem Aufmaß beim Kunden und der Rechnung liegen oft mehrere Medienbrüche: Zettel, Foto, Tabelle, Textverarbeitung.</p> <h3>Wo Digitalisierung wirklich entlastet</h3> <p>Nicht überall. Sie hilft dort, wo dieselbe Information mehrfach angefasst wird. Ein Aufmaß, das vor Ort erfasst wird und ohne weiteres Zutun zur Position und zur Rechnung wird, spart mehr als jede Einzeloptimierung.</p> <p>Sie hilft nicht bei Aufgaben, die ohnehin nur einmal vorkommen. Dort ist der Einrichtungsaufwand höher als der Nutzen.</p>'],
    ['27.02.2025','fach','Warum wir keine Preise verstecken','Wer Preise erst nach dem Telefonat nennt, filtert nicht, er verliert.','i-hero','<p>Viele Anbieter nennen Preise erst nach einem Gespräch. Die Begründung lautet, jedes Angebot sei individuell.</p> <h3>Was dabei passiert</h3> <p>Wer keinen Preis findet, geht davon aus, dass es teuer wird. Ein Teil der Interessenten meldet sich gar nicht erst. Darunter die, die gut gepasst hätten.</p> <p>Wer sich meldet, kostet Zeit. Bei einem Team von zwei Personen ist ein Gespräch mit jemandem, der beim Preis abspringt, ein verlorener Vormittag.</p> <h3>Unser Weg</h3> <p>Der Einstiegspreis steht auf der Produktseite. Wer damit nicht zurechtkommt, ruft nicht an, und das ist für beide Seiten die bessere Lösung.</p>'],
    ['13.02.2025','produkt','Angebote als PDF, direkt aus dem Vorgang','Was kalkuliert wurde, steht im Angebot. Ohne Zwischenschritt über die Textverarbeitung.','i-kontakt','<p>Ein Angebot entsteht meist zweimal: einmal in der Kalkulation, einmal in der Textverarbeitung. Dazwischen werden Zahlen übertragen.</p> <h3>Ohne Zwischenschritt</h3> <p>Was kalkuliert wurde, steht im Angebot. Positionen, Mengen, Preise, Summen. Layout und Briefkopf sind hinterlegt, die Nummer wird fortlaufend vergeben.</p> <p>Ändert sich etwas, ändert es sich an einer Stelle. Das Angebot bleibt mit dem Vorgang verbunden, aus dem später der Auftrag wird.</p>'],
    ['30.01.2025','fach','Verfügbarkeit: Was passiert, wenn etwas ausfällt','Kein System läuft immer. Entscheidend ist, wie schnell jemand reagiert, und ob er das System kennt.','i-laptops','<p>Kein System läuft immer. Entscheidend ist, wie schnell jemand reagiert und ob diese Person das System kennt.</p> <h3>Wie wir es halten</h3> <p>Die Systeme werden überwacht. Fällt etwas aus, erfahren wir es, bevor Sie anrufen. In den meisten Fällen ist das Problem behoben, bevor es im Betrieb auffällt.</p> <p>Wenn Sie doch anrufen, sprechen Sie mit jemandem, der das System gebaut hat. Nicht mit einer ersten Ebene, die ein Formular ausfüllt.</p> <h3>Was wir nicht versprechen</h3> <p>Hundertprozentige Verfügbarkeit. Wer das zusagt, hat entweder nicht nachgedacht oder rechnet mit Ihrer Nachsicht.</p>'],
    ['16.01.2025','branche','Außendienst: Der Bericht, der nie geschrieben wird','Abends um acht schreibt niemand mehr gern Protokolle. Wie sich das Problem an der Wurzel löst.','i-buero','<p>Abends um acht schreibt niemand mehr gern Protokolle. Deshalb entstehen Berichte entweder unterwegs oder gar nicht, und meistens gar nicht.</p> <h3>An der Wurzel ansetzen</h3> <p>Es hilft nicht, Berichte einzufordern. Es hilft, sie so einfach zu machen, dass sie nebenbei entstehen. Zwei gesprochene Sätze nach dem Termin, während man noch im Auto sitzt.</p> <p>Der Unterschied zeigt sich nicht bei einem Bericht, sondern nach einem halben Jahr: Dann gibt es eine Historie statt Erinnerungslücken.</p>'],
    ['12.12.2024','fach','Aufmaß vor Ort statt Übertragung im Büro','Jede Übertragung ist eine Fehlerquelle und kostet Zeit. Warum Erfassung dorthin gehört, wo gemessen wird.','i-team','<p>Jede Übertragung ist eine Fehlerquelle. Maße, die auf einem Zettel stehen und später in eine Tabelle wandern, werden falsch gelesen oder falsch getippt.</p> <h3>Dort erfassen, wo gemessen wird</h3> <p>Das Aufmaß entsteht am Objekt, mit Foto und Bezug zur Position. Was gemessen wurde, steht später in der Rechnung, ohne dass jemand es überträgt.</p> <p>Das verhindert auch Diskussionen über Nachträge, weil Maße belegt sind statt geschätzt.</p>'],
    ['28.11.2024','produkt','Statistik, die nebenbei entsteht','Auswertung ist nur nützlich, wenn sie keine zusätzliche Arbeit macht.','i-team','<p>Auswertung ist nur nützlich, wenn sie keine zusätzliche Arbeit macht. Sobald jemand Zahlen zusammensuchen muss, entsteht sie unregelmäßig oder gar nicht.</p> <h3>Aus dem Tagesgeschäft</h3> <p>Was tagsüber erfasst wird, steht abends im Bericht. Keine Eingabe, keine Nachpflege. Die Zahlen sind so gut wie die Erfassung, und die passiert ohnehin.</p>'],
    ['14.11.2024','fach','Grenzüberschreitend arbeiten: zwei Rechtsräume, ein System','Wer zwischen Ländern arbeitet, muss beide Regelwerke bedienen. Wie sich das ohne Zweitprogramm lösen lässt.','i-trans','<p>Wer zwischen Ländern arbeitet, muss zwei Regelwerke bedienen. Unterschiedliche Anforderungen an Rechnung, Kasse und Nachweis.</p> <h3>Ohne Zweitprogramm</h3> <p>Die Grundlage ist dieselbe, die Regeln sind je Land hinterlegt. Ein Vorgang in Deutschland folgt deutschen Vorgaben, einer in Österreich den dortigen.</p> <p>Das ist aufwendiger zu bauen als eine Lösung für ein Land, erspart aber genau das, was sonst passiert: zwei Systeme, zwei Datenbestände, keine gemeinsame Auswertung.</p>'],
    ['31.10.2024','branche','Warum kleine Betriebe zuletzt digitalisieren','Nicht aus Unwillen, sondern weil die Angebote auf Konzerne zugeschnitten sind. Das lässt sich ändern.','i-hero','<p>Nicht aus Unwillen. Sondern weil die Angebote auf andere Größen zugeschnitten sind.</p> <h3>Das Grundproblem</h3> <p>Systeme für große Betriebe bringen Funktionen mit, die ein Fünf-Personen-Betrieb nie braucht, und den Einrichtungsaufwand mit. Systeme für Kleinstbetriebe hören genau dort auf, wo es interessant wird.</p> <p>Dazwischen liegt eine Lücke, in der viele Handwerks- und Handelsbetriebe sitzen.</p> <blockquote>Sie sind zu groß für Tabellen und zu klein für Unternehmenssoftware.</blockquote> <h3>Was daraus folgt</h3> <p>Man muss dort anfangen, wo es weh tut, nicht bei der vollständigen Abbildung aller Prozesse. Und der Einstieg muss ohne Beratungsprojekt möglich sein.</p>'],
    ['17.10.2024','fach','Vom Auftrag zur Rechnung ohne Medienbruch','Wo Daten das Format wechseln, entstehen Fehler. Ein durchgehender Weg spart mehr als jede Einzeloptimierung.','i-n1','<p>Überall dort, wo Daten das Format wechseln, entstehen Fehler. Vom Zettel in die Maske, aus der Maske in die Tabelle, aus der Tabelle ins Rechnungsprogramm.</p> <h3>Ein durchgehender Weg</h3> <p>Der Auftrag entsteht bei der Annahme und trägt sich durch: Bearbeitung, Material, Abschluss, Rechnung. Was am Anfang erfasst wurde, steht am Ende auf dem Beleg.</p> <p>Das spart mehr als jede Einzeloptimierung, weil es nicht einen Schritt beschleunigt, sondern mehrere Schritte entfallen lässt.</p>'],
    ['03.10.2024','produkt','Benachrichtigungen, die von selbst rausgehen','Ohne dass jemand daran denken muss, der häufigste Grund, warum Kunden nachfragen.','i-kontakt','<p>Die Nachricht „Ihr Auftrag ist fertig" wird selten vergessen, weil sie unwichtig wäre. Sie wird vergessen, weil sie zusätzlich zur eigentlichen Arbeit anfällt.</p> <h3>An den Vorgang gekoppelt</h3> <p>Wird der Auftrag geschlossen, geht die Nachricht raus. Niemand muss daran denken, niemand muss eine Nummer heraussuchen.</p> <p>Das ist der häufigste Grund, warum Kunden anrufen, und der am einfachsten abzustellende.</p>'],
    ['19.09.2024','fach','Was eine gute Übergabe ausmacht','Unterschrift, Foto, Zeitstempel. Warum der Nachweis wichtiger wird, je länger er zurückliegt.','i-trans','<p>Solange alles gut geht, interessiert sich niemand für die Dokumentation. Sie wird wichtig, wenn etwas strittig ist.</p> <h3>Drei Bestandteile</h3> <ul> <li>Unterschrift des Empfängers</li> <li>Foto der übergebenen Ware</li> <li>Zeitstempel und Ort</li> </ul> <p>Zusammen ergibt das einen Nachweis, der auch Wochen später trägt. Ohne diese drei Angaben steht Aussage gegen Aussage.</p>'],
    ['05.09.2024','branche','Personalmangel und Software','Wenn Hände fehlen, zählt jede gesparte Minute doppelt. Wo Systeme wirklich entlasten, und wo nicht.','i-p-rad','<p>Wenn Hände fehlen, zählt jede gesparte Minute doppelt. Software kann Personal nicht ersetzen, aber sie kann verhindern, dass vorhandenes Personal Zeit mit Übertragen verbringt.</p> <h3>Wo sie entlastet</h3> <p>Bei allem, was mehrfach angefasst wird: doppelte Erfassung, Statusauskünfte, Terminvereinbarungen, Nachrechnen von Zeiten.</p> <h3>Wo nicht</h3> <p>Bei der eigentlichen Arbeit. Ein Rad wird nicht schneller repariert, weil die Software gut ist. Wer das verspricht, verkauft Ihnen etwas.</p>'],
    ['22.08.2024','fach','Schulung vor Ort statt Videokurs','Warum wir zu den Betrieben fahren, obwohl es teurer ist.','i-schulung','<p>Eine Aufzeichnung ist billiger und wirkt gründlicher. Trotzdem fahren wir hin.</p> <h3>Warum</h3> <p>Im Video sieht man das System. Vor Ort sieht man den Betrieb. Erst dort zeigt sich, dass die Annahme am Stehtisch passiert, dass der Drucker zwei Räume weiter steht und dass eine Mitarbeiterin nie ein Tablet benutzt hat.</p> <p>Diese Dinge entscheiden darüber, ob ein System angenommen wird. Sie stehen in keiner Anleitung.</p>'],
    ['08.08.2024','meldung','samoLabs nimmt Arbeit an eigenen Produkten auf','Aus der Auftragsentwicklung heraus entstehen die ersten eigenen Systeme für den Mittelstand.','i-hero','<p>Nach Jahren in der Auftragsentwicklung entstehen die ersten eigenen Systeme. Der Anlass ist einfach: Dieselben Probleme tauchen in unterschiedlichen Betrieben immer wieder auf.</p> <h3>Der Unterschied</h3> <p>Auftragsarbeit endet mit der Übergabe. Ein eigenes Produkt bleibt in der Verantwortung. Es wird betrieben, gepflegt und weiterentwickelt, solange Kunden damit arbeiten.</p> <p>Das verändert die Art zu bauen. Was man selbst betreibt, baut man robuster.</p>']
  ];

  var KAT_NAME = { meldung:'Aus dem Haus', produkt:'Neue Funktion', fach:'Fachbeitrag', branche:'Aus der Branche' };
  // Dokument-Symbol vor dem Datum der Beitragskacheln
  var DOK_SVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>';
  function beitragKarte(b){
    var nr = BEITRAEGE.indexOf(b);
    return '<a class="card" href="#" data-go="beitrag:' + nr + '"><div class="ph ' + b[4] + '"></div><div class="cb">' +
      '<span class="n-d">' + DOK_SVG + ' ' + b[0].split('.').join(' / ') + '</span>' +
      '<h3>' + b[2] + '</h3></div></a>';
  }

  // Lesedauer aus der Wortzahl des Volltexts: 180 Woerter je Minute, mindestens 2
  function lesedauer(html){
    var worte = String(html || '').replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
    return Math.max(2, Math.round(worte / 180));
  }

  // Einzelnen Beitrag anzeigen
  function fuelleBeitrag(nr){
    var b = BEITRAEGE[parseInt(nr, 10)];
    if (!b) return false;
    document.getElementById('b-crumb').textContent = b[2].length > 40 ? b[2].slice(0, 38) + '\u2026' : b[2];
    // Kicker ueber der Ueberschrift entfaellt; die Rubrik steht in der Meta-Zeile
    var kicker = document.getElementById('b-kat');
    if (kicker) kicker.textContent = '';
    document.getElementById('b-titel').textContent = b[2];
    // Meta-Zeile: Datum, Rubrik, Lesedauer
    var meta = document.getElementById('b-meta');
    if (meta) {
      var teile = ['<span>' + b[0].split('.').join(' / ') + '</span>'];
      if (KAT_NAME[b[1]]) teile.push('<span class="b-meta-tag">' + KAT_NAME[b[1]] + '</span>');
      teile.push('<span>' + lesedauer(b[5]) + ' Minuten Lesezeit</span>');
      meta.innerHTML = teile.join('');
    }
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
    var BASIS = 2842;                          // Grundstock "Aufträge über unsere Systeme"
    var start = new Date(2026, 5, 1);          // Nullpunkt für den kumulierten Zuwachs
    var tag = new Date(start), heute = new Date();
    heute.setHours(0, 0, 0, 0);
    var summe = 0;
    while (tag < heute) {                       // abgeschlossene Werktage: stabil pro Tag
      var wt = tag.getDay();
      if (wt >= 1 && wt <= 5) {
        var kennung = tag.getFullYear() * 10000 + (tag.getMonth() + 1) * 100 + tag.getDate();
        var streu = Math.abs(Math.sin(kennung) * 10000);
        summe += 8 + Math.floor((streu - Math.floor(streu)) * 17);   // 8–24 je Werktag
      }
      tag.setDate(tag.getDate() + 1);
    }
    // Heutiger Zuwachs NUR während der Geschäftszeiten (Mo–Sa, 08–20 Uhr), proportional.
    var jetzt = new Date(), wtH = jetzt.getDay(), heuteZuwachs = 0;
    if (wtH >= 1 && wtH <= 6) {
      var min = jetzt.getHours() * 60 + jetzt.getMinutes(), auf = 480, zu = 1200;
      if (min > auf) heuteZuwachs = Math.floor(Math.min(1, (min - auf) / (zu - auf)) * 34);
    }
    // Kleine Streuung pro Seitenaufruf, damit die Zahl „lebt" (nur additiv).
    return BASIS + summe + heuteZuwachs + Math.floor(Math.random() * 4);
  }
  (function(){
    document.querySelectorAll('[data-auftraege]').forEach(function(el){
      el.setAttribute('data-n', String(auftragsstand()));
      el.textContent = '0';
    });
  })();


  // ── Fallblattanzeige: Zahl als einzelne Ziffern-Kacheln rendern ──
  // Jede Ziffer bekommt eine Kachel (.zk); Punkt und Plus stehen ohne
  // Kachel dazwischen (.zt). Wird vom Zaehler pro Frame aufgerufen.
  function setzeKachelZiffern(el, text){
    var html = '', i, z;
    for (i = 0; i < text.length; i++) {
      z = text.charAt(i);
      html += (z >= '0' && z <= '9')
        ? '<span class="zk">' + z + '</span>'
        : '<span class="zt">' + z + '</span>';
    }
    el.innerHTML = html;
  }
  // Startzustand: den vorhandenen Text sofort in Kacheln legen, damit
  // die Anzeige auch vor bzw. ohne Zaehler-Animation Kacheln zeigt.
  document.querySelectorAll('.zahl-kacheln').forEach(function(el){
    setzeKachelZiffern(el, el.textContent.trim());
  });


  // ── Oberflächentexte je Sprache ──
  // Fließtexte bleiben deutsch; darauf weist der Balken unter dem Kopf hin.
  var TEXTE = {
  "en": {
    "nav.partner": "Partners",
    "nav.karriere": "Careers",
    "nav.entwickler": "Integrations",
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
    "fuss.ki": "Texts on this website are produced with the support of generative AI.",
    "btn.mehr": "Learn more",
    "btn.kontakt": "Get in touch",
    "btn.alle_produkte": "All products",
    "btn.alle_meldungen": "All news"
  },
  "pl": {
    "nav.partner": "Partnerzy",
    "nav.karriere": "Kariera",
    "nav.entwickler": "Integracje",
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
    "fuss.ki": "Teksty na tej stronie powstają przy wsparciu generatywnej sztucznej inteligencji.",
    "btn.mehr": "Dowiedz się więcej",
    "btn.kontakt": "Skontaktuj się z nami",
    "btn.alle_produkte": "Wszystkie produkty",
    "btn.alle_meldungen": "Wszystkie wiadomości"
  },
  "bs": {
    "nav.partner": "Partneri",
    "nav.karriere": "Karijera",
    "nav.entwickler": "Integracije",
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
    "fuss.ki": "Tekstovi na ovoj stranici nastaju uz pomoć generativne vještačke inteligencije.",
    "btn.mehr": "Saznajte više",
    "btn.kontakt": "Kontaktirajte nas",
    "btn.alle_produkte": "Svi proizvodi",
    "btn.alle_meldungen": "Sve vijesti"
  },
  "fi": {
    "nav.partner": "Kumppanit",
    "nav.karriere": "Ura",
    "nav.entwickler": "Integraatiot",
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
    "fuss.ki": "Tämän sivuston tekstit laaditaan generatiivisen tekoälyn tuella.",
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
    fi: ['Suomi', 'Suomeksi', 'fi'],
    en: ['International', 'English', 'en']
  };
  var HINWEIS = {
    pl: 'Ta strona jest obecnie dostępna tylko w języku niemieckim. Chętnie odpowiemy po polsku. Napisz do nas.',
    bs: 'Ova stranica trenutno je dostupna samo na njemačkom. Rado odgovaramo i na bosanskom. Pišite nam.',
    fi: 'Tämä sivusto on toistaiseksi saatavilla vain saksaksi. Vastaamme mielellämme myös suomeksi.',
    en: 'Detailed content is currently available in German only. Write to us in English. We answer in English.'
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
      e.stopPropagation(); // Klick ins Panel (z. B. Suchfeld) darf es nicht schließen
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
        : '<p class="suche-leer">Nichts gefunden. Fragen Sie uns direkt. Wir antworten auch auf ungewöhnliche Fragen.</p>';
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
      // Optionales drittes Feld: inline-SVG-Icon vor der Überschrift
      return '<div class="q" style="border-top-color:var(--accent)">' +
             (x[2] ? '<span class="q-ic" aria-hidden="true">' + x[2] + '</span>' : '') +
             '<h4>' + x[0] + '</h4><p style="color:var(--mid)">' + x[1] + '</p></div>';
    }).join('');
    document.getElementById('d-alltag').innerHTML = d.alltag.map(function(x){
      return '<div class="card"><div class="cb"><h3>' + x[0] + '</h3><p>' + x[1] + '</p></div></div>';
    }).join('');

    // Nutzen-Spalten (Hub-Muster)
    var nutzen = document.getElementById('d-nutzen');
    if (d.spalten && d.spalten.length) {
      document.getElementById('d-spalten').innerHTML = d.spalten.map(function(s){
        return '<div class="q" style="border-top-color:var(--accent)"><h4>' + s[0] +
               '</h4><p style="color:var(--mid)">' + s[1] + '</p></div>';
      }).join('');
      nutzen.hidden = false;
    } else { nutzen.hidden = true; }

    // Portfolio: Kacheln in die Produktebene
    var pfEl = document.getElementById('d-portfolio');
    if (d.portfolio && d.portfolio.length) {
      document.getElementById('d-portfolio-h').textContent = d.ph2 || 'Unsere Lösungen dafür';
      document.getElementById('d-portfolio-kacheln').innerHTML = d.portfolio.map(function(k){
        for (var i = 0; i < PRODUKTE.length; i++) if (PRODUKTE[i][6] === k) return produktKarte(PRODUKTE[i], true);
        return '';
      }).join('');
      pfEl.hidden = false;
    } else { pfEl.hidden = true; }

    // Aus der Praxis: der Kundenbericht steht nur auf den Hubs, zu denen er fachlich passt
    var pxEl = document.getElementById('d-praxis');
    if (pxEl) pxEl.hidden = !d.praxis;

    // Themenblöcke im Wechsellayout
    var tiefe = document.getElementById('d-tiefe');
    if (d.bloecke && d.bloecke.length) {
      var mitBild = 0;
      document.getElementById('d-bloecke').innerHTML = d.bloecke.map(function(b){
        var text = '<div><h2 style="font-size:clamp(21px,2.1vw,27px)">' + b[0] + '</h2><p class="sub" style="margin-top:16px">' + b[1] + '</p></div>';
        // Ohne Bildschluessel: ruhiger Textabschnitt statt erzwungener Bebilderung
        if (!b[2]) return '<div class="block-text rv">' + text + '</div>';
        var bildErst = mitBild++ % 2 === 1;
        var bild = '<div class="imgset"><span class="sq sq-1"></span><span class="sq sq-2"></span><div class="ph ' + b[2] + '"></div></div>';
        return '<div class="split rv" style="margin-bottom:64px">' + (bildErst ? bild + text : text + bild) + '</div>';
      }).join('');
      tiefe.hidden = false;
    } else { tiefe.hidden = true; }

    // Häufige Fragen
    var faq = document.getElementById('d-faq');
    if (d.fragen && d.fragen.length) {
      document.getElementById('d-fragen').innerHTML = d.fragen.map(function(f, i){
        return '<details' + (i === 0 ? ' open' : '') + '><summary>' + f[0] + '</summary><p>' + f[1] + '</p></details>';
      }).join('');
      faq.hidden = false;
    } else { faq.hidden = true; }

    var name = d.marke ? d.marke[0] + d.marke[1] : d.titel;
    document.getElementById('d-formtitel').textContent = 'Passt ' + name + ' zu Ihrem Betrieb?';
    document.getElementById('d-vorbelegt').textContent = name;

    // Verwandte Inhalte aus derselben Rubrik
    var imPortfolio = function(k){ return d.portfolio && d.portfolio.indexOf(k) !== -1; };
    var verwandt = Object.keys(DETAIL).filter(function(k){
      return k !== schluessel && DETAIL[k].ober === d.ober && !imPortfolio(k);
    }).slice(0, 4);
    if (d.produkt && !imPortfolio(d.produkt)) verwandt = [d.produkt].concat(verwandt.filter(function(k){ return k !== d.produkt; })).slice(0, 4);
    if (verwandt.length < 4) {
      verwandt = verwandt.concat(Object.keys(DETAIL).filter(function(k){
        return k !== schluessel && verwandt.indexOf(k) === -1 && !imPortfolio(k);
      }).slice(0, 4 - verwandt.length));
    }
    // Optional: eigene Reihenfolge je Eintrag (verwandt:[...]). Die genannten
    // Schluessel stehen vorn, der Rest fuellt die Kachelreihe wie bisher auf.
    if (d.verwandt && d.verwandt.length) {
      verwandt = d.verwandt.concat(verwandt.filter(function(k){
        return d.verwandt.indexOf(k) === -1;
      })).slice(0, 4);
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

  // Navigation als echten Verlaufseintrag ablegen (pushState), damit der Zurueck-
  // Button funktioniert. Frueher wurde replaceState benutzt. Dadurch gab es keinen
  // Eintrag, zu dem "Zurueck" haette springen koennen (Bug: aus #detail:… kam man
  // nicht mehr zurueck). Nur schreiben, wenn sich das Ziel tatsaechlich aendert.
  function setzeVerlauf(wohin){
    var neu = (wohin === 'start') ? location.pathname : '#' + wohin;
    var jetzt = location.hash || location.pathname;
    if (neu !== jetzt) history.pushState(null, '', neu);
  }
  document.addEventListener('click', function(e){
    var ziel = e.target.closest('[data-go]');
    if (!ziel) return;
    e.preventDefault();
    var wohin = ziel.getAttribute('data-go');
    if (wohin.indexOf('detail:') === 0) {
      if (fuelleDetail(wohin.slice(7))) { zeige('detail'); setzeVerlauf(wohin); messe('detail/' + wohin.slice(7)); return; }
    }
    if (wohin.indexOf('beitrag:') === 0) {
      if (fuelleBeitrag(wohin.slice(8))) { zeige('beitrag'); setzeVerlauf(wohin); messe('beitrag/' + wohin.slice(8)); return; }
    }
    zeige(wohin);
    setzeVerlauf(wohin);
    messe(wohin === 'start' ? '' : wohin);
    var abschnitt = ziel.getAttribute('data-scroll');
    if (abschnitt) setTimeout(function(){
      var el = document.getElementById(abschnitt);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  });

  // Adresszeile auswerten, damit Verweise von den Rechtsseiten ankommen
  function ausHash(vonEvent){
    var wohin = (location.hash || '').replace(/^#/, '');
    // Start nur bei echter Rueck-Navigation (Event) neu rendern, NICHT beim initialen
    // Aufruf, da zu diesem Zeitpunkt noch nicht alle Abhaengigkeiten initialisiert sind.
    if (!wohin) { if (vonEvent) zeige('start'); return; }
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
  window.addEventListener('hashchange', function(){ ausHash(true); });
  window.addEventListener('popstate', function(){ ausHash(true); });   // Zurueck/Vorwaerts-Navigation abfangen
  ausHash();
  messe((location.hash || '').replace(/^#/, '').replace(':', '/'));

  // ── Mega-Menü ──
  var punkte = Array.prototype.slice.call(document.querySelectorAll('.mi'));
  // Vorhang: dunkelt den Seitenrest ab, solange ein Menuepunkt offen ist
  var menueVorhang = document.getElementById('menue-vorhang');
  function vorhangSchalten(){
    if (!menueVorhang) return;
    var offen = (punkte || []).some(function(p){ return p.classList.contains('open'); });
    menueVorhang.classList.toggle('an', offen);
  }
  function schliesseMenues(){
    (punkte || []).forEach(function(p){
      p.classList.remove('open');
      p.querySelector('button').setAttribute('aria-expanded','false');
    });
    document.getElementById('menu').classList.remove('mob');
    vorhangSchalten();
  }
  punkte.forEach(function(p){
    var b = p.querySelector('button');
    b.addEventListener('click', function(e){
      e.stopPropagation();
      var ziel = b.getAttribute('data-go');
      // Mobil: Tab führt direkt zur Übersichtsseite, statt nur das Akkordeon zu öffnen.
      if (window.innerWidth <= 1080 && ziel) { schliesseMenues(); zeige(ziel); setzeVerlauf(ziel); return; }
      var offen = p.classList.contains('open');
      punkte.forEach(function(x){ x.classList.remove('open'); x.querySelector('button').setAttribute('aria-expanded','false'); });
      if (!offen) { p.classList.add('open'); b.setAttribute('aria-expanded','true'); }
      vorhangSchalten();
    });
    p.addEventListener('mouseenter', function(){
      if (window.innerWidth <= 1080) return;
      clearTimeout(p._zu);
      punkte.forEach(function(x){ if (x !== p) { clearTimeout(x._zu); x.classList.remove('open'); } });
      p.classList.add('open');
      vorhangSchalten();
    });
    p.addEventListener('mouseleave', function(){
      if (window.innerWidth <= 1080) return;
      p._zu = setTimeout(function(){ p.classList.remove('open'); vorhangSchalten(); }, 320);
    });
  });
  document.addEventListener('click', function(e){
    // Klicks auf den Burger oder INNERHALB des Menüs dürfen es nicht sofort wieder
    // schließen (sonst lässt sich das Mobil-Menü gar nicht öffnen).
    if (e.target.closest('#burger') || e.target.closest('#menu')) return;
    schliesseMenues();
  });
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
      nums.forEach(function(e){
        var n = parseInt(e.getAttribute('data-n'), 10);
        var text = n >= 1000 ? n.toLocaleString('de-DE') : e.getAttribute('data-n');
        if (e.classList.contains('zahl-kacheln')) setzeKachelZiffern(e, text);
        else e.textContent = text;
      });
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
          var text = wert >= 1000 ? wert.toLocaleString('de-DE') : String(wert);
          if (el.classList.contains('zahl-kacheln')) setzeKachelZiffern(el, text);
          else el.textContent = text;
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

  // ── Servicezeile: Aufklapp-Menü "Über samoLabs" ──
  (function(){
    var menue = document.getElementById('ueber-menue');
    if (!menue) return;
    var knopf = document.getElementById('ueber-menue-knopf');
    knopf.addEventListener('click', function(e){
      e.stopPropagation();
      var lw = document.getElementById('land-waehler');
      if (lw) lw.classList.remove('auf');
      var lk = document.getElementById('land-knopf');
      if (lk) lk.setAttribute('aria-expanded', 'false');
      var auf = menue.classList.toggle('auf');
      knopf.setAttribute('aria-expanded', auf ? 'true' : 'false');
    });
    function zu(){ menue.classList.remove('auf'); knopf.setAttribute('aria-expanded', 'false'); }
    document.addEventListener('click', zu);
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') zu(); });
  })();

  // ── Länderwahl-Panel: unter dem Auslöser ausrichten, Suchfeld filtert Zeilen ──
  (function(){
    var liste = document.getElementById('land-liste');
    if (!liste || !liste.classList.contains('land-flaeche')) return;
    var knopf = document.getElementById('land-knopf');
    var feld = document.getElementById('land-suche');
    function filterWeg(){
      if (feld) feld.value = '';
      liste.querySelectorAll('button[data-land]').forEach(function(b){ b.hidden = false; });
    }
    if (knopf) knopf.addEventListener('click', function(){
      var um = document.getElementById('ueber-menue');
      if (um) um.classList.remove('auf');
      var uk = document.getElementById('ueber-menue-knopf');
      if (uk) uk.setAttribute('aria-expanded', 'false');
      liste.style.top = Math.round(knopf.getBoundingClientRect().bottom + 5) + 'px';
      filterWeg(); // Panel öffnet immer ungefiltert
    });
    if (!feld) return;
    feld.addEventListener('input', function(){
      var frage = feld.value.trim().toLowerCase();
      liste.querySelectorAll('button[data-land]').forEach(function(b){
        b.hidden = frage !== '' && b.textContent.toLowerCase().indexOf(frage) === -1;
      });
    });
    liste.addEventListener('click', function(e){
      if (!e.target.closest('button[data-land]')) return;
      filterWeg();
    });
  })();

  // ── Pfeiltasten der Karussell-Reihen ───────────────────────────
  // Jede .rail bekommt zwei Tasten. Die Huelle entsteht per JS, damit das Markup
  // unberuehrt bleibt und weitere Reihen die Pfeile automatisch mitbringen.
  (function(){
    var PFEIL_ZURUECK = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18 9 12l6-6"/></svg>';
    var PFEIL_WEITER  = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';

    function railTaste(klasse, beschriftung, zeichen){
      var t = document.createElement('button');
      t.type = 'button';
      t.className = 'rail-pfeil ' + klasse;
      t.setAttribute('aria-label', beschriftung);
      t.innerHTML = zeichen;
      return t;
    }

    function railPfeile(rail){
      if (!rail.parentNode || rail.parentNode.classList.contains('rail-huelle')) return;
      var huelle = document.createElement('div');
      huelle.className = 'rail-huelle';
      rail.parentNode.insertBefore(huelle, rail);
      huelle.appendChild(rail); // Tasten liegen NEBEN der Reihe, sonst scrollen sie mit
      var zurueck = railTaste('rail-zurueck', 'Eine Karte zurück', PFEIL_ZURUECK);
      var weiter  = railTaste('rail-weiter',  'Eine Karte weiter', PFEIL_WEITER);
      huelle.appendChild(zurueck);
      huelle.appendChild(weiter);

      // Ein Klick bewegt genau eine Kartenbreite plus Abstand
      function schritt(){
        var karte = rail.firstElementChild;
        var breite = karte ? karte.getBoundingClientRect().width : rail.clientWidth * .8;
        var stil = getComputedStyle(rail);
        var abstand = parseFloat(stil.columnGap);
        if (!(abstand >= 0)) abstand = parseFloat(stil.gap);
        if (!(abstand >= 0)) abstand = 24;
        return Math.max(1, Math.round(breite + abstand));
      }
      // Am Anfang, am Ende und ohne Ueberlauf wird die jeweilige Taste abgeschaltet
      function stand(){
        var rest = rail.scrollWidth - rail.clientWidth;
        var ueberlauf = rest > 2;
        zurueck.disabled = !ueberlauf || rail.scrollLeft <= 1;
        weiter.disabled  = !ueberlauf || rail.scrollLeft >= rest - 1;
      }
      function fahre(richtung){
        rail.scrollBy({ left: richtung * schritt(), behavior: reduced ? 'auto' : 'smooth' });
      }
      zurueck.addEventListener('click', function(){ fahre(-1); });
      weiter.addEventListener('click', function(){ fahre(1); });

      var laeuft = false;
      rail.addEventListener('scroll', function(){
        if (laeuft) return;
        laeuft = true;
        requestAnimationFrame(function(){ laeuft = false; stand(); });
      }, { passive: true });
      window.addEventListener('resize', stand);
      window.addEventListener('load', stand); // nachgeladene Bilder aendern die Breite
      stand();
    }

    document.querySelectorAll('.rail').forEach(railPfeile);
  })();
})();
