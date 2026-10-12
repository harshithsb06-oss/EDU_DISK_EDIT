/** EduDisk registered office (Davanagere, Karnataka). */
export const EDUDISK_OFFICE = {
  lines: [
    '990/1, Janani 12th Cross, Comrade Pampapathi Nagara',
    'Nalanda School Road, Behind KSRTC',
    'Davanagere, Karnataka, India — 577004',
  ],
  mapsQuery:
    '990/1 Janani 12th Cross Comrade Pampapathi Nagara Nalanda School Road Behind KSRTC Davanagere Karnataka 577004',
}

/** EduDisk sales & support contacts (India mobile → WhatsApp wa.me uses 91 prefix). */
export const EDUDISK_CONTACTS = [
  {
    name: 'Ritvik G D',
    phone: '7899707070',
    whatsapp: '917899707070',
  },
  {
    name: 'Prajwal S D',
    phone: '7411839373',
    whatsapp: '917411839373',
  },
]

export function whatsappUrl(whatsappId, message) {
  const base = `https://wa.me/${whatsappId}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
