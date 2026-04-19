export const Inquiry = () => {
  return (
    <div className="w-full bg-black min-h-screen text-white pt-24">
      <section className="relative py-20 px-6 text-center border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat z-0 opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">상담신청</h1>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">기술 소개보다 중요한 것은,<br/>지금 바로 시작할 수 있는 연결입니다</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            휴텍씨는 교육, 데이터, 인력, 번역, 글로벌 사업에 대해 개인, 기업, 기관, 해외 파트너 모두가 쉽게 문의할 수 있도록 통합 상담 구조를 제공합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Area */}
          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-2xl font-bold mb-8">무엇을 도와드릴까요?</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">문의 구분</label>
                <select className="w-full p-4 rounded-xl bg-black border border-neutral-800 text-white outline-none focus:border-primary">
                  <option>교육 문의</option>
                  <option>기업 방문교육 문의</option>
                  <option>데이터 구축 문의</option>
                  <option>인력 공급 문의</option>
                  <option>번역/글로벌 콘텐츠 문의</option>
                  <option>글로벌 제휴 문의</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">담당자 성함</label>
                <input type="text" placeholder="홍길동" className="w-full p-4 rounded-xl bg-black border border-neutral-800 text-white outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">연락처</label>
                <input type="text" placeholder="010-0000-0000" className="w-full p-4 rounded-xl bg-black border border-neutral-800 text-white outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">문의 내용</label>
                <textarea rows={4} placeholder="원하시는 서비스와 일정을 간단히 적어주세요." className="w-full p-4 rounded-xl bg-black border border-neutral-800 text-white outline-none focus:border-primary resize-none"></textarea>
              </div>
              <button type="button" className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-600 transition-colors">
                상담 접수하기
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-12 pl-0 md:pl-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">빠른 상담이 필요하신가요?</h3>
              <p className="text-neutral-400 mb-2">대표 전화 번호로 연락 주시면, 각 사업 영역별 전문 매니저가 직접 친절하게 안내해 드립니다.</p>
              <div className="text-3xl font-bold text-primary mt-4">02 - 1234 - 5678</div>
            </div>
            <div className="h-px bg-neutral-800 w-full"></div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">운영 시간</h3>
              <div className="space-y-2 text-neutral-400">
                <p>평일: 09:00 ~ 18:00</p>
                <p>점심: 12:00 ~ 13:00</p>
                <p>주말 및 공휴일 휴무</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
