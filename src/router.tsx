import { FC } from "react";
import { ROLE_USER } from "./types/role";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/users/UserPage";
import UserPosts from "./pages/users/UserPosts";
import AdminLayout from "./layouts/AdminLayout";

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
    },
    {
      path: "register",
      element: RegisterPage,
    },
  ],
  private: [
    {
      path: "users",
      element: UserPage,
    },
    {
      path: "users/:userId/posts",
      element: UserPosts,
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
    element: <AdminLayout />,
    children: routes.private.map((route) => ({
      path: route.path,
      element: <route.element />,
    })),
  },
  // {
  //   path: "/lazy",
  //   async lazy() {
  //     const UserPage = await import("./pages/users/UserPage");
  //     return {
  //       Component: UserPage,
  //     };
  //   },
  // },
]);

export default router;
