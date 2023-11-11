import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import { thunkFunctionJob } from "../../redux/jobSlice/job.action";
import { Job } from "../../model/job";

const ListJobCompany: React.FC<any> = () => {
  const dispatch = useDispatch();

  const listJob = useSelector((state: RootState) => state.job.value);

  const companyId = localStorage.getItem("CompanyId");
  const handelRemoveJob = (id: any) => {
    thunkFunctionJob.RemoveJob(id, dispatch);
    window.location.reload();
  };

  useLayoutEffect(() => {
    thunkFunctionJob.GetJobByCompany(companyId, dispatch);
  }, []);

  return (
    <div className="w-[95%] h-[88%] m-auto p-4 border-2 rounded-lg  overflow-y-auto">
      {listJob?.map((job: Job, index: number) => {
        return (
          <div
            key={index}
            className="w-full h-[19%] bg-slate-200 flex flex-row my-2 pt-4 pl-2 rounded-lg"
          >
            <img
              className="w-[7%] h-[50%]"
              src="src\assets\background\logo_phenikaa.png"
              alt=""
            />
            <div className="w-[90%] h-full">
              <h1 className="ml-5 font-extrabold text-base hover:text-orange-500">
                {job.title}
              </h1>
              <p className="mt-2 ml-5 text-sm font-semibold opacity-70">
                * {job.form_of_work + " - " + job.adress}
              </p>
            </div>
            <button
              className="w-16 h-10 hover:text-slate-400 text-center font-normal text-base rounded-md self-end"
              onClick={() => handelRemoveJob(job.id)}
            >
              {"Gỡ =>"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ListJobCompany;
