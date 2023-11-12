import React, { useState, useLayoutEffect } from "react";
import { TextInput, Textarea, Divider, Rating, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { Recruitment } from "../../model/recruitment";
import { RootState } from "../../redux/Store";
import { EvaluationReport } from "../../model/evaluate";
import moment from "moment";
import { useDispatch } from "react-redux";
import { thunkFunctionEvaluation } from "../../redux/evaluate/evaluate.action";
import { thunkFunctionRecruitment } from "../../redux/recuritment/recuritment.action";

const EvaluateReportForm: React.FC<any> = () => {
  const dispatch = useDispatch();
  const apply: Recruitment = useSelector(
    (state: RootState) => state.recuritment.recruitmentDetail
  );
  const [reportInfo, setReportInfo] = useState<EvaluationReport>({
    start_date: moment(apply.updatedAt).format("DD-MM-YYYY"),
    end_date: moment(Date.now()).format("DD-MM-YYYY"),
  } as EvaluationReport);

  const newApply: Recruitment = {
    id: apply.id,
    profile_id: apply.profile_id,
    intern_job_id: apply.intern_job_id,
    accepted: apply.accepted,
    profile_path: apply.profile_path,
    state: "done",
  };

  const handleSubmit = () => {
    thunkFunctionRecruitment.Update(newApply, dispatch);

    console.log(reportInfo);
    if (reportInfo.evaluation == null || reportInfo.evaluation === 0) {
      reportInfo.evaluation = 2;
    }
    thunkFunctionEvaluation.Create(reportInfo, dispatch);
    window.location.reload();
  };

  return (
    <div className="w-[50%] h-[45rem] top-[37rem] left-[5%] bg-slate-50 shadow-2xl rounded-xl absolute">
      <div className="w-full h-full p-7 shadow-inner rounded-xl">
        <div className="border-l-8 mb-7">
          <h1 className="font-extrabold text-2xl ml-3 opacity-80 ">
            Đánh giá thực tập
          </h1>
        </div>
        <div className="flex flex-row">
          <TextInput
            className="w-[20%] h-[3rem]"
            label="Họ và tên"
            value={apply?.profile?.name}
            placeholder="Vd: Nguyễn Văn A"
          />
          <TextInput
            className="w-[15%] h-[3rem] ml-8"
            label="Mã sinh viên"
            value={apply?.profile?.code}
            placeholder="Vd: 2017600000"
          />
          <TextInput
            className="w-[30%] h-[3rem] ml-9"
            label="Số điện thoại"
            value={apply?.profile?.phone}
            placeholder="Vd: 0123456789"
          />
        </div>
        <div className="mt-8">
          <TextInput
            className="w-[40%] h-[3rem] mb-8"
            label="Email"
            value={apply?.profile?.email}
            placeholder="Vd: NguyenVan@gmail.com"
          />
          <Divider
            label="Đánh giá quá trình thực tập"
            labelPosition="center"
            my="lg"
          ></Divider>
          <TextInput
            className="w-[40%] h-[3rem] mb-8"
            label="Người hướng dẫn"
            placeholder="Vd: Nguyễn Văn B"
            onChange={(e) => {
              setReportInfo({ ...reportInfo, instructor: e.target.value });
            }}
          />
          <Textarea
            className=""
            label="Thái độ và năng lực làm việc:"
            placeholder="Ex: Người viết nhận xét về thái độ, năng lực của sinh viên trong quá trình thực tập ..."
            autosize
            minRows={2}
            maxRows={2}
            onChange={(e) => {
              setReportInfo({ ...reportInfo, attitude: e.target.value });
            }}
          />

          <Textarea
            className="mt-4"
            label="Đánh giá về kiến thức chuyên môn:"
            placeholder="Ex: Người viết nhận xét về kiến thức chuyên môn của sinh viên trong quá trình thực tập ..."
            autosize
            minRows={2}
            maxRows={2}
            onChange={(e) => {
              setReportInfo({ ...reportInfo, knowledge: e.target.value });
            }}
          />

          <div className="flex flex-row mt-5 h-9">
            <p className="font-semibold text-[0.8rem]">
              Mức độ hoàn thành công việc
            </p>
            <Rating
              defaultValue={2}
              onChange={(val) => {
                setReportInfo({ ...reportInfo, evaluation: val });
              }}
            />
          </div>

          <Button
            className="text-sm font-bold px-3 py-1 bottom-8 right-8 bg-white hover:bg-orange-400 hover:text-white  text-orange-300 absolute shadow-md border-2 rounded-md"
            onClick={handleSubmit}
          >
            Cập nhập đánh giá
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EvaluateReportForm;
