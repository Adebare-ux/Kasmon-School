import { stats } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

function StatCard({ num, label }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal bg-white border border-navy/10 rounded-2xl px-5 py-6 text-center">
      <div className="font-display font-bold text-[2.1rem] text-navy">{num}</div>
      <div className="text-[0.85rem] text-gray-600 mt-1.5 font-semibold">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-14 bg-bg">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4.5 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
