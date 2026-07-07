import { newsItems, events } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

export default function NewsEvents() {
  const headRef = useReveal()
  const newsRef = useReveal()
  const eventsRef = useReveal()

  return (
    <section id="news" className="py-[76px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div ref={headRef} className="reveal max-w-[640px] mb-11">
          <span className="uppercase tracking-[0.14em] text-[0.72rem] font-bold text-gold">Stay Updated</span>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.3rem)] mt-2.5">Latest News &amp; Upcoming Events</h2>
        </div>

        <div className="grid gap-7 md:grid-cols-[1.3fr_1fr]">
          <div ref={newsRef} className="reveal">
            {newsItems.map((n) => (
              <div key={n.title} className="bg-white rounded-2xl p-6 border border-navy/10 mb-4">
                <span className="text-[0.7rem] font-bold uppercase tracking-wider text-green">{n.tag}</span>
                <h4 className="font-display text-[1.1rem] mt-2 mb-1.5 text-navy-dark">{n.title}</h4>
                <p className="text-[0.9rem] text-gray-600 m-0">{n.body}</p>
              </div>
            ))}
          </div>

          <div ref={eventsRef} className="reveal bg-navy-dark rounded-2xl p-6 text-onnavy">
            {events.map((e, i) => (
              <div
                key={e.title}
                className={`flex gap-3.5 py-3.5 ${i < events.length - 1 ? 'border-b border-onnavy/10' : ''}`}
              >
                <div className="bg-gold text-navy-dark rounded-[10px] px-2.5 py-2 text-center min-w-[56px] font-bold">
                  <div className="text-[1.2rem] font-display leading-none">{e.d}</div>
                  <div className="text-[0.65rem] uppercase tracking-wide">{e.m}</div>
                </div>
                <div>
                  <h5 className="m-0 mb-1 text-[0.95rem] font-bold">{e.title}</h5>
                  <p className="m-0 text-[0.82rem] text-onnavy/70">{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
