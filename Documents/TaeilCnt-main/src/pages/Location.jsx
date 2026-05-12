import React from 'react';

function Location() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 타이틀 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-24">
        <span className="text-emerald-600 text-[18px] tracking-[0.2em] uppercase mb-4 block font-light">Location</span>
        <h2 className="text-[56px] font-normal text-slate-900 tracking-[-0.04em]">
          태일씨앤티로 <br />
          <span className="text-slate-400">오시는 길을 안내해 드립니다.</span>
        </h2>
      </section>

      {/* 지도 영역 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-20">
        <div className="w-full h-[600px] bg-slate-100 relative group overflow-hidden border border-slate-100">
          {/* 실제 지도 API 연동 시 이 부분을 지도의 container로 사용하세요 */}
          <div className="absolute inset-0 flex items-center justify-center bg-[url('https://api.vworld.kr/2.0/thumbnails/realtimes/126.8824/37.4795.jpg')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700">
            {/* 임시 마커 디자인 */}
            <div className="relative flex flex-col items-center">
              <div className="bg-white px-6 py-3 shadow-2xl rounded-full mb-4 border border-emerald-100">
                <span className="text-slate-900 font-normal text-[16px]">태일씨앤티 (한라원앤원타워)</span>
              </div>
              <div className="w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg animate-bounce"></div>
            </div>
          </div>
          
          {/* 지도 컨트롤 UI (형태만 구현) */}
          <div className="absolute right-8 top-8 flex flex-col gap-2">
            {['확대', '축소', '초기화'].map((btn) => (
              <button key={btn} className="w-12 h-12 bg-white shadow-md flex items-center justify-center text-[13px] hover:bg-slate-50 transition-colors">
                {btn === '확대' ? '+' : btn === '축소' ? '-' : 'R'}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="text-slate-400 border-b border-slate-200 pb-1 text-[15px] hover:text-emerald-600 hover:border-emerald-600 transition-all">
            지도 크게보기
          </button>
        </div>
      </section>

      {/* 주소 및 연락처 정보 */}
      <section className="max-w-[1600px] mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-16 border-t border-slate-100 pt-20">
          <div>
            <h3 className="text-[24px] font-normal text-slate-900 mb-8">주소 안내</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-6">
                <span className="text-slate-300 w-20 font-light mt-1 uppercase text-[13px] tracking-widest">Address</span>
                <p className="text-[20px] text-slate-700 font-light leading-relaxed">
                  서울시 금천구 가산디지털2로 101 <br />
                  (가산동 549-1) 한라원앤원타워 B동 17층 1701호
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[24px] font-normal text-slate-900 mb-8">연락처</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <span className="text-slate-300 w-20 font-light uppercase text-[13px] tracking-widest">Tel</span>
                <span className="text-[24px] text-slate-800 font-normal">070-8897-0761</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-slate-300 w-20 font-light uppercase text-[13px] tracking-widest">Fax</span>
                <span className="text-[24px] text-slate-800 font-normal">02-2101-2141</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 교통수단 안내 (추가 디자인 요소) */}
      <section className="max-w-[1600px] mx-auto px-12 mt-32">
        <div className="bg-slate-50 p-12 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <span className="text-emerald-600 block mb-4 text-[14px] font-normal">지하철 이용 시</span>
            <p className="text-slate-600 font-light">1호선 / 7호선 가산디지털단지역 <br /> 4번 출구에서 도보 약 10분</p>
          </div>
          <div>
            <span className="text-emerald-600 block mb-4 text-[14px] font-normal">버스 이용 시</span>
            <p className="text-slate-600 font-light">가산디지털단지역 정류장 하차 <br /> 일반 21, 571, 652번 등</p>
          </div>
          <div>
            <span className="text-emerald-600 block mb-4 text-[14px] font-normal">자가용 이용 시</span>
            <p className="text-slate-600 font-light">한라원앤원타워 지하 주차장 이용 <br />(방문객 주차 가능)</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Location;