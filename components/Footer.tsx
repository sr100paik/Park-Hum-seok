
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A365D] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold font-serif-kr">박흠석</span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059]">Strategic Solution Partner</span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              기업의 생로병사(生老病死), 40년의 통찰로 해답을 제시합니다. 
              삼일회계법인 파트너 출신 박흠석 회계사가 제안하는 산업 맞춤형 비즈니스 솔루션을 경험하십시오.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#C5A059] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:phumseok.park@gmail.com" className="p-2 bg-white/10 rounded-full hover:bg-[#C5A059] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif-kr text-[#C5A059]">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services/deal-strategy" className="text-gray-400 hover:text-white transition-colors">Deal & Strategy</Link></li>
              <li><Link to="/services/performance-restructuring" className="text-gray-400 hover:text-white transition-colors">Restructuring</Link></li>
              <li><Link to="/services/audit-internal-control" className="text-gray-400 hover:text-white transition-colors">Audit & Compliance</Link></li>
              <li><Link to="/about/career" className="text-gray-400 hover:text-white transition-colors">About Expert</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif-kr text-[#C5A059]">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 text-[#C5A059]" />
                <span>서울특별시 강남구 테헤란로 (도영회계법인)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#C5A059]" />
                <span>02-3453-7291</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#C5A059]" />
                <span>phumseok.park@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Park Hum-seok. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
