import React, { useEffect } from "react";
import { Divider } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { thunkFunctionRecruitment } from "../../redux/recuritment/recuritment.action";
import { RootState } from "../../redux/Store";
import { Recruitment } from "../../model/recruitment";

const ProfileApply: React.FC<any> = () => {
  const dispatch = useDispatch();
  const recuerment = useSelector((state: RootState) => state.recuritment.list);

  useEffect(() => {
    thunkFunctionRecruitment.GetAll(dispatch);
  }, []);

  return (
    <div className="w-[90%] h-[30rem] top-[34rem] left-[5%] bg-slate-50 shadow-2xl rounded-xl absolute">
      <div className="w-full h-full p-7 shadow-inner rounded-xl flex flex-row">
        <div className="w-full">
          <h1 className="text-center text-3xl font-extrabold text-slate-700  opacity-90 m-auto">
            THÔNG TIN THỰC TẬP
          </h1>
          <Divider
            className="mb-3"
            label="Danh sách việc làm"
            labelPosition="center"
          />
          <thead className="w-full h-10 bg-slate-200 rounded-t-xl text-sm">
            <tr>
              <th className="w-[25rem]">Bài đăng</th>
              <th className="w-[20rem]">Công ty</th>
              <th className="w-[20rem]">Dịa chỉ</th>
              <th className="w-[17rem]">Email</th>
              <th className="w-[15rem]">Hình thức</th>
              <th className="w-[12rem]">Trang thái</th>
            </tr>
          </thead>
          <div className="w-full h-[20rem] overflow-y-scroll hind-scroll">
            <table className="w-[100%] ">
              <tbody className="w-full h-full"> 
                {recuerment?.map((item: Recruitment, index: number) => {
                  console.log(item);
                  return (
                    <a href={item?.profile_path} target="_blank">
                      <tr
                        key={index}
                        className="h-12 hover:text-orange-500 font-medium text-slate-800 bg-slate-300"
                      >
                        <td className="text-ellipsis overflow-hidden w-[25rem] pr-3">
                          {item?.intern_job?.title}
                        </td>
                        <td className="text-center text-ellipsis overflow-hidden w-[17rem] ">
                          {item?.intern_job?.Company?.name}
                        </td>
                        <td className="text-center text-ellipsis overflow-hidden w-[20rem]">
                          {item?.intern_job?.adress}
                        </td>
                        <td className="text-center text-ellipsis overflow-hidden w-[15rem]">
                          {item?.intern_job?.Company?.email}
                        </td>
                        <td className="text-center text-ellipsis overflow-hidden w-[15rem]">
                          {item?.intern_job?.form_of_work}
                        </td>
                        <td className="text-center text-ellipsis overflow-hidden w-[12rem]">
                          {item?.state}
                        </td>
                      </tr>
                    </a>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileApply;
