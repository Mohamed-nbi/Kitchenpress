import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CompressionSection from './components/CompressionSection'
import WhyKitchenPress from './components/WhyKitchenPress'
import CaissonsMontes from './components/CaissonsMontes'
import Plan3D from './components/Plan3D'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Sections chargées en différé (en dessous de la ligne de flottaison)
// afin de réduire le JavaScript initial et améliorer les performances.
const Gallery = lazy(() => import('./components/Gallery'))
const InteractiveKitchen = lazy(() => import('./components/InteractiveKitchen'))
const VirtualShowroom = lazy(() => import('./components/VirtualShowroom'))
const ShowroomSection = lazy(() => import('./components/ShowroomSection'))
const Process = lazy(() => import('./components/Process'))
const Advantages = lazy(() => import('./components/Advantages'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const ContactSection = lazy(() => import('./components/ContactSection'))

function SectionFallback() {
  return <div className="h-[400px] w-full" aria-hidden="true" />
}

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <CompressionSection />
        <WhyKitchenPress />
        <CaissonsMontes />
        <Plan3D />
        <Suspense fallback={<SectionFallback />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <InteractiveKitchen />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <VirtualShowroom />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ShowroomSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Advantages />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
