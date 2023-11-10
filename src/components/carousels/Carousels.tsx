import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselWithContent: React.FC<any> = () => {
  return (
    <div className="w-[60rem] h-[98%] bg-slate-200 rounded-xl">
      <Carousel className="pt-7 p-2">
        <div className="w-full h-[33rem]">
          <h1 className="text-3xl font-bold text-slate-600">
            Công ty cổ phần chuyển đổi số phenikaa
          </h1>
          <p>
            <span> Vị trí:</span> Font-end Developer{" "}
          </p>

          <div className="w-[90%] h-[70%] mt-7 m-auto bg-slate-100">
            <div className="text-left p-6">
              <h1 className="text-lg font-semibold underline">
                Yêu cầu ứng viên:
              </h1>
              <ul className="ml-8 mt-4 h-28 font-medium flex flex-col justify-between">
                <li>* Nắm vững kiến thức cơ bản HTML, CSS, JS.</li>
                <li>* Có kinh nghiệm làm việc với Redux, Redux-tolkit.</li>
                <li>
                  * Sử dụng thành thạo các công cụ kho lưu trữ như Git, Docker
                  ...
                </li>
                <li>
                  * Hiểu biết và sử dụng được những kĩ thuật cơ bản để tối ưu
                  Website làm một lợi thế.
                </li>
              </ul>

              <h1 className="text-lg mt-5 font-semibold underline">
                Quyền lợi được hưởng:
              </h1>
              <ul className="ml-8 mt-4 h-28 font-medium flex flex-col justify-between">
                <li>
                  * Môi trường làm việc trẻ chung, năng động, khuyến khích trao
                  đổi ý tưởng. Có cơ hội tham gia các dự án lơn, được trực tiếp
                  trao đổi với khách hàng.{" "}
                </li>
                <li>
                  * Có lương hỗ trợ và thưởng các kì lễ tết trong thời gian làm
                  việc, đồng thời được tham gia các hoạt động team-building.
                </li>
              </ul>
            </div>
            <button className="w-40 h-12 ml-[40rem] text-base font-extrabold opacity-70 rounded-md hover:bg-slate-100 active:translate-y-1">
              {"Tìm hiểu thêm ==>"}
            </button>
          </div>
        </div>

        <div className="w-full h-[33rem]">
          <h1 className="text-3xl font-bold text-slate-600">
            Công ty Sync Partners
          </h1>
          <p>
            <span> Vị trí:</span> Backe-end Developer{" "}
          </p>

          <div className="w-[90%] h-[70%] mt-7 m-auto bg-slate-100">
            <div className="text-left p-6">
              <h1 className="text-lg font-semibold underline">
                Yêu cầu ứng viên:
              </h1>
              <ul className="ml-8 mt-4 h-28 font-medium flex flex-col justify-between">
                <li>
                  * Tiếng Nhật tương đương với N3 trở lên (bắt buộc, nếu chưa có
                  bằng thì yêu cầu trình độ giao tiếp tương đương level N3 ).
                </li>
                <li>* Tối thiểu 3 năm kinh nghiệm Web Developer (Backend).</li>
                <li>* Biết ít nhất về 1 front-end framework (Reactjs, ...).</li>
                <li>
                  * Hiểu biết và sử dụng được những kĩ thuật cơ bản để tối ưu
                  Website làm một lợi thế.
                </li>
              </ul>

              <h1 className="text-lg mt-5 font-semibold underline">
                Quyền lợi được hưởng:
              </h1>
              <ul className="ml-8 mt-4 h-28 font-medium flex flex-col justify-between">
                <li>
                  * Phát triển các giải pháp về ERP(Enterprise Resource
                  Planning), PLM (Product Lifecycle Management) cho các khách
                  hàng là các công ty lớn ở Nhật.
                </li>
                <li>
                  * Team building theo quý, du lịch hàng năm, và rất nhiều các
                  hoạt động vui chơi khác.
                </li>
                <li>
                  * Có 3 đợt nghỉ dài trong năm (mỗi đợt khoảng 9-11 ngày nghỉ);
                  Xét tăng lương 1 lần/ năm, Thưởng 2 lần/năm.
                </li>
              </ul>
            </div>
            <button className="w-40 h-12 ml-[40rem] text-base font-extrabold opacity-70 rounded-md hover:bg-slate-100 active:translate-y-1">
              {"Tìm hiểu thêm ==>"}
            </button>
          </div>
        </div>

        <div className="w-full h-[33rem]">
          <h1 className="text-3xl font-bold text-slate-600">
            Công ty TNHH Dịch Vụ Truyền Thông Và Giải Trí VNG
          </h1>
          <p>
            <span> Vị trí:</span> Senior PHP Developer{" "}
          </p>

          <div className="w-[90%] h-[70%] mt-7 m-auto bg-slate-100">
            <div className="text-left p-6">
              <h1 className="text-lg font-semibold underline">
                Yêu cầu ứng viên:
              </h1>
              <ul className="ml-8 mt-4 h-28 font-medium flex flex-col justify-between">
                <li>
                  * Từ ít nhất 1 năm kinh nghiệm lập trình PHP, MySQL trở lên.
                  hành thạo HTML, CSS, Javascript và backend API.
                </li>
                <li>
                  * Đã từng làm với các site Ecommerce, marketplace ở môi trường
                  digital agency lớn là lợi thế.
                </li>
                <li>* Biết ít nhất về 1 front-end framework (Reactjs, ...).</li>
                <li>
                  * Hiểu biết về tối ưu tốc độ query, tối ưu database, code site
                  hệ thống lớn là một lợi thế.
                </li>
              </ul>

              <h1 className="text-lg mt-5 font-semibold underline">
                Quyền lợi được hưởng:
              </h1>
              <ul className="ml-8 mt-4 h-28 font-medium flex flex-col justify-between">
                <li>
                  * Được làm việc và hỗ trợ các thành viên bộ phận/nhóm làm việc
                  nhiều kinh nghiệm.
                </li>
                <li>
                  * Có cơ hội được tham gia các khóa học đào tạo online và/hoặc
                  offline, môi trường làm việc thân thiện và chuyên nghiệp.
                </li>
                <li>
                  * Có 3 đợt nghỉ dài trong năm, tháng lương 13 và các khoản
                  thưởng theo năng lực khác.
                </li>
              </ul>
            </div>
            <button className="w-40 h-12 ml-[40rem] text-base font-extrabold opacity-70 rounded-md hover:bg-slate-100 active:translate-y-1">
              {"Tìm hiểu thêm ==>"}
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselWithContent;
