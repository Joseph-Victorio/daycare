import { FaInstagram, FaWhatsapp, FaBlogger, FaFacebook,  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white bg-gradient-to-t from-primary to-secondary">
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <img
            src="/logo_daycare.svg"
            alt="MAFFNA Logo"
            className="w-32 mb-4"
          />
        </div>

        <div>
          <h3 className="font-bold mb-3">MAFFNA MOSLEM KIDS DAYCARE</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/tentang-kami" className="hover:underline">Tentang Kami</a></li>
            <li><a href="#" className="hover:underline">Data Anak</a></li>
            <li><a href="/galeri" className="hover:underline">Galeri</a></li>
          
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">BANTUAN & PANDUAN</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Formulir Pendaftaran</a></li>
            <li><a href="#" className="hover:underline">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Kontak</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">SOSIAL MEDIA</h3>
          <div className="flex gap-4 text-lg">
            <a href="#"><FaInstagram /></a>
            <a href="https://wa.me/6285138750174"><FaWhatsapp /></a>
            <a href="#"><FaBlogger /></a>
            <a href="#"><FaFacebook /></a>
          
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 py-4 text-center text-sm">
        Copyright © 2025 MAFFNA Moslem Kids Daycare. Semua hak dilindungi undang-undang.
      </div>
    </footer>
  );
}
