import { LucideFileText, LucideMessageSquare, LucideImage, LucideFolderOpen } from 'lucide-react';

export const Community = () => {
  return (
    <div className="w-full bg-black min-h-screen text-white pt-24">
      <section className="relative py-20 px-6 text-center border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat z-0 opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">커뮤니티</h1>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">사례와 자료가 쌓일수록, <br className="hidden md:block"/>사업의 신뢰는 더 커집니다</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            커뮤니티는 단순 게시판이 아닙니다. 휴텍씨의 사업 방향, 교육 사례, 산업 동향, 프로젝트 소식, 자료실을 통해 방문자가 사업의 흐름과 축적된 실행력을 이해할 수 있도록 하는 공간입니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: "공지사항", icon: <LucideMessageSquare size={24}/>, desc: "휴텍씨의 새로운 사업 소식과 중요 일정을 확인하세요." },
          { title: "교육 및 자격 사례", icon: <LucideImage size={24}/>, desc: "기업 현장에 적용된 교육 성공 사례를 소개합니다." },
          { title: "데이터·프로젝트 자료실", icon: <LucideFolderOpen size={24}/>, desc: "시나리오 구축 및 현장 매뉴얼 배포 자료를 제공합니다." },
          { title: "피지컬 AI 동향 뉴스", icon: <LucideFileText size={24}/>, desc: "국내외 산업 동향과 기술, 로봇, 자동화 소식입니다." }
        ].map((item, idx) => (
          <div key={idx} className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-primary/50 transition-all cursor-pointer group">
            <div className="w-12 h-12 rounded-xl bg-black border border-neutral-800 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-neutral-400 text-sm">{item.desc}</p>
            <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between items-center text-sm">
              <span className="text-neutral-500">최근 업데이트: 오늘</span>
              <span className="text-primary font-medium hover:underline">자세히 보기</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
