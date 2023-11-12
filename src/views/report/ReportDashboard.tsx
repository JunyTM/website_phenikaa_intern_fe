import React from "react";
import "./index.css";
import Header from "../../components/layout/header/Header";
import NavBar from "../../components/layout/navbar/NavBar";
import NavBarIcon from "../../components/layout/navbar/NavBarIcon";
import CompanyBox from "../../components/dashboard/CompanySelftBox";
import ListReportApply from "../../components/reportDashboard/ListReportApply";
import EvaluateReportForm from "../../components/formInput/EvaluateReportForm";

const ReportDashboard: React.FC<any> = () => {
  return (
    <div id="report" className="relative">
      <Header />
      <NavBar />
      <NavBarIcon />
      <CompanyBox />
      <ListReportApply />
      <EvaluateReportForm />
    </div>
  );
};

export default ReportDashboard;
