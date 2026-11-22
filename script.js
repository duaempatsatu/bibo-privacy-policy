// Switches the page between English and Indonesian.
// The page opens in the language in the address (#id or #en), else the
// browser's language, else English. Without JavaScript both show (see the
// noscript style in index.html).

const buttons = document.querySelectorAll("[data-set-lang]");
const blocks = document.querySelectorAll("[data-lang]");

function languageToOpenIn() {
  const fromAddress = location.hash.replace("#", "");
  if (fromAddress === "en" || fromAddress === "id") return fromAddress;
  return navigator.language.toLowerCase().startsWith("id") ? "id" : "en";
}

function show(language) {
  document.documentElement.lang = language;
  for (const block of blocks) {
    block.hidden = block.dataset.lang !== language;
  }
  for (const button of buttons) {
    const active = button.dataset.setLang === language;
    button.setAttribute("aria-pressed", String(active));
  }
  document.title =
    language === "id" ? "Kebijakan Privasi Bibo" : "Bibo Privacy Policy";
}

for (const button of buttons) {
  button.addEventListener("click", () => {
    const language = button.dataset.setLang;
    history.replaceState(null, "", "#" + language);
    show(language);
  });
}

show(languageToOpenIn());
