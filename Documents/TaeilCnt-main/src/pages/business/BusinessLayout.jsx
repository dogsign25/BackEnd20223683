import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavbar from './SubNavbar';

function BusinessLayout() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 사업실적 공통 헤더 */}
      <section className="max-w-[1600px] mx-auto px-12 mb-16">
        <span className="text-emerald-600 text-[16px] tracking-[0.2em] uppercase mb-4 block font-light">
          Business Performance
        </span>
        <h2 className="text-[48px] font-normal text-slate-900 tracking-[-0.04em]">공사 수주현황</h2>
      </section>

      {/* 서브 네비게이션 (사업실적 전용) */}
      <section className="max-w-[1600px] mx-auto px-12">
        <SubNavbar />
        
        {/* 서브 메뉴 클릭 시 하단 내용(Housing, Office 등)이 바뀌는 부분 */}
        <div className="mt-10">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default BusinessLayout;