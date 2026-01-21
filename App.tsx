import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Founder from './pages/Founder';
import Vision from './pages/Vision';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname, hash, state } = useLocation();
  
  useEffect(() => {
    // If there is no hash and no specific scrollToContact state, scroll to top
    if (!hash && !(state && (state as any).scrollToContact)) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, state]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/vision" element={<Vision />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;