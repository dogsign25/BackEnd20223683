import { Link } from "react-router-dom";

const navigation = [
  { 
    name: '회사소개', href: '/about', 
    sub: [
      { name: '인사말', href: '/about' },
      { name: '경영이념', href: '/philosophy' },
      { name: '회사연혁', href: '/history' },
      { name: '주거래 시공사', href: '/partners' },
      { name: '인증현황', href: '/cert' },
      { name: '오시는길', href: '/location' }
    ] 
  },
  { 
    name: '사업실적', href: '/business/housing', 
    sub: [
      { name: '주택', href: '/business/housing' },
      { name: '업무시설', href: '/business/office' },
      { name: '교육의료', href: '/business/medical' },
      { name: '플랜트', href: '/business/plant' },
      { name: '초고층', href: '/business/highrise' },
      { name: '판매시설', href: '/business/retail' },
      { name: '기타', href: '/business/etc' }
    ] 
  },
  { name: '홍보센터', href: '/pr', sub: [{ name: 'News', href: '/pr/news' }, { name: '유튜브', href: '/pr/youtube' }] },
  { name: 'ESG경영', href: '/esg', sub: [{ name: '윤리경영', href: '/esg/management' }] },
  { 
    name: '인재채용', href: '/recruit', 
    sub: [
      { name: '직무소개', href: '/recruit/job' }, 
      { name: '인사제도', href: '/recruit/hrsystem' },
      { name: '복리후생', href: '/recruit/welfare' },
      { name: '채용FAQ', href: '/recruit/faq' }
    ] 
  },
];

function Navbar({ isSolid, isHovered, onMenuClick }) {
  return (
    <div className="relative h-full flex-1 flex justify-center">

      {/* 메인 네비게이션 */}
      <nav className="hidden lg:flex items-center h-full w-full max-w-[1400px]">
        <ul className="flex w-full">
          {navigation.map((item) => (
            <li key={item.name} className="flex-1 relative h-24 flex items-center justify-center group">
              <Link 
                to={item.href}
                className={`text-[21px] font-bold tracking-tight transition-colors duration-300 group-hover:text-[#49b640] ${
                  isSolid ? "text-slate-800" : "text-white"
                }`}
              >
                {item.name}
              </Link>
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[4px] bg-[#57C84D] transition-all duration-300 ${isHovered ? "w-0 group-hover:w-12" : "w-0"}`} />

            </li>
          ))}
        </ul>
      </nav>

      {/* 플로팅 라운드 드롭다운 (그대로) */}
      {/* 풀와이드 배경 (바깥) */}
<div
  className={`fixed left-0 right-0 top-24 w-full overflow-hidden transition-all duration-500 ease-out 
    bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t border-slate-100 ${
    isHovered 
      ? "max-h-[600px] opacity-100 py-12" 
      : "max-h-0 opacity-0 pointer-events-none"
  }`}
>
  {/* 콘텐츠 영역 (안쪽) - 기존 정렬 유지 */}
  <div className="max-w-[1600px] mx-auto px-12">
    <div className="flex w-full items-start">
      {/* 로고 자리만큼 왼쪽 여백 (메인 메뉴와 정렬 맞추기) */}
      <div className="w-48 shrink-0" />
      
      {/* 메뉴 영역 */}
      <div className="flex-1 flex">
        {navigation.map((item) => (
          <div key={item.name} className="flex-1 flex flex-col items-center gap-2">
            {item.sub?.map((s) => (
              <Link
                key={s.name}
                to={s.href}
                onClick={onMenuClick}
                className="group/item relative w-full max-w-[180px] py-3.5 text-center transition-all duration-300"
              >
                {/* 텍스트: 위치 고정, 색상만 변경 */}
                <span className="relative z-10 text-[18px] font-semibold text-slate-500 group-hover/item:text-[#49b640] transition-colors duration-300">
                  {s.name}
                </span>
                
                {/* 하단 바: 중앙에서 양옆으로 혹은 왼쪽에서 오른쪽으로 슥 */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#49b640] transition-all duration-300 group-hover/item:w-12 opacity-0 group-hover/item:opacity-100" />
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* 우측 유틸리티 자리만큼 여백 */}
      <div className="w-48 shrink-0" />
    </div>
  </div>
</div>
    </div>

  );
}

export default Navbar;