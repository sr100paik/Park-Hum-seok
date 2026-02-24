
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const partners = [
    { name: '파트너 선택', url: '#' },
    { name: '경영전략 서비스 파트너', url: 'https://bizfromatoz.com' },
    { name: '벤처자문 서비스 파트너', url: '#' },
    { name: '법률자문 서비스 파트너', url: '#' },
    { name: '재무자문 서비스 파트너', url: 'https://park-hum-seok.vercel.app/' },
  ];

  const handlePartnerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value;
    if (url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <footer className="bg-[#1A365D] text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
          {/* 1. Brand & Description (Far Left) */}
          <div className="col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold font-serif-kr tracking-tight">박흠석</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mt-1">Financial & Accounting Solution Partner</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              기업의 생로병사(生老病死), 30년의 통찰로 해답을 제시합니다. <br />
              삼일회계법인 파트너 출신 박흠석 회계사가 제안하는 <br />
              산업 맞춤형 비즈니스 솔루션을 경험하십시오.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-[#C5A059] hover:text-[#1A365D] transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="mailto:cecilsean40@gmail.com" className="p-2.5 bg-white/5 rounded-full hover:bg-[#C5A059] hover:text-[#1A365D] transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-[15px] font-bold mb-8 font-serif-kr text-[#C5A059] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-5">
              <li><Link to="/services/deal-strategy" className="text-gray-400 hover:text-white transition-colors text-[14px]">Strategy & Deal</Link></li>
              <li><Link to="/services/performance-restructuring" className="text-gray-400 hover:text-white transition-colors text-[14px]">Restructuring</Link></li>
              <li><Link to="/services/audit-internal-control" className="text-gray-400 hover:text-white transition-colors text-[14px]">Audit & Compliance</Link></li>
              <li><Link to="/about/career" className="text-gray-400 hover:text-white transition-colors text-[14px]">About Expert</Link></li>
            </ul>
          </div>

          {/* 3. Partners */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-8">
              <h4 className="text-[15px] font-bold font-serif-kr text-[#C5A059] uppercase tracking-wider">Partners</h4>
              <ExternalLink size={14} className="text-[#C5A059]/70" />
            </div>
            <div className="space-y-4">
              <p className="text-[13px] text-gray-400 mb-4 font-medium">Proventure Consulting Group</p>
              <div className="relative">
                <select 
                  onChange={handlePartnerChange}
                  className="w-full bg-white/5 border border-white/20 rounded-md px-4 py-3 text-[13px] text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#C5A059] cursor-pointer appearance-none transition-all hover:bg-white/10"
                >
                  {partners.map(p => (
                    <option key={p.name} value={p.url} className="bg-[#1A365D] text-white py-2">{p.name}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Contact Us (Shifted slightly to the right for better spacing) */}
          <div className="flex flex-col lg:pl-10">
            <h4 className="text-[15px] font-bold mb-8 font-serif-kr text-[#C5A059] uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="mt-1 text-[#C5A059] shrink-0" />
                <span className="text-gray-400 text-[14px] leading-snug">서울특별시 송파구 오름로 11길 7 <br/><span className="text-[12px] text-gray-500">(방이동)</span></span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="text-[#C5A059] shrink-0" />
                <span className="text-gray-400 text-[14px]">02-3453-7291</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={18} className="text-[#C5A059] shrink-0" />
                <span className="text-gray-400 text-[14px]">cecilsean40@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500 tracking-wide">
          <p>© 2024 Park Hum-seok Financial & Accounting Solution Partner. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0 font-medium">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
