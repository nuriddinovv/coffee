import type { FC } from "react";
import useFetch from "@/api/useFetch";
import { GetProductApi } from "@/api/get";

export const DesertsPage: FC = () => {
  const { data, loading, error } = useFetch(GetProductApi);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>DesertsPage</h1>

      <div style={{ marginTop: "20px" }}>
        {data?.results.map((item) => (
          <div
            key={item.name}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p>
              <b>Name:</b> {item.name}
            </p>
            <p>
              <b>Price:</b> {item.price_out}
            </p>
            <img
              src={item.image}
              alt={item.name}
              width={120}
              style={{ borderRadius: "6px", marginTop: "10px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
