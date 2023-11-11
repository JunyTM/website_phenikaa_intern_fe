import React from "react";
import Header from "../../components/layout/header/Header";
import NavBar from "../../components/layout/navbar/NavBar";
import NavBarIcon from "../../components/layout/navbar/NavBarIcon";
import InternDashboard from "../../components/internDashboard/InternDashboard";
import "./index.css";

const InternShip: React.FC<any> = () => {
  return (
    <div id="internShip" className="relative">
      <Header />
      <NavBar />
      <NavBarIcon />
      <InternDashboard />
    </div>
  );
};

export default InternShip;
