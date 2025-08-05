import { MdOutlinePhoneEnabled } from "react-icons/md";

import { Link, NavLink, useLocation } from "react-router-dom";

import { IoMdCloseCircle } from "react-icons/io";

import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  let location = useLocation();
  let tentang = "/tentang-kami";
  console.log(location);

  const [Menu, setMenu] = useState(false);
  const handleMenuClick = () => {
    setMenu(!Menu);
  };
  return (
    <>
      <nav
        className={
          location.pathname === tentang
            ? "hidden sm:block  font-rhodium text-white "
            : "hidden sm:block bg-background font-rhodium text-primary "
        }
      >
        {/* DESKTOP */}
        <div className="sm:flex md:hidden lg:flex items-center justify-between sm:px-[50px] sm:py-[32px] ">
          {/* LOGO */}
          <div>
            <img src="/logo_daycare.svg" alt="logo" className="w-[72px]" />
          </div>
          <div className="flex items-center text-[20px] gap-10 bg-white p-3 rounded-2xl ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-primary p-1" : " text-primary hover:border-b-2  hover:border-primary hover:p-1 ease-in-out duration-300  p-1"
              }
            >
              Beranda
            </NavLink>
            <NavLink
              to="/tentang-kami"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-primary text-primary p-1"
                  : "hover:border-b-2 text-primary hover:border-primary hover:p-1 ease-in-out duration-300 p-1"
              }
            >
              Tentang Kami
            </NavLink>
            <NavLink
              to="/penitipan"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-primary text-primary  p-1"
                  : "hover:border-b-2 text-primary hover:border-primary hover:p-1 ease-in-out duration-300 p-1"
              }
            >
              Tipe Penitipan
            </NavLink>
            <NavLink
              to="/galeri"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-primary text-primary p-1"
                  : "hover:border-b-2 text-primary hover:border-primary hover:p-1 ease-in-out duration-300  p-1"
              }
            >
              Galeri
            </NavLink>
          </div>
          <div className="text-[20px] flex gap-2">
            <div className="p-3 bg-white rounded-2xl">
              <a
                href={`https://wa.me/6285138750174/`}
                target="blank"
                className="flex gap-2 items-center"
              >
                <MdOutlinePhoneEnabled
                  className={
                    location.pathname === tentang
                      ? "text-white"
                      : "text-primary"
                  }
                />
                <p>Konsultasi</p>
              </a>
            </div>
            <Cart
              warna={"text-primary"}
              bgAngka={"bg-primary"}
              warnaAngka={"text-secondary"}
            />
          </div>
        </div>
      </nav>
      {/* MOBILE */}
      <div className="p-5 sm:hidden md:flex lg:hidden flex items-center justify-between">
        <button className="" onClick={handleMenuClick}>
          <img src="/icons/menu-fries-left.svg" alt="" className="w-[30px]" />
        </button>
        <img src="/logo/logoBiru.png" className="w-[70px]" alt="" />

        <div className="text-[20px] gap-2 flex">
          <Cart
            warna={"text-primary"}
            bgAngka={"bg-primary"}
            warnaAngka={"text-secondary"}
          />
          <a
            href={`https://wa.me/6285138750174`}
            target="blank"
            className="flex gap-2 items-center"
          >
            <MdOutlinePhoneEnabled className="text-[30px] text-primary" />
          </a>
        </div>
      </div>
      {Menu && (
        <div className="p-5 gap-5 bg-background text-[32px] fixed top-0 left-0 z-50 w-screen h-screen transition text-primary">
          <div className="flex flex-col justify-between relative top-[25vh] text-center">
            <div className="flex flex-col gap-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-primary p-1" : "text-primary"
                }
              >
                Beranda
              </NavLink>
              <NavLink
                to="/tentang-kami"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-primary p-1" : "text-primary"
                }
              >
                Tentang Kami
              </NavLink>
              <NavLink
                to="/produk"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-primary p-1" : "text-primary"
                }
              >
                Produk
              </NavLink>
              <NavLink
                to="/informasi"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-primary p-1" : "text-primary"
                }
              >
                Informasi
              </NavLink>
            </div>
            <div className="mx-auto ">
              <button onClick={handleMenuClick} className="mx-auto">
                <IoMdCloseCircle className="fixed bottom-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
