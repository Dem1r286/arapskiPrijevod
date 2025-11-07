import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ba from "./src/locales/ba/common.json";
import ar from "./src/locales/ar/common.json";
import i18nConfig from "./next-i18next.config.js";

i18n.use(initReactI18next).init({
  resources: {
    ba: { translation: ba },
    ar: { translation: ar },
  },
  lng: i18nConfig.i18n.defaultLocale,
  fallbackLng: "ba",
  interpolation: { escapeValue: false },
});

export default i18n;