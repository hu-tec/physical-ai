import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="absolute top-0 w-full p-6 grid grid-cols-3 items-center z-50 mix-blend-difference text-white">
      <div className="text-2xl font-bold tracking-tighter">
        <Link to="/">휴텍씨</Link>
      </div>
      
      <nav className="flex justify-center gap-8 text-sm font-medium">
        <Link to="/company" className="hover:text-primary transition-colors">회사소개</Link>
        <Link to="/physical-ai" className="hover:text-primary transition-colors">피지컬 AI 소개</Link>
        <Link to="/business" className="hover:text-primary transition-colors">사업영역</Link>
        <Link to="/community" className="hover:text-primary transition-colors">커뮤니티</Link>
      </nav>

      <div className="flex justify-end">
        <Link to="/inquiry" className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-all hover:shadow-[0_0_15px_rgba(0,102,255,0.3)]">
          상담신청
        </Link>
      </div>
    </header>
  )
}

