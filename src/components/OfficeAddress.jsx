import { Icon } from './Icon'
import { EDUDISK_OFFICE } from '../constants/contacts'
import { useTranslation } from '../context/LanguageContext'

export function OfficeAddress({ className = '', showMapsLink = true }) {
  const { isKannada } = useTranslation()
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EDUDISK_OFFICE.mapsQuery)}`

  return (
    <address className={`not-italic ${className}`}>
      <div className="flex gap-3.5 items-start">
        <span className="w-10 h-10 rounded-xl bg-pastel-blue dark:bg-[#2a2fff]/20 border border-[#2a2fff]/20 flex items-center justify-center shrink-0 text-[#2a2fff] dark:text-[#93c5fd]">
          <Icon name="location_on" filled className="text-[20px]" />
        </span>
        <div className="min-w-0">
          <span className="block text-slate-900 dark:text-white text-[14px] font-bold mb-1.5">
            {isKannada ? 'ನೋಂದಾಯಿತ ಪ್ರಧಾನ ಕಚೇರಿ' : 'Registered Office'}
          </span>
          {isKannada ? (
            <>
              <span className="block text-slate-600 dark:text-slate-300 text-[13px] md:text-[14px] leading-relaxed">
                ೯೯೦/೧, ಜನನಿ ೧೨ನೇ ಕ್ರಾಸ್, ಕಾಮ್ರೇಡ್ ಪಂಪಾಪತಿ ನಗರ,
              </span>
              <span className="block text-slate-600 dark:text-slate-300 text-[13px] md:text-[14px] leading-relaxed">
                ನಳಂದ ಶಾಲೆ ರಸ್ತೆ, ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಹಿಂಭಾಗ,
              </span>
              <span className="block text-slate-600 dark:text-slate-300 text-[13px] md:text-[14px] leading-relaxed">
                ದಾವಣಗೆರೆ, ಕರ್ನಾಟಕ ೫೭೭೦೦೪.
              </span>
            </>
          ) : (
            EDUDISK_OFFICE.lines.map((line) => (
              <span key={line} className="block text-slate-600 dark:text-slate-300 text-[13px] md:text-[14px] leading-relaxed">
                {line}
              </span>
            ))
          )}
          {showMapsLink ? (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2.5 text-[#2a2fff] dark:text-[#60a5fa] text-[13px] font-bold hover:underline"
            >
              <span>{isKannada ? 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನೋಡಿ' : 'Open in Google Maps'}</span>
              <Icon name="open_in_new" className="text-[14px]" />
            </a>
          ) : null}
        </div>
      </div>
    </address>
  )
}
