import React from 'react';

const projects = [
  {
    id: 1,
    title: "수원연무동 주상복합",
    client: "HL 디앤아이한라 주식회사",
    builder: "HL 디앤아이한라 주식회사",
    scale: "대지면적 : 6,781m2 건축면적 : 4,269m2 연면적 : 53,385m2 지하1층~지상28층",
    period: "2024.05.22 ~ 2026.05.31",
    status: "진행"
  },
  // ... 나머지 주택 데이터들
];

function Housing() {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group border border-slate-100 p-10 hover:border-emerald-200 transition-all hover:bg-slate-50/50">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[12px] font-normal uppercase tracking-wider">Housing</span>
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
      
      {/* 페이지네이션 */}
      <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">«</button>
        <button className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center text-[15px] cursor-pointer">1</button>
        <button className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">»</button>
      </div>
    </div>
  );
}

export default Housing;