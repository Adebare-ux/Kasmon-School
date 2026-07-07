import { waLink } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

export default function CtaBand() {
  const ref = useReveal()
  return (
    <section id="admissions" className="py-[76px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div ref={ref} className="reveal bg-navy-dark text-onnavy rounded-3xl px-8 py-12 text-center">
          <p className="text-gold-warm font-bold tracking-wide">Limited Spaces Available</p>
          <h2 className="text-onnavy text-[clamp(1.5rem,3.5vw,2.1rem)] mb-1.5">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-onnavy/75 max-w-[48ch] mx-auto mt-2">
            Every Child is Unique, Every Child Can Learn — book a visit or start your application
            today.
          </p>
          <a
            href={waLink("Hello KMS, I'd like to enroll my child. Please share admission details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full font-bold px-7 py-3.5
                       min-h-[48px] bg-gold text-navy-dark hover:bg-gold-warm hover:-translate-y-0.5
                       hover:shadow-[0_8px_20px_rgba(212,162,76,0.35)] transition"
          >
            Enroll via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
