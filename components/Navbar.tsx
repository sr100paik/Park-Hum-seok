
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: '홈', path: '/' },
    { 
      name: '전문 분야', 
      path: '#',
      subLinks: [
        { name: '전략 및 Deal 자문', path: '/services/deal-strategy' },
        { name: '경영 컨설팅 및 구조 개편', path: '/services/performance-restructuring' },
        { name: '회계 감사 및 내부 통제', path: '/services/audit-internal-control' }
      ]
    },
    { name: '전문가 소개', path: '/about/career' },
    { name: '상담 안내', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex flex-col gap-1 group">
            <span className={`text-2xl font-bold font-serif-kr transition-colors ${scrolled ? 'text-[#1A365D]' : 'text-white md:text-[#1A365D]'}`}>박흠석</span>
            <span className={`text-[9px] uppercase tracking-[0.15em] font-medium transition-colors ${scrolled ? 'text-[#C5A059]' : 'text-white/80 md:text-[#C5A059]'}`}>Financial & Accounting Solution Partner</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <>
                    <button className={`flex items-center space-x-1 font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#1A365D]' : 'text-gray-800 hover:text-[#1A365D]'}`}>
                      <span>{link.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white border border-gray-100 shadow-xl rounded-lg py-2">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F7FAFC] hover:text-[#1A365D]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#1A365D]' : 'text-gray-800 hover:text-[#1A365D]'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="bg-[#1A365D] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#2a4a7d] transition-all hover:shadow-lg active:scale-95"
            >
              상담 신청하기
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-[#1A365D]' : 'text-white md:text-[#1A365D]'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white shadow-2xl z-40 animate-in slide-in-from-top duration-300 overflow-y-auto">
          <div className="px-4 pt-24 pb-10 space-y-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <div className="space-y-3">
                    <div className="font-bold text-[#1A365D] border-b border-gray-100 pb-2 mb-2 text-xl">{link.name}</div>
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block py-2 text-gray-600 pl-4 border-l border-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="block py-2 text-xl font-bold text-gray-800"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="block w-full bg-[#1A365D] text-white text-center py-4 rounded-md font-bold mt-10"
            >
              상담 신청하기
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
