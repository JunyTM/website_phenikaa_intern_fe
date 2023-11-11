import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import { Company } from "../../model/company";
import { thunkFunctionCompany } from "../../redux/companySlice/company.action";
import { setCompany } from "../../redux/companySlice/companySlice";

const ListCompanyName: React.FC<any> = () => {
  const dispatch = useDispatch();
  const listCompany: Company[] = useSelector(
    (state: RootState) => state.company.value
  );
  const keySearch: string = useSelector(
    (state: RootState) => state.company.keySearch
  );
  useLayoutEffect(() => {
    thunkFunctionCompany.GetAllCompany(dispatch);
  }, []);

  const handleChooseCompany = (id: number) => {
    console.log("id", id);
    dispatch(setCompany(id));
  };
  return (
    <div className="w-[100%] h-[14rem] mt-16 rounded-md bg-slate-50 overflow-y-scroll">
      <table className="table-fixed ">
        <thead className="h-8 bg-slate-200 rounded-t-xl">
          <tr>
            <th className="w-[23rem]">Tên công ty</th>
            <th className="w-[15rem]">Email</th>
            <th className="w-[10rem]">Phone</th>
            <th className="w-[26rem]">Adress</th>
          </tr>
        </thead>
        <tbody>
          {listCompany?.map((company: Company, index: number) => {
            if (company.name.includes(keySearch)) {
              let idChose = company?.id !== undefined ? company.id : 0;
              return (
                <tr
                  key={index}
                  className="h-16 py-4 border-y-2 border-gray-200 hover:text-orange-400"
                >
                  <td>
                    <button
                      className="w-full text-left pr-3"
                      onClick={() => handleChooseCompany(idChose)}
                    >
                      {company.name}
                    </button>
                  </td>
                  <td>
                    <button
                      className="w-full text-left ml-8"
                      onClick={() => handleChooseCompany(idChose)}
                    >
                      {company.email}
                    </button>
                  </td>
                  <td>
                    <button
                      className="w-full ml-4 text-center"
                      onClick={() => handleChooseCompany(idChose)}
                    >
                      {company.phone}
                    </button>{" "}
                  </td>
                  <td>
                    <button
                      className="px-3 ml-2 text-left"
                      onClick={() => handleChooseCompany(idChose)}
                    >
                      {company?.adress}
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListCompanyName;
