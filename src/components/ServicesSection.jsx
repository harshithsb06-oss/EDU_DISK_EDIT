import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { useTranslation } from '../context/LanguageContext'

function ServiceCard({ service, index, isKannada }) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className="bg-white dark:bg-[#111827] rounded-3xl p-7 md:p-8 h-full flex flex-col justify-between border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(42,47,255,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(42,47,255,0.12)] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group"
      >
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-6">
            <div className={`w-14 h-14 rounded-2xl ${service.theme.bg} border ${service.theme.border} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
              <Icon name={service.icon} filled className={`${service.theme.text} text-[30px]`} />
            </div>
            <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${service.theme.pill}`}>
              {service.badge}
            </span>
          </div>

          <h3 className="font-[Plus_Jakarta_Sans] text-[22px] md:text-[24px] font-extrabold leading-[1.2] text-slate-900 dark:text-white group-hover:text-[#2a2fff] dark:group-hover:text-[#60a5fa] transition-colors">
            {service.title}
          </h3>
          <p className={`text-[13px] font-bold mt-1 mb-4 ${service.theme.text}`}>
            {service.tagline}
          </p>

          <p className="text-slate-600 dark:text-slate-300 text-[14px] md:text-[15px] leading-relaxed mb-6">
            {service.desc}
          </p>
        </div>

        <div>
          <div className="h-px w-full bg-slate-100 dark:bg-slate-800 my-5" />
          <p className="text-[12px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
            {isKannada ? 'ಒಳಗೊಂಡಿರುವ ಸೌಲಭ್ಯಗಳು:' : "What's Included:"}
          </p>
          <ul className="flex flex-col gap-3">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <span className={`w-5 h-5 rounded-full ${service.theme.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon name="check" className={`${service.theme.check} text-[14px] font-bold`} />
                </span>
                <span className="text-slate-700 dark:text-slate-300 text-[13px] md:text-[14px] leading-relaxed font-medium">
                  {h}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </RevealOnScroll>
  )
}

export function ServicesSection() {
  const { isKannada } = useTranslation()

  const services = useMemo(() => [
    {
      icon: 'dashboard_customize',
      title: isKannada ? 'ಸಂಪೂರ್ಣ ಕ್ಯಾಂಪಸ್ ERP' : 'Full campus ERP',
      tagline: isKannada ? 'ಆಡಳಿತ + ಉಪನ್ಯಾಸಕರು — ಶಾಲೆ ಮತ್ತು ಪಿಯು ಕಾಲೇಜುಗಳಿಗೆ' : 'Admin + staff — schools and PU colleges',
      badge: isKannada ? 'ಪ್ರಮುಖ ಆವೃತ್ತಿ' : 'Flagship Edition',
      theme: {
        bg: 'bg-pastel-blue dark:bg-[#2a2fff]/20',
        border: 'border-[#2a2fff]/20 dark:border-[#2a2fff]/30',
        text: 'text-[#2a2fff] dark:text-[#93c5fd]',
        pill: 'bg-pastel-blue dark:bg-[#2a2fff]/20 text-[#2a2fff] dark:text-[#93c5fd] border-[#2a2fff]/20',
        check: 'text-[#2a2fff] dark:text-[#60a5fa]',
      },
      desc: isKannada
        ? 'ವಿದ್ಯಾರ್ಥಿ ದಾಖಲೆಗಳು, ಪೀರಿಯಡ್ ಹಾಜರಾತಿ, ಪರೀಕ್ಷೆ, ಶುಲ್ಕ ಸಂಗ್ರಹ, ವಿಚಾರಣೆ CRM ಮತ್ತು ಪೋಷಕರಿಗೆ ವಾಟ್ಸಾಪ್ ಸಂದೇಶಗಳು.'
        : 'The GVPU-family portal: students, slot attendance, exams, fees, admissions leads, and WhatsApp. Same product for a high school and a PU college — class structure is what changes.',
      highlights: isKannada
        ? [
            'ಮುಖ್ಯಸ್ಥರಿಗೆ ಇಮೇಲ್ ಮತ್ತು ಸಿಬ್ಬಂದಿಗೆ ಎಂಪ್ಲಾಯ್ ಐಡಿ ಲಾಗಿನ್',
            'ಪೀರಿಯಡ್ ಹಾಜರಾತಿ, ರಜಾದಿನಗಳು ಮತ್ತು ರದ್ದತಿ ನಿಯಮಗಳು',
            'ಅಂಕಗಳ ಕರಡು → ಸಲ್ಲಿಕೆ → ಪ್ರಕಟಣೆ ಮತ್ತು ಎಕ್ಸೆಲ್/PDF ಡೌನ್‌ಲೋಡ್',
            'ಶುಲ್ಕ ನಿಗದಿ ಮತ್ತು ಯುಪಿಐ, ನಗದು, ಚೆಕ್ ರಸೀದಿಗಳು',
            'ಪ್ರವೇಶ ವಿಚಾರಣೆ CRM ಮತ್ತು ವಾಟ್ಸಾಪ್ ಅಧಿಸೂಚನೆಗಳು',
          ]
        : [
            'Admin email login and staff employee-ID login',
            'Slot attendance, holidays, and slot cancel',
            'Marks workflow: draft, submit, publish, Excel/PDF',
            'Fees: assign and record cash, UPI, cheque, bank',
            'Leads CRM and MSG91 WhatsApp (absence + results)',
          ],
    },
    {
      icon: 'edit_note',
      title: isKannada ? 'ಪರೀಕ್ಷಾ & ಅಂಕಗಳ ERP' : 'Focused exam ERP',
      tagline: isKannada ? 'ಕಚೇರಿ ಆಡಳಿತ — ಪ್ರಗತಿಪತ್ರಗಳು ಮತ್ತು ಐಚ್ಛಿಕ ಶುಲ್ಕ' : 'Admin-only — reports and optional fees',
      badge: isKannada ? 'ಹಗುರ & ನಿರ್ದಿಷ್ಟ' : 'Lightweight & Targeted',
      theme: {
        bg: 'bg-pastel-lavender dark:bg-purple-900/20',
        border: 'border-secondary/20 dark:border-purple-600/30',
        text: 'text-secondary dark:text-purple-300',
        pill: 'bg-pastel-lavender dark:bg-purple-900/20 text-secondary dark:text-purple-300 border-secondary/20',
        check: 'text-secondary dark:text-purple-300',
      },
      desc: isKannada
        ? 'ಸೂರ್ಯ ಸೆಂಟ್ರಲ್ ಶಾಲೆ ಮತ್ತು ಎಸ್‌ಜಿಆರ್‌ಕೆಎಸ್ ಕಾಲೇಜಿನಲ್ಲಿ ಬಳಕೆಯಲ್ಲಿರುವ ಪರೀಕ್ಷಾ ವ್ಯವಸ್ಥೆ: ವಿದ್ಯಾರ್ಥಿ-ಸಿಬ್ಬಂದಿ ಮಾಸ್ಟರ್, ಪರೀಕ್ಷೆಗಳು, ಪಾರ್ಟ್ ಬಿ ಗ್ರೇಡ್‌ಗಳು ಮತ್ತು ಪ್ರಗತಿಪತ್ರ PDF.'
        : "A slimmer build used at Surya Central School and SGRKS Women's College: student and staff masters, examinations, Part B grades, and progress-report PDFs. Fees stay on when the office needs them; attendance and WhatsApp can wait.",
      highlights: isKannada
        ? [
            'ಕಚೇರಿ ನಿರ್ವಾಹಕರಿಗೆ ಮಾತ್ರ ಪ್ರವೇಶ — ಸಿಬ್ಬಂದಿ ಲಾಗಿನ್ ಇಲ್ಲ',
            'ಬೋರ್ಡ್ ಮಾದರಿಯ ಪ್ರಗತಿಪತ್ರಗಳು ಮತ್ತು ವಿಷಯಗಳ ಕ್ರಮ',
            'ಪಾರ್ಟ್ ಬಿ ಸಹಪಠ್ಯ ಚಟುವಟಿಕೆಗಳ ಗ್ರೇಡ್‌ಗಳು',
            'ಕ್ಯಾಂಪಸ್ ವೈಫೈನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಮೊಬೈಲ್ PWA',
            'ಅಧಿಕೃತ ಅಧ್ಯಯನ ಮತ್ತು ವರ್ಗಾವಣೆ ಪ್ರಮಾಣಪತ್ರಗಳು',
          ]
        : [
            'Admin portal only — no staff employee-ID login',
            'Progress reports and subject order',
            'Part B co-curricular grades',
            'Fee types catalog (SGRKS)',
            'Installable PWA on campus Wi-Fi',
          ],
    },
    {
      icon: 'web',
      title: isKannada ? 'ಸಂಸ್ಥೆಗಳ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ಗಳು' : 'Institution websites',
      tagline: isKannada ? 'ಸಾರ್ವಜನಿಕ ವೆಬ್‌ಸೈಟ್, ಒಳಗೆ ನೇರ ERP ಲಾಗಿನ್' : 'Public face, ERP behind the login',
      badge: isKannada ? 'ಪ್ರವೇಶ & ಪ್ರಚಾರ' : 'Admissions & Portal Portal',
      theme: {
        bg: 'bg-pastel-mint dark:bg-emerald-900/20',
        border: 'border-mint-text/20 dark:border-emerald-600/30',
        text: 'text-mint-text dark:text-emerald-300',
        pill: 'bg-pastel-mint dark:bg-emerald-900/20 text-mint-text dark:text-emerald-300 border-mint-text/20',
        check: 'text-mint-text dark:text-emerald-400',
      },
      desc: isKannada
        ? 'ಸಿಬಿಎಸ್‌ಇ/ಐಸಿಎಸ್‌ಇ ಶಾಲೆಗಳು ಮತ್ತು ಪಿಯು ಅಕಾಡೆಮಿಗಳಿಗೆ ಆಧುನಿಕ ವೆಬ್‌ಸೈಟ್‌ಗಳು — ಮಾನ್ಯತೆ, ಬೋಧಕ ವರ್ಗ, ಗ್ಯಾಲರಿ, ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ ಮತ್ತು ನೇರ ERP ಲಾಗಿನ್ ಬಟನ್.'
        : 'Static sites for CBSE/ICSE schools and PU academies — affiliation, faculty, gallery, enquire on WhatsApp, Kannada and English where needed. Live examples include GV PU College and Mayur Global School.',
      highlights: isKannada
        ? [
            'ಸಂಸ್ಥೆಯ ಬ್ರ್ಯಾಂಡಿಂಗ್‌ಗೆ ತಕ್ಕಂತೆ ಆಕರ್ಷಕ ವಿನ್ಯಾಸ',
            'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ನೇರ ಪ್ರವೇಶ ವಿಚಾರಣೆ',
            'ಸಿಬಿಎಸ್‌ಇ/ಐಸಿಎಸ್‌ಇ ಮಾನ್ಯತಾ ವಿವರಗಳ ಪ್ರಕಟಣೆ',
            'erp.yourcollege.com ಲೈವ್ ಆದಾಗ ನೇರ ಲಾಗಿನ್ ಲಿಂಕ್',
            'ಅತ್ಯಂತ ವೇಗದ ಕ್ಲೌಡ್ ಸರ್ವರ್ ಹೋಸ್ಟಿಂಗ್',
          ]
        : [
            'Custom branding, not a template farm',
            'Enquire and apply via WhatsApp',
            'CBSE disclosure / ICSE affiliation blocks',
            'Link to erp.yourdomain when you go live',
            'Hosted on the same Nginx stack as the ERP',
          ],
    },
  ], [isKannada])

  return (
    <section id="services" className="px-margin-mobile md:px-margin-desktop py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0c1322] border-y border-slate-200/60 dark:border-slate-800 relative overflow-hidden transition-colors duration-250">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pastel-lavender/30 dark:bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-pastel-blue/30 dark:bg-[#2a2fff]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 bg-white dark:bg-slate-800 rounded-full border border-slate-200/80 dark:border-slate-700 shadow-2xs">
              <Icon name="deployed_code" className="text-[#2a2fff] dark:text-[#60a5fa] text-[16px]" />
              <span className="font-[Inter] text-[13px] font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                {isKannada ? 'ಹೊಂದಿಕೊಳ್ಳುವ ಅನುಷ್ಠಾನ ಮಾದರಿಗಳು' : 'Flexible Deployments'}
              </span>
            </div>
            <h2 className="font-[Plus_Jakarta_Sans] text-[32px] md:text-[42px] font-extrabold leading-[1.18] tracking-[-0.02em] text-slate-900 dark:text-white mb-4">
              {isKannada ? 'ನಮ್ಮ ಸೇವಾ ಮಾದರಿಗಳು' : 'How We Deploy'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-[580px] mx-auto text-[15px] md:text-[16px] leading-relaxed">
              {isKannada
                ? 'ಒಂದೇ ವಿಶ್ವಾಸಾರ್ಹ ತಂತ್ರಜ್ಞಾನ — ಸಂಪೂರ್ಣ ERP, ಪರೀಕ್ಷಾ ಕಚೇರಿ ಆವೃತ್ತಿ ಅಥವಾ ಪ್ರಚಾರ ವೆಬ್‌ಸೈಟ್.'
                : 'One stack, three shapes: full dual-portal ERP, a slimmer exam-and-fees office, or a public website that later links to login.'}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} isKannada={isKannada} />
          ))}
        </div>
      </div>
    </section>
  )
}
