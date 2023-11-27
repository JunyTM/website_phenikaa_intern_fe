import "./index.css";
import React, { useEffect } from "react";
import Header from "../../layout/header/Header";
import NavBar from "../../layout/navbar/NavBar";
import NavBarIcon from "../../layout/navbar/NavBarIcon";
import MainBox from "../../components/infoBox/MainBox";
import SubBox from "../../components/infoBox/SubBox";
import HomeBanner from "../../components/banner/HomeBanner";
import { thunkFunctionProfile } from "../../redux/profileSlice/profile.action";
import { useDispatch } from "react-redux";

const Home: React.FC<any> = () => {
  const dispatch = useDispatch();
  const userRole = localStorage.getItem("UserRole");

  useEffect(() => {
    if (userRole === "company") {
      return
    }
    thunkFunctionProfile.getProfileInfo(dispatch);
  }, []);

  return (
    <div id="home" className="relative">
      <Header />
      <NavBar />
      <NavBarIcon />
      <MainBox />
      <SubBox />
      <HomeBanner />
    </div>
  );
};

export default Home;
