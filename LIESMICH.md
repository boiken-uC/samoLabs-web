# Sicherung vom 22.11.2026

Der Zweig `deploy-ohne-repodateien` liess sich nicht normal pushen, weil der GitHub-Zugang auf samosrv kein workflow-Recht hat und der Zweig eine Datei unter .github/workflows aendert. Damit der Stand trotzdem nicht nur auf samosrv liegt, steckt er hier als Git-Bundle.

Wiederherstellen in einem Klon dieses Repos:

    git fetch origin
    git fetch deploy-ohne-repodateien.bundle deploy-ohne-repodateien:deploy-ohne-repodateien

Das Bundle ist inkrementell und setzt Commits voraus, die schon auf GitHub liegen. Sobald der Zugang das workflow-Recht hat, den Zweig normal pushen und diesen Sicherungszweig loeschen.
