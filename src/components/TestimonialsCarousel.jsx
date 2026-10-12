import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { useAutoScroll } from '../hooks/useAutoScroll'

const testimonials = [
  {
    quote: 'The automated compliance reporting saved our administration hundreds of manual hours every semester.',
    name: 'Dr. Elena Ross',
    role: 'Dean, St. Xavier University',
    theme: { bg: 'bg-pastel-blue text-primary border-primary/20' },
  },
  {
    quote: 'EduDisk is the most intuitive ERP we have ever implemented. The student portal is a game changer.',
    name: 'Prof. Aris Thorne',
    role: 'Registrar, Tech Institute',
    theme: { bg: 'bg-pastel-lavender text-secondary border-secondary/20' },
  },
  {
    quote: 'Fee collection went from a nightmare to a seamless process. Parents love the instant WhatsApp receipts.',
    name: 'Mrs. Priya Sharma',
    role: 'Administrator, Delhi Public School',
    theme: { bg: 'bg-pastel-mint text-mint-text border-mint-text/20' },
  },
  {
    quote: 'The attendance analytics helped us identify at-risk students early, improving retention by 23% in one year.',
    name: 'Dr. Marcus Chen',
    role: 'Vice Chancellor, Pacific University',
    theme: { bg: 'bg-pastel-peach text-peach-text border-peach-text/20' },
  },
]

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400 mb-5">
      {[...Array(5)].map((_, i) => (
        <Icon key={i} name="star" filled className="text-amber-400 text-[18px]" />
      ))}
    </div>
  )
}

export function TestimonialsCarousel() {
  const scrollRef = useAutoScroll(0.4, 50)

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-y border-slate-200/60 overflow-hidden relative">
      <RevealOnScroll>
        <div className="px-margin-mobile md:px-margin-desktop mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 bg-white rounded-full border border-slate-200/80 shadow-2xs">
            <Icon name="format_quote" className="text-primary text-[16px]" />
            <span className="font-[Inter] text-[13px] font-bold text-slate-700 tracking-wide">
              Administrator Feedback
            </span>
          </div>
          <h2 className="font-[Plus_Jakarta_Sans] text-[32px] md:text-[42px] font-extrabold leading-[1.18] tracking-[-0.02em] text-slate-900">
            Trusted by Educators Worldwide
          </h2>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div
          ref={scrollRef}
          className="px-margin-mobile md:px-margin-desktop overflow-x-auto snap-x-mandatory no-scrollbar flex gap-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[85vw] md:min-w-[500px] lg:min-w-[540px] snap-start bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(91,124,250,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(91,124,250,0.10)] p-8 md:p-9 rounded-3xl transition-all shrink-0 flex flex-col justify-between"
            >
              <div>
                <Stars />
                <p className="font-[Inter] text-[16px] md:text-[17px] leading-[1.65] text-slate-700 mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className={`w-12 h-12 rounded-2xl ${t.theme.bg} border flex items-center justify-center font-bold text-[18px]`}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-[15px]">{t.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}
