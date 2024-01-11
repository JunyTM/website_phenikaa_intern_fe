import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Role from "../views/role/Role";
import { ROUTE } from "../constants/router";
import { Auth, LoginPage, RegistPage, ForgotPage } from "../views/auth";

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
    { path: ROUTE.LOGIN.PATH, element: <LoginPage /> },
    { path: ROUTE.REGISTER.PATH, element: <RegistPage /> },
    { path: ROUTE.FORGOT_PASSWORD.PATH, element: <ForgotPage /> },
    {
      path: ROUTE.HOME.PATH,
      element: <Role role={ROUTE.HOME.AUTHOR} children={Home} />,
    },
    {
      path: ROUTE.COMPANY.PATH,
      element: <Role role={ROUTE.COMPANY.AUTHOR} children={CompanyScreen} />,
    },
    {
      path: ROUTE.INTERNSHIP.PATH,
      element: <Role role={ROUTE.INTERNSHIP.AUTHOR} children={InternShip} />,
    },
    {
      path: ROUTE.INTERNSHIP.JOB_DETAIL.PATH,
      element: (
        <Role
          role={ROUTE.INTERNSHIP.JOB_DETAIL.AUTHOR}
          children={InternJobDetail}
        />
      ),
    },

    {
      path: ROUTE.PROFILE.PATH,
      element: <Role role={ROUTE.PROFILE.AUTHOR} children={Profile} />,
    },

    {
      path: ROUTE.REPORT_INTERNSHIP.PATH,
      element: <Role role={ROUTE.REPORT_INTERNSHIP.AUTHOR} children={ReportDashboard} />,
    },
    { path: ROUTE.ERROR.PATH, element: <Page404 /> },
    { path: "*", element: <Page404 /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
