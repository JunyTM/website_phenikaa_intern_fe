import React from "react";
import "./index.css";
import Header from "../../layout/header/Header";
import NavBar from "../../layout/navbar/NavBar";
import NavBarIcon from "../../layout/navbar/NavBarIcon";
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
