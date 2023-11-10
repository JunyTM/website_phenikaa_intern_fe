import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mantine/core";
import { IconUnlink } from "@tabler/icons-react";
type Props = {};

const MainBox: React.FC<any> = (props: Props) => {
  return (
    <div className="w-[30%] h-[23rem] top-[9rem] left-[32rem] bg-slate-100 shadow-2xl rounded-xl absolute">
      <div className="w-full h-full rounded-xl shadow-inner">
        <div className="w-[90%] h-44 pt-4 m-auto flex flex-row justify-between">
          <img
            className="w-36 mr-14 ml-9"
            src="src\assets\logo\robot_main_info.webp"
            alt=""
          />
          <div className="w-2/3 h-full pt-2">
            <div className="w-[90%] h-16 mt-3 px-3 py-2 bg-purple-300 shadow-xl shadow-blue-100 flex flex-row rounded-xl justify-between">
              <div>
                <p className="text-sm font-semibold">Số lượng công ty</p>
                <p className="text-xl font-semibold">68</p>
              </div>
              <img
                className="w-16"
                src="src\assets\logo\icon_company.png"
                alt="company"
              />
            </div>

            <div className="w-[90%] h-16 mt-4 px-3 py-2 bg-blue-200 shadow-xl flex flex-row rounded-xl justify-between">
              <div>
                <p className="text-sm font-semibold">Số lượng ứng tuyển</p>
                <p className="text-xl font-semibold">326</p>
              </div>
              <img
                className="w-14"
                src="src\assets\logo\icon_cv.png"
                alt="company"
              />
            </div>
          </div>
        </div>

        <div className="w-[90%] h-36 mt-8 m-auto p-6 rounded-lg bg-zinc-200">
          <Link className="text-[0.7rem] flex flex-row" to="/internship">
            <IconUnlink size={13} style={{ marginRight: "3px" }} /> Cùng tìm
            hiểu ngay{" "}
          </Link>
          <p className="text-xl font-bold">CÁC NHÀ TUYỂN DỤNG</p>

          <div className="mt-7 flex flex-row items-center justify-between">
            <div className="w-32 flex flex-row items-center justify-between">
              <Avatar color="cyan" radius="xl">
                MK
              </Avatar>
              <Avatar color="violet" radius="xl">
                PK
              </Avatar>
              <Avatar alt="Vitaly Rtishchev" color="red" radius="xl">
                HRM
              </Avatar>
            </div>
            <p className="w-10 ml-2 text-sm text-center font-semibold opacity-75 bg-white rounded-full shadow-2xl shadow-cyan-50">+84</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
