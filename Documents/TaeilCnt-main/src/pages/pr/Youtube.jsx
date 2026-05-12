import React from 'react';

const youtubeData = [
  {
    id: 1,
    title: "태일씨앤티 기업 홍보 영상 - 건설의 미래를 열다",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // 예시 이미지
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2026.01.15",
    duration: "03:45"
  },
  {
    id: 2,
    title: "2025 연말 장학금 수여식 현장 스케치",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2025.12.20",
    duration: "05:12"
  },
  {
    id: 3,
    title: "스마트 건설 기술: AIoT와 로보틱스의 만남",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2025.11.05",
    duration: "08:30"
  },
  {
    id: 4,
    title: "G밸리의 중심, KIBA서울 회장 취임식 인터뷰",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2025.10.28",
    duration: "04:20"
  }
];

function Youtube() {
  return (
    <main className="pt-32 pb-40 bg-white">
      {/* 상단 헤더 */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16">
        <span className="text-emerald-600 text-[16px] tracking-[0.2em] uppercase mb-4 block font-light">
          PR Center
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-[48px] font-normal text-slate-900 tracking-[-0.04em]">YOUTUBE</h2>
          <p className="text-slate-400 pb-2">공식 유튜브 채널의 최신 영상을 확인하세요.</p>
        </div>
      </section>

      {/* 유튜브 그리드 리스트 */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {youtubeData.map((video) => (
            <a 
              key={video.id} 
              href={video.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              {/* 썸네일 영역 */}
              <div className="relative aspect-video overflow-hidden mb-6 bg-slate-100">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* 재생 버튼 오버레이 */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-emerald-600 group-hover:scale-110 transition-all">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                {/* 재생 시간 */}
                <span className="absolute bottom-4 right-4 bg-black/70 text-white text-[12px] px-2 py-1 font-light">
                  {video.duration}
                </span>
              </div>

              {/* 텍스트 영역 */}
              <div className="px-1">
                <h3 className="text-[18px] font-normal text-slate-900 leading-snug mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <span className="text-slate-400 text-[14px] font-light">
                  {video.date}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* 더보기 버튼 (데이터가 많아질 경우) */}
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-4 border border-slate-200 text-slate-500 text-[15px] font-light hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer">
            영상 더보기 +
          </button>
        </div>
      </section>
    </main>
  );
}

export default Youtube;