import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { ContactLinks } from './ContactLinks'
import { OfficeAddress } from './OfficeAddress'
import { whatsappUrl, EDUDISK_CONTACTS } from '../constants/contacts'
import { useTranslation } from '../context/LanguageContext'

function StrengthItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="bg-white dark:bg-[#111827] p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_16px_-4px_rgba(42,47,255,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(42,47,255,0.10)] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex items-start gap-4 group"
    >
      <div className={`w-11 h-11 rounded-xl ${item.theme.bg} border ${item.theme.border} flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform`}>
        <Icon name={item.icon} filled className={`${item.theme.text} text-[22px]`} />
      </div>
      <div>
        <h4 className="font-[Plus_Jakarta_Sans] text-[16px] font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-[#2a2fff] dark:group-hover:text-[#60a5fa] transition-colors">
          {item.title}
        </h4>
        <p className="text-slate-600 dark:text-slate-300 text-[13px] sm:text-[14px] leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  )
}

export function DevTeamSection() {
  const { isKannada } = useTranslation()

  const strengths = useMemo(() => [
    {
      icon: 'code',
      title: isKannada ? 'ಪೂರ್ಣ-ಸ್ಟಾಕ್ ಪರಿಣತಿ' : 'Full-Stack Expertise',
      desc: isKannada
        ? 'React, Node.js ಮತ್ತು PostgreSQL — 20+ ಪ್ರಮುಖ ಕಾಲೇಜುಗಳು ಮತ್ತು ಶಾಲೆಗಳ ಹಿನ್ನೆಲೆಯಲ್ಲಿರುವ ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನ.'
        : 'React, Node.js, and PostgreSQL — the same modern stack powering GV PU College, Jnana Vikasa, and 20+ campuses.',
      theme: {
        bg: 'bg-pastel-blue dark:bg-[#2a2fff]/20',
        border: 'border-[#2a2fff]/20 dark:border-[#2a2fff]/30',
        text: 'text-[#2a2fff] dark:text-[#93c5fd]',
      },
    },
    {
      icon: 'speed',
      title: isKannada ? 'ಅತ್ಯಂತ ಕ್ಷಿಪ್ರ ಕಾರ್ಯಕ್ಷಮತೆ' : 'Performance-First',
      desc: isKannada
        ? 'ಪ್ರತಿಯೊಂದು ವೈಶಿಷ್ಟ್ಯವೂ ವೇಗಕ್ಕಾಗಿ ಹೊಂದುವಂತೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಕ್ಷಣಾರ್ಧದ ಪುಟ ಲೋಡಿಂಗ್ ಮತ್ತು ಸುಗಮ ಬಳಕೆ.'
        : 'Every feature is optimized for speed. Sub-second load times and buttery-smooth interactions.',
      theme: {
        bg: 'bg-pastel-peach dark:bg-amber-900/20',
        border: 'border-peach-text/20 dark:border-amber-600/30',
        text: 'text-peach-text dark:text-amber-300',
      },
    },
    {
      icon: 'security',
      title: isKannada ? 'ಬಂಡೆಯಂತಹ ಭದ್ರತೆ' : 'Rock-Solid Security',
      desc: isKannada
        ? 'ಪಾತ್ರ-ಆಧಾರಿತ ಪ್ರವೇಶ ನಿರ್ಬಂಧ, ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾದ ವಿದ್ಯಾರ್ಥಿ ದಾಖಲೆಗಳು ಮತ್ತು ಸುರಕ್ಷಿತ API ಸಂಪರ್ಕಗಳು.'
        : "Role-based access, encrypted data, and secure APIs protect your institution's information.",
      theme: {
        bg: 'bg-pastel-mint dark:bg-emerald-900/20',
        border: 'border-mint-text/20 dark:border-emerald-600/30',
        text: 'text-mint-text dark:text-emerald-300',
      },
    },
    {
      icon: 'support_agent',
      title: isKannada ? 'ಸ್ಥಳೀಯ ಬೆಂಬಲ ತಂಡ' : 'Dedicated Support',
      desc: isKannada
        ? 'ದಾವಣಗೆರೆಯಿಂದಲೇ ನೇರ ಸಹಾಯ. ಕಚೇರಿ ಸಿಬ್ಬಂದಿಗೆ ತರಬೇತಿ, ವಿದ್ಯಾರ್ಥಿ ಡೇಟಾ ಆಮದು ಮತ್ತು ದಿನನಿತ್ಯದ ಬೆಂಬಲ.'
        : 'Real humans based in Davanagere who respond fast. We provide hands-on onboarding, training, and ongoing assistance.',
      theme: {
        bg: 'bg-pastel-lavender dark:bg-purple-900/20',
        border: 'border-secondary/20 dark:border-purple-600/30',
        text: 'text-secondary dark:text-purple-300',
      },
    },
    {
      icon: 'update',
      title: isKannada ? 'ನಿರಂತರ ನವೀಕರಣಗಳು' : 'Continuous Updates',
      desc: isKannada
        ? 'ಹೊಸ ವೈಶಿಷ್ಟ್ಯಗಳು ಮತ್ತು ಸುಧಾರಣೆಗಳು ನಿರಂತರವಾಗಿ ಲಭ್ಯವಾಗುತ್ತವೆ — ಕಾಲೇಜು ಬೆಳೆದಂತೆ ತಂತ್ರಾಂಶವೂ ವಿಸ್ತರಿಸುತ್ತದೆ.'
        : 'New features and improvements ship regularly — your platform only gets better with time.',
      theme: {
        bg: 'bg-pastel-pink dark:bg-pink-900/20',
        border: 'border-pink-text/20 dark:border-pink-600/30',
        text: 'text-pink-text dark:text-pink-300',
      },
    },
    {
      icon: 'handshake',
      title: isKannada ? 'ದೀರ್ಘಕಾಲೀನ ಪಾಲುದಾರಿಕೆ' : 'Long-Term Partnership',
      desc: isKannada
        ? 'ಕೇವಲ ತಂತ್ರಾಂಶ ನೀಡಿ ಹೋಗದೆ, ಶೈಕ್ಷಣಿಕ ವರ್ಷದುದ್ದಕ್ಕೂ ನಿಮ್ಮ ಜೊತೆಯಲ್ಲೇ ಸಾಗುವ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರರು.'
        : "We don't just build and leave. We stay with you, adapting the product as your institution grows.",
      theme: {
        bg: 'bg-pastel-blue dark:bg-[#2a2fff]/20',
        border: 'border-[#2a2fff]/20 dark:border-[#2a2fff]/30',
        text: 'text-[#2a2fff] dark:text-[#93c5fd]',
      },
    },
  ], [isKannada])

  return (
    <section id="team" className="px-margin-mobile md:px-margin-desktop py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0a0f1d] transition-colors duration-250">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-5 w-96 h-96 bg-pastel-blue/30 dark:bg-[#2a2fff]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-96 h-96 bg-pastel-lavender/30 dark:bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-[1140px] mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-lavender/70 dark:bg-purple-900/30 border border-secondary/20 dark:border-purple-600/30 mb-4 shadow-2xs">
              <Icon name="engineering" filled className="text-secondary dark:text-purple-300 text-[16px]" />
              <span className="text-slate-700 dark:text-slate-200 text-[13px] font-bold tracking-wide">
                {isKannada ? 'EduDisk ಹಿಂದಿರುವ ತಂತ್ರಜ್ಞರು' : 'The Team Behind EduDisk'}
              </span>
            </div>
            <h2 className="font-[Plus_Jakarta_Sans] text-[32px] md:text-[42px] font-extrabold leading-[1.18] tracking-[-0.02em] text-slate-900 dark:text-white mb-4">
              {isKannada ? 'ದಾವಣಗೆರೆಯಿಂದಲೇ ಅಭಿವೃದ್ಧಿ & ಬೆಂಬಲ' : 'Built & Supported by Engineers'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-[560px] mx-auto text-[15px] md:text-[16px] leading-relaxed">
              {isKannada
                ? 'ದಾವಣಗೆರೆ ಪ್ರಧಾನ ಕಚೇರಿ. ನಿಮ್ಮ ತರಗತಿಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ, ವಿದ್ಯಾರ್ಥಿ ಡೇಟಾ ಆಮದು ಮಾಡಿಕೊಂಡು, ಶೈಕ್ಷಣಿಕ ವರ್ಷದುದ್ದಕ್ಕೂ ವಾಟ್ಸಾಪ್ ಬೆಂಬಲ ನೀಡುತ್ತೇವೆ.'
                : 'Office in Davanagere. We onboard your classes, import students, train the office, and stay on WhatsApp when the academic year starts.'}
            </p>
          </div>
        </RevealOnScroll>

        {/* 6 Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {strengths.map((item, i) => (
            <StrengthItem key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Contact & Onboarding Showcase Card */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-white to-[#F8FAFC] dark:from-[#111827] dark:to-[#0c1322] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_12px_36px_-6px_rgba(42,47,255,0.08)] p-6 sm:p-8 md:p-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Heading, pitch, quick buttons */}
              <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-pastel-blue dark:bg-[#2a2fff]/20 border border-[#2a2fff]/20 flex items-center justify-center shrink-0 text-[#2a2fff] dark:text-[#93c5fd]">
                      <Icon name="rocket_launch" filled className="text-[26px]" />
                    </div>
                    <div>
                      <h3 className="font-[Plus_Jakarta_Sans] text-[20px] md:text-[24px] font-extrabold text-slate-900 dark:text-white">
                        {isKannada ? 'ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?' : 'Ready to get started?'}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-[13px]">
                        {isKannada ? 'ಹೊಸ ಶೈಕ್ಷಣಿಕ ವರ್ಷಕ್ಕೆ ಕ್ಷಿಪ್ರ ಆನ್‌ಬೋರ್ಡಿಂಗ್' : 'Quick onboarding for the academic year'}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-[14px] md:text-[15px] leading-relaxed mb-6">
                    {isKannada
                      ? 'ಡೆಮೊ, ದರ ವಿವರಗಳು ಮತ್ತು ಆನ್‌ಬೋರ್ಡಿಂಗ್‌ಗಾಗಿ ನಮಗೆ ವಾಟ್ಸಾಪ್ ಮಾಡಿ. ನಿಮ್ಮ ಕಾಲೇಜಿನ ಪೋರ್ಟಲ್ ಸೆಟಪ್, ತರಗತಿಗಳು ಮತ್ತು ಡೇಟಾ ಆಮದನ್ನು ನಾವೇ ಮಾಡುತ್ತೇವೆ.'
                      : 'Message us on WhatsApp for a demo, pricing, and onboarding. We can set up your portal structure, classes, and import student data directly.'}
                  </p>
                </div>

                {/* Direct Contact Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {EDUDISK_CONTACTS.map((c) => (
                    <a
                      key={c.whatsapp}
                      href={whatsappUrl(c.whatsapp, 'Hi EduDisk, I would like to book a demo.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pastel-mint dark:bg-emerald-900/30 border border-mint-text/20 text-slate-800 dark:text-slate-100 text-[13px] font-bold hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
                    >
                      <Icon name="chat" className="text-[18px] text-emerald-600 dark:text-emerald-400" />
                      <span>WhatsApp {c.name.split(' ')[0]}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: Office & Contact Links */}
              <div className="lg:w-1/2 flex flex-col justify-between pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200/80 dark:border-slate-800 lg:pl-10">
                <div>
                  <p className="text-[#2a2fff] dark:text-[#60a5fa] text-[12px] font-extrabold tracking-wider uppercase mb-3">
                    {isKannada ? 'ನೇರ ಸಂಪರ್ಕ ಮಾಹಿತಿ' : 'Direct Contact Directory'}
                  </p>
                  <ContactLinks />
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                  <OfficeAddress showMapsLink />
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
