
import React from 'react';

export default function Footer() {
  return (
      <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-black/5 py-20">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

            {/* LEFT */}
            <div>

              <h4 className="text-3xl font-black tracking-tight text-[#111827]">
                TAEIL <span className="text-[#4E9F6D]">C&T</span>
              </h4>

              <p className="mt-6 text-slate-500 leading-relaxed">
                첨단 스마트 건설 기술과 정밀 시공을 통해
                지속 가능한 미래를 구축합니다.
              </p>
            </div>

            {/* COMPANY */}
            <div>
              <h5 className="font-bold mb-6 text-[#111827]">
                COMPANY
              </h5>

              <ul className="space-y-3 text-slate-500">
                <li>About</li>
                <li>History</li>
                <li>ESG</li>
              </ul>
            </div>

            {/* BUSINESS */}
            <div>
              <h5 className="font-bold mb-6 text-[#111827]">
                BUSINESS
              </h5>

              <ul className="space-y-3 text-slate-500">
                <li>Infrastructure</li>
                <li>Plant</li>
                <li>Smart Construction</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h5 className="font-bold mb-6 text-[#111827]">
                CONTACT
              </h5>

              <ul className="space-y-3 text-slate-500">
                <li>서울특별시</li>
                <li>02-1234-5678</li>
                <li>taeilcnt@company.com</li>
              </ul>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-400">

            <p>
              © 2026 TAEIL C&T. ALL RIGHTS RESERVED.
            </p>

            <p>
              Construction & Engineering Corporation
            </p>
          </div>
        </div>
      </footer>
      </>
  );
}

