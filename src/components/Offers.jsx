import Icon from './Icon.jsx'
import { offers } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

function OfferCard({ title, icon }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal bg-white rounded-2xl px-5 py-6 text-center border border-navy/10">
      <div className="w-[46px] h-[46px] rounded-xl bg-surface flex items-center justify-center mx-auto mb-3">
        <Icon name={icon} className="w-[22px] h-[22px] text-navy" />
      </div>
      <h4 className="text-[0.95rem] font-bold m-0 text-navy-dark">{title}</h4>
    </div>
  )
}

export default function Offers() {
  const headRef = useReveal()
  return (
    <section id="offers" className="bg-surface py-[76px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div ref={headRef} className="reveal max-w-[640px] mb-11">
          <span className="uppercase tracking-[0.14em] text-[0.72rem] font-bold text-gold">We Offer</span>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.3rem)] mt-2.5">Why Parents Choose KMS</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {offers.map((o) => (
            <OfferCard key={o.title} {...o} />
          ))}
        </div>
      </div>
    </section>
  )
}
