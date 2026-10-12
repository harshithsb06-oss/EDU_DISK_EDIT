/** Full EduDisk wordmark (icon + text). Use on light chips or as-is (PNG has a white field). */
export function BrandLogo({ className = '', heightClass = 'h-9' }) {
  return (
    <img
      src="/edudisk-logo.png?v=5"
      alt="EduDisk"
      className={`${heightClass} w-auto max-w-full object-contain object-left ${className}`}
    />
  )
}
