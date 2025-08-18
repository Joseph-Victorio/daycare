import { Route, Router, Routes } from "react-router-dom"
import Beranda from "./pages/Beranda"
import TentangKami from "./pages/TentangKami"
import Penitipan from "./pages/Penitipan"
import DetailPenitipan from "./pages/PenitipanDetail"
import Galeri from "./pages/Galeri"
import Formulir from "./pages/Formulir"
import Auth from "./pages/auth/Auth"
import DataAnak from "./pages/admin/DataAnak"
import PenitipanAdmin from "./pages/admin/PenitipanAdmin"
import ReviewOrtuAdmin from "./pages/admin/ReviewOrtu"
import GaleriAdmin from "./pages/admin/GaleriAdmin"
import DashboardAdmin from "./pages/admin/Dashboard"
import LaporanHarian from "./pages/LaporanHarian"
import LaporanHarianAdmin from "./pages/admin/LaporanHarianAdmin"

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Beranda/>}/>
      <Route path="/formulir" element={<Formulir/>}/>
      <Route path="/galeri" element={<Galeri/>}/>
      <Route path="/tentang-kami" element={<TentangKami/>}/>
      <Route path="/laporan-harian" element={<LaporanHarian/>}/>
      <Route path="/penitipan" element={<Penitipan/>}/>
      <Route path="/penitipan/:id" element={<DetailPenitipan/>}/>

      <Route path="/login" element={<Auth/>}/>
      <Route path="/register" element={<Auth/>}/>

      <Route path="/admin/dashboard" element={<DashboardAdmin/>}/>
      <Route path="/admin/data-anak" element={<DataAnak/>}/>
      <Route path="/admin/tipe-penitipan" element={<PenitipanAdmin/>}/>
      <Route path="/admin/review-ortu" element={<ReviewOrtuAdmin/>}/>
      <Route path="/admin/galeri" element={<GaleriAdmin/>}/>
      <Route path="/admin/laporan" element={<LaporanHarianAdmin/>}/>

      
     </Routes>
    </>
  )
}

export default App
