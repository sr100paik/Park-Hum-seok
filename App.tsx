
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DealStrategy from './pages/DealStrategy';
import Restructuring from './pages/Restructuring';
import AuditCompliance from './pages/AuditCompliance';
import AboutCareer from './pages/AboutCareer';
import Contact from './pages/Contact';

// Enhanced ScrollToTop component to handle window scrolling more robustly
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' to avoid smooth scroll lag when navigating
    });
    
    // Fallback for some browsers or cases where DOM hasn't fully updated
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/deal-strategy" element={<DealStrategy />} />
          <Route path="/services/performance-restructuring" element={<Restructuring />} />
          <Route path="/services/audit-internal-control" element={<AuditCompliance />} />
          <Route path="/about/career" element={<AboutCareer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
