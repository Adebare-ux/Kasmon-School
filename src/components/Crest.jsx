export default function Crest({ className = 'w-11 h-11' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#122A5C" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="24" stroke="#D4A24C" strokeWidth="1.5" />
      <path d="M20 26 L32 20 L44 26 V38 L32 44 L20 38 Z" fill="#122A5C" opacity="0.9" />
      <rect x="27" y="27" width="10" height="7" fill="#F5F3EE" />
    </svg>
  )
}
