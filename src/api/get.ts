export interface IUser {
  id?: number;
  username?: string | null;
  email?: string;
  first_name?: string;
  last_name?: string;
  is_active?: boolean;
}

export interface IUserListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IUser[];
}

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
