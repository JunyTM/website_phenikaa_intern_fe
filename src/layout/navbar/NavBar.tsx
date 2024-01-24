import React from "react";
import { ROUTE } from "../../constants/router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const NavBar: React.FC<any> = () => {
  const userInfo = useSelector((state: RootState) => state.auth.user);

  const checkRole = (accessRole: string[]) => {
    let userRole = userInfo?.role;
    if (userRole != undefined) {
      for (let i = 0; i < accessRole.length; i++) {
        if (userRole == accessRole[i]) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <div className="w-[18rem] h-[20rem] top-28 left-36 shadow-2xl rounded-lg absolute bg-slate-50">
      <div className="w-full h-full rounded-lg shadow-inner">
        <ul className="w-[80%] m-auto  pt-10">
          <li className="h-12 pt-3 pl-8 rounded-lg shadow-md bg-slate-300">
            <Link
              className="text-slate-900 hover:text-orange-500 font-bold opacity-90"
              to={ROUTE.HOME.PATH}
            >
              Trang chủ
            </Link>
          </li>

          {checkRole(ROUTE.COMPANY.AUTHOR) ? (
            <li className="h-12 mt-4 pt-3 pl-8 rounded-lg shadow-md bg-slate-300">
              <Link
                className="text-slate-900 hover:text-orange-500 font-bold opacity-90"
                to={ROUTE.COMPANY.PATH}
              >
                Quản lý tuyển dụng
              </Link>
            </li>
          ) : null}

          {checkRole(ROUTE.REPORT_INTERNSHIP.AUTHOR) ? (
            <li className="h-12 mt-4 pt-3 pl-8 rounded-lg shadow-md bg-slate-300">
              <Link
                className="text-slate-900 hover:text-orange-500 font-bold opacity-90"
                to={ROUTE.REPORT_INTERNSHIP.PATH}
              >
                Dánh giá sinh viên
              </Link>
            </li>
          ) : null}

          {checkRole(ROUTE.INTERNSHIP.AUTHOR) ? (
            <li className="h-12 mt-4 pt-3 pl-8 rounded-lg shadow-md bg-slate-300">
              <Link
                className="text-slate-900 hover:text-orange-500 font-bold opacity-90"
                to={ROUTE.INTERNSHIP.PATH}
              >
                Thực tập doanh nghiệp
              </Link>
            </li>
          ) : null}

          {checkRole(ROUTE.PROFILE.AUTHOR) ? (
            <li className="h-12 mt-4 pt-3 pl-8 rounded-lg shadow-md bg-slate-300">
              <Link
                className="text-slate-900 hover:text-orange-500 font-bold opacity-90"
                to={ROUTE.PROFILE.PATH}
              >
                Thông tin cá nhân
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
