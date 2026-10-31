import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateUser } from "../../features/auth/state/authAction";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(hydrateUser());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
