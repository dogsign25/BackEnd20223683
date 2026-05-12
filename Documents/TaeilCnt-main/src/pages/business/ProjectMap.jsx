import React, { useState, useRef, useCallback, useEffect } from 'react';
import projectsData from './mapProjects.json';

const CATEGORY_CONFIG = {
  'All':        { label: '전체',      color: '#6b7280', bg: '#f3f4f6' },
  'Plant':      { label: '플랜트',    color: '#3b82f6', bg: '#eff6ff' },
  'Office':     { label: '업무시설',  color: '#10b981', bg: '#ecfdf5' },
  'Housing':    { label: '주거',      color: '#8b5cf6', bg: '#f5f3ff' },
  'Mixed-use':  { label: '복합시설',  color: '#f59e0b', bg: '#fffbeb' },
  'Logistics':  { label: '물류',      color: '#ef4444', bg: '#fef2f2' },
  'DataCenter': { label: '데이터센터',color: '#06b6d4', bg: '#ecfeff' },
  'Hotel':      { label: '호텔',      color: '#ec4899', bg: '#fdf2f8' },
  'Commercial': { label: '판매시설',  color: '#f97316', bg: '#fff7ed' },
  'Public':     { label: '공공',      color: '#84cc16', bg: '#f7fee7' },
  'Healthcare': { label: '의료',      color: '#e11d48', bg: '#fff1f2' },
  'Education':  { label: '교육',      color: '#7c3aed', bg: '#faf5ff' },
};

const KOREA_MAINLAND = "M 15,15 L 22,14 L 32,8 L 42,5 L 51,3 L 55,5 L 60,8 L 63,13 L 64,18 L 65,24 L 67,30 L 68,38 L 68,46 L 67,54 L 66,60 L 65,66 L 64,69 L 62,72 L 60,75 L 55,78 L 50,81 L 47,83 L 42,84 L 36,83 L 30,81 L 24,78 L 20,74 L 18,69 L 16,63 L 16,57 L 17,51 L 15,45 L 13,38 L 14,32 L 15,26 L 13,22 L 14,19 L 15,15 Z";
const JEJU_PATH = "M 26,91 L 32,90 L 35,92 L 33,95 L 27,94 Z";

const CITY_LABELS = [
  { name: '서울', x: 30, y: 19 }, { name: '인천', x: 21, y: 22 },
  { name: '수원', x: 30, y: 26 }, { name: '평택', x: 30, y: 35 },
  { name: '대전', x: 37, y: 55 }, { name: '대구', x: 57, y: 63 },
  { name: '부산', x: 65, y: 71 }, { name: '울산', x: 67, y: 67 },
  { name: '강릉', x: 64, y: 25 }, { name: '춘천', x: 48, y: 16 },
  { name: '전주', x: 33, y: 63 }, { name: '광주', x: 25, y: 72 },
];

// 도별 경계 폴리곤 (좌표계: x=(lon-126.7)*16.5+22, y=(38.37-lat)*22.1)
const REGIONS = [
  { id:'gyeonggi',  name:'경기·서울·인천', color:'#dbeafe55', stroke:'#93c5fd', labelX:28, labelY:22,
    path:'M 13,24 L 22,14 L 29,10 L 36,12 L 44,22 L 38,31 L 28,34 L 19,31 Z' },
  { id:'gangwon',   name:'강원도',         color:'#dcfce755', stroke:'#86efac', labelX:54, labelY:20,
    path:'M 36,12 L 52,2 L 63,13 L 68,29 L 52,31 L 44,32 L 44,22 Z' },
  { id:'chungnam',  name:'충청남도',        color:'#fef9c355', stroke:'#fde047', labelX:21, labelY:42,
    path:'M 13,31 L 28,34 L 30,52 L 16,55 L 13,46 Z' },
  { id:'chungbuk',  name:'충청북도',        color:'#fce7f355', stroke:'#f9a8d4', labelX:38, labelY:40,
    path:'M 28,34 L 44,32 L 52,31 L 50,46 L 36,46 L 28,42 Z' },
  { id:'jeonbuk',   name:'전북특별자치도',  color:'#fff7ed55', stroke:'#fdba74', labelX:24, labelY:60,
    path:'M 16,55 L 36,52 L 42,63 L 36,68 L 22,70 L 14,64 Z' },
  { id:'jeonnam',   name:'전라남도',        color:'#ecfdf555', stroke:'#6ee7b7', labelX:22, labelY:76,
    path:'M 14,64 L 22,70 L 36,68 L 45,75 L 40,84 L 22,84 L 14,76 Z' },
  { id:'gyeongbuk', name:'경상북도',        color:'#eff6ff55', stroke:'#93c5fd', labelX:54, labelY:48,
    path:'M 44,32 L 68,29 L 68,60 L 62,64 L 46,63 L 36,52 L 50,46 L 52,31 Z' },
  { id:'gyeongnam', name:'경상남도',        color:'#fdf4ff55', stroke:'#d8b4fe', labelX:54, labelY:72,
    path:'M 36,68 L 46,63 L 62,64 L 66,72 L 55,81 L 42,84 L 38,76 Z' },
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 8;

export default function ProjectMap() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus]     = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Zoom / Pan state
  const [zoom, setZoom]         = useState(1);
  const [pan, setPan]           = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(null);
  const svgWrapRef = useRef(null);

  const filtered = projectsData.filter(p => {
    const cat = activeCategory === 'All' || p.category === activeCategory;
    const st  = activeStatus === 'All' ||
      (activeStatus === 'In Progress' && p.status === 'In Progress') ||
      (activeStatus === 'Completed'   && p.status === 'Completed');
    return cat && st;
  });

  // ── Wheel zoom ──────────────────────────────────────────────
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 1.15 : 0.87;
    setZoom(z => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z * delta)));
  }, []);

  useEffect(() => {
    const el = svgWrapRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // ── Drag pan ────────────────────────────────────────────────
  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStart.current = { mx: e.clientX, my: e.clientY, px: pan.x, py: pan.y };
  };
  const onMouseMove = (e) => {
    if (!isDragging || !dragStart.current) return;
    setPan({
      x: dragStart.current.px + (e.clientX - dragStart.current.mx),
      y: dragStart.current.py + (e.clientY - dragStart.current.my),
    });
  };
  const onMouseUp = () => { setIsDragging(false); dragStart.current = null; };

  // ── Touch pan ───────────────────────────────────────────────
  const touchStart = useRef(null);
  const onTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStart.current = { tx: e.touches[0].clientX, ty: e.touches[0].clientY, px: pan.x, py: pan.y };
    }
  };
  const onTouchMove = (e) => {
    if (e.touches.length === 1 && touchStart.current) {
      e.preventDefault();
      setPan({
        x: touchStart.current.px + (e.touches[0].clientX - touchStart.current.tx),
        y: touchStart.current.py + (e.touches[0].clientY - touchStart.current.ty),
      });
    }
  };

  // ── Button zoom ─────────────────────────────────────────────
  const zoomIn  = () => setZoom(z => Math.min(MAX_ZOOM, +(z * 1.4).toFixed(2)));
  const zoomOut = () => setZoom(z => Math.max(MIN_ZOOM, +(z / 1.4).toFixed(2)));
  const resetView = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  // ── Pin size (shrinks as you zoom so pins don't bloat) ──────
  const pinR = (base) => base / zoom;

  const catCfg = (cat) => CATEGORY_CONFIG[cat] || CATEGORY_CONFIG['All'];

  return (
    <div style={{ fontFamily: "'Pretendard', sans-serif" }}>

      {/* 통계 */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 20, flexWrap: 'wrap' }}>
        {[
          { label: '전체', value: projectsData.length, color: '#1e293b' },
          { label: '진행 중', value: projectsData.filter(p=>p.status==='In Progress').length, color: '#f59e0b' },
          { label: '완료',   value: projectsData.filter(p=>p.status==='Completed').length, color: '#10b981' },
        ].map(s => (
          <div key={s.label} style={{ background:'#fff', border:'1px solid #f1f5f9', borderRadius:10, padding:'12px 22px', display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ fontSize:28, fontWeight:300, color:s.color }}>{s.value}</span>
            <span style={{ fontSize:12, color:'#94a3b8' }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* 카테고리 필터 */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:10 }}>
        {Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => {
          const isActive = activeCategory === key;
          const count = key === 'All' ? filtered.length : projectsData.filter(p=>p.category===key).length;
          return (
            <button key={key} onClick={()=>setActiveCategory(key)} style={{
              padding:'5px 13px', borderRadius:999, fontSize:12.5, cursor:'pointer',
              border: isActive ? `2px solid ${cfg.color}` : '2px solid transparent',
              background: isActive ? cfg.bg : '#f8fafc',
              color: isActive ? cfg.color : '#64748b',
              fontWeight: isActive ? 600 : 400,
              boxShadow: isActive ? `0 0 0 3px ${cfg.color}22` : 'none',
              transition:'all 0.2s',
            }}>
              {cfg.label}
              <span style={{ marginLeft:5, fontSize:10, background: isActive ? cfg.color : '#e2e8f0',
                color: isActive ? '#fff' : '#94a3b8', borderRadius:999, padding:'1px 6px' }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 상태 토글 */}
      <div style={{ display:'flex', gap:6, marginBottom:14, alignItems:'center' }}>
        {[{k:'All',label:'전체'},{k:'In Progress',label:'🟡 진행 중'},{k:'Completed',label:'✅ 완료'}].map(s=>(
          <button key={s.k} onClick={()=>setActiveStatus(s.k)} style={{
            padding:'4px 12px', borderRadius:6, fontSize:12, cursor:'pointer',
            border:'1px solid', borderColor: activeStatus===s.k ? '#1e293b':'#e2e8f0',
            background: activeStatus===s.k ? '#1e293b':'#fff',
            color: activeStatus===s.k ? '#fff':'#64748b', transition:'all 0.2s',
          }}>{s.label}</button>
        ))}
        <span style={{ marginLeft:'auto', fontSize:11.5, color:'#94a3b8' }}>
          🖱 휠로 줌 · 드래그로 이동 · 핀 클릭 시 상세
        </span>
      </div>

      {/* ── 지도 컨테이너 ──────────────────────────────────────── */}
      <div style={{ position:'relative', borderRadius:16, overflow:'hidden',
        border:'1px solid #e2e8f0', boxShadow:'0 4px 24px rgba(0,0,0,0.07)',
        background:'#e8f0f7', height: 600, userSelect:'none' }}>

        {/* 줌 컨트롤 버튼 */}
        <div style={{ position:'absolute', top:14, right:14, zIndex:20,
          display:'flex', flexDirection:'column', gap:4 }}>
          {[
            { label:'+', fn: zoomIn,  title:'확대' },
            { label:'−', fn: zoomOut, title:'축소' },
            { label:'⌂', fn: resetView, title:'초기화' },
          ].map(btn => (
            <button key={btn.label} onClick={btn.fn} title={btn.title} style={{
              width:34, height:34, borderRadius:8, border:'1px solid #d1d5db',
              background:'rgba(255,255,255,0.95)', backdropFilter:'blur(6px)',
              fontSize: btn.label==='⌂'?16:20, cursor:'pointer', color:'#374151',
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 2px 6px rgba(0,0,0,0.1)', transition:'all 0.15s',
            }}>{btn.label}</button>
          ))}
        </div>

        {/* 줌 레벨 표시 */}
        <div style={{ position:'absolute', bottom:14, left:14, zIndex:20,
          background:'rgba(255,255,255,0.9)', borderRadius:6, padding:'4px 10px',
          fontSize:11, color:'#64748b', backdropFilter:'blur(4px)' }}>
          {Math.round(zoom * 100)}%
        </div>

        {/* 범례 */}
        <div style={{ position:'absolute', bottom:14, right:14, zIndex:20,
          background:'rgba(255,255,255,0.95)', backdropFilter:'blur(8px)',
          borderRadius:12, padding:'10px 14px', boxShadow:'0 2px 12px rgba(0,0,0,0.1)',
          border:'1px solid #f1f5f9', maxWidth:180 }}>
          <p style={{ fontSize:9.5, color:'#94a3b8', marginBottom:6, textTransform:'uppercase', letterSpacing:'0.08em' }}>범례</p>
          <div style={{ display:'flex', flexDirection:'column', gap:4, marginBottom:6 }}>
            <div style={{ display:'flex', alignItems:'center', gap:6 }}>
              <div style={{ width:9,height:9,borderRadius:'50%',background:'#3b82f6' }}/>
              <span style={{ fontSize:10,color:'#475569' }}>진행 중 (실선·펄스)</span>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:6 }}>
              <div style={{ width:9,height:9,borderRadius:'50%',background:'#fff',border:'1.5px solid #3b82f6' }}/>
              <span style={{ fontSize:10,color:'#475569' }}>완료 (테두리)</span>
            </div>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
            {Object.entries(CATEGORY_CONFIG).filter(([k])=>k!=='All').map(([k,c])=>(
              <div key={k} style={{ display:'flex', alignItems:'center', gap:3 }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:c.color }}/>
                <span style={{ fontSize:9.5,color:'#64748b' }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SVG 래퍼 (드래그 대상) */}
        <div
          ref={svgWrapRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={()=>{ touchStart.current=null; }}
          style={{
            width:'100%', height:'100%', overflow:'hidden',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          {/* 변환 레이어 */}
          <div style={{
            width:'100%', height:'100%',
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: '50% 50%',
            transition: isDragging ? 'none' : 'transform 0.15s ease',
          }}>
            <svg
              viewBox="0 0 100 100"
              style={{ width:'100%', height:'100%', display:'block' }}
              preserveAspectRatio="xMidYMid meet"
            >
              <rect width="100" height="100" fill="#e8f0f7"/>

              {/* 본토 베이스 (도 경계보다 먼저) */}
              <path d={KOREA_MAINLAND} fill="#dde8f0" stroke="#a8c0d4" strokeWidth={0.6/zoom}/>
              <path d={JEJU_PATH} fill="#d4e6f1" stroke="#b8cfe4" strokeWidth={0.5/zoom}/>

              {/* ── 도별 경계선 (fill 없음, stroke만) ────────── */}
              {REGIONS.map(r => (
                <path key={r.id} d={r.path} fill="none"
                  stroke={r.stroke} strokeWidth={0.7/zoom} strokeLinejoin="round"
                  opacity={0.85}/>
              ))}

              {/* 도 이름 레이블 */}
              {REGIONS.map(r => (
                <text key={r.id+'_lbl'} x={r.labelX} y={r.labelY}
                  fontSize={1.9/zoom} fill={r.stroke} opacity={0.75}
                  textAnchor="middle" fontWeight="600" style={{pointerEvents:'none'}}>
                  {r.name}
                </text>
              ))}

              {/* 바다 레이블 */}
              <text x="8" y="50" fontSize={2.2/zoom} fill="#b0c4d8" textAnchor="middle" transform="rotate(-90,8,50)">서해</text>
              <text x="80" y="45" fontSize={2.2/zoom} fill="#b0c4d8" textAnchor="middle">동해</text>
              <text x="40" y="98" fontSize={2.2/zoom} fill="#b0c4d8" textAnchor="middle">남해</text>

              {/* 도 경계 */}
              <path d="M 16,30 L 42,28" stroke="#c8d8e8" strokeWidth={0.3/zoom} fill="none" strokeDasharray="1,1"/>
              <path d="M 42,28 L 68,30" stroke="#c8d8e8" strokeWidth={0.3/zoom} fill="none" strokeDasharray="1,1"/>
              <path d="M 14,52 L 68,50" stroke="#c8d8e8" strokeWidth={0.3/zoom} fill="none" strokeDasharray="1,1"/>
              <path d="M 14,65 L 40,66" stroke="#c8d8e8" strokeWidth={0.3/zoom} fill="none" strokeDasharray="1,1"/>

              <text x="31" y="93.5" fontSize={1.8/zoom} fill="#7a9bb5" textAnchor="middle">제주</text>

              {/* 도시 레이블 */}
              {CITY_LABELS.map(city => (
                <g key={city.name}>
                  <circle cx={city.x} cy={city.y} r={0.5/zoom} fill="#aab8c8" opacity="0.6"/>
                  <text x={city.x+0.8/zoom} y={city.y+0.6} fontSize={1.7/zoom} fill="#7a8fa0" opacity="0.85">{city.name}</text>
                </g>
              ))}

              {/* ── 프로젝트 핀 ─────────────────────────── */}
              {filtered.map(project => {
                const cfg = catCfg(project.category);
                const isIP = project.status === 'In Progress';
                const isSel = selectedProject?.id === project.id;
                const r = pinR(isSel ? 2.2 : 1.6);

                return (
                  <g key={project.id}
                    style={{ cursor:'pointer' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(prev => prev?.id === project.id ? null : project);
                    }}
                  >
                    {/* 펄스 링 (진행중) */}
                    {isIP && (
                      <circle cx={project.coords.x} cy={project.coords.y} r={r+pinR(2)} fill="none" stroke={cfg.color} strokeWidth={pinR(0.4)} opacity="0.3">
                        <animate attributeName="r" values={`${r+pinR(1)};${r+pinR(3)};${r+pinR(1)}`} dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                      </circle>
                    )}
                    {/* 선택 링 */}
                    {isSel && (
                      <circle cx={project.coords.x} cy={project.coords.y} r={r+pinR(1.2)} fill="none" stroke={cfg.color} strokeWidth={pinR(0.5)} opacity="0.6"/>
                    )}
                    {/* 핀 */}
                    <circle cx={project.coords.x} cy={project.coords.y} r={r}
                      fill={isIP ? cfg.color : '#fff'}
                      stroke={cfg.color} strokeWidth={isIP ? 0 : pinR(0.6)}/>
                    {!isIP && (
                      <circle cx={project.coords.x} cy={project.coords.y} r={r*0.4} fill={cfg.color} opacity="0.8"/>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* ── 팝업 카드 (지도 위 absolute) ─────────────────────── */}
        {selectedProject && (() => {
          const cfg = catCfg(selectedProject.category);
          return (
            <div onClick={e=>e.stopPropagation()} style={{
              position:'absolute', top:14, left:14, width:300,
              background:'#fff', borderRadius:14,
              boxShadow:'0 8px 32px rgba(0,0,0,0.18)',
              border:`1.5px solid ${cfg.color}44`,
              padding:'18px 20px', zIndex:50,
              animation:'fadeInUp 0.2s ease',
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12 }}>
                <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                  <span style={{ fontSize:10.5, padding:'2px 9px', borderRadius:999, background:cfg.bg, color:cfg.color, fontWeight:600 }}>{cfg.label}</span>
                  <span style={{ fontSize:10.5, padding:'2px 9px', borderRadius:999,
                    background: selectedProject.status==='In Progress'?'#fff7ed':'#f0fdf4',
                    color: selectedProject.status==='In Progress'?'#f59e0b':'#16a34a' }}>
                    {selectedProject.status==='In Progress'?'● 진행 중':'✓ 완료'}
                  </span>
                </div>
                <button onClick={()=>setSelectedProject(null)} style={{ background:'none', border:'none', cursor:'pointer', color:'#94a3b8', fontSize:18, lineHeight:1 }}>×</button>
              </div>

              <h3 style={{ fontSize:14, fontWeight:600, color:'#1e293b', lineHeight:1.4, marginBottom:12 }}>
                {selectedProject.title}
              </h3>

              <div style={{ display:'grid', gap:8 }}>
                {[
                  { label:'위치',   value: selectedProject.location },
                  { label:'발주처', value: selectedProject.client },
                  { label:'시공사', value: selectedProject.contractor },
                  { label:'기간',   value: selectedProject.period },
                  selectedProject.scale && { label:'규모', value: selectedProject.scale },
                ].filter(Boolean).map(row => (
                  <div key={row.label} style={{ display:'flex', gap:10 }}>
                    <span style={{ fontSize:10, color:'#94a3b8', minWidth:42, textTransform:'uppercase', letterSpacing:'0.06em', paddingTop:1 }}>{row.label}</span>
                    <span style={{ fontSize:12, color:'#334155', lineHeight:1.5, flex:1 }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop:14, height:3, borderRadius:2, background:`linear-gradient(90deg,${cfg.color},${cfg.color}44)` }}/>
            </div>
          );
        })()}
      </div>

      {/* ── 하단 목록 ──────────────────────────────────────────── */}
      <div style={{ marginTop:28 }}>
        <h3 style={{ fontSize:17, fontWeight:400, color:'#1e293b', marginBottom:14 }}>
          프로젝트 목록 <span style={{ fontSize:13, color:'#94a3b8', fontWeight:300 }}>{filtered.length}건</span>
        </h3>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:10 }}>
          {filtered.slice(0, 12).map(p => {
            const cfg = catCfg(p.category);
            return (
              <div key={p.id} onClick={()=>setSelectedProject(p)}
                style={{ background:'#fff', border:'1px solid #f1f5f9', borderRadius:10,
                  padding:'12px 16px', cursor:'pointer', borderLeft:`3px solid ${cfg.color}`,
                  transition:'box-shadow 0.2s' }}
                onMouseEnter={e=>e.currentTarget.style.boxShadow='0 4px 16px rgba(0,0,0,0.08)'}
                onMouseLeave={e=>e.currentTarget.style.boxShadow='none'}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                  <div style={{ flex:1 }}>
                    <span style={{ fontSize:10, padding:'2px 7px', borderRadius:999, background:cfg.bg, color:cfg.color, fontWeight:600, marginBottom:6, display:'inline-block' }}>{cfg.label}</span>
                    <p style={{ fontSize:13, fontWeight:500, color:'#1e293b', lineHeight:1.4, marginBottom:4 }}>{p.title}</p>
                    <p style={{ fontSize:11, color:'#94a3b8' }}>{p.location}</p>
                  </div>
                  <span style={{ fontSize:10, padding:'2px 7px', borderRadius:4, marginLeft:8, whiteSpace:'nowrap',
                    background:p.status==='In Progress'?'#fff7ed':'#f0fdf4',
                    color:p.status==='In Progress'?'#f59e0b':'#16a34a' }}>
                    {p.status==='In Progress'?'진행':'완료'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {filtered.length > 12 && (
          <p style={{ textAlign:'center', marginTop:14, color:'#94a3b8', fontSize:12.5 }}>외 {filtered.length - 12}건</p>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
    </div>
  );
}
