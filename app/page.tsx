import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientCarousel from './components/ClientCarousel'
import SuccessMetricsSection from './components/SuccessMetricsSection'
import TestimonialProjectShowcase from './components/TestimonialProjectShowcase'
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientCarousel />
      <SuccessMetricsSection />
      <TestimonialProjectShowcase />
    </main>
  )
}