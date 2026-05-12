import React from 'react';

const projects = [
  {
    id: 1,
    title: "Westin Seoul Parnas 리모델링공사",
    client: "파르나스호텔㈜",
    builder: "GS건설(주)",
    scale: "호텔 내부 및 외관 리모델링",
    period: "2025.01.22 ~ 2025.08.31",
    status: "완료"
  },
  {
    id: 2,
    title: "과천지식정보타운 11-3블럭 신축공사",
    client: "(주)다원시스",
    builder: "(주)KCC건설",
    scale: "지하5층, 지상15층 / 연면적 54,170㎡",
    period: "2024.01.23 ~ 2026.02.28",
    status: "진행"
  },
  {
    id: 3,
    title: "가산 데이터센터",
    client: "가산디씨제이브이 주식회사",
    builder: "디엘이앤씨(주)",
    scale: "지하1층, 지상8층 / 연면적 17,351.29㎡",
    period: "2023.11.24 ~ 2025.09.09",
    status: "완료"
  },
  {
    id: 4,
    title: "안성 물류센터 신축공사",
    client: "페블스톤 자산운용",
    builder: "HL 디앤아이한라 주식회사",
    scale: "대지면적 54,266㎡ / 연면적 99,140㎡",
    period: "2023.03.31 ~ 2024.09.30",
    status: "완료"
  },
  {
    id: 5,
    title: "미래인로지스부천 복합물류센터",
    client: "미래인로지스부천피에프브이(주)",
    builder: "(주)한라",
    scale: "지하2층, 지상12층 / 연면적 49,910㎡",
    period: "2022.05.17 ~ 2023.08.31",
    status: "완료"
  },
  {
    id: 6,
    title: "삼성전자(주) P3 154KV 변전소 (Ph.3)",
    client: "삼성전자(주)",
    builder: "삼성엔지니어링(주)",
    scale: "지하1층, 지상4층 / 연면적 47,622.05㎡",
    period: "2022.01.21 ~ 2022.04.30",
    status: "완료"
  }
];

function Etc() {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group border border-slate-100 p-10 hover:border-emerald-200 transition-all hover:bg-slate-50/50">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-teal-600 text-[12px] font-normal uppercase tracking-wider">Etc / Special</span>
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

      <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">«</button>
        <button className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center text-[15px] cursor-pointer">1</button>
        <button className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">»</button>
      </div>
    </div>
  );
}

export default Etc;