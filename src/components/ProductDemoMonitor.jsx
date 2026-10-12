import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './Icon'

export function ProductDemoMonitor() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard') // for interactive / fallback mode

  useEffect(() => {
    // Attempt playback when mounted
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch((err) => {
        console.warn('Video autoplay prevented or unavailable:', err)
        // Fallback gracefully to interactive animation or poster
        setVideoError(true)
      })
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <div className="relative w-full max-w-[620px] mx-auto group">
      {/* Soft pastel ambient background glow behind monitor */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pastel-blue/80 via-pastel-lavender/60 to-pastel-peach/50 rounded-full blur-2xl -z-10 opacity-70 scale-105 pointer-events-none" />

      {/* MONITOR CHASSIS */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Monitor Screen Frame */}
        <div className="w-full bg-[#1e293b] rounded-[24px] sm:rounded-[28px] p-2 sm:p-2.5 shadow-[0_20px_50px_-10px_rgba(36,48,71,0.25),0_10px_20px_-5px_rgba(91,124,250,0.15)] border border-slate-700/80">
          
          {/* Top Bezel with Camera Dot */}
          <div className="flex items-center justify-center pb-1.5 sm:pb-2 pt-0.5">
            <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700 shadow-inner flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-slate-600" />
            </div>
          </div>

          {/* SCREEN DISPLAY AREA */}
          <div className="relative w-full aspect-[16/10] bg-white rounded-[16px] sm:rounded-[18px] overflow-hidden border border-slate-800 shadow-inner">
            
            {/* 1. SEAMLESS LOOPING VIDEO */}
            {!videoError ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster="/edudisk-demo-poster.png"
                className="w-full h-full object-cover rounded-[16px]"
                onPlaying={() => setIsPlaying(true)}
                onError={() => setVideoError(true)}
              >
                <source src="/edudisk-demo.webm" type="video/webm" />
                {/* Fallback to poster image */}
                <img
                  src="/edudisk-demo-poster.png"
                  alt="EduDisk School ERP Dashboard"
                  className="w-full h-full object-cover"
                />
              </video>
            ) : (
              /* 2. HIGH-DEFINITION INTERACTIVE / FALLBACK PRODUCT DEMO */
              <div className="w-full h-full flex flex-col bg-white">
                {/* Mini App Header */}
                <div className="h-9 bg-white border-b border-slate-100 px-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">
                      E
                    </div>
                    <span className="font-bold text-[12px] text-slate-800">EduDisk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 font-medium">II PUC Science</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>

                {/* Mini App Body */}
                <div className="flex-1 p-3 bg-slate-50 flex gap-2.5 overflow-hidden">
                  {/* Left Mini Sidebar */}
                  <div className="w-24 bg-white rounded-xl p-1.5 border border-slate-100 flex flex-col gap-1 shrink-0">
                    {['Dashboard', 'Timetable', 'Exams', 'WhatsApp'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`text-left px-2 py-1 rounded-lg text-[10px] font-bold transition-colors ${
                          activeTab === tab.toLowerCase()
                            ? 'bg-pastel-blue text-primary'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Main Display Area */}
                  <div className="flex-1 bg-white rounded-xl p-2.5 border border-slate-100 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                      <span className="text-[11px] font-bold text-slate-800 capitalize">
                        {activeTab} Overview
                      </span>
                      <span className="text-[9px] font-bold text-emerald-600 bg-pastel-mint px-1.5 py-0.5 rounded-full">
                        Live System
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-auto">
                      <div className="bg-pastel-blue p-2 rounded-lg">
                        <span className="text-[9px] text-slate-500">Attendance</span>
                        <p className="text-[14px] font-bold text-primary">94.2%</p>
                      </div>
                      <div className="bg-pastel-mint p-2 rounded-lg">
                        <span className="text-[9px] text-slate-500">Exam Marks</span>
                        <p className="text-[14px] font-bold text-mint-text">Published</p>
                      </div>
                    </div>

                    <div className="p-1.5 rounded-lg bg-slate-50 text-[9px] text-slate-600 flex items-center justify-between">
                      <span>WhatsApp Absence &amp; Marks Alert</span>
                      <Icon name="check_circle" filled className="text-emerald-500 text-[12px]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Subtle Glass Reflection Glare Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15" />

            {/* Subtle Live Demo Indicator Badge */}
            <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-700 tracking-wide">
                Live Demo
              </span>
            </div>

            {/* Play / Pause Interactive Floating Control on Hover */}
            {!videoError && (
              <div className="absolute bottom-2.5 left-2.5 z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={togglePlay}
                  type="button"
                  className="bg-white/95 hover:bg-white text-slate-800 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md backdrop-blur-md flex items-center gap-1 border border-slate-200/90 cursor-pointer"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  <Icon name={isPlaying ? 'pause' : 'play_arrow'} className="text-[14px] text-primary" />
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* MONITOR STAND NECK */}
        <div className="w-16 sm:w-20 h-6 sm:h-7 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-400 -mt-0.5 shadow-sm border-x border-slate-400/60" />

        {/* MONITOR STAND BASE */}
        <div className="w-36 sm:w-44 h-3 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 rounded-full shadow-md border border-slate-400/50" />
      </div>

      {/* FLOATING CHIP 1: WhatsApp Parent Notification */}
      <div className="absolute -top-3 -left-3 sm:-left-4 z-30 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-lg border border-slate-100 animate-float flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-pastel-mint text-mint-text flex items-center justify-center">
          <Icon name="chat" filled className="text-[18px]" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <p className="font-bold text-slate-800 text-[12px]">WhatsApp Alerts</p>
            <Icon name="check_circle" filled className="text-emerald-500 text-[14px]" />
          </div>
          <p className="text-[10px] text-slate-500">Instant parent delivery</p>
        </div>
      </div>

      {/* FLOATING CHIP 2: Admin + Staff Dual Portals */}
      <div className="absolute -bottom-2 -right-2 sm:-right-4 z-30 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-lg border border-slate-100 animate-float-delayed flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-pastel-blue text-primary flex items-center justify-center">
          <Icon name="groups" className="text-[18px]" />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 leading-tight">Dual Portals</p>
          <p className="font-bold text-primary text-[13px] leading-tight">Admin &amp; Staff PWA</p>
        </div>
      </div>
    </div>
  )
}
