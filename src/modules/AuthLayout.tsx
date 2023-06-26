import { useEffect } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { refreshUser } from "../redux/auth/operations";
import { IPropChildren } from "../types/types";

const AuthLayout: React.FC<IPropChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLayout;
