
import React from 'react';
import { ArrowLeft, ShieldCheck, Scale, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuditCompliance: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#1A365D] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dj1xp2ojh/image/upload/v1771559575/Image_fx_1_kyrnqt.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-80 blur-[2px]"
          />
          <div className="absolute inset-0 bg-[#1A365D]/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-[#C5A059] mb-8 hover:underline">
            <ArrowLeft size={16} className="mr-2" /> Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-serif-kr mb-6">Audit & Compliance</h1>
          <p className="text-2xl text-gray-300 font-light max-w-3xl leading-relaxed">
            "신뢰받는 기업의 기본, 투명한 회계와 견고한 내부 통제입니다."
          </p>
        </div>
      </section>

      {/* Section Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-[#1A365D] text-white rounded-full flex items-center justify-center">
                  <Scale size={28} />
                </div>
                <h2 className="text-3xl font-bold font-serif-kr text-[#1A365D]">회계 감사 서비스</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                상장사, 중견기업 및 유망 벤처 기업을 위한 맞춤형 회계 감사를 수행합니다. 
                단순히 숫자를 검증하는 것을 넘어, 산업의 특성을 고려한 회계적 통찰을 제공하여 잠재적인 위험 요소를 미연에 방지합니다.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-8">
                <h4 className="font-bold text-[#1A365D] mb-4">산업군별 풍부한 경험</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                    <div>• 제조 및 제약</div>
                    <div>• 방송 및 미디어</div>
                    <div>• IT 및 서비스</div>
                    <div>• 유통 및 물류</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-[#C5A059] text-white rounded-full flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>
                <h2 className="text-3xl font-bold font-serif-kr text-[#1A365D]">내부 회계 관리 제도</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                제약사 등 100여 개 이상의 그룹 및 기업을 위한 글로벌 수준의 내부 통제 시스템을 구축하고 검토하였습니다. 
                기업의 자산을 보호하고 규제 대응력을 극대화하는 견고한 방패를 만들어 드립니다.
              </p>
              <div className="space-y-4">
                <div className="p-5 border-l-4 border-[#C5A059] bg-[#FDFCFB]">
                  <h5 className="font-bold text-[#1A365D]">통제 프로세스 설계</h5>
                  <p className="text-sm text-gray-600">업무 분장, 권한 관리 등 핵심 프로세스 최적화</p>
                </div>
                <div className="p-5 border-l-4 border-[#C5A059] bg-[#FDFCFB]">
                  <h5 className="font-bold text-[#1A365D]">상시 모니터링 체계</h5>
                  <p className="text-sm text-gray-600">이상 징후 포착 및 리스크 대응 프로세스 구축</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 py-16 bg-[#1A365D] rounded-3xl text-center px-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 opacity-10">
                <BarChart3 size={300} />
            </div>
            <h2 className="text-3xl font-bold font-serif-kr text-white mb-6 relative z-10">비용 절감 및 원가 관리 자문</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 relative z-10">
              신한카드 등 주요 기업의 성과 개선 및 원가 절감 자문 경험을 바탕으로, 
              불필요한 지출을 줄이고 자원 배분의 효율성을 높이는 전략을 제시합니다.
            </p>
            <Link 
              to="/contact" 
              className="bg-[#C5A059] text-[#1A365D] px-10 py-4 rounded-full font-bold hover:bg-[#b08d4b] transition-colors relative z-10 inline-block text-center"
            >
              내부 통제 진단 요청하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditCompliance;
