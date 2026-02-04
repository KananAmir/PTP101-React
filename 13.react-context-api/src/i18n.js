// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import az from './locales/az.json'
import en from './locales/en.json'
import ru from './locales/ru.json'

const resources = {
    az: { translation: az },
    en: { translation: en },
    ru: { translation: ru },
};

const savedLng = localStorage.getItem("lng") || "en";

i18n.use(initReactI18next).init({
    resources,
    lng: savedLng,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // React özü escape edir
    },
});

export default i18n;
