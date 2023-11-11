import React from "react";
import { Link } from "react-router-dom";
// import { Job } from "../../model/job";

const InternJob: React.FC<any> = (props: any) => {
  const job = props.job;
  return (
    <Link
      to={`/internship/${job?.id}`}
      className="w-[90%] h-[11%] p-10 my-10 m-auto bg-slate-200 rounded-md flex flex-row"
    >
      <img
        className="w-24 h-24"
        src="src\assets\background\logo_phenikaa.png"
        alt=""
      />
      <div>
        <h1 className="ml-5 font-extrabold text-base  hover:text-orange-500">
          {job.title}
        </h1>
        <p className="ml-5 mt-2 text-sm">
          {" "}
          <span className="font-bold text-sm mr-1">Vị trí: {}</span>
          {job.form_of_work + " - " + job.end_date}
        </p>
        <p className="mt-6 ml-5 text-sm font-semibold opacity-70">
          * {job.adress}
        </p>
      </div>
    </Link>
  );
};

export default InternJob;
