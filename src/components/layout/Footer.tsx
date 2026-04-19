import { LucidePhone, LucideMail, LucideMapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 text-neutral-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tighter">휴텍씨</h2>
          <p className="max-w-xs text-sm leading-relaxed">
            피지컬 AI를 교육, 자격, 데이터, 콘텐츠, 인력, 번역, 글로벌 사업으로 연결하는 실행형 기업입니다.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="text-white font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center gap-2"><LucidePhone size={16} /> 02-123-4567</div>
          <div className="flex items-center gap-2"><LucideMail size={16} /> info@hutec-ai.com</div>
          <div className="flex items-center gap-2"><LucideMapPin size={16} /> 서울특별시 휴텍타워 AI허브 7층</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 text-xs text-neutral-500 text-center">
        © {new Date().getFullYear()} 휴텍씨. All rights reserved.
      </div>
    </footer>
  )
}
