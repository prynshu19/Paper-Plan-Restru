import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import HomeSkeleton from "../../shared/ui/components/HomeSkeleton";

const PublicRoutes = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  if (isLoading) {
    return <HomeSkeleton />;
  }

  if (user) {
    return <Navigate to={"/home"} />;
  }

  return <Outlet />;
};

export default PublicRoutes;
