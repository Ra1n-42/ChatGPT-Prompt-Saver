# ChatGPT-Prompt-Saver

Eine einfache Chrome-Erweiterung, mit der du Text speichern und direkt in das ChatGPT-Eingabefeld einfügen kannst. Ideal für wiederverwendbare Prompts, Notizen oder Ideen.

## ✨ Features

- 📝 Textfeld mit Speichern-Funktion (persistent)
- 📤 "Post it" Button fügt Text direkt ins ChatGPT-Textfeld ein
- 🧠 Funktioniert mit dem ProseMirror-Editor von chat.openai.com
- ⚡ Schneller Zugriff über das Chrome-Erweiterungsmenü

## 🔧 Installation (manuell in Chrome)

1. **Repository klonen oder ZIP herunterladen**  
    Lade dieses Repository als ZIP-Datei herunter oder klone es mit:

    ```bash
    git clone https://github.com/Ra1n-42/ChatGPT-Prompt-Saver.git
    ```
2. **Chrome öffnen und zu den Erweiterungen gehen**  
    Öffne `chrome://extensions/` in deinem Chrome-Browser.

3. **Entwicklermodus aktivieren**  
    Aktiviere oben rechts den Entwicklermodus (Developer mode).

4. **Entpackte Erweiterung laden**  
    Klicke auf "Entpackte Erweiterung laden" und wähle den Ordner aus, in dem sich die Datei `manifest.json` befindet.

5. **Fertig!**  
    Die Erweiterung sollte nun in deiner Symbolleiste erscheinen. Klicke darauf, um deine gespeicherten Prompts zu verwalten oder direkt in ChatGPT einzufügen.

## 📌 Hinweis 
Diese Erweiterung funktioniert nur auf der Seite https://chat.openai.com. Stelle sicher, dass du dich auf dieser Seite befindest, wenn du den "Post it" Button verwendest.

- Style kann in der `popup.css` geändert werden.

## 🖼️ Screenshot
![Text in ChatGPT eingefügt](public/image.png)