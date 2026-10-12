import { EDUDISK_CONTACTS, whatsappUrl } from '../constants/contacts'
import { useTranslation } from '../context/LanguageContext'

const DEMO_MESSAGE = 'Hi EduDisk, I would like to book a demo for our institution.'
const FAB_CONTACT = EDUDISK_CONTACTS[0]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7" aria-hidden="true">
      <path d="M16.004 2.002c-7.732 0-14.002 6.268-14.002 13.998 0 2.468.654 4.876 1.896 6.99L2 30l7.192-1.87A13.94 13.94 0 0 0 16.004 30c7.732 0 14-6.27 14-14s-6.268-13.998-14-13.998zm0 25.596a11.58 11.58 0 0 1-5.904-1.616l-.424-.252-4.39 1.15 1.172-4.28-.276-.44A11.56 11.56 0 0 1 4.4 16c0-6.398 5.208-11.6 11.604-11.6 6.398 0 11.602 5.202 11.602 11.6 0 6.4-5.204 11.598-11.602 11.598zm6.36-8.686c-.348-.174-2.062-1.018-2.382-1.134-.32-.116-.554-.174-.786.174-.232.348-.9 1.134-1.104 1.368-.204.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.936-2.41-.204-.348-.022-.536.152-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.788-1.898-1.08-2.598-.284-.682-.572-.59-.786-.6-.204-.01-.436-.014-.668-.014s-.61.086-.93.436c-.32.348-1.22 1.192-1.22 2.908s1.248 3.372 1.422 3.604c.174.232 2.456 3.75 5.95 5.258.832.358 1.482.572 1.988.732.836.266 1.596.228 2.198.138.67-.1 2.062-.842 2.352-1.656.29-.814.29-1.512.204-1.656-.088-.146-.32-.232-.668-.406z" />
    </svg>
  )
}

export function ContactFab() {
  const { isKannada } = useTranslation()

  return (
    <a
      href={whatsappUrl(FAB_CONTACT.whatsapp, DEMO_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${FAB_CONTACT.name}`}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 focus:outline-hidden"
    >
      <span className="hidden sm:flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-700 text-slate-800 dark:text-slate-100 px-3.5 py-1.5 rounded-full text-[13px] font-bold shadow-md">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>{isKannada ? `${FAB_CONTACT.name.split(' ')[0]} ಅವರೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ` : `Chat with ${FAB_CONTACT.name.split(' ')[0]}`}</span>
      </span>
      <span className="relative flex items-center justify-center">
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <span className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(37,211,102,0.45)] hover:scale-105 hover:bg-[#1ebe5b] transition-all duration-200">
          <WhatsAppIcon />
        </span>
      </span>
    </a>
  )
}
