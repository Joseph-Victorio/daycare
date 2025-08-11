import { useState } from "react";
import {
  FaHome,
  FaChild,
  FaMoneyBillAlt,
  FaPen,
  FaQuoteRight,
  FaImage,
  FaSignOutAlt,
  FaPlusCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiDatabase2Fill } from "react-icons/ri";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <>
      <div className="sm:hidden p-4 flex justify-between items-center bg-primary text-white">
        <img src="/logo_daycare.svg" alt="Logo" className="w-1/3 h-auto" />
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } sm:block w-full sm:w-64 bg-gradient-to-t from-primary to-secondary text-white min-h-screen transition-all duration-300`}
      >
        <div className="flex flex-col justify-between h-full">
     
          <div>
          
            <div className="p-4 hidden sm:block">
              <img
                src="/logo_daycare.svg"
                alt="Logo"
                className="w-1/2 h-auto object-contain mx-auto"
              />
            </div>


            <nav className="space-y-1 px-4">
              <a href="/admin/dashboard">
                <div className="flex items-center gap-2 py-2 px-3 rounded hover:bg-white/20 cursor-pointer transition">
                  <FaHome />
                  <span>Dashboard</span>
                </div>
              </a>

              <div>
                <div
                  className="flex items-center justify-between py-2 px-3 rounded hover:bg-white/20 cursor-pointer transition"
                  onClick={() => toggleMenu("kelola")}
                >
                  <div className="flex items-center gap-2">
                    <RiDatabase2Fill />
                    <span>Kelola Data</span>
                  </div>
                  <FaPlusCircle size={14} />
                </div>
                {openMenu === "kelola" && (
                  <div className="pl-8">
                    <a href="/admin/data-anak">
                      <div className="flex items-center gap-2 py-2 px-3 rounded hover:bg-white/20 cursor-pointer transition">
                        <FaChild />
                        <span>Data Anak</span>
                      </div>
                    </a>
                    <a href="https://dashboard.sandbox.midtrans.com/beta/transactions">
                      <div className="flex items-center gap-2 py-2 px-3 rounded hover:bg-white/20 cursor-pointer transition">
                        <FaMoneyBillAlt />
                        <span>Riwayat Pembayaran</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              <a href="/admin/tipe-penitipan">
                <div className="flex items-center gap-2 py-2 px-3 rounded hover:bg-white/20 cursor-pointer transition">
                  <FaPen />
                  <span>Tipe Penitipan</span>
                </div>
              </a>

              <a href="/admin/review-ortu">
                <div className="flex items-center gap-2 py-2 px-3 rounded hover:bg-white/20 cursor-pointer transition">
                  <FaQuoteRight />
                  <span>Review Orang Tua</span>
                </div>
              </a>

              <a href="/admin/galeri">
                <div className="flex items-center gap-2 py-2 px-3 rounded hover:bg-white/20 cursor-pointer transition">
                  <FaImage />
                  <span>Galeri</span>
                </div>
              </a>
            </nav>
          </div>

          <div className="px-4 pb-4">
            <a href="/login">
              <div className="flex items-center gap-2 py-2 px-3 rounded hover:bg-white/20 cursor-pointer transition">
                <FaSignOutAlt />
                <span>Keluar</span>
              </div>
            </a>

            <div className="flex mt-3 px-1">
              <img
                src="/pohon.png"
                alt="pohon"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
