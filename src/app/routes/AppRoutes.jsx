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

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(hydrateUser());
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
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
