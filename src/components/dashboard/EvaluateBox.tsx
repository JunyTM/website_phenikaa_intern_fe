import React from "react";
import JobCreateForm from "../formInput/JobCreateForm";

const EvaluateBox: React.FC<any> = () => {
  return (
    <div className="w-[90%] h-[44rem] top-[37rem] left-[5%] bg-slate-50 shadow-2xl rounded-xl absolute">
      <div className="w-full h-full p-7 shadow-inner rounded-xl flex flex-row">
        <div className="w-[50%] h-full border-r-2  border-indigo-200">
          <h1 className="text-3xl mb-10  font-extrabold opacity-80">
            Tạo mới yêu cầu tuyển dụng
          </h1>
          <JobCreateForm />
        </div>
        <div className="w-[50%] h-full bg-red-100"></div>
      </div>
    </div>
  );
};

export default EvaluateBox;
