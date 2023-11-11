import React from "react";
import { TextInput, rem, Divider } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import DropDown from "../../components/common/DropDown";
import InternJob from "./InternJob";
const InternDashboard: React.FC<any> = () => {
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
        />
        <DropDown />
      </div>
      <Divider label="Danh sách việc làm" labelPosition="center" my="lg" />

      <div className="h-[90%] overflow-y-scroll">
        <InternJob />
        <InternJob />
        <InternJob />
        <InternJob />
        <InternJob />
        <InternJob />
        <InternJob />
        <InternJob />
        <InternJob />
      </div>
    </div>
  );
};

export default InternDashboard;
