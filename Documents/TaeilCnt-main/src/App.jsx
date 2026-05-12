import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
//import Business from "./pages/Business";
//import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Philosophy from "./pages/Philosophy";
import History from "./pages/History";
import Partners from "./pages/Partners";
import Certifications from "./pages/Certifications";
import Location from "./pages/Location";
import Housing from "./pages/business/Housing";
import Office from "./pages/business/Office";
import BusinessLayout from "./pages/business/BusinessLayout";
import SubNavbar from "./pages/business/SubNavbar";
import Medical from "./pages/business/Medical";
import Plant from "./pages/business/Plant";
import Highrise from "./pages/business/Highrise";
import Retail from "./pages/business/Retail";
import Etc from "./pages/business/Etc";
import ProjectMap from "./pages/business/ProjectMap";
import News from "./pages/pr/News";
import Youtube from "./pages/pr/Youtube";
import Management from "./pages/esg/Management";
import JobIntroduction from "./pages/recruit/JobIntroduction";
import HrSystem from "./pages/recruit/HrSystem";
import Welfare from "./pages/recruit/Welfare";
import RecruitFaq from "./pages/recruit/RecruitFaq";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/history" element={<History />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/cert" element={<Certifications />} />
          <Route path="/location" element={<Location />} />

          {/* 사업실적 그룹 (서브 네비게이션 포함) */}
          <Route path="/business" element={<BusinessLayout />}>
         
          <Route index element={<Navigate to="housing" replace />} />
          <Route path="housing" element={<Housing />} />
          <Route path="office" element={<Office />} />
          <Route path="medical" element={<Medical />} />
          <Route path="plant" element={<Plant />} />
          <Route path="highrise" element={<Highrise />} />
          <Route path="retail" element={<Retail />} />
          <Route path="etc" element={<Etc />} />
          <Route path="map" element={<ProjectMap />} />
          </Route>


          <Route path="/pr">
          <Route index element={<Navigate to="news" replace />} />
          <Route path="news" element={<News />} />
          <Route path="youtube" element={<Youtube />} />
          </Route>

          <Route path="/esg">
          <Route index element={<Navigate to="management" replace />} />
          <Route path="management" element={<Management />} />
          </Route>

          <Route path="/recruit">
          <Route index element={<Navigate to="job" replace />} />
          <Route path="job" element={<JobIntroduction />} />
          <Route path="hrsystem" element={<HrSystem />} />
          <Route path="welfare" element={<Welfare />} />
          <Route path="faq" element={<RecruitFaq />} />
          </Route>


        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;