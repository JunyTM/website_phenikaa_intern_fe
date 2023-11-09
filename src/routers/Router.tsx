import React from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";

import Auth from "../views/auth/Auth";
import Login from "../views/login/Login";
import Home from "../views/home/Home";
const Router: React.FC = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },

    { path: "/", element: <Auth children={Home} /> },
    { path: "/home", element: <Home /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
