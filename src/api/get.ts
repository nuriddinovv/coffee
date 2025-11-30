import type {
  IUserListResponse,
  IProductListResponse,
} from "@/utils/interfaces";

export const GetUserApi = async (): Promise<IUserListResponse> => {
  const token = localStorage.getItem("access_token");

  const res = await fetch("/api/v1/user/list/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: IUserListResponse = await res.json();
  return data;
};

export const GetProductApi = async (): Promise<IProductListResponse> => {
  const token = localStorage.getItem("access_token");

  const res = await fetch("/api/v1/product/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: IProductListResponse = await res.json();
  return data;
};
