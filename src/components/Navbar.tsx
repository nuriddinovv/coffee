import { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import logo from "/logo.jpg";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full h-[72px] border-b border-gray-200">
      <div className="h-full px-4 flex items-center gap-4 relative">
        <div className="flex-1">
          <div className="bg-white w-full flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-xl shadow-sm">
            <IoIosSearch size={20} className="text-gray-500" />
            <input
              type="text"
              className="text-sm md:text-base w-full outline-none placeholder:text-gray-400"
              placeholder="Search orders, clients or products..."
            />
          </div>
        </div>

        <div className="relative flex items-center gap-2" ref={dropdownRef}>
          <div className="hidden md:block">
            <p className="text-base">Rakhmatjon</p>
            <p className="italic text-gray-400 text-sm">Barista</p>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-14 h-14 rounded-full overflow-hidden border border-main/20 bg-white shadow-sm hover:shadow-md transition"
          >
            <img
              src={logo}
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </button>
          <div
            className={`absolute right-0 mt-42 w-48 bg-white shadow-lg border border-gray-200 rounded-xl p-3 transition-all duration-200 z-50
              ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 pointer-events-none -translate-y-2"
              }
            `}
          >
            <ul className="text-sm text-main font-medium">
              <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
                className="px-3 py-2 rounded-lg hover:bg-red-50 text-red-500 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
