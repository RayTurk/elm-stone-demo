import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import Estimator from '@/components/Estimator'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Estimator />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
    </>
  )
}
