import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { ContactLinks } from './ContactLinks'
import { OfficeAddress } from './OfficeAddress'
import { BrandLogo } from './BrandLogo'
import { useTranslation } from '../context/LanguageContext'

export function Footer() {
  const { isKannada, t } = useTranslation()

  const companyLinks = [
    { label: t('nav.features', 'Features'), href: '#features' },
    { label: t('nav.howItWorks', 'How it works'), href: '#platform' },
    { label: t('nav.campuses', 'Campuses'), href: '#institutions' },
    { label: t('nav.faq', 'FAQ'), href: '#faq' },
    { label: t('nav.services', 'Services'), href: '#services' },
  ]

  const socialIcons = [
    { icon: 'public', label: 'Website' },
    { icon: 'mail', label: 'Email' },
    { icon: 'share', label: 'Share' },
  ]

  return (
    <footer className="bg-[#F8FAFC] dark:bg-[#070b16] border-t border-slate-200/80 dark:border-slate-800 py-16 md:py-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden transition-colors duration-250">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pastel-blue/20 dark:bg-[#2a2fff]/10 rounded-full blur-[100px] pointer-events-none" />

      <RevealOnScroll>
        <div className="max-w-[1280px] mx-auto">
          {/* Top Row: Brand & Multi-column links */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16 mb-12">
            
            {/* Brand column */}
            <div className="lg:max-w-[380px] shrink-0">
              <a
                href="#hero"
                className="inline-flex items-center p-1 bg-white dark:bg-white/95 rounded-xl shadow-2xs mb-5 hover:opacity-90 transition-opacity"
                aria-label="EduDisk home"
              >
                <BrandLogo heightClass="h-9 md:h-10" />
              </a>
              <p className="text-slate-600 dark:text-slate-300 font-[Inter] text-[14px] md:text-[15px] leading-relaxed mb-6">
                {t(
                  'footer.tagline',
                  'Modern, reliable, and accessible Education ERP engineered for schools, PU colleges, and degree institutions.'
                )}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pastel-blue dark:bg-[#2a2fff]/20 text-[#2a2fff] dark:text-[#93c5fd] border border-[#2a2fff]/20 text-[12px] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#2a2fff] dark:bg-[#60a5fa]" />
                <span>{isKannada ? '೨೦+ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ ಚಾಲನೆಯಲ್ಲಿದೆ' : 'Serving 20+ Educational Campuses'}</span>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 w-full">
              {/* Company */}
              <div className="flex flex-col gap-3">
                <p className="font-bold text-slate-900 dark:text-white text-[13px] uppercase tracking-wider">
                  {t('footer.quickLinks', 'Navigation')}
                </p>
                {companyLinks.map((link) => (
                  <a
                    key={link.label}
                    className="text-slate-600 dark:text-slate-300 hover:text-[#2a2fff] dark:hover:text-[#60a5fa] text-[14px] font-medium transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-3">
                <p className="font-bold text-slate-900 dark:text-white text-[13px] uppercase tracking-wider">
                  {t('footer.contact', 'Campus Support')}
                </p>
                <ContactLinks compact />
              </div>

              {/* Office Address */}
              <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-2">
                <OfficeAddress showMapsLink />
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              {socialIcons.map((item) => (
                <div
                  key={item.icon}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-pastel-blue dark:hover:bg-[#2a2fff]/20 hover:text-[#2a2fff] dark:hover:text-[#60a5fa] transition-all cursor-pointer shadow-2xs"
                >
                  <Icon name={item.icon} className="text-[18px]" />
                </div>
              ))}
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-[13px]">
              &copy; {new Date().getFullYear()} EduDisk. {t('footer.copyright', 'All rights reserved. Designed for Modern Educational Institutions.')}
            </p>
          </div>

        </div>
      </RevealOnScroll>
    </footer>
  )
}
