import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import { Company } from "../../model/company";
import { thunkFunctionCompany } from "../../redux/companySlice/company.action";

const CompanyBox: React.FC<any> = () => {
  const dispatch = useDispatch();
  const company: Company = useSelector(
    (state: RootState) => state.company.value[0]
  );
  if (company !== undefined) {
    let temp: string = company?.id !== undefined ? company.id.toString() : "";
    localStorage.setItem("CompanyId", temp);
  }
  const user_id = localStorage.getItem("UserId");

  useLayoutEffect(() => {
    thunkFunctionCompany.GetByCompanyID(user_id, dispatch);
  }, []);

  // console.log("company", company);
  return (
    <div className="w-[65%] h-[24.5rem] top-[7.3rem] left-[31rem] bg-slate-50 shadow-2xl rounded-xl absolute">
      <div className="w-full h-full p-7 shadow-inner rounded-xl">
        <h1 className="text-3xl font-semibold underline underline-offset-4 opacity-90">
          THÔNG TIN DOANH NGIỆP
        </h1>

        <div className="flex flex-row">
          <div className="mt-14 ml-10">
            <p className="text-2xl font-extrabold opacity-90">
              <span className="font-extrabold">Dơn vị:</span> {company?.name}
            </p>
            <p className="text-base mt-5">
              <span className="font-bold">Liên hệ: </span> {company?.email} -{" "}
              {company?.phone}
            </p>

            <p className="text-base h-[9rem] text-ellipsis overflow-hidden font-bold mt-5">
              Giới thiệu công ty:{" "}
              <span className="text-base font-normal">
                {company?.description}
              </span>
            </p>
          </div>
          <img
            className="w-[30%]"
            src="src\assets\logo\logo_banner.png"
            alt="img-robot"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyBox;
