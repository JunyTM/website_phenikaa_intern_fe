import React from "react";
import Header from "../../layout/header/Header";
import NavBar from "../../layout/navbar/NavBar";
import NavBarIcon from "../../layout/navbar/NavBarIcon";
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
