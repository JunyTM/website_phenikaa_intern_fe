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
import * as XLSX from "xlsx";

interface DataRow {
  name: string; // Tên sinh viên
  code: string; // Mã sinh viên
  email: string; // Email sinh viên
  company: string; // Tên công ty thực tập
  instructor: string; // Người hướng dẫn
  evaluation: number; // Đánh giá thang điểm 5
  attitude: string; // Thái độ
  knowledge: string; // Kiến thức
  start_date: string; // Ngày bắt đầu
  end_date: string; // Ngày kết thúc
}

const EvaluateAdminBox: React.FC<any> = () => {
  const dispatch = useDispatch();
  const companyId = useSelector((state: RootState) => state.company.companyId);
  const listInternship = useSelector(
    (state: RootState) => state.interShip.list
  );
  const [filter, setFilter] = useState({
    nameSearch: "",
    workType: "",
  });

  useLayoutEffect(() => {
    thunkFunctionInternShip.GetAll(dispatch);
  }, []);

  var data = [] as DataRow[];

  const handelExport = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "./asset/Internship_Reported.xlsx");
    console.log(data);
  };
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
                <tbody>
                  {listInternship?.map((item: InternShip) => {
                    let dataRow: DataRow = {
                      // id: item.id,
                      name: item?.profile?.name ? item?.profile?.name : "",
                      code: item?.profile?.code ? item?.profile?.code : "",
                      email: item?.profile?.email ? item?.profile?.email : "",
                      company: item?.company?.name ? item?.company?.name : "",
                      instructor: item?.internship_evaluate?.instructor
                        ? item?.internship_evaluate?.instructor
                        : "",
                      evaluation: item?.internship_evaluate?.evaluation
                        ? item?.internship_evaluate?.evaluation
                        : 0,
                      attitude: item?.internship_evaluate?.attitude
                        ? item?.internship_evaluate?.attitude
                        : "",
                      knowledge: item?.internship_evaluate?.knowledge
                        ? item?.internship_evaluate?.knowledge
                        : "",
                      start_date: item?.internship_evaluate?.start_date
                        ? item?.internship_evaluate?.start_date
                        : "",
                      end_date: item?.internship_evaluate?.end_date
                        ? item?.internship_evaluate?.end_date
                        : "",
                    };
                    data.push(dataRow);

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
                          <td className="w-[25rem] pl-14">
                            {item?.company?.name}
                          </td>
                          <td>
                            <Rating
                              className="w-[15rem] m-auto pl-14"
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
