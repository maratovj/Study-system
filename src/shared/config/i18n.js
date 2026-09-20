const SUPPORTED_LANGUAGES = ["ru", "uz", "en"];
const DEFAULT_LANGUAGE = "ru";
const STORAGE_KEY = "learning-log-language";
const languageEvents = new EventTarget();

const UI_DICTIONARY = {
  ru: {
    projectName: "ЛОГ",
    projectNameLabel: "Лог обучения",
    laboratory: "Лаборатория",
    mentalModels: "Mental Models",
    blog: "Блог",
    explanations: "Объяснения",
    sections: "Разделы",
    language: "Язык",
    status: "Статус",
    date: "Дата",
    category: "Категория",
    readTime: "Время чтения",
    showDetails: "Подробнее",
    noEntries: "Записей пока нет",
    footer: "Персональная система обучения",
    labIntro: "Место для сырых мыслей, формул и гипотез.",
    modelsIntro: "Справочник кристаллизованных принципов.",
    blogIntro: "Личные заметки и рефлексия автора.",
    explanationsIntro: "Темы, объяснённые своими словами."
  },
  uz: {
    projectName: "LОG",
    projectNameLabel: "Ta'lim jurnali",
    laboratory: "Laboratoriya",
    mentalModels: "Mental Models",
    blog: "Blog",
    explanations: "Tushuntirishlar",
    sections: "Bo'limlar",
    language: "Til",
    status: "Holat",
    date: "Sana",
    category: "Kategoriya",
    readTime: "O'qish vaqti",
    showDetails: "Batafsil",
    noEntries: "Hozircha yozuvlar yo'q",
    footer: "Shaxsiy ta'lim tizimi",
    labIntro: "Xom fikrlar, formulalar va gipotezalar maydoni.",
    modelsIntro: "Kristallangan tamoyillar ma'lumotnomasi.",
    blogIntro: "Muallifning shaxsiy qaydlari va mulohazalari.",
    explanationsIntro: "O'z so'zlaringiz bilan tushuntirilgan mavzular."
  },
  en: {
    projectName: "LOG",
    projectNameLabel: "Learning log",
    laboratory: "Laboratory",
    mentalModels: "Mental Models",
    blog: "Blog",
    explanations: "Explanations",
    sections: "Sections",
    language: "Language",
    status: "Status",
    date: "Date",
    category: "Category",
    readTime: "Read time",
    showDetails: "Details",
    noEntries: "No entries yet",
    footer: "Personal learning system",
    labIntro: "A place for raw thoughts, formulas, and hypotheses.",
    modelsIntro: "A reference of crystallized principles.",
    blogIntro: "The author's personal notes and reflections.",
    explanationsIntro: "Topics explained in the author's own words."
  }
};

function readStoredLanguage() {
  try {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(storedLanguage)
      ? storedLanguage
      : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

let currentLanguage = readStoredLanguage();

export function getLanguage() {
  return currentLanguage;
}

export function getText(key) {
  return UI_DICTIONARY[currentLanguage][key] ?? UI_DICTIONARY[DEFAULT_LANGUAGE][key] ?? key;
}

export function localize(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[currentLanguage] ?? value[DEFAULT_LANGUAGE] ?? "";
  }
  return value ?? "";
}

export function getSupportedLanguages() {
  return [...SUPPORTED_LANGUAGES];
}

export function setLanguage(language) {
  if (!SUPPORTED_LANGUAGES.includes(language) || language === currentLanguage) {
    return;
  }

  currentLanguage = language;
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // The app remains usable when storage is unavailable.
  }
  languageEvents.dispatchEvent(new CustomEvent("languagechange", { detail: language }));
}

export function onLanguageChange(listener) {
  languageEvents.addEventListener("languagechange", listener);
  return () => languageEvents.removeEventListener("languagechange", listener);
}
