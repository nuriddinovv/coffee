export type AuthResponse = {
  access: string;
  refresh?: string;
};

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

  return data;
};
