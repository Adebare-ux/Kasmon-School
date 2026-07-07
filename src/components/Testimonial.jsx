import useReveal from '../hooks/useReveal.js'

export default function Testimonial() {
  const ref = useReveal()
  return (
    <section className="py-[76px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div
          ref={ref}
          className="reveal bg-navy text-onnavy rounded-[22px] px-8 py-11 text-center max-w-[760px] mx-auto"
        >
          <p className="font-display text-[1.3rem] leading-relaxed mb-4.5">
            &quot;KMS gave my daughter more than lessons — she learned discipline, kindness, and
            how to think for herself. The Montessori approach really works.&quot;
          </p>
          <p className="font-bold text-gold-warm text-[0.9rem]">— A KMS Parent, Iseyin</p>
        </div>
      </div>
    </section>
  )
}
