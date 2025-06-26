import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  )
}
