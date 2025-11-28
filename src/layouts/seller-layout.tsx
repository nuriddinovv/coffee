import type { FC } from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaCoffee,
  FaBorderAll,
  FaCookieBite,
  FaBirthdayCake,
} from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";
import { NavBar } from "@/components/nav-bar";

export const SellerLayout: FC = () => {
  return (
    <>
      {/* NavigationBar */}
      <NavBar value="" onChange={() => {}} />
      {/* CategoriesBar */}
      <div className="flex h-screen">
        <div className="w-72 h-full bg-[#FFFFFF] flex flex-col items-center px-5 py-3.5 border-r border-r-[#E5E7EB]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                "flex items-center gap-3  px-6 py-3.5 rounded-2xl transition-all w-full",
                "text-lg font-normal",
                isActive ? "bg-[#00754A]  text-white " : "text-black",
              ].join(" ")
            }
          >
            <FaBorderAll className="text-xl" />
            All Products
          </NavLink>
          <NavLink
            to="/coffee"
            className={({ isActive }) =>
              [
                "flex items-center gap-3 px-6 py-3.5 rounded-2xl transition-all w-full",
                "text-lg font-normal",
                isActive ? "bg-[#00754A]  text-white " : "text-black",
              ].join(" ")
            }
          >
            <FaCoffee className="text-xl" />
            Qahvalar
          </NavLink>
          <NavLink
            to="/cookies"
            className={({ isActive }) =>
              [
                "flex items-center gap-3 px-6 py-3.5 rounded-2xl transition-all w-full",
                "text-lg font-normal",
                isActive ? "bg-[#00754A]  text-white " : "text-black",
              ].join(" ")
            }
          >
            <FaCookieBite className="text-xl" />
            Pechenyelar
          </NavLink>
          <NavLink
            to="/deserts"
            className={({ isActive }) =>
              [
                "flex items-center gap-3 px-6 py-4 rounded-2xl transition-all w-full",
                "text-lg font-normal",
                isActive ? "bg-[#00754A]  text-white " : "text-black",
              ].join(" ")
            }
          >
            <FaBirthdayCake className="text-xl" />
            Shirinliklar
          </NavLink>
          <NavLink
            to="/drinks"
            className={({ isActive }) =>
              [
                "flex items-center gap-3 px-6 py-3.5 rounded-2xl transition-all w-full",
                "text-lg font-normal",
                isActive ? "bg-[#00754A]  text-white " : "text-black",
              ].join(" ")
            }
          >
            <RiDrinks2Fill className="text-xl" />
            Ichimliklar
          </NavLink>
        </div>
        {/* Outlet(other pages) */}
        <div className="flex-1 overflow-auto p-4">
          <Outlet />
        </div>
      </div>

      {/* Cart */}
      <div>
        <p>cart</p>
      </div>
    </>
  );
};
