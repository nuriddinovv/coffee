import type { FC } from "react";
import { useParams } from "react-router";
import data from "@/api/api.json";

export const BranchAdminPage: FC = () => {
  const { id } = useParams();

  if (!id) return <div>No id provided</div>;

  const branch = data.branches.find((b) => b.id === Number(id));

  if (!branch) return <div>Branch not found</div>;

  return (
    <div>
      <div>
        <h1>{branch.name}</h1>
        <img src={branch.image} width={80} height={80} className="rounded-lg" />
        <p className="text-lg mt-2">{branch.address}</p>
        <p className="text-lg mt-2">{branch.description}</p>
      </div>
      <div className="flex justify-around">
        <div>
          <p>Baristalar soni: 2</p>
        </div>
        <div>
          <button className="bg-green-800 text-white py-2 px-4 rounded-xl absolute">
            Qoshish
          </button>
        </div>
      </div>
    </div>
  );
};
