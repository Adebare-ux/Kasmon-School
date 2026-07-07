export const SCHOOL = {
  name: 'Kasmon Montessori School',
  shortName: 'KMS School',
  motto: 'Babies Are Builders',
  tagline: 'Building Bright Minds, Shaping Better Tomorrow',
  quote: 'Every Child is Unique, Every Child Can Learn.',
  phone: '0808 124 6466',
  whatsappNumber: '2348081246466',
  address: 'Iseyin Adie Omu Alamole, Iseyin, Oyo State, Nigeria',
  facebook: 'KMS School Iseyin',
}

export const waLink = (message) =>
  `https://wa.me/${SCHOOL.whatsappNumber}?text=${encodeURIComponent(message)}`

export const navSections = [
  {
    title: 'About Us',
    links: [
      ['#montessori', 'Our Mission & Vision'],
      ['#welcome', "Head Teacher's Welcome"],
      ['#about', 'Our History'],
      ['#gallery', 'Campus Tour'],
    ],
  },
  {
    title: 'Academics',
    links: [
      ['#levels', 'Nursery Programme'],
      ['#levels', 'Primary Programme'],
      ['#levels', 'Secondary Programme'],
      ['#montessori', 'The Montessori Approach'],
    ],
  },
  {
    title: 'Admissions',
    links: [
      ['#admissions', 'How to Enroll'],
      ['#admissions', 'Fees & Payment Plans'],
      ['#contact', 'Schedule a Tour'],
    ],
  },
  {
    title: 'Campus Life',
    links: [
      ['#offers', 'Why Parents Choose KMS'],
      ['#news', 'News & Events'],
      ['#gallery', 'Photo Gallery'],
    ],
  },
  {
    title: 'Contact',
    links: [['#contact', 'Location & Phone']],
  },
]

export const stats = [
  { num: '3-in-1', label: 'Nursery · Primary · Secondary' },
  { num: 'Montessori', label: 'Child-led learning approach' },
  { num: 'Small', label: 'Class sizes, individual attention' },
  { num: 'Safe ✓', label: 'Conducive learning environment' },
]

export const montessoriPoints = [
  {
    title: 'Child-Led Learning',
    body: 'Children choose activities that match their interest and readiness, building genuine curiosity.',
    icon: 'book',
  },
  {
    title: 'Hands-On Materials',
    body: 'Purpose-built learning tools let children work concepts out physically before doing them abstractly.',
    icon: 'clock',
  },
  {
    title: 'Mixed-Age Classrooms',
    body: 'Older children reinforce their knowledge by mentoring younger ones — everyone teaches, everyone learns.',
    icon: 'people',
  },
]

export const newsItems = [
  {
    tag: 'Announcement',
    title: 'New Term Resumption Date Confirmed',
    body: 'Parents are reminded of the upcoming resumption date and required materials for the new term.',
  },
  {
    tag: 'Admissions',
    title: 'Limited Nursery Spaces Remaining',
    body: 'Enrollment for the new session is open across all levels — early registration is encouraged.',
  },
]

export const events = [
  { d: '14', m: 'Jul', title: 'Open Day for New Parents', body: 'Tour the campus & meet teachers' },
  { d: '02', m: 'Sep', title: 'New Session Resumption', body: 'All levels — Nursery to Secondary' },
  { d: '20', m: 'Sep', title: 'Cultural & Sports Day', body: 'Whole-school celebration' },
]

export const levels = [
  {
    name: 'Nursery',
    body: 'Early-years Montessori care in a warm, secure setting that nurtures curiosity from the very first day.',
    blocks: 1,
  },
  {
    name: 'Primary',
    body: 'Building strong literacy, numeracy and moral foundations through hands-on, child-led activities.',
    blocks: 2,
  },
  {
    name: 'Secondary',
    body: 'Preparing confident, disciplined young leaders for examinations and life beyond the classroom.',
    blocks: 3,
  },
]

export const offers = [
  { title: 'Quality Education', icon: 'grad' },
  { title: 'Montessori Approach', icon: 'people' },
  { title: 'Moral & Spiritual Values', icon: 'heart' },
  { title: 'Modern Learning Facilities', icon: 'screen' },
  { title: 'Safe & Conducive Environment', icon: 'shield' },
]
