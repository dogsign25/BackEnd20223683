import React, { useState } from 'react';

const faqData = [
  {
    question: "우대 자격증이 있나요?",
    answer: "직군별로 차이가 있으나 공통적으로 정보처리기사/산업기사, 건설현장 관련 자격증 소지자를 우대합니다. 특히 데이터 분석 관련 ADsP나 기술 관련 전문 자격증 보유 시 가산점이 부여됩니다."
  },
  {
    question: "경력 인정 기준은 무엇인가요?",
    answer: "유관 직무에서의 정규직 경력을 원칙으로 하며, 프로젝트 수행 이력이나 기술 스택의 일치성을 종합적으로 검토하여 내부 산정 기준에 따라 경력을 인정해 드립니다."
  },
  {
    question: "졸업예정자도 지원이 가능한가요?",
    answer: "네, 가능합니다. 입사 후 정상 출근에 지장이 없다면 졸업예정자도 동일한 기준으로 지원하실 수 있으며, 학기 중이라면 학사 일정에 대한 사전 협의가 가능합니다."
  },
  {
    question: "수습 기간(3개월) 동안 처우의 차이가 있나요?",
    answer: "태일씨앤티는 수습 기간 동안에도 급여 및 복리후생을 정규직과 동일하게 100% 지급하는 것을 원칙으로 합니다."
  },
  {
    question: "서류전형 시 중요하게 보는 부분은?",
    answer: "직무와 관련된 프로젝트 경험과 본인의 기술적 역량을 어떻게 실제 업무에 적용할 수 있는지를 중점적으로 검토합니다. 화려한 스펙보다는 직무에 대한 진솔한 관심과 성장 가능성을 높게 평가합니다."
  },
  {
    question: "지정양식의 이력서 및 자기소개서를 제출하여야 하는지?",
    answer: "채용 공고에 따라 지정 양식이 있는 경우 해당 양식을 사용해 주시고, 별도 공고가 없는 경우 자유 양식으로 제출 가능합니다. 단, 필수 정보(연락처, 학력, 경력 등)가 누락되지 않도록 유의해 주세요."
  },
  {
    question: "서류 합격자 발표는 언제 이루어 지나요?",
    answer: "보통 접수 마감일로부터 1~2주 이내에 개별 연락(유선 또는 이메일)을 드립니다. 전형이 지연될 경우 별도의 안내를 드리고 있습니다."
  },
  {
    question: "면접 전형은 어떻게 이루어 지는지?",
    answer: "통상적으로 [1차 실무진 면접]과 [2차 경영진 면접]으로 진행됩니다. 직무 역량 테스트나 포트폴리오 발표가 포함될 수 있으며, 현재는 대면 면접을 원칙으로 합니다."
  },
  {
    question: "면접 시 중요하게 보는 포인트가 있다면?",
    answer: "기술적 역량은 물론, 당사의 인재상인 '정직과 소통'에 부합하는지 확인합니다. 협업 과정에서의 갈등 해결 능력과 문제를 끝까지 해결하려는 책임감을 중점적으로 봅니다."
  },
  {
    question: "청년우대 복지정책이 있는지?",
    answer: "네, 청년재직자 내일채움공제 가입을 적극 지원하고 있으며, 청년 근로자의 안정적인 자산 형성과 주거 안정을 위한 정부 연계 복지 사업을 적극적으로 도입하여 운영 중입니다."
  }
];

function RecruitFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 섹션 */}
      <section className="max-w-[1000px] mx-auto px-6 mb-20 text-center">
        <h2 className="text-[48px] font-bold text-slate-900 tracking-tight mb-6">채용 FAQ</h2>
        <p className="text-[18px] text-slate-500 font-light leading-relaxed">
          태일씨앤티 채용에 대해 자주 묻는 질문들을 모았습니다. <br />
          추가 문의사항은 채용 담당자에게 문의해 주세요.
        </p>
      </section>

      {/* 아코디언 리스트 */}
      <section className="max-w-[1000px] mx-auto px-6">
        <div className="border-t-2 border-slate-900">
          {faqData.map((item, idx) => (
            <div key={idx} className="border-b border-slate-100">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full py-7 flex justify-between items-center text-left hover:text-emerald-500 transition-colors group"
              >
                <span className="text-[18px] font-medium text-slate-800 group-hover:text-emerald-600">
                  <span className="text-emerald-500 mr-4 font-bold">Q.</span>
                  {item.question}
                </span>
                <span className={`text-[24px] transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 bg-slate-50 ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 text-[16px] text-slate-600 leading-relaxed flex gap-4">
                  <span className="text-slate-400 font-bold">A.</span>
                  <p className="break-keep">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 문의 안내 */}
        <div className="mt-20 p-10 bg-slate-50 rounded-sm text-center">
          <p className="text-slate-500 mb-2">찾으시는 답변이 없으신가요?</p>
          <p className="text-slate-900 font-bold text-[20px]">채용담당자 : recruit@taeilcnt.co.kr</p>
        </div>
      </section>
    </main>
  );
}

export default RecruitFaq;