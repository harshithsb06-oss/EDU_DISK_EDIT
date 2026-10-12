import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { ThreePillarsSection } from './ThreePillarsSection'
import { useTranslation } from '../context/LanguageContext'

export function FeaturesGrid() {
  const { isKannada, t } = useTranslation()

  return (
    <section id="features" className="px-margin-mobile md:px-margin-desktop py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0c1322] border-y border-slate-200/60 dark:border-slate-800 relative overflow-hidden transition-colors duration-250">
      {/* Subtle background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pastel-blue/30 dark:bg-[#2a2fff]/10 rounded-full blur-[100px] -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pastel-lavender/30 dark:bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 bg-white dark:bg-slate-800 rounded-full border border-slate-200/80 dark:border-slate-700 shadow-2xs">
              <Icon name="widgets" className="text-[#2a2fff] dark:text-[#60a5fa] text-[16px]" />
              <span className="font-[Inter] text-[13px] font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                {t('pillars.badge', 'Three Foundational Pillars')}
              </span>
            </div>
            <h2 className="font-[Plus_Jakarta_Sans] text-[32px] md:text-[42px] font-extrabold leading-[1.18] tracking-[-0.02em] text-slate-900 dark:text-white mb-4">
              {t('pillars.title', 'What the ERP Actually Does')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-[660px] mx-auto text-[15px] md:text-[16px] leading-relaxed">
              {t(
                'pillars.subtitle',
                'Nine proven institutional capabilities grouped into three cohesive pillars — powering daily campus excellence.'
              )}
            </p>
          </div>
        </RevealOnScroll>

        {/* Three Pillars Layout Component */}
        <RevealOnScroll delay={0.1}>
          <ThreePillarsSection />
        </RevealOnScroll>
      </div>
    </section>
  )
}
