import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { FaWpforms } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Tentang Kami", path: "/tentang-kami" },
  { name: "Tipe Penitipan", path: "/penitipan" },
  { name: "Galeri", path: "/galeri" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isTentangPage = location.pathname === "/tentang-kami";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* DESKTOP */}
      <nav
        className={`hidden sm:block font-rhodium ${
          isTentangPage ? "text-white" : "bg-background text-primary"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-6 max-w-screen-xl mx-auto">
   
          <img src="/logo_daycare.svg" alt="logo" className="w-[72px]" />

          <div className="flex items-center gap-10 bg-white p-3 rounded-2xl text-[20px]">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-primary p-1"
                    : "hover:border-b-2 hover:border-primary p-1 ease-in-out duration-300"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

        
          <div className="flex items-center gap-3 text-[20px]">
            <div className="bg-white p-3 rounded-2xl">
              <a
                href="https://wa.me/6285138750174/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <MdOutlinePhoneEnabled
                  className={isTentangPage ? "text-white" : "text-primary"}
                />
                <p>Konsultasi</p>
              </a>
            </div>
            <a href="/formulir">
              <FaWpforms className="text-4xl cursor-pointer hover:text-primary/80 duration-300 ease-in-out" />
            </a>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <div className="p-5 sm:hidden flex items-center justify-between w-full">
        <button onClick={toggleMenu}>
          <HiMenuAlt2 className="text-3xl text-primary" />
        </button>
        <img src="/logo_daycare.svg" alt="Logo" className="w-[70px]" />
        <div className="flex items-center gap-3">
          <a href="/formulir">
            <FaWpforms className="text-3xl text-primary" />
          </a>
          <a
            href="https://wa.me/6285138750174/"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlinePhoneEnabled className="text-[28px] text-primary" />
          </a>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-background z-50 p-6 text-primary sm:hidden flex flex-col">
          <div className="flex justify-end">
            <button onClick={toggleMenu}>
              <IoMdCloseCircle className="text-4xl" />
            </button>
          </div>

          <div className="mt-10 flex flex-col text-center space-y-6 text-2xl font-semibold">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-primary" : ""
                }
                onClick={toggleMenu}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-12 mx-auto text-center">
            <a
              href="https://wa.me/6285138750174/"
              target="_blank"
              rel="noreferrer"
              className="block mt-4"
            >
              <MdOutlinePhoneEnabled className="text-2xl mx-auto mb-1" />
              <p className="text-sm">Konsultasi</p>
            </a>
            <a href="/formulir" className="block mt-4">
              <FaWpforms className="text-2xl mx-auto" />
              <p className="text-sm">Formulir</p>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
