/**
 * EduDisk Product Data & 20 Institutions Regional Dataset
 * Verified facts from live EduDisk deployments across Karnataka.
 */

export const PRODUCT_STATS = [
  { value: 20, suffix: '+', label: 'Institutions', knLabel: 'ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳು' },
  { value: 16, suffix: '', label: 'ERP Portals', knLabel: 'ERP ಪೋರ್ಟಲ್‌ಗಳು' },
  { value: 8, suffix: '', label: 'Websites', knLabel: 'ಪಬ್ಲಿಕ್ ವೆಬ್‌ಸೈಟ್‌ಗಳು' },
  { value: 4, suffix: '', label: 'Campus Types', knLabel: 'ಕ್ಯಾಂಪಸ್ ವಿಧಗಳು' },
]

/**
 * Full verified dataset of 20 institutions across 6 locations.
 * Note: Under user privacy requirements, user-facing public maps show ONLY
 * aggregate counts and location names, never exposing individual institution records.
 */
export const INSTITUTIONS_DATA = [
  // Davanagere (6)
  { id: 1, name: 'G. V. PU College', locationId: 'davanagere', location: 'Davanagere', type: 'PU colleges' },
  { id: 2, name: 'Mayura Global School', locationId: 'davanagere', location: 'Davanagere', type: 'Schools' },
  { id: 3, name: 'Rajkumar PU College', locationId: 'davanagere', location: 'Davanagere', type: 'PU colleges' },
  { id: 4, name: 'Braahmi Academy', locationId: 'davanagere', location: 'Davanagere', type: 'PU colleges' },
  { id: 5, name: 'Jnyana Vikasa PU College', locationId: 'davanagere', location: 'Davanagere', type: 'PU colleges' },
  { id: 6, name: 'C. N. R. Rao PU College', locationId: 'davanagere', location: 'Davanagere', type: 'PU colleges' },

  // Hirekerur (7)
  { id: 7, name: 'SNK English Medium School', locationId: 'hirekerur', location: 'Hirekerur', type: 'Schools' },
  { id: 8, name: 'DRT English Medium School', locationId: 'hirekerur', location: 'Hirekerur', type: 'Schools' },
  { id: 9, name: 'Taralabalu Jagadguru College of Education (B.Ed.)', locationId: 'hirekerur', location: 'Hirekerur', type: 'Degree & professional' },
  { id: 10, name: 'K. H. Patil PU College', locationId: 'hirekerur', location: 'Hirekerur', type: 'PU colleges' },
  { id: 11, name: 'CES BCA College', locationId: 'hirekerur', location: 'Hirekerur', type: 'Degree & professional' },
  { id: 12, name: 'B. R. Tambakad First Grade College', locationId: 'hirekerur', location: 'Hirekerur', type: 'Degree & professional' },
  { id: 13, name: 'Surya Central School', locationId: 'hirekerur', location: 'Hirekerur', type: 'Schools' },

  // Haveri (2)
  { id: 14, name: 'MRM School', locationId: 'haveri', location: 'Haveri', type: 'Schools' },
  { id: 15, name: 'MRM PU College', locationId: 'haveri', location: 'Haveri', type: 'PU colleges' },

  // Harihar (2)
  { id: 16, name: 'Giriamma First Grade College', locationId: 'harihar', location: 'Harihar', type: 'Degree & professional' },
  { id: 17, name: 'Giriamma Women\'s PU College', locationId: 'harihar', location: 'Harihar', type: 'PU colleges' },

  // Motebennur (1)
  { id: 18, name: 'Bellary Rudrappa School', locationId: 'motebennur', location: 'Motebennur', type: 'Schools' },

  // Hirethogaleri (2)
  { id: 19, name: 'Genius Techno Residential School', locationId: 'hirethogaleri', location: 'Hirethogaleri', type: 'Schools' },
  { id: 20, name: 'Genius Techno PU College', locationId: 'hirethogaleri', location: 'Hirethogaleri', type: 'PU colleges' },
]

/**
 * 6 Regional Hubs for the Interactive Map.
 * Strictly presents aggregate counts, general campus types, and geographic data.
 */
export const REGIONAL_LOCATIONS = [
  {
    id: 'davanagere',
    name: 'Davanagere',
    knName: 'ದಾವಣಗೆರೆ',
    district: 'Davanagere District',
    knDistrict: 'ದಾವಣಗೆರೆ ಜಿಲ್ಲೆ',
    count: 6,
    campusTypes: 'Schools · PU Colleges · Pre-University Academies',
    knCampusTypes: 'ಶಾಲೆಗಳು · ಪಿಯು ಕಾಲೇಜುಗಳು · ಪ್ರವೇಶ ತರಬೇತಿ ಕೇಂದ್ರಗಳು',
    description: 'Major regional education hub housing ICSE schools, renowned PU science & commerce colleges, and NEET/JEE academies.',
    knDescription: 'ಐಸಿಎಸ್‌ಇ ಶಾಲೆಗಳು, ಪ್ರತಿಷ್ಠಿತ ಪಿಯು ಕಾಲೇಜುಗಳು ಮತ್ತು ನೀಟ್/ಜೆಇಇ ತರಬೇತಿ ಅಕಾಡೆಮಿಗಳಿರುವ ಪ್ರಮುಖ ಶೈಕ್ಷಣಿಕ ಕೇಂದ್ರ.',
    mapX: 620,
    mapY: 340,
    highwayTag: 'NH-48 Main Hub',
    zoneColor: '#EAF4FF',
    pinColor: '#2A2FFF',
  },
  {
    id: 'hirekerur',
    name: 'Hirekerur',
    knName: 'ಹಿರೇಕೆರೂರು',
    district: 'Haveri District',
    knDistrict: 'ಹಾವೇರಿ ಜಿಲ್ಲೆ',
    count: 7,
    campusTypes: 'Primary & High Schools · PU Colleges · B.Ed & BCA Degrees',
    knCampusTypes: 'ಪ್ರಾಥಮಿಕ ಮತ್ತು ಪ್ರೌಢಶಾಲೆಗಳು · ಪಿಯು ಕಾಲೇಜುಗಳು · ಬಿ.ಎಡ್ ಮತ್ತು ಬಿಸಿಎ ಕಾಲೇಜುಗಳು',
    description: 'Multi-tiered academic cluster spanning English medium schools, PU institutions, Taralabalu B.Ed teacher training, and BCA college.',
    knDescription: 'ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ ಶಾಲೆಗಳು, ಪಿಯು ಸಂಸ್ಥೆಗಳು, ತರಳಬಾಳು ಬಿ.ಎಡ್ ಶಿಕ್ಷಕರ ತರಬೇತಿ ಮತ್ತು ಬಿಸಿಎ ಕಾಲೇಜುಗಳನ್ನೊಳಗೊಂಡ ಬಹುಹಂತದ ಶೈಕ್ಷಣಿಕ ತಾಣ.',
    mapX: 180,
    mapY: 390,
    highwayTag: 'SH-62 Junction',
    zoneColor: '#E8F8F1',
    pinColor: '#059669',
  },
  {
    id: 'haveri',
    name: 'Haveri',
    knName: 'ಹಾವೇರಿ',
    district: 'Haveri District',
    knDistrict: 'ಹಾವೇರಿ ಜಿಲ್ಲೆ',
    count: 2,
    campusTypes: 'Schools · PU Colleges',
    knCampusTypes: 'ಶಾಲೆಗಳು · ಪಿಯು ಕಾಲೇಜುಗಳು',
    description: 'Northern educational gateway with MRM Trust academic institutes and comprehensive schooling.',
    knDescription: 'ಎಂ.ಆರ್.ಎಂ ಟ್ರಸ್ಟ್ ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಸಮಗ್ರ ಶಿಕ್ಷಣ ಕೇಂದ್ರಗಳನ್ನು ಒಳಗೊಂಡ ಉತ್ತರದ ಶೈಕ್ಷಣಿಕ ಹೆಬ್ಬಾಗಿಲು.',
    mapX: 190,
    mapY: 120,
    highwayTag: 'NH-48 Gateway',
    zoneColor: '#F0ECFF',
    pinColor: '#7C3AED',
  },
  {
    id: 'harihar',
    name: 'Harihar',
    knName: 'ಹರಿಹರ',
    district: 'Davanagere District',
    knDistrict: 'ದಾವಣಗೆರೆ ಜಿಲ್ಲೆ',
    count: 2,
    campusTypes: 'Women\'s PU Colleges · First Grade Degree Colleges',
    knCampusTypes: 'ಮಹಿಳಾ ಪಿಯು ಕಾಲೇಜುಗಳು · ಪ್ರಥಮ ದರ್ಜೆ ಪದವಿ ಕಾಲೇಜುಗಳು',
    description: 'Historic Tungabhadra riverfront town hosting prominent Giriamma institutions for women\'s higher education.',
    knDescription: 'ತುಂಗಭದ್ರಾ ತೀರದ ಗಿರಿಯಮ್ಮ ಮಹಿಳಾ ಉನ್ನತ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳನ್ನು ಹೊಂದಿರುವ ಪ್ರಸಿದ್ಧ ಶೈಕ್ಷಣಿಕ ನಗರ.',
    mapX: 430,
    mapY: 220,
    highwayTag: 'NH-48 Bridge',
    zoneColor: '#FFF0E6',
    pinColor: '#EA580C',
  },
  {
    id: 'motebennur',
    name: 'Motebennur',
    knName: 'ಮೋಟೇಬೆನ್ನೂರು',
    district: 'Haveri District',
    knDistrict: 'ಹಾವೇರಿ ಜಿಲ್ಲೆ',
    count: 1,
    campusTypes: 'CBSE Residential School',
    knCampusTypes: 'ಸಿಬಿಎಸ್‌ಇ ವಸತಿ ಶಾಲೆ',
    description: 'Renowned residential CBSE campus providing quality holistic rural and semi-urban foundational education.',
    knDescription: 'ಗುಣಮಟ್ಟದ ಸಮಗ್ರ ಶಿಕ್ಷಣ ಒದಗಿಸುವ ಹೆಸರಾಂತ ಸಿಬಿಎಸ್‌ಇ ವಸತಿ ಶಾಲಾ ಕ್ಯಾಂಪಸ್.',
    mapX: 310,
    mapY: 170,
    highwayTag: 'NH-48 Corridor',
    zoneColor: '#FCE7F3',
    pinColor: '#DB2777',
  },
  {
    id: 'hirethogaleri',
    name: 'Hirethogaleri',
    knName: 'ಹಿರೇತೋಗಲೇರಿ',
    district: 'Haveri District',
    knDistrict: 'ಹಾವೇರಿ ಜಿಲ್ಲೆ',
    count: 2,
    campusTypes: 'Residential Techno Schools · PU Colleges',
    knCampusTypes: 'ಟೆಕ್ನೋ ವಸತಿ ಶಾಲೆಗಳು · ಪಿಯು ಕಾಲೇಜುಗಳು',
    description: 'Specialized residential techno schooling and integrated PU science academy educating students from diverse regions.',
    knDescription: 'ವಿವಿಧ ಭಾಗಗಳಿಂದ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಆಕರ್ಷಿಸುವ ವಿಶೇಷ ಟೆಕ್ನೋ ವಸತಿ ಶಾಲೆ ಮತ್ತು ಸಮಗ್ರ ಪಿಯು ವಿಜ್ಞಾನ ಅಕಾಡೆಮಿ.',
    mapX: 350,
    mapY: 410,
    highwayTag: 'South Haveri Link',
    zoneColor: '#FEF3C7',
    pinColor: '#D97706',
  },
]

export const TOTAL_INSTITUTIONS_COUNT = REGIONAL_LOCATIONS.reduce((sum, l) => sum + l.count, 0)
