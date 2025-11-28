import { createBrowserRouter, redirect } from "react-router";
import { getUserId } from "@/utils/auth";
import { SellerLayout } from "@/layouts/seller-layout";
import { DashboardAdminPage } from "@/pages/admin/dashboard";
import { AdminLayout } from "@/layouts/admin-layout";
import { Auth } from "@/pages/auth";
import { AllProductsPage } from "@/pages/seller/all";
import { CoffeePage } from "@/pages/seller/coffee";
import { CookiesPage } from "@/pages/seller/cookies";
import { DesertsPage } from "@/pages/seller/deserts";
import { DrinksPage } from "@/pages/seller/drinks";
import { ErrorPage } from "@/pages/error";
import { BranchesAdminPage } from "@/pages/admin/branches";
import { ProductsAdminPage } from "@/pages/admin/products";
import { BranchAdminPage } from "@/pages/admin/branch";

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
    children: [
      { index: true, element: <DashboardAdminPage /> },
      { path: "branches", element: <BranchesAdminPage /> },
      { path: "branches/:id", element: <BranchAdminPage /> },
      { path: "products", element: <ProductsAdminPage /> },
    ],
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
