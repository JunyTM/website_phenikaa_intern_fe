import React from "react";
import "./index.css";
import Header from "../../layout/header/Header";
import NavBar from "../../layout/navbar/NavBar";
import NavBarIcon from "../../layout/navbar/NavBarIcon";
import CompanyAdminBox from "../../components/dashboard/CompanyAdminBox";
import CompanyBox from "../../components/dashboard/CompanySelftBox";
import EvaluateBox from "../../components/dashboard/EvaluateBox";
import EvaluateAdminBox from "../../components/dashboard/EvaluateAdminBox";
const CompanyScreen: React.FC<any> = () => {
  const role = localStorage.getItem("UserRole");

  return (
    <div id="Company" className="relative">
      <Header />
      <NavBar />
      <NavBarIcon />
      {role === "admin" ? <CompanyAdminBox /> : <CompanyBox />}
      {role === "admin" ? <EvaluateAdminBox /> : <EvaluateBox />}
    </div>
  );
};

export default CompanyScreen;
