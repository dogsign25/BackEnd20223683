import React from 'react';

const newsData = [
  {
    id: 1,
    category: "수상",
    title: "[수상] 삼성물산 공사수행 역량평가 수행우수사 선정, 최우수상 수상",
    date: "2026.03.23",
    description: "태일씨앤티는 2026년 03월 23일 삼성물산(주) 건설부문으로부터 '25년 공사수행 역량평가 수행우수사'로 선정되어 최우수상을 수여 받았습니다.",
    isNew: true
  },
  {
    id: 2,
    category: "행사소식",
    title: "[행사소식] 한국청소년육성회 금천지구회 모범청소년 장학금 수여 행사 소식",
    date: "2025.12.16",
    description: "태경이노베이션에서 한국청소년육성회 금천지구회 모범청소년 장학금 수여 행사를 진행 하였습니다. (장소: 금천구청)",
    isNew: false
  },
  {
    id: 3,
    category: "행사소식",
    title: "[행사소식] 김경수 대표님 한국산업단지경영자연합회 서울 6대 회장 취임",
    date: "2025.12.09",
    description: "김경수 대표님께서 12월 9일 한국산업단지경영자연합회서울(KIBA서울) 제6대 회장에 취임하셨습니다. G밸리 혁신과 협력을 위한 본격적인 활동을 시작하셨습니다.",
    isNew: false
  }
];

function News() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 헤더 섹션 */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16">
        <span className="text-emerald-600 text-[16px] tracking-[0.2em] uppercase mb-4 block font-light">
          PR Center
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-[48px] font-normal text-slate-900 tracking-[-0.04em]">NEWS</h2>
          <p className="text-slate-400 pb-2">전체 <span className="text-slate-900 font-medium">180</span>건</p>
        </div>
      </section>

      {/* 검색 필터 섹션 */}
      <section className="max-w-[1200px] mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-2 p-6 bg-slate-50 border border-slate-100">
          <select className="px-4 py-2 bg-white border border-slate-200 text-[14px] outline-none focus:border-emerald-500">
            <option>전체</option>
            <option>제목</option>
            <option>내용</option>
          </select>
          <div className="flex-1 min-w-[200px] relative">
            <input 
              type="text" 
              placeholder="검색어를 입력하세요"
              className="w-full px-4 py-2 bg-white border border-slate-200 text-[14px] outline-none focus:border-emerald-500"
            />
          </div>
          <button className="px-8 py-2 bg-slate-900 text-white text-[14px] hover:bg-emerald-700 transition-colors cursor-pointer">
            검색
          </button>
        </div>
      </section>

      {/* 뉴스 리스트 섹션 */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col border-t-2 border-slate-900">
          {newsData.map((news) => (
            <div 
              key={news.id} 
              className="group py-10 border-b border-slate-100 flex flex-col md:flex-row gap-6 md:items-center hover:bg-slate-50/50 transition-colors cursor-pointer px-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-emerald-600 text-[13px] font-medium uppercase tracking-wider">
                    {news.category}
                  </span>
                  {news.isNew && (
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                </div>
                <h3 className="text-[20px] md:text-[22px] font-normal text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {news.title}
                </h3>
                <p className="text-slate-500 font-light line-clamp-2 leading-relaxed max-w-[900px]">
                  {news.description}
                </p>
              </div>
              <div className="text-slate-300 font-light text-[15px] md:text-right shrink-0">
                {news.date}
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="mt-16 flex justify-center items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center border border-slate-100 text-slate-400 hover:bg-slate-50 cursor-pointer">«</button>
          {[1, 2, 3, 4, 5].map(num => (
            <button 
              key={num}
              className={`w-10 h-10 flex items-center justify-center text-[15px] cursor-pointer ${num === 1 ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-slate-50 border border-slate-100'}`}
            >
              {num}
            </button>
          ))}
          <button className="w-10 h-10 flex items-center justify-center border border-slate-100 text-slate-400 hover:bg-slate-50 cursor-pointer">»</button>
        </div>
      </section>
    </main>
  );
}

export default News;