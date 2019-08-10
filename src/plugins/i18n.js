import i18n from "i18next";

i18n.init({
  whitelist: ["en"],
  fallbackLng: "en",

  ns: ["common"],
  defaultNS: "common",

  interpolation: {
    escapeValue: false // not needed for react!!
  }
});

export default i18n;
