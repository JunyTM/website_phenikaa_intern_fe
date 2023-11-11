import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import { thunkFunctionJob } from "../../redux/jobSlice/job.action";
// import { thunkFunctionCompany } from "../../redux/companySlice/company.action";
// import { Company } from "../../model/company";

const InternJobInfoDetail: React.FC<any> = (props: any) => {
  const dispath = useDispatch();
  const jobDetail = useSelector((state: RootState) => state.job.detailJob);
//   const companyDetail = useSelector(
//     (state: RootState) => state.company.value[0]
//   );

  const jobId = props.jobId;
  useLayoutEffect(() => {
    thunkFunctionJob.GetJobDetail(jobId, dispath);
    // thunkFunctionCompany.GetByCompanyID(jobDetail?.company_id, dispath);
  }, []);
  return (
    <div className="w-[60%] h-[80%] top-[8rem] left-[5rem] bg-slate-50 shadow-2xl absolute rounded-xl">
      <div className="w-full h-full p-10 shadow-inner rounded-xl">
        <div className="border-l-8 mb-7">
          <h1 className="font-extrabold text-2xl ml-3 opacity-80 ">
            Chi tiết tin tuyển dụng
          </h1>
        </div>

        <div className="hind-scroll ml-6 w-[95%] h-[90%] font-normal overflow-y-auto">
          <h1 className="text-base font-bold">Mô tả công việc</h1>
          <pre className="w-full mt-1 whitespace-pre-wrap leading-5">
            {jobDetail?.job_desc}
          </pre>

          <h1 className="text-base mt-6 font-bold">Yêu cầu ứng viên</h1>
          <pre className="w-full mt-1 whitespace-pre-wrap leading-5">
            {jobDetail?.require}
          </pre>

          <h1 className="text-base mt-6 font-bold">Quyền lợi</h1>
          <pre className="w-full mt-1 whitespace-pre-wrap leading-5">
            {jobDetail?.benefit}
          </pre>

          <h1 className="text-base mt-6 font-bold">Địa điểm</h1>
          <pre className="w-full mt-1 whitespace-pre-wrap leading-5">
            {jobDetail?.adress}
          </pre>

          <h1 className="text-base mt-6 font-bold">Hạn nộp</h1>
          <pre className="w-full mt-1 whitespace-pre-wrap leading-5">
            {jobDetail?.end_date}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default InternJobInfoDetail;
