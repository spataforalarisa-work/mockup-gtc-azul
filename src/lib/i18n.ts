import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import es from '../../i18n/espanol/es.json'
import en from '../../i18n/ingles/en.json'

const savedLang = localStorage.getItem('i18nextLng') || 'es'

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: savedLang,
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

export default i18n
