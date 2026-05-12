import React from 'react';

const esgDetails = [
  {
    step: "01",
    category: "Environment (환경)",
    color: "text-emerald-500",
    points: ["환경오염 방지", "기후변화, 탄소배출", "자원, 폐기물 관리", "에너지 효율", "생태계 보호"]
  },
  {
    step: "02",
    category: "Social (사회적 책임)",
    color: "text-teal-500",
    points: ["인권, 성평등", "산업안전보건", "데이터 보안 및 고객만족", "지역사회 기여", "공급망 관리"]
  },
  {
    step: "03",
    category: "Governance (지배구조)",
    color: "text-cyan-600",
    points: ["주주 권익 보호", "윤리경영, 반부패", "법령준수", "공정경쟁", "이사회 및 감사"]
  }
];

const activities = [
  {
    type: "기부",
    title: "2024 따뜻한 겨울나기사업 우수기부자 감사패 전달식",
    img: "https://via.placeholder.com/400x500" // 실제 이미지 경로로 교체 필요
  },
  {
    type: "봉사",
    title: "2024 사랑의 김장 연합 대축제",
    img: "https://via.placeholder.com/400x500"
  },
  {
    type: "교육",
    title: "ESG 경영 컨설팅 교육",
    img: "https://via.placeholder.com/400x500"
  }
];

function Management() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 1. 비전 섹션 (이미지 상단 문구 반영) */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="border-l-4 border-emerald-500 pl-8 mb-12">
          <h2 className="text-[42px] font-bold text-slate-900 leading-tight mb-6">
            “기업의 ESG 실천”
          </h2>
          <ul className="text-[18px] text-slate-600 font-light space-y-2">
            <li>• 지속가능한 가치, ESG로 실현합니다</li>
            <li>• 환경을 생각하고, 사회를 배려하며, 투명하게 경영합니다</li>
            <li>• 가치 있는 경영, 모두를 위한 약속</li>
            <li>• 지속가능한 미래, ESG로 연결합니다</li>
            <li>• 기업의 성장은 지구와 함께 가야 합니다</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-10 md:p-16 text-center">
          <h3 className="text-[28px] md:text-[32px] font-normal text-slate-800 leading-snug">
            “지속가능경영”을 위한 <br />
            <span className="font-bold">책임 있는 리더십과 환경을 존중하고 사회적 책임을 다하는 기업</span>
          </h3>
        </div>
      </section>

      {/* 2. ESG 인포그래픽 섹션 */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-emerald-500 px-8 py-4">
            <p className="text-emerald-700 font-medium">
              지속가능성을 달성하기 위한 <br />
              <span className="text-[20px] font-bold text-slate-900">환경, 사회, 지배구조 등 세 가지 비재무적 요소</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {esgDetails.map((item) => (
            <div key={item.step} className="border border-slate-100 p-10 hover:shadow-xl transition-shadow">
              <span className={`text-[40px] font-bold ${item.color} block mb-4`}>{item.step}</span>
              <h4 className="text-[22px] font-bold text-slate-900 mb-8 border-b pb-4">{item.category}</h4>
              <ul className="space-y-3">
                {item.points.map((p, i) => (
                  <li key={i} className="text-slate-500 font-light flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 실천 활동 섹션 (하단 이미지 반영) */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {activities.map((act, idx) => (
            <div key={idx} className="group">
              <div className="mb-6 text-center">
                <h4 className="text-[24px] font-bold text-slate-900 mb-2">{act.type}</h4>
                <p className="text-slate-400 text-[14px]">{act.title}</p>
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-slate-100 mb-4">
                <img 
                  src={act.img} 
                  alt={act.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Management;