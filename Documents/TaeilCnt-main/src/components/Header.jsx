import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import OptimizedImage from "./OptimizedImage";

import Navbar from "./Navbar";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 흰 배경 + 검정 텍스트로 갈 조건
  const isSolid = !isMainPage || isHovered || isScrolled;

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isSolid ? "bg-white shadow-sm" : "bg-transparent"

      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1600px] mx-auto px-12 relative">
        <div className="flex justify-between items-center h-24">

          <Link to="/" className="flex items-center w-48">
            <div className="h-40 flex items-center">
              <OptimizedImage
                src="태일-로고-removebg-preview.webp"
                alt="태일씨앤티"
                className="h-full w-auto object-contain"

              />
            </div>
          </Link>

          <Navbar 
            isSolid={isSolid}
            isHovered={isHovered}
            onMenuClick={() => setIsHovered(false)} 
          />

          <div className={`hidden lg:flex items-center justify-end gap-6 w-48 text-[15px] font-light transition-colors ${
            isSolid ? "text-slate-400" : "text-white/80"
          }`}>
            <button className={`transition-colors uppercase ${isSolid ? "hover:text-slate-900" : "hover:text-white"}`}>KR</button>
            <span>|</span>
            <button className={`transition-colors uppercase ${isSolid ? "hover:text-slate-900" : "hover:text-white"}`}>EN</button>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;