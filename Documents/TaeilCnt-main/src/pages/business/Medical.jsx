import React from 'react';

const projects = [
  {
    id: 1,
    title: "만도 NEXT M",
    client: "(주)만도",
    builder: "(주)한라",
    scale: "지하5층, 지상12층 건축면적 2,453.29㎡ 연면적 32,369.78㎡",
    period: "2020.10.27 ~ 2022.08.31",
    status: "완료"
  },
  {
    id: 2,
    title: "텔레칩스사옥 신축공사",
    client: "(주)텔레칩스",
    builder: "(주)한라",
    scale: "지하5층, 지상12층 건축면적 2,342.92㎡ 연면적 30,918.68㎡",
    period: "2020.10.27 ~ 2022.09.26",
    status: "완료"
  },
  {
    id: 3,
    title: "금계초 증축공사 및 백석초 다목적강당 증축공사",
    client: "요진개발(주)",
    builder: "요진건설(주)",
    scale: "초등학교 시설 증축 및 다목적강당 건립",
    period: "2015.11.04 ~ 2016.11.22",
    status: "완료"
  },
  {
    id: 4,
    title: "삼성창원병원 제3관 증축공사",
    client: "삼성창원병원",
    builder: "삼성물산(주)",
    scale: "지하 6층 ~ 지상 9층 연면적 89,649.83㎡ (27,119평)",
    period: "2014.04.30 ~ 2016.05.26",
    status: "완료"
  }
];

function Medical() {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group border border-slate-100 p-10 hover:border-emerald-200 transition-all hover:bg-slate-50/50">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[12px] font-normal uppercase tracking-wider">Medical & Edu</span>
                  {project.status === "진행" && (
                    <span className="text-orange-500 text-[13px] font-normal flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                      공사중
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

      {/* 페이지네이션 */}
      <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">«</button>
        <button className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center text-[15px] cursor-pointer">1</button>
        <button className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer">»</button>
      </div>
      </div>
    </div>
  );
}

export default Medical;