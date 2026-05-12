import React from 'react';

const historyData = [
  {
    year: "2025",
    items: [
      { date: "02", title: "Westin Seoul Parnas 리모델링공사", category: "수주" },
      { date: "02", title: "용인 Cluster 1기 OBL", category: "수주" },
      { date: "05", title: "업무시설", category: "수주" },
      { date: "06", title: "다이소 세종 온라인센터", category: "수주" },
      { date: "07", title: "물류창고", category: "수주" },
      { date: "08", title: "수주 진행중", category: "수주" },
    ]
  },
  {
    year: "2021",
    items: [
      { date: "04", title: "[한라] 부천 소사본동 주상복합 신축공사", category: "수주" },
      { date: "04", title: "[CJ] CJ제일제당 논산공장 COOKIT 공장 신축공사", category: "수주" },
      { date: "07", title: "[삼성엔지니어링] 평택전자 P3 대기방지 신축공사", category: "수주" },
    ]
  },
  {
    year: "2020",
    items: [
      { date: "01", title: "[한라] 숭인동 오피스텔 신축공사", category: "수주" },
      { date: "02", title: "[삼성물산] 판교 알파돔 6-1블럭 중 2차", category: "수주" },
      { date: "03", title: "[삼성ENG] P2-PJT UT P2L PH2,3 철근콘크리트 공사", category: "수주" },
      { date: "03", title: "[삼성물산] P2-PJT FAB P2L 하층서편마감 RC공사 3-1공구", category: "수주" },
      { date: "04", title: "[GS건설] 브라이튼 여의도 복합시설 신축공사 1공구", category: "수주" },
      { date: "07", title: "[삼성ENG] P3-154KV 변전소 신축공사", category: "수주" },
    ]
  },
  {
    year: "2019",
    items: [
      { date: "10", title: "인사제도 개편 (다면평가 외)", category: "HR" },
      { date: "12", title: "조직개편 (투자기획실 신설)", category: "HR" },
      { date: "07", title: "자체 서버 구축 (인프라)", category: "IT" },
      { date: "09", title: "홈페이지 개발완료", category: "IT" },
      { date: "01", title: "[삼성물산] 판교 알파돔 6-1 블럭 중 1차", category: "수주" },
      { date: "09", title: "태경 법인 및 3호 투자 조합 설립", category: "투자" },
    ]
  },
  {
    year: "2018",
    items: [
      { date: "01", title: "기술보증기금 벤처기업 인증", category: "인증" },
      { date: "03", title: "[국세청장] 모범납세자 표창", category: "표창" },
      { date: "11", title: "[국토교통부장관] 건설기능인의 날 표창", category: "표창" },
      { date: "01", title: "[삼성물산] 평택 P2-PJT FAB", category: "수주" },
      { date: "06", title: "[한라] 현대백화점 신사옥", category: "수주" },
      { date: "12", title: "[한라] 삼원특수지 사옥", category: "수주" },
    ]
  },
  {
    year: "2017",
    items: [
      { date: "08", title: "ISO 9001, 14001 / OHSAS 18001 인증", category: "인증" },
      { date: "09", title: "[신용보증기금] 좋은일자리 기업선정", category: "수상" },
      { date: "03", title: "[슈프림건설] 청라 디오스텔", category: "수주" },
      { date: "04", title: "[삼성물산] 평택 P-PJT FAB 서편 마감공사", category: "수주" },
      { date: "12", title: "[삼성ENG] 평택 전자 P1-PJT UT/CT PH4", category: "수주" },
    ]
  },
  {
    year: "2013 ~ 2016",
    items: [
      { date: "16.09", title: "태경 → (주)태경이노베이션 법인전환", category: "법인" },
      { date: "15.01", title: "태경 설립", category: "설립" },
      { date: "14.12", title: "기업부설연구소 인정 승인", category: "인증" },
      { date: "13.08", title: "(주)태일씨앤티 사명변경 및 김경수 대표이사 취임", category: "사명변경" },
      { date: "94.04", title: "지인개발 설립", category: "설립" },
    ]
  }
];

function History() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 타이틀 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-24">
        <span className="text-emerald-600 text-[18px] tracking-[0.2em] uppercase mb-4 block">History</span>
        <h2 className="text-[56px] font-normal text-slate-900 tracking-[-0.04em]">
          태일씨앤티가 걸어온 <br />
          <span className="text-slate-400">성장의 기록입니다.</span>
        </h2>
      </section>

      {/* 연혁 타임라인 섹션 */}
      <section className="max-w-[1600px] mx-auto px-12">
        <div className="relative">
          {/* 수직선 */}
          <div className="absolute left-[150px] top-0 bottom-0 w-[1px] bg-slate-200 hidden md:block"></div>

          {historyData.map((group, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-32 relative">
              {/* 연도 표시 */}
              <div className="md:w-[150px] mb-8 md:mb-0">
                <span className="text-[40px] font-normal text-slate-900 sticky top-40">
                  {group.year}
                </span>
              </div>

              {/* 해당 연도 아이템 리스트 */}
              <div className="md:pl-24 flex-1">
                <div className="grid gap-y-10">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="relative flex flex-col md:flex-row md:items-center group">
                      {/* 타임라인 포인트 */}
                      <div className="absolute left-[-101px] top-[14px] w-3 h-3 rounded-full bg-white border-2 border-emerald-500 z-10 hidden md:block group-hover:bg-emerald-500 transition-colors"></div>
                      
                      <div className="flex items-center gap-6">
                        <span className="text-[18px] font-normal text-emerald-600 w-12 italic">
                          {item.date}
                        </span>
                        <div className="flex flex-col md:flex-row md:items-center gap-3">
                          <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[12px] font-normal rounded tracking-tighter w-fit">
                            {item.category}
                          </span>
                          <p className="text-[20px] font-light text-slate-700 leading-tight">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default History;