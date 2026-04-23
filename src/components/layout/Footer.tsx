import { LucidePhone, LucideMail, LucideMapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 text-neutral-400 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-tight">휴텍씨</span>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400/90">
            피지컬 AI를 교육, 자격, 데이터, 콘텐츠, 인력, 번역,<br className="hidden sm:block" />
            글로벌 사업으로 연결하는 실행형 기업입니다.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-4 min-w-[280px]">
          <h3 className="text-white font-semibold mb-1">연락처</h3>
          <ul className="space-y-4 text-sm text-neutral-400/90">
            <li className="flex items-start gap-3">
              <LucideMapPin className="w-[18px] h-[18px] mt-0.5 text-indigo-500/80 flex-shrink-0" />
              <span className="leading-relaxed">서울 서초구 양재천로 19길 26, 6층 (양재동)</span>
            </li>
            <li className="flex items-center gap-3">
              <LucidePhone className="w-[18px] h-[18px] text-indigo-500/80 flex-shrink-0" />
              <span>02-6207-9090</span>
            </li>
            <li className="flex items-center gap-3">
              <LucideMail className="w-[18px] h-[18px] text-indigo-500/80 flex-shrink-0" />
              <span>hutetchc02@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-[13px] text-neutral-500">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center">
            <p>상호명: 주식회사 휴텍씨</p>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <p>대표이사: 박미진</p>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <p>사업자등록번호: [사업자번호 입력]</p>
          </div>
          <p className="pt-4">© 2026 HuTechC. All rights reserved.</p>
        </div>
        <div className="flex gap-4 pb-0.5">
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
        </div>
      </div>
    </footer>
  )
}
