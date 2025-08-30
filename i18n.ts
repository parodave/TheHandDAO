import i18next, { InitOptions } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

export const locales = ["fr","en"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "fr";

export function initI18n(locale: Locale) {
  const options: InitOptions = {
    supportedLngs: locales as unknown as string[],
    lng: locale,
    fallbackLng: defaultLocale,
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false }
  };
  if (!i18next.isInitialized) {
    i18next
      .use(initReactI18next)
      .use(resourcesToBackend((lng, ns) => import(`./locales/${lng}/${ns}.json`)))
      .init(options);
  } else {
    i18next.changeLanguage(locale);
  }
  return i18next;
}

