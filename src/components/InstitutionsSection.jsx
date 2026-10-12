import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { CampusRegionalMap } from './CampusRegionalMap'
import { useTranslation } from '../context/LanguageContext'

export function InstitutionsSection() {
  const { isKannada, t } = useTranslation()

  return (
    <section id="institutions" className="px-margin-mobile md:px-margin-desktop py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0a0f1d] transition-colors duration-250">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-pastel-blue/30 dark:bg-[#2a2fff]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-pastel-lavender/30 dark:bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 bg-pastel-blue/80 dark:bg-[#2a2fff]/20 rounded-full border border-[#2a2fff]/20 shadow-2xs">
              <Icon name="verified" className="text-[#2a2fff] dark:text-[#93c5fd] text-[16px]" />
              <span className="font-[Inter] text-[13px] font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                {isKannada ? 'ಲೈವ್ ಕಾರ್ಯಾಚರಣೆ ಜಾಲ' : 'Live Regional Deployment Network'}
              </span>
            </div>
            <h2 className="font-[Plus_Jakarta_Sans] text-[32px] md:text-[42px] font-extrabold leading-[1.18] tracking-[-0.02em] text-slate-900 dark:text-white mb-4">
              {isKannada ? '20+ ಪ್ರಮುಖ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಲ್ಲಿ EduDisk' : '20+ Institutions on EduDisk'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-[680px] mx-auto text-[15px] md:text-[16px] leading-relaxed">
              {isKannada
                ? 'ದಾವಣಗೆರೆ, ಹಾವೇರಿ, ಹಿರೇಕೆರೂರು, ಹರಿಹರ, ಮೋಟೇಬೆನ್ನೂರು ಮತ್ತು ಹಿರೇತೋಗಲೇರಿ ವ್ಯಾಪ್ತಿಯ ಶಾಲೆಗಳು, ಪಿಯು, ಬಿ.ಎಡ್ ಮತ್ತು ಪದವಿ ಕಾಲೇಜುಗಳಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ ಚಾಲನೆಯಲ್ಲಿದೆ.'
                : 'Serving forward-looking schools, PU colleges, B.Ed, BCA, and degree campuses across Davanagere, Haveri, Hirekerur, Harihar, Motebennur, and Hirethogaleri.'}
            </p>
          </div>
        </RevealOnScroll>

        {/* PRIMARY INTERACTIVE REGIONAL MAP */}
        <RevealOnScroll delay={0.1}>
          <CampusRegionalMap />
        </RevealOnScroll>
      </div>
    </section>
  )
}
