
import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Clock, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
        <div className="max-w-md w-full text-center space-y-6 animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold font-serif-kr text-[#1A365D]">상담 신청이 완료되었습니다.</h2>
          <p className="text-gray-600">
            남겨주신 연락처로 담당자가 신속히 확인 후 <br />
            24시간 이내에 연락드리겠습니다. 감사합니다.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[#1A365D] font-bold hover:underline"
          >
            돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#1A365D] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dj1xp2ojh/image/upload/v1771559770/Image_fx_2_lumjf4.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-80 blur-[2px]"
          />
          <div className="absolute inset-0 bg-[#1A365D]/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif-kr mb-4">상담 및 자문 신청</h1>
          <p className="text-xl text-gray-300 font-light">기업의 도약과 성장을 위한 최고의 파트너가 되어드리겠습니다.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Section */}
            <div>
              <h2 className="text-3xl font-bold font-serif-kr text-[#1A365D] mb-8">상담 안내</h2>
              <div className="space-y-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  박흠석 전문가는 기업의 특수성과 비즈니스 환경을 깊이 있게 이해하고 개별 맞춤 솔루션을 제안합니다. 
                  아래 폼을 작성해 주시면 전문 자문위원이 직접 검토 후 연락드립니다.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#F1F5F9] text-[#1A365D] rounded-full flex items-center justify-center shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A365D]">운영 시간</h4>
                      <p className="text-gray-500 text-sm">평일 09:00 - 18:00 (토, 일, 공휴일 휴무)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#F1F5F9] text-[#1A365D] rounded-full flex items-center justify-center shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A365D]">사전 예약제</h4>
                      <p className="text-gray-500 text-sm">방문 상담은 사전 예약을 통해 진행됩니다.</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-8 mt-8 space-y-4">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone size={20} className="text-[#C5A059]" />
                      <span>02-3453-7291</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail size={20} className="text-[#C5A059]" />
                      <span>cecilsean40@gmail.com</span>
                    </div>
                    <div className="flex items-start space-x-3 text-gray-600">
                      <MapPin size={20} className="text-[#C5A059] mt-1" />
                      <span>서울특별시 송파구 오름로 11길 7 (방이동)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-[#F8FAFC] p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold font-serif-kr text-[#1A365D] mb-8">의뢰 내용 작성</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">성함 / 담당자</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1A365D] focus:outline-none bg-white" placeholder="홍길동" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">연락처</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1A365D] focus:outline-none bg-white" placeholder="010-0000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">회사명</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1A365D] focus:outline-none bg-white" placeholder="(주)비즈니스솔루션" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">상담 분야</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1A365D] focus:outline-none bg-white appearance-none">
                    <option>전략 및 Deal 자문</option>
                    <option>경영 컨설팅 및 구조 개편</option>
                    <option>회계 감사 및 내부 통제</option>
                    <option>기타 전문 자문</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">문의 사항 (간략히)</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1A365D] focus:outline-none bg-white resize-none" placeholder="문의하실 내용을 입력해 주세요."></textarea>
                </div>

                <div className="flex items-start space-x-2">
                  <input required type="checkbox" className="mt-1 w-4 h-4 text-[#1A365D] border-gray-300 rounded focus:ring-[#1A365D]" />
                  <span className="text-xs text-gray-500">개인정보 수집 및 이용에 동의합니다. (필수)</span>
                </div>

                <button type="submit" className="w-full bg-[#1A365D] text-white py-4 rounded-lg font-bold hover:bg-[#2a4a7d] transition-all shadow-lg shadow-[#1A365D]/20">
                  신청 완료하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
