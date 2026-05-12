import React from 'react';

const jobCategories = [
  {
    title: "현장관리",
    subtitle: "Construction Management",
    description: "건설 현장의 공정, 품질, 안전을 총괄하며 최상의 결과물을 만들어냅니다.",
    details: ["공정 계획 수립 및 관리", "현장 품질 관리 및 시공 감독", "안전 관리 시스템 운영"]
  },
  {
    title: "공무/견적",
    subtitle: "Construction Administration",
    description: "프로젝트의 예산 수립부터 계약 관리까지 원활한 사업 진행을 지원합니다.",
    details: ["내역 산출 및 견적 수립", "계약 관리 및 외주 구매", "원가 관리 및 정산 업무"]
  },
  {
    title: "기술지원 & IT",
    subtitle: "Technical Support & IT",
    description: "스마트 건설 시스템과 AIoT 기술을 도입하여 현장의 디지털 전환을 선도합니다.",
    details: ["스마트 안전 관제 시스템 운영", "현장 데이터 수집 및 AI 분석 지원", "사내 보안 및 네트워크 관리"]
  },
  {
    title: "경영지원",
    subtitle: "Corporate Support",
    description: "기업의 지속 가능한 성장을 위한 인사, 총무, 회계 업무를 수행합니다.",
    details: ["인사제도 기획 및 채용", "ESG 경영 지표 관리", "자산 관리 및 재무 회계"]
  }
];

function JobIntroduction() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 타이틀 */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <h2 className="text-[48px] font-bold text-slate-900 tracking-tight mb-6">직무소개</h2>
        <p className="text-[20px] text-slate-500 font-light leading-relaxed">
          최고의 기술력과 열정으로 미래를 설계하는 <br />
          분야별 전문가들이 모여 혁신을 실현하고 있습니다.
        </p>
      </section>

      {/* 직무 카드 그리드 */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {jobCategories.map((job, idx) => (
            <div key={idx} className="group border-b border-slate-100 pb-12">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-emerald-500 text-[14px] font-medium tracking-widest uppercase mb-2 block">
                    {job.subtitle}
                  </span>
                  <h3 className="text-[32px] font-normal text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {job.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 text-[17px] font-light leading-relaxed">
                  {job.description}
                </p>

                <div className="bg-slate-50 p-8 rounded-sm">
                  <h4 className="text-[15px] font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-slate-400"></span>
                    주요 수행 업무
                  </h4>
                  <ul className="space-y-3">
                    {job.details.map((detail, i) => (
                      <li key={i} className="text-slate-500 text-[15px] font-light flex items-start gap-2">
                        <span className="text-emerald-400 mt-[2px]">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 인재상 연결 배너 */}
      <section className="max-w-[1200px] mx-auto px-6 mt-32">
        <div className="bg-slate-900 py-16 px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-white text-[24px] font-normal mb-2">
              여러분의 열정으로 함께 성장하고 싶습니다.
            </h3>
            <p className="text-slate-400 font-light">
              나눔의 가치를 실천하고 미래를 개척할 인재를 기다립니다.
            </p>
          </div>
          <button className="px-10 py-4 bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors cursor-pointer">
            채용공고 확인하기
          </button>
        </div>
      </section>
    </main>
  );
}

export default JobIntroduction;