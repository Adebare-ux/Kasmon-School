import Icon from './Icon.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Welcome() {
  const ref = useReveal()

  return (
    <section id="welcome" className="bg-surface py-[76px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div ref={ref} className="reveal grid gap-7 items-center md:grid-cols-[180px_1fr]">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-gold mx-auto">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80"
              alt="Head teacher portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="uppercase tracking-[0.14em] text-[0.72rem] font-bold text-gold">
              A Word From Our Head Teacher
            </span>
            <p className="font-display text-[1.25rem] text-navy-dark leading-snug mt-2">
              &quot;At KMS, we believe every child who walks through our gates is already a
              builder — of ideas, of character, of their own future. Our job is simply to give
              them the right blocks to work with.&quot;
            </p>
            <a href="#about" className="mt-3.5 inline-flex items-center gap-1.5 font-bold text-[0.86rem] text-navy">
              Read Full Welcome
              <Icon name="arrow" className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
