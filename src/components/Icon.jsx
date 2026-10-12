export function Icon({ name, filled, className = '', style }) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'material-symbols-filled' : ''} ${className}`}
      style={style}
    >
      {name}
    </span>
  )
}
