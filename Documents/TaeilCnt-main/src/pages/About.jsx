import OptimizedImage from "../components/OptimizedImage"; // 기존에 만드신 컴포넌트

export default function About() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 타이틀 섹션 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-24">
        <div className="border-b border-slate-100 pb-12">
          <span className="text-emerald-600 text-[18px] tracking-[0.2em] uppercase mb-4 block">
            CEO Message
          </span>
          <h2 className="text-[56px] font-normal text-slate-900 leading-[1.1] tracking-[-0.04em]">
            신뢰와 기술로 <br />
            <span className="text-slate-400">더 나은 미래를 건설합니다.</span>
          </h2>
        </div>
      </section>

      {/* 본문 콘텐츠 섹션 */}
      <section className="max-w-[1600px] mx-auto px-12">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* 왼쪽: 이미지 영역 (정갈한 사각형 배치) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] bg-slate-50 overflow-hidden group">
              <div className="absolute inset-0 bg-slate-200 animate-pulse group-hover:hidden" />
              {/* 실제 이미지가 들어갈 자리 */}
              <div className="w-full h-full bg-[#f8fafc] flex items-center justify-center text-slate-300 text-[18px]">
                CEO Image or Office View
              </div>
              {/* 이미지 위 은은한 레이어 */}
              <div className="absolute inset-0 border-[20px] border-white/10" />
            </div>
            {/* 사인(Signature) 스타일 */}
            <div className="mt-8 text-right">
              <p className="text-slate-400 text-[16px] mb-2 uppercase tracking-widest">President & CEO</p>
              <h4 className="text-[32px] font-normal text-slate-800 tracking-tighter">대표이사 홍 길 동</h4>
            </div>
          </div>

          {/* 오른쪽: 인사말 본문 (글씨 크게, 볼드 없이 정갈하게) */}
          <div className="lg:col-span-7 pt-10">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-[32px] text-emerald-900 font-normal leading-snug tracking-tight">
                  태일씨앤티는 1994년 설립 이래 <br />
                  철근·콘크리트 시공의 정점(頂點)을 향해 달려왔습니다.
                </h3>
                <div className="w-16 h-[1px] bg-emerald-500" />
              </div>

              <div className="space-y-8 text-slate-600 text-[20px] font-light leading-[1.8] tracking-tight">
                <p>
                  우리가 짓는 모든 건축물의 기초는 단순한 콘크리트가 아닙니다. 
                  지난 30여 년간 쌓아온 현장의 노하우와 안전에 대한 타협 없는 원칙, 
                  그리고 고객과의 약속이 태일의 진짜 기초입니다.
                </p>
                
                <p>
                  급변하는 건설 환경 속에서도 우리는 최신 공법 연구를 멈추지 않으며, 
                  디지털 기술을 접목한 정밀 시공으로 업계의 새로운 기준을 제시하고 있습니다. 
                  사람이 머무는 공간이기에, 우리는 보이지 않는 곳까지 완벽함을 추구합니다.
                </p>

                <p>
                  태일씨앤티의 기술력은 단순히 건물을 올리는 것에 그치지 않고, 
                  그 안에서 삶을 영위할 사람들의 안전과 행복을 지탱하는 가치가 될 것입니다. 
                  언제나 변치 않는 정직한 시공으로 보답하겠습니다.
                </p>
              </div>

              {/* 하단 강조 문구 (Box 디자인) */}
              <div className="pt-12 border-t border-slate-100 flex gap-8 items-start">
                <span className="text-[64px] leading-none text-emerald-100 font-serif">“</span>
                <p className="text-[22px] text-slate-500 font-light italic leading-relaxed">
                  기술에는 한계가 있을 수 있으나, <br />
                  품질에 대한 진심에는 한계가 없어야 합니다.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

