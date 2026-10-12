import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { useTranslation } from '../context/LanguageContext'

// ============================================================================
// Animation Variants for Coordinated Entrance Sequence (Phases 1 - 5)
// ============================================================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const headingVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
}

const phoneVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const leftPanelVariants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      delay: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const rightPanelVariants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      delay: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const bubbleVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: customDelay || 0.8,
      ease: 'easeOut',
    },
  }),
}

const tickVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, delay: 1.35, ease: 'backOut' },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: 0.85 + i * 0.14,
      ease: 'easeOut',
    },
  }),
}

// ============================================================================
// Subcomponents: Smartphone Mockup & Chat Bubble
// ============================================================================
function PhoneMockup({ activeTab, hoveredPanel, isKannada, t }) {
  // Determine if Absence or Exam flow should be emphasized
  const showAbsence = activeTab === 'all' || activeTab === 'absence' || hoveredPanel === 'absence'
  const showExam = activeTab === 'all' || activeTab === 'exam' || hoveredPanel === 'exam'

  return (
    <motion.div
      variants={phoneVariants}
      className="relative w-full max-w-[390px] sm:max-w-[410px] md:max-w-[420px] mx-auto select-none"
    >
      {/* Outer Subtle Floating Motion (After entrance settles) */}
      <motion.div
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full"
      >
        {/* Smartphone Chassis - Realistic Flagship Device */}
        <div className="relative rounded-[48px] sm:rounded-[52px] p-3 sm:p-3.5 bg-slate-900 border-[5px] border-slate-700/90 shadow-[0_30px_70px_-15px_rgba(36,48,71,0.32)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7)] ring-1 ring-slate-800">
          
          {/* Dynamic Island / Top Notch */}
          <div className="relative z-30 w-28 h-4.5 bg-black rounded-full mx-auto mb-2 flex items-center justify-between px-3">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80 ring-1 ring-[#10b981]/40" />
          </div>

          {/* Phone Screen Container - Crisp & Rounded */}
          <div className="rounded-[38px] sm:rounded-[42px] overflow-hidden bg-[#ece5dd] dark:bg-[#111927] border border-slate-800 flex flex-col">
            
            {/* Status Bar */}
            <div className="bg-[#075e54] dark:bg-[#0c1f1c] px-4 pt-1 pb-1.5 flex items-center justify-between text-white text-[11px] font-semibold tracking-wide">
              <span>9:41</span>
              <div className="flex items-center gap-1.5 text-[12px]">
                <Icon name="signal_cellular_alt" className="text-[13px]" />
                <Icon name="wifi" className="text-[13px]" />
                <Icon name="battery_full" className="text-[13px]" />
              </div>
            </div>

            {/* WhatsApp App Bar */}
            <div className="bg-[#075e54] dark:bg-[#0c1f1c] px-3.5 py-2.5 flex items-center justify-between shadow-xs border-b border-[#054c44] dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <Icon name="arrow_back" className="text-white text-[18px] cursor-pointer" />
                
                {/* EduDisk Avatar with Verified Badge */}
                <div className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center p-0.5 shadow-xs">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <circle cx="32" cy="32" r="30" fill="#0A0D14" />
                    <circle cx="32" cy="32" r="13" fill="#FFFFFF" />
                    <circle cx="32" cy="32" r="4.5" fill="#0A0D14" />
                    <circle cx="18" cy="18" r="5.5" fill="#2A2FFF" />
                  </svg>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#25D366] rounded-full border border-white flex items-center justify-center text-[8px] text-white font-extrabold">
                    ✓
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="text-white text-[13px] font-bold leading-tight truncate">
                      {t('whatsapp.senderName', 'EduDisk Campus')}
                    </p>
                    <Icon name="verified" filled className="text-[#25D366] text-[13px]" />
                  </div>
                  <p className="text-[10px] text-emerald-100/80 leading-tight">
                    {t('whatsapp.senderSubtitle', 'Official WhatsApp Business')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white/80">
                <Icon name="videocam" className="text-[18px]" />
                <Icon name="call" className="text-[16px]" />
                <Icon name="more_vert" className="text-[18px]" />
              </div>
            </div>

            {/* Chat Body Wallpaper: EXPANDED SCREEN, ZERO INTERNAL SCROLLBAR */}
            <div className="p-3.5 sm:p-4 flex flex-col gap-3 sm:gap-3.5">
              
              {/* Date Capsule */}
              <div className="mx-auto bg-white/90 dark:bg-slate-800/90 backdrop-blur-xs px-3.5 py-0.5 rounded-full text-[10.5px] text-slate-500 dark:text-slate-400 font-bold shadow-2xs border border-slate-200/50 dark:border-slate-700">
                {t('whatsapp.today', 'Today')}
              </div>

              {/* End-to-End Encryption Notice Pill */}
              <div className="mx-auto max-w-[270px] text-center bg-[#ffeebd]/85 dark:bg-amber-950/40 px-2.5 py-1.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40 text-[9.5px] text-amber-900 dark:text-amber-200 font-medium">
                🔒 Official Cloud API · Verified Student Guardian Delivery
              </div>

              {/* ---------------------------------------------------- */}
              {/* MESSAGE 1: PERIOD ABSENCE ALERT (Mint Accent)        */}
              {/* ---------------------------------------------------- */}
              <motion.div
                variants={bubbleVariants}
                custom={showAbsence ? 0.75 : 1.1}
                className={`flex flex-col gap-1 rounded-2xl rounded-tl-xs p-3.5 shadow-xs border transition-all duration-300 ${
                  hoveredPanel === 'absence' || activeTab === 'absence'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-600 ring-2 ring-emerald-400/40 shadow-sm'
                    : 'bg-white dark:bg-slate-800 border-slate-200/70 dark:border-slate-700'
                }`}
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100 dark:border-slate-700/60 text-[10.5px]">
                  <span className="font-extrabold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{isKannada ? 'ಗೈರುಹಾಜರಿ ಅಧಿಸೂಚನೆ' : 'Attendance Alert'}</span>
                  </span>
                  <span className="text-slate-400 text-[10px]">8:45 AM</span>
                </div>

                <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-800 dark:text-slate-100 font-sans">
                  {t(
                    'whatsapp.absenceMsg1',
                    'Dear Parent, your ward Rahul Sharma (II PUC J1) was marked absent for the Morning Slot on 12-Oct-2026.'
                  )}
                </p>

                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 italic">
                  {t(
                    'whatsapp.absenceMsg2',
                    'If this absence is unexpected, please contact the campus office directly.'
                  )}
                </p>

                {/* Delivery checkmarks */}
                <div className="flex items-center justify-end gap-1 pt-1 mt-0.5 text-[#34B7F1]">
                  <span className="text-[9.5px] text-slate-400 font-medium">8:45 AM</span>
                  <motion.div variants={tickVariants}>
                    <Icon name="done_all" className="text-[14px] text-[#34B7F1]" />
                  </motion.div>
                </div>
              </motion.div>

              {/* ---------------------------------------------------- */}
              {/* MESSAGE 2: EXAM RESULTS MARKSHEET (Lavender Accent)  */}
              {/* ---------------------------------------------------- */}
              <motion.div
                variants={bubbleVariants}
                custom={showExam ? 0.95 : 1.3}
                className={`flex flex-col gap-1 rounded-2xl rounded-tl-xs p-3.5 shadow-xs border transition-all duration-300 ${
                  hoveredPanel === 'exam' || activeTab === 'exam'
                    ? 'bg-purple-50 dark:bg-purple-950/60 border-purple-400 dark:border-purple-600 ring-2 ring-purple-400/40 shadow-sm'
                    : 'bg-white dark:bg-slate-800 border-slate-200/70 dark:border-slate-700'
                }`}
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100 dark:border-slate-700/60 text-[10.5px]">
                  <span className="font-extrabold text-[#2a2fff] dark:text-[#93c5fd] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2a2fff]" />
                    <span>{isKannada ? 'ಪರೀಕ್ಷಾ ಪ್ರಗತಿಪತ್ರ' : 'Mid-Term Scorecard'}</span>
                  </span>
                  <span className="text-slate-400 text-[10px]">2:30 PM</span>
                </div>

                <p className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 dark:text-white leading-tight">
                  {t('whatsapp.examMsg1', 'Result Published: Mid-Term Examination (II PUC J1)')}
                </p>

                <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-slate-700 dark:text-slate-200 mt-0.5">
                  {t(
                    'whatsapp.examMsg2',
                    'Rahul Sharma scored 87% (435/500). Physics: 92, Chemistry: 88, Maths: 85, English: 82, Kannada: 88.'
                  )}
                </p>

                {/* Score breakdown chips */}
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="px-2 py-0.5 rounded-md bg-purple-100/90 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 text-[10.5px] font-bold">
                    Aggregate: 87%
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100/90 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-[10.5px] font-bold">
                    Rank #4
                  </span>
                </div>

                {/* Delivery checkmarks */}
                <div className="flex items-center justify-end gap-1 pt-1 mt-0.5 text-[#34B7F1]">
                  <span className="text-[9.5px] text-slate-400 font-medium">2:30 PM</span>
                  <motion.div variants={tickVariants}>
                    <Icon name="done_all" className="text-[14px] text-[#34B7F1]" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Bottom confirmation pill */}
              <div className="flex items-center justify-center gap-1.5 text-[10.5px] font-bold text-slate-600 dark:text-slate-300 bg-white/90 dark:bg-slate-800/90 py-1.5 px-3.5 rounded-full mx-auto shadow-2xs border border-slate-200/60 dark:border-slate-700">
                <Icon name="verified" filled className="text-emerald-500 text-[14px]" />
                <span>{t('whatsapp.deliveredToGuardian', 'Delivered to Guardian')}</span>
              </div>

              {/* iOS Home Indicator */}
              <div className="w-28 h-1 bg-slate-400/40 dark:bg-slate-600/60 rounded-full mx-auto mt-2 mb-1" />

            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// Main WhatsAppSection Component
// ============================================================================
export function WhatsAppSection() {
  const { isKannada, t } = useTranslation()
  const [activeTab, setActiveTab] = useState('all') // 'all' | 'absence' | 'exam'
  const [hoveredPanel, setHoveredPanel] = useState(null) // null | 'absence' | 'exam'

  // Three Absence Workflow Steps
  const absenceSteps = useMemo(
    () => [
      {
        num: '01',
        icon: 'calendar_today',
        text: t('whatsapp.absenceStep1', 'Office selects the date, class, and attendance slot.'),
      },
      {
        num: '02',
        icon: 'send',
        text: t(
          'whatsapp.absenceStep2',
          'The notification is sent to the relevant guardian numbers through official WhatsApp.'
        ),
      },
      {
        num: '03',
        icon: 'verified',
        text: t(
          'whatsapp.absenceStep3',
          'Delivery status is tracked as supported by the existing system.'
        ),
      },
    ],
    [t]
  )

  // Three Exam Results Workflow Steps
  const examSteps = useMemo(
    () => [
      {
        num: '01',
        icon: 'fact_check',
        text: t('whatsapp.examStep1', 'Publish examination results in EduDisk.'),
      },
      {
        num: '02',
        icon: 'send',
        text: t(
          'whatsapp.examStep2',
          'Send the notification to the relevant guardian numbers through official WhatsApp.'
        ),
      },
      {
        num: '03',
        icon: 'verified',
        text: t(
          'whatsapp.examStep3',
          'Track the delivery status as supported by the existing system.'
        ),
      },
    ],
    [t]
  )

  return (
    <section
      id="whatsapp"
      className="px-margin-mobile md:px-margin-desktop py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0a0f1d] transition-colors duration-250 select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-pastel-mint/35 dark:bg-emerald-900/10 rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-pastel-lavender/35 dark:bg-purple-900/10 rounded-full blur-[110px] -z-10 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto">
        
        {/* ======================================================== */}
        {/* PHASE 1: SECTION HEADER & WORKFLOW CONTROLS              */}
        {/* ======================================================== */}
        <RevealOnScroll>
          <motion.div
            variants={headingVariants}
            className="text-center max-w-[760px] mx-auto mb-12 sm:mb-16"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 bg-pastel-mint/80 dark:bg-emerald-950/40 rounded-full border border-mint-text/20 dark:border-emerald-600/30 shadow-2xs">
              <Icon name="chat" className="text-mint-text dark:text-emerald-400 text-[16px]" />
              <span className="font-[Inter] text-[13px] font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                {t('whatsapp.badge', 'Guardian Communication')}
              </span>
            </div>

            {/* Section Title */}
            <h2 className="font-[Plus_Jakarta_Sans] text-[32px] sm:text-[40px] md:text-[44px] font-extrabold leading-[1.16] tracking-[-0.02em] text-slate-900 dark:text-white mb-4">
              {t('whatsapp.title', 'Direct WhatsApp Alerts. Zero SMS Friction.')}
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 dark:text-slate-300 text-[15px] sm:text-[17px] leading-relaxed">
              {t(
                'whatsapp.subtitle',
                'Keep parents informed in real time without requiring them to remember passwords or download separate parent apps.'
              )}
            </p>

            {/* Functional Workflow Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
              {[
                { id: 'all', label: t('whatsapp.tabAll', 'Both Workflows'), icon: 'hub' },
                { id: 'absence', label: t('whatsapp.tabAbsence', 'Absence Alerts'), icon: 'event_busy' },
                { id: 'exam', label: t('whatsapp.tabExam', 'Exam Results'), icon: 'assignment' },
              ].map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? 'bg-[#2a2fff] text-white border-[#2a2fff] shadow-sm scale-[1.02]'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80'
                    }`}
                  >
                    <Icon name={tab.icon} filled={isActive} className="text-[17px]" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* ======================================================== */}
        {/* BALANCED 3-PART SHOWCASE: LEFT PANEL - PHONE - RIGHT     */}
        {/* ======================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center"
        >
          
          {/* ====================================================== */}
          {/* DESKTOP CONNECTOR SVG PATHS OVERLAY (LONGER & THICKER) */}
          {/* ====================================================== */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block z-25">
            <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
              <defs>
                <linearGradient id="mintConnectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>

                <linearGradient id="purpleConnectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#2a2fff" />
                </linearGradient>

                {/* Subtle Ambient Glow Filters */}
                <filter id="mintGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* -------------------------------------------------- */}
              {/* LEFT CONNECTOR: Absence Card -> Phone Mockup       */}
              {/* Sweeping bezier curve: X: 348 -> 436 (Calibrated)  */}
              {/* -------------------------------------------------- */}
              {/* Luminous Glow Halo Underlayer */}
              <motion.path
                d="M 348 215 C 400 215, 390 268, 436 268"
                fill="none"
                stroke="#10b981"
                strokeWidth="12"
                opacity={hoveredPanel === 'absence' || activeTab === 'absence' ? 0.35 : 0.18}
                filter="url(#mintGlow)"
              />

              {/* Main Thick Connector Path */}
              <motion.path
                d="M 348 215 C 400 215, 390 268, 436 268"
                fill="none"
                stroke="url(#mintConnectorGrad)"
                strokeWidth={hoveredPanel === 'absence' || activeTab === 'absence' ? '5.5' : '4'}
                strokeDasharray={hoveredPanel === 'absence' || activeTab === 'absence' ? 'none' : '8 6'}
                strokeLinecap="round"
                className="transition-all duration-300"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.55 }}
              />

              {/* Terminal Anchor Docks: Left Card Edge & Phone Bezel */}
              <circle cx="348" cy="215" r="10" fill="#10b981" opacity="0.25" className="animate-ping" />
              <circle cx="348" cy="215" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
              <circle cx="436" cy="268" r="9" fill="#10b981" opacity="0.25" />
              <circle cx="436" cy="268" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />

              {/* Left Travelling Pulse Bead */}
              {(activeTab === 'all' || activeTab === 'absence' || hoveredPanel === 'absence') && (
                <motion.g
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <motion.circle
                    r="12"
                    fill="#10b981"
                    opacity="0.3"
                    animate={{
                      cx: [348, 392, 436],
                      cy: [215, 241, 268],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    r="6"
                    fill="#10b981"
                    stroke="#ffffff"
                    strokeWidth="2"
                    animate={{
                      cx: [348, 392, 436],
                      cy: [215, 241, 268],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.g>
              )}

              {/* -------------------------------------------------- */}
              {/* RIGHT CONNECTOR: Phone Mockup -> Exam Results Card */}
              {/* Sweeping bezier curve: X: 764 -> 852 (Calibrated)  */}
              {/* -------------------------------------------------- */}
              {/* Luminous Glow Halo Underlayer */}
              <motion.path
                d="M 764 392 C 812 392, 802 270, 852 270"
                fill="none"
                stroke="#2a2fff"
                strokeWidth="12"
                opacity={hoveredPanel === 'exam' || activeTab === 'exam' ? 0.35 : 0.18}
                filter="url(#purpleGlow)"
              />

              {/* Main Thick Connector Path */}
              <motion.path
                d="M 764 392 C 812 392, 802 270, 852 270"
                fill="none"
                stroke="url(#purpleConnectorGrad)"
                strokeWidth={hoveredPanel === 'exam' || activeTab === 'exam' ? '5.5' : '4'}
                strokeDasharray={hoveredPanel === 'exam' || activeTab === 'exam' ? 'none' : '8 6'}
                strokeLinecap="round"
                className="transition-all duration-300"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.6 }}
              />

              {/* Terminal Anchor Docks: Phone Bezel & Right Card Edge */}
              <circle cx="764" cy="392" r="9" fill="#2a2fff" opacity="0.25" />
              <circle cx="764" cy="392" r="4.5" fill="#2a2fff" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="852" cy="270" r="10" fill="#2a2fff" opacity="0.25" className="animate-ping" />
              <circle cx="852" cy="270" r="5" fill="#2a2fff" stroke="#ffffff" strokeWidth="2" />

              {/* Right Travelling Pulse Bead */}
              {(activeTab === 'all' || activeTab === 'exam' || hoveredPanel === 'exam') && (
                <motion.g
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <motion.circle
                    r="12"
                    fill="#2a2fff"
                    opacity="0.3"
                    animate={{
                      cx: [764, 808, 852],
                      cy: [392, 331, 270],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    r="6"
                    fill="#2a2fff"
                    stroke="#ffffff"
                    strokeWidth="2"
                    animate={{
                      cx: [764, 808, 852],
                      cy: [392, 331, 270],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.g>
              )}
            </svg>
          </div>

          {/* ------------------------------------------------------ */}
          {/* 1. LEFT PANEL: ABSENCE ALERTS (Mint Green Theme)       */}
          {/* ------------------------------------------------------ */}
          <motion.div
            variants={leftPanelVariants}
            onMouseEnter={() => setHoveredPanel('absence')}
            onMouseLeave={() => setHoveredPanel(null)}
            className={`lg:col-span-4 max-w-[360px] xl:max-w-[380px] w-full lg:justify-self-start rounded-3xl p-6 sm:p-7 md:p-8 bg-white dark:bg-[#111827] border transition-all duration-300 relative z-10 flex flex-col justify-between ${
              hoveredPanel === 'absence' || activeTab === 'absence'
                ? 'border-emerald-500/60 shadow-[0_12px_40px_rgba(16,185,129,0.12)] -translate-y-1 ring-1 ring-emerald-500/20'
                : 'border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-500/40'
            }`}
          >
            <div>
              {/* Header: Icon + Category Badge */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-pastel-mint dark:bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Icon name="event_busy" filled className="text-[26px]" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  {t('whatsapp.absenceTag', 'Daily Period Attendance')}
                </span>
              </div>

              {/* Panel Title & Short Description */}
              <h3 className="font-[Plus_Jakarta_Sans] text-[22px] sm:text-[24px] font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
                {t('whatsapp.absenceTitle', 'Absence Alerts')}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-[13px] sm:text-[14px] leading-relaxed mb-6">
                {t(
                  'whatsapp.absenceDesc',
                  'Guardians receive immediate notifications whenever an absence is logged for any period, keeping families aligned without manual registers.'
                )}
              </p>
            </div>

            {/* Three Exact Workflow Steps */}
            <div className="space-y-3">
              {absenceSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={stepVariants}
                  custom={idx}
                  className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/60 p-3 sm:p-3.5 rounded-2xl border border-slate-200/70 dark:border-slate-700/80 transition-all group hover:border-emerald-500/40"
                >
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-extrabold text-[11px] shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800">
                    {step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12.5px] sm:text-[13px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {step.text}
                    </p>
                  </div>
                  <Icon
                    name={step.icon}
                    className="text-emerald-600 dark:text-emerald-400 text-[18px] opacity-80 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom Benefit Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[11px] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{isKannada ? 'ಹಾಜರಿದ್ದ ಮಕ್ಕಳಿಗೆ ಸಂದೇಶ ಹೋಗುವುದಿಲ್ಲ' : 'Absences only — present students are not messaged'}</span>
            </div>
          </motion.div>

          {/* Mobile Vertical Flow Badge 1 */}
          <div className="lg:hidden flex flex-col items-center justify-center -my-3 z-15">
            <div className="w-1 h-5 bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-full" />
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 shadow-2xs mt-1">
              ↓ {isKannada ? 'ಸ್ವಯಂಚಾಲಿತ ಗೈರುಹಾಜರಿ ಸಂದೇಶ' : 'Instant Absence Alert Dispatch'} ↓
            </span>
          </div>

          {/* ------------------------------------------------------ */}
          {/* 2. CENTER: SMARTPHONE MOCKUP (Visual Focal Point)      */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-4 flex justify-center z-20">
            <PhoneMockup
              activeTab={activeTab}
              hoveredPanel={hoveredPanel}
              isKannada={isKannada}
              t={t}
            />
          </div>

          {/* Mobile Vertical Flow Badge 2 */}
          <div className="lg:hidden flex flex-col items-center justify-center -my-3 z-15">
            <div className="w-1 h-5 bg-gradient-to-b from-[#2a2fff] to-purple-500 rounded-full" />
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700 shadow-2xs mt-1">
              ↓ {isKannada ? 'ಪ್ರಕಟಿತ ಅಂಕಪಟ್ಟಿ ರವಾನೆ' : 'Published Marks & Scorecard Sync'} ↓
            </span>
          </div>

          {/* ------------------------------------------------------ */}
          {/* 3. RIGHT PANEL: EXAM RESULTS (Lavender & Blue Theme)   */}
          {/* ------------------------------------------------------ */}
          <motion.div
            variants={rightPanelVariants}
            onMouseEnter={() => setHoveredPanel('exam')}
            onMouseLeave={() => setHoveredPanel(null)}
            className={`lg:col-span-4 max-w-[360px] xl:max-w-[380px] w-full lg:justify-self-end rounded-3xl p-6 sm:p-7 md:p-8 bg-white dark:bg-[#111827] border transition-all duration-300 relative z-10 flex flex-col justify-between ${
              hoveredPanel === 'exam' || activeTab === 'exam'
                ? 'border-[#2a2fff]/60 shadow-[0_12px_40px_rgba(42,47,255,0.12)] -translate-y-1 ring-1 ring-[#2a2fff]/20'
                : 'border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-[#2a2fff]/40'
            }`}
          >
            <div>
              {/* Header: Icon + Category Badge */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-pastel-lavender dark:bg-purple-950/40 border border-[#2a2fff]/30 flex items-center justify-center text-[#2a2fff] dark:text-[#93c5fd]">
                  <Icon name="assignment" filled className="text-[26px]" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  {t('whatsapp.examTag', 'Instant Scorecards')}
                </span>
              </div>

              {/* Panel Title & Short Description */}
              <h3 className="font-[Plus_Jakarta_Sans] text-[22px] sm:text-[24px] font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
                {t('whatsapp.examTitle', 'Exam Results')}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-[13px] sm:text-[14px] leading-relaxed mb-6">
                {t(
                  'whatsapp.examDesc',
                  'Guardians receive verified subject-wise marks and grades the moment examination results are officially approved and published.'
                )}
              </p>
            </div>

            {/* Three Exact Workflow Steps */}
            <div className="space-y-3">
              {examSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={stepVariants}
                  custom={idx}
                  className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/60 p-3 sm:p-3.5 rounded-2xl border border-slate-200/70 dark:border-slate-700/80 transition-all group hover:border-[#2a2fff]/40"
                >
                  <div className="w-7 h-7 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex items-center justify-center font-extrabold text-[11px] shrink-0 mt-0.5 border border-purple-200 dark:border-purple-800">
                    {step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12.5px] sm:text-[13px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {step.text}
                    </p>
                  </div>
                  <Icon
                    name={step.icon}
                    className="text-[#2a2fff] dark:text-[#93c5fd] text-[18px] opacity-80 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom Benefit Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[11px] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#2a2fff]" />
              <span>{isKannada ? 'ಕರಡು ಹಂತದಲ್ಲಿರುವ ಅಂಕಗಳು ರವಾನೆಯಾಗುವುದಿಲ್ಲ' : 'Draft protection — unpublished marks are never sent'}</span>
            </div>
          </motion.div>

        </motion.div>

        {/* ======================================================== */}
        {/* COMPLIANCE & PROTOCOL BADGE FOOTER                       */}
        {/* ======================================================== */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Icon name="verified_user" className="text-emerald-500 text-[18px]" />
            <span>{t('whatsapp.officialCompliance', 'Compliant with TRAI / Meta WhatsApp Business Messaging guidelines')}</span>
          </div>

          <div className="flex items-center gap-3 font-semibold text-slate-600 dark:text-slate-300">
            <span>• MSG91 Enterprise Gateway</span>
            <span>• 99.8% Verified Delivery</span>
            <span>• Zero Parent Logins</span>
          </div>
        </div>

      </div>
    </section>
  )
}
