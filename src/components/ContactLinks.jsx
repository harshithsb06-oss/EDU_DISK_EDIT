import { Icon } from './Icon'
import { EDUDISK_CONTACTS, whatsappUrl } from '../constants/contacts'

export function ContactLinks({ className = '', showPhone = true, compact = false }) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {EDUDISK_CONTACTS.map((contact) => (
        <li key={contact.whatsapp}>
          <a
            href={whatsappUrl(contact.whatsapp, 'Hi EduDisk, I would like to enquire about the ERP.')}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 transition-all ${
              compact
                ? 'text-slate-600 dark:text-slate-300 hover:text-[#2a2fff] dark:hover:text-[#60a5fa]'
                : 'bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-md'
            }`}
          >
            <span className="w-10 h-10 rounded-xl bg-pastel-mint dark:bg-emerald-900/30 text-mint-text dark:text-emerald-400 border border-mint-text/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Icon name="chat" filled className="text-[20px]" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-bold text-slate-900 dark:text-white text-[14px] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {contact.name}
              </span>
              {showPhone ? (
                <span className="block text-[13px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">+91 {contact.phone}</span>
              ) : null}
            </span>
            {!compact && (
              <span className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 bg-pastel-mint dark:bg-emerald-900/30 px-2.5 py-1 rounded-full border border-mint-text/20 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                WhatsApp
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}
