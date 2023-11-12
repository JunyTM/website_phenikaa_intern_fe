import React, { useState, useLayoutEffect } from "react";
import { FileInput, rem, TextInput } from "@mantine/core";
import { IconFileCv } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import { thunkFunctionJob } from "../../redux/jobSlice/job.action";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { thunkFunctionRecruitment } from "../../redux/recuritment/recuritment.action";
import { Recruitment } from "../../model/recruitment";
import { thunkFunctionProfile } from "../../redux/profileSlice/profile.action";

const InternCV: React.FC<any> = (props: any) => {
  const icon = (
    <IconFileCv style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  const dispath = useDispatch();
  const jobDetail = useSelector((state: RootState) => state.job.detailJob);
  const profile = useSelector((state: RootState) => state.profile.list[0]);
  const navigate = useNavigate();
  //   const companyDetail = useSelector(
  //     (state: RootState) => state.company.value[0]
  //   );
  const [linkCV, setLinkCV] = useState("");

  const jobId = props.jobId;
  useLayoutEffect(() => {
    thunkFunctionJob.GetJobDetail(jobId, dispath);
    thunkFunctionProfile.getProfileInfo(dispath);
    // thunkFunctionCompany.GetByCompanyID(jobDetail?.company_id, dispath);
  }, []);

  const handleSubmitCV = () => {
    if (profile?.id === undefined) {
      alert("Bạn chưa cập nhật thông tin cá nhân");
      return;
    }
    let recruitment: Recruitment = {
      profile_id: profile?.id,
      intern_job_id: jobId,
      accepted: false,
      profile_path: linkCV,
    };
    thunkFunctionRecruitment.Create(recruitment, dispath);
    navigate("/internship");
  };

  return (
    <div className="w-[30%] h-[50%] top-[8rem] right-20 p-8 bg-slate-50 shadow-2xl absolute rounded-xl">
      <div className="border-l-8 mb-7">
        <h1 className="font-extrabold text-2xl ml-3 opacity-80 text-orange-500">
          Ứng tuyển ngay !!
        </h1>
      </div>

      <p className="mt-2 ml-2 mb-10 font-extrabold">{jobDetail?.title}</p>

      {/* <FileInput
        className="w-[90%] top-[8rem] right-20 p-8 bg-slate-50 shadow-2xl rounded-xl"
        rightSection={icon}
        label="Attach your CV"
        placeholder="Ứng tuyên ngay"
        mt="md"
      /> */}
      <TextInput
        className="w-[90%] top-[8rem] right-20 p-8 bg-slate-50 shadow-2xl rounded-xl"
        rightSection={icon}
        label="Attach your CV"
        placeholder="Ứng tuyên ngay"
        mt="md"
        onChange={(e) => {
          setLinkCV(e.currentTarget.value);
        }}
      />
      <div className="w-[90%] bottom-16 flex flex-row justify-between absolute">
        <Button
          className="w-[50%] h-[3rem] mt-5 ml-5 bg-orange-500 rounded-xl text-white font-bold"
          onClick={handleSubmitCV}
        >
          Ứng tuyển
        </Button>
        <Button
          className="w-[50%] h-[3rem] mt-5 ml-5 rounded-xl text-slate-600 font-bold"
          onClick={() => navigate("/internship")}
        >
          Hủy bỏ
        </Button>
      </div>
    </div>
  );
};

export default InternCV;
