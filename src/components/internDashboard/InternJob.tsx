import React from "react";

const InternJob: React.FC<any> = () => {
  return (
    <div className="w-[90%] h-[11%] p-10 my-10 m-auto bg-slate-200 rounded-md flex flex-row">
      <img
        className="w-24 h-24"
        src="src\assets\background\logo_phenikaa.png"
        alt=""
      />
      <div>
        <h1 className="ml-5 font-extrabold text-base  hover:text-orange-500">
          Backend PHP Developer (Middle Level) - Thu Nhập Upto 30 Triệu - Tại Hà
          Nội
        </h1>
        <p className="ml-5 mt-2">Công ty cổ phần chuyển đổi số Phenikaa</p>
        <p className="mt-6 ml-5 text-sm font-semibold opacity-70">* Pheniaa Building A6 - 703</p>
      </div>
    </div>
  );
};

export default InternJob;
