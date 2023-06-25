import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ redirectTo = "categories" }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
};

export default RestrictedRoute;
