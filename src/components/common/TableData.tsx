import React from "react";
import { Rating } from "@mantine/core";
// import { Recruitment } from "../../model/recruitment";

const TableData: React.FC<any> = () => {
  return (
    <div className="w-full">
      <table className="table-auto">
        <thead className="rounded-b-2xl bg-slate-300">
          <tr className="h-10 ">
            <th className="w-[15rem] ">Tên sinh viên</th>
            <th className="w-[10rem] ">Mã sinh viên</th>
            <th className="w-[17rem] ">Email</th>
            <th className="w-[25rem] ">Công ty</th>
            <th className="w-[12rem] ">Hình thức</th>
            <th className="w-[15rem]">Đánh giá</th>
            <th className="w-[10rem]">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-16 ">
            <td>The Sliding Mr. Bones </td>
            <td className="text-center">20010784</td>
            <td className="pl-9">manhtokim@gmail.com</td>
            <td className="pl-3">
              Công ty cổ phần chuyển đổi số Phenikaa hoat đông tại A6
            </td>
            <td className="text-center">Thực tập sinh</td>
            <td>
              <Rating className="m-auto" value={0} />
            </td>
            <td className="text-center">Chờ phỏng vấn</td>
          </tr>
          <tr className="h-16 bg-stone-100">
            <td>The Sliding Mr. Bones </td>
            <td className="text-center">20010784</td>
            <td className="pl-9">manhtokim@gmail.com</td>
            <td className="pl-3">
              Công ty cổ phần chuyển đổi số Phenikaa hoat đông tại A6
            </td>
            <td className="text-center">Thực tập sinh</td>
            <td>
              <Rating className="m-auto" value={0} />
            </td>
            <td className="text-center">Chờ phỏng vấn</td>
          </tr>
          <tr className="h-16 ">
            <td className="text-green-700">The Sliding Mr. Bones </td>
            <td className="text-center">20010784</td>
            <td className="pl-9">manhtokim@gmail.com</td>
            <td className="pl-3">
              Công ty cổ phần chuyển đổi số Phenikaa hoat đông tại A6
            </td>
            <td className="text-center">Thực tập sinh</td>
            <td>
              <Rating className="m-auto" value={0} />
            </td>
            <td className="text-center">Chờ phỏng vấn</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
