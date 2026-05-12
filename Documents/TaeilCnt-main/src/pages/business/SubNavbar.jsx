import React from 'react';
import { NavLink } from 'react-router-dom';

const subMenus = [
  { name: '전체', slug: 'all', path: '/business/all' },
  { name: '주택', slug: 'housing', path: '/business/housing' },
  { name: '업무시설', slug: 'office', path: '/business/office' },
  { name: '교육/의료', slug: 'medical', path: '/business/medical' },
  { name: '플랜트', slug: 'plant', path: '/business/plant' },
  { name: '초고층', slug: 'highrise', path: '/business/highrise' },
  { name: '판매시설', slug: 'retail', path: '/business/retail' },
  { name: '기타', slug: 'etc', path: '/business/etc' },
  { name: '프로젝트 맵', slug: 'map', path: '/business/map' },
];

function SubNavbar() {
  return (
    <nav className="flex flex-wrap gap-x-10 gap-y-4 border-b border-slate-100 pb-6 mb-16">
      {subMenus.map((menu) => (
        <NavLink
          key={menu.slug}
          to={menu.path}
          className={({ isActive }) => 
            `text-[18px] transition-all duration-300 relative cursor-pointer py-2 ${
              isActive 
                ? "text-emerald-600 font-medium" 
                : "text-slate-400 font-light hover:text-slate-600"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {menu.name}
              {isActive && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-emerald-600 z-10" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default SubNavbar;