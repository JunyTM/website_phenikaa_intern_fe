import React from "react";
import DoughnutChart from "../chart/Doughnut";
const SubBox: React.FC<any> = () => {
  return (
    <div className="w-[30%] h-[23rem] p-6 top-[9rem] left-[72rem] bg-slate-100 shadow-2xl rounded-xl absolute">
      <p className="text-xl font-bold underline underline-offset-4">
        SỐ LIỆU THỰC TẬP TRONG NĂM: 2023
      </p>
      <DoughnutChart />
    </div>
  );
};
 
export default SubBox;
