export const LoginApi = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const response = await fetch(`/api/v1/login/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: login,
    }),
  });

  const data = await response.json();
  return data;
};
