import { useState, type FC, useEffect, useRef } from "react";
import logo from "/logo.jpg";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import { BiLogOut } from "react-icons/bi";
import { GetUserApi, type IUserListResponse } from "@/api/get";
import useFetch from "@/api/useFetch";

export const NavBar: FC = ({ value, onChange }: any) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // тянем весь список юзеров
  const { data } = useFetch<IUserListResponse | null>(GetUserApi);

  const userId = Number(localStorage.getItem("userId"));

  const currentUser = data?.results?.find((u) => u.id === userId) || null;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="flex items-center justify-between bg-[#FFFFFF] border-b border-b-[#E5E7EB] px-5">
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

      <div className="relative w-full max-w-[700px]">
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
      </div>

      <div className="flex items-center gap-5 mx-13">
        <div className="flex items-center">
          <span>
            <p className="font-normal text-[16px] text-[#212121]">
              {currentUser
                ? currentUser.username ||
                  currentUser.first_name ||
                  currentUser.email
                : "Tizimga kiritilmagan"}
            </p>
            <p className="font-normal text-[14px] text-[#6A7282]">
              {currentUser ? "Seller" : "Tizimda yo'q"}
            </p>
          </span>

          <div className="relative inline-block" ref={ref}>
            <button
              onClick={() => setOpen((o) => !o)}
              className="
                bg-white border-none 
                rounded-full text-5xl mx-2 p-2 font-medium 
                cursor-pointer text-gray-400
              "
            >
              <FaUserCircle />
            </button>
            {open && (
              <div
                className="
                  absolute right-0 mt-2 w-32
                  bg-white rounded-lg shadow-lg 
                  ring-1 ring-black/10 z-20
                "
              >
                <button
                  onClick={logout}
                  className="
                    flex items-center gap-2 w-full 
                    px-3 py-2 text-xl text-red-600 
                    hover:bg-red-50 rounded-md transition
                  "
                >
                  <BiLogOut className="text-red-600 text-xl" />
                  Chiqish
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
