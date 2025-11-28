import type { FC } from "react";
import { Link } from "react-router";
import data from "@/api/api.json";

export interface IBranches {
  id: number;
  name: string;
  address: string;
  description: string;
  image: string;
}

export const BranchesAdminPage: FC = () => {
  const branches: IBranches[] = data.branches as IBranches[];

  return (
    <div className="flex">
      {branches.map((branch) => (
        <Link
          key={branch.id}
          to={`${branch.id}`}
          className="border rounded-xl p-3 flex flex-col items-center hover:bg-gray-100 transition"
        >
          <h1>{branch.name}</h1>
          <img
            src={branch.image}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <p className="text-lg mt-2">{branch.address}</p>
          <p className="text-lg mt-2">{branch.description}</p>
        </Link>
      ))}
    </div>
  );
};
