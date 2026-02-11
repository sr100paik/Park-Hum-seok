
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Layers, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Skyscrapers" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A365D]/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold font-serif-kr text-white leading-tight mb-6">
              기업의 <span className="text-[#C5A059]">생로병사(生老病死)</span>,<br />
              40년의 통찰로 해답을 제시합니다.
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed font-light">
              삼일회계법인 파트너 출신 박흠석 회계사가 제안하는 <br className="hidden md:block" /> 
              산업 맞춤형 비즈니스 솔루션을 통해 지속 가능한 성장을 설계하십시오.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/services/deal-strategy" 
                className="inline-flex items-center justify-center bg-[#C5A059] text-[#1A365D] px-8 py-4 rounded font-bold hover:bg-[#b08d4b] transition-all group"
              >
                전문 분야 보기
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border border-white/50 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all"
              >
                상담 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C5A059] font-bold tracking-widest uppercase mb-4 block">The Challenge</span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-[#1A365D] mb-6 leading-snug">
                "사업 확장, 투자 유치, 혹은 구조 조정...<br />
                기업이 마주하는 수많은 변곡점에서<br />
                누구를 믿으시겠습니까?"
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  기업은 태어나서 성장하고, 때로는 병들거나 새로운 국면을 맞이합니다. 
                  각 단계마다 필요한 전략과 해법은 다릅니다. 단순한 숫자를 보는 것을 넘어, 
                  사업의 본질과 흐름을 꿰뚫는 파트너가 필요합니다.
                </p>
                <div className="flex items-start space-x-3 text-[#1A365D]">
                  <CheckCircle className="mt-1 flex-shrink-0 text-[#C5A059]" />
                  <p className="font-medium">제조부터 엔터테인먼트, IT까지 산업의 경계를 넘나드는 깊이 있는 자문</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F7FAFC] p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full -mr-16 -mt-16"></div>
               <span className="text-[#1A365D] font-bold tracking-widest uppercase mb-4 block">Our Solution</span>
               <h3 className="text-2xl font-bold font-serif-kr text-[#1A365D] mb-6">40년 경력의 통합 솔루션</h3>
               <p className="text-gray-600 mb-8 leading-relaxed">
                 박흠석 전문가는 삼일회계법인 파트너로서 쌓아온 방대한 네트워크와 실무 경험을 바탕으로, 
                 기업의 현재를 진단하고 미래를 위한 가장 현실적이고 강력한 로드맵을 제공합니다.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded shadow-sm">
                    <div className="text-2xl font-bold text-[#1A365D]">40+</div>
                    <div className="text-sm text-gray-500">Years of Experience</div>
                  </div>
                  <div className="p-4 bg-white rounded shadow-sm">
                    <div className="text-2xl font-bold text-[#1A365D]">100+</div>
                    <div className="text-sm text-gray-500">Corporates Advised</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif-kr text-[#1A365D] mb-4">Core Expertise</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">박흠석 전문가가 제공하는 세 가지 핵심 비즈니스 아키텍처</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-[#F1F5F9] rounded-lg flex items-center justify-center text-[#1A365D] mb-8 group-hover:bg-[#1A365D] group-hover:text-white transition-colors">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold font-serif-kr text-[#1A365D] mb-4">전략 및 Deal 자문</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                신사업 추진 전략 및 투자 유치(PF), 매수/매각 실사 등 성공적인 거래를 위한 정밀한 통찰을 제공합니다.
              </p>
              <Link to="/services/deal-strategy" className="text-[#C5A059] font-bold flex items-center group-hover:underline">
                자세히 보기 <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-[#F1F5F9] rounded-lg flex items-center justify-center text-[#1A365D] mb-8 group-hover:bg-[#1A365D] group-hover:text-white transition-colors">
                <Layers size={32} />
              </div>
              <h3 className="text-2xl font-bold font-serif-kr text-[#1A365D] mb-4">구조 개편 및 진단</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                지배구조 개선, 성과 관리 및 경영 효율화 컨설팅을 통해 기업의 기초 체력을 강화하고 효율을 극대화합니다.
              </p>
              <Link to="/services/performance-restructuring" className="text-[#C5A059] font-bold flex items-center group-hover:underline">
                자세히 보기 <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-[#F1F5F9] rounded-lg flex items-center justify-center text-[#1A365D] mb-8 group-hover:bg-[#1A365D] group-hover:text-white transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold font-serif-kr text-[#1A365D] mb-4">투명성 및 통제</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                글로벌 수준의 내부 통제 시스템 구축 및 회계 감사를 통해 경영의 투명성과 안정성을 확보합니다.
              </p>
              <Link to="/services/audit-internal-control" className="text-[#C5A059] font-bold flex items-center group-hover:underline">
                자세히 보기 <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-[#1A365D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif-kr mb-8">검증된 전문성, 실질적인 성과</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="text-4xl font-bold text-[#C5A059]">40+</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Career Journey</h4>
                    <p className="text-gray-400">삼일회계법인 파트너 경력 및 40년 이상의 회계/자문 외길</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="text-4xl font-bold text-[#C5A059]">100+</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Global Clients</h4>
                    <p className="text-gray-400">국내외 주요 대기업 및 그룹사의 복잡한 이슈 해결 수행</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded-2xl border border-white/10 italic text-xl leading-relaxed font-light relative">
              <span className="absolute top-4 left-4 text-6xl text-white/10">"</span>
              <p className="relative z-10">
                "단순한 숫자를 넘어 사업의 본질을 꿰뚫는 자문 덕분에 복잡했던 지배구조 개편을 성공적으로 마칠 수 있었습니다. 
                전문가로서의 통찰력과 실행력은 업계 최고 수준입니다."
              </p>
              <div className="mt-8 not-italic">
                <p className="font-bold text-[#C5A059]">주요 그룹사 CFO</p>
                <p className="text-sm text-gray-500">Project Success Testimonial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#F1F5F9] py-16 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-bold font-serif-kr text-[#1A365D] mb-6">귀사의 지속 가능한 성장을 함께 설계하겠습니다.</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            비즈니스의 복잡한 문제를 해결하고 새로운 기회를 창출하고 싶으시다면, 지금 바로 상담을 신청하십시오.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#1A365D] text-white px-10 py-4 rounded-full font-bold hover:bg-[#2a4a7d] transition-colors shadow-lg shadow-[#1A365D]/20"
          >
            전문 상담 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
