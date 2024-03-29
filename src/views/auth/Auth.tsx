import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/router";

const Auth: React.FC<any> = ({ children: Children }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("AccessToken") === undefined) {
      Cookies.remove("AccessToken");
      Cookies.remove("RefreshToken");
    } else {
      navigate(ROUTE.HOME.PATH);
    }
  }, [Cookies.get("AccessToken")]);

  return (
    <React.Fragment>
      <Children />
    </React.Fragment>
  );
};

export default Auth;
