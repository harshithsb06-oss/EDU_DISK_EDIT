import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './Icon'
import { useTranslation } from '../context/LanguageContext'

export function ThreePillarsSection() {
  const { lang, isKannada, t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedModules, setExpandedModules] = useState({
    'student-records': true,
    'slot-attendance': true,
    'fee-collection': true,
  })
  const [selectedModule, setSelectedModule] = useState(null)

  // Construct pillars data dynamically with translation support
  const pillarsData = useMemo(() => [
    {
      id: 'core-campus',
      title: t('pillars.pillar1Title', 'Core Campus'),
      badge: t('pillars.pillar1Badge', 'Pillar 01 · Infrastructure'),
      icon: 'hub',
      theme: {
        accent: 'text-[#2a2fff] dark:text-[#60a5fa]',
        bgPill: 'bg-pastel-blue dark:bg-[#2a2fff]/20',
        badge: 'bg-pastel-blue dark:bg-[#2a2fff]/20 text-[#2a2fff] dark:text-[#93c5fd] border-[#2a2fff]/25',
        border: 'border-[#2a2fff]/25 dark:border-[#2a2fff]/40',
        hoverBorder: 'hover:border-[#2a2fff]/60',
        shadowHover: 'hover:shadow-[0_20px_40px_-15px_rgba(42,47,255,0.18)]',
        gradient: 'from-pastel-blue/60 via-pastel-blue/20 to-transparent dark:from-[#2a2fff]/20 dark:via-[#2a2fff]/5 dark:to-transparent',
        chipBg: 'bg-pastel-blue/80 dark:bg-[#2a2fff]/20 text-[#2a2fff] dark:text-[#93c5fd] border-[#2a2fff]/25',
        activeRing: 'ring-[#2a2fff]/30',
        color: '#2A2FFF',
      },
      shortDesc: t(
        'pillars.pillar1Desc',
        'Foundational student registry, staff access management, admission enquiries, and marketing web presence.'
      ),
      previewHighlight: t('pillars.pillar1Highlight', 'Unified Student Directory · PWA · CRM'),
      modules: [
        {
          id: 'student-records',
          title: t('modules.studentRecords.title', 'Student records'),
          tag: t('modules.studentRecords.tag', 'Records'),
          icon: 'person_search',
          desc: t(
            'modules.studentRecords.desc',
            'Full student files with class and section, guardian contacts, and extra admission fields where needed (Aadhaar, SATS, caste, bank, parents) for trust campuses.'
          ),
          highlight: t('modules.studentRecords.highlight', 'Aadhaar, SATS & trust fields with Excel/PDF export'),
        },
        {
          id: 'admissions-leads',
          title: t('modules.admissionsLeads.title', 'Admissions leads'),
          tag: t('modules.admissionsLeads.tag', 'Enquiry CRM'),
          icon: 'person_add',
          desc: t(
            'modules.admissionsLeads.desc',
            'CRM for enquiries: new → qualified → converted, with follow-ups so the office does not lose a walk-in in a notebook.'
          ),
          highlight: t('modules.admissionsLeads.highlight', 'Walk-in enquiry tracking & follow-up reminders'),
        },
        {
          id: 'admin-staff-pwa',
          title: t('modules.adminStaffPwa.title', 'Admin & staff PWA'),
          tag: t('modules.adminStaffPwa.tag', 'Dual Portal'),
          icon: 'devices',
          desc: t(
            'modules.adminStaffPwa.desc',
            'Email login for admins, employee ID for staff, dual-role switch, fee-only staff flag, and installable PWA. There is no parent password portal — families are updated on WhatsApp.'
          ),
          highlight: t('modules.adminStaffPwa.highlight', 'Admin email + Staff employee ID with offline PWA'),
        },
        {
          id: 'public-websites',
          title: t('modules.publicWebsites.title', 'Public websites'),
          tag: t('modules.publicWebsites.tag', 'Websites'),
          icon: 'web',
          desc: t(
            'modules.publicWebsites.desc',
            'Separate marketing sites for PU colleges and schools — affiliation, faculty, gallery, enquire, and a link through to the ERP login when the campus is live.'
          ),
          highlight: t('modules.publicWebsites.highlight', 'Affiliation, courses & direct ERP portal login link'),
        },
      ],
    },
    {
      id: 'academics',
      title: t('pillars.pillar2Title', 'Academics'),
      badge: t('pillars.pillar2Badge', 'Pillar 02 · Instruction'),
      icon: 'auto_stories',
      theme: {
        accent: 'text-secondary dark:text-purple-300',
        bgPill: 'bg-pastel-lavender dark:bg-purple-900/30',
        badge: 'bg-pastel-lavender dark:bg-purple-900/30 text-secondary dark:text-purple-300 border-secondary/25',
        border: 'border-secondary/25 dark:border-secondary/40',
        hoverBorder: 'hover:border-secondary/60',
        shadowHover: 'hover:shadow-[0_20px_40px_-15px_rgba(139,124,246,0.18)]',
        gradient: 'from-pastel-lavender/60 via-pastel-lavender/20 to-transparent dark:from-purple-900/25 dark:via-purple-900/5 dark:to-transparent',
        chipBg: 'bg-pastel-lavender/80 dark:bg-purple-900/30 text-secondary dark:text-purple-300 border-secondary/25',
        activeRing: 'ring-secondary/30',
        color: '#8B7CF6',
      },
      shortDesc: t(
        'pillars.pillar2Desc',
        'Period-by-period absence marking, automated marks entry, Excel grading templates, and official certificate PDFs.'
      ),
      previewHighlight: t('pillars.pillar2Highlight', 'Period Attendance · Exam Marks · TC & Study PDFs'),
      modules: [
        {
          id: 'slot-attendance',
          title: t('modules.slotAttendance.title', 'Slot-based attendance'),
          tag: t('modules.slotAttendance.tag', 'Daily Workflow'),
          icon: 'event_available',
          desc: t(
            'modules.slotAttendance.desc',
            'Named time slots per weekday, absences-only marking, slot cancel with reason, and school holidays. Present is derived — staff are not ticking every student every period.'
          ),
          highlight: t('modules.slotAttendance.highlight', 'Absences-only marking; present is automatically derived'),
        },
        {
          id: 'exams-reports',
          title: t('modules.examsReports.title', 'Exams & reports'),
          tag: t('modules.examsReports.tag', 'Marks & Reports'),
          icon: 'assignment',
          desc: t(
            'modules.examsReports.desc',
            'Excel templates, draft → submit → publish marks, PDF/Excel export. PU and school campuses can add Part B co-curricular grades and ordered progress reports.'
          ),
          highlight: t('modules.examsReports.highlight', 'Draft → Submit → Publish marks workflow & Excel import'),
        },
        {
          id: 'certificates',
          title: t('modules.certificates.title', 'Certificates'),
          tag: t('modules.certificates.tag', 'Official PDFs'),
          icon: 'workspace_premium',
          desc: t(
            'modules.certificates.desc',
            'Study certificate, transfer certificate, and bonafide PDFs on trust-school ERPs. B.Ed and BCA campuses also generate application forms from the same student record.'
          ),
          highlight: t('modules.certificates.highlight', 'Study, Transfer Certificate (TC) & Bonafide PDFs'),
        },
      ],
    },
    {
      id: 'operations',
      title: t('pillars.pillar3Title', 'Operations'),
      badge: t('pillars.pillar3Badge', 'Pillar 03 · Administration'),
      icon: 'payments',
      theme: {
        accent: 'text-mint-text dark:text-emerald-300',
        bgPill: 'bg-pastel-mint dark:bg-emerald-900/30',
        badge: 'bg-pastel-mint dark:bg-emerald-900/30 text-mint-text dark:text-emerald-300 border-mint-text/25',
        border: 'border-mint-text/25 dark:border-emerald-600/40',
        hoverBorder: 'hover:border-emerald-400',
        shadowHover: 'hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.18)]',
        gradient: 'from-pastel-mint/60 via-pastel-mint/20 to-transparent dark:from-emerald-900/25 dark:via-emerald-900/5 dark:to-transparent',
        chipBg: 'bg-pastel-mint/80 dark:bg-emerald-900/30 text-mint-text dark:text-emerald-300 border-mint-text/25',
        activeRing: 'ring-emerald-500/30',
        color: '#10B981',
      },
      shortDesc: t(
        'pillars.pillar3Desc',
        'Fee records with receipt printing, financial tracking, and direct WhatsApp alerts sent to guardian mobile phones.'
      ),
      previewHighlight: t('pillars.pillar3Highlight', 'Fee Collection · Instant WhatsApp Guardian Alerts'),
      modules: [
        {
          id: 'fee-collection',
          title: t('modules.feeCollection.title', 'Fee collection'),
          tag: t('modules.feeCollection.tag', 'Finance'),
          icon: 'receipt_long',
          desc: t(
            'modules.feeCollection.desc',
            'Flexible fee heads (Tuition, Transport, Admission), instalment tracking, multiple payment modes (UPI, Cash, Bank Transfer, Cheque), and thermal or A4 official receipt printing.'
          ),
          highlight: t('modules.feeCollection.highlight', 'Instalment tracking, UPI/Cash receipts & dues reports'),
        },
        {
          id: 'whatsapp-guardians',
          title: t('modules.whatsappGuardians.title', 'WhatsApp to guardians'),
          tag: t('modules.whatsappGuardians.tag', 'Parent Alerts'),
          icon: 'notifications_active',
          desc: t(
            'modules.whatsappGuardians.desc',
            'Instant, automated notifications directly to parents’ WhatsApp — absent alerts after period attendance, published term marks, fee receipt confirmations, and emergency campus circulars.'
          ),
          highlight: t('modules.whatsappGuardians.highlight', 'Zero SMS charges: official WhatsApp alerts for absence & marks'),
        },
      ],
    },
  ], [lang, t])

  const filterTabs = [
    { id: 'all', label: isKannada ? 'ಎಲ್ಲಾ ಸ್ತಂಭಗಳು' : 'All Pillars', count: 9 },
    { id: 'core-campus', label: isKannada ? 'ಕ್ಯಾಂಪಸ್ ಮೂಲಸೌಕರ್ಯ' : 'Core Campus', count: 4 },
    { id: 'academics', label: isKannada ? 'ಶೈಕ್ಷಣಿಕ' : 'Academics', count: 3 },
    { id: 'operations', label: isKannada ? 'ಕಾರ್ಯಾಚರಣೆ' : 'Operations', count: 2 },
  ]

  const toggleModule = (modId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }))
  }

  const expandAllInPillar = (pillarId) => {
    const pillar = pillarsData.find((p) => p.id === pillarId)
    if (!pillar) return
    setExpandedModules((prev) => {
      const updated = { ...prev }
      pillar.modules.forEach((m) => {
        updated[m.id] = true
      })
      return updated
    })
  }

  const collapseAllInPillar = (pillarId) => {
    const pillar = pillarsData.find((p) => p.id === pillarId)
    if (!pillar) return
    setExpandedModules((prev) => {
      const updated = { ...prev }
      pillar.modules.forEach((m) => {
        updated[m.id] = false
      })
      return updated
    })
  }

  return (
    <div className="w-full flex flex-col gap-10">
      {/* 1. INTRODUCTORY CAMPUS ECOSYSTEM ILLUSTRATION & FILTER BAR */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
        {/* Campus Micro-Diagram Banner */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pastel-blue via-pastel-lavender to-pastel-mint dark:from-[#2a2fff]/30 dark:to-purple-900/40 flex items-center justify-center text-[#2a2fff] dark:text-[#93c5fd] shadow-xs shrink-0">
            <Icon name="account_balance" className="text-[20px]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[14px] text-slate-900 dark:text-white leading-tight">
                {isKannada ? 'ಸಮಗ್ರ ಶಿಕ್ಷಣ ತಂತ್ರಜ್ಞಾನ ವ್ಯವಸ್ಥೆ' : 'One Unified Educational Ecosystem'}
              </span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {isKannada ? '೯ ಸೌಲಭ್ಯಗಳು' : '9 Modules'}
              </span>
            </div>
            <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
              {isKannada
                ? 'ಒಂದೇ ಕೇಂದ್ರೀಕೃತ ಡಾಟಾಬೇಸ್‌ನಲ್ಲಿ ಸಾಮರಸ್ಯದಿಂದ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಮೂರು ಪ್ರಮುಖ ಸ್ತಂಭಗಳು.'
                : 'Three foundational pillars working seamlessly on a single secure database.'}
            </p>
          </div>
        </div>

        {/* Filter Pills with #2a2fff Accent */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#2a2fff] text-white border-[#2a2fff] shadow-md scale-[1.02]'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isActive
                      ? 'bg-white/25 text-white'
                      : 'bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 2. THREE PILLARS BALANCED GRID (DESKTOP: 3 COLS | TABLET: 2 COLS | MOBILE: 1 COL) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {pillarsData.map((pillar, pIdx) => {
          const isFilterActive = activeFilter === 'all' || activeFilter === pillar.id

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: pIdx * 0.12 }}
              animate={{
                opacity: isFilterActive ? 1 : 0.35,
                scale: isFilterActive ? 1 : 0.98,
              }}
              className={`bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-[0_6px_24px_rgba(42,47,255,0.05)] ${pillar.theme.shadowHover} ${pillar.theme.hoverBorder} transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}
            >
              {/* Subtle Ambient Gradient Arc at top of card */}
              <div
                className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${pillar.theme.gradient} -z-10 pointer-events-none`}
              />

              <div>
                {/* PILLAR HEADER */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${pillar.theme.badge}`}>
                    {pillar.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                    <button
                      onClick={() => expandAllInPillar(pillar.id)}
                      className="hover:text-[#2a2fff] dark:hover:text-[#60a5fa] transition-colors cursor-pointer text-[11px]"
                      title="Expand all descriptions"
                    >
                      {isKannada ? 'ವಿಸ್ತರಿಸಿ' : 'Expand'}
                    </button>
                    <span>·</span>
                    <button
                      onClick={() => collapseAllInPillar(pillar.id)}
                      className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer text-[11px]"
                      title="Compact view"
                    >
                      {isKannada ? 'ಸಂಕ್ಷಿಪ್ತ' : 'Compact'}
                    </button>
                  </div>
                </div>

                {/* Pillar Title & Icon Banner */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${pillar.theme.chipBg} shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0`}
                  >
                    <Icon name={pillar.icon} filled className="text-[26px]" />
                  </div>
                  <div>
                    <h3 className="font-[Plus_Jakarta_Sans] text-[22px] sm:text-[24px] font-extrabold text-slate-900 dark:text-white leading-tight">
                      {pillar.title}
                    </h3>
                    <span className="text-[12px] font-semibold text-slate-500 dark:text-slate-400">
                      {pillar.modules.length} {isKannada ? 'ಸಂಪರ್ಕಿತ ಸೌಲಭ್ಯಗಳು' : 'Connected Modules'}
                    </span>
                  </div>
                </div>

                {/* Pillar Description */}
                <p className="text-slate-600 dark:text-slate-300 text-[13.5px] sm:text-[14px] leading-relaxed mb-6">
                  {pillar.shortDesc}
                </p>

                {/* MINI INTERFACE PREVIEW BADGE */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 mb-6 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-[11.5px] font-bold text-slate-700 dark:text-slate-200 truncate">
                      {pillar.previewHighlight}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600 shrink-0 shadow-2xs">
                    Live ERP
                  </span>
                </div>

                {/* MODULES LIST */}
                <div className="flex flex-col gap-3">
                  {pillar.modules.map((mod, mIdx) => {
                    const isExpanded = !!expandedModules[mod.id]
                    const isSelected = selectedModule?.id === mod.id

                    return (
                      <motion.div
                        key={mod.id}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + mIdx * 0.05 }}
                        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                          isSelected
                            ? `bg-white dark:bg-slate-800 shadow-md border-[#2a2fff] ring-2 ${pillar.theme.activeRing}`
                            : 'bg-white/95 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border-slate-200/80 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xs'
                        }`}
                      >
                        {/* Module Row Header (Click to expand/collapse) */}
                        <button
                          onClick={() => {
                            toggleModule(mod.id)
                            setSelectedModule(isSelected ? null : mod)
                          }}
                          className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 cursor-pointer group/mod"
                          aria-expanded={isExpanded}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover/mod:scale-105 ${
                                isExpanded
                                  ? `${pillar.theme.chipBg}`
                                  : 'bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-600'
                              }`}
                            >
                              <Icon name={mod.icon} className="text-[18px]" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-[Plus_Jakarta_Sans] text-[14px] sm:text-[15px] font-bold text-slate-900 dark:text-white group-hover/mod:text-[#2a2fff] dark:group-hover/mod:text-[#60a5fa] transition-colors leading-snug">
                                  {mod.title}
                                </h4>
                                <span className="text-[9.5px] font-extrabold px-1.5 py-0.2 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                                  {mod.tag}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 hidden sm:inline">
                              {isExpanded ? (isKannada ? 'ಮುಚ್ಚು' : 'Collapse') : (isKannada ? 'ವಿವರ' : 'Details')}
                            </span>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-slate-400 group-hover/mod:text-[#2a2fff]"
                            >
                              <Icon name="expand_more" className="text-[18px]" />
                            </motion.div>
                          </div>
                        </button>

                        {/* Collapsible Content Area */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                            >
                              <div className="px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-2.5">
                                <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                                  {mod.desc}
                                </p>
                                
                                {/* Key Institutional Highlight Pill */}
                                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60">
                                  <Icon name="check_circle" filled className="text-emerald-500 text-[14px] shrink-0" />
                                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                                    {mod.highlight}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* PILLAR FOOTER ACTION */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11.5px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Icon name="verified" filled className="text-emerald-500 text-[14px]" />
                  <span>{t('pillars.verifiedCapability', 'Verified capability on live campuses')}</span>
                </span>
                <a
                  href="#contact"
                  className={`text-[12px] font-bold ${pillar.theme.accent} hover:underline flex items-center gap-0.5 cursor-pointer`}
                >
                  <span>{isKannada ? 'ಡೆಮೊ ನೋಡಿ' : 'View Demo'}</span>
                  <Icon name="arrow_forward" className="text-[13px]" />
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
