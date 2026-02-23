
import React from 'react';
import { ArrowLeft, Settings, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Restructuring: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#1A365D] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dj1xp2ojh/image/upload/v1766722183/%ED%8E%9C%EA%B3%BC_%ED%83%AD_y1wyug.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-80 blur-[2px]"
          />
          <div className="absolute inset-0 bg-[#1A365D]/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-[#C5A059] mb-8 hover:underline">
            <ArrowLeft size={16} className="mr-2" /> Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-serif-kr mb-6">Management & Restructuring</h1>
          <p className="text-2xl text-gray-300 font-light max-w-3xl leading-relaxed">
            "기업의 체질을 개선하고 최적의 지배구조를 설계합니다."
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#C5A059] text-white rounded flex items-center justify-center">
                <Settings size={24} />
              </div>
              <h3 className="text-2xl font-bold font-serif-kr text-[#1A365D]">지배구조 및 사업구조 개편</h3>
              <p className="text-gray-600 leading-relaxed">
                주요 그룹사의 지배구조 개선 및 물류 사업 개편 자문을 수행하였습니다. 
                법규 준수를 넘어 경영 효율을 극대화할 수 있는 최적의 구조를 제안합니다.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#C5A059] text-white rounded flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold font-serif-kr text-[#1A365D]">글로벌 경영 관리 체계</h3>
              <p className="text-gray-600 leading-relaxed">
                국내 유수의 전자회사 글로벌 기업의 해외법인 관리 프로세스 개선 및 ERP 구축 프로젝트를 성공적으로 이끌었습니다. 
                글로벌 시장에서의 가시성과 통제력을 확보하십시오.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#C5A059] text-white rounded flex items-center justify-center">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold font-serif-kr text-[#1A365D]">성과 관리 및 인사 조직</h3>
              <p className="text-gray-600 leading-relaxed">
                중견·중소기업 30여 곳의 인사 조직 제도 개선 및 성과 관리 시스템 구축을 통해 조직 구성원의 동기 부여와 
                회사의 성장을 동시에 실현합니다.
              </p>
            </div>
          </div>

          <div className="mt-24 p-12 bg-[#F8FAFC] rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 max-w-xl">
              <h4 className="text-2xl font-bold font-serif-kr text-[#1A365D] mb-4">무료 경영 진단 서비스</h4>
              <p className="text-gray-600">귀사의 현재 경영 관리 체계를 진단하고 개선 포인트를 도출해 드립니다. 지금 바로 신청하십시오.</p>
            </div>
            <Link 
              to="/contact" 
              className="bg-[#1A365D] text-white px-10 py-4 rounded-full font-bold hover:bg-[#2a4a7d] transition-colors inline-block text-center"
            >
              경영 진단 신청하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restructuring;
