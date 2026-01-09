// app.js (v1: share + import/export + auto-tag; bookmarklet removed)
const STORAGE_KEY = "link_inbox_v1";

/** ---------- i18n ---------- **/
const I18N = {
  en: {
    appTitle: "Link Inbox",
    appSubtitle: "Save links fast. Tag them. Open & archive.",
    languageLabel: "Language",
    themeLabel: "Theme",
    exportBtn: "Export",
    importBtn: "Import",
    shareBtn: "Share",

    aboutBtn: "About",
    aboutTitle: "About this tool",
    aboutLead:
      "Link Inbox is a lightweight place to drop links you don’t want to lose. Save now — decide later.",
    aboutCommonTitle: "Common uses",
    aboutUseWatch: "Videos to watch later",
    aboutUseRead: "Articles to read",
    aboutUseBuy: "Products to compare or buy",
    aboutUseIdea: "Ideas & inspiration",
    aboutHowTitle: "How it works",
    aboutStep1: "Paste a link. The tag is auto-detected.",
    aboutStep2: "Add an optional note to remember why you saved it.",
    aboutStep3: "When you’re done, open it and archive or delete it.",
    aboutPrivacy:
      "Everything stays in your browser (local storage). No account, no tracking.",
    aboutGotItBtn: "Got it",

    addTitle: "Add a link",
    urlLabel: "URL",
    noteLabel: "Note (optional)",
    tagLabel: "Tag",
    addBtn: "Add",
    hint:
      "Tip: paste a link, press Enter to add. Tag is auto-detected — you can change it.",

    listTitle: "Your inbox",
    filterLabel: "Filter",
    clearArchivedBtn: "Clear archived",
    showArchivedBtn: "Show archived",
    hideArchivedBtn: "Hide archived",
    emptyState: "Nothing here yet — add your first link above.",

    exportTitle: "Export JSON",
    exportHelp: "Copy this JSON or download it as a file.",
    copyBtn: "Copy",
    downloadJsonBtn: "Download .json",

    shareTitle: "Share link",
    shareHelp: "Send this link to someone. They can import your shared list.",
    importShareTitle: "Import shared links?",
    importNowBtn: "Import",
    cancelBtn: "Cancel",

    statsActive: "Active",
    statsArchived: "Archived",

    tags: {
      all: "All",
      watch: "Watch",
      read: "Read",
      buy: "Buy",
      idea: "Idea",
      later: "Later",
    },

    actions: {
      open: "Open",
      archive: "Archive",
      unarchive: "Unarchive",
      delete: "Delete",
    },

    placeholders: {
      url: "https://…",
      note: "e.g., Try this recipe next weekend",
      search: "Search…",
    },

    errors: {
      invalidUrl: "Please enter a valid URL (starting with http:// or https://).",
      importFailed: "Import failed: invalid file.",
      copied: "Copied!",
      shareTooLarge:
        "Your list is too large to share via URL. Try Export instead.",
    },

    importShareInfo: (n) =>
      `This share link contains ${n} link(s). Import them into your inbox?`,
  },

  de: {
    appTitle: "Link-Inbox",
    appSubtitle: "Links schnell speichern, taggen, öffnen & archivieren.",
    languageLabel: "Sprache",
    themeLabel: "Design",
    exportBtn: "Export",
    importBtn: "Import",
    shareBtn: "Teilen",

    aboutBtn: "Info",
    aboutTitle: "Über dieses Tool",
    aboutLead:
      "Link-Inbox ist ein leichter Ort für Links, die du nicht verlieren willst. Jetzt speichern — später entscheiden.",
    aboutCommonTitle: "Typische Nutzung",
    aboutUseWatch: "Videos für später",
    aboutUseRead: "Artikel zum Lesen",
    aboutUseBuy: "Produkte vergleichen oder kaufen",
    aboutUseIdea: "Ideen & Inspiration",
    aboutHowTitle: "So funktioniert’s",
    aboutStep1: "Link einfügen. Der Tag wird automatisch erkannt.",
    aboutStep2:
      "Optional eine Notiz hinzufügen, warum du ihn gespeichert hast.",
    aboutStep3:
      "Wenn du fertig bist: öffnen und archivieren oder löschen.",
    aboutPrivacy:
      "Alles bleibt in deinem Browser (Local Storage). Kein Konto, kein Tracking.",
    aboutGotItBtn: "Alles klar",

    addTitle: "Link hinzufügen",
    urlLabel: "URL",
    noteLabel: "Notiz (optional)",
    tagLabel: "Tag",
    addBtn: "Hinzufügen",
    hint:
      "Tipp: Link einfügen und Enter drücken. Tag wird automatisch erkannt — du kannst ihn ändern.",

    listTitle: "Deine Inbox",
    filterLabel: "Filter",
    clearArchivedBtn: "Archiv löschen",
    showArchivedBtn: "Archiv anzeigen",
    hideArchivedBtn: "Archiv ausblenden",
    emptyState: "Noch nichts da — füge oben deinen ersten Link hinzu.",

    exportTitle: "JSON exportieren",
    exportHelp: "Kopiere das JSON oder lade es als Datei herunter.",
    copyBtn: "Kopieren",
    downloadJsonBtn: "Download .json",

    shareTitle: "Link teilen",
    shareHelp:
      "Sende diesen Link an jemanden. Die Person kann die Liste importieren.",
    importShareTitle: "Geteilte Links importieren?",
    importNowBtn: "Importieren",
    cancelBtn: "Abbrechen",

    statsActive: "Aktiv",
    statsArchived: "Archiv",

    tags: {
      all: "Alle",
      watch: "Ansehen",
      read: "Lesen",
      buy: "Kaufen",
      idea: "Idee",
      later: "Später",
    },

    actions: {
      open: "Öffnen",
      archive: "Archivieren",
      unarchive: "Wiederherstellen",
      delete: "Löschen",
    },

    placeholders: {
      url: "https://…",
      note: "z. B. Nächstes Wochenende ausprobieren",
      search: "Suchen…",
    },

    errors: {
      invalidUrl:
        "Bitte eine gültige URL eingeben (beginnend mit http:// oder https://).",
      importFailed: "Import fehlgeschlagen: ungültige Datei.",
      copied: "Kopiert!",
      shareTooLarge:
        "Die Liste ist zu groß für einen Share-Link. Bitte stattdessen Export nutzen.",
    },

    importShareInfo: (n) =>
      `Dieser Share-Link enthält ${n} Link(s). In deine Inbox importieren?`,
  },

  pt: {
    appTitle: "Caixa de Links",
    appSubtitle: "Salve links rápido. Marque. Abra e arquive.",
    languageLabel: "Idioma",
    themeLabel: "Tema",
    exportBtn: "Exportar",
    importBtn: "Importar",
    shareBtn: "Compartilhar",

    aboutBtn: "Sobre",
    aboutTitle: "Sobre esta ferramenta",
    aboutLead:
      "O Link Inbox é um lugar leve para guardar links que você não quer perder. Salve agora — decida depois.",
    aboutCommonTitle: "Usos comuns",
    aboutUseWatch: "Vídeos para ver depois",
    aboutUseRead: "Artigos para ler",
    aboutUseBuy: "Produtos para comparar ou comprar",
    aboutUseIdea: "Ideias e inspiração",
    aboutHowTitle: "Como funciona",
    aboutStep1: "Cole um link. A tag é detectada automaticamente.",
    aboutStep2:
      "Adicione uma nota (opcional) para lembrar por que salvou.",
    aboutStep3: "Quando terminar: abra e arquive ou exclua.",
    aboutPrivacy:
      "Tudo fica no seu navegador (local storage). Sem conta, sem rastreamento.",
    aboutGotItBtn: "Entendi",

    addTitle: "Adicionar link",
    urlLabel: "URL",
    noteLabel: "Nota (opcional)",
    tagLabel: "Tag",
    addBtn: "Adicionar",
    hint:
      "Dica: cole um link e pressione Enter. A tag é detectada automaticamente — você pode mudar.",

    listTitle: "Sua caixa",
    filterLabel: "Filtro",
    clearArchivedBtn: "Limpar arquivados",
    showArchivedBtn: "Mostrar arquivados",
    hideArchivedBtn: "Ocultar arquivados",
    emptyState: "Ainda não há nada — adicione seu primeiro link acima.",

    exportTitle: "Exportar JSON",
    exportHelp: "Copie este JSON ou faça download como arquivo.",
    copyBtn: "Copiar",
    downloadJsonBtn: "Baixar .json",

    shareTitle: "Link para compartilhar",
    shareHelp: "Envie este link para alguém. A pessoa pode importar sua lista.",
    importShareTitle: "Importar links compartilhados?",
    importNowBtn: "Importar",
    cancelBtn: "Cancelar",

    statsActive: "Ativos",
    statsArchived: "Arquivados",

    tags: {
      all: "Todos",
      watch: "Ver",
      read: "Ler",
      buy: "Comprar",
      idea: "Ideia",
      later: "Depois",
    },

    actions: {
      open: "Abrir",
      archive: "Arquivar",
      unarchive: "Restaurar",
      delete: "Excluir",
    },

    placeholders: {
      url: "https://…",
      note: "ex.: Testar esta receita no fim de semana",
      search: "Buscar…",
    },

    errors: {
      invalidUrl:
        "Por favor, insira uma URL válida (começando com http:// ou https://).",
      importFailed: "Falha ao importar: arquivo inválido.",
      copied: "Copiado!",
      shareTooLarge:
        "Sua lista é grande demais para compartilhar via link. Use Exportar.",
    },

    importShareInfo: (n) =>
      `Este link contém ${n} link(s). Importar para sua caixa?`,
  },
};

function dict() {
  return I18N[state.lang] || I18N.en;
}

/** ---------- DOM ---------- **/
const els = {
  lang: document.getElementById("lang"),
  theme: document.getElementById("theme"),

  url: document.getElementById("url"),
  note: document.getElementById("note"),
  tag: document.getElementById("tag"),
  addBtn: document.getElementById("addBtn"),

  filter: document.getElementById("filter"),
  search: document.getElementById("search"),
  toggleArchived: document.getElementById("toggleArchived"),
  clearArchived: document.getElementById("clearArchived"),

  list: document.getElementById("list"),
  emptyState: document.getElementById("emptyState"),
  countActive: document.getElementById("countActive"),
  countArchived: document.getElementById("countArchived"),

  exportBtn: document.getElementById("exportBtn"),
  exportDialog: document.getElementById("exportDialog"),
  exportText: document.getElementById("exportText"),
  closeExport: document.getElementById("closeExport"),
  copyExport: document.getElementById("copyExport"),
  downloadExport: document.getElementById("downloadExport"),

  importInput: document.getElementById("importInput"),

  shareBtn: document.getElementById("shareBtn"),
  shareDialog: document.getElementById("shareDialog"),
  shareText: document.getElementById("shareText"),
  closeShare: document.getElementById("closeShare"),
  copyShare: document.getElementById("copyShare"),

  importShareDialog: document.getElementById("importShareDialog"),
  closeImportShare: document.getElementById("closeImportShare"),
  cancelImportShare: document.getElementById("cancelImportShare"),
  confirmImportShare: document.getElementById("confirmImportShare"),
  importShareInfo: document.getElementById("importShareInfo"),
};

/** ---------- State ---------- **/
function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function defaultState() {
  return {
    lang: "en",
    theme: "minimal",
    showArchived: false,
    filterTag: "all",
    search: "",
    items: [],
  };
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const base = defaultState();

    const okLang = ["en", "de", "pt"].includes(parsed.lang)
      ? parsed.lang
      : base.lang;

    const allowedThemes = ["minimal", "cute", "cozy", "aurora", "sunset", "ocean", "paper"];
    const okTheme = allowedThemes.includes(parsed.theme) ? parsed.theme : base.theme;

    return {
      ...base,
      ...parsed,
      lang: okLang,
      theme: okTheme,
      showArchived: !!parsed.showArchived,
      filterTag: ["all", "watch", "read", "buy", "idea", "later"].includes(parsed.filterTag)
        ? parsed.filterTag
        : "all",
      search: typeof parsed.search === "string" ? parsed.search : "",
      items: Array.isArray(parsed.items)
        ? parsed.items
            .map((x) => ({
              id: x.id || uid(),
              url: typeof x.url === "string" ? x.url : "",
              note: typeof x.note === "string" ? x.note : "",
              tag: ["watch", "read", "buy", "idea", "later"].includes(x.tag) ? x.tag : "later",
              archived: !!x.archived,
              createdAt: Number.isFinite(x.createdAt) ? x.createdAt : Date.now(),
            }))
            .filter((x) => x.url)
        : base.items,
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/** ---------- Helpers ---------- **/
function isValidHttpUrl(v) {
  try {
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function hostOf(url) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/** ---------- Dialog helpers ---------- **/
function openDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "true");
}

function closeDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

/** ---------- About modal ---------- **/
const aboutBtn = document.getElementById("aboutBtn");
const aboutDialog = document.getElementById("aboutDialog");
const closeAbout = document.getElementById("closeAbout");
const closeAboutPrimary = document.getElementById("closeAboutPrimary");

aboutBtn?.addEventListener("click", () => openDialog(aboutDialog));
closeAbout?.addEventListener("click", () => closeDialog(aboutDialog));
closeAboutPrimary?.addEventListener("click", () => closeDialog(aboutDialog));

// Close when clicking outside the modal content
aboutDialog?.addEventListener("click", (e) => {
  const rect = aboutDialog.getBoundingClientRect();
  const clickedOutside =
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom;
  if (clickedOutside) closeDialog(aboutDialog);
});

/**
 * Auto-detect tag from URL using:
 * 1) path/query keywords (strong signals)
 * 2) known host mapping (fallback)
 */
function detectTagFromUrl(url) {
  try {
    const u = new URL(url);
    const host = u.host.replace(/^www\./, "").toLowerCase();
    const path = (u.pathname || "").toLowerCase();
    const query = (u.search || "").toLowerCase();
    const full = `${host}${path}${query}`;

    const hasAny = (arr) => arr.some((k) => full.includes(k));

    // BUY (strong signals)
    if (
      hasAny([
        "/cart",
        "/basket",
        "/checkout",
        "/order",
        "/orders",
        "/payment",
        "/pay",
        "/billing",
        "/product",
        "/products",
        "/p/",
        "/dp/",
        "/gp/product",
        "/sku",
        "/item/",
        "/store",
        "add-to-cart",
        "addtocart",
        "utm_medium=shopping",
        "gclid=",
      ])
    )
      return "buy";

    // WATCH (strong signals)
    if (
      hasAny([
        "/watch",
        "/video",
        "/videos",
        "/reel",
        "/reels",
        "/shorts",
        "/clip",
        "/clips",
        "/live",
        "/playlist",
        "watch?v=",
        "feature=share",
      ])
    )
      return "watch";

    // READ (strong signals)
    if (
      hasAny([
        "/blog",
        "/article",
        "/articles",
        "/story",
        "/stories",
        "/news",
        "/post",
        "/posts",
        "/docs",
        "/documentation",
        "/help",
        "/support",
        "/wiki",
        "/read",
      ])
    )
      return "read";

    // IDEA (strong signals)
    if (
      hasAny([
        "/pin",
        "/pins",
        "/board",
        "/boards",
        "/collection",
        "/collections",
        "/gallery",
        "/inspiration",
        "/ideas",
      ])
    )
      return "idea";

    // Host-based fallbacks
    if (
      host.includes("youtube.com") ||
      host.includes("youtu.be") ||
      host.includes("tiktok.com") ||
      host.includes("instagram.com") ||
      host.includes("facebook.com") ||
      host.includes("vimeo.com") ||
      host.includes("twitch.tv") ||
      host.includes("netflix.com") ||
      host.includes("primevideo.com") ||
      host.includes("disneyplus.com") ||
      host.includes("soundcloud.com") ||
      host.includes("spotify.com")
    )
      return "watch";

    if (
      host.includes("medium.com") ||
      host.includes("substack.com") ||
      host.includes("wikipedia.org") ||
      host.includes("github.com") ||
      host.includes("gitlab.com") ||
      host.includes("stackoverflow.com") ||
      host.includes("news.ycombinator.com") ||
      host.includes("dev.to") ||
      host.startsWith("docs.") ||
      host.endsWith(".edu")
    )
      return "read";

    if (
      host.includes("amazon.") ||
      host.includes("etsy.com") ||
      host.includes("ebay.") ||
      host.includes("ikea.") ||
      host.includes("zalando.") ||
      host.includes("aliexpress.") ||
      host.includes("shopify.") ||
      host.includes("paypal.") ||
      host.includes("stripe.com")
    )
      return "buy";

    if (
      host.includes("pinterest.") ||
      host.includes("behance.net") ||
      host.includes("dribbble.com") ||
      host.includes("canva.com") ||
      host.includes("figma.com") ||
      host.includes("notion.so")
    )
      return "idea";

    return "later";
  } catch {
    return "later";
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

/** URL-safe base64 for hash */
function b64urlEncode(str) {
  const b64 = btoa(unescape(encodeURIComponent(str)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function b64urlDecode(str) {
  const b64 =
    str.replace(/-/g, "+").replace(/_/g, "/") +
    "===".slice((str.length + 3) % 4);
  return decodeURIComponent(escape(atob(b64)));
}

function parseHashParams() {
  const hash = (location.hash || "").replace(/^#/, "");
  return new URLSearchParams(hash);
}
function clearHash() {
  history.replaceState(null, "", location.pathname + location.search);
}

function applyI18n() {
  const d = dict();
  document.documentElement.lang = state.lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (d[key]) el.textContent = d[key];
  });

  els.url.placeholder = d.placeholders.url;
  els.note.placeholder = d.placeholders.note;
  els.search.placeholder = d.placeholders.search;

  els.toggleArchived.textContent = state.showArchived
    ? d.hideArchivedBtn
    : d.showArchivedBtn;

  els.countActive.textContent = `${d.statsActive}: ${
    state.items.filter((i) => !i.archived).length
  }`;
  els.countArchived.textContent = `${d.statsArchived}: ${
    state.items.filter((i) => i.archived).length
  }`;

  renderTagOptions();
  renderFilterOptions();
}

function renderTagOptions() {
  const d = dict();
  const options = [
    ["watch", d.tags.watch],
    ["read", d.tags.read],
    ["buy", d.tags.buy],
    ["idea", d.tags.idea],
    ["later", d.tags.later],
  ];

  const current = els.tag.value || "later";
  els.tag.innerHTML = "";
  for (const [value, label] of options) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = label;
    els.tag.appendChild(opt);
  }
  els.tag.value = current;
}

function renderFilterOptions() {
  const d = dict();
  const options = [
    ["all", d.tags.all],
    ["watch", d.tags.watch],
    ["read", d.tags.read],
    ["buy", d.tags.buy],
    ["idea", d.tags.idea],
    ["later", d.tags.later],
  ];

  const current = state.filterTag;
  els.filter.innerHTML = "";
  for (const [value, label] of options) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = label;
    els.filter.appendChild(opt);
  }
  els.filter.value = current;
}

/** ---------- Rendering list ---------- **/
function renderList() {
  const q = (state.search || "").toLowerCase().trim();

  let items = [...state.items];
  items = items.filter((i) => (state.showArchived ? true : !i.archived));

  if (state.filterTag !== "all") items = items.filter((i) => i.tag === state.filterTag);

  if (q) {
    items = items.filter(
      (i) =>
        i.url.toLowerCase().includes(q) ||
        (i.note || "").toLowerCase().includes(q) ||
        hostOf(i.url).toLowerCase().includes(q)
    );
  }

  items.sort((a, b) => b.createdAt - a.createdAt);

  els.list.innerHTML = "";
  els.emptyState.hidden = items.length !== 0;

  const d = dict();

  for (const item of items) {
    const card = document.createElement("div");
    card.className = "cardItem";

    const top = document.createElement("div");
    top.className = "cardItem__top";

    const titleLine = document.createElement("div");
    titleLine.className = "titleLine";

    const host = document.createElement("div");
    host.className = "host";
    host.textContent = hostOf(item.url);

    const link = document.createElement("a");
    link.className = "link";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = item.url.substring(0,30).concat('...');

    titleLine.appendChild(host);
    titleLine.appendChild(link);

    const badges = document.createElement("div");
    badges.className = "badges";

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = d.tags[item.tag] || item.tag;

    const badge2 = document.createElement("span");
    badge2.className = "badge";
    badge2.textContent = item.archived ? d.statsArchived : d.statsActive;

    badges.appendChild(badge);
    badges.appendChild(badge2);

    top.appendChild(titleLine);
    top.appendChild(badges);

    const note = document.createElement("div");
    note.className = "note";
    note.textContent = item.note || "";

    const actions = document.createElement("div");
    actions.className = "actions";

    const openBtn = document.createElement("button");
    openBtn.className = "btn btn--primary";
    openBtn.type = "button";
    openBtn.textContent = d.actions.open;
    openBtn.addEventListener("click", () =>
      window.open(item.url, "_blank", "noopener,noreferrer")
    );

    const archiveBtn = document.createElement("button");
    archiveBtn.className = "btn";
    archiveBtn.type = "button";
    archiveBtn.textContent = item.archived ? d.actions.unarchive : d.actions.archive;
    archiveBtn.addEventListener("click", () => {
      item.archived = !item.archived;
      saveState();
      applyI18n();
      renderList();
    });

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn--danger";
    delBtn.type = "button";
    delBtn.textContent = d.actions.delete;
    delBtn.addEventListener("click", () => {
      state.items = state.items.filter((x) => x.id !== item.id);
      saveState();
      applyI18n();
      renderList();
    });

    actions.appendChild(openBtn);
    actions.appendChild(archiveBtn);
    actions.appendChild(delBtn);

    card.appendChild(top);
    if (item.note) card.appendChild(note);
    card.appendChild(actions);

    els.list.appendChild(card);
  }
}

/** ---------- Add / Import / Export ---------- **/
function addItem(url, note, tag) {
  const d = dict();
  const u = (url || "").trim();
  const n = (note || "").trim().slice(0, 140);
  const t = tag || els.tag.value || "later";

  if (!isValidHttpUrl(u)) {
    alert(d.errors.invalidUrl);
    return false;
  }

  state.items.push({
    id: uid(),
    url: u,
    note: n,
    tag: ["watch", "read", "buy", "idea", "later"].includes(t) ? t : "later",
    archived: false,
    createdAt: Date.now(),
  });

  saveState();
  applyI18n();
  renderList();
  return true;
}

function addItemFromInputs() {
  const ok = addItem(els.url.value, els.note.value, els.tag.value);
  if (ok) {
    els.url.value = "";
    els.note.value = "";
    els.url.focus();
    tagManuallyChosen = false;
  }
}

function openExport() {
  const payload = { version: 1, exportedAt: new Date().toISOString(), items: state.items };
  const text = JSON.stringify(payload, null, 2);
  els.exportText.value = text;

  openDialog(els.exportDialog);
}

function downloadJson() {
  const blob = new Blob([els.exportText.value], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "link-inbox-export.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

async function copyTextToClipboard(text, buttonEl) {
  const d = dict();
  try {
    await navigator.clipboard.writeText(text);
    if (buttonEl) {
      const old = buttonEl.textContent;
      buttonEl.textContent = d.errors.copied;
      setTimeout(() => (buttonEl.textContent = old), 900);
    }
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}

function importJsonFile(file) {
  const d = dict();
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || ""));
      const items = Array.isArray(parsed.items)
        ? parsed.items
        : Array.isArray(parsed)
        ? parsed
        : null;
      if (!items) throw new Error("bad format");
      mergeItems(items);
    } catch {
      alert(d.errors.importFailed);
    } finally {
      els.importInput.value = "";
    }
  };
  reader.readAsText(file);
}

function mergeItems(items) {
  const existingKey = new Set(state.items.map((i) => `${i.url}|${i.note}|${i.tag}`));

  for (const it of items) {
    if (!it || typeof it.url !== "string") continue;
    if (!isValidHttpUrl(it.url)) continue;
    const note = typeof it.note === "string" ? it.note.slice(0, 140) : "";
    const tag = ["watch", "read", "buy", "idea", "later"].includes(it.tag) ? it.tag : "later";
    const key = `${it.url}|${note}|${tag}`;
    if (existingKey.has(key)) continue;

    state.items.push({
      id: uid(),
      url: it.url,
      note,
      tag,
      archived: !!it.archived,
      createdAt: Number.isFinite(it.createdAt) ? it.createdAt : Date.now(),
    });

    existingKey.add(key);
  }

  saveState();
  applyI18n();
  renderList();
}

/** ---------- Share link ---------- **/
function buildSharePayload() {
  return {
    version: 1,
    items: state.items.map((i) => ({
      url: i.url,
      note: i.note,
      tag: i.tag,
      archived: i.archived,
      createdAt: i.createdAt,
    })),
  };
}

function createShareLink() {
  const d = dict();
  const payload = buildSharePayload();
  const json = JSON.stringify(payload);
  const encoded = b64urlEncode(json);

  if (encoded.length > 5000) {
    alert(d.errors.shareTooLarge);
    return null;
  }

  const base = location.origin + location.pathname;
  return `${base}#share=${encoded}`;
}

function openShareDialog() {
  const link = createShareLink();
  if (!link) return;

  els.shareText.value = link;
  openDialog(els.shareDialog);
}

let pendingShareItems = null;

function maybeHandleSharedImport() {
  const params = parseHashParams();
  if (!params.has("share")) return;

  try {
    const encoded = params.get("share");
    const json = b64urlDecode(encoded);
    const payload = JSON.parse(json);
    const items = Array.isArray(payload.items) ? payload.items : null;
    if (!items) return;

    pendingShareItems = items;

    const d = dict();
    els.importShareInfo.textContent = d.importShareInfo(items.length);

    openDialog(els.importShareDialog);
  } catch {
    // ignore
  }
}

/** ---------- Auto-tag (manual override) ---------- **/
let tagManuallyChosen = false;

/** ---------- Bindings ---------- **/
els.addBtn.addEventListener("click", addItemFromInputs);
els.url.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addItemFromInputs();
});
els.note.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addItemFromInputs();
});

// Manual tag override
els.tag.addEventListener("change", () => {
  tagManuallyChosen = true;
});

// Auto-detect tag when URL changes (unless user manually chose one)
els.url.addEventListener("input", () => {
  const url = (els.url.value || "").trim();
  if (!url) {
    tagManuallyChosen = false;
    return;
  }
  if (tagManuallyChosen) return;
  if (isValidHttpUrl(url)) els.tag.value = detectTagFromUrl(url);
});

els.lang.addEventListener("change", () => {
  state.lang = els.lang.value;
  saveState();
  applyI18n();
  renderList();
});

els.theme.addEventListener("change", () => {
  state.theme = els.theme.value;
  setTheme(state.theme);
  saveState();
});

els.filter.addEventListener("change", () => {
  state.filterTag = els.filter.value;
  saveState();
  renderList();
});

els.search.addEventListener("input", () => {
  state.search = els.search.value;
  saveState();
  renderList();
});

els.toggleArchived.addEventListener("click", () => {
  state.showArchived = !state.showArchived;
  saveState();
  applyI18n();
  renderList();
});

els.clearArchived.addEventListener("click", () => {
  state.items = state.items.filter((i) => !i.archived);
  saveState();
  applyI18n();
  renderList();
});

els.exportBtn.addEventListener("click", openExport);
els.closeExport.addEventListener("click", () => closeDialog(els.exportDialog));
els.downloadExport.addEventListener("click", downloadJson);
els.copyExport.addEventListener("click", () =>
  copyTextToClipboard(els.exportText.value, els.copyExport)
);

els.importInput.addEventListener("change", (e) => {
  const file = e.target.files && e.target.files[0];
  if (file) importJsonFile(file);
});

els.shareBtn.addEventListener("click", openShareDialog);
els.closeShare.addEventListener("click", () => closeDialog(els.shareDialog));
els.copyShare.addEventListener("click", () =>
  copyTextToClipboard(els.shareText.value, els.copyShare)
);

els.closeImportShare.addEventListener("click", () => {
  pendingShareItems = null;
  closeDialog(els.importShareDialog);
  clearHash();
});
els.cancelImportShare.addEventListener("click", () => {
  pendingShareItems = null;
  closeDialog(els.importShareDialog);
  clearHash();
});
els.confirmImportShare.addEventListener("click", () => {
  if (pendingShareItems) mergeItems(pendingShareItems);
  pendingShareItems = null;
  closeDialog(els.importShareDialog);
  clearHash();
});

/** ---------- Init ---------- **/
(function init() {
  els.lang.value = state.lang;
  els.theme.value = state.theme;
  setTheme(state.theme);

  applyI18n();
  els.filter.value = state.filterTag;
  els.search.value = state.search || "";

  renderList();

  // handle shared import after UI exists
  maybeHandleSharedImport();
})();
