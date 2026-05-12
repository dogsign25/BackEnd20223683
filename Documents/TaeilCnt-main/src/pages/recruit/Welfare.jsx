import React from 'react';

const welfareData = [
  {
    category: "생활 및 교육 지원",
    items: [
      { title: "자녀 학자금 지원", desc: "자녀의 안정적인 학업을 위한 학자금 지원" },
      { title: "대학원 교육 지원", desc: "아주대 경영대학원 등 자기계발을 위한 교육비 지원" },
      { title: "전문 교육 지원", desc: "직무/직급/리더십 교육 및 워크숍 전액 지원" },
      { title: "기술인 지원", desc: "건설기술인 연회비 및 승급교육 일체 지원" }
    ]
  },
  {
    category: "안정 및 상조",
    items: [
      { title: "퇴직연금 운영", desc: "안정적인 노후를 위한 퇴직연금(DB형) 가입" },
      { title: "태일 상조회", desc: "경조사 발생 시 상조회 운영을 통한 지원" },
      { title: "청년 지원", desc: "청년재직자 내일채움공제 가입 지원" }
    ]
  },
  {
    category: "여가 및 문화",
    items: [
      { title: "휴양시설 이용", desc: "전국 대명리조트 콘도/회원권 보유 및 이용 지원" },
      { title: "해외연수 제도", desc: "우수사원 및 최우수현장 대상 해외연수 기회 제공" },
      { title: "기념품 지급", desc: "근로자의 날 및 창립기념일 기념 선물 증정" }
    ]
  },
  {
    category: "조직 및 휴가",
    items: [
      { title: "유연한 연차 사용", desc: "반차 및 반반차 제도로 효율적인 시간 관리" },
      { title: "사내 동아리 지원", desc: "직급별 모임 및 사내 동아리 활동비 지원" }
    ]
  }
];

function Welfare() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 섹션 */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <h2 className="text-[48px] font-bold text-slate-900 tracking-tight mb-6">복리후생</h2>
        <p className="text-[20px] text-slate-500 font-light leading-relaxed">
          태일인은 회사의 소중한 자산입니다. <br />
          일과 삶의 균형을 위해 세심하고 다양한 복지 제도를 운영하고 있습니다.
        </p>
      </section>

      {/* 복리후생 리스트 섹션 */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 gap-20">
          {welfareData.map((group, idx) => (
            <div key={idx} className="relative">
              {/* 카테고리 제목 */}
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-[24px] font-bold text-slate-900 whitespace-nowrap">{group.category}</h3>
                <div className="h-[1px] w-full bg-slate-100"></div>
              </div>

              {/* 해당 카테고리 아이템 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((item, i) => (
                  <div key={i} className="p-8 border border-slate-50 bg-slate-50 hover:bg-white hover:border-emerald-500 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover:bg-white"></div>
                    </div>
                    <h4 className="text-[18px] font-bold text-slate-900 mb-3 break-keep">{item.title}</h4>
                    <p className="text-[14px] text-slate-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 하단 배너 */}
      <section className="max-w-[1200px] mx-auto px-6 mt-32">
        <div className="bg-emerald-500 py-16 px-12 rounded-sm text-center">
          <h3 className="text-white text-[28px] font-bold mb-4">
            태일씨앤티의 복지는 계속해서 진화합니다.
          </h3>
          <p className="text-emerald-100 font-light">
            임직원 여러분의 목소리에 귀 기울여 더 행복한 일터를 만들어 가겠습니다.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Welfare;