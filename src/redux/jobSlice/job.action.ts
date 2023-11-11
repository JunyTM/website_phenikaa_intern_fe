import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import { setJobPending, setJobFetching } from "./JobSlice";
import { Job } from "../../model/job";

const GetAllJob = async (dispatch: any) => {
  dispatch(setJobPending(true));
  const api = APIS_URL.ADVANCE.filter();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `id > 0`,
      modelType: "jobs",
      ignoreAssociation: false,
    },
  });
  if (!error && response.status === 200) {
    dispatch(setJobFetching(response.data.data));
  } else {
    console.log("Job fail");
  }
};

const InsertJob = async (data: Job, dispatch: any) => {
  dispatch(setJobPending(true));
  const api = APIS_URL.BASIC.upsert();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      modelType: "jobs",
      data: data,
    },
  });
  if (!error && response.status === 200) {
    dispatch(setJobPending(false));
  } else {
    console.log("Job fail");
  }
};

export const thunkFunctionJob = {
  GetAllJob,
  InsertJob,
};
