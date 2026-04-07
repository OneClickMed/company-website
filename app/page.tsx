import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Backers from '@/components/Backers'
import Products from '@/components/Products'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import HowToStart from '@/components/HowToStart'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Resources from '@/components/Resources'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Backers />
      <Products />

      <About />
      <Mission />

      <Services />
      <HowToStart />
      <FAQ />
      <CTA />
      <Resources />
      <Footer />
    </main>
  )
}
