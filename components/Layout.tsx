
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AIConsultant from './AIConsultant';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#C5A059]/30 selection:text-[#1A365D]">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <AIConsultant />
    </div>
  );
};

export default Layout;
