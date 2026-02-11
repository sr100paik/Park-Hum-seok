
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DealStrategy from './pages/DealStrategy';
import Restructuring from './pages/Restructuring';
import AuditCompliance from './pages/AuditCompliance';
import AboutCareer from './pages/AboutCareer';
import Contact from './pages/Contact';

// ScrollToTop component to handle window scrolling on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
