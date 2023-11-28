import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Role from "../views/role/Role";
import { Auth, LoginPage, RegistPage } from "../views/auth";

import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import InternShip from "../views/intern/InternShip";
import CompanyScreen from "../views/company/Company";
import InternJobDetail from "../views/intern/InternJobDetail";
import ReportDashboard from "../views/report/ReportDashboard";
import Page404 from "../views/error/Page404";
// import Coding from "../views/error/Coding";

const Router: React.FC = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Auth children={LoginPage} /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegistPage /> },
    { path: "/forgot-password", element: <Page404 /> },
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

    { path: "/coding", element: <Page404 /> },

    {
      path: "/internship/:idJob",
      element: (
        <Role
          role={["student", "company", "admin"]}
          children={InternJobDetail}
        />
      ),
    },

    {
      path: "/profile",
      element: <Role role={["student"]} children={Profile} />,
    },

    {
      path: "/interview",
      element: <Role role={["company"]} children={ReportDashboard} />,
    },

    { path: "*", element: <Page404 /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
