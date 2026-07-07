import { useState } from 'react'
import { navSections } from '../data/content.js'

function AccordionItem({ section, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-onnavy/15">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full bg-transparent text-onnavy text-left py-4 font-display font-semibold text-[1.05rem]
                   flex justify-between items-center"
      >
        {section.title}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        {section.links.map(([href, label]) => (
          <a
            key={label}
            href={href}
            onClick={onNavigate}
            className="block py-2.5 pl-2 text-[0.92rem] text-onnavy/85"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function MobileNav({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-[200] bg-navy-dark text-onnavy p-5 overflow-y-auto transition-transform duration-300
                  ${open ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex justify-between items-center mb-6">
        <span className="font-display font-bold text-lg text-onnavy">KMS School</span>
        <button aria-label="Close menu" onClick={onClose} className="text-onnavy">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
      </div>

      {navSections.map((section) => (
        <AccordionItem key={section.title} section={section} onNavigate={onClose} />
      ))}

      <a
        href="#admissions"
        onClick={onClose}
        className="mt-5 w-full inline-flex items-center justify-center rounded-full font-bold py-3.5 min-h-[48px] bg-gold text-navy-dark"
      >
        Enroll Now
      </a>
    </div>
  )
}
