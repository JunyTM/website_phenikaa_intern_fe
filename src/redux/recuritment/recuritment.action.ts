import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import { Recruitment } from "../../model/recruitment";
import { FetchingRecruitment } from "./recuritmentSlice";

const GetAll = async (dispatch: any) => {
  const api = APIS_URL.ADVANCE.filter();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `id > 0`,
      modelType: "recruitments",
      ignoreAssociation: false,
    },
  });

  const data = response.data.data as Recruitment[];
  if (!error && response.status === 200) {
    dispatch(FetchingRecruitment(data));
    console.log("recruitments success");
  } else {
    console.log("recruitments fail");
  }
};

const Create = async (data: any, dispatch: any) => {
  const api = APIS_URL.BASIC.upsert();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      modelType: "recruitments",
      data: data,
    },
  });
  if (!error && response.status === 200) {
    console.log("recruitment success");
  } else {
    console.log("recruitment fail");
  }
};

const Update = async (data: any, dispatch: any) => {
  console.log("data recruitment", data);
  const api = APIS_URL.BASIC.upsert();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      modelType: "recruitments",
      data: data,
    },
  });
  if (!error && response.status === 200) {
    console.log("recruitment success");
  } else {
    console.log("recruitment fail");
  }
};

const Delete = async (id: number, dispatch: any) => {
  const api = APIS_URL.BASIC.delete();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      id: [id],
      modelType: "recruitments",
    },
  });
  if (!error && response.status === 200) {
    console.log("recruitment success");
  } else {
    console.log("recruitment fail");
  }
};

export const thunkFunctionRecruitment = {
  GetAll,
  Create,
  Update,
  Delete,
};
