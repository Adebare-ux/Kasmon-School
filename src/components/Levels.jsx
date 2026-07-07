import Icon from './Icon.jsx'
import BlockMotif from './BlockMotif.jsx'
import { levels } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

function LevelCard({ level }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal bg-white rounded-[18px] p-7 border border-navy/10 transition
                 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(18,42,92,0.12)]"
    >
      <BlockMotif count={level.blocks} width={100} height={40} />
      <h3 className="text-[1.25rem] mt-3.5 mb-2">{level.name}</h3>
      <p className="text-[0.92rem] text-gray-600 mb-4">{level.body}</p>
      <a href="#admissions" className="inline-flex items-center gap-1.5 font-bold text-[0.86rem] text-navy">
        Learn more
        <Icon name="arrow" className="w-3.5 h-3.5" />
      </a>
    </div>
  )
}

export default function Levels() {
  const headRef = useReveal()
  return (
    <section id="levels" className="py-[76px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div ref={headRef} className="reveal max-w-[640px] mb-11">
          <span className="uppercase tracking-[0.14em] text-[0.72rem] font-bold text-gold">Our Programmes</span>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.3rem)] mt-2.5">One School, Three Stages of Growth</h2>
          <p className="text-gray-600 mt-3 text-[1.02rem]">
            Every level builds on the last — same values, same motto, age-appropriate learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {levels.map((l) => (
            <LevelCard key={l.name} level={l} />
          ))}
        </div>
      </div>
    </section>
  )
}
