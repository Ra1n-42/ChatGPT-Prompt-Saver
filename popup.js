// popup.js

// Beim Laden gespeicherten Text abrufen
document.addEventListener('DOMContentLoaded', () => {
  const noteElement = document.getElementById('note');

  // Lade gespeicherte Notiz
  chrome.storage.local.get('savedNote', (data) => {
    noteElement.value = data.savedNote || '';
  });

  // Speichern-Button
  document.getElementById('saveBtn').addEventListener('click', () => {
    const text = noteElement.value;
    chrome.storage.local.set({ savedNote: text });
  });

  // Post-it-Button
  document.getElementById('postBtn').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (text) => {
        const editor = document.querySelector('div.ProseMirror');

        if (editor && editor.isContentEditable) {
          editor.focus();

          // Erzeuge Textknoten
          const textNode = document.createTextNode(text);

          // Auswahl setzen und Text einfügen
          const selection = window.getSelection();
          selection.removeAllRanges();
          const range = document.createRange();
          range.selectNodeContents(editor);
          range.collapse(false); // ans Ende setzen
          range.insertNode(textNode);

          // Cursor nach dem eingefügten Text setzen
          range.setStartAfter(textNode);
          range.setEndAfter(textNode);
          selection.removeAllRanges();
          selection.addRange(range);

          // Input-Event dispatchen
          editor.dispatchEvent(new Event('input', { bubbles: true }));
        } else {
          alert('Editor nicht gefunden. Bitte öffne ChatGPT.');
        }
      },
      args: [noteElement.value]
    });
  });
});
