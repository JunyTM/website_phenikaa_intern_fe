import React, { useState, useLayoutEffect } from "react";
import { TextInput, rem, Divider } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import DropDown from "../../components/common/DropDown";
import InternJob from "./InternJobItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import { Job } from "../../model/job";
import { thunkFunctionJob } from "../../redux/jobSlice/job.action";

const InternDashboard: React.FC<any> = () => {
  const dispatch = useDispatch();
  const listJob: Job[] | null = useSelector(
    (state: RootState) => state.job.value
  );
  const [search, setSearch] = useState<string>("");
  useLayoutEffect(() => {
    thunkFunctionJob.GetAllJob(dispatch);
  }, []);

  return (
    <div className="w-[70rem] h-[100rem] p-5 top-[7rem] right-[20rem] bg-slate-50 shadow-2xl rounded-xl absolute">
      <div className="flex flex-row">
        <TextInput
          className="w-[30%] h-[3rem] ml-6"
          radius="md"
          size="md"
          placeholder="Vị trí công việc"
          rightSectionWidth={42}
          rightSection={
            <IconSearch
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
          onChange={(e) => setSearch(e.target.value)}
        />
        <DropDown />
      </div>
      <Divider label="Danh sách việc làm" labelPosition="center" my="lg" />
      <div className="h-[90%] overflow-y-scroll">
        {listJob?.map((job: Job, index: number) => {
          if (job.title.toLowerCase().includes(search.toLowerCase())) {
            return <InternJob key={index} job={job} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default InternDashboard;
