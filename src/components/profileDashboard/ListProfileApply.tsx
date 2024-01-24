import React, { useEffect, useState } from "react";
import { Divider } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { thunkFunctionRecruitment } from "../../redux/recuritment/recuritment.action";
import { RootState } from "../../redux/Store";
import { Recruitment } from "../../model/recruitment";

const ProfileApply: React.FC<any> = () => {
  const dispatch = useDispatch();
  const recuerment = useSelector((state: RootState) => state.recuritment.list);
  const [profileId, setProfileId] = useState<number>(
    localStorage.getItem("ProfileId")
      ? Number(localStorage.getItem("ProfileId"))
      : 0
  );

  useEffect(() => {
    thunkFunctionRecruitment.GetAll(dispatch);
    
    // fix to build file
    if (profileId === 0) {
      setProfileId(0);
    }
  }, []);
  // console.log(recuerment);
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
          <thead className="w-[95%] h-10 bg-slate-200 rounded-t-xl text-sm">
            <tr>
              <th className="w-[35rem]">Bài đăng</th>
              <th className="w-[32rem]">Dịa chỉ</th>
              <th className="w-[17rem]">Email</th>
              <th className="w-[15rem]">Hình thức</th>
              <th className="w-[12rem]">Trang thái</th>
            </tr>
          </thead>
          <div className="w-full h-[20rem] mt-4 overflow-y-scroll hind-scroll">
            <table className="w-[100%] ">
              <tbody className="w-full h-full">
                {recuerment?.map((item: Recruitment, index: number) => {
                  console.log(item.intern_job?.Company);
                  if (item?.profile_id === profileId) {
                    return (
                      <a href={item?.profile_path} target="_blank">
                        {item?.state === "Hoàn thành" ? (
                          <tr
                            key={index}
                            className="h-12 hover:text-orange-500 font-medium text-green-500 opacity-50"
                          >
                            <td className="text-ellipsis overflow-hidden w-[35rem] pr-3">
                              {item?.intern_job?.title}
                            </td>
                            {/* <td className="text-center text-ellipsis overflow-hidden w-[27rem] ">
                          {item?.intern_job?.Company?.name}
                        </td> */}
                            <td className="text-center text-ellipsis overflow-hidden w-[32rem]">
                              {item?.intern_job?.adress}
                            </td>
                            <td className="text-left text-ellipsis overflow-hidden w-[15rem] pl-20">
                              {item?.profile?.email}
                            </td>
                            <td className="text-center text-ellipsis overflow-hidden w-[17rem] ">
                              {item?.intern_job?.form_of_work}
                            </td>
                            <td className="text-center text-ellipsis overflow-hidden w-[12rem]">
                              {item?.state}
                            </td>
                          </tr>
                        ) : (
                          <tr
                            key={index}
                            className="h-12 hover:text-orange-500 hover:opacity-90  font-medium text-slate-800 "
                          >
                            <td className="text-ellipsis overflow-hidden w-[35rem] pr-3">
                              {item?.intern_job?.title}
                            </td>
                            {/* <td className="text-center text-ellipsis overflow-hidden w-[27rem] ">
                          {item?.intern_job?.Company?.name}
                        </td> */}
                            <td className="text-center text-ellipsis overflow-hidden w-[32rem]">
                              {item?.intern_job?.adress}
                            </td>
                            <td className="text-left text-ellipsis overflow-hidden w-[15rem] pl-20">
                              {item?.profile?.email}
                            </td>
                            <td className="text-center text-ellipsis overflow-hidden w-[17rem] ">
                              {item?.intern_job?.form_of_work}
                            </td>

                            <td className="text-center text-ellipsis overflow-hidden w-[12rem]">
                              {item?.state}
                            </td>
                          </tr>
                        )}
                      </a>
                    );
                  }
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
