import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./modules/Routes/RestrictedRoute";
import PrivateRoute from "./modules/Routes/PrivateRoute";
import Layout from "./modules/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const TasksPage = lazy(() => import("./pages/TasksPage"));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<RestrictedRoute redirectTo="categories" />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute redirectTo="login" />}>
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="categories/:id" element={<TasksPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
