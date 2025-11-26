import { useEffect, useState } from "react";
import { BsKeyFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GoEye, GoEyeClosed } from "react-icons/go";
import logo from "/logo.jpg";
import useFetch from "../api/useFetch";
import { LoginApi } from "../api/post";
import { useNavigate } from "react-router";
import { Loader } from "@mantine/core";
// import toast from "react-hot-toast";

type LoginResponse = {
  access: string;
  refresh: string;
};

export default function Login() {
  const [user, setUser] = useState<"barista" | "manager">("manager");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ login: "", password: "" });
  const navigate = useNavigate();
  const {
    data,
    loading,
    error,
    refetch: loginRequest,
  } = useFetch(
    () => LoginApi({ login: formData.login, password: formData.password }),
    false
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginRequest();
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("userId", data.access);
      navigate("/"); // yoki navigate("/admin") nimaga kerak bo'lsa
    }
  }, [data, navigate]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/60 rounded-2xl pt-16 pb-8 px-4 shadow-sm relative">
        {/* LOGO */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <img
            src={logo}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-second shadow-md"
            alt="JZR"
          />
        </div>

        {/* User select buttons */}
        <div className="mt-2 px-1 md:px-4 flex items-center gap-3 mb-6">
          <button
            onClick={() => setUser("manager")}
            className={`h-[42px] w-1/2 rounded-xl border border-main font-bold text-sm md:text-base transition ${
              user === "manager" ? "bg-main text-second" : "bg-white text-main"
            }`}
          >
            Manager
          </button>

          <button
            onClick={() => setUser("barista")}
            className={`h-[42px] w-1/2 rounded-xl border border-main font-bold text-sm md:text-base transition ${
              user === "barista" ? "bg-main text-second" : "bg-white text-main"
            }`}
          >
            Barista
          </button>
        </div>

        {/* Inputs */}
        <form onSubmit={handleSubmit}>
          <div className="px-1 md:px-4">
            {/* LOGIN INPUT */}
            <div className="bg-white w-full flex items-center gap-3 border p-2 rounded-xl border-gray-300 mb-4">
              <FaRegUser size={20} className="text-gray-500" />
              <input
                name="login"
                type="text"
                className="text-sm md:text-base w-full outline-0"
                placeholder="Login"
                onChange={(e) =>
                  setFormData({ ...formData, login: e.target.value })
                }
              />
            </div>

            {/* PASSWORD INPUT */}
            <div className="bg-white w-full flex items-center gap-3 border p-2 rounded-xl border-gray-300">
              <BsKeyFill size={20} className="text-gray-500" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="text-sm md:text-base w-full outline-0"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-gray-500 hover:text-main transition"
              >
                {showPassword ? <GoEyeClosed size={20} /> : <GoEye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="px-1 md:px-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-main h-[42px] text-second w-full mt-6 py-3 rounded-xl font-bold text-sm md:text-base hover:bg-main/90 transition"
            >
              {loading ? <Loader color="white" /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
