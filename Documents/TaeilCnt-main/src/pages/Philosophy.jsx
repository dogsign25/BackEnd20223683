import React from 'react';

function Philosophy() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 헤더 섹션 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-24">
        <div className="border-b border-slate-100 pb-12">
          <span className="text-emerald-600 text-[18px] tracking-[0.2em] uppercase mb-4 block font-light">
            Management Philosophy
          </span>
          <h2 className="text-[56px] font-normal text-slate-900 leading-[1.1] tracking-[-0.04em]">
            전문건설산업의 <br />
            <span className="text-slate-400">새로운 기준을 세웁니다.</span>
          </h2>
        </div>
      </section>

      {/* 비전 섹션 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-32">
        <div className="bg-slate-50 p-16 md:p-24 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-emerald-600 text-[20px] mb-6 block font-normal">Vision</span>
            <h3 className="text-[36px] md:text-[42px] font-normal text-slate-800 leading-[1.4] tracking-tight max-w-4xl">
              시대변화에 적응하여 누구보다 앞선 기술로 <br />
              전문건설산업의 선도적 역할을 해 나갈 것입니다.
            </h3>
          </div>
          {/* 배경 대형 텍스트 장식 */}
          <div className="absolute right-[-5%] bottom-[-10%] text-[200px] text-slate-100 font-normal select-none pointer-events-none">
            VISION
          </div>
        </div>
      </section>

      {/* 핵심가치 섹션 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-32">
        <div className="mb-12">
          <h3 className="text-[32px] font-normal text-slate-900 tracking-tight">핵심가치</h3>
          <div className="w-12 h-[2px] bg-emerald-500 mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "고객감동 및\n철저한 품질관리", 
              desc: "최고의 품질이 곧 고객의 신뢰라는 믿음으로 완벽한 품질을 보장합니다." 
            },
            { 
              title: "무재해 완벽시공\n철저한 사후관리", 
              desc: "안전을 최우선으로 생각하며, 시공 후에도 끝까지 책임지는 사후관리를 실천합니다." 
            },
            { 
              title: "지속적 기술개발과\n원가절감", 
              desc: "끊임없는 기술 혁신과 효율적인 공정 관리를 통해 경쟁력을 강화합니다." 
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-10 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
              <span className="text-[40px] text-emerald-100 font-normal mb-8 block group-hover:text-emerald-200">0{idx + 1}</span>
              <h4 className="text-[24px] font-normal text-slate-800 mb-6 leading-tight whitespace-pre-line">
                {item.title}
              </h4>
              <p className="text-[18px] text-slate-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 슬로건 섹션 */}
      <section className="max-w-[1600px] mx-auto px-12">
        <div className="mb-12">
          <h3 className="text-[32px] font-normal text-slate-900 tracking-tight">슬로건</h3>
          <div className="w-12 h-[2px] bg-emerald-500 mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            { 
              en: "One", 
              ko: "하나된", 
              desc: "뭉치면 강하다! 하나된 모습으로 나아갈 것입니다." 
            },
            { 
              en: "Innovative", 
              ko: "혁신적인", 
              desc: "우리는 창의적으로 발전해 나갈 것입니다." 
            },
            { 
              en: "Forever", 
              ko: "백년대계", 
              desc: "미래지향적인 계획을 실현할 것입니다." 
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8">
              <div className="w-24 h-24 rounded-full border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-slate-50">
                 <span className="text-[14px] tracking-widest text-emerald-600 uppercase font-normal">{item.en}</span>
              </div>
              <h4 className="text-[28px] font-normal text-slate-800 mb-4">{item.ko}</h4>
              <p className="text-[18px] text-slate-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Philosophy;