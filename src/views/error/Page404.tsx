import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../constants/router";

const Page404: React.FC<any> = () => {
  return (
    <div>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Opps! 
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Xin lỗi có vẻ như tính năng đang được phát triển, xin vui lòng quay lại sau 
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={ROUTE.LOGIN.PATH}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Quay lại trang chủ
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=100009031528373"
              className="text-sm font-semibold text-gray-900"
            >
              Tìm trợ giúp <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page404;
