import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { PiSquaresFour } from "react-icons/pi";
import { FiCoffee } from "react-icons/fi";
import { LuCookie } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";

export default function SallerLayout() {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="h-screen border-r border-gray-300 w-[72px] overflow-auto md:w-[280px]">
          <ul className="p-1 flex flex-col gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `p-2 flex items-center gap-2 rounded-md transition ${
                    isActive
                      ? "bg-main text-second"
                      : "text-main hover:bg-main/10"
                  }`
                }
              >
                <PiSquaresFour size={28} />
                <p>Barcha Mahsulotlar</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/coffee"
                className={({ isActive }) =>
                  `p-2 flex items-center gap-2 rounded-md transition ${
                    isActive
                      ? "bg-main text-second"
                      : "text-main hover:bg-main/10"
                  }`
                }
              >
                <FiCoffee size={28} />
                <p>Kofe va Choylar</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cookies"
                className={({ isActive }) =>
                  `p-2 flex items-center gap-2 rounded-md transition ${
                    isActive
                      ? "bg-main text-second"
                      : "text-main hover:bg-main/10"
                  }`
                }
              >
                <LuCookie size={28} />
                <p>Shirinliklar</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hoddog"
                className={({ isActive }) =>
                  `p-2 flex items-center gap-2 rounded-md transition ${
                    isActive
                      ? "bg-main text-second"
                      : "text-main hover:bg-main/10"
                  }`
                }
              >
                <IoFastFoodOutline size={28} />
                <p>Hoddog</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
