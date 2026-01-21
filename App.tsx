import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Products from './Products';
import Founder from './Founder';
import Vision from './Vision';
import Footer from './Footer';

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
