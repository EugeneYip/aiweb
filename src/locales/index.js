import en from "./en.js";
import zh from "./zh.js";
import zhCN from "./zh-CN.js";
import es from "./es.js";
import ja from "./ja.js";
import de from "./de.js";
import fr from "./fr.js";
import ar from "./ar.js";
import pt from "./pt.js";
import hi from "./hi.js";
import vi from "./vi.js";
import id from "./id.js";
import ko from "./ko.js";
import ru from "./ru.js";
import it from "./it.js";
import tr from "./tr.js";
import ur from "./ur.js";
import th from "./th.js";
import he from "./he.js";

export const translations = {
  en,
  zh,
  "zh-CN": zhCN,
  es,
  ja,
  de,
  fr,
  ar,
  pt,
  hi,
  vi,
  id,
  ko,
  ru,
  it,
  tr,
  ur,
  th,
  he,
};

export const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
  { code: "zh-CN", label: "简体", short: "简" },
  { code: "es", label: "Español", short: "ES" },
  { code: "ja", label: "日本語", short: "日" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ar", label: "العربية", short: "ع" },
  { code: "pt", label: "Português", short: "PT" },
  { code: "hi", label: "हिन्दी", short: "हि" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
  { code: "ko", label: "한국어", short: "한" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "it", label: "Italiano", short: "IT" },
  { code: "tr", label: "Türkçe", short: "TR" },
  { code: "ur", label: "اردو", short: "ار" },
  { code: "th", label: "ไทย", short: "ไท" },
  { code: "he", label: "עברית", short: "עב" },
];

export const HTML_LANG = {
  en: "en",
  zh: "zh",
  "zh-CN": "zh-Hans",
  es: "es",
  ja: "ja",
  pt: "pt",
  ar: "ar",
  fr: "fr",
  hi: "hi",
  ko: "ko",
  ur: "ur",
  th: "th",
  de: "de",
  id: "id",
  it: "it",
  he: "he",
  tr: "tr",
  ru: "ru",
  vi: "vi",
};

export const RTL_LANGS = new Set(["ar", "ur", "he"]);

if (import.meta.env?.DEV) {
  const baseKeys = Object.keys(en).sort();
  const baseSet = new Set(baseKeys);
  for (const code of Object.keys(translations)) {
    if (code === "en") continue;
    const keys = Object.keys(translations[code]);
    const missing = baseKeys.filter((k) => !keys.includes(k));
    const extra = keys.filter((k) => !baseSet.has(k));
    if (missing.length || extra.length) {
      // eslint-disable-next-line no-console
      console.warn(
        `[locales] key drift in "${code}":` +
          (missing.length ? ` missing=[${missing.join(", ")}]` : "") +
          (extra.length ? ` extra=[${extra.join(", ")}]` : ""),
      );
    }
    const baseVariants = en.promptVariants?.length ?? 0;
    const localeVariants = translations[code].promptVariants?.length ?? 0;
    if (baseVariants !== localeVariants) {
      // eslint-disable-next-line no-console
      console.warn(
        `[locales] promptVariants count mismatch in "${code}": expected ${baseVariants}, got ${localeVariants}`,
      );
    }
  }
}
