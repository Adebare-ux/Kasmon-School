import { useState } from 'react'
import Header from './components/Header.jsx'
import MobileNav from './components/MobileNav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Montessori from './components/Montessori.jsx'
import NewsEvents from './components/NewsEvents.jsx'
import Welcome from './components/Welcome.jsx'
import Levels from './components/Levels.jsx'
import Offers from './components/Offers.jsx'
import Testimonial from './components/Testimonial.jsx'
import CtaBand from './components/CtaBand.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main>
        <Hero />
        <Stats />
        <Montessori />
        <NewsEvents />
        <Welcome />
        <Levels />
        <Offers />
        <Testimonial />
        <CtaBand />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
