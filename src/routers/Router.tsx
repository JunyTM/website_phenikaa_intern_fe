import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Auth from "../views/auth/Auth";
import AppLayout from "../components/layout/AppLayout";
import GroupRouter from "./RouterConfig";

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth children={AppLayout}/>,
      loader: async () => {
        await fetch("/api");
      },
      children: GroupRouter,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;