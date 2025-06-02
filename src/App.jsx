// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import PreguntasFrecuentesPage from './pages/PreguntasFrecuentesPage';
import ContactoPage from './pages/ContactoPage';
import PopUp from './components/PopUp';



function App() {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <PopUp />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/nosotros" element={<QuienesSomosPage />} />
          <Route path="/faq" element={<PreguntasFrecuentesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;