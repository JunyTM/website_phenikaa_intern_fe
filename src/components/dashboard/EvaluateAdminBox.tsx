import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Divider,
  TextInput,
  NativeSelect,
  rem,
  Rating,
  Button,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";

import { thunkFunctionInternShip } from "../../redux/internShip/interShip.action";
import { InternShip } from "../../model/inernShip";

const EvaluateAdminBox: React.FC<any> = () => {
  const dispatch = useDispatch();
  const companyId = useSelector((state: RootState) => state.company.companyId);
  const listInternship = useSelector(
    (state: RootState) => state.interShip.list
  );

  // const listRecruitments = useSelector((state: RootState) => state.recuritment.list);
  // const listInternship = useSelector((state: RootState) => state.interShip.list);
  const [filter, setFilter] = useState({
    nameSearch: "",
    workType: "",
    // status: "",
  });

  useLayoutEffect(() => {
    thunkFunctionInternShip.GetAll(dispatch);
  }, []);

  const handelExport = () => {};
  console.log(listInternship);
  return (
    <div className="w-[90%] h-[47rem] top-[37rem] left-[5%] bg-slate-50 shadow-2xl rounded-xl absolute">
      <div className="w-full h-full p-7 shadow-inner rounded-xl">
        <div className="flex flex-row items-end">
          <TextInput
            className="w-[30%]"
            radius="xl"
            size="md"
            placeholder="Ex. Họ tên sinh viên"
            rightSectionWidth={42}
            rightSection={
              <IconSearch
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            }
            onChange={(e) =>
              setFilter({ ...filter, nameSearch: e.target.value })
            }
          />
          <NativeSelect
            className="ml-6 w-[12%]"
            variant="filled"
            label="Hình thức làm việc"
            data={["Thực tập sinh", "Bán thời gian", "Toàn thời gian", ""]}
            onChange={(e) => setFilter({ ...filter, workType: e.target.value })}
          />
          {/* <NativeSelect
            className="ml-6 w-[10%]"
            label="Trạng thái"
            variant="filled"
            data={["Chờ phỏng vấn", "Đang thực tập", "Hoàn thành", ""]}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          /> */}
          <Button
            className="ml-6 w-[8%] right-10 absolute"
            variant="outline"
            color="blue"
            radius="md"
            onClick={handelExport}
          >
            Xuất File
          </Button>
        </div>
        <div className="mt-10 h-11 flex flex-row items-center bg-slate-300">
          <tr className="">
            <th className="w-[15rem] ">Tên sinh viên</th>
            <th className="w-[10rem] ">Mã sinh viên</th>
            <th className="w-[17rem] ">Email</th>
            <th className="w-[25rem] ">Công ty</th>
            <th className="w-[15rem]">Đánh giá</th>
            <th className="w-[12rem] ">Ngày bắt đầu</th>
            <th className="w-[10rem]">Ngày kết thúc</th>
          </tr>
        </div>
        <div>
          {companyId ? (
            <div className="w-full h-[34rem] overflow-y-scroll hind-scroll">
              <table className="table-auto">
                {/* <thead className="rounded-b-2xl bg-slate-300 opacity-0">
                  <tr className="h-10 ">
                    <th className="w-[15rem] ">Tên sinh viên</th>
                    <th className="w-[10rem] ">Mã sinh viên</th>
                    <th className="w-[17rem] ">Email</th>
                    <th className="w-[25rem] ">Công ty</th>
                    <th className="w-[15rem]">Đánh giá</th>
                    <th className="w-[12rem] ">Ngày bắt đầu</th>
                    <th className="w-[10rem]">Ngày kết thúc</th>
                  </tr>
                </thead> */}
                <tbody>
                  {listInternship?.map((item: InternShip) => {
                    if (
                      item?.profile?.name.includes(filter.nameSearch) &&
                      item?.company_id === companyId
                    )
                      return (
                        <tr className="h-16">
                          <td className="w-[15rem]">{item?.profile?.name}</td>
                          <td className="w-[10rem] text-center">
                            {item?.profile?.code}
                          </td>
                          <td className="w-[17rem] pl-9">
                            {item?.profile?.email}
                          </td>
                          <td className="w-[25rem] pl-3">
                            {item?.company?.name}
                          </td>
                          <td>
                            <Rating
                              className="w-[15rem] m-auto"
                              value={item?.internship_evaluate?.evaluation}
                            />
                          </td>
                          <td className="w-[12rem] text-center">
                            {item?.internship_evaluate?.start_date}
                          </td>
                          <td className="w-[10rem] text-center">
                            {item?.internship_evaluate?.end_date}
                          </td>
                        </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="absolute font-extrabold text-4xl top-[50%] left-[40%] opacity-60">
              No, Data avaliabel !
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EvaluateAdminBox;
