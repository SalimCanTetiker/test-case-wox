import { Route, Routes } from "react-router-dom";


import Anasayfa from "./pages/Anasayfa";
import OtelRezervasyon from "./pages/OtelRezervasyon";
import TurRezervasyon from "./pages/TurRezervasyon";
import MüşteriYönetimi from "./pages/MüşteriYönetimi";
import Operasyon from "./pages/Operasyon";
import Muhasebe from "./pages/Muhasebe";
import ReklamYönetimi from "./pages/ReklamYönetimi";
import Tesisler from "./pages/Tesisler";
import Turlar from "./pages/Turlar";
import Transport from "./pages/Transport";
import SiteAyarları from "./pages/SiteAyarları";
import GenelAyarlar from "./pages/GenelAyarlar";
import InsanKaynakları from "./pages/InsanKaynakları";

import Sidebar from "./components/SideBar";


export default function App() {
  return (
    <div className='flex h-screen bg-white text-gray-100 overflow-hidden'>
      <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/rezervasyon" element={<OtelRezervasyon />} />
        <Route path="/turRezervasyon" element={<TurRezervasyon />} />
        <Route path="/müşteriYönetimi" element={<MüşteriYönetimi />} />
        <Route path="/operasyon" element={<Operasyon />} />
        <Route path="/muhasebe" element={<Muhasebe />} />
        <Route path="/reklamYönetimi" element={<ReklamYönetimi />} />
        <Route path="/tesisler" element={<Tesisler />} />
        <Route path="/turlar" element={<Turlar />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/siteAyarları" element={<SiteAyarları />} />
        <Route path="/genelAyarlar" element={<GenelAyarlar />} />
        <Route path="/insanKaynakları" element={<InsanKaynakları />} />
      </Routes>
    </div>
  )
}