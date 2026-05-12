import React from 'react';

// 추후 데이터가 들어올 자리입니다.
const projects = [
  /* 예시 데이터 구조:
  {
    id: 1,
    title: "OO 타워 신축공사",
    client: "(주)건설",
    builder: "OO건설",
    scale: "지하 7층 ~ 지상 55층",
    period: "2024.01.01 ~ 2028.12.31",
    status: "진행"
  }
  */
];

function Highrise() {
  return (
    <div className="animate-fadeIn">
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group border border-slate-100 p-10 hover:border-emerald-200 transition-all hover:bg-slate-50/50">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-slate-800 text-white text-[12px] font-normal uppercase tracking-wider">High-Rise</span>
                    {project.status === "진행" && (
                      <span className="text-orange-500 text-[13px] font-normal flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                        진행중
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
        </div>
      ) : (
        <div className="py-40 text-center border border-dashed border-slate-200 rounded-lg">
          <p className="text-slate-400 font-light text-[18px]">등록된 초고층 프로젝트 데이터가 없습니다.</p>
        </div>
      )}
    </div>
  );
}

export default Highrise;