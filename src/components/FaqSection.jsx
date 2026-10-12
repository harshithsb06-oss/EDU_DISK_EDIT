import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { useTranslation } from '../context/LanguageContext'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const { isKannada } = useTranslation()

  const faqs = useMemo(() => [
    {
      q: isKannada ? 'EduDisk ಎಂದರೇನು?' : 'What is EduDisk?',
      a: isKannada
        ? 'EduDisk ಎಂಬುದು ಶಾಲೆಗಳು ಮತ್ತು ಕಾಲೇಜುಗಳಿಗಾಗಿ ರೂಪಿಸಲಾದ ಅತ್ಯಾಧುನಿಕ ಸಮಗ್ರ ಕ್ಲೌಡ್ ERP ತಂತ್ರಾಂಶ. ವಿದ್ಯಾರ್ಥಿ ದಾಖಲಾತಿ, ಪೀರಿಯಡ್ ಹಾಜರಾತಿ, ಪರೀಕ್ಷೆಗಳು, ಶುಲ್ಕ ಸಂಗ್ರಹ, ವರ್ಗಾವಣೆ ಪ್ರಮಾಣಪತ್ರಗಳು ಮತ್ತು ಪೋಷಕರಿಗೆ ನೇರ ವಾಟ್ಸಾಪ್ ಸಂದೇಶಗಳ ವ್ಯವಸ್ಥೆಯನ್ನು ಇದು ಒಳಗೊಂಡಿದೆ.'
        : 'EduDisk is a comprehensive, modern school and college ERP software. Admin and staff portals cover student records, slot-based attendance, exams, fees, admissions leads, certificates, and WhatsApp alerts to guardians.',
    },
    {
      q: isKannada ? 'ಯಾವ್ಯಾವ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳು EduDisk ಬಳಸುತ್ತಿವೆ?' : 'Which campuses use EduDisk?',
      a: isKannada
        ? 'ದಾವಣಗೆರೆ, ಹಾವೇರಿ, ಹಿರೇಕೆರೂರು, ಹರಿಹರ, ಮೋಟೇಬೆನ್ನೂರು ಮತ್ತು ಹಿರೇತೋಗಲೇರಿ ವ್ಯಾಪ್ತಿಯ ೨೦ಕ್ಕೂ ಹೆಚ್ಚು ಶಾಲೆಗಳು, ಪಿಯು ಕಾಲೇಜುಗಳು, ಬಿ.ಎಡ್ ಮತ್ತು ಪದವಿ ಕಾಲೇಜುಗಳು EduDisk ಅನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಬಳಸುತ್ತಿವೆ.'
        : "Over 20 schools, PU colleges, B.Ed, BCA, and degree campuses across Davanagere, Haveri, Hirekerur, Harihar, Motebennur, and Hirethogaleri rely on EduDisk daily.",
    },
    {
      q: isKannada ? 'ಪೋಷಕರಿಗೆ ಪ್ರತ್ಯೇಕ ಲಾಗಿನ್ ಇರುತ್ತದೆಯೇ?' : 'Do parents get a login?',
      a: isKannada
        ? 'ಇಲ್ಲ, ಪೋಷಕರು ಯಾವುದೇ ಪಾಸ್‌ವರ್ಡ್ ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವ ಅಥವಾ ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡುವ ಅಗತ್ಯವಿಲ್ಲ. ವಿದ್ಯಾರ್ಥಿ ಕಡತದಲ್ಲಿರುವ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಗೈರುಹಾಜರಿ ಮತ್ತು ಪರೀಕ್ಷಾ ಅಂಕಗಳು ತಲುಪುತ್ತವೆ.'
        : 'No parent or student password portal required. Guardians receive absence and exam-result alerts on WhatsApp using the number already on the student file.',
    },
    {
      q: isKannada ? 'ವಾಟ್ಸಾಪ್ ಸಂದೇಶಗಳು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ?' : 'How do WhatsApp alerts work?',
      a: isKannada
        ? 'ಅಧಿಕೃತ ವಾಟ್ಸಾಪ್ ಬಿಸಿನೆಸ್ API (MSG91) ಮೂಲಕ ಕಚೇರಿಯಿಂದ ನೇರವಾಗಿ ಸಂದೇಶಗಳು ರವಾನೆಯಾಗುತ್ತವೆ. ಸಂದೇಶ ತಲುಪಿದ (Delivered) ವಿವರಗಳು ಸಿಸ್ಟಮ್‌ನಲ್ಲಿ ಲಭ್ಯವಿರುತ್ತವೆ.'
        : 'The office sends bulk absence or published-result messages through the official WhatsApp Business API (MSG91), with sent, delivered, or failed status and retry.',
    },
    {
      q: isKannada ? 'ನಿಮ್ಮ ಪ್ರಧಾನ ಕಚೇರಿ ಎಲ್ಲಿದೆ?' : 'Where is your office?',
      a: isKannada
        ? '೯೯೦/೧, ಜನನಿ ೧೨ನೇ ಕ್ರಾಸ್, ಕಾಮ್ರೇಡ್ ಪಂಪಾಪತಿ ನಗರ, ನಳಂದ ಶಾಲೆ ರಸ್ತೆ, ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಹಿಂಭಾಗ, ದಾವಣಗೆರೆ, ಕರ್ನಾಟಕ ೫೭೭೦೦೪.'
        : '990/1, Janani 12th Cross, Comrade Pampapathi Nagara, Nalanda School Road, Behind KSRTC, Davanagere, Karnataka 577004.',
    },
  ], [isKannada])

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section id="faq" className="px-margin-mobile md:px-margin-desktop py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0c1322] border-y border-slate-200/60 dark:border-slate-800 relative overflow-hidden transition-colors duration-250" aria-labelledby="faq-heading">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-5 w-80 h-80 bg-pastel-lavender/30 dark:bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-5 right-5 w-80 h-80 bg-pastel-blue/30 dark:bg-[#2a2fff]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-[880px] mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 bg-white dark:bg-slate-800 rounded-full border border-slate-200/80 dark:border-slate-700 shadow-2xs">
              <Icon name="help_outline" className="text-secondary dark:text-purple-300 text-[16px]" />
              <span className="font-[Inter] text-[13px] font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                {isKannada ? 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು' : 'Got Questions?'}
              </span>
            </div>
            <h2 id="faq-heading" className="font-[Plus_Jakarta_Sans] text-[32px] md:text-[42px] font-extrabold leading-[1.18] tracking-[-0.02em] text-slate-900 dark:text-white mb-4">
              {isKannada ? 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು' : 'Frequently asked questions'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-[560px] mx-auto text-[15px] md:text-[16px] leading-relaxed">
              {isKannada
                ? 'EduDisk ಬಗ್ಗೆ ಪ್ರಾಂಶುಪಾಲರು ಮತ್ತು ಆಡಳಿತ ಮಂಡಳಿಯವರು ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳಿಗೆ ನೇರ ಉತ್ತರಗಳು.'
                : 'Straight answers for principals and office staff evaluating EduDisk.'}
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-3.5">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <RevealOnScroll key={item.q} delay={i * 0.05}>
                <div
                  className={`bg-white dark:bg-[#111827] rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#2a2fff]/50 dark:border-[#2a2fff]/60 shadow-[0_8px_24px_-4px_rgba(42,47,255,0.08)]'
                      : 'border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-pastel-blue dark:bg-[#2a2fff]/20 text-[#2a2fff] dark:text-[#93c5fd] border border-[#2a2fff]/20'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        <Icon name="help" filled={isOpen} className="text-[20px]" />
                      </div>
                      <span className="font-[Plus_Jakarta_Sans] text-[16px] sm:text-[17px] font-bold text-slate-900 dark:text-white">
                        {item.q}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-pastel-blue dark:bg-[#2a2fff]/20 text-[#2a2fff] dark:text-[#93c5fd] rotate-180' : 'bg-slate-50 dark:bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon name="expand_more" className="text-[20px]" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1">
                          <div className="pl-12 border-t border-slate-100 dark:border-slate-800 pt-4">
                            <p className="text-slate-600 dark:text-slate-300 text-[14px] sm:text-[15px] leading-relaxed font-[Inter]">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-10 p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-pastel-mint dark:bg-emerald-900/30 text-mint-text dark:text-emerald-400 flex items-center justify-center">
              <Icon name="chat" className="text-[20px]" />
            </span>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-[14px]">
                {isKannada ? 'ಇನ್ನೂ ಸಂದೇಹಗಳಿವೆಯೇ?' : 'Still have questions?'}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-[12px]">
                {isKannada ? 'ನಮ್ಮ ದಾವಣಗೆರೆ ತಾಂತ್ರಿಕ ತಂಡ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಉತ್ತರಿಸಲು ಸದಾ ಸಿದ್ಧ.' : 'Our Davanagere team is happy to chat on WhatsApp.'}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="btn-secondary px-4 py-2 text-[13px] font-bold whitespace-nowrap"
          >
            {isKannada ? 'ಸಂಪರ್ಕಿಸಿ' : 'Contact Team'}
          </a>
        </div>
      </div>
    </section>
  )
}
