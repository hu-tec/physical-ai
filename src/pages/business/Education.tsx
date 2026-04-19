import { BusinessLayout } from '../../components/layout/BusinessLayout';
import { LucideChevronRight } from 'lucide-react';

export const Education = () => {
  const diagram = (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 flex-wrap justify-center text-sm md:text-base font-semibold text-blue-200">
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">입문교육</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">실무교육</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">자격·인증</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">강사양성</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-primary/20 border border-primary rounded-xl text-white">산업현장 연결</div>
    </div>
  );

  const description = (
    <>
      <p className="mb-6">
        휴텍씨의 피지컬 AI 교육은 단순한 강의가 아니라 <strong>산업 현장에서 실제로 필요한 사람과 운영자를 양성하는 구조</strong>입니다.
      </p>
      <p>
        전국 교육원에서 직접 모집하는 집합교육과 기업·기관 현장에 찾아가는 방문교육을 함께 운영하며, 자격과 인증, 강사 양성, 교재 개발까지 통합적으로 연결합니다.
      </p>
    </>
  );

  return (
    <BusinessLayout
      title="교육·자격"
      hook="피지컬 AI, 교육에서 인력 양성을 통해 한국 산업과 연결합니다"
      description={description}
      diagram={diagram}
      services={[
        "집합교육",
        "기업 방문교육",
        "자격시험 (민간자격 / 국가공인 추진)",
        "전문 강사과정 양성",
        "자체 교재 및 매뉴얼 구축"
      ]}
      targets={[
        { target: "개인", desc: "취업준비생, 직장인, 전환 희망자" },
        { target: "강사", desc: "교육자, 실습강사, 운영강사" },
        { target: "기업", desc: "제조업, 물류업, 교육기관 현업 종사자" },
        { target: "기관", desc: "대학, 공공기관, 교육센터 위탁" }
      ]}
      costs={[
        { item: "입문 과정", cost: "35만원 ~ 60만원" },
        { item: "실무 과정", cost: "80만원 ~ 150만원" },
        { item: "관리자 과정", cost: "120만원 ~ 200만원" },
        { item: "강사 양성과정", cost: "150만원 ~ 300만원" },
        { item: "자격 응시 / 발급", cost: "10만원 / 5만원" },
        { item: "기업 방문교육", cost: "300만원 ~ 1,500만원" }
      ]}
      differentiations={[
        "교육 후 끝나지 않고 자격과 인력 공급으로 직결",
        "집합형(전국 센터) + 방문형(기업 현장) 이중 구조",
        "교재와 매뉴얼까지 자체 구축 및 보급 가능"
      ]}
      ctaText="교육과정 및 위탁 문의하기"
      bgImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
      contentImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
    />
  );
};
