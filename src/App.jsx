import React from "react";
import { Routes, Route } from "react-router-dom";
import CarrouselSection from "./components/CarrouselSection";
import ProductsSection from "./components/ProductsSection";
import ContactForm from "./components/FormularioContacto"; 
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";

function App() {
  return (
    
    <Routes>
      
      {/* Ruta principal (página de inicio) */}
      <Route
        path="/"
        element={
          <>
            <Navbar/>
            <CarrouselSection />
            <ProductsSection />
            <Footer/>
          </>
        }
      />

      {/* Ruta del formulario de contacto */}
      <Route path="/contacto" element={<ContactForm />} />
    </Routes>
  );
}

export default App;