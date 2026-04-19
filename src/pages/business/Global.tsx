import { BusinessLayout } from '../../components/layout/BusinessLayout';
import { LucideChevronRight } from 'lucide-react';

export const Global = () => {
  const diagram = (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 flex-wrap justify-center text-sm md:text-base font-semibold text-blue-200">
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl flex items-center text-center">AI툴 활용<br/>콘텐츠 제작</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl flex items-center text-center">다국어 번역<br/>현지화</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl flex items-center text-center">홍보·마케팅<br/>제안 자료화</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-neutral-900 border border-blue-500/30 rounded-xl flex items-center text-center">글로벌<br/>시장 확장</div>
      <LucideChevronRight className="hidden md:block text-neutral-600" />
      <div className="px-6 py-3 bg-primary/20 border border-primary rounded-xl text-white flex items-center text-center">윤리·보안 기반<br/>신뢰 체계</div>
    </div>
  );

  const description = (
    <>
      <p className="mb-6">
        휴텍씨의 글로벌 사업은 단순 텍스트 번역 서비스에 머무르지 않습니다. 피지컬 AI와 관련된 교육자료, 기술문서, 매뉴얼을 다국어로 변환함과 동시에, 최신 AI 툴을 활용하여 영상, 음성, 이미지가 포함된 고품질 콘텐츠로 재창조합니다.
      </p>
      <p>
        이를 통해 <strong>기술 문서 번역부터 글로벌 마케팅 패키징, 해외 제안서 기획까지 One-stop으로 연결</strong>합니다. 과정 속에서 AI 윤리, 정보의 투명성 및 보안을 철저히 검증하여 신뢰할 수 있는 확장 구조를 지원합니다.
      </p>
    </>
  );

  return (
    <BusinessLayout
      title="글로벌·번역·AI콘텐츠"
      hook="글로벌 산업, 한국이 함께합니다"
      subHook="AI툴을 활용한 영상·음성·이미지 콘텐츠부터 다국어 번역, 홍보·마케팅·기획까지 글로벌 확장을 연결합니다"
      description={description}
      diagram={diagram}
      services={[
        "기술문서 및 산업 매뉴얼 전문 번역",
        "교육/실습 자료 번역 및 현지화",
        "영상 자막 번역, 더빙 및 음성 콘텐츠 생성",
        "AI 툴 기반 이미지/영상/홍보 콘텐츠 기획 및 제작",
        "글로벌 B2B 사업 제안서 기획 및 피칭 준비 지원",
        "해외 진출용 토탈 홍보/마케팅 에셋 패키징"
      ]}
      targets={[
        { target: "기업", desc: "해외 진출을 위한 홍보자료, 기술문서 번역 및 제안 대응이 필요한 기업" },
        { target: "기관/교육생", desc: "내국인 뿐 아닌 외국인 대상 다국어 안내 및 학습 자료가 필요한 거점" },
        { target: "관리자 조직", desc: "운영 체계 문서화 및 다국어 매뉴얼, 교육 콘텐츠 확산이 필요한 곳" },
        { target: "해외 역수출 파트너", desc: "한국의 레퍼런스를 모델로 자국에 서비스하고자 하는 파트너" }
      ]}
      costs={[
        { item: "기술문서 전문 번역", cost: "50만원 ~ 500만원" },
        { item: "교육자료 번역 패키지", cost: "100만원 ~ 1,000만원" },
        { item: "영상 자막 초벌 및 감수", cost: "30만원 ~ 300만원" },
        { item: "이미지·홍보 에셋 제작", cost: "100만원 ~ 1,500만원" },
        { item: "AI 음성/영상 콘텐츠", cost: "100만원 ~ 3,000만원" },
        { item: "글로벌 제안서 및 마케팅", cost: "500만원 ~ 5,000만원" },
        { item: "해외 현지 사업 Full 패키지", cost: "1,000만원 ~ 5,000만원 이상" }
      ]}
      differentiations={[
        "텍스트 번역만이 아니라 고품질 멀티미디어(영상·음성·이미지) 콘텐츠 제작까지 수행",
        "AI의 할루시네이션 방지 및 AI 윤리와 현지 보안(Compliance)을 고려한 신뢰 높은 자료",
        "단순 리소스 창출을 넘어 글로벌 홍보 플랫폼 구축 및 사업 제안 성과 등 영업 파이프라인으로 연결"
      ]}
      ctaText="글로벌 콘텐츠 및 번역 서비스 문의하기"
      bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
      contentImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    />
  );
};
