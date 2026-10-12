import { useState, useMemo, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { useTranslation } from '../context/LanguageContext'

// ============================================================================
// SVG Circular Geometry Constants
// ============================================================================
const SVG_SIZE = 680
const CX = 340
const CY = 340
const RADIUS = 210

// 6 Steps at 60-degree increments starting at 12 o'clock (-90 deg)
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 (clockwise)
const STEP_ANGLES = [-90, -30, 30, 90, 150, 210]

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180.0
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

function getArcPath(centerX, centerY, radius, startAngle, endAngle) {
  const start = polarToCartesian(centerX, centerY, radius, startAngle)
  const end = polarToCartesian(centerX, centerY, radius, endAngle)
  const arcSweep = endAngle - startAngle <= 180 ? '0' : '1'
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${radius} ${radius} 0 ${arcSweep} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`
}

// ============================================================================
// Step Configuration
// ============================================================================
const STEP_META = [
  {
    index: 0,
    num: '01',
    icon: 'school',
    theme: {
      color: '#2a2fff',
      bgLight: 'bg-blue-50',
      bgDark: 'dark:bg-blue-950/40',
      borderLight: 'border-blue-200',
      borderDark: 'dark:border-blue-800',
      textLight: 'text-[#2a2fff]',
      textDark: 'dark:text-[#93c5fd]',
      pillBg: 'bg-[#2a2fff]',
    },
  },
  {
    index: 1,
    num: '02',
    icon: 'group_add',
    theme: {
      color: '#8b5cf6',
      bgLight: 'bg-purple-50',
      bgDark: 'dark:bg-purple-950/40',
      borderLight: 'border-purple-200',
      borderDark: 'dark:border-purple-800',
      textLight: 'text-purple-600',
      textDark: 'dark:text-purple-300',
      pillBg: 'bg-purple-600',
    },
  },
  {
    index: 2,
    num: '03',
    icon: 'event_available',
    theme: {
      color: '#0d9488',
      bgLight: 'bg-teal-50',
      bgDark: 'dark:bg-teal-950/40',
      borderLight: 'border-teal-200',
      borderDark: 'dark:border-teal-800',
      textLight: 'text-teal-600',
      textDark: 'dark:text-teal-300',
      pillBg: 'bg-teal-600',
    },
  },
  {
    index: 3,
    num: '04',
    icon: 'assignment',
    theme: {
      color: '#ea580c',
      bgLight: 'bg-amber-50',
      bgDark: 'dark:bg-amber-950/40',
      borderLight: 'border-amber-200',
      borderDark: 'dark:border-amber-800',
      textLight: 'text-amber-600',
      textDark: 'dark:text-amber-300',
      pillBg: 'bg-amber-600',
    },
  },
  {
    index: 4,
    num: '05',
    icon: 'campaign',
    theme: {
      color: '#db2777',
      bgLight: 'bg-pink-50',
      bgDark: 'dark:bg-pink-950/40',
      borderLight: 'border-pink-200',
      borderDark: 'dark:border-pink-800',
      textLight: 'text-pink-600',
      textDark: 'dark:text-pink-300',
      pillBg: 'bg-pink-600',
    },
  },
  {
    index: 5,
    num: '06',
    icon: 'workspace_premium',
    theme: {
      color: '#2a2fff',
      bgLight: 'bg-indigo-50',
      bgDark: 'dark:bg-indigo-950/40',
      borderLight: 'border-indigo-200',
      borderDark: 'dark:border-indigo-800',
      textLight: 'text-[#2a2fff]',
      textDark: 'dark:text-[#93c5fd]',
      pillBg: 'bg-[#2a2fff]',
    },
  },
]

// ============================================================================
// Realistic Educational SaaS Interface Previews (Accurate to real EduDisk features)
// ============================================================================
function StepPreviewMockup({ stepIndex, isKannada }) {
  switch (stepIndex) {
    case 0: // Step 1: Map the campus
      return (
        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2fff] animate-pulse" />
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {isKannada ? 'ಕ್ಯಾಂಪಸ್ ಶೈಕ್ಷಣಿಕ ವಿನ್ಯಾಸ' : 'Campus Academic Structure'}
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-extrabold text-[10px]">
              {isKannada ? '✓ ಸಕ್ರಿಯ ವಿಭಾಗಗಳು' : '✓ 24 Sections Synced'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mb-3">
            <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                {isKannada ? 'ಶಾಲಾ ವಿಭಾಗ' : 'School Level'}
              </div>
              <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">LKG – 10th Standard</div>
              <div className="text-[11px] text-[#2a2fff] dark:text-[#93c5fd] mt-1 font-semibold">
                State & ICSE · 6 Subjects
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                {isKannada ? 'ಕಾಲೇಜು ವಿಭಾಗ' : 'PU & Degree'}
              </div>
              <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">I & II PUC · B.Ed · BCA</div>
              <div className="text-[11px] text-purple-600 dark:text-purple-300 mt-1 font-semibold">
                Science, Commerce, Arts
              </div>
            </div>
          </div>

          <div className="bg-blue-50/70 dark:bg-blue-950/30 p-2.5 rounded-xl border border-blue-100 dark:border-blue-900/40 flex items-center justify-between text-[11px]">
            <span className="text-slate-600 dark:text-slate-300 font-medium">
              {isKannada ? 'ಪರೀಕ್ಷಾ ವಿಧಾನಗಳು: ಯೂನಿಟ್ ಟೆಸ್ಟ್, ಮಿಡ್-ಟರ್ಮ್, ವಾರ್ಷಿಕ' : 'Exam Types: Unit Tests, Mid-Term, Annual Prep'}
            </span>
            <span className="font-bold text-[#2a2fff] dark:text-[#93c5fd]">
              {isKannada ? 'ರೂಪಿಸಲಾಗಿದೆ' : 'Configured'}
            </span>
          </div>
        </div>
      )

    case 1: // Step 2: Load students & staff
      return (
        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {isKannada ? 'ವಿದ್ಯಾರ್ಥಿ ಭಂಡಾರ & ಸಿಬ್ಬಂದಿ ಲಾಗಿನ್' : 'Registry Import & Staff Provisioning'}
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-300 font-extrabold text-[10px]">
              {isKannada ? '✓ ಎಕ್ಸೆಲ್ ಯಶಸ್ವಿ' : '✓ Excel Batch Parsed'}
            </span>
          </div>

          <div className="space-y-2 mb-3">
            <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-[11px]">
                  📥
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {isKannada ? 'ವಿದ್ಯಾರ್ಥಿ ದಾಖಲೆಗಳ ಆಮದು' : 'Student Intake Import'}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {isKannada ? '೪೫೦ ದಾಖಲೆಗಳು · SATS ಮತ್ತು ಆಧಾರ್ ಕಡತ' : '450 Records · SATS, Aadhaar, Contacts'}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                100% Verified
              </span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-[#2a2fff] dark:text-[#93c5fd] flex items-center justify-center font-bold text-[11px]">
                  🔑
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {isKannada ? 'ಬೋಧಕ ಸಿಬ್ಬಂದಿ ಅಧಿಕಾರ' : 'Faculty Access Credentials'}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {isKannada ? 'ಎಂಪ್ಲಾಯ್ ಐಡಿ STF-019 ಲಾಗಿನ್ ಸಕ್ರಿಯ' : 'Employee ID STF-019 Login Active'}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
                PWA Ready
              </span>
            </div>
          </div>
        </div>
      )

    case 2: // Step 3: Set attendance slots
      return (
        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {isKannada ? 'ಪೀರಿಯಡ್ ಆಧಾರಿತ ಹಾಜರಾತಿ ವೇಳಾಪಟ್ಟಿ' : 'Slot-Based Period Schedule'}
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-300 font-extrabold text-[10px]">
              {isKannada ? '೯೮.೨% ಉಪಸ್ಥಿತಿ' : '98.2% Present Today'}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 mb-3 text-center">
            {[
              { slot: 'P1', time: '09:30', sub: 'Maths' },
              { slot: 'P2', time: '10:15', sub: 'Sci' },
              { slot: 'P3', time: '11:15', sub: 'Eng' },
              { slot: 'P4', time: '12:00', sub: 'Social' },
            ].map((p, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-2 rounded-xl border border-slate-200/80 dark:border-slate-700">
                <div className="text-[10px] font-bold text-teal-600 dark:text-teal-300">{p.slot}</div>
                <div className="font-extrabold text-slate-900 dark:text-white text-[11px]">{p.time}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{p.sub}</div>
              </div>
            ))}
          </div>

          <div className="bg-teal-50/70 dark:bg-teal-950/30 p-2.5 rounded-xl border border-teal-100 dark:border-teal-900/40 flex items-center justify-between text-[11px]">
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              {isKannada ? 'ಶಿಕ್ಷಕರು ಕೇವಲ ಗೈರುಹಾಜರಿ (Absentees) ಮಾತ್ರ ನಮೂದಿಸುತ್ತಾರೆ' : 'Teachers mark absences only — zero roll-call friction'}
            </span>
            <span className="font-bold text-teal-600 dark:text-teal-300">
              {isKannada ? 'ಕ್ಷಿಪ್ರ ಗತಿ' : 'Instant'}
            </span>
          </div>
        </div>
      )

    case 3: // Step 4: Exams and fees
      return (
        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {isKannada ? 'ಪರೀಕ್ಷಾ ಅಂಕಗಳು ಮತ್ತು ಶುಲ್ಕ ಲೆಡ್ಜರ್' : 'Assessment & Fee Recording'}
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-300 font-extrabold text-[10px]">
              {isKannada ? '✓ ಡಿಜಿಟಲ್ ರಸೀದಿ' : '✓ Receipts Logged'}
            </span>
          </div>

          <div className="space-y-2 mb-3">
            <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-800 dark:text-slate-200">
                  {isKannada ? 'ಮಿಡ್-ಟರ್ಮ್ ಪರೀಕ್ಷಾ ಅಂಕಪಟ್ಟಿ' : 'Mid-Term Exam Evaluation'}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">
                  {isKannada ? 'ಎಕ್ಸೆಲ್ ಅಂಕಗಳ ನಮೂದು ➔ ಅನುಮೋದನೆ ➔ ಪ್ರಕಟಣೆ' : 'Draft Entry ➔ HOD Review ➔ Published'}
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                Published
              </span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-800 dark:text-slate-200">
                  {isKannada ? 'ಶುಲ್ಕ ಕಂತು ಪಾವತಿ ದಾಖಲೆ' : 'Term Instalment Record'}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">
                  {isKannada ? 'ವಿಧಾನ: ಯುಪಿಐ / ನಗದು · ರಸೀದಿ #ED-8492' : 'Method: UPI / Cash / Bank · Receipt #ED-8492'}
                </div>
              </div>
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-md">
                Receipt Printed
              </span>
            </div>
          </div>
        </div>
      )

    case 4: // Step 5: Alert guardians
      return (
        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {isKannada ? 'ಅಧಿಕೃತ ವಾಟ್ಸಾಪ್ ಅಧಿಸೂಚನೆ (MSG91)' : 'Official WhatsApp Guardian Delivery'}
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-extrabold text-[10px]">
              {isKannada ? '✓ ನೇರ ವಿತರಣೆ' : '✓ Delivered'}
            </span>
          </div>

          <div className="bg-[#E7F8EE] dark:bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 mb-2 relative">
            <div className="flex items-center justify-between mb-1.5 text-[10px] text-emerald-800 dark:text-emerald-300 font-bold">
              <span>EduDisk Verified Gateway</span>
              <span>10:16 AM</span>
            </div>
            <p className="text-[11px] text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
              {isKannada
                ? 'ಗೌರವಾನ್ವಿತ ಪೋಷಕರೇ, ನಿಮ್ಮ ಮಗು ಅಕ್ಷಯ್ ಎಸ್. ಇಂದು ಪೀರಿಯಡ್ ೨ (ವಿಜ್ಞಾನ) ತರಗತಿಗೆ ಗೈರುಹಾಜರಾಗಿದ್ದಾರೆ ಎಂದು ತಿಳಿಸಲು ವಿಷಾದಿಸುತ್ತೇವೆ.'
                : 'Dear Parent, your ward Ananya S. (Class 10-A) was marked absent for Period 2 (Science) on 12-Oct-2026.'}
            </p>
            <div className="flex items-center justify-end gap-1 mt-1.5 text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">
              <span>Delivered</span>
              <span className="text-[12px] font-bold">✓✓</span>
            </div>
          </div>

          <div className="text-[10px] text-slate-500 dark:text-slate-400 italic text-center">
            {isKannada ? 'ಪೋಷಕರಿಗೆ ಯಾವುದೇ ಆ್ಯಪ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಅಗತ್ಯವಿಲ್ಲ' : 'Guardians need zero app downloads or logins'}
          </div>
        </div>
      )

    case 5: // Step 6: Issue papers
      return (
        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2fff]" />
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {isKannada ? 'ಅಧಿಕೃತ ಪ್ರಮಾಣಪತ್ರಗಳ ಮುದ್ರಣ' : 'Official Document Generation'}
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#2a2fff] dark:text-[#93c5fd] font-extrabold text-[10px]">
              {isKannada ? '✓ ಕಡತ ಸಮನ್ವಯ' : '✓ Registry Synced'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">Certificate</div>
              <div className="font-bold text-slate-800 dark:text-slate-200 mt-0.5">Transfer Cert (TC)</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">
                SATS Compliant PDF
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">Document</div>
              <div className="font-bold text-slate-800 dark:text-slate-200 mt-0.5">Study & Bonafide</div>
              <div className="text-[10px] text-[#2a2fff] dark:text-[#93c5fd] mt-1 font-semibold">
                Official Seal & QR
              </div>
            </div>
          </div>

          <div className="bg-blue-50/70 dark:bg-blue-950/30 p-2.5 rounded-xl border border-blue-100 dark:border-blue-900/40 flex items-center justify-between text-[11px]">
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              {isKannada ? 'ವಿದ್ಯಾರ್ಥಿ ಕಡತದಿಂದ ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಅಧಿಕೃತ PDF ಮುದ್ರಣ' : 'Generated instantly from the verified admission record'}
            </span>
            <span className="font-bold text-[#2a2fff] dark:text-[#93c5fd]">
              {isKannada ? 'ಮುದ್ರಿಸಿ' : 'Print PDF'}
            </span>
          </div>
        </div>
      )

    default:
      return null
  }
}

// ============================================================================
// Main PlatformShowcase (Circular Process Flow Component)
// ============================================================================
export function PlatformShowcase() {
  const { isKannada, t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState(null)

  // Step translation data
  const stepsData = useMemo(() => {
    const raw = t('workflow.steps', [])
    if (Array.isArray(raw) && raw.length === 6) return raw

    // Safe fallback matching exact user requirements
    return [
      {
        num: '01',
        title: isKannada ? 'ಕ್ಯಾಂಪಸ್ ಮ್ಯಾಪಿಂಗ್' : 'Map the campus',
        desc: isKannada
          ? 'ತರಗತಿಗಳು, ವಿಭಾಗಗಳು ಮತ್ತು ವಿಷಯಗಳು — ಎಲ್‌ಕೆಜಿ–೧೦, ಪಿಯುಸಿ, ಬಿ.ಎಡ್ ಅಥವಾ ಬಿಸಿಎ.'
          : 'Set up classes, sections, subjects, and exam types for LKG–10, I/II PUC, B.Ed., or BCA.',
        tag: 'Campus Structure',
      },
      {
        num: '02',
        title: isKannada ? 'ವಿದ್ಯಾರ್ಥಿ & ಸಿಬ್ಬಂದಿ ವಿವರ' : 'Load students & staff',
        desc: isKannada
          ? 'ಎಕ್ಸೆಲ್ ಆಮದು ಅಥವಾ ಕಚೇರಿ ನಮೂದು. ಸಿಬ್ಬಂದಿಗೆ ಸೂಕ್ತ ಲಾಗಿನ್ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಪ್ರವೇಶಾತಿ.'
          : 'Import student records through Excel or enter them through the office. Staff receive their appropriate login access.',
        tag: 'Identity & Access',
      },
      {
        num: '03',
        title: isKannada ? 'ಹಾಜರಾತಿ ಪೀರಿಯಡ್ ರಚನೆ' : 'Set attendance slots',
        desc: isKannada
          ? 'ಪೀರಿಯಡ್ ಸಮಯಗಳು, ವಾರದ ನಿಯಮಗಳು ಮತ್ತು ರಜಾದಿನಗಳು. ವೇಳಾಪಟ್ಟಿಯಂತೆ ಸುಲಭ ಹಾಜರಾತಿ.'
          : 'Configure named periods, weekday rules, and holidays. Teachers mark attendance according to the configured schedule.',
        tag: 'Daily Timetable',
      },
      {
        num: '04',
        title: isKannada ? 'ಪರೀಕ್ಷೆ ಮತ್ತು ಶುಲ್ಕ' : 'Exams and fees',
        desc: isKannada
          ? 'ವೇಳಾಪಟ್ಟಿ, ಅಂಕಗಳ ಪ್ರಕಟಣೆ, ಶುಲ್ಕ ನಿಗದಿ ಮತ್ತು ಅಧಿಕೃತ ಪಾವತಿ ರಸೀದಿಗಳು.'
          : 'Schedule examinations, publish marks, assign fees, and record supported payment details.',
        tag: 'Grading & Finance',
      },
      {
        num: '05',
        title: isKannada ? 'ಪೋಷಕರಿಗೆ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ' : 'Alert guardians',
        desc: isKannada
          ? 'ಗೈರುಹಾಜರಿ ಅಥವಾ ಪ್ರಕಟಿತ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳಿಗೆ ಅಧಿಕೃತ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಕ್ಷಣಾರ್ಧದಲ್ಲಿ ನೇರ ಸಂದೇಶ.'
          : 'Send supported absence alerts and published examination-result notifications to guardians through WhatsApp.',
        tag: 'Guardian Communications',
      },
      {
        num: '06',
        title: isKannada ? 'ಅಧಿಕೃತ ಪ್ರಮಾಣಪತ್ರಗಳು' : 'Issue papers',
        desc: isKannada
          ? 'ಅಧ್ಯಯನ ಪ್ರಮಾಣಪತ್ರ, ವರ್ಗಾವಣೆ ಪ್ರಮಾಣಪತ್ರ (TC) ಮತ್ತು ಬೋನಫೈಡ್ PDF ದಾಖಲೆಗಳ ಮುದ್ರಣ.'
          : 'Generate supported student documents, including study certificates, transfer certificates, and bonafide PDFs where available.',
        tag: 'Official Documentation',
      },
    ]
  }, [t, isKannada])

  // Current active step metadata
  const currentStep = stepsData[activeStep] || stepsData[0]
  const currentMeta = STEP_META[activeStep] || STEP_META[0]

  // Keyboard navigation support
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveStep((prev) => (prev < 5 ? prev + 1 : prev))
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveStep((prev) => (prev > 0 ? prev - 1 : prev))
      }
    },
    []
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Segment connection data: 5 curved connectors (0->1, 1->2, 2->3, 3->4, 4->5)
  // No connector from 5 back to 0, preventing loop implication
  const connectors = useMemo(() => {
    return [0, 1, 2, 3, 4].map((i) => {
      const fromAngle = STEP_ANGLES[i] + 14
      const toAngle = STEP_ANGLES[i + 1] - 14
      const midAngle = (STEP_ANGLES[i] + STEP_ANGLES[i + 1]) / 2
      const pathData = getArcPath(CX, CY, RADIUS, fromAngle, toAngle)
      const midPoint = polarToCartesian(CX, CY, RADIUS, midAngle)
      const tangentRotation = midAngle + 90

      return {
        fromIndex: i,
        toIndex: i + 1,
        pathData,
        midPoint,
        tangentRotation,
      }
    })
  }, [])

  return (
    <section
      id="platform"
      aria-label="How it works"
      className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0c1322] border-y border-slate-200/60 dark:border-slate-800 relative overflow-hidden transition-colors duration-250 select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-pastel-blue/30 dark:bg-[#2a2fff]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pastel-lavender/30 dark:bg-purple-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Target anchor for smooth scroll */}
      <div id="how-it-works" className="absolute -top-24 left-0" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* ======================================================== */}
        {/* 1. SECTION HEADER                                        */}
        {/* ======================================================== */}
        <RevealOnScroll>
          <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 bg-white dark:bg-slate-800 rounded-full border border-slate-200/80 dark:border-slate-700 shadow-2xs">
              <Icon name="route" className="text-[#2a2fff] dark:text-[#60a5fa] text-[16px]" />
              <span className="font-[Inter] text-[13px] font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                {t('workflow.badge', 'Step-by-Step Implementation')}
              </span>
            </div>

            <h2 className="font-[Plus_Jakarta_Sans] text-[32px] sm:text-[40px] md:text-[46px] font-extrabold leading-[1.15] tracking-[-0.02em] text-slate-900 dark:text-white mb-4">
              {t('workflow.title', 'How It Works')}
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-[15px] sm:text-[17px] leading-relaxed">
              {t(
                'workflow.subtitle',
                'From first login to WhatsApp alerts and certificates on the same student file.'
              )}
            </p>
          </div>
        </RevealOnScroll>

        {/* ======================================================== */}
        {/* 2. MAIN WORKSPACE: CIRCLE VISUALIZER + DETAIL PANEL      */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* -------------------------------------------------------- */}
          {/* LEFT: ANIMATED CIRCULAR SVG PROCESS FLOW (7 COLS)        */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Visualizer Container */}
            <div className="relative w-full max-w-[560px] aspect-square rounded-3xl bg-white dark:bg-[#111827] p-3 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-[0_12px_40px_rgba(42,47,255,0.06)] flex items-center justify-center">
              
              {/* Background ambient radial circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-blue-50/50 via-purple-50/30 to-teal-50/50 dark:from-[#1e293b]/40 dark:via-purple-950/20 dark:to-teal-950/20 -z-0 pointer-events-none" />

              {/* SVG Canvas for Track, Arcs, and Chevrons */}
              <svg
                viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
                className="w-full h-full relative z-10"
              >
                <defs>
                  {/* Active Gradient for Connecting Arc */}
                  <linearGradient id="activeArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2a2fff" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>

                  {/* Soft Glow Filter for Active Arc */}
                  <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#2a2fff" floodOpacity="0.45" />
                  </filter>
                </defs>

                {/* Subtle Complete Background Circle Track */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={RADIUS}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  className="text-slate-200 dark:text-slate-800"
                />

                {/* Outer Decorative Orbit Ring */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={RADIUS + 45}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 9"
                  className="text-slate-200/60 dark:text-slate-800/60"
                />

                {/* 5 Inter-Step Curved Connector Paths & Directional Arrows */}
                {connectors.map((c, idx) => {
                  const isCompleted = activeStep > c.fromIndex
                  const isCurrentTransition = activeStep === c.toIndex
                  const isHovered = hoveredStep === c.fromIndex || hoveredStep === c.toIndex

                  return (
                    <g key={idx}>
                      {/* Background segment stroke */}
                      <path
                        d={c.pathData}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="text-slate-300 dark:text-slate-700 transition-colors duration-300"
                      />

                      {/* Active highlighted progression stroke */}
                      {(isCompleted || isCurrentTransition || isHovered) && (
                        <motion.path
                          d={c.pathData}
                          fill="none"
                          stroke="url(#activeArcGradient)"
                          strokeWidth="4"
                          strokeLinecap="round"
                          filter="url(#arcGlow)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.45, ease: 'easeInOut' }}
                        />
                      )}

                      {/* Directional Chevron Arrowhead (Midpoint, pointing clockwise) */}
                      <g
                        transform={`translate(${c.midPoint.x}, ${c.midPoint.y}) rotate(${c.tangentRotation})`}
                      >
                        <path
                          d="M -4.5 -5.5 L 3.5 0 L -4.5 5.5"
                          fill="none"
                          stroke={isCompleted || isCurrentTransition ? '#2a2fff' : 'currentColor'}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={
                            isCompleted || isCurrentTransition
                              ? 'text-[#2a2fff]'
                              : 'text-slate-400 dark:text-slate-600'
                          }
                        />
                      </g>
                    </g>
                  )
                })}

                {/* Radial Pulse Line connecting Center to Active Step */}
                {(() => {
                  const activePos = polarToCartesian(CX, CY, RADIUS - 38, STEP_ANGLES[activeStep])
                  const centerEdge = polarToCartesian(CX, CY, 64, STEP_ANGLES[activeStep])
                  return (
                    <line
                      x1={centerEdge.x}
                      y1={centerEdge.y}
                      x2={activePos.x}
                      y2={activePos.y}
                      stroke="#2a2fff"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="opacity-40 dark:opacity-60"
                    />
                  )
                })()}
              </svg>

              {/* ---------------------------------------------------- */}
              {/* CENTER: EDUDISK LOGO / CORE ENGINE EMBLEM             */}
              {/* ---------------------------------------------------- */}
              <div
                className="absolute z-20 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-white dark:bg-[#0a0f1d] border-2 border-slate-200 dark:border-slate-700 shadow-md group pointer-events-none select-none"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Center Glow Ambient Ring */}
                <div className="absolute inset-0 rounded-full bg-[#2a2fff]/10 dark:bg-[#2a2fff]/20 blur-md -z-10 animate-pulse" />

                {/* EduDisk Disc Icon Graphic */}
                <div className="w-11 h-11 relative flex items-center justify-center mb-1">
                  <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
                    <circle cx="32" cy="32" r="28" fill="#0A0D14" />
                    <circle cx="32" cy="32" r="12" fill="#FFFFFF" />
                    <circle cx="32" cy="32" r="4.5" fill="#0A0D14" />
                    <circle cx="18" cy="18" r="5.5" fill="#2A2FFF" />
                  </svg>
                </div>

                <span className="font-[Plus_Jakarta_Sans] text-[15px] font-extrabold text-slate-900 dark:text-white tracking-tight">
                  EduDisk
                </span>
                <span className="text-[10px] font-bold text-[#2a2fff] dark:text-[#93c5fd] uppercase tracking-wider">
                  {t('workflow.coreEngine', 'Core ERP')}
                </span>
              </div>

              {/* ---------------------------------------------------- */}
              {/* 6 NUMBERED STEP NODES POSITIONED AROUND CIRCLE        */}
              {/* ---------------------------------------------------- */}
              {STEP_META.map((meta) => {
                const angle = STEP_ANGLES[meta.index]
                const pos = polarToCartesian(CX, CY, RADIUS, angle)
                const isActive = activeStep === meta.index
                const isHovered = hoveredStep === meta.index
                const stepData = stepsData[meta.index] || {}

                // Percentage offset for positioning over the SVG
                const leftPercent = (pos.x / SVG_SIZE) * 100
                const topPercent = (pos.y / SVG_SIZE) * 100

                return (
                  <div
                    key={meta.index}
                    className="absolute z-30"
                    style={{
                      left: `${leftPercent}%`,
                      top: `${topPercent}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Step ${meta.num}: ${stepData.title || ''}`}
                      onClick={() => setActiveStep(meta.index)}
                      onMouseEnter={() => setHoveredStep(meta.index)}
                      onMouseLeave={() => setHoveredStep(null)}
                      className={`relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer outline-none focus-visible:ring-3 focus-visible:ring-[#2a2fff] focus-visible:ring-offset-2 ${
                        isActive
                          ? 'bg-white dark:bg-slate-800 border-2 border-[#2a2fff] shadow-[0_0_28px_rgba(42,47,255,0.35)] scale-110 z-40'
                          : isHovered
                          ? 'bg-white dark:bg-slate-800 border border-[#2a2fff]/60 shadow-md scale-105'
                          : 'bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-slate-300'
                      }`}
                    >
                      {/* Step Number Pill badge */}
                      <span
                        className={`absolute -top-2.5 -right-2 px-2 py-0.5 rounded-full text-[10px] font-extrabold shadow-2xs border ${
                          isActive
                            ? 'bg-[#2a2fff] text-white border-[#2a2fff]'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {meta.num}
                      </span>

                      {/* Icon */}
                      <Icon
                        name={meta.icon}
                        filled={isActive}
                        className={`text-[26px] sm:text-[28px] transition-colors duration-200 ${
                          isActive
                            ? 'text-[#2a2fff] dark:text-[#60a5fa]'
                            : isHovered
                            ? 'text-slate-800 dark:text-slate-200'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      />

                      {/* Subtle mini indicator dot */}
                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className="w-1.5 h-1.5 rounded-full bg-[#2a2fff] dark:bg-[#60a5fa] mt-0.5"
                        />
                      )}
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Navigation hint */}
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-4 flex items-center gap-1.5 font-medium">
              <Icon name="touch_app" className="text-[16px] text-[#2a2fff] dark:text-[#60a5fa]" />
              <span>{t('workflow.interactiveHint', 'Click any step node or use arrows to explore')}</span>
            </p>
          </div>

          {/* -------------------------------------------------------- */}
          {/* RIGHT: INTERACTIVE DETAIL PANEL (5 COLS)                 */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-7 md:p-8 border border-slate-200 dark:border-slate-800 shadow-[0_12px_40px_-8px_rgba(42,47,255,0.08)] relative">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex flex-col gap-5"
                >
                  {/* Top Badges Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#2a2fff] text-white shadow-2xs">
                        {t('workflow.stepOf', 'Step')} {currentMeta.num} {t('workflow.totalSteps', 'of 06')}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {currentStep.tag || 'Workflow Stage'}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t('workflow.connectedPill', 'Single Student File')}</span>
                    </div>
                  </div>

                  {/* Step Title & Description */}
                  <div>
                    <h3 className="font-[Plus_Jakarta_Sans] text-[24px] sm:text-[28px] font-extrabold text-slate-900 dark:text-white leading-tight mb-2.5">
                      {currentStep.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-[14px] sm:text-[15px] leading-relaxed">
                      {currentStep.desc}
                    </p>
                  </div>

                  {/* Realistic Interface Preview Card */}
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
                      <Icon name="visibility" className="text-[14px]" />
                      <span>System Capability Preview</span>
                    </div>
                    <StepPreviewMockup stepIndex={activeStep} isKannada={isKannada} />
                  </div>

                  {/* Navigation Controls: Prev / Next & Progress Dots */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                    
                    {/* Segmented Quick Step Jump Bar */}
                    <div className="grid grid-cols-6 gap-1.5">
                      {STEP_META.map((m, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveStep(idx)}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            activeStep === idx
                              ? 'bg-[#2a2fff] ring-2 ring-[#2a2fff]/30'
                              : activeStep > idx
                              ? 'bg-[#2a2fff]/50 dark:bg-[#2a2fff]/60'
                              : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300'
                          }`}
                          aria-label={`Jump to step ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Previous and Next Buttons */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                        disabled={activeStep === 0}
                        className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                          activeStep === 0
                            ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        <Icon name="arrow_back" className="text-[16px]" />
                        <span>{t('workflow.prevStep', 'Previous Step')}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                        disabled={activeStep === 5}
                        className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-xs ${
                          activeStep === 5
                            ? 'opacity-40 cursor-not-allowed bg-slate-200 dark:bg-slate-800 text-slate-400'
                            : 'bg-[#2a2fff] hover:bg-[#2227d8] text-white shadow-[#2a2fff]/20'
                        }`}
                      >
                        <span>{t('workflow.nextStep', 'Next Step')}</span>
                        <Icon name="arrow_forward" className="text-[16px]" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* 3. MOBILE QUICK STEP CHIPS (VISIBLE ON MOBILE ONLY)     */}
        {/* ======================================================== */}
        <div className="mt-8 lg:hidden flex flex-wrap items-center justify-center gap-2">
          {STEP_META.map((meta, idx) => {
            const step = stepsData[idx] || {}
            const isActive = activeStep === idx

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer border ${
                  isActive
                    ? 'bg-[#2a2fff] text-white border-[#2a2fff] shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                <span>{meta.num}</span>
                <span className="max-w-[100px] truncate">{step.title}</span>
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
