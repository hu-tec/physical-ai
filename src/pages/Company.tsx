import { Link } from 'react-router-dom';
import { FadeIn } from '../components/animations/FadeIn';

export const Company = () => {
  return (
    <div className="w-full flex flex-col pt-24 bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 flex flex-col items-center justify-center border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat z-0 opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent z-0"></div>
        <FadeIn className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
            휴텍씨 소개 | 신뢰를 기반으로 미래 산업을 연결합니다
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            30년 교육 운영의 신뢰 위에, <br className="hidden md:block"/>
            <span className="text-blue-400">피지컬 AI의 미래를 연결합니다</span>
          </h1>
        </FadeIn>
      </section>

      {/* Intro Description */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
          <FadeIn direction="up">
            <p>
              휴텍씨는 30년 동안 교육을 운영하며 쌓아온 신뢰와 경험을 바탕으로,<br/> 이제 AI 교육, 자격 시험, 데이터 구축, 다국어 번역 및 글로벌 네트워크 확장을 연결하는 <strong>실행형 피지컬 AI 사업 구조</strong>로 폭발적으로 성장하고 있습니다.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={150}>
            <p>
              휴텍씨의 강점은 단순히 이론적인 교육을 제공하는 데에만 머물지 않습니다.<br/>
              교육을 통해 전문 역량을 갖춘 사람들을 모으고, 까다로운 자격과 인증 제도로 시장의 시스템적 신뢰를 만들어냅니다. 나아가 현장에 필요한 시나리오와 데이터, 콘텐츠를 집요하게 축적하여 이를 다시 실제 제조/물류 산업과 글로벌 비즈니스 현장으로 즉시 연결하는 <span className="text-white font-bold decoration-blue-500 underline underline-offset-4">구조를 설계하고 운영</span>할 수 있는 실행력에 있습니다.
            </p>
          </FadeIn>
          
          <div className="flex justify-center py-8">
            <div className="h-px w-24 bg-blue-500/50"></div>
          </div>

          <FadeIn direction="up" delay={200}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              피지컬 AI는 단순한 기술 트렌드가 아닙니다.
            </h2>
            <p>
              새로운 시대의 AI는 모니터 화면 안에서 텍스트로 답을 내는 구조를 넘어섭니다.<br/>
              실제 산업 현장과 작업 환경 속에서, 사람의 행동과 호흡을 맞추며 전체 운영 체계로 깊숙이 확장되는 실용적 기술 구조입니다.
            </p>
            <p className="text-blue-200 font-semibold text-2xl mt-8">
              휴텍씨는 이 거대한 변화 속에서, 한국형 피지컬 AI의 표준을 제시합니다.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Values / Strengths Expanded */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">휴텍씨의 핵심 역량</h2>
              <p className="text-neutral-400">오랜 경험과 추진력을 바탕으로 시장에 필요한 완벽한 밸류체인을 구축했습니다.</p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={100} direction="up" className="bg-black p-8 rounded-2xl border border-neutral-800 hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">01. 30년 교육 운영의 신뢰</h3>
              <p className="text-neutral-300 leading-relaxed">수십 년간 쌓아온 전국망 교육 노하우와 커리큘럼 개발 능력을 보유하고 있습니다. 이를 바탕으로 첨단 구조인 피지컬 AI마저도 누구나 쉽게 이해하고 실무에 투입될 수 있도록 체계적인 인력 양성 시스템으로 치환해냅니다.</p>
            </FadeIn>
            
            <FadeIn delay={200} direction="up" className="bg-black p-8 rounded-2xl border border-neutral-800 hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">02. 데이터 실증 가치 창출</h3>
              <p className="text-neutral-300 leading-relaxed">교육과 운영 과정에서 버려질 수 있는 모든 정보와 시나리오를 데이터베이스로 구축합니다. 이는 현장에서 즉시 요구되는 '현장 맞춤형 AI 구축 데이터'로 변환되어 기업 고객들의 AI 도입 시간을 획기적으로 단축시킵니다.</p>
            </FadeIn>

            <FadeIn delay={300} direction="up" className="bg-black p-8 rounded-2xl border border-neutral-800 hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">03. 검증된 인력 공급 파이프라인</h3>
              <p className="text-neutral-300 leading-relaxed">단순한 구인구직이 아닙니다. 자사에서 직접 제공한 교육과 자격 인증을 통과한 확실한 인력풀을 바탕으로, 도입 기업이 요구하는 수준 높은 현장 운영자 및 프로젝트 관리자(PM)를 적재적소에 매칭합니다.</p>
            </FadeIn>

            <FadeIn delay={400} direction="up" className="bg-black p-8 rounded-2xl border border-neutral-800 hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">04. AI 툴을 활용한 글로벌 무대 확장</h3>
              <p className="text-neutral-300 leading-relaxed">언어와 국경의 장벽을 넘어섭니다. 생성형/피지컬 AI 툴을 활용하여 즉각적으로 매뉴얼, 교육 스크립트, 홍보 영상을 다국어로 변환하고 현지 맞춤형 마케팅 에셋으로 연결하여 해외 시장 수출을 전격 견인합니다.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900/20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">휴텍씨와 함께 새로운 비즈니스를 시작하세요</h2>
          <Link to="/inquiry" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-blue-600 transition-all hover:-translate-y-1 hover:shadow-lg">
            제휴 및 사업 문의하기
          </Link>
        </div>
      </section>
    </div>
  )
}
