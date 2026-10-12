import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlTheme = new URLSearchParams(window.location.search).get('theme')
      if (urlTheme === 'dark' || urlTheme === 'light') return urlTheme

      const saved = localStorage.getItem('edudisk-theme')
      if (saved === 'dark' || saved === 'light') return saved

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('edudisk-theme', theme)
    } catch {
      // ignore storage errors
    }
  }, [theme])

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const setTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setThemeState(newTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
