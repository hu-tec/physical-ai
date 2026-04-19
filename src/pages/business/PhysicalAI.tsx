import { BusinessLayout } from '../../components/layout/BusinessLayout';
import { LucideChevronRight } from 'lucide-react';

export const PhysicalAI = () => {
  const diagram = (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 flex-wrap justify-center text-sm md:text-base font-semibold text-blue-200">
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">기술 이해</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">산업 적용</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">인력 양성</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">데이터 축적</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-primary/20 border border-primary rounded-xl text-white">글로벌 확장</div>
    </div>
  );

  const description = (
    <>
      <p className="mb-6">
        피지컬 AI는 AI가 실제 산업 현장과 작업 환경에서 움직이고 반응하며 작동하는 구조를 의미합니다. 이제 AI는 화면 안에서 답을 만드는 것을 넘어, 제조, 물류, 교육, 서비스, 운영 현장과 연결되는 단계로 이동하고 있습니다.
      </p>
      <p>
        휴텍씨는 피지컬 AI를 단순한 기술 개념이 아니라 <strong>교육, 인력, 데이터, 콘텐츠, 글로벌 확장으로 이어지는 사업 구조</strong>로 이해합니다.
      </p>
    </>
  );

  return (
    <BusinessLayout
      title="피지컬 AI 소개"
      hook="한국의 제조 경쟁력 위에, 피지컬 AI의 새로운 기회를 연결합니다"
      description={description}
      diagram={diagram}
      services={[
        "피지컬 AI란 무엇인가",
        "왜 지금 필요한가",
        "한국 산업에서의 가능성",
        "휴텍씨가 보는 피지컬 AI 방향",
        "적용 가능 산업군 모델링"
      ]}
      targets={[
        { target: "제조", desc: "작업 자동화, 운영 지원, 현장 교육" },
        { target: "물류", desc: "이동, 분류, 운영 시나리오" },
        { target: "교육", desc: "실습형 AI 교육, 운영자 양성" },
        { target: "서비스/공공", desc: "고객 응대, 보호, 현장 안내, 안전/관리" }
      ]}
      costs={[
        { item: "초기 도입 진단", cost: "사전 협의" },
        { item: "산업군 맞춤 컨설팅", cost: "프로젝트별 상이" }
      ]}
      differentiations={[
        "기술 설명이 아니라 산업 연결 중심",
        "교육과 사람 중심 구조",
        "한국형 제조 환경에 맞춘 확장 모델"
      ]}
      ctaText="피지컬 AI 사업 상담하기"
      bgImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop"
      contentImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
      hideTabs={true}
      category="피지컬 AI"
    />
  );
};
