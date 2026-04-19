import { BusinessLayout } from '../../components/layout/BusinessLayout';
import { LucideChevronRight } from 'lucide-react';

export const DataContent = () => {
  const diagram = (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 flex-wrap justify-center text-sm md:text-base font-semibold text-blue-200">
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">데이터 수집</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">정제·정리</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">콘텐츠 제작</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">현장 활용</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-primary/20 border border-primary rounded-xl text-white">가치 축적</div>
    </div>
  );

  const description = (
    <>
      <p className="mb-6">
        피지컬 AI는 기술만으로 완성되지 않습니다. 현장에서 실제로 쓰일 수 있는 작업 데이터, 시나리오, 모션 정보, 운영 매뉴얼, 트레이닝 교육 콘텐츠가 함께 동반되어야 합니다.
      </p>
      <p>
        휴텍씨는 단순 외주가 아닌 교육과 운영 과정에서 발생하는 자료를 <strong>데이터와 콘텐츠 자산으로 전환</strong>하여 산업 현장에 바로 적용 가능한 구조로 만듭니다.
      </p>
    </>
  );

  return (
    <BusinessLayout
      title="데이터·콘텐츠"
      hook="산업 현장에서 필요한 데이터와 콘텐츠를 함께 구축합니다"
      description={description}
      diagram={diagram}
      services={[
        "모션 / 작업 지시 데이터 구축",
        "상황별 시나리오 및 예외 상황 데이터",
        "교육용 영상·교안 전문 제작",
        "현장 산업 매뉴얼 (가이드북) 제작",
        "다국어 콘텐츠 텍스트 / 미디어 변환"
      ]}
      targets={[
        { target: "기업", desc: "현장 AI 도입용 데이터 구축, 매뉴얼 제작" },
        { target: "기관", desc: "공공 제공 교육 콘텐츠, 대시민 안내 콘텐츠" },
        { target: "교육현장", desc: "자사 교재, 실습 시뮬레이션 자료, 강의자료" },
        { target: "해외 파트너", desc: "시장 진출을 위한 현지화된 자료와 콘텐츠" }
      ]}
      costs={[
        { item: "소형 데이터 구축", cost: "2,000만원 ~ 5,000만원" },
        { item: "중형 데이터 구축", cost: "5,000만원 ~ 2억원" },
        { item: "대형 프로젝트", cost: "2억원 이상 (별도 계약)" },
        { item: "교육 콘텐츠 제작", cost: "500만원 ~ 3,000만원" },
        { item: "산업 매뉴얼 제작", cost: "300만원 ~ 2,000만원" },
        { item: "다국어 콘텐츠 변환", cost: "200만원 ~ 1,500만원" }
      ]}
      differentiations={[
        "단발성 교육 자료를 지식 자산으로 전환하는 설계",
        "기술 데이터 모델과 교육 콘텐츠를 함께 연계하여 제공",
        "제작 후 끝나는 것이 아니라 산업 적용과 홍보/마케팅까지 활용 연결"
      ]}
      ctaText="데이터·콘텐츠 구축 문의하기"
      bgImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop"
      contentImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    />
  );
};
