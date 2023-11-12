import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import { insert, setIsCreate, setCompany } from "./companySlice";

const GetAllCompany = async (dispatch: any) => {
  const api = APIS_URL.ADVANCE.filter();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `id > 0`,
      modelType: "companies",
      ignoreAssociation: false,
    },
  });
  if (!error && response.status === 200) {
    dispatch(insert(response.data.data));
  } else {
    console.log("Company fail");
  }
};

const GetByCompanyID = async (id: any, dispatch: any) => {
  const api = APIS_URL.ADVANCE.filter();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `id > 0 AND user_id = ${id}`,
      modelType: "companies",
      ignoreAssociation: false,
    },
  });
  localStorage.setItem("CompanyId", response.data.data[0].id);
  dispatch(setCompany(response.data.data[0].id));
  if (!error && response.status === 200) {
    dispatch(insert(response.data.data));
  } else {
    console.log("Company fail");
  }
};

const InsertCompany = async (data: any, dispatch: any) => {
  const api = APIS_URL.BASIC.upsert();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      modelType: "companies",
      data: data,
    },
  });
  if (!error && response.status === 200) {
    dispatch(setIsCreate(false));
  } else {
    console.log("Company fail");
  }
};

export const thunkFunctionCompany = {
  GetAllCompany,
  GetByCompanyID,
  InsertCompany,
};
