import { SCHOOL, waLink } from '../data/content.js'

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark text-onnavy/85 pt-14 pb-6 text-[0.9rem]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <h5 className="text-gold-warm font-sans font-bold text-[0.85rem] uppercase tracking-wider mb-3.5">
              {SCHOOL.name}
            </h5>
            <p className="max-w-[32ch] text-onnavy/70">{SCHOOL.address}</p>
            <p className="mt-2.5">
              <a href={`tel:${SCHOOL.phone.replace(/\s/g, '')}`} className="hover:text-gold-warm">
                {SCHOOL.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={waLink('Hello KMS, I have a question.')} target="_blank" rel="noopener noreferrer" className="hover:text-gold-warm">
                Chat on WhatsApp
              </a>
            </p>
            <p className="mt-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-warm">
                {SCHOOL.facebook} — Facebook
              </a>
            </p>
          </div>

          <div>
            <h5 className="text-onnavy font-sans font-bold text-[0.85rem] uppercase tracking-wider mb-3.5">
              Quick Links
            </h5>
            <ul className="list-none p-0 m-0 grid gap-2.5">
              <li><a href="#montessori" className="hover:text-gold-warm">Our Approach</a></li>
              <li><a href="#levels" className="hover:text-gold-warm">Programmes</a></li>
              <li><a href="#news" className="hover:text-gold-warm">News &amp; Events</a></li>
              <li><a href="#admissions" className="hover:text-gold-warm">Admissions</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-onnavy font-sans font-bold text-[0.85rem] uppercase tracking-wider mb-3.5">
              Levels
            </h5>
            <ul className="list-none p-0 m-0 grid gap-2.5">
              <li><a href="#levels" className="hover:text-gold-warm">Nursery</a></li>
              <li><a href="#levels" className="hover:text-gold-warm">Primary</a></li>
              <li><a href="#levels" className="hover:text-gold-warm">Secondary</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-onnavy font-sans font-bold text-[0.85rem] uppercase tracking-wider mb-3.5">
              Pillars
            </h5>
            <ul className="list-none p-0 m-0 grid gap-2.5">
              <li>Learn · Grow · Succeed</li>
              <li>Character · Excellence · Leadership</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-onnavy/10 mt-9 pt-5 flex flex-wrap gap-3 justify-between text-[0.8rem] text-onnavy/55">
          <span>© 2026 {SCHOOL.name}. All rights reserved.</span>
          <span>&quot;{SCHOOL.quote}&quot;</span>
        </div>
      </div>
    </footer>
  )
}
