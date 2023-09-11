import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
// 语言包
import zh from './zh.json'
import en from './en.json'
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: navigator.language,
    fallbackLng: 'zh',
    resources: {
      zh: {
        translation: zh,
      },
      en: {
        translation: en,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    // i18nextLng
    detection: {
      caches: ['localStorage', 'sessionStorage', 'cookie'],
    },
  })
