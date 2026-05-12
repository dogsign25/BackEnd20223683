import React from 'react';

const talentCoreValues = [
  {
    title: "책임과 성장",
    subtitle: "Responsibility & Growth",
    desc: "책임과 배움을 반복하며 성장한다",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "정직과 소통",
    subtitle: "Honesty & Communication",
    desc: "원칙에 따라 정직하게 소통하여 신뢰를 만든다",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "공동체 의식",
    subtitle: "Community Spirit",
    desc: "공동체를 강화하여 함께 어려움을 극복한다",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "더 나은 방식",
    subtitle: "Better Way",
    desc: "관심 있게 관찰하고 더 나은 방식을 찾는다",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

function HrSystem() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 헤더 섹션 */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24 text-center">
        <span className="text-emerald-500 font-medium tracking-widest uppercase mb-4 block">HR System</span>
        <h2 className="text-[48px] font-bold text-slate-900 tracking-tight mb-6 text-center">인사제도</h2>
        <p className="text-[20px] text-slate-500 font-light max-w-[750px] mx-auto leading-relaxed">
          태일씨앤티는 구성원의 전문성과 인성을 중시하며, <br />
          함께 성장하고 소통하는 조직 문화를 지향합니다.
        </p>
      </section>

      {/* 1. 인재상 섹션 (이미지 다이어그램 기반) */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="h-[1px] w-12 bg-slate-200"></div>
          <h3 className="text-[28px] font-bold text-slate-900">인재상</h3>
          <div className="h-[1px] w-12 bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {talentCoreValues.map((item, idx) => (
            <div key={idx} className="bg-white p-12 md:p-16 hover:bg-slate-50 transition-colors group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors duration-500">
                  {item.icon}
                </div>
                <span className="text-emerald-500 text-[13px] font-bold tracking-wider uppercase mb-2">{item.subtitle}</span>
                <h4 className="text-[26px] font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 font-light leading-relaxed break-keep">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 평가 및 보상제도 섹션 (기존 내용 유지) */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* 평가제도 */}
          <div className="bg-white p-10 border border-slate-100 shadow-sm">
            <h3 className="text-[24px] font-bold text-slate-900 mb-10 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[14px]">01</span>
              평가제도
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-emerald-500 font-bold text-[18px] pt-1">01</div>
                <div>
                  <h4 className="text-[18px] font-bold mb-2">성과 기반 평가</h4>
                  <p className="text-slate-500 font-light text-[15px]">개인별 MBO(목표관리) 설정을 통한 객관적이고 공정한 성과 측정</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-emerald-500 font-bold text-[18px] pt-1">02</div>
                <div>
                  <h4 className="text-[18px] font-bold mb-2">역량 다면 평가</h4>
                  <p className="text-slate-500 font-light text-[15px]">직무 전문성 및 조직 융화도를 판단하는 입체적 평가</p>
                </div>
              </div>
            </div>
          </div>

          {/* 보상제도 */}
          <div className="bg-slate-900 p-10 text-white relative overflow-hidden flex flex-col justify-between">
            <h3 className="text-[24px] font-bold mb-10 flex items-center gap-3 relative z-10">
              <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[14px]">02</span>
              보상제도
            </h3>
            <ul className="space-y-6 relative z-10 mb-4">
              <li className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-light text-slate-400">경쟁력 있는 연봉</span>
                <span className="font-bold text-emerald-400 uppercase tracking-wider text-sm">Industry Top</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-light text-slate-400">성과 인센티브</span>
                <span className="font-bold text-emerald-400 uppercase tracking-wider text-sm">Profit Share</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-light text-slate-400">우수사원/장기근속 포상</span>
                <span className="font-bold text-emerald-400 uppercase tracking-wider text-sm">Refresh & Reward</span>
              </li>
            </ul>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default HrSystem;