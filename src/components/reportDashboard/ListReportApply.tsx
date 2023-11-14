import React, { useState, useLayoutEffect } from "react";
import { TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import DropDown from "../../components/common/DropDown";
import { RootState } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { thunkFunctionRecruitment } from "../../redux/recuritment/recuritment.action";
import { Recruitment } from "../../model/recruitment";
import { SetJobReport } from "../../redux/recuritment/recuritmentSlice";

const ListReportApply: React.FC<any> = () => {
  const [search, setSearch] = useState<string>("");
  const CompanyId = localStorage.getItem("CompanyId")
    ? localStorage.getItem("CompanyId")
    : 0;
  const dispatch = useDispatch();
  const listRecruitment = useSelector(
    (state: RootState) => state.recuritment.list
  );

  useLayoutEffect(() => {
    thunkFunctionRecruitment.GetAll(dispatch);
  }, []);

  const handleDenied = (item: Recruitment) => {
    let recuritment = {
      id: item.id,
      profile_id: item.profile_id,
      intern_job_id: item.intern_job_id,
      accepted: true,
      state: "Bị từ chối",
    };
    thunkFunctionRecruitment.Update(recuritment, dispatch);
    window.location.reload();
  };

  const handleAccept = (item: Recruitment) => {
    let recuritment = {
      id: item.id,
      profile_id: item.profile_id,
      intern_job_id: item.intern_job_id,
      accepted: true,
      state: "Đang thực tập",
    };
    thunkFunctionRecruitment.Update(recuritment, dispatch);
    window.location.reload();
  };

  const handleReport = (item: Recruitment) => {
    // thunkFunctionRecruitment.Update(item, dispatch);
    dispatch(SetJobReport(item));
  };

  return (
    <div className="w-[38%] h-[45rem] top-[37rem] right-[5%] bg-slate-50 shadow-2xl rounded-xl absolute">
      <div className="w-full h-full p-7 shadow-inner rounded-xl">
        <div className="border-l-8 mb-7">
          <h1 className="font-extrabold text-2xl ml-3 opacity-80 ">
            Danh sách ứng viên
          </h1>
        </div>
        <div className="flex flex-row">
          <TextInput
            className="w-[30%] h-[3rem]"
            radius="md"
            size="md"
            placeholder="Họ tên"
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
        {/* <Divider label="Danh sách việc làm" labelPosition="center" my="lg" /> */}
        <div className="w-full h-[80%] overflow-y-scroll hind-scroll">
          <table className="table-fixed">
            <thead className="h-8 bg-slate-200 rounded-t-xl text-sm">
              <tr>
                <th className="w-[17rem]">Ứng viên</th>
                <th className="w-[10rem]">Mã sv</th>
                <th className="w-[15rem]">Vị trí</th>
                <th className="w-[12rem]">Trang thái</th>
              </tr>
            </thead>
            <tbody>
              {listRecruitment?.map((apply: Recruitment, index: number) => {
                if (
                  apply?.intern_job?.title.includes(search) &&
                  apply?.intern_job?.company_id === Number(CompanyId) &&
                  apply?.state === "Chờ phỏng vấn" || apply?.state === "Đang thực tập"
                ) {
                  let idChose = apply?.id !== undefined ? apply.id : 0;
                  return (
                    <tr
                      key={index}
                      className="h-16 py-4 border-y-2 border-gray-200"
                    >
                      <td>
                        {apply?.accepted === true ? (
                          <a
                            className="w-full text-left font-medium pr-3 text-green-600"
                            href={apply.profile_path}
                            target="_blank"
                          >
                            {apply?.profile?.name}
                          </a>
                        ) : (
                          <a
                            className="w-full text-left font-medium pr-3 hover:text-cyan-500"
                            href={apply.profile_path}
                            target="_blank"
                          >
                            {apply?.profile?.name}
                          </a>
                        )}
                      </td>
                      <td>
                        {apply?.accepted === true ? (
                          <p className="w-full text-left ml-8 text-green-600">
                            {apply?.profile?.code}
                          </p>
                        ) : (
                          <p className="w-full text-left ml-8">
                            {apply?.profile?.code}
                          </p>
                        )}
                      </td>
                      <td>
                        {apply?.accepted === true ? (
                          <p className="w-full ml-4 text-center text-green-600">
                            {apply?.intern_job?.title}
                          </p>
                        ) : (
                          <p className="w-full ml-4 text-center">
                            {apply?.intern_job?.title}
                          </p>
                        )}
                      </td>
                      <td>
                        <div className="flex flex-row ml-12 justify-between">
                          {apply?.accepted === true ? (
                            <button
                              className=" text-left font-medium opacity-75 text-violet-600 hover:underline"
                              onClick={() => handleReport(apply)}
                            >
                              report
                            </button>
                          ) : (
                            <button
                              className="text-left font-medium opacity-75 hover:text-yellow-500 hover:underline"
                              onClick={() => {
                                handleAccept(apply);
                              }}
                            >
                              accept
                            </button>
                          )}
                          {apply?.accepted === false ? (
                            <button
                              className=" text-left font-medium opacity-75 hover:text-red-500 hover:underline"
                              onClick={() => handleDenied(apply)}
                            >
                              denied
                            </button>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListReportApply;
