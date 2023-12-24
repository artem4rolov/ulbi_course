import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

// english
import translationEN from "../../../../public/locales/en/translation.json";
import mainPageEN from "../../../../public/locales/en/main-page.json";
import aboutUsPageEN from "../../../../public/locales/en/about-us-page.json";
// русский
import translationRU from "../../../../public/locales/ru/translation.json";
import mainPageRU from "../../../../public/locales/ru/main-page.json";
import aboutUsPageRU from "../../../../public/locales/ru/about-us-page.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
    "main-page": mainPageEN,
    "about-us-page": aboutUsPageEN,
  },
  ru: {
    translation: translationRU,
    "main-page": mainPageRU,
    "about-us-page": aboutUsPageRU,
  },
};
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "ru",
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
