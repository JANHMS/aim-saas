export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de", "fr", "ja"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeMap = {
  en: "English",
  de: "German",
  fr: "French",
  ja: "中文",
} as const;
