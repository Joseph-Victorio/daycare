import { Route, Routes } from "react-router-dom"
import Beranda from "./pages/Beranda"
import TentangKami from "./pages/TentangKami"
import Penitipan from "./pages/Penitipan"
import DetailPenitipan from "./pages/PenitipanDetail"
import Galeri from "./pages/Galeri"
import Keranjang from "./pages/Keranjang"

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Beranda/>}/>
      <Route path="/keranjang" element={<Keranjang/>}/>
      <Route path="/galeri" element={<Galeri/>}/>
      <Route path="/tentang-kami" element={<TentangKami/>}/>
      <Route path="/penitipan" element={<Penitipan/>}/>
      <Route path="/penitipan/:id" element={<DetailPenitipan/>}/>
     </Routes>
    </>
  )
}

export default App
