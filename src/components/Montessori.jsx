import Icon from './Icon.jsx'
import BlockMotif from './BlockMotif.jsx'
import { montessoriPoints, SCHOOL } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

export default function Montessori() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section id="montessori" className="bg-surface py-[76px]">
      <div className="max-w-[1180px] mx-auto px-6 grid gap-8 md:grid-cols-2 md:items-center">
        <div ref={leftRef} className="reveal">
          <span className="uppercase tracking-[0.14em] text-[0.72rem] font-bold text-gold">Our Approach</span>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.3rem)] mt-2.5">
            What &quot;Montessori&quot; Actually Means at KMS
          </h2>
          <p className="text-gray-600 mt-2.5 text-[1.02rem]">
            Montessori education lets children learn at their own pace through hands-on materials
            and guided discovery, rather than one-size-fits-all instruction. Here's what that
            looks like day to day.
          </p>

          <div className="grid gap-4.5 mt-4">
            {montessoriPoints.map((p) => (
              <div key={p.title} className="flex gap-3.5">
                <div className="w-8.5 h-8.5 w-[34px] h-[34px] rounded-[9px] bg-navy flex items-center justify-center flex-shrink-0">
                  <Icon name={p.icon} className="w-4.5 h-4.5 w-[18px] h-[18px] text-onnavy" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[1rem] mb-1 text-ink">{p.title}</h4>
                  <p className="text-[0.92rem] text-gray-600 m-0">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={rightRef} className="reveal bg-navy rounded-2xl px-7 py-10 text-onnavy text-center">
          <div className="mx-auto mb-4.5" style={{ width: 220 }}>
            <BlockMotif count={4} />
          </div>
          <p className="font-display text-[1.2rem]">&quot;{SCHOOL.motto}.&quot;</p>
          <p className="text-onnavy/75 text-[0.9rem] mt-2">
            Every stage of growth adds another block — that's the KMS motto in practice.
          </p>
        </div>
      </div>
    </section>
  )
}
