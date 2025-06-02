import React from 'react'
import CarrouselSection from '../components/CarrouselSection'
import QuienesSomosSection from '../components/QuienesSomosSection'
import ProductsSection from '../components/ProductsSection'
import PreguntasFrecuentesSection from '../components/PreguntasFrecuentes'

function HomePage() {
  return (
    <>
    <CarrouselSection />
    <QuienesSomosSection/>
    <ProductsSection/>
    <PreguntasFrecuentesSection/> 
    </>
  )
}

export default HomePage