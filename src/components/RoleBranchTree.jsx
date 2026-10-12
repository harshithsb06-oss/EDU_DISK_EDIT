import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './Icon'
import { useTranslation } from '../context/LanguageContext'

export function RoleBranchTree() {
  const { isKannada, t } = useTranslation()

  // Always default to all branches expanded mode (Admin, Staff, Guardians)
  const [expandedRoles, setExpandedRoles] = useState({ admin: true, staff: true, parents: true })

  const roleTreeData = useMemo(() => [
    {
      id: 'admin',
      name: isKannada ? 'ಆಡಳಿತ ಮಂಡಳಿ' : 'Admin',
      sublabel: isKannada ? 'ಕಚೇರಿ ಮತ್ತು ಪ್ರಾಂಶುಪಾಲರು' : 'Office & Principal',
      badge: isKannada ? 'ಇಮೇಲ್ ಲಾಗಿನ್' : 'Email Login',
      icon: 'analytics',
      theme: {
        accent: 'text-[#2a2fff] dark:text-[#60a5fa]',
        bgPill: 'bg-pastel-blue dark:bg-[#2a2fff]/20',
        border: 'border-[#2a2fff]/30 dark:border-[#2a2fff]/45',
        badge: 'bg-pastel-blue dark:bg-[#2a2fff]/20 text-[#2a2fff] dark:text-[#93c5fd] border-[#2a2fff]/25',
        iconBg: 'bg-pastel-blue dark:bg-[#2a2fff]/20 text-[#2a2fff] dark:text-[#93c5fd] border-[#2a2fff]/20',
        glow: 'rgba(42, 47, 255, 0.25)',
        lineColor: '#2A2FFF',
      },
      description: isKannada
        ? 'ಸಂಸ್ಥೆಯ ಸಮಗ್ರ ಆಡಳಿತ, ಶುಲ್ಕ ನಿರ್ವಹಣೆ, ಹಾಜರಾತಿ ನಿಯಮಗಳು ಮತ್ತು ಅಧಿಕೃತ ದಾಖಲೆಗಳ ಕೇಂದ್ರೀಕೃತ ನಿರ್ವಹಣೆ.'
        : 'Central administrative command center for institutional governance, fee compliance, attendance rules, and official records.',
      features: [
        {
          id: 'adm-1',
          title: isKannada ? 'ವಿದ್ಯಾರ್ಥಿ ದಾಖಲೆಗಳು' : 'Student records & contacts',
          icon: 'person_search',
          tag: isKannada ? 'ದಾಖಲೆಗಳು' : 'Records',
          desc: isKannada
            ? 'ತರಗತಿ, ವಿಭಾಗ, ಪೋಷಕರ ಫೋನ್ ನಂಬರ್, ಆಧಾರ್, SATS ಸಂಖ್ಯೆ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರಗಳ ಸಮಗ್ರ ಡೈರೆಕ್ಟರಿ.'
            : 'Full student directory with class and section, guardian phone numbers, and trust fields (Aadhaar, SATS, caste, bank, parent details) with Excel/PDF export.',
        },
        {
          id: 'adm-2',
          title: isKannada ? 'ಸಿಬ್ಬಂದಿ ನಿರ್ವಹಣೆ & ಪ್ರವೇಶ' : 'Staff management & access',
          icon: 'badge',
          tag: isKannada ? 'ಭದ್ರತೆ' : 'Security',
          desc: isKannada
            ? 'ಉದ್ಯೋಗಿ ಐಡಿ, ವಿಷಯಗಳ ನಿಯೋಜನೆ, ಆಡಳಿತಾತ್ಮಕ ಜವಾಬ್ದಾರಿಗಳು ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸುವಿಕೆ.'
            : 'Employee ID credentials, subject assignment, administrative role flags, fee-only collection rights, and instant password reset.',
        },
        {
          id: 'adm-3',
          title: isKannada ? 'ಶೈಕ್ಷಣಿಕ ರಚನೆ ಸೆಟಪ್' : 'Academic structure setup',
          icon: 'class',
          tag: isKannada ? 'ಪಠ್ಯಕ್ರಮ' : 'Curriculum',
          desc: isKannada
            ? 'ಶೈಕ್ಷಣಿಕ ವರ್ಷದ ತರಗತಿಗಳು, ವಿಭಾಗಗಳು, ವಿಷಯಗಳು ಮತ್ತು ಪರೀಕ್ಷಾ ವಿಧಾನಗಳ ಸಂರಚನೆ.'
            : 'Configure classes, sections, subjects, course allocations, and examination types for the academic year.',
        },
        {
          id: 'adm-4',
          title: isKannada ? 'ಹಾಜರಾತಿ ಮಾದರಿ & ನಿಯಮಗಳು' : 'Attendance patterns & rules',
          icon: 'date_range',
          tag: isKannada ? 'ಹಾಜರಾತಿ' : 'Attendance',
          desc: isKannada
            ? 'ಪೀರಿಯಡ್ ಸಮಯಗಳು, ವಾರದ ವೇಳಾಪಟ್ಟಿ, ಸಂಸ್ಥೆಯ ರಜಾದಿನಗಳು ಮತ್ತು ಪೀರಿಯಡ್ ರದ್ದತಿ ನಿಯಮಗಳು.'
            : 'Define named periods and time slots, weekday schedules, institution holidays, and slot cancellation rules.',
        },
        {
          id: 'adm-5',
          title: isKannada ? 'ಶುಲ್ಕ ನಿಯೋಜನೆ & ಲೆಡ್ಜರ್' : 'Fee assignment & ledger',
          icon: 'receipt_long',
          tag: isKannada ? 'ಹಣಕಾಸು' : 'Finance',
          desc: isKannada
            ? 'ಕಂತುಗಳ ಶುಲ್ಕ ನಿಗದಿ, ನಗದು, UPI, ಚೆಕ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾವತಿಗಳ ರಸೀದಿಗಳು ಹಾಗೂ ಬಾಕಿ ವರದಿ.'
            : 'Bulk or student-level fee assignment and payment recording (cash, UPI, cheque, bank transfer) with overdue statements and PDF receipts.',
        },
        {
          id: 'adm-6',
          title: isKannada ? 'ವಾಟ್ಸಾಪ್ ಬ್ರಾಡ್‌ಕಾಸ್ಟ್' : 'WhatsApp broadcasts',
          icon: 'campaign',
          tag: isKannada ? 'ಅಲರ್ಟ್‌ಗಳು' : 'Alerts',
          desc: isKannada
            ? 'ಗೈರುಹಾಜರಿ ಮತ್ತು ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳನ್ನು ಅಧಿಕೃತ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಪೋಷಕರಿಗೆ ತಲುಪಿಸುವ ವ್ಯವಸ್ಥೆ.'
            : 'Bulk absence notifications and examination-result messages dispatched via official WhatsApp with live delivery receipts.',
        },
        {
          id: 'adm-7',
          title: isKannada ? 'ಪ್ರವೇಶ ವಿಚಾರಣೆ CRM' : 'Admissions enquiry & CRM',
          icon: 'person_add',
          tag: isKannada ? 'ಪ್ರವೇಶಗಳು' : 'Admissions',
          desc: isKannada
            ? 'ಹೊಸ ಭೇಟಿಗಳು, ವಿಚಾರಣೆಗಳು ಮತ್ತು ಫಾಲೋ-ಅಪ್ ಜ್ಞಾಪನೆಗಳ ವ್ಯವಸ್ಥಿತ ದಾಖಲೆ.'
            : 'Structured inquiry tracking pipeline (new → qualified → converted) with follow-up reminders so walk-in parents are never lost.',
        },
        {
          id: 'adm-8',
          title: isKannada ? 'ಪ್ರಮಾಣಪತ್ರಗಳು & ದಾಖಲೆಗಳು' : 'Certificates & documents',
          icon: 'workspace_premium',
          tag: isKannada ? 'ಅಧಿಕೃತ PDF' : 'Official PDFs',
          desc: isKannada
            ? 'ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಸ್ಟಡಿ ಸರ್ಟಿಫಿಕೇಟ್, ವರ್ಗಾವಣೆ ಪ್ರಮಾಣಪತ್ರ (TC) ಮತ್ತು ಬೋನಫೈಡ್ PDF ಮುದ್ರಣ.'
            : 'One-click automated generation of study certificates, transfer certificates (TC), and bonafide PDFs from existing student records.',
        },
      ],
    },
    {
      id: 'staff',
      name: isKannada ? 'ಬೋಧಕ ಸಿಬ್ಬಂದಿ' : 'Staff',
      sublabel: isKannada ? 'ಶಿಕ್ಷಕರು & ಉಪನ್ಯಾಸಕರು' : 'Teachers & Lecturers',
      badge: isKannada ? 'ಎಂಪ್ಲಾಯ್ ಐಡಿ ಲಾಗಿನ್' : 'Employee ID Login',
      icon: 'school',
      theme: {
        accent: 'text-secondary dark:text-purple-300',
        bgPill: 'bg-pastel-lavender dark:bg-purple-900/30',
        border: 'border-secondary/30 dark:border-purple-600/40',
        badge: 'bg-pastel-lavender dark:bg-purple-900/30 text-secondary dark:text-purple-300 border-secondary/25',
        iconBg: 'bg-pastel-lavender dark:bg-purple-900/30 text-secondary dark:text-purple-300 border-secondary/20',
        glow: 'rgba(139, 124, 246, 0.25)',
        lineColor: '#8B7CF6',
      },
      description: isKannada
        ? 'ದೈನಂದಿನ ತರಗತಿ ಹಾಜರಾತಿ, ಪರೀಕ್ಷಾ ಅಂಕಗಳ ನಮೂದು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರಗತಿ ಪರಿಶೀಲನೆಗೆ ಮೊಬೈಲ್-ಸ್ನೇಹಿ ವ್ಯವಸ್ಥೆ.'
        : 'Fast mobile-friendly interface for daily classroom routines, period-by-period absence marking, marks entry, and student lookups.',
      features: [
        {
          id: 'stf-1',
          title: isKannada ? 'ಪೀರಿಯಡ್ ಹಾಜರಾತಿ ದಾಖಲಾತಿ' : 'Slot absence marking',
          icon: 'event_available',
          tag: isKannada ? 'ಹಾಜರಾತಿ' : 'Attendance',
          desc: isKannada
            ? 'ಕೇವಲ ಗೈರುಹಾಜರಾದ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಮಾತ್ರ ಗುರುತಿಸಿ; ಹಾಜರಾದವರನ್ನು ಸಿಸ್ಟಮ್ ತಾನೇ ಲೆಕ್ಕಹಾಕುತ್ತದೆ.'
            : 'Staff tick absences only. Present count is derived automatically, saving 15 minutes of lecture time every single period.',
        },
        {
          id: 'stf-2',
          title: isKannada ? 'ಪರೀಕ್ಷಾ ಅಂಕಗಳ ಎಕ್ಸೆಲ್ ನಮೂದು' : 'Marks draft & submit workflow',
          icon: 'assignment_turned_in',
          tag: isKannada ? 'ಅಂಕಗಳು' : 'Grading',
          desc: isKannada
            ? 'ಎಕ್ಸೆಲ್ ಟೆಂಪ್ಲೇಟ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಅಂಕ ನಮೂದಿಸಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ: ಕರಡು → ಸಲ್ಲಿಕೆ → ಪ್ರಕಟಣೆ.'
            : 'Download pre-formatted class-subject Excel templates, fill marks offline, and upload. Draft mode ensures errors are caught before publishing.',
        },
        {
          id: 'stf-3',
          title: isKannada ? 'ವಿದ್ಯಾರ್ಥಿ ಮಾಹಿತಿ ವೀಕ್ಷಣೆ' : 'Student academic profile lookup',
          icon: 'manage_search',
          tag: isKannada ? 'ಮಾಹಿತಿ' : 'Directory',
          desc: isKannada
            ? 'ತರಗತಿಯ ಯಾವುದೇ ವಿದ್ಯಾರ್ಥಿಯ ಹಾಜರಾತಿ ಇತಿಹಾಸ ಮತ್ತು ಪೋಷಕರ ತುರ್ತು ಸಂಪರ್ಕ ವಿವರಗಳ ತಕ್ಷಣದ ವೀಕ್ಷಣೆ.'
            : 'Instant search by roll number or name to review attendance percentages, previous exam scores, and guardian contacts.',
        },
        {
          id: 'stf-4',
          title: isKannada ? 'ಪೀರಿಯಡ್ ರದ್ದತಿ & ಕಾರಣಗಳು' : 'Slot cancellation & reasons',
          icon: 'cancel',
          tag: isKannada ? 'ವೇಳಾಪಟ್ಟಿ' : 'Schedule',
          desc: isKannada
            ? 'ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮ ಅಥವಾ ರಜೆಯ ಸಂದರ್ಭದಲ್ಲಿ ಪೀರಿಯಡ್ ರದ್ದುಗೊಳಿಸಿ ಕಾರಣ ನಮೂದಿಸುವ ಸೌಲಭ್ಯ.'
            : 'Cancel scheduled periods with institutional reason codes (sports meet, guest lecture, rain holiday) preserving attendance accuracy.',
        },
      ],
    },
    {
      id: 'parents',
      name: isKannada ? 'ಪೋಷಕರು' : 'Guardians',
      sublabel: isKannada ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಪೋಷಕರು' : 'Parents on WhatsApp',
      badge: isKannada ? 'ಆ್ಯಪ್ ಅಗತ್ಯವಿಲ್ಲ' : 'No App Required',
      icon: 'family_restroom',
      theme: {
        accent: 'text-mint-text dark:text-emerald-300',
        bgPill: 'bg-pastel-mint dark:bg-emerald-900/30',
        border: 'border-mint-text/30 dark:border-emerald-600/40',
        badge: 'bg-pastel-mint dark:bg-emerald-900/30 text-mint-text dark:text-emerald-300 border-mint-text/25',
        iconBg: 'bg-pastel-mint dark:bg-emerald-900/30 text-mint-text dark:text-emerald-300 border-mint-text/20',
        glow: 'rgba(16, 185, 129, 0.25)',
        lineColor: '#10B981',
      },
      description: isKannada
        ? 'ಯಾವುದೇ ಹೊಸ ಆ್ಯಪ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಕಿರಿಕಿರಿಯಿಲ್ಲದೆ, ಪೋಷಕರು ದಿನನಿತ್ಯ ಬಳಸುವ ವಾಟ್ಸಾಪ್‌ಗೇ ನೇರ ಸಂದೇಶಗಳು.'
        : 'Zero-friction guardian updates delivered directly to standard WhatsApp with no separate apps to download or passwords to lose.',
      features: [
        {
          id: 'par-1',
          title: isKannada ? 'ತಕ್ಷಣದ ಗೈರುಹಾಜರಿ ಸಂದೇಶ' : 'Instant absence alerts',
          icon: 'event_busy',
          tag: isKannada ? 'ವಾಟ್ಸಾಪ್' : 'WhatsApp Alert',
          desc: isKannada
            ? 'ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು, ತರಗತಿ, ಪೀರಿಯಡ್ ಮತ್ತು ದಿನಾಂಕದ ವಿವರಗಳೊಂದಿಗೆ ನಿಮಿಷಗಳಲ್ಲೇ ಪೋಷಕರಿಗೆ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ.'
            : 'Automated notification sent to guardian phone with student name, class, period slot, and date within minutes of absence.',
        },
        {
          id: 'par-2',
          title: isKannada ? 'ಪರೀಕ್ಷಾ ಪ್ರಗತಿಪತ್ರ ಸಂದೇಶ' : 'Exam result broadcasts',
          icon: 'score',
          tag: isKannada ? 'ಗ್ರೇಡ್‌ಗಳು' : 'Grades',
          desc: isKannada
            ? 'ಫಲಿತಾಂಶ ಪ್ರಕಟವಾದ ತಕ್ಷಣ ವಿಷಯವಾರು ಅಂಕಗಳು ಮತ್ತು ಒಟ್ಟು ಶೇಕಡಾವಾರು ಅಂಕಗಳ ಸಮಗ್ರ ವರದಿ ಪೋಷಕರ ಮೊಬೈಲ್‌ಗೆ ರವಾನೆ.'
            : 'Formatted examination report cards sent to parents upon publishing — includes individual subject marks and total percentage.',
        },
        {
          id: 'par-3',
          title: isKannada ? 'ಶುಲ್ಕ ರಸೀದಿ ದೃಢೀಕರಣ' : 'Fee receipt confirmations',
          icon: 'receipt',
          tag: isKannada ? 'ರಸೀದಿ' : 'Receipts',
          desc: isKannada
            ? 'ಕಚೇರಿಯಲ್ಲಿ ಶುಲ್ಕ ಪಾವತಿಸಿದ ತಕ್ಷಣ ಡಿಜಿಟಲ್ ದೃಢೀಕರಣ ಮತ್ತು ರಶೀದಿ ವಿವರ ಪೋಷಕರ ವಾಟ್ಸಾಪ್‌ಗೆ ತಲುಪುತ್ತದೆ.'
            : 'Instant digital receipt acknowledgment delivered to parent mobile the moment an instalment is recorded.',
        },
        {
          id: 'par-4',
          title: isKannada ? 'ಅಧಿಕೃತ ಬಿಸಿನೆಸ್ API' : 'Official WhatsApp Route',
          icon: 'verified',
          tag: isKannada ? 'ದೃಢೀಕೃತ' : 'Official Route',
          desc: isKannada
            ? 'ಅಧಿಕೃತ ವಾಟ್ಸಾಪ್ ಬಿಸಿನೆಸ್ ಖಾತೆಯ ಮೂಲಕ ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ಅಧಿಕೃತ ರವಾನೆ.'
            : 'Dispatched through official WhatsApp Business route — recognized and trusted by parents rather than unknown personal numbers.',
        },
        {
          id: 'par-5',
          title: isKannada ? 'ಯಾವುದೇ ಪಾಸ್‌ವರ್ಡ್ ಕಿರಿಕಿರಿಯಿಲ್ಲ' : 'Zero login friction',
          icon: 'info',
          tag: isKannada ? 'ಸುಲಭ ಸಂಪರ್ಕ' : 'No Password',
          desc: isKannada
            ? 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆತುಹೋಗುವ ಅಥವಾ ಆ್ಯಪ್ ಅಪ್‌ಡೇಟ್ ಮಾಡುವ ಯಾವುದೇ ತೊಂದರೆಯಿಲ್ಲದೆ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ ಲಭ್ಯ.'
            : 'Families stay informed directly through the chat app they already use daily, with no forgotten passwords or app store barriers.',
        },
      ],
    },
  ], [isKannada])

  // Selected feature node for detail panel
  const [selectedFeature, setSelectedFeature] = useState(roleTreeData[0].features[0])
  const [activeRoleForFeature, setActiveRoleForFeature] = useState(roleTreeData[0])

  const allExpanded = expandedRoles.admin && expandedRoles.staff && expandedRoles.parents
  const allCollapsed = !expandedRoles.admin && !expandedRoles.staff && !expandedRoles.parents

  const toggleRole = (roleId) => {
    setExpandedRoles((prev) => {
      const willBeOpen = !prev[roleId]
      if (willBeOpen) {
        const r = roleTreeData.find((x) => x.id === roleId)
        if (r && r.features.length > 0) {
          setSelectedFeature(r.features[0])
          setActiveRoleForFeature(r)
        }
      }
      return {
        ...prev,
        [roleId]: willBeOpen,
      }
    })
  }

  const expandAll = () => {
    setExpandedRoles({ admin: true, staff: true, parents: true })
  }

  const collapseAll = () => {
    setExpandedRoles({ admin: false, staff: false, parents: false })
  }

  return (
    <div className="w-full flex flex-col gap-10">
      {/* 1. CONTROLS BAR: EXPAND/COLLAPSE HELPERS */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2a2fff] dark:bg-[#60a5fa] animate-pulse" />
          <span className="text-[12px] font-bold text-slate-700 dark:text-slate-300 tracking-wide uppercase">
            {isKannada ? 'ಪಾತ್ರ-ಆಧಾರಿತ ನಿರ್ವಹಣಾ ಶ್ರೇಣಿ' : 'Interactive Role Architecture Tree'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className={`text-[12px] font-bold px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              allExpanded
                ? 'bg-[#2a2fff] text-white shadow-xs'
                : 'text-slate-700 dark:text-slate-300 hover:text-[#2a2fff] bg-slate-100 dark:bg-slate-800 hover:bg-pastel-blue dark:hover:bg-slate-700'
            }`}
          >
            {allExpanded
              ? (isKannada ? 'ಎಲ್ಲಾ ಶಾಖೆಗಳು ವಿಸ್ತರಿಸಿವೆ ✓' : 'All Branches Expanded ✓')
              : (isKannada ? 'ಎಲ್ಲಾ ಶಾಖೆಗಳನ್ನು ವಿಸ್ತರಿಸಿ' : 'Expand All Branches')}
          </button>
          <button
            onClick={collapseAll}
            className={`text-[12px] font-bold px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              allCollapsed
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {isKannada ? 'ಸಂಕ್ಷೇಪಿಸಿ' : 'Collapse All'}
          </button>
        </div>
      </div>

      {/* 2. DESKTOP INTERACTIVE TREE DIAGRAM (HORIZONTAL / TREE STRUCTURE) */}
      <div className="hidden lg:flex flex-col items-center bg-white dark:bg-[#111827] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgba(42,47,255,0.06)] relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-pastel-blue/40 dark:from-[#2a2fff]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

        {/* ROOT NODE: EDUDISK CORE */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-gradient-to-r from-slate-900 via-[#2a2fff] to-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-lg border border-slate-700/60 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-black text-[15px]">
              E
            </div>
            <div>
              <p className="font-bold text-[15px] leading-tight tracking-wide">EduDisk ERP Core</p>
              <p className="text-[11px] text-blue-200 leading-tight">
                {isKannada ? 'ಏಕೀಕೃತ ಬಹು-ಪಾತ್ರ ವೇದಿಕೆ' : 'Unified Multi-Role Platform'}
              </p>
            </div>
          </div>

          {/* Root Connector Stem Line */}
          <div className="w-0.5 h-10 bg-gradient-to-b from-[#2a2fff] to-slate-300 dark:to-slate-700" />
        </div>

        {/* SVG CONNECTOR SPLINES TO THE 3 ROLE BRANCHES */}
        <div className="w-full max-w-[960px] h-12 relative -mt-1 select-none pointer-events-none">
          <svg viewBox="0 0 960 48" className="w-full h-full overflow-visible">
            {/* Center down */}
            <path d="M 480 0 L 480 48" stroke="#8B7CF6" strokeWidth="2.5" fill="none" opacity="0.6" />
            {/* Left curve to Admin */}
            <path d="M 480 0 C 480 28, 160 20, 160 48" stroke="#2A2FFF" strokeWidth="2.5" fill="none" opacity="0.6" />
            {/* Right curve to Guardians */}
            <path d="M 480 0 C 480 28, 800 20, 800 48" stroke="#10B981" strokeWidth="2.5" fill="none" opacity="0.6" />
          </svg>
        </div>

        {/* 3 ROLE BRANCH COLUMNS */}
        <div className="grid grid-cols-3 gap-6 w-full max-w-[1080px] mt-2">
          {roleTreeData.map((role) => {
            const isExpanded = !!expandedRoles[role.id]

            return (
              <div key={role.id} className="flex flex-col items-center">
                {/* ROLE PARENT NODE CARD */}
                <button
                  onClick={() => toggleRole(role.id)}
                  className={`w-full p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer group ${
                    isExpanded
                      ? `bg-white dark:bg-slate-800 shadow-md ${role.theme.border} ring-2 ring-offset-2 ring-[#2a2fff]/20 dark:ring-offset-[#111827]`
                      : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center border ${role.theme.iconBg}`}>
                      <Icon name={role.icon} filled className="text-[20px]" />
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${role.theme.badge}`}>
                      {role.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-[Plus_Jakarta_Sans] text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-[#2a2fff] dark:group-hover:text-[#60a5fa] transition-colors">
                      {role.name}
                    </h4>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">
                      {role.sublabel}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-[11px] font-bold">
                    <span className={role.theme.accent}>
                      {role.features.length} {isKannada ? 'ಸಾಮರ್ಥ್ಯಗಳು' : 'Capabilities'}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white">
                      <span>{isExpanded ? (isKannada ? 'ಮುಚ್ಚು' : 'Collapse') : (isKannada ? 'ವಿಸ್ತರಿಸು' : 'Expand')}</span>
                      <Icon name={isExpanded ? 'expand_less' : 'expand_more'} className="text-[16px]" />
                    </span>
                  </div>
                </button>

                {/* EXPANDABLE BRANCH CONNECTOR STEM & NODES */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="w-full flex flex-col items-center overflow-hidden"
                    >
                      {/* Vertical connector line */}
                      <div
                        className="w-0.5 h-6 my-1"
                        style={{ backgroundColor: role.theme.lineColor }}
                      />

                      {/* Feature Leaves Container */}
                      <div className="w-full flex flex-col gap-2 bg-slate-50/80 dark:bg-slate-850 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                        {role.features.map((feat, fidx) => {
                          const isSelected = selectedFeature?.id === feat.id

                          return (
                            <motion.button
                              key={feat.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: fidx * 0.04 }}
                              onClick={() => {
                                setSelectedFeature(feat)
                                setActiveRoleForFeature(role)
                              }}
                              className={`w-full p-2.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                                isSelected
                                  ? `bg-white dark:bg-slate-800 shadow-sm border-[#2a2fff] font-bold ${role.theme.accent}`
                                  : 'bg-white/80 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 border-slate-200/70 dark:border-slate-700/70 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-2 overflow-hidden">
                                <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? role.theme.bgPill + ' ' + role.theme.accent : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}`}>
                                  <Icon name={feat.icon} className="text-[14px]" />
                                </span>
                                <span className="text-[12px] truncate">
                                  {feat.title}
                                </span>
                              </div>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 shrink-0 font-medium">
                                {feat.tag}
                              </span>
                            </motion.button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      {/* 3. MOBILE & TABLET INTERACTIVE ACCORDION TREE HIERARCHY */}
      <div className="flex lg:hidden flex-col gap-4">
        {/* Mobile Root Node */}
        <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center gap-3 shadow-md">
          <div className="w-9 h-9 rounded-xl bg-[#2a2fff] flex items-center justify-center font-bold text-[16px]">
            E
          </div>
          <div>
            <h4 className="font-bold text-[15px]">EduDisk ERP Core</h4>
            <p className="text-[12px] text-slate-400">
              {isKannada ? 'ಮೂರು ಪ್ರತ್ಯೇಕ ಜವಾಬ್ದಾರಿಗಳ ನಿರ್ವಹಣೆ' : 'Three dedicated role permission trees'}
            </p>
          </div>
        </div>

        {/* 3 Role Trees on Mobile */}
        <div className="flex flex-col gap-3">
          {roleTreeData.map((role) => {
            const isExpanded = !!expandedRoles[role.id]

            return (
              <div
                key={role.id}
                className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggleRole(role.id)}
                  className="w-full p-4 text-left flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center border ${role.theme.iconBg}`}>
                      <Icon name={role.icon} filled className="text-[20px]" />
                    </span>
                    <div>
                      <h4 className="font-bold text-[15px] text-slate-900 dark:text-white">{role.name}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">{role.sublabel} · {role.badge}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${role.theme.badge}`}>
                      {role.features.length}
                    </span>
                    <Icon name={isExpanded ? 'expand_less' : 'expand_more'} className="text-[20px] text-slate-400" />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-100 dark:border-slate-800 p-3 bg-slate-50/70 dark:bg-slate-900/50 flex flex-col gap-2"
                    >
                      {role.features.map((feat) => {
                        const isSelected = selectedFeature?.id === feat.id

                        return (
                          <button
                            key={feat.id}
                            onClick={() => {
                              setSelectedFeature(feat)
                              setActiveRoleForFeature(role)
                            }}
                            className={`w-full p-3 rounded-xl text-left border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-white dark:bg-slate-800 shadow-xs border-[#2a2fff]'
                                : 'bg-white/90 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-[13px] text-slate-900 dark:text-white flex items-center gap-1.5">
                                <Icon name={feat.icon} className={`text-[16px] ${role.theme.accent}`} />
                                {feat.title}
                              </span>
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                {feat.tag}
                              </span>
                            </div>
                            <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-snug">
                              {feat.desc}
                            </p>
                          </button>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      {/* 4. COMPACT FEATURE DETAIL PANEL (FOR CURRENTLY SELECTED FEATURE NODE) */}
      {selectedFeature && (
        <motion.div
          key={selectedFeature.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-[0_6px_24px_rgba(42,47,255,0.06)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
            <div className="flex items-center gap-3">
              <span className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${activeRoleForFeature.theme.iconBg}`}>
                <Icon name={selectedFeature.icon} filled className="text-[24px]" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-[Plus_Jakarta_Sans] text-[18px] sm:text-[20px] font-bold text-slate-900 dark:text-white">
                    {selectedFeature.title}
                  </h4>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${activeRoleForFeature.theme.badge}`}>
                    {activeRoleForFeature.name} Branch
                  </span>
                </div>
                <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">
                  {activeRoleForFeature.sublabel} · {selectedFeature.tag} Module
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-pastel-mint dark:bg-emerald-900/30 px-3 py-1 rounded-full border border-mint-text/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Live in Production
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-2">
              <p className="text-slate-700 dark:text-slate-300 text-[14px] sm:text-[15px] leading-relaxed">
                {selectedFeature.desc}
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                Role Authority
              </span>
              <p className="font-bold text-[13px] text-slate-800 dark:text-slate-200 mt-1">
                {activeRoleForFeature.badge}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {activeRoleForFeature.description.slice(0, 75)}...
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
