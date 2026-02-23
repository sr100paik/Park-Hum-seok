
import React from 'react';
import { ArrowLeft, Award, BookOpen, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutCareer: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#1A365D] text-white py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
             <Link to="/" className="inline-flex items-center text-[#C5A059] mb-8 hover:underline">
               <ArrowLeft size={16} className="mr-2" /> Home
             </Link>
             <h1 className="text-4xl md:text-6xl font-bold font-serif-kr mb-6">About<br />Park Hum-seok</h1>
             <p className="text-2xl text-[#C5A059] font-serif-kr mb-6 italic">"30년, 기업의 현장에서 답을 찾아온 Solution Provider"</p>
             <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
               복잡한 기업 경영의 현장에서 실질적인 성과를 만들어내는 전문가입니다. 
               삼일회계법인 파트너로서의 경험과 깊은 통찰력으로 귀사의 성공적인 미래를 함께 그려나갑니다.
             </p>
             <div className="flex flex-wrap gap-4">
               <a 
                 href="https://foj9p10hxsmxhnzm.public.blob.vercel-storage.com/CV_PHS_Professional.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center space-x-2 bg-white text-[#1A365D] px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
               >
                 <FileText size={20} />
                 <span>프로필 상세 이력 다운로드 (PDF)</span>
               </a>
               <Link to="/contact" className="flex items-center space-x-2 bg-[#C5A059] text-[#1A365D] px-6 py-3 rounded font-bold hover:bg-[#b08d4b] transition-colors">
                 <span>상담 신청하기</span>
               </Link>
             </div>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="w-64 h-80 bg-gray-200 rounded-lg overflow-hidden border-4 border-[#C5A059] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
               <img 
                 src="https://res.cloudinary.com/dj1xp2ojh/image/upload/v1771558724/ChatGPT_Image_2026%EB%85%84_2%EC%9B%94_9%EC%9D%BC_%EC%98%A4%ED%9B%84_04_27_24_g9psoe.png" 
                 alt="Park Hum-seok" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#C5A059] text-[#1A365D] p-4 rounded-lg font-bold text-center">
                대표 회계사<br />박흠석
            </div>
          </div>
        </div>
      </section>

      {/* Main Stats/Career */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience Section */}
            <div className="space-y-12">
               <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Briefcase className="text-[#C5A059]" />
                    <h2 className="text-2xl font-bold font-serif-kr text-[#1A365D]">주요 경력</h2>
                  </div>
                  <div className="space-y-6 border-l-2 border-gray-100 pl-6 ml-3">
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1A365D]"></div>
                      <h4 className="font-bold text-[#1A365D]">현) 도영회계법인 대표 회계사</h4>
                      <p className="text-sm text-gray-500">2016 - Present</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300"></div>
                      <h4 className="font-bold text-[#1A365D]">삼일회계법인(PwC) 파트너</h4>
                      <p className="text-sm text-gray-500">2007 - 2015</p>
                      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                        산업 리딩 기업들의 M&A, 내부통제 시스템 구축 및 경영 컨설팅 프로젝트 리딩
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-200"></div>
                      <h4 className="font-bold text-[#1A365D]">삼일회계법인</h4>
                      <p className="text-sm text-gray-500">1993 - 2006</p>
                    </div>
                  </div>
               </div>

               <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="text-[#C5A059]" />
                    <h2 className="text-2xl font-bold font-serif-kr text-[#1A365D]">전문 자격</h2>
                  </div>
                  <ul className="grid grid-cols-1 gap-4">
                    <li className="p-4 bg-gray-50 rounded flex justify-between items-center">
                        <span className="font-medium text-[#1A365D]">한국공인회계사 (KICPA)</span>
                    </li>
                    <li className="p-4 bg-gray-50 rounded flex justify-between items-center">
                        <span className="font-medium text-[#1A365D]">세무사</span>
                    </li>
                  </ul>
               </div>
            </div>

            {/* Education & Values Section */}
            <div className="space-y-12">
               <div className="bg-[#1A365D]/5 p-8 rounded-2xl">
                 <h3 className="text-xl font-bold font-serif-kr text-[#1A365D] mb-4">전문가로서의 철학</h3>
                 <p className="text-gray-600 leading-relaxed italic">
                   "회계는 단순히 숫자를 기록하는 행위가 아닙니다. 
                   회계는 기업의 역사를 기록하는 언어이며, 그 안에서 우리는 미래의 기회를 발견할 수 있습니다. 
                   30년 동안 제가 지켜온 원칙은 '숫자 뒤에 있는 사람과 사업의 본질을 보자'는 것입니다."
                 </p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-[#C5A059]/10 rounded-xl text-center">
                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-widest">Global Experience</p>
                    <p className="text-[#1A365D] font-bold text-xl">International Reach</p>
                  </div>
                  <div className="p-6 bg-[#C5A059]/10 rounded-xl text-center">
                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-widest">Industry Expertise</p>
                    <p className="text-[#1A365D] font-bold text-xl">Diverse Industry</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCareer;
