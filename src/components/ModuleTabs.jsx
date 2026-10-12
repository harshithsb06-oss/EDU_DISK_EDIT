import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { RoleBranchTree } from './RoleBranchTree'
import { useTranslation } from '../context/LanguageContext'

export function ModuleTabs() {
  const { isKannada, t } = useTranslation()

  return (
    <section id="modules" className="px-margin-mobile md:px-margin-desktop py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0a0f1d] transition-colors duration-250">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-pastel-lavender/30 dark:bg-purple-900/10 rounded-full blur-[90px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-pastel-blue/30 dark:bg-[#2a2fff]/10 rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 bg-pastel-lavender/60 dark:bg-purple-900/25 rounded-full border border-secondary/20 dark:border-purple-600/30 shadow-2xs">
              <Icon name="groups" className="text-secondary dark:text-purple-300 text-[16px]" />
              <span className="font-[Inter] text-[13px] font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                {t('roles.badge', 'Role-Based Architecture')}
              </span>
            </div>
            <h2 className="font-[Plus_Jakarta_Sans] text-[32px] md:text-[42px] font-extrabold leading-[1.18] tracking-[-0.02em] text-slate-900 dark:text-white mb-4">
              {t('roles.title', 'Built for Every Role')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-[15px] md:text-[16px] max-w-[640px] mx-auto leading-relaxed">
              {t(
                'roles.subtitle',
                'Office, teachers, and guardians — an expandable permission tree showing exactly who can do what across the institution.'
              )}
            </p>
          </div>
        </RevealOnScroll>

        {/* Expandable Role Branch Tree */}
        <RevealOnScroll delay={0.1}>
          <RoleBranchTree />
        </RevealOnScroll>
      </div>
    </section>
  )
}
