import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './Icon'

export const ERP_MODULES = [
  {
    id: 'student-records',
    title: 'Student records',
    category: 'Core Campus',
    tag: 'Records',
    icon: 'person_search',
    theme: {
      bg: 'bg-pastel-blue',
      text: 'text-primary',
      border: 'border-primary/25',
      pill: 'bg-pastel-blue text-primary border-primary/20',
      color: '#5B7CFA',
    },
    desc: 'Full student files with class and section, guardian contacts, and extra admission fields where needed (Aadhaar, SATS, caste, bank, parents) for trust campuses.',
    previewTitle: 'Student Information & Registry File',
    previewSubtitle: 'Unified student directory with guardian links & trust fields',
  },
  {
    id: 'slot-attendance',
    title: 'Slot-based attendance',
    category: 'Core Campus',
    tag: 'Daily Workflow',
    icon: 'event_available',
    theme: {
      bg: 'bg-pastel-lavender',
      text: 'text-secondary',
      border: 'border-secondary/25',
      pill: 'bg-pastel-lavender text-secondary border-secondary/20',
      color: '#8B7CF6',
    },
    desc: 'Named time slots per weekday, absences-only marking, slot cancel with reason, and school holidays. Present is derived — staff are not ticking every student every period.',
    previewTitle: 'Slot-Wise Absence Marking',
    previewSubtitle: 'Periods 1–6 slot schedule · Absence-only fast entry',
  },
  {
    id: 'fee-collection',
    title: 'Fee collection',
    category: 'Operations',
    tag: 'Finance',
    icon: 'payments',
    theme: {
      bg: 'bg-pastel-mint',
      text: 'text-mint-text',
      border: 'border-mint-text/25',
      pill: 'bg-pastel-mint text-mint-text border-mint-text/20',
      color: '#10B981',
    },
    desc: 'Assign fees per student or in bulk, then record cash, UPI, cheque, bank transfer, or online. Overdue balances and PDF fee statements — no payment gateway required.',
    previewTitle: 'Fee Assignment & Offline/Online Receipts',
    previewSubtitle: 'Category dues tracking · Cash, UPI & bank receipts',
  },
  {
    id: 'exams-reports',
    title: 'Exams & reports',
    category: 'Academics',
    tag: 'Marks & Reports',
    icon: 'assignment',
    theme: {
      bg: 'bg-pastel-peach',
      text: 'text-peach-text',
      border: 'border-peach-text/25',
      pill: 'bg-pastel-peach text-peach-text border-peach-text/20',
      color: '#F59E0B',
    },
    desc: 'Excel templates, draft → submit → publish marks, PDF/Excel export. PU and school campuses can add Part B co-curricular grades and ordered progress reports.',
    previewTitle: 'Examination Marks Entry & Progress Reports',
    previewSubtitle: 'Draft → Submit → Publish marks workflow & PDF export',
  },
  {
    id: 'whatsapp-guardians',
    title: 'WhatsApp to guardians',
    category: 'Operations',
    tag: 'Parent Alerts',
    icon: 'notifications_active',
    theme: {
      bg: 'bg-pastel-pink',
      text: 'text-pink-text',
      border: 'border-pink-text/25',
      pill: 'bg-pastel-pink text-pink-text border-pink-text/20',
      color: '#EC4899',
    },
    desc: 'Bulk absence alerts and exam-result messages via MSG91 WhatsApp, with sent / delivered / failed status and retry. SMS is reserved for later; WhatsApp is what campuses use today.',
    previewTitle: 'Official MSG91 WhatsApp Gateway',
    previewSubtitle: 'Instant absence alerts & published exam cards to parents',
  },
  {
    id: 'admissions-leads',
    title: 'Admissions leads',
    category: 'Core Campus',
    tag: 'CRM',
    icon: 'person_add',
    theme: {
      bg: 'bg-pastel-blue',
      text: 'text-primary',
      border: 'border-primary/25',
      pill: 'bg-pastel-blue text-primary border-primary/20',
      color: '#3B82F6',
    },
    desc: 'CRM for enquiries: new → qualified → converted, with follow-ups so the office does not lose a walk-in in a notebook.',
    previewTitle: 'Admissions Inquiry Pipeline & Follow-ups',
    previewSubtitle: 'Enquiry CRM: New → Qualified → Enrolled with reminders',
  },
  {
    id: 'certificates',
    title: 'Certificates',
    category: 'Academics',
    tag: 'Official PDFs',
    icon: 'workspace_premium',
    theme: {
      bg: 'bg-pastel-lavender',
      text: 'text-secondary',
      border: 'border-secondary/25',
      pill: 'bg-pastel-lavender text-secondary border-secondary/20',
      color: '#8B7CF6',
    },
    desc: 'Study certificate, transfer certificate, and bonafide PDFs on trust-school ERPs. B.Ed and BCA campuses also generate application forms from the same student record.',
    previewTitle: 'Automated Official Certificate Generation',
    previewSubtitle: 'Study certificate, TC & bonafide PDF generator',
  },
  {
    id: 'admin-staff-pwa',
    title: 'Admin & staff PWA',
    category: 'Core Campus',
    tag: 'Dual Portal',
    icon: 'devices',
    theme: {
      bg: 'bg-pastel-mint',
      text: 'text-mint-text',
      border: 'border-mint-text/25',
      pill: 'bg-pastel-mint text-mint-text border-mint-text/20',
      color: '#10B981',
    },
    desc: 'Email login for admins, employee ID for staff, dual-role switch, fee-only staff flag, and installable PWA. There is no parent password portal — families are updated on WhatsApp.',
    previewTitle: 'Dual-Role Mobile Progressive Web App',
    previewSubtitle: 'Admin email login + Staff Employee ID with offline sync',
  },
  {
    id: 'public-websites',
    title: 'Public websites',
    category: 'Operations',
    tag: 'Digital Presence',
    icon: 'web',
    theme: {
      bg: 'bg-pastel-peach',
      text: 'text-peach-text',
      border: 'border-peach-text/25',
      pill: 'bg-pastel-peach text-peach-text border-peach-text/20',
      color: '#F59E0B',
    },
    desc: 'Separate marketing sites for PU colleges and schools — affiliation, faculty, gallery, enquire, and a link through to the ERP login when the campus is live.',
    previewTitle: 'Campus Marketing Website Integration',
    previewSubtitle: 'Institutional landing sites linked directly to the ERP portal',
  },
]

const categories = ['All Modules', 'Core Campus', 'Academics', 'Operations']

export function ConnectedModuleHub() {
  const [selectedCategory, setSelectedCategory] = useState('All Modules')
  const [activeModule, setActiveModule] = useState(ERP_MODULES[0])
  const [hoveredModule, setHoveredModule] = useState(null)

  const currentDisplayModule = hoveredModule || activeModule

  // Separate modules into left (4) and right (5) columns for balanced connected layout
  const leftModules = ERP_MODULES.slice(0, 4)
  const rightModules = ERP_MODULES.slice(4, 9)

  return (
    <div className="w-full flex flex-col gap-10">
      {/* 1. CATEGORY FILTER TOOLBAR */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const count =
            cat === 'All Modules'
              ? ERP_MODULES.length
              : ERP_MODULES.filter((m) => m.category === cat).length
          const isActive = selectedCategory === cat

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-primary text-white shadow-md shadow-primary/25 border border-primary scale-[1.02]'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* 2. DESKTOP CONNECTED MODULE HUB (SURROUNDING 9 CARDS AROUND CENTRAL PREVIEW) */}
      <div className="hidden lg:grid grid-cols-12 gap-6 items-center relative">
        
        {/* LEFT COLUMN: 4 MODULE CARDS */}
        <div className="col-span-3 flex flex-col gap-4">
          {leftModules.map((mod) => {
            const isMatch = selectedCategory === 'All Modules' || mod.category === selectedCategory
            const isActive = currentDisplayModule.id === mod.id

            return (
              <motion.div
                key={mod.id}
                animate={{
                  opacity: isMatch ? 1 : 0.35,
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredModule(mod)}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => setActiveModule(mod)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  isActive
                    ? 'bg-white shadow-lg border-primary ring-2 ring-primary/20'
                    : 'bg-white/90 hover:bg-white border-slate-200/80 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center border ${mod.theme.bg} ${mod.theme.border}`}>
                    <Icon name={mod.icon} className={`text-[18px] ${mod.theme.text}`} />
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${mod.theme.pill}`}>
                    {mod.tag}
                  </span>
                </div>
                <h4 className="font-[Plus_Jakarta_Sans] text-[15px] font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                  {mod.title}
                </h4>
                <p className="text-[12px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {mod.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CENTER COLUMN: CENTRAL DASHBOARD PREVIEW HUB (6 COLS) */}
        <div className="col-span-6 flex flex-col items-center relative">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pastel-blue/50 via-pastel-lavender/40 to-pastel-mint/30 rounded-3xl blur-2xl -z-10 pointer-events-none" />

          {/* Central Preview Chassis Card */}
          <div className="w-full bg-white rounded-3xl p-5 border border-slate-200/90 shadow-[0_16px_40px_-8px_rgba(91,124,250,0.12)] flex flex-col gap-4">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-[12px] font-black">
                  E
                </div>
                <div>
                  <h4 className="font-bold text-[13px] text-slate-900 leading-tight">
                    EduDisk Central ERP Core
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Live Integrated Module Interface
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-emerald-700 bg-pastel-mint px-2.5 py-0.5 rounded-full border border-mint-text/20">
                  {currentDisplayModule.tag}
                </span>
              </div>
            </div>

            {/* Dynamic Module Interface Mockup Area */}
            <div className="w-full aspect-[16/10] bg-[#F8FAFC] rounded-2xl border border-slate-200/80 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDisplayModule.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="h-full flex flex-col justify-between"
                >
                  {/* Module Header Inside Mockup */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                    <div>
                      <p className="font-bold text-[14px] text-slate-900">
                        {currentDisplayModule.previewTitle}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {currentDisplayModule.previewSubtitle}
                      </p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${currentDisplayModule.theme.pill}`}>
                      {currentDisplayModule.category}
                    </span>
                  </div>

                  {/* Module-Specific Representative Interactive Graphics */}
                  {currentDisplayModule.id === 'student-records' && (
                    <div className="flex flex-col gap-2 my-auto">
                      <div className="grid grid-cols-4 gap-2 text-[10px] font-bold text-slate-400 border-b border-slate-200/60 pb-1">
                        <span>ROLL NO</span>
                        <span>STUDENT</span>
                        <span>CLASS</span>
                        <span>STATUS</span>
                      </div>
                      {[
                        { roll: '24', name: 'Rahul Sharma', cls: 'II PUC Sci-A', status: 'Verified' },
                        { roll: '25', name: 'Ananya Patil', cls: 'II PUC Sci-A', status: 'Verified' },
                        { roll: '26', name: 'Chetan Kumar', cls: 'II PUC Sci-B', status: 'Verified' },
                      ].map((s) => (
                        <div key={s.roll} className="grid grid-cols-4 gap-2 text-[11px] bg-white p-2 rounded-lg border border-slate-100 items-center">
                          <span className="font-bold text-slate-800">#{s.roll}</span>
                          <span className="font-medium text-slate-700">{s.name}</span>
                          <span className="text-slate-500">{s.cls}</span>
                          <span className="text-emerald-600 bg-pastel-mint px-1.5 py-0.2 rounded text-[10px] w-fit font-bold">
                            {s.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {currentDisplayModule.id === 'slot-attendance' && (
                    <div className="grid grid-cols-3 gap-2.5 my-auto">
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 flex flex-col justify-between">
                        <span className="text-[10px] text-slate-500">Period 1 (Physics)</span>
                        <p className="text-[14px] font-bold text-primary mt-1">96.4% Present</p>
                        <span className="text-[9px] text-emerald-600">Absences Marked</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 flex flex-col justify-between">
                        <span className="text-[10px] text-slate-500">Period 2 (Chemistry)</span>
                        <p className="text-[14px] font-bold text-secondary mt-1">94.1% Present</p>
                        <span className="text-[9px] text-emerald-600">Absences Marked</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 flex flex-col justify-between">
                        <span className="text-[10px] text-slate-500">Period 3 (Maths)</span>
                        <p className="text-[14px] font-bold text-mint-text mt-1">Derived Auto</p>
                        <span className="text-[9px] text-slate-400">Zero duplicate work</span>
                      </div>
                    </div>
                  )}

                  {currentDisplayModule.id === 'fee-collection' && (
                    <div className="flex flex-col gap-2 my-auto">
                      <div className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-bold text-slate-800">Tuition &amp; Term Fees Ledger</p>
                          <p className="text-[10px] text-slate-500">Cash, UPI, Cheque &amp; Bank Transfer</p>
                        </div>
                        <span className="text-[11px] font-bold text-mint-text bg-pastel-mint px-2 py-0.5 rounded-full">
                          Receipt Synchronized
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="bg-pastel-blue p-2 rounded-lg font-bold text-primary">Overdue Dues List</div>
                        <div className="bg-pastel-mint p-2 rounded-lg font-bold text-mint-text">PDF Statements</div>
                        <div className="bg-pastel-lavender p-2 rounded-lg font-bold text-secondary">No Gateway Fee</div>
                      </div>
                    </div>
                  )}

                  {currentDisplayModule.id === 'exams-reports' && (
                    <div className="flex flex-col gap-2 my-auto">
                      <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-slate-800">Midterm Exam Marks</span>
                          <span className="text-[9px] bg-pastel-peach text-peach-text px-1.5 py-0.5 rounded font-bold">Published</span>
                        </div>
                        <span className="text-[10px] font-bold text-primary">Export PDF / Excel</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-[10px] text-center">
                        <div className="bg-white p-1.5 rounded border border-slate-100">Physics: <strong>94/100</strong></div>
                        <div className="bg-white p-1.5 rounded border border-slate-100">Chemistry: <strong>91/100</strong></div>
                        <div className="bg-white p-1.5 rounded border border-slate-100">Maths: <strong>98/100</strong></div>
                        <div className="bg-white p-1.5 rounded border border-slate-100">Biology: <strong>90/100</strong></div>
                      </div>
                    </div>
                  )}

                  {currentDisplayModule.id === 'whatsapp-guardians' && (
                    <div className="bg-white p-3 rounded-xl border border-emerald-200/80 shadow-xs my-auto">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center text-[10px]">💬</span>
                          <span className="font-bold text-[11px] text-slate-800">Official MSG91 Route</span>
                        </div>
                        <span className="text-emerald-600 font-bold text-[10px]">✓✓ Delivered</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        “Absence Alert: Rahul Sharma marked absent for Period 2. Attendance rate: 91.4%.”
                      </p>
                    </div>
                  )}

                  {currentDisplayModule.id === 'admissions-leads' && (
                    <div className="grid grid-cols-3 gap-2 my-auto text-[10px]">
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                        <p className="text-slate-400 font-bold">1. NEW ENQUIRY</p>
                        <p className="font-bold text-slate-800 text-[12px] mt-1">Walk-In Intake</p>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                        <p className="text-primary font-bold">2. QUALIFIED</p>
                        <p className="font-bold text-slate-800 text-[12px] mt-1">Course Fit</p>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                        <p className="text-emerald-600 font-bold">3. CONVERTED</p>
                        <p className="font-bold text-slate-800 text-[12px] mt-1">Enrolled PDF</p>
                      </div>
                    </div>
                  )}

                  {currentDisplayModule.id === 'certificates' && (
                    <div className="flex flex-col gap-2 my-auto">
                      <div className="grid grid-cols-3 gap-2 text-[10px]">
                        <div className="bg-white p-2.5 rounded-xl border border-slate-100 text-center font-bold text-slate-800">
                          Study Certificate PDF
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-slate-100 text-center font-bold text-slate-800">
                          Transfer Certificate (TC)
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-slate-100 text-center font-bold text-slate-800">
                          Bonafide Document
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-400 text-center">Generated with pre-filled student bio and dates</p>
                    </div>
                  )}

                  {currentDisplayModule.id === 'admin-staff-pwa' && (
                    <div className="grid grid-cols-2 gap-3 my-auto">
                      <div className="bg-white p-3 rounded-xl border border-slate-100">
                        <span className="text-[10px] font-bold text-primary">ADMIN PORTAL</span>
                        <p className="font-bold text-[12px] text-slate-800 mt-0.5">Email Login</p>
                        <p className="text-[10px] text-slate-500">Governance &amp; Master Setup</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100">
                        <span className="text-[10px] font-bold text-secondary">STAFF PWA</span>
                        <p className="font-bold text-[12px] text-slate-800 mt-0.5">Employee ID</p>
                        <p className="text-[10px] text-slate-500">Slot Absences &amp; Exam Marks</p>
                      </div>
                    </div>
                  )}

                  {currentDisplayModule.id === 'public-websites' && (
                    <div className="bg-white p-3 rounded-xl border border-slate-100 my-auto flex flex-col justify-between">
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 mb-1.5">
                        <span className="text-[10px] font-bold text-slate-700">Campus Marketing Portal</span>
                        <span className="text-[9px] bg-pastel-blue text-primary px-1.5 py-0.5 rounded font-bold">Live Linked</span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        Standalone institutional websites (Affiliation, Courses, Enquiry Form) seamlessly integrated with ERP login.
                      </p>
                    </div>
                  )}

                  {/* Bottom Verification Status */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[11px]">
                    <span className="text-slate-500 font-medium">
                      Status: Production Deployed
                    </span>
                    <span className="text-primary font-bold">
                      Central Database Synced ✓
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Explanatory Context Note for Central Hub */}
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
              <div>
                <p className="font-bold text-[12px] text-slate-800">
                  {currentDisplayModule.title}
                </p>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {currentDisplayModule.desc}
                </p>
              </div>
              <span className="text-[11px] font-bold text-primary shrink-0 ml-3">
                Hover to inspect
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 5 MODULE CARDS */}
        <div className="col-span-3 flex flex-col gap-3.5">
          {rightModules.map((mod) => {
            const isMatch = selectedCategory === 'All Modules' || mod.category === selectedCategory
            const isActive = currentDisplayModule.id === mod.id

            return (
              <motion.div
                key={mod.id}
                animate={{
                  opacity: isMatch ? 1 : 0.35,
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredModule(mod)}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => setActiveModule(mod)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  isActive
                    ? 'bg-white shadow-lg border-primary ring-2 ring-primary/20'
                    : 'bg-white/90 hover:bg-white border-slate-200/80 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center border ${mod.theme.bg} ${mod.theme.border}`}>
                    <Icon name={mod.icon} className={`text-[16px] ${mod.theme.text}`} />
                  </span>
                  <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full border ${mod.theme.pill}`}>
                    {mod.tag}
                  </span>
                </div>
                <h4 className="font-[Plus_Jakarta_Sans] text-[14px] font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                  {mod.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                  {mod.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* 3. MOBILE & TABLET RESPONSIVE CONNECTED HUB (STACKED WITH LIVE PREVIEW ON TOP) */}
      <div className="flex lg:hidden flex-col gap-6">
        {/* Central Preview Top Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-primary text-white flex items-center justify-center font-black text-[12px]">E</span>
              <span className="font-bold text-[13px] text-slate-900">EduDisk Central Hub</span>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${currentDisplayModule.theme.pill}`}>
              {currentDisplayModule.tag}
            </span>
          </div>

          <div>
            <h4 className="font-bold text-[16px] text-slate-900">
              {currentDisplayModule.title}
            </h4>
            <p className="text-[12px] text-slate-600 mt-1">
              {currentDisplayModule.desc}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="text-slate-400 font-semibold">{currentDisplayModule.category}</span>
            <span className="text-emerald-600 font-bold">Live in Production ✓</span>
          </div>
        </div>

        {/* 9 Modules Vertical List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ERP_MODULES.map((mod) => {
            const isMatch = selectedCategory === 'All Modules' || mod.category === selectedCategory
            const isActive = currentDisplayModule.id === mod.id

            if (!isMatch) return null

            return (
              <button
                key={mod.id}
                onClick={() => {
                  setActiveModule(mod)
                  setHoveredModule(mod)
                }}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-white shadow-md border-primary ring-2 ring-primary/20'
                    : 'bg-white border-slate-200/80 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center border ${mod.theme.bg} ${mod.theme.border}`}>
                    <Icon name={mod.icon} className={`text-[18px] ${mod.theme.text}`} />
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${mod.theme.pill}`}>
                    {mod.tag}
                  </span>
                </div>
                <h4 className="font-bold text-[14px] text-slate-900">
                  {mod.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {mod.desc}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
