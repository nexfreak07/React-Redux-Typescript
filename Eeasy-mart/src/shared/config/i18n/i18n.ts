import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

export const supportedLangs = ["en", "de"]
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "de"],
    ns: ["translation", "login"],   // <-- define namespaces
    defaultNS: "translation",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locale/{{lng}}/{{ns}}.json", 
    },
  });

export default i18n;
