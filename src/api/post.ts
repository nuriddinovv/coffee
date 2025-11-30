import type { AuthResponse } from "@/utils/interfaces";

export const AuthApi = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}): Promise<AuthResponse> => {
  const res = await fetch("/api/v1/login/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email: login,
      password,
    }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const data: AuthResponse = await res.json();

  localStorage.setItem("access_token", data.access);

  if (data.refresh) {
    localStorage.setItem("refresh_token", data.refresh);
  }

  return data;
};

export const AddUserApi = async ({
  email,
  first_name,
  last_name,
  password,
}: {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}) => {
  const res = await fetch("/api/v1/register/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      first_name,
      last_name,
      password,
    }),
  });

  if (!res.ok) throw new Error("Registration failed");

  return res.json();
};
