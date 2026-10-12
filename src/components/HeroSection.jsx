import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { useParallax } from '../hooks/useParallax'
import { useCountUp } from '../hooks/useCountUp'
import { PRODUCT_STATS } from '../constants/product'
import { ProductDemoMonitor } from './ProductDemoMonitor'
import { useTranslation } from '../context/LanguageContext'

const statThemes = [
  { bg: 'bg-pastel-blue dark:bg-[#2a2fff]/15', text: 'text-[#2a2fff] dark:text-[#60a5fa]', iconBg: 'bg-white dark:bg-slate-800', icon: 'account_balance' },
  { bg: 'bg-pastel-lavender dark:bg-purple-900/20', text: 'text-secondary dark:text-purple-300', iconBg: 'bg-white dark:bg-slate-800', icon: 'devices' },
  { bg: 'bg-pastel-mint dark:bg-emerald-900/20', text: 'text-mint-text dark:text-emerald-300', iconBg: 'bg-white dark:bg-slate-800', icon: 'language' },
  { bg: 'bg-pastel-peach dark:bg-amber-900/20', text: 'text-peach-text dark:text-amber-300', iconBg: 'bg-white dark:bg-slate-800', icon: 'school' },
]

function StatCard({ value, suffix, label, knLabel, index, isKannada }) {
  const { count, ref } = useCountUp(value, 2000)
  const theme = statThemes[index % statThemes.length]

  return (
    <div
      ref={ref}
      className={`p-3.5 sm:p-4 rounded-2xl ${theme.bg} border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`w-8 h-8 rounded-xl ${theme.iconBg} shadow-2xs flex items-center justify-center ${theme.text}`}>
          <Icon name={theme.icon} filled className="text-[18px]" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {isKannada ? 'ದೃಢೀಕೃತ' : 'Verified'}
        </span>
      </div>
      <div>
        <h3 className={`font-[Plus_Jakarta_Sans] text-[24px] sm:text-[28px] font-extrabold leading-tight tracking-[-0.02em] ${theme.text}`}>
          {count}{suffix}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-[12px] sm:text-[13px] font-semibold mt-0.5 leading-snug">
          {isKannada ? knLabel : label}
        </p>
      </div>
    </div>
  )
}

export function HeroSection() {
  const { getStyle } = useParallax()
  const { isKannada, t } = useTranslation()

  return (
    <section id="hero" className="relative px-margin-mobile md:px-margin-desktop pt-12 md:pt-16 pb-16 md:pb-24 overflow-hidden">
      {/* Soft pastel ambient background blobs */}
      <div
        className="absolute top-[-5%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-to-br from-pastel-blue/60 to-pastel-lavender/40 dark:from-[#2a2fff]/10 dark:to-purple-900/10 rounded-full blur-[90px] md:blur-[130px] -z-10 pointer-events-none"
        style={getStyle(0.04)}
      />
      <div
        className="absolute bottom-[5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-pastel-mint/50 to-pastel-peach/40 dark:from-emerald-900/10 dark:to-amber-900/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"
        style={getStyle(-0.03)}
      />

      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          
          {/* LEFT: Hero Content */}
          <RevealOnScroll className="lg:w-[50%] lg:shrink-0">
            <div className="text-center lg:text-left">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 bg-gradient-to-r from-pastel-blue via-pastel-lavender to-pastel-mint dark:from-[#2a2fff]/20 dark:via-purple-900/20 dark:to-emerald-900/20 rounded-full border border-[#2a2fff]/20 dark:border-[#2a2fff]/35 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2a2fff] dark:bg-[#60a5fa] animate-pulse" />
                <span className="font-[Inter] text-[12px] md:text-[13px] font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                  {t('hero.badge', 'Trusted by 20+ Leading Educational Institutions')}
                </span>
                <span className="hidden sm:inline-block text-[11px] font-semibold bg-white dark:bg-slate-800 text-[#2a2fff] dark:text-[#93c5fd] px-2 py-0.5 rounded-full shadow-2xs border border-slate-200/60 dark:border-slate-700">
                  Campus ERP
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-[Plus_Jakarta_Sans] text-[34px] sm:text-[46px] md:text-[52px] xl:text-[56px] font-extrabold leading-[1.12] tracking-[-0.03em] text-slate-900 dark:text-white mb-6">
                {t('hero.headlineStart', 'One Smart ERP for')}{' '}
                <span className="gradient-text">{t('hero.headlineAccent', 'Modern Campuses')}</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 font-[Inter] text-[16px] md:text-[17px] leading-[1.65] mb-8 max-w-[540px] mx-auto lg:mx-0">
                {t(
                  'hero.subheadline',
                  'Unified student management, slot-based attendance, examinations, fee collection, and instant WhatsApp alerts — tailored for Schools, PU Colleges, B.Ed, and Degree Institutions.'
                )}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start mb-8">
                <a
                  href="#contact"
                  className="btn-primary text-white px-7 py-3.5 rounded-xl font-[Plus_Jakarta_Sans] text-[15px] sm:text-[16px] font-bold flex items-center justify-center gap-2 shadow-md shadow-[#2a2fff]/25"
                >
                  <span>{t('hero.bookDemoBtn', 'Book Live Campus Demo')}</span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </a>
                <a
                  href="#institutions"
                  className="btn-secondary px-6 py-3.5 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2 group"
                >
                  <Icon name="account_balance" className="text-[#2a2fff] dark:text-[#60a5fa] text-[20px] group-hover:scale-110 transition-transform" />
                  <span>{isKannada ? 'ನಮ್ಮ ೨೦ ಸಂಸ್ಥೆಗಳು' : 'Explore 20 Campuses'}</span>
                </a>
              </div>

              {/* Quick Trust Highlights Pill Bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-blue dark:bg-[#2a2fff]/15 text-slate-700 dark:text-slate-300 text-[12px] font-medium border border-[#2a2fff]/15">
                  <Icon name="chat" className="text-[#2a2fff] dark:text-[#60a5fa] text-[14px]" />
                  <span>{isKannada ? 'ಪೋಷಕರಿಗೆ ಪ್ರತ್ಯೇಕ ಆ್ಯಪ್ ಅಗತ್ಯವಿಲ್ಲ' : 'No parent app needed'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-mint dark:bg-emerald-900/20 text-slate-700 dark:text-slate-300 text-[12px] font-medium border border-mint-text/20">
                  <Icon name="verified" className="text-mint-text dark:text-emerald-400 text-[14px]" />
                  <span>{isKannada ? 'ಅಧಿಕೃತ ವಾಟ್ಸಾಪ್ ಸಂದೇಶಗಳು' : 'Official WhatsApp Alerts'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-lavender dark:bg-purple-900/20 text-slate-700 dark:text-slate-300 text-[12px] font-medium border border-secondary/20">
                  <Icon name="domain" className="text-secondary dark:text-purple-300 text-[14px]" />
                  <span>{isKannada ? '೨೦ ಸಕ್ರಿಯ ಸಂಸ್ಥೆಗಳು' : '20 Active Campuses'}</span>
                </div>
              </div>

            </div>
          </RevealOnScroll>

          {/* RIGHT: Mockup with Floating Pastel Chips & Stats */}
          <RevealOnScroll className="mt-12 lg:mt-0 lg:w-[50%] lg:shrink-0" delay={0.15}>
            <div className="flex flex-col gap-6">
              
              {/* Interactive Desktop Monitor with Framer-style ERP Product Video Demo */}
              <ProductDemoMonitor />

              {/* Stat Tiles in Zynerd-style Pastel Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-4">
                {PRODUCT_STATS.map((s, idx) => (
                  <StatCard
                    key={s.label}
                    value={s.value}
                    suffix={s.suffix}
                    label={s.label}
                    knLabel={s.knLabel}
                    index={idx}
                    isKannada={isKannada}
                  />
                ))}
              </div>

            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  )
}
