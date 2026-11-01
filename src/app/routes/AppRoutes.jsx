import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateUser } from "../../features/auth/state/authAction";
import PublicRoutes from "./PublicRoutes";
import Home from "../../shared/ui/pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../../shared/ui/pages/About";
import Contact from "../../shared/ui/pages/Contact";
import Profile from "../../shared/ui/pages/Profile";
import { getProducts } from "../../features/menu/api/menuApi";
import Menu from "../../features/menu/ui/pages/Menu";
import Cart from "../../features/cart/ui/pages/Cart";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(hydrateUser());
      getProducts();
    })();
  }, []);

  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        {
          element: <PublicRoutes />,
          children: [
            {
              path: "/",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    {
      element: <MainLayout />,
      children: [
        {
          element: <PrivateRoutes />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
            {
              path: "/profile",
              element: <Profile />,
            },
            {
              path: "/menu",
              element: <Menu />,
            },
            {
              path: "/cart",
              element: <Cart />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
