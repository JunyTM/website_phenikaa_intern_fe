import React, { useState } from "react";
import moment from "moment";
import {
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Button,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Job } from "../../model/job";
import { thunkFunctionJob } from "../../redux/jobSlice/job.action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const JobCreateForm: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [job, setJob] = useState<Job>({
    company_id: 0,
    title: "",
    require: "",
    job_desc: "",
    form_of_work: "",
    benefit: "",
    quantity: 0,
    adress: "",
    salary: "",
    end_date: "",
  });

  const companyId: number = useSelector(
    (state: RootState) => state.company.companyId
  );

  const isCreated: boolean = useSelector(
    (state: RootState) => state.company.isCreated
  );

  const handleSumit = () => {
    job.company_id = companyId;
    thunkFunctionJob.InsertJob(job, dispatch);
    window.location.reload();
  };

  return (
    <div id="JobCreateForm" className="w-full h-[85%] ">
      <TextInput
        className="w-[70%] ml-6"
        label="Tiêu đề bài đăng"
        placeholder="vd: Tuyên dung nhân viên ..."
        required
        onChange={(e) => {
          setJob({
            ...job,
            title: e.target.value,
          });
        }}
        mt="md"
      />
      <div className="flex flex-row">
        <DateInput
          className="w-[50%] ml-6"
          label="Ngày hết hạn nộp hồ sơ"
          placeholder="dd/mm/yyyy"
          required
          valueFormat="DD MMM YYYY"
          onChange={(e) => {
            let date = moment(e).format("DD/MM/YYYY");
            setJob({
              ...job,
              end_date: date,
            });
          }}
          mt="md"
        />
        <NumberInput
          className="w-[10%] ml-6"
          label="Số lượng"
          placeholder="vd: 5"
          withAsterisk
          onChange={(val: number) => {
            setJob({
              ...job,
              quantity: val,
            });
          }}
          error={job.quantity < 0 ? "Số lượng không hợp lệ" : false}
          mt="md"
        />
      </div>
      <Textarea
        className="w-[70%] ml-6 mt-5"
        placeholder="vd: Cần làm việc với ..."
        label="Mô tả công việc"
        required
        autosize
        minRows={2}
        maxRows={3}
        onChange={(e) => {
          setJob({
            ...job,
            job_desc: e.target.value,
          });
        }}
      />
      <Textarea
        className="w-[70%] ml-6 mt-5"
        placeholder="vd: Yêu cầu có các kĩ năng ..."
        label="Yêu cầu kiến thức"
        required
        autosize
        minRows={2}
        maxRows={3}
        onChange={(e) => {
          setJob({
            ...job,
            require: e.target.value,
          });
        }}
      />
      <div className="flex flex-row">
        <TextInput
          className="w-[40%] ml-6"
          label="Mức lương hỗ trợ"
          placeholder="vd: Thỏa thuận trực tiếp $"
          onChange={(e) => {
            setJob({
              ...job,
              salary: e.target.value,
            });
          }}
          mt="md"
        />
        <Select
          className="w-[30%] ml-6"
          label="Hình thức làm việc"
          placeholder="vd: Part-time"
          data={["Intern", "Part-Time", "Full-Time"]}
          required
          onChange={(e: string) => {
            setJob({
              ...job,
              form_of_work: e,
            });
          }}
          mt="md"
        />
      </div>
      <TextInput
        className="w-[50%] ml-6"
        label="Dia chi làm việc"
        placeholder="vd: Tuyên dung nhân viên ..."
        required
        onChange={(e) => {
          setJob({
            ...job,
            adress: e.target.value,
          });
        }}
        mt="md"
      />
      <Textarea
        className="w-[70%] ml-6 mt-5"
        placeholder="vd: Yêu cầu có các kĩ năng ..."
        label="Quyền lợi được hưởng"
        required
        autosize
        minRows={2}
        maxRows={3}
        onChange={(e) => {
          setJob({
            ...job,
            benefit: e.target.value,
          });
        }}
      />
      <Button
        className="w-36 absolute bottom-10 left-[39%] font-bold border-2"
        loading={isCreated}
        variant="outline"
        color="orange"
        onClick={handleSumit}
      >
        Thêm mới
      </Button>
    </div>
  );
};

export default JobCreateForm;
