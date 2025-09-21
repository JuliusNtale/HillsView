import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Testimonials } from '@/components/testimonials'
import { Credentials } from '@/components/credentials'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Credentials />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}
