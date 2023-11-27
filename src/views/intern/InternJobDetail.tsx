import React from "react";
import Header from "../../layout/header/Header";
import InternJobInfoDetail from "../../components/internDashboard/InternJobInfoDetail";
import InternCV from "../../components/internDashboard/InternCV";
import { useParams } from "react-router-dom";

import "./index.css";

const InternJobDetail: React.FC<any> = () => {
  const { idJob } = useParams();
  return (
    <div id="InternJobDetail" className="relative">
      <Header />
      <InternJobInfoDetail jobId={idJob} />
      <InternCV jobId={idJob} />
    </div>
  );
};

export default InternJobDetail;
