import { BusinessLayout } from '../../components/layout/BusinessLayout';
import { LucideChevronRight } from 'lucide-react';

export const Manpower = () => {
  const diagram = (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 flex-wrap justify-center text-sm md:text-base font-semibold text-blue-200">
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">인재 양성</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">실력 검증</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">인력풀 등록</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl">수요 매칭</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-primary/20 border border-primary rounded-xl text-white">현장 실전투입</div>
    </div>
  );

  const description = (
    <>
      <p className="mb-6">
        피지컬 AI 사업은 기술이나 기계만으로 움직이지 않습니다. 실제 현장에는 로봇과 AI를 제어하고 통제할 <strong>운영자, 확산을 담당할 강사, 전체 프로세스를 조율할 관리자</strong> 그리고 프로젝트 인력 등 사람의 역할이 필수적입니다.
      </p>
      <p>
        휴텍씨는 체계적인 교육 및 자격 검증 과정을 거친 검증된 인력풀을 바탕으로 기업, 기관 체인, 대형 프로젝트 현장에서 즉시 활약할 수 있는 최적의 인적 자원을 연결합니다.
      </p>
    </>
  );

  return (
    <BusinessLayout
      title="인력공급"
      hook="배운 사람을 산업에 연결하는 것, 그것이 휴텍씨의 인력 전략입니다"
      description={description}
      diagram={diagram}
      services={[
        "전문 강사 파견 (출강 지원)",
        "현장 운영 및 모니터링 인력 공급",
        "프로젝트 관리자 (PM/PL) 연결",
        "단기/이벤트 현장 기술 지원 인력",
        "기업 요구사항 기반 맞춤형 인재 매칭"
      ]}
      targets={[
        { target: "기업", desc: "실제 로봇/AI 도입 후 현장 운영 전담 인력이 필요한 곳" },
        { target: "기관", desc: "시민 교육 강사, 공공 프로젝트 현장 운영 관리자 필요" },
        { target: "프로젝트 단위", desc: "수개월 단기 및 중기 인력 지원이 필요한 TF 현장" },
        { target: "개인", desc: "역량을 갖추고 강사 및 전문가로 활동하고자 하는 인프라 등록자" }
      ]}
      costs={[
        { item: "강사 파견", cost: "1일 20만원 ~ 60만원" },
        { item: "운영 인력 파견", cost: "월 250만원 ~ 500만원" },
        { item: "프로젝트 관리자", cost: "월 350만원 ~ 700만원" },
        { item: "단기 현장 지원", cost: "1일 30만원 ~ 80만원" },
        { item: "인력 매칭 수수료", cost: "연봉/계약금액의 10% ~ 20%" }
      ]}
      differentiations={[
        "휴텍씨가 직접 가르치고 공인한 자격 기반의 신뢰 가능한 인력풀",
        "단순 이력서 스크리닝이 아닌 훈련 결과 기반의 파이프라인 형성",
        "실무 운영부터 교육 강사, PM 관리자급까지 다양한 계층 공급 파이프라인 보유"
      ]}
      ctaText="인력 파견 및 매칭 문의하기"
      bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
      contentImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
    />
  );
};
