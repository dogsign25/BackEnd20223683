import React from 'react';

const projects = [
  {
    id: 1,
    title: "용인 Cluster 1기 OBL",
    client: "에스케이하이닉스(주)",
    builder: "에스케이에코플랜트(주)",
    scale: "반도체 클러스터 기반시설 및 부대시설 공사",
    period: "2025.02.14 ~ 2027.06.30",
    status: "진행"
  },
  {
    id: 2,
    title: "용인 Cluster 1기 공동구",
    client: "에스케이하이닉스(주)",
    builder: "에스케이에코플랜트(주)",
    scale: "반도체 클러스터 내부 공동구 및 배관 인프라",
    period: "2024.10.23 ~ 2027.06.30",
    status: "진행"
  },
  {
    id: 3,
    title: "평택 P5 RC공사 2공구",
    client: "삼성전자(주)",
    builder: "삼성물산(주)",
    scale: "반도체 생산시설(FAB) 5기 골조공사",
    period: "2024.01.25 ~ 2026.04.30",
    status: "진행"
  },
  {
    id: 4,
    title: "평택 P4 RC공사 1공구",
    client: "삼성전자(주)",
    builder: "삼성물산주식회사",
    scale: "반도체 생산시설(FAB) 4기 골조공사",
    period: "2022.03.18 ~ 2023.07.31",
    status: "완료"
  },
  {
    id: 5,
    title: "평택 전자 P3 대기방지 신축공사 (P3장비기초공사)",
    client: "삼성전자(주)",
    builder: "삼성엔지니어링(주)",
    scale: "장비 설치를 위한 기초 토목 및 대기 환경 설비",
    period: "2021.07.22 ~ 2022.04.30",
    status: "완료"
  },
  {
    id: 6,
    title: "평택 FAB 3기 신축공사 RC공사 3공구",
    client: "삼성전자(주)",
    builder: "삼성물산(주)",
    scale: "반도체 생산시설(FAB) 3기 골조공사",
    period: "2020.12.01 ~ 2022.04.30",
    status: "완료"
  }
];

function Plant() {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group border border-slate-100 p-10 hover:border-emerald-200 transition-all hover:bg-slate-50/50"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[12px] font-normal uppercase tracking-wider">
                    Plant
                  </span>
                  {project.status === "진행" && (
                    <span className="text-orange-500 text-[13px] font-normal flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                      현장진행중
                    </span>
                  )}
                </div>
                <h3 className="text-[28px] font-normal text-slate-900 mb-8 group-hover:text-emerald-700 transition-colors cursor-pointer">
                  {project.title}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12">
                  <div>
                    <span className="text-[13px] text-slate-300 uppercase tracking-widest block mb-1 font-light">Client</span>
                    <p className="text-[16px] text-slate-600 font-light">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-[13px] text-slate-300 uppercase tracking-widest block mb-1 font-light">Builder</span>
                    <p className="text-[16px] text-slate-600 font-light">{project.builder}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <span className="text-[13px] text-slate-300 uppercase tracking-widest block mb-1 font-light">Description</span>
                    <p className="text-[16px] text-slate-600 font-light leading-relaxed">{project.scale}</p>
                  </div>
                </div>
              </div>

              <div className="lg:text-right border-t lg:border-t-0 pt-6 lg:pt-0 border-slate-100">
                <span className="text-[13px] text-slate-300 uppercase tracking-widest block mb-1 font-light">Period</span>
                <p className="text-[18px] text-slate-500 font-light italic">{project.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 페이지네이션 (디자인용) */}
      <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">«</button>
        <button className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center text-[15px] cursor-pointer">1</button>
        <button className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">»</button>
      </div>
    </div>
  );
}

export default Plant;