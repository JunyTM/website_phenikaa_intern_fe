import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Auth from "../views/auth/Auth";
import Role from "../views/role/Role";
import Login from "../views/login/Login";
import Home from "../views/home/Home";
import InternShip from "../views/intern/InternShip";
import CompanyScreen from "../views/company/Company";

import Coding from "../views/error/Coding";
const Router: React.FC = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },

    { path: "/", element: <Auth children={Login} /> },
    {
      path: "/home",
      element: <Role role={["student", "company", "admin"]} children={Home} />,
    },
    {
      path: "/internship",
      element: (
        <Role role={["student", "company", "admin"]} children={InternShip} />
      ),
    },

    {
      path: "/company",
      element: <Role role={["company", "admin"]} children={CompanyScreen} />,
    },

    { path: "/coding", element: <Coding /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
