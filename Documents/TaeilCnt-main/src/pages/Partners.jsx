import React from 'react';

const partners = [
  {
    category: "Major Partners",
    list: [
      { name: "삼성물산", desc: "Samsung C&T" },
      { name: "삼성엔지니어링", desc: "Samsung Engineering" },
      { name: "현대건설", desc: "Hyundai E&C" },
      { name: "현대엔지니어링", desc: "Hyundai Engineering" },
      { name: "GS건설", desc: "GS E&C" },
      { name: "대우건설", desc: "Daewoo E&C" },
      { name: "대림산업", desc: "DL E&C" },
      { name: "롯데건설", desc: "Lotte E&C" },
    ]
  },
  {
    category: "Key Partners",
    list: [
      { name: "HL디앤아이한라", desc: "HL D&I Halla" },
      { name: "CJ대한통운", desc: "CJ Logistics" },
      { name: "신세계건설", desc: "Shinsegae E&C" },
      { name: "계룡건설", desc: "Kyeryong" },
      { name: "벽산엔지니어링", desc: "Byucksan Engineering" },
      { name: "요진건설산업", desc: "Yojin" },
      { name: "동부건설", desc: "Dongbu" },
      { name: "고려개발", desc: "Koryo" },
    ]
  },
  {
    category: "General Partners",
    list: [
      { name: "슈프림건설", desc: "Supreme" },
      { name: "갑진종합건설", desc: "Gapjin" },
      { name: "일군토건", desc: "Ilgun" },
      { name: "TK케미컬", desc: "TK Chemical" },
      { name: "BYC", desc: "BYC" },
      { name: "GS네오텍", desc: "GS Neotek" },
      { name: "삼성중공업", desc: "Samsung Heavy Industries" },
    ]
  }
];

function Partners() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 타이틀 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-24">
        <span className="text-emerald-600 text-[18px] tracking-[0.2em] uppercase mb-4 block">Partners</span>
        <h2 className="text-[56px] font-normal text-slate-900 tracking-[-0.04em]">
          신뢰를 바탕으로 <br />
          <span className="text-slate-400">최고의 파트너와 함께합니다.</span>
        </h2>
      </section>

      {/* 파트너 그리드 섹션 */}
      <section className="max-w-[1600px] mx-auto px-12">
        <div className="flex flex-col gap-32">
          {partners.map((group, idx) => (
            <div key={idx}>
              {/* 카테고리 구분선 */}
              <div className="flex items-center gap-6 mb-12">
                <h3 className="text-[20px] font-normal text-slate-800 whitespace-nowrap italic tracking-wider">
                  {group.category}
                </h3>
                <div className="w-full h-[1px] bg-slate-100"></div>
              </div>

              {/* 로고 그리드 */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
                {group.list.map((partner, pIdx) => (
                  <div 
                    key={pIdx} 
                    className="aspect-[3/2] border border-slate-100 flex flex-col items-center justify-center p-6 hover:border-emerald-200 hover:shadow-sm transition-all group"
                  >
                    {/* 실제 로고 이미지가 있다면 <img src={...} /> 로 대체 */}
                    <div className="text-center">
                      <p className="text-[18px] font-normal text-slate-700 mb-1 group-hover:text-emerald-700 transition-colors">
                        {partner.name}
                      </p>
                      <p className="text-[12px] font-light text-slate-300 uppercase tracking-tighter">
                        {partner.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 하단 문구 */}
      <section className="mt-40 text-center">
        <p className="text-slate-400 font-light text-[18px]">
          태일씨앤티는 수많은 프로젝트를 통해 파트너십의 가치를 증명해왔습니다.
        </p>
      </section>
    </main>
  );
}

export default Partners;