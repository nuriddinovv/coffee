import { type FC } from "react";
import logo from "/logo.jpg";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { BiLogOut } from "react-icons/bi";
import { NavLink, Outlet } from "react-router";
import {
  // FaCoffee,
  FaBorderAll,
  // FaCookieBite,
  // FaBirthdayCake,
} from "react-icons/fa";
// import { RiDrinks2Fill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";

export const AdminLayout: FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <>
      {/* NavBar */}
      <div className="flex items-center justify-between bg-[#FFFFFF] border-b border-b-[#E5E7EB] px-5 py-2 select-none">
        <div className="flex items-center w-72">
          <img
            src={logo}
            width="56"
            height="56"
            alt="JZR COFFEE"
            className="rounded-full"
          />
          <p className="font-normal text-[24px] ml-4">COFFEE</p>
        </div>

        {/* <div className="relative w-full max-w-[700px]">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Поиск..."
          className="
            w-full
            h-10
            pl-10 pr-3 py-2 
            rounded-lg
            bg-gray-100
            border border-gray-300
            focus:outline-none
            focus:border-green-600
            focus:ring-1
            focus:ring-green-600
            transition
          "
        />
      </div> */}

        <div className="flex items-center">
          <span className="flex items-center mr-5">
            <FaUserCircle className="text-gray-600 text-2xl" />
            <p className="ml-2">Admin</p>
          </span>
          <button
            onClick={logout}
            className="
                    flex items-center gap-2 w-full 
                    px-3 py-2 text-xl text-red-600 
                    bg-red-50 rounded-md hover:bg-red-200 transition
                  "
          >
            <BiLogOut className="text-red-600 text-xl" />
            Chiqish
          </button>
        </div>
      </div>
      {/* CategoriesBar and Outlet */}

      <div className="flex h-screen">
        <div className="w-72 h-full bg-[#FFFFFF] flex flex-col items-center px-5 py-3.5 border-r border-r-[#E5E7EB]">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              [
                "flex items-center gap-3  px-6 py-3.5 rounded-2xl transition-all w-full",
                "text-lg font-normal",
                isActive ? "bg-[#00754A]  text-white " : "text-black",
              ].join(" ")
            }
          >
            <FaBorderAll className="text-xl" />
            Dashboard
          </NavLink>
          <NavLink
            to="branches"
            className={({ isActive }) =>
              [
                "flex items-center gap-3  px-6 py-3.5 rounded-2xl transition-all w-full",
                "text-lg font-normal",
                isActive ? "bg-[#00754A]  text-white " : "text-black",
              ].join(" ")
            }
          >
            <FaMapLocationDot className="text-xl" />
            Branches
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              [
                "flex items-center gap-3  px-6 py-3.5 rounded-2xl transition-all w-full",
                "text-lg font-normal",
                isActive ? "bg-[#00754A]  text-white " : "text-black",
              ].join(" ")
            }
          >
            <FaBoxOpen className="text-xl" />
            Products
          </NavLink>
        </div>
        {/* Outlet(other pages) */}
        <div className="flex-1 overflow-auto p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};
