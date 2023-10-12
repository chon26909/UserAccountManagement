import { FC } from "react";
import { ROLE_USER } from "./types/role";
import LoginPage from "./pages/LoginPage";

type GroupRoute = "public" | "private";

interface IRoute {
  path: string;
  role?: ROLE_USER[];
  element: FC;
}

const routes: Record<GroupRoute, IRoute[]> = {
  public: [
    {
      path: "/login",
      element: LoginPage,
      role: [ROLE_USER.ADMIN],
    },
  ],
  private: [],
};

export default routes;
