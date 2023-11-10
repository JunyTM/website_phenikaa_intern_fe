import React from "react";
import { Link } from "react-router-dom";
type Props = {};

const NavBar: React.FC<Props> = () => {
  const role = localStorage.getItem("UserRole");
  console.log(role);
  const checkRoleAdmin = (role: string | null) => {
    if (role != null && (role == "admin" || role == "company")) {
      return true;
    }
    return false;
  };

  return (
    <div className="w-[18rem] h-[25rem] top-28 left-36 shadow-2xl rounded-lg absolute bg-slate-50">
      <div className="w-full h-full rounded-lg shadow-inner">
        <ul className="w-[80%] m-auto pt-9">
          <li className="h-12 pt-3 pl-8 rounded-lg shadow-md bg-slate-300">
            <Link className="text-slate-900 hover:text-orange-500" to="/home">
              Trang chủ
            </Link>
          </li>
          {checkRoleAdmin(role) ? (
            <li className="h-12 mt-4 pt-3 pl-8 rounded-lg shadow-md bg-slate-300">
              <Link
                className="text-slate-900 hover:text-orange-500"
                to="/company"
              >
                Quản lý tuyển dụng
              </Link>
            </li>
          ) : null}
          <li className="h-12 mt-4 pt-3 pl-8 rounded-lg shadow-md bg-slate-300">
            <Link
              className="text-slate-900 hover:text-orange-500"
              to="/internship"
            >
              Thực tập doanh nghiệp
            </Link>
          </li>
          <li className="h-12 mt-4 pt-3 pl-8 rounded-lg shadow-md bg-slate-300">
            <Link className="text-slate-900 hover:text-orange-500" to="/coding">
              Thông tin cá nhân
            </Link>
          </li>
          {checkRoleAdmin(role) ? (
            <li className="h-12 mt-4 pt-3 pl-8 rounded-lg shadow-md bg-slate-300">
              <Link
                className="text-slate-900 hover:text-orange-500"
                to="/coding"
              >
                Báo cáo thống kê
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;