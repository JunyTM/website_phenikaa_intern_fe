import React from "react";
import "./index.css";
import Header from "../../components/layout/header/Header";
import NavBar from "../../components/layout/navbar/NavBar";
import NavBarIcon from "../../components/layout/navbar/NavBarIcon";
import ProfileInfoDetail from "../../components/profileDashboard/ProfileInfoDetail";
import ProfileApply from "../../components/profileDashboard/ListProfileApply";

const Profile: React.FC = () => {
  return (
    <div id="profile" className="relative">
      <Header />
      <NavBar />
      <NavBarIcon />
      <ProfileInfoDetail />
      <ProfileApply />
    </div>
  );
};

export default Profile;
