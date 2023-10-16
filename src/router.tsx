import { FC } from "react";
import { ROLE_USER } from "./types/role";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/users/UserPage";

type GroupRoute = "public" | "private";

interface IRoute {
  path: string;
  element: FC;
  role?: ROLE_USER[];
}

const routes: Record<GroupRoute, IRoute[]> = {
  public: [
    {
      path: "login",
      element: LoginPage,
      role: [ROLE_USER.UNKNOWN],
    },
    {
      path: "register",
      element: RegisterPage,
      role: [ROLE_USER.UNKNOWN],
    },
  ],
  private: [
    {
      path: "users",
      element: UserPage,
    },
  ],
};

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "auth",
    element: <DefaultLayout />,
    children: routes.public.map((route) => ({
      path: route.path,
      element: <route.element />,
    })),
  },
  {
    path: "/",
    children: routes.private.map((route) => ({
      path: route.path,
      element: <route.element />,
    })),
  },
]);

export default router;
