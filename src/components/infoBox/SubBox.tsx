import React from "react";
import DoughnutChart from "../chart/Doughnut";
const SubBox: React.FC<any> = () => {
  return (
    <div className="w-[30%] h-[23rem] p-8 top-[9rem] left-[72rem] bg-slate-100 shadow-2xl rounded-xl absolute">
      <p className="text-lg font-semibold">Số liệu thực tập:</p>
      <DoughnutChart />
    </div>
  );
};
 
export default SubBox;
