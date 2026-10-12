import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealOnScroll } from './RevealOnScroll'
import { Icon } from './Icon'
import { useTranslation } from '../context/LanguageContext'

export function CTAForm() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [institution, setInstitution] = useState('')
  const [campusType, setCampusType] = useState('School (Nursery – 10)')
  const { isKannada, t } = useTranslation()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setName('')
      setPhone('')
      setInstitution('')
    }, 4500)
  }

  return (
    <section id="contact" className="px-margin-mobile md:px-margin-desktop py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0a0f1d] transition-colors duration-250">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pastel-blue/30 dark:bg-[#2a2fff]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-5 right-1/4 w-96 h-96 bg-pastel-peach/30 dark:bg-amber-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <RevealOnScroll>
        <div className="max-w-[780px] mx-auto bg-gradient-to-b from-white to-[#F8FAFC] dark:from-[#111827] dark:to-[#0c1322] rounded-3xl p-7 sm:p-10 md:p-12 border border-slate-200 dark:border-slate-800 shadow-[0_12px_40px_-8px_rgba(42,47,255,0.08)] relative">
          
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 bg-pastel-blue/80 dark:bg-[#2a2fff]/20 rounded-full border border-[#2a2fff]/20 dark:border-[#2a2fff]/35 shadow-2xs">
              <Icon name="calendar_today" className="text-[#2a2fff] dark:text-[#93c5fd] text-[16px]" />
              <span className="font-[Inter] text-[13px] font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                {t('cta.badge', 'Campus Transformation')}
              </span>
            </div>
            <h2 className="font-[Plus_Jakarta_Sans] text-[28px] sm:text-[36px] font-extrabold leading-[1.2] tracking-[-0.02em] text-slate-900 dark:text-white mb-3">
              {t('cta.title', 'Ready to modernize your institution?')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-[15px] sm:text-[16px] max-w-lg mx-auto leading-relaxed">
              {t(
                'cta.subtitle',
                'Join 20+ forward-thinking schools and colleges. Request a personalized walkthrough tailored to your campus.'
              )}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thank-you"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-pastel-mint dark:bg-emerald-900/30 border border-mint-text/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Icon name="check_circle" filled className="text-[36px]" />
                </div>
                <h3 className="font-[Plus_Jakarta_Sans] text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {isKannada ? 'ಧನ್ಯವಾದಗಳು!' : 'Thank you!'}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[15px]">
                  {t('cta.successMsg', 'Thank you! Our technical team will reach out on WhatsApp shortly.')}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4 sm:gap-5"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                      {t('cta.nameLabel', 'Your Full Name')}
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 focus:border-[#2a2fff] focus:ring-2 focus:ring-[#2a2fff]/20 outline-hidden transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white text-[14px] shadow-2xs"
                      placeholder={t('cta.namePlaceholder', 'e.g. Principal Dr. Ramesh / Administrator')}
                      type="text"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                      {t('cta.phoneLabel', 'WhatsApp / Mobile Number')}
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 focus:border-[#2a2fff] focus:ring-2 focus:ring-[#2a2fff]/20 outline-hidden transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white text-[14px] shadow-2xs"
                      placeholder={t('cta.phonePlaceholder', '10-digit mobile number')}
                      type="tel"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                    {t('cta.institutionLabel', 'Institution Name & Location')}
                  </label>
                  <input
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 focus:border-[#2a2fff] focus:ring-2 focus:ring-[#2a2fff]/20 outline-hidden transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white text-[14px] shadow-2xs"
                    placeholder={t('cta.institutionPlaceholder', 'e.g. Mayura School, Davanagere')}
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                    {t('cta.typeLabel', 'Campus Category')}
                  </label>
                  <div className="relative">
                    <select
                      value={campusType}
                      onChange={(e) => setCampusType(e.target.value)}
                      className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 focus:border-[#2a2fff] focus:ring-2 focus:ring-[#2a2fff]/20 outline-hidden transition-all appearance-none text-slate-900 dark:text-white text-[14px] shadow-2xs cursor-pointer"
                    >
                      <option>{t('cta.typeSchool', 'School (Nursery – 10)')}</option>
                      <option>{t('cta.typePu', 'PU College (Arts, Comm, Science)')}</option>
                      <option>{t('cta.typeDegree', 'Degree / B.Ed / BCA College')}</option>
                    </select>
                    <Icon
                      name="unfold_more"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]"
                    />
                  </div>
                </div>

                <button
                  className="btn-primary w-full py-4 rounded-2xl text-[16px] font-bold mt-2 shadow-md shadow-[#2a2fff]/25 cursor-pointer"
                  type="submit"
                >
                  {t('cta.submitBtn', 'Schedule Live Demo')}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </RevealOnScroll>
    </section>
  )
}
