import { createBrowserRouter, redirect } from "react-router";
import { getUserId } from "@/utils/auth";
import { SellerLayout } from "@/layouts/seller-layout";
import { Home } from "@/pages/admin/Home";
import { AdminLayout } from "@/layouts/admin-layout";
import { Auth } from "@/pages/auth";
import { AllProductsPage } from "@/pages/seller/all";
import { CoffeePage } from "@/pages/seller/coffee";
import { CookiesPage } from "@/pages/seller/cookies";
import { DesertsPage } from "@/pages/seller/deserts";
import { DrinksPage } from "@/pages/seller/drinks";
import { ErrorPage } from "@/pages/error";

const requireAuth = async () => {
  const id = getUserId();
  if (!id) {
    return redirect("/auth");
  }
  return null;
};

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/admin",
    loader: requireAuth,
    element: <AdminLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/",
    loader: requireAuth,
    element: <SellerLayout />,
    children: [
      { index: true, element: <AllProductsPage /> },
      { path: "coffee", element: <CoffeePage /> },
      { path: "cookies", element: <CookiesPage /> },
      { path: "deserts", element: <DesertsPage /> },
      { path: "drinks", element: <DrinksPage /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
