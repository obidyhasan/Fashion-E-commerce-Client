import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ShopPage from "../pages/Shop/ShopPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SearchPage from "../pages/Search/SearchPage";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/shop",
          element: <ShopPage></ShopPage>,
        },
        {
          path: "/product-details",
          element: <ProductDetails></ProductDetails>,
        },
        {
          path: "/checkout",
          element: <CheckoutPage></CheckoutPage>,
        },
        {
          path: "/profile",
          element: <ProfilePage></ProfilePage>,
        },
        {
          path: "/search",
          element: <SearchPage></SearchPage>,
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        },
        {
          path: "/register",
          element: <RegisterPage></RegisterPage>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routers;
