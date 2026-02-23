
import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DealStrategy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#1A365D] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dj1xp2ojh/image/upload/v1766722184/%EC%84%B1%EC%9E%A5_%EA%B7%B8%EB%9E%98%ED%94%84_qvsm7p.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-80 blur-[2px]"
          />
          <div className="absolute inset-0 bg-[#1A365D]/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-[#C5A059] mb-8 hover:underline">
            <ArrowLeft size={16} className="mr-2" /> Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-serif-kr mb-6">Strategy & Deal</h1>
          <p className="text-2xl text-gray-300 font-light max-w-3xl leading-relaxed">
            "성공적인 Deal의 시작, 정교한 실사와 전략적 타당성 검토에서 시작됩니다."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              {/* Feature 1 */}
              <div>
                <h2 className="text-3xl font-bold font-serif-kr text-[#1A365D] mb-8 pb-4 border-b">산업별 사업계획 수립</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  다양한 산업 분야에서 정교한 사업 타당성 검토 및 최적화된 비즈니스 플랜을 수립합니다. 
                  단순한 문서를 넘어 실현 가능하고 시장 경쟁력을 확보할 수 있는 전략을 제시합니다.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['규제 산업 사업권 획득 자문', '부동산 개발 프로젝트 타당성 검토', '신규 플랫폼 비즈니스 모델링', '산업별 시장 진입 전략 수립'].map(item => (
                    <li key={item} className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle2 size={20} className="text-[#C5A059]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature 2 */}
              <div>
                <h2 className="text-3xl font-bold font-serif-kr text-[#1A365D] mb-8 pb-4 border-b">M&A 및 실사(Due Diligence)</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  수많은 매수/매각 실사 및 워크아웃 실사 경험을 보유하고 있습니다. 
                  숨겨진 리스크를 발굴하고 기업 가치를 정확히 평가하여 성공적인 딜 클로징을 지원합니다.
                </p>
                <div className="bg-[#F8FAFC] p-8 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-[#1A365D] mb-4">주요 실무 영역</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• 기업 인수 및 매각 실사 (Buy-side/Sell-side)</li>
                    <li>• 워크아웃 또는 회생 대상 기업의 재무 실사 및 자구 계획 검토</li>
                    <li>• Deal Structuring 및 세무 영향 분석</li>
                    <li>• PMI(인수 후 통합) 전략 및 가치 창출 지원</li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div>
                <h2 className="text-3xl font-bold font-serif-kr text-[#1A365D] mb-8 pb-4 border-b">글로벌 투자 유치</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  일본, 라오스, 몽골 등 해외 프로젝트를 위한 정교한 Deal Structuring과 투자 설명서(IM) 작성 자문을 제공합니다. 
                  글로벌 자본 시장의 언어로 기업의 가치를 전달합니다.
                </p>
                <div className="flex flex-wrap gap-4">
                    {['IM 작성', '해외 프로젝트 파이낸싱', 'Cross-border Deal', '해외법인 설립 자문'].map(tag => (
                        <span key={tag} className="px-6 py-2 bg-[#1A365D]/5 text-[#1A365D] rounded-full text-sm font-semibold">{tag}</span>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-[#F1F5F9] p-10 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-[#1A365D] mb-6">자문 사례 및 견적 문의</h3>
                <p className="text-gray-600 mb-10 leading-relaxed">
                  귀사의 구체적인 상황에 맞는 전문 자문 사례를 확인하고 싶으시다면 연락 주십시오.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block w-full bg-[#1A365D] text-white py-4 rounded-lg font-bold hover:bg-[#2a4a7d] transition-all shadow-lg shadow-[#1A365D]/10"
                >
                  상담 신청하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealStrategy;
