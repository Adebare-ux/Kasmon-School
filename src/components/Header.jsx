import Crest from './Crest.jsx'
import { navSections } from '../data/content.js'

export default function Header({ onOpenMobileNav }) {
  return (
    <header className="sticky top-0 z-[100] bg-bg/90 backdrop-blur-md border-b border-navy/10">
      <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between py-3.5">
        <a href="#" className="flex items-center gap-2.5">
          <Crest />
          <span className="leading-tight">
            <span className="block font-display font-bold text-lg text-navy-dark">KMS School</span>
            <span className="block text-[0.68rem] tracking-wider uppercase text-gold font-bold">
              Babies Are Builders
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-7 items-center list-none m-0 p-0">
            {navSections.map((section) => (
              <li key={section.title} className="relative group">
                <a
                  href={section.links[0][0]}
                  className="font-semibold text-[0.92rem] py-2 flex items-center gap-1 hover:text-navy"
                >
                  {section.title}
                </a>
                <div
                  className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 bg-white rounded-2xl
                             shadow-[0_20px_45px_rgba(11,27,61,0.18)] p-4 min-w-[230px] border border-navy/5
                             opacity-0 invisible translate-y-2 transition-all duration-200
                             group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                >
                  {section.links.map(([href, label]) => (
                    <a
                      key={label}
                      href={href}
                      className="block px-2.5 py-2 rounded-lg text-[0.88rem] font-medium hover:bg-surface hover:text-navy"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#admissions"
          className="hidden lg:inline-flex items-center justify-center gap-2 rounded-full font-bold text-[0.95rem]
                     px-7 py-3.5 min-h-[48px] bg-gold text-navy-dark hover:bg-gold-warm
                     hover:shadow-[0_8px_20px_rgba(212,162,76,0.35)] hover:-translate-y-0.5 transition"
        >
          Enroll Now
        </a>

        <button
          aria-label="Open menu"
          onClick={onOpenMobileNav}
          className="lg:hidden p-2 text-navy-dark"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  )
}
