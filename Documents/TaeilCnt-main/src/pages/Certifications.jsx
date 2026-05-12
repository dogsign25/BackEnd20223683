import React from 'react';

const licenses = [
  { date: "2023. 12. 19", title: "사업자 등록증", detail: "각자대표", type: "License" },
  { date: "2022. 11. 21", title: "건설업 등록증", detail: "철근·콘크리트 공사업", type: "Construction" },
  { date: "2022. 11. 21", title: "건설업 등록증", detail: "도장·습식·방수공사업", type: "Construction" },
  { date: "2022. 11. 21", title: "건설업 등록증", detail: "구조물해체·비계공사업", type: "Construction" },
  { date: "1992. 08. 31", title: "건설업 등록증", detail: "철근·콘크리트 공사업", type: "History" },
  { date: "2014. 03. 11", title: "건설업 등록증", detail: "미장·방수·조적 공사업", type: "Construction" },
  { date: "2015. 08. 26", title: "건설업 등록증", detail: "비계·구조물 해체 공사", type: "Construction" },
];

const certifications = [
  { date: "2024. 01. 30", title: "소프트웨어사업자확인서", category: "IT" },
  { date: "2023. 10. 26", title: "성과공유기업확인서", category: "Management" },
  { date: "2023. 07. 17", title: "안전보건경영시스템인증서", category: "ISO 45001:2018" },
  { date: "2023. 04. 13", title: "중소기업확인서", category: "Management" },
  { date: "2023. 01. 09", title: "벤처기업확인서", category: "Innovation" },
  { date: "2022. 12. 14", title: "가족친화기업인증서", category: "Culture" },
  { date: "2022. 11. 16", title: "근무혁신우수기업선정서", category: "Culture" },
  { date: "2022. 10. 26", title: "경영혁신형 중소기업 확인서", category: "Main-Biz" },
  { date: "2022. 10. 01", title: "인재육성형중소기업지정서", category: "Management" },
  { date: "2022. 05. 09", title: "품질경영시스템인증서", category: "ISO 9001:2015" },
  { date: "2022. 05. 09", title: "환경경영시스템인증서", category: "ISO 14001:2015" },
  { date: "2017. 09. 15", title: "좋은일자리기업인증서", category: "Employment" },
];

function Certifications() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 타이틀 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-24">
        <span className="text-emerald-600 text-[18px] tracking-[0.2em] uppercase mb-4 block font-light">Certifications</span>
        <h2 className="text-[56px] font-normal text-slate-900 tracking-[-0.04em]">
          검증된 기술력으로 <br />
          <span className="text-slate-400">최상의 가치를 증명합니다.</span>
        </h2>
      </section>

      {/* 업·면허 섹션 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-32">
        <div className="flex items-center gap-6 mb-12">
          <h3 className="text-[28px] font-normal text-slate-800">업·면허</h3>
          <div className="flex-1 h-[1px] bg-slate-100"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {licenses.map((item, idx) => (
            <div key={idx} className="p-8 border border-slate-100 hover:border-emerald-500/30 transition-all bg-slate-50/30">
              <span className="text-emerald-600 text-[14px] font-normal mb-3 block italic">{item.date}</span>
              <h4 className="text-[22px] font-normal text-slate-800 mb-2">{item.title}</h4>
              <p className="text-[16px] text-slate-400 font-light">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 기업 인증 섹션 */}
      <section className="max-w-[1600px] mx-auto px-12">
        <div className="flex items-center gap-6 mb-12">
          <h3 className="text-[28px] font-normal text-slate-800">인증서</h3>
          <div className="flex-1 h-[1px] bg-slate-100"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((item, idx) => (
            <div key={idx} className="group relative p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[11px] font-normal mb-4 rounded">
                    {item.category}
                  </span>
                  <h4 className="text-[19px] font-normal text-slate-700 leading-snug group-hover:text-slate-900 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <span className="text-[14px] text-slate-300 mt-6 font-light">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Certifications;