import { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FadeIn } from '../animations/FadeIn';

interface BusinessLayoutProps {
  title: string;
  hook: string;
  subHook?: string;
  description: ReactNode;
  diagram: ReactNode;
  services: string[];
  targets: { target: string; desc: string }[];
  costs: { item: string; cost: string }[];
  differentiations: string[];
  ctaText: string;
  bgImage?: string;
  contentImage?: string;
  hideTabs?: boolean;
  category?: string;
}

export const BusinessLayout = ({
  title, hook, subHook, description, diagram, services, targets, costs, differentiations, ctaText, bgImage, contentImage, hideTabs, category
}: BusinessLayoutProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { path: '/business/education', label: '교육·자격' },
    { path: '/business/data', label: '데이터·콘텐츠' },
    { path: '/business/manpower', label: '인력공급' },
    { path: '/business/global', label: '글로벌·AI콘텐츠' },
  ];

  return (
    <div className="w-full bg-black min-h-screen text-white pt-24">
      {/* Sub Navigation */}
      {!hideTabs && (
        <div className="w-full border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-md sticky top-20 z-40">
          <div className="max-w-5xl mx-auto flex justify-center overflow-x-auto no-scrollbar">
            {tabs.map((tab, idx) => {
              // Check if current path matches, or root /business matches first tab
              const isActive = currentPath === tab.path || (currentPath === '/business' && idx === 0);
              return (
                <Link 
                  key={idx} 
                  to={tab.path} 
                  className={`py-4 px-6 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${isActive ? 'border-primary text-primary' : 'border-transparent text-neutral-400 hover:text-white'}`}
                >
                  {tab.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Header / Hook */}
      <section className="relative py-20 px-6 text-center border-b border-neutral-800 overflow-hidden">
        <div className={`absolute inset-0 bg-[url('${bgImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"}')] bg-cover bg-center bg-no-repeat z-0 opacity-20 mix-blend-luminosity`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 z-0"></div>
        <FadeIn className="relative z-10" direction="up">
          <h1 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">{category || '사업영역'}</h1>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">{title}</h2>
          <p className="text-xl md:text-2xl font-medium text-blue-300 mb-4 max-w-4xl mx-auto leading-relaxed">{hook}</p>
          {subHook && <p className="text-lg text-neutral-400 max-w-3xl mx-auto">{subHook}</p>}
        </FadeIn>
      </section>

      {/* Intro Description */}
      <section className="py-16 px-6 max-w-4xl mx-auto flex flex-col items-center">
        {contentImage && (
          <FadeIn delay={100}>
            <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl border border-neutral-800 relative group">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src={contentImage} alt={title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
            </div>
          </FadeIn>
        )}
        <FadeIn delay={200}>
          <div className="text-lg text-neutral-300 leading-loose text-center">
            {description}
          </div>
        </FadeIn>
      </section>

      {/* Structural Diagram */}
      <section className="py-16 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h3 className="text-2xl font-bold mb-8 text-center text-white">연결 구조</h3>
            <div className="p-8 rounded-2xl bg-black border border-neutral-800 flex justify-center">
              {diagram}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto flex flex-col gap-12">
        {/* Services */}
        <FadeIn direction="up">
          <div className="bg-neutral-900/40 p-8 rounded-3xl border border-neutral-800">
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-neutral-800 pb-4">주요 서비스</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((svc, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-black border border-neutral-800 hover:border-blue-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-neutral-300 leading-relaxed font-medium">{svc}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        
        {/* Differentiation Points */}
        <FadeIn delay={100} direction="up">
          <div className="bg-neutral-900/40 p-8 rounded-3xl border border-neutral-800">
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-neutral-800 pb-4">차별화 포인트</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {differentiations.map((diff, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 hover:border-primary/50 transition-colors">
                  <div className="text-2xl font-extrabold text-neutral-800 w-8 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-blue-100 leading-relaxed">{diff}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Targets */}
        <FadeIn delay={200} direction="up">
          <div className="bg-neutral-900/40 p-8 rounded-3xl border border-neutral-800">
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-neutral-800 pb-4">서비스 대상</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {targets.map((tgt, i) => (
                  <div key={i} className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                    <h4 className="text-primary font-semibold mb-1">{tgt.target}</h4>
                    <p className="text-sm text-neutral-400">{tgt.desc}</p>
                  </div>
                ))}
              </div>
          </div>
        </FadeIn>
        
        {/* Costs */}
        <FadeIn delay={300} direction="up">
          <div className="bg-neutral-900/40 p-8 rounded-3xl border border-neutral-800">
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-neutral-800 pb-4">비용 예시</h3>
            <div className="overflow-hidden rounded-xl border border-neutral-800">
              <table className="w-full text-sm text-left">
                  <thead className="bg-neutral-900 text-neutral-300 border-b border-neutral-800">
                    <tr>
                      <th className="px-4 py-3 font-semibold">항목</th>
                      <th className="px-4 py-3 font-semibold text-right">비용 (예시)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 bg-black text-neutral-400">
                    {costs.map((cost, i) => (
                      <tr key={i} className="hover:bg-neutral-900/50 transition-colors">
                        <td className="px-4 py-3">{cost.item}</td>
                        <td className="px-4 py-3 text-right tabular-nums">{cost.cost}</td>
                      </tr>
                    ))}
                  </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-500 mt-4 text-right">* 위 비용은 참고용 예시이며 프로젝트 규모에 따라 달라질 수 있습니다.</p>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-blue-900/20 px-6 mt-12">
        <h2 className="text-3xl font-bold mb-8">성공적인 비즈니스를 위한 첫 걸음</h2>
        <Link to="/inquiry" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-blue-600 transition-all hover:shadow-lg hover:-translate-y-1">
          {ctaText}
        </Link>
      </section>
    </div>
  )
}
