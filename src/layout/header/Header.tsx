import React, { useState } from "react";
import { Button } from "@mantine/core";
import Marquee from "react-fast-marquee";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import * as authSlice from "../../redux/authSlice/authenSclice";
import { RootState } from "../../redux/Store";
import { useSelector, useDispatch } from "react-redux";
import { UserReponse } from "../../model/user";
import { ROUTE } from "../../constants/router";

const Header: React.FC<any> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(
    (state: RootState) => state.auth.user?.Profile?.phone
  );
  const handelSignOut = () => {
    Cookies.remove("AccessToken");
    Cookies.remove("RefreshToken");
    dispatch(authSlice.logOut());
    navigate(ROUTE.LOGIN.PATH);
  };

  return (
    <div className="w-full h-[6%] bg-slate-100 rounded-b-xl shadow-2xl shadow-gray-500 z-50 flex flex-row fixed">
      <div className="w-[70%] h-full flex flex-row">
        <Link to="/">
          <img
            className="w-14 h-14 ml-48"
            src="https://truongtop1.com/wp-content/uploads/2023/03/Logo-DH-Phenikaa.png"
            alt="phenikaa"
          />
        </Link>

        <div className="w-1/2 h-full ml-10 pt-2">
          <Marquee className="h-full" gradient={false} speed={20}>
            <p className="mr-24 text-sm"> Tôn trọng - Sáng tạo - Phản biện </p>
            <p className="mr-24 text-sm"> Tôn trọng - Sáng tạo - Phản biện </p>
            <p className="mr-24 text-sm"> Tôn trọng - Sáng tạo - Phản biện </p>
          </Marquee>
        </div>
      </div>

      <div className="ml-28 w-30% h-full flex flex-row items-center justify-between">
        <p className="text-md font-semibold opacity-90">
          {userName ? userName : "Tô Kim Mạnh"}
        </p>
        <Button
          className="w-28 h-8"
          variant="light"
          color="blue"
          radius="md"
          size="xs"
          onClick={handelSignOut}
        >
          / ĐĂNG XUẤT{" "}
        </Button>
      </div>
    </div>
  );
};

export default Header;
