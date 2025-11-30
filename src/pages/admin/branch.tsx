import { type FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "@/api/api.json";
import { AddUserApi } from "@/api/post";
import { GetUserApi } from "@/api/get";

export const BranchAdminPage: FC = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  // baristani qoshish uchun statela
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // uset/list dan kegan datani shotga qoydim
  const [users, setUsers] = useState<any[]>([]);
  const [userCount, setUserCount] = useState<number>(0);

  if (!id) return <div>No id provided</div>;
  const branch = data.branches.find((b) => b.id === Number(id));
  if (!branch) return <div>Branch not found</div>;

  // tepadigini shota ishlatim
  const loadUsers = async () => {
    try {
      const res = await GetUserApi();
      setUsers(res.results);
      setUserCount(res.count);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleRegister = async () => {
    try {
      setLoading(true);
      await AddUserApi({
        email,
        first_name,
        last_name,
        password,
      });

      alert("User registered!");
      setIsOpen(false);

      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");

      loadUsers();
    } catch (e) {
      alert("Error during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[1000px] mx-auto pb-10">
      <div>
        <h1 className="text-center text-2xl py-2">Nomi: {branch.name}</h1>
        <img
          src={branch.image}
          className="h-[300px] w-full object-cover rounded-lg"
        />
        <p className="text-lg mt-2">Manzil: {branch.address}</p>
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-lg">
          Baristalar soni: <span className="font-semibold">{userCount}</span>
        </p>
        <button
          className="bg-[#00754A] text-white py-2 px-4 rounded-xl"
          onClick={() => setIsOpen(true)}
        >
          Qoshish
        </button>
      </div>

      {/* USER LIST */}
      <div className="mt-6 bg-white rounded-xl border border-[#E5E7EB] py-10 px-3">
        <h2 className="text-xl font-semibold mb-4">Baristalar royxati</h2>

        {users.length === 0 ? (
          <p className="text-gray-500">Hozircha barista yoq</p>
        ) : (
          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="border border-[#E5E7EB] p-3 rounded-lg flex justify-between items-center hover:bg-gray-50 transition"
              >
                <div>
                  <p className="text-lg font-medium">
                    {user.first_name} {user.last_name}
                  </p>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>

                <button className="bg-red-500 text-white py-1 px-3 rounded-lg text-sm">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80">
            <h2 className="text-xl mb-3">Yengi Barista</h2>

            <input
              className="border w-full mb-2 p-2 rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="border w-full mb-2 p-2 rounded"
              placeholder="Ism"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              className="border w-full mb-2 p-2 rounded"
              placeholder="Familiya"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              className="border w-full mb-3 p-2 rounded"
              placeholder="Parol"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex gap-3">
              <button
                className="bg-gray-400 text-white py-2 px-4 rounded-xl w-full"
                onClick={() => setIsOpen(false)}
              >
                Bekor qilish
              </button>

              <button
                className="bg-[#00754A] text-white py-2 px-4 rounded-xl w-full"
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? "..." : "Saqlash"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
