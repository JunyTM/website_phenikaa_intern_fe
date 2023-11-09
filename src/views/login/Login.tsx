import React from "react";
import { AuthenticationForm } from "../../components/inputLogin";

const Login: React.FC<any> = () => {
  return (
    <div className="w-[100vw] h-[100vh] pt-[3%]">
      <div className="w-[80%] h-[90%] m-auto rounded-md bg-violet-50 shadow-2xl shadow-violet-200 flex flex-row">
        <div className="w-[65%] h-full rounded-l-md">
          <div className="w-96 m-auto">
            <h1 className="mt-10 text-3xl font-bold">
              Chào mừng quay trở lại!
            </h1>
            <p className="mt-2 opacity-70 text-md font-semibold">
              Để truy cập hệ thống vui lòng
            </p>
          </div>
          <div className="w-96 m-auto">
            <AuthenticationForm />
          </div>
        </div>
        <div className="w-[35%] h-full rounded-r-md bg-gradient-to-b from-indigo-200">
          <img
            className="w-[60%] mt-[40%] m-auto opacity-90"
            src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-DH-Phenikaa-V-Wh.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
