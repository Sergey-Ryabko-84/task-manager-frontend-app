import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { selectAuth } from "../../redux/auth/selectors";

const PrivateRoute = ({ redirectTo = "login" }) => {
  const { isLoggedIn, token } = useAppSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <p>...Loading</p>;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
