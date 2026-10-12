import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { TRANSLATIONS } from '../constants/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlLang = new URLSearchParams(window.location.search).get('lang')
      if (urlLang === 'kn' || urlLang === 'en') return urlLang
      const saved = localStorage.getItem('edudisk-lang')
      return saved === 'kn' ? 'kn' : 'en'
    }
    return 'en'
  })

  useEffect(() => {
    try {
      localStorage.setItem('edudisk-lang', lang)
    } catch {
      // ignore
    }
  }, [lang])

  const setLang = (newLang) => {
    if (newLang === 'en' || newLang === 'kn') {
      setLangState(newLang)
    }
  }

  const toggleLang = () => {
    setLangState((prev) => (prev === 'en' ? 'kn' : 'en'))
  }

  // Helper to retrieve nested translations by dot-separated string key, e.g. "hero.headlineStart"
  const t = useCallback(
    (keyPath, fallback = '') => {
      if (!keyPath) return fallback
      const keys = keyPath.split('.')
      let current = TRANSLATIONS[lang]
      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k]
        } else {
          // Fall back to English if missing in Kannada
          let fallbackCurrent = TRANSLATIONS.en
          for (const fbKey of keys) {
            if (fallbackCurrent && typeof fallbackCurrent === 'object' && fbKey in fallbackCurrent) {
              fallbackCurrent = fallbackCurrent[fbKey]
            } else {
              return fallback || keyPath
            }
          }
          return fallbackCurrent || fallback || keyPath
        }
      }
      return current !== undefined ? current : fallback || keyPath
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, isKannada: lang === 'kn', setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}
