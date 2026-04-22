import { LucideArrowRight, LucideZap, LucideUsers, LucideDatabase, LucideGlobe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/animations/FadeIn';

export const Home = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Placeholder for futuristic background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat z-0 mix-blend-luminosity opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent z-0 blur-2xl"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-12">
          <FadeIn delay={100}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
              미래 산업을 연결하는 신뢰의 기반
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
              피지컬 AI의 미래, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">휴텍씨가 연결합니다</span>
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl leading-relaxed mx-auto">
              30년 교육 운영의 신뢰 위에, AI가 화면을 넘어 실제 산업 현장과 연결되는 구조를 설계하고 운영합니다.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex gap-4 justify-center">
              <Link to="/inquiry" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,102,255,0.5)] flex items-center gap-2">
                사업 상담하기 <LucideArrowRight size={18} />
              </Link>
              <Link to="/business" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
                상세 사업영역 보기
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Expanded Philosophy Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <FadeIn delay={100} direction="left">
              <div className="text-primary font-bold tracking-widest text-sm">HUTEC AI VISION</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mt-3">
                기술을 넘어서는 진짜 연결,<br/>
                화면 밖으로 걸어 나온 AI
              </h2>
            </FadeIn>
            <FadeIn delay={200} direction="left">
              <p className="text-lg text-neutral-400 leading-relaxed mt-6 mb-4">
                피지컬 AI는 단순한 소프트웨어가 아닙니다. 산업 현장에서 기계와 로봇, 그리고 인간이 함께 어우러지는 광범위한 하드웨어적·시스템적 융합입니다.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                휴텍씨는 이 거대 담론을 현장에 안착시키기 위해, 가장 기본인 <strong className="text-neutral-200">'사람에 대한 교육'</strong>부터 <strong className="text-neutral-200">'운영 데이터 축적', '검증된 인력 공급', '글로벌 확산 마케팅'</strong>까지 이어지는 독보적인 벨류체인을 시장에 공급합니다.
              </p>
              <Link to="/company" className="text-primary hover:text-blue-400 font-semibold flex items-center gap-2 transition-colors">
                휴텍씨 스토리 더 알아보기 <LucideArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2">
            <FadeIn delay={300} direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" className="rounded-2xl h-48 object-cover border border-neutral-800" alt="현장 전문 교육" />
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" className="rounded-2xl h-64 object-cover border border-neutral-800" alt="글로벌 확장 미팅" />
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" className="rounded-2xl h-64 object-cover border border-neutral-800" alt="데이터 분석 체계" />
                  <img src="https://images.unsplash.com/photo-1614728423169-3f65fd722b05?q=80&w=600&auto=format&fit=crop" className="rounded-2xl h-48 object-cover border border-neutral-800" alt="AI 모니터링 시스템" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Business Flow Section */}
      <section className="py-20 bg-neutral-900 px-6 border-y border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">피지컬 AI 사업 연결 구조</h2>
              <p className="text-neutral-400">단순한 기술 소개를 넘어 인력, 데이터, 글로벌 시장을 하나로 묶습니다.</p>
            </div>
          </FadeIn>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-800 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "1단계", title: "피지컬 AI 이해", icon: <LucideZap size={24}/> },
              { step: "2단계", title: "교육·자격", icon: <LucideUsers size={24}/> },
              { step: "3단계", title: "데이터·콘텐츠", icon: <LucideDatabase size={24}/> },
              { step: "4단계", title: "인력공급", icon: <LucideUsers size={24}/> },
              { step: "5단계", title: "글로벌 확장", icon: <LucideGlobe size={24}/> },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="w-full md:w-auto relative z-10 flex flex-col items-center group">
                <div className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{item.step}</div>
                <div className="w-20 h-20 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white mb-4 shadow-xl transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]">
                  {item.icon}
                </div>
                <div className="font-semibold text-lg text-center">{item.title}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Market Status Section */}
      <section className="py-20 bg-black px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-10 text-center">피지컬 AI 시장 현황</h2>
          </FadeIn>
          <div className="flex flex-col gap-6">
            {[
              { image: "https://images.unsplash.com/photo-1565514020179-026b92b64700?q=80&w=800&auto=format&fit=crop", title: "제조업 비중 26.6%", desc: "제조 현장이 많은 한국은 피지컬 AI 적용에 유리합니다" },
              { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", title: "로봇 밀도 세계 1위", desc: "한국은 1만 명당 1,220대로 자동화 기반이 높습니다" },
              { image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop", title: "전문 서비스 로봇 19.9만 대", desc: "글로벌 시장은 이미 실사용 단계로 이동 중입니다" },
              { image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop", title: "K-휴머노이드 연합 출범", desc: "한국도 국가 전략산업으로 본격 육성 중입니다" }
            ].map((card, idx) => (
              <FadeIn key={idx} delay={idx * 150} direction="up">
                <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-primary/50 transition-colors group cursor-pointer">
                  <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
                     <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors z-10"></div>
                     <img src={card.image} alt={card.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{card.title}</h3>
                    <p className="text-neutral-400 text-lg leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
