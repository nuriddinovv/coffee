import { createBrowserRouter, redirect } from "react-router";
import { getUserId } from "../utils/auth";
//layouts
import SallerLayout from "../layouts/SallerLayout";
import ManagerLayout from "../layouts/ManagerLayout";

// Saller pages
import AllProducts from "../pages/saller/AllProducts";

// Manager pages
import Home from "../pages/manager/Home";

// Error page
import Error from "../pages/Error";

// Login page
import Login from "../pages/Login";

const requireAuth = async () => {
  const id = getUserId();
  if (!id) {
    return redirect("/login");
  }
  return null;
};

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    loader: requireAuth,
    element: <SallerLayout />,
    children: [{ index: true, element: <AllProducts /> }],
  },
  {
    path: "/admin",
    loader: requireAuth,
    element: <ManagerLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  { path: "*", element: <Error /> },
]);
