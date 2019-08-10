import i18n from "i18next";
import Backend from "i18next-node-fs-backend";
import { LanguageDetector } from "i18next-express-middleware";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    whitelist: ["en"],
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    backend: {
      loadPath: "src/lang/{{lng}}/{{ns}}.json",
      jsonIndent: 2
    }
  });

export default i18n;
