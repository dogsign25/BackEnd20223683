import React from 'react';

const projects = [
  {
    id: 1,
    title: "다이소 세종 온라인센터",
    client: "(주)아성다이소",
    builder: "KCC건설",
    scale: "물류 및 유통 판매시설",
    period: "2025.06.01 ~ 2026.09.11",
    status: "진행"
  },
  {
    id: 2,
    title: "판교 알파돔 6-1블럭 복합시설 2차",
    client: "(주)국민은행",
    builder: "삼성물산(주)",
    scale: "지하 7층 ~ 지상 15층 / 연면적 162,745.75㎡",
    period: "2020.02.20 ~ 2021.09.30",
    status: "완료"
  },
  {
    id: 3,
    title: "브라이튼 여의도 복합시설 1공구",
    client: "여의도MBC부지복합개발PFV",
    builder: "GS건설(주)",
    scale: "오피스텔 및 상업시설 / 연면적 246,278.00㎡",
    period: "2020.02.04 ~ 2021.09.30",
    status: "완료"
  },
  {
    id: 4,
    title: "여의도 MBC 개발사업 RC공사 2공구 Precon",
    client: "GS건설(주)",
    builder: "GS건설(주)",
    scale: "지하 6층 ~ 지상 49층 / 연면적 246,370㎡",
    period: "2018.08.08 ~ 2018.11.27",
    status: "완료"
  },
  {
    id: 5,
    title: "서초동 꽃마을 복합시설 (지하층)",
    client: "엠스케위피에프브이",
    builder: "현대엔지니어링(주)",
    scale: "지하 7층 ~ 지상 22층 중 지하층 공사 / 연면적 147,184.69㎡",
    period: "2016.05.26 ~ 2017.09.20",
    status: "완료"
  },
  {
    id: 6,
    title: "마곡럭스나인 오피스텔 C1-2",
    client: "(주)안강건설",
    builder: "(주)일군토건",
    scale: "지하 5층 ~ 지상 14층 / 연면적 17,001.65㎡",
    period: "2015.08.21 ~ 2016.09.30",
    status: "완료"
  }
];

function Retail() {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group border border-slate-100 p-10 hover:border-emerald-200 transition-all hover:bg-slate-50/50">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[12px] font-normal uppercase tracking-wider">Retail</span>
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
                    <span className="text-[13px] text-slate-300 uppercase tracking-widest block mb-1 font-light">Scale</span>
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

        <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">«</button>
        <button className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center text-[15px] cursor-pointer">1</button>
        <button className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">»</button>
      </div>
      </div>
    </div>
  );
}

export default Retail;