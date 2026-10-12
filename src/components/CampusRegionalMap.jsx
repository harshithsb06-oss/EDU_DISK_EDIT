import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './Icon'
import { REGIONAL_LOCATIONS, TOTAL_INSTITUTIONS_COUNT } from '../constants/product'
import { useTranslation } from '../context/LanguageContext'
import { useCountUp } from '../hooks/useCountUp'

export function CampusRegionalMap() {
  const [selectedId, setSelectedId] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)
  const { lang, isKannada, t } = useTranslation()

  // Animated counter for "20 Institutions Served" summary card
  const { count: animatedTotal, ref: countRef } = useCountUp(TOTAL_INSTITUTIONS_COUNT, 1600)

  // Current active location object
  const activeLocation = useMemo(
    () => REGIONAL_LOCATIONS.find((loc) => loc.id === selectedId) || null,
    [selectedId]
  )

  // Calculate pan & zoom transform values for SVG view (900x520)
  const { zoomScale, panX, panY } = useMemo(() => {
    if (!activeLocation) {
      return { zoomScale: 1, panX: 0, panY: 0 }
    }
    const scale = 1.75
    const targetX = activeLocation.mapX
    const targetY = activeLocation.mapY
    const pX = 450 - targetX * scale
    const pY = 260 - targetY * scale
    return { zoomScale: scale, panX: pX, panY: pY }
  }, [activeLocation])

  return (
    <div className="w-full flex flex-col gap-6">
      {/* ======================================================== */}
      {/* 1. PROMINENT SUMMARY CARD ABOVE MAP (20 Institutions)    */}
      {/* ======================================================== */}
      <div
        ref={countRef}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pastel-blue/80 via-white to-pastel-lavender/80 dark:from-[#111827] dark:via-[#162036] dark:to-[#111827] border border-blue-100 dark:border-slate-800 p-6 sm:p-8 shadow-[0_10px_30px_-10px_rgba(42,47,255,0.12)]"
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#2a2fff]/10 dark:bg-[#2a2fff]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-48 h-48 bg-pastel-mint/60 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Big Bold Animated Counter */}
            <div className="flex items-baseline gap-1">
              <span className="font-[Plus_Jakarta_Sans] text-[48px] sm:text-[62px] md:text-[72px] font-extrabold tracking-tight text-[#2a2fff] dark:text-[#60a5fa] leading-none drop-shadow-2xs">
                {animatedTotal || TOTAL_INSTITUTIONS_COUNT}
              </span>
              <span className="font-[Plus_Jakarta_Sans] text-[28px] sm:text-[34px] font-extrabold text-[#2a2fff]/70 dark:text-[#60a5fa]/70">
                +
              </span>
            </div>

            <div className="h-12 w-[1px] bg-slate-300 dark:bg-slate-700 hidden sm:block" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2a2fff]/10 dark:bg-[#2a2fff]/25 text-[#2a2fff] dark:text-[#93c5fd] text-[11px] font-extrabold uppercase tracking-wider mb-1">
                <Icon name="verified" filled className="text-[13px]" />
                <span>{t('map.totalServed', '20 Institutions Active')}</span>
              </div>
              <h3 className="font-[Plus_Jakarta_Sans] text-[20px] sm:text-[24px] font-extrabold text-slate-900 dark:text-white leading-tight">
                {t('map.summaryTitle', 'Institutions Served')}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-[13px] sm:text-[14px] mt-0.5 max-w-[520px]">
                {t('map.summarySubtitle', 'Across 6 vibrant regional campus hubs')}
              </p>
            </div>
          </div>

          {/* Quick Hub Badges */}
          <div className="flex flex-wrap items-center gap-2 self-stretch md:self-auto justify-start md:justify-end">
            {REGIONAL_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedId(selectedId === loc.id ? null : loc.id)}
                className={`px-3 py-1.5 rounded-xl text-[12px] font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                  selectedId === loc.id
                    ? 'bg-[#2a2fff] text-white border-[#2a2fff] shadow-sm'
                    : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[#2a2fff]/40 dark:hover:border-[#2a2fff]/60'
                }`}
              >
                <span>{isKannada ? loc.knName : loc.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    selectedId === loc.id
                      ? 'bg-white/25 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {loc.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. TOP FILTER PILLS & RESET CONTROLS                    */}
      {/* ======================================================== */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
          {/* All Locations button */}
          <button
            onClick={() => setSelectedId(null)}
            className={`px-3.5 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
              selectedId === null
                ? 'bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] shadow-xs'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <span>🗺️ {t('nav.allLocations', 'All Locations')}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                selectedId === null
                  ? 'bg-white/25 dark:bg-black/20 text-white dark:text-[#0f172a]'
                  : 'bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
              }`}
            >
              {TOTAL_INSTITUTIONS_COUNT}
            </span>
          </button>

          {/* Individual Location Pills */}
          {REGIONAL_LOCATIONS.map((loc) => {
            const isSelected = selectedId === loc.id
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedId(isSelected ? null : loc.id)}
                onMouseEnter={() => setHoveredId(loc.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`px-3 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#2a2fff] text-white border-[#2a2fff] shadow-md scale-[1.02]'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: loc.pinColor }}
                />
                <span>{isKannada ? loc.knName : loc.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isSelected
                      ? 'bg-white/25 text-white'
                      : 'bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {loc.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Reset Zoom Button */}
        {selectedId && (
          <button
            onClick={() => setSelectedId(null)}
            className="text-[12px] font-bold text-[#2a2fff] dark:text-[#60a5fa] hover:opacity-80 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pastel-blue dark:bg-[#2a2fff]/20 border border-[#2a2fff]/30 transition-all shadow-2xs cursor-pointer shrink-0"
          >
            <Icon name="refresh" className="text-[15px]" />
            <span>{t('map.resetToOverview', 'Reset to Full Regional Map')}</span>
          </button>
        )}
      </div>

      {/* ======================================================== */}
      {/* 3. SPLIT LAYOUT: ILLUSTRATED SVG MAP & DETAIL DRAWER     */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* MAP CONTAINER (7 cols on desktop) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#111827] rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgba(42,47,255,0.06)] relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-pastel-blue/40 dark:bg-[#2a2fff]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-pastel-lavender/40 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          {/* Map Header Status & Instructions */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[12px] font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
                {isKannada ? 'ಪ್ರಾದೇಶಿಕ ಕ್ಯಾಂಪಸ್ ನಕ್ಷೆ' : 'Regional Campus Hubs Map'}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              <Icon name="touch_app" className="text-[15px] text-[#2a2fff] dark:text-[#60a5fa]" />
              <span>{t('map.zoomHint', 'Click markers to zoom')}</span>
            </div>
          </div>

          {/* SVG MAP CANVAS */}
          <div className="relative w-full aspect-[900/520] rounded-2xl bg-gradient-to-br from-[#EBF5FE] via-[#F0F7FF] to-[#E6F0FA] dark:from-[#0c1322] dark:via-[#0e172a] dark:to-[#090d18] border border-blue-100 dark:border-slate-800 shadow-inner overflow-hidden select-none">
            
            <svg
              viewBox="0 0 900 520"
              className="w-full h-full cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'pan-x pan-y' }}
            >
              <defs>
                {/* Map Grid Pattern */}
                <pattern id="lightMapGrid" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#DCEAF8" strokeWidth="0.6" strokeDasharray="2 3" />
                </pattern>
                <pattern id="darkMapGrid" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#1e293b" strokeWidth="0.6" strokeDasharray="2 3" />
                </pattern>

                {/* Tungabhadra River Gradient */}
                <linearGradient id="tungaRiverGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#0284C7" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#0369A1" stopOpacity="0.90" />
                </linearGradient>

                {/* Highway Gradient */}
                <linearGradient id="highwayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2A2FFF" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#4F46E5" />
                </linearGradient>

                {/* Drop shadow for floating labels */}
                <filter id="labelShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.12" />
                </filter>
              </defs>

              {/* Grid Background */}
              <rect width="900" height="520" fill="url(#lightMapGrid)" className="dark:hidden" />
              <rect width="900" height="520" fill="url(#darkMapGrid)" className="hidden dark:block" />

              {/* ANIMATED PAN & ZOOM GROUP */}
              <motion.g
                animate={{
                  scale: zoomScale,
                  x: panX,
                  y: panY,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 140,
                  damping: 24,
                  mass: 0.8,
                }}
                style={{ originX: '450px', originY: '260px' }}
              >
                {/* ======================================================== */}
                {/* 1. PASTEL REGIONAL ZONES (6 HUBS)                       */}
                {/* ======================================================== */}

                {/* Zone 1: Haveri (Pastel Lavender) */}
                <path
                  d="M 100 60 Q 220 40 290 90 Q 320 170 260 210 Q 160 200 110 140 Z"
                  fill="#F0ECFF"
                  className="dark:fill-[#2d244a]"
                  fillOpacity="0.75"
                  stroke="#C4B5FD"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                <text x="135" y="80" fill="#7C3AED" fontSize="10" fontWeight="bold" opacity="0.75" letterSpacing="0.8">
                  HAVERI CLUSTER
                </text>

                {/* Zone 2: Motebennur (Pastel Pink) */}
                <path
                  d="M 250 120 Q 360 110 390 190 Q 360 240 280 230 Q 250 180 250 120 Z"
                  fill="#FCE7F3"
                  className="dark:fill-[#3d2036]"
                  fillOpacity="0.75"
                  stroke="#F472B6"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />

                {/* Zone 3: Harihar (Pastel Peach) */}
                <path
                  d="M 360 160 Q 490 150 510 260 Q 450 300 370 270 Q 360 210 360 160 Z"
                  fill="#FFF0E6"
                  className="dark:fill-[#38261e]"
                  fillOpacity="0.75"
                  stroke="#FDBA74"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                <text x="390" y="180" fill="#EA580C" fontSize="10" fontWeight="bold" opacity="0.75" letterSpacing="0.8">
                  HARIHAR CLUSTER
                </text>

                {/* Zone 4: Davanagere (Pastel Blue) */}
                <path
                  d="M 500 240 Q 690 220 760 330 Q 740 450 560 440 Q 490 350 500 240 Z"
                  fill="#EAF4FF"
                  className="dark:fill-[#1b2b48]"
                  fillOpacity="0.75"
                  stroke="#93C5FD"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                <text x="560" y="270" fill="#2563EB" fontSize="10" fontWeight="bold" opacity="0.8" letterSpacing="0.8">
                  DAVANAGERE EDUCATION HUB
                </text>

                {/* Zone 5: Hirekerur (Pastel Mint) */}
                <path
                  d="M 90 300 Q 230 290 260 410 Q 230 480 120 470 Q 70 400 90 300 Z"
                  fill="#E8F8F1"
                  className="dark:fill-[#16382c]"
                  fillOpacity="0.75"
                  stroke="#A7F3D0"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                <text x="110" y="325" fill="#059669" fontSize="10" fontWeight="bold" opacity="0.8" letterSpacing="0.8">
                  HIREKERUR CLUSTER
                </text>

                {/* Zone 6: Hirethogaleri (Pastel Amber) */}
                <path
                  d="M 270 340 Q 410 330 430 440 Q 380 490 290 480 Q 260 420 270 340 Z"
                  fill="#FEF3C7"
                  className="dark:fill-[#38311b]"
                  fillOpacity="0.75"
                  stroke="#FCD34D"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />

                {/* ======================================================== */}
                {/* 2. TUNGABHADRA RIVER SYSTEM & TRIBUTARIES                */}
                {/* ======================================================== */}

                {/* Kumadvathi Tributary (from Hirekerur toward Tungabhadra) */}
                <path
                  d="M 160 430 Q 210 380 270 330 Q 310 290 350 255"
                  fill="none"
                  stroke="#7DD3FC"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <text x="210" y="345" fill="#0284C7" fontSize="8.5" fontWeight="bold" opacity="0.7">
                  Kumadvathi
                </text>

                {/* Varada Tributary (near Haveri) */}
                <path
                  d="M 90 100 Q 140 140 220 170 Q 280 190 340 240"
                  fill="none"
                  stroke="#7DD3FC"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <text x="130" y="150" fill="#0284C7" fontSize="8.5" fontWeight="bold" opacity="0.7">
                  Varada River
                </text>

                {/* Main Tungabhadra River Flow */}
                <path
                  d="M 80 290 Q 220 280 340 250 T 430 220 T 560 170 T 730 110 T 890 80"
                  fill="none"
                  stroke="url(#tungaRiverGrad)"
                  strokeWidth="11"
                  strokeLinecap="round"
                  opacity="0.95"
                />
                {/* Center River Shimmer Line */}
                <path
                  d="M 80 290 Q 220 280 340 250 T 430 220 T 560 170 T 730 110 T 890 80"
                  fill="none"
                  stroke="#E0F2FE"
                  strokeWidth="2.5"
                  strokeDasharray="14 12"
                  opacity="0.9"
                />

                {/* River Text Label */}
                <text
                  x="455"
                  y="205"
                  fill="#0369A1"
                  fontSize="11"
                  fontWeight="extrabold"
                  letterSpacing="0.8"
                >
                  {isKannada ? '〜 ತುಂಗಭದ್ರಾ ನದಿ 〜' : '〜 Tungabhadra River 〜'}
                </text>

                {/* ======================================================== */}
                {/* 3. ROAD NETWORKS: NH-48 & STATE HIGHWAYS                 */}
                {/* ======================================================== */}

                {/* State Highway 62: Haveri -> Hirekerur */}
                <path
                  d="M 190 120 Q 170 240 180 390"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="3.5"
                  strokeDasharray="6 4"
                  opacity="0.8"
                />

                {/* Southern Link: Hirekerur -> Hirethogaleri -> Harihar */}
                <path
                  d="M 180 390 Q 260 420 350 410 Q 400 330 430 220"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="3"
                  strokeDasharray="5 3"
                  opacity="0.7"
                />

                {/* NH-48 Arterial Highway: Haveri -> Motebennur -> Harihar -> Davanagere */}
                <path
                  d="M 110 80 L 190 120 L 310 170 L 430 220 L 620 340 L 760 440"
                  fill="none"
                  stroke="#1E293B"
                  className="dark:stroke-slate-500"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <path
                  d="M 110 80 L 190 120 L 310 170 L 430 220 L 620 340 L 760 440"
                  fill="none"
                  stroke="#FBBF24"
                  strokeWidth="2.5"
                  strokeDasharray="8 6"
                  opacity="0.95"
                />

                {/* NH-48 Highway Marker Badges */}
                <g transform="translate(235, 135)">
                  <rect x="-18" y="-7" width="36" height="14" rx="4" fill="#1E293B" />
                  <text x="0" y="3.5" fill="#FBBF24" fontSize="8" fontWeight="bold" textAnchor="middle">
                    NH-48
                  </text>
                </g>
                <g transform="translate(535, 275)">
                  <rect x="-18" y="-7" width="36" height="14" rx="4" fill="#1E293B" />
                  <text x="0" y="3.5" fill="#FBBF24" fontSize="8" fontWeight="bold" textAnchor="middle">
                    NH-48
                  </text>
                </g>

                {/* ======================================================== */}
                {/* 4. LOCATION PINS & FLOATING LABELS (COUNTS ONLY!)        */}
                {/* ======================================================== */}
                {REGIONAL_LOCATIONS.map((loc) => {
                  const isSelected = selectedId === loc.id
                  const isHovered = hoveredId === loc.id
                  const highlight = isSelected || isHovered

                  return (
                    <g
                      key={loc.id}
                      transform={`translate(${loc.mapX}, ${loc.mapY})`}
                      onClick={() => setSelectedId(isSelected ? null : loc.id)}
                      onMouseEnter={() => setHoveredId(loc.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="cursor-pointer transition-transform duration-200"
                      style={{ transformOrigin: `${loc.mapX}px ${loc.mapY}px` }}
                    >
                      {/* Pulse Wave Animation on Selected/Hovered Pin */}
                      <circle
                        cx="0"
                        cy="0"
                        r={highlight ? 24 : 15}
                        fill={isSelected ? '#2A2FFF' : loc.pinColor}
                        fillOpacity={highlight ? 0.35 : 0.18}
                        className="animate-pulse"
                      />

                      {/* Outer Ring */}
                      <circle
                        cx="0"
                        cy="0"
                        r={isSelected ? 14 : 11}
                        fill="#FFFFFF"
                        stroke={isSelected ? '#2A2FFF' : loc.pinColor}
                        strokeWidth={isSelected ? 3.5 : 2.5}
                      />

                      {/* Inner Colored Dot */}
                      <circle
                        cx="0"
                        cy="0"
                        r={isSelected ? 7 : 5.5}
                        fill={isSelected ? '#2A2FFF' : loc.pinColor}
                      />

                      {/* FLOATING CAPSULE LABEL (LOCATION + COUNT ONLY) */}
                      <g
                        transform="translate(0, -32)"
                        className="transition-all duration-200"
                      >
                        {/* Rounded White Capsule with Drop Shadow */}
                        <rect
                          x="-68"
                          y="-14"
                          width="136"
                          height="28"
                          rx="14"
                          fill="#FFFFFF"
                          className="dark:fill-[#1e293b]"
                          stroke={isSelected ? '#2A2FFF' : '#E2E8F0'}
                          strokeWidth={isSelected ? 2.5 : 1.2}
                          filter="url(#labelShadow)"
                        />

                        {/* Location Name */}
                        <text
                          x="-10"
                          y="4"
                          fill={isSelected ? '#2A2FFF' : '#0F172A'}
                          className="dark:fill-slate-100"
                          fontSize="11.5"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {isKannada ? loc.knName : loc.name}
                        </text>

                        {/* Institution Count Badge */}
                        <circle
                          cx="47"
                          cy="0"
                          r="9.5"
                          fill={isSelected ? '#2A2FFF' : loc.pinColor}
                        />
                        <text
                          x="47"
                          y="3.5"
                          fill="#FFFFFF"
                          fontSize="9.5"
                          fontWeight="extrabold"
                          textAnchor="middle"
                        >
                          {loc.count}
                        </text>
                      </g>
                    </g>
                  )
                })}
              </motion.g>
            </svg>

            {/* Corner Status & Overview Reset Badge */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                {activeLocation
                  ? `${t('map.activeViewing', 'Viewing Cluster')}: ${isKannada ? activeLocation.knName : activeLocation.name}`
                  : `${t('nav.overview', 'Regional Overview')} (20 ${t('map.institutionsCount', 'Institutions')})`}
              </span>
              {selectedId && (
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-[#2a2fff] dark:text-[#60a5fa] hover:opacity-80 ml-1 cursor-pointer font-bold text-[12px] px-1 rounded-sm"
                  aria-label="Reset zoom"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 5. INSTITUTIONS DRAWER / DETAILS PANEL (5 cols desktop) */}
        {/* CRITICAL: ONLY LOCATION NAME & INSTITUTION COUNT SHOWN!  */}
        {/* ZERO INDIVIDUAL INSTITUTION NAMES ARE EVER DISPLAYED!   */}
        {/* ======================================================== */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {activeLocation ? (
              /* FOCUSED CLUSTER DETAIL VIEW (STRICTLY AGGREGATE) */
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-4"
              >
                {/* Active Region Header Card */}
                <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-pastel-blue dark:bg-[#2a2fff]/20 text-[#2a2fff] dark:text-[#93c5fd] border border-[#2a2fff]/25">
                      {isKannada ? activeLocation.knDistrict : activeLocation.district}
                    </span>
                    <span className="text-[12px] font-extrabold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                      {activeLocation.highwayTag}
                    </span>
                  </div>

                  <h3 className="font-[Plus_Jakarta_Sans] text-[26px] sm:text-[28px] font-extrabold text-slate-900 dark:text-white leading-tight">
                    {isKannada ? activeLocation.knName : activeLocation.name}
                  </h3>

                  {/* Prominent Aggregate Metric */}
                  <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-pastel-blue/60 to-white dark:from-[#162036] dark:to-[#111827] border border-[#2a2fff]/20 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {isKannada ? 'ಸೇವೆಯಲ್ಲಿರುವ ಸಂಸ್ಥೆಗಳು' : 'Institutions Served'}
                      </p>
                      <p className="font-[Plus_Jakarta_Sans] text-[28px] font-extrabold text-[#2a2fff] dark:text-[#60a5fa] leading-none mt-1">
                        {activeLocation.count}{' '}
                        <span className="text-[15px] font-bold text-slate-700 dark:text-slate-300">
                          {activeLocation.count === 1
                            ? t('map.institutionCountSingle', 'Institution')
                            : t('map.institutionsCount', 'Institutions')}
                        </span>
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#2a2fff] dark:text-[#60a5fa] shadow-2xs">
                      <Icon name="school" className="text-[26px]" />
                    </div>
                  </div>

                  {/* Campus Types Present (General Types ONLY, NO NAMES!) */}
                  <div className="mt-4">
                    <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">
                      {t('map.campusTypes', 'Campus Types Served')}
                    </p>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-[13px] font-semibold text-slate-800 dark:text-slate-200">
                      {isKannada ? activeLocation.knCampusTypes : activeLocation.campusTypes}
                    </div>
                  </div>

                  {/* Regional Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-[13px] sm:text-[14px] mt-4 leading-relaxed">
                    {isKannada ? activeLocation.knDescription : activeLocation.description}
                  </p>

                  {/* Actions: Request Demo + Reset */}
                  <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedId(null)}
                      className="text-[12px] font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <Icon name="arrow_back" className="text-[15px]" />
                      <span>{t('map.resetToOverview', 'Full Map')}</span>
                    </button>

                    <a
                      href="#contact"
                      className="btn-primary px-4 py-2 rounded-xl text-[12px] font-bold shadow-xs flex items-center gap-1.5"
                    >
                      <span>{t('nav.bookDemo', 'Book Demo')}</span>
                      <Icon name="arrow_forward" className="text-[14px]" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* OVERVIEW DIRECTORY OF THE 6 REGIONAL HUBS (STRICTLY AGGREGATE) */
              <motion.div
                key="all-overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white dark:bg-[#111827] rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-4"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pastel-mint dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold mb-2">
                    <Icon name="hub" className="text-[14px]" />
                    <span>{isKannada ? 'ಸಕ್ರಿಯ ಪ್ರಾದೇಶಿಕ ಉಪಸ್ಥಿತಿ' : 'Active Regional Presence'}</span>
                  </div>
                  <h3 className="font-[Plus_Jakarta_Sans] text-[20px] font-bold text-slate-900 dark:text-white leading-tight">
                    {isKannada ? 'ನಕ್ಷೆಯಲ್ಲಿ ಯಾವುದೇ ಕೇಂದ್ರವನ್ನು ಆರಿಸಿ' : 'Select a Cluster to Explore'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-[13px] mt-1 leading-relaxed">
                    {isKannada
                      ? 'ಆಯಾ ಭಾಗದ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳ ಸಂಖ್ಯೆ ಮತ್ತು ಸೌಲಭ್ಯಗಳನ್ನು ಜೂಮ್ ಮಾಡಿ ನೋಡಲು ಕೆಳಗಿನ ಯಾವುದೇ ಕೇಂದ್ರವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.'
                      : 'Click any education hub below to zoom directly into that cluster and view aggregated capability stats.'}
                  </p>
                </div>

                {/* 6 Regional Hub Mini Cards */}
                <div className="flex flex-col gap-2.5 pt-1">
                  {REGIONAL_LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedId(loc.id)}
                      onMouseEnter={() => setHoveredId(loc.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 hover:bg-pastel-blue/60 dark:hover:bg-[#1e2a44] border border-slate-200/80 dark:border-slate-700/80 hover:border-[#2a2fff]/40 transition-all text-left flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0 shadow-2xs"
                          style={{ backgroundColor: loc.pinColor }}
                        />
                        <div>
                          <p className="font-bold text-[14px] text-slate-800 dark:text-slate-100 group-hover:text-[#2a2fff] dark:group-hover:text-[#60a5fa] transition-colors">
                            {isKannada ? loc.knName : loc.name}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {isKannada ? loc.knDistrict : loc.district} · {loc.highwayTag}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-white dark:bg-slate-700 text-[#2a2fff] dark:text-[#93c5fd] border border-slate-200 dark:border-slate-600 shadow-2xs">
                          {loc.count}{' '}
                          {loc.count === 1
                            ? t('map.institutionCountSingle', 'Institution')
                            : t('map.institutionsCount', 'Institutions')}
                        </span>
                        <Icon
                          name="chevron_right"
                          className="text-slate-400 group-hover:text-[#2a2fff] dark:group-hover:text-[#60a5fa] text-[18px] transition-transform group-hover:translate-x-0.5"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}
