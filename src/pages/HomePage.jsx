import React from 'react'
import CarrouselSection from '../components/CarrouselSection'
import QuienesSomosSection from '../components/QuienesSomosSection'
import ProductsSection from '../components/ProductsSection'
import PreguntasFrecuentesSection from '../components/PreguntasFrecuentes'
import WhatsAppButton from '../components/WhatsAppButton'

function HomePage() {
  return (
    <>
    <CarrouselSection />
    <ProductsSection/>
    <QuienesSomosSection/>
    <PreguntasFrecuentesSection/> 
    <WhatsAppButton />
    </>
  )
}

export default HomePage