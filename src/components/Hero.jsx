import { SCHOOL } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

export default function Hero() {
  const copyRef = useReveal()
  const photoRef = useReveal()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-dark text-onnavy pt-16 pb-24">
      <div className="max-w-[1180px] mx-auto px-6 grid gap-10 items-center md:grid-cols-[1.05fr_0.95fr]">
        <div ref={copyRef} className="reveal">
          <span className="uppercase tracking-[0.14em] text-[0.72rem] font-bold text-gold-warm">
            Kasmon Montessori School · Iseyin
          </span>
          <h1 className="text-onnavy mt-3.5 mb-4 leading-tight text-[clamp(2.1rem,5.5vw,3.4rem)]">
            {SCHOOL.tagline}
          </h1>
          <p className="text-onnavy/80 max-w-[46ch] mb-7 text-[1.08rem]">
            A Montessori education across Nursery, Primary and Secondary — grounded in quality
            teaching, moral &amp; spiritual values, and a safe, conducive environment for every
            child in Iseyin.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full font-bold px-7 py-3.5
                         min-h-[48px] bg-gold text-navy-dark hover:bg-gold-warm hover:-translate-y-0.5
                         hover:shadow-[0_8px_20px_rgba(212,162,76,0.35)] transition"
            >
              Enroll Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full font-bold px-7 py-3.5
                         min-h-[48px] border-2 border-onnavy/55 text-onnavy hover:bg-onnavy/10
                         hover:border-onnavy transition"
            >
              Schedule a Visit
            </a>
          </div>
        </div>

        <div ref={photoRef} className="reveal relative rounded-[20px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80"
            alt="KMS students in navy blue school uniform standing together on campus"
            className="w-full h-full object-cover aspect-[4/5]"
            loading="eager"
          />
          <div className="absolute -bottom-5 -left-5 bg-gold text-navy-dark px-5 py-4 rounded-2xl max-w-[220px]
                          font-display font-semibold text-[0.95rem] shadow-[0_16px_30px_rgba(0,0,0,0.25)]">
            "{SCHOOL.quote}"
          </div>
        </div>
      </div>
    </section>
  )
}
