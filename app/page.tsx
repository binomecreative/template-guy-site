import Nav from '@/components/Nav'
import BrandHero from '@/components/BrandHero'
import ProductsGrid from '@/components/ProductsGrid'
import AboutStrip from '@/components/AboutStrip'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <BrandHero />
        <ProductsGrid />
        <AboutStrip />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
