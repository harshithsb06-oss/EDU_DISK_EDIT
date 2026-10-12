import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './Icon'
import { BrandLogo } from './BrandLogo'
import { useTheme } from '../context/ThemeContext'
import { useTranslation } from '../context/LanguageContext'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, isDark, toggleTheme } = useTheme()
  const { lang, isKannada, setLang, toggleLang, t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('nav.home', 'Home'), href: '#hero' },
    { label: t('nav.features', 'Features'), href: '#features' },
    { label: t('nav.howItWorks', 'How it works'), href: '#platform' },
    { label: t('nav.campuses', 'Campuses'), href: '#institutions' },
    { label: t('nav.faq', 'FAQ'), href: '#faq' },
    { label: t('nav.services', 'Services'), href: '#services' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0a0f1d]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(42,47,255,0.08)] py-3'
            : 'bg-white/80 dark:bg-[#0a0f1d]/80 backdrop-blur-xs border-b border-slate-100/90 dark:border-slate-800/80 py-4 md:py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="inline-flex items-center rounded-xl p-1 bg-white dark:bg-white/95 rounded-xl shadow-2xs hover:opacity-95 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#2a2fff]/50"
            aria-label="EduDisk home"
          >
            <BrandLogo heightClass="h-8 sm:h-9 md:h-10" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-[#2a2fff] dark:hover:text-[#6d75ff] hover:bg-white dark:hover:bg-slate-700/80 px-3.5 py-1.5 rounded-full transition-all text-[13px] xl:text-[14px] font-semibold hover:shadow-2xs whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Lang Switch + Dark Mode Toggle + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800/90 p-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-2xs text-[12px] font-bold">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#2a2fff] text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('kn')}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === 'kn'
                    ? 'bg-[#2a2fff] text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="Switch to Kannada"
              >
                ಕನ್ನಡ
              </button>
            </div>

            {/* Dark / Light Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-[#2a2fff] dark:hover:text-[#6d75ff] hover:border-[#2a2fff]/40 transition-all cursor-pointer shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-[#2a2fff]/40"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  name={isDark ? 'light_mode' : 'dark_mode'}
                  className={`text-[19px] sm:text-[20px] ${isDark ? 'text-amber-400' : 'text-slate-700'}`}
                />
              </motion.div>
            </button>

            {/* Book Demo Button */}
            <a
              href="#contact"
              className="btn-primary px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] md:text-[14px] font-bold tracking-wide shadow-sm whitespace-nowrap"
            >
              {t('nav.bookDemo', 'Book Demo')}
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-[#2a2fff] focus:outline-hidden lg:hidden transition-colors cursor-pointer"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" className="text-[24px]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-60 bg-slate-900/40 backdrop-blur-xs lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-white dark:bg-[#111827] border-l border-slate-200 dark:border-slate-800 shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex justify-between items-center pb-5 border-b border-slate-100 dark:border-slate-800 mb-5">
                  <div className="inline-flex items-center p-1 bg-white rounded-lg">
                    <BrandLogo heightClass="h-8" />
                  </div>
                  <button
                    className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#2a2fff] transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <Icon name="close" className="text-[20px]" />
                  </button>
                </div>

                {/* Mobile Language & Theme Controls */}
                <div className="flex items-center justify-between p-2.5 mb-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/70">
                  <span className="text-[12px] font-bold text-slate-600 dark:text-slate-300">
                    {lang === 'kn' ? 'ಭಾಷೆ / ಥೀಮ್' : 'Language & Theme'}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleLang}
                      className="px-2.5 py-1 rounded-lg bg-[#2a2fff] text-white text-[12px] font-bold shadow-2xs cursor-pointer"
                    >
                      {lang === 'en' ? 'ಕನ್ನಡ' : 'English'}
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 cursor-pointer"
                      aria-label="Toggle theme"
                    >
                      <Icon name={isDark ? 'light_mode' : 'dark_mode'} className={`text-[17px] ${isDark ? 'text-amber-400' : ''}`} />
                    </button>
                  </div>
                </div>
                
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                      className="px-3.5 py-2.5 rounded-xl font-[Plus_Jakarta_Sans] text-[15px] font-semibold text-slate-700 dark:text-slate-200 hover:text-[#2a2fff] dark:hover:text-[#6d75ff] hover:bg-pastel-blue/60 dark:hover:bg-slate-800 transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <Icon name="chevron_right" className="text-[17px] text-slate-400" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary block w-full text-center py-3 rounded-xl text-[15px] font-bold shadow-md shadow-[#2a2fff]/20"
                >
                  {t('nav.bookDemo', 'Book Demo')}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
