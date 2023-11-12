import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import { setJobPending, setJobFetching, setJobDetail } from "./JobSlice";
import { Job } from "../../model/job";

const GetAllJob = async (dispatch: any) => {
  dispatch(setJobPending(true));
  const api = APIS_URL.ADVANCE.filter();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `id > 0`,
      modelType: "internJobs",
      ignoreAssociation: false,
    },
  });
  if (!error && response.status === 200) {
    dispatch(setJobFetching(response.data.data));
  } else {
    console.log("Job fail");
  }
};

const GetJobByCompany = async (id: any, dispatch: any) => {
  // dispatch(setJobPending(true));
  const api = APIS_URL.ADVANCE.filter();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `id > 0 AND company_id = ${id}`,
      modelType: "internJobs",
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
      modelType: "internJobs",
      data: data,
    },
  });
  if (!error && response.status === 200) {
    dispatch(setJobPending(false));
  } else {
    console.log("Job fail");
  }
};

const RemoveJob = async (id: number, dispatch: any) => {
  // dispatch(setJobPending(true));
  const api = APIS_URL.BASIC.delete();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      modelType: "internJobs",
      id: [id],
    },
  });
  if (!error && response.status === 200) {
    dispatch(setJobPending(false));
  } else {
    console.log("Job fail");
  }
};

const GetJobDetail = async (id: any, dispatch: any) => {
  // dispatch(setJobPending(true));
  const api = APIS_URL.ADVANCE.filter();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `id = ${id}`,
      modelType: "internJobs",
      ignoreAssociation: false,
    },
  });
  if (!error && response.status === 200) {
    dispatch(setJobDetail(response.data.data[0]));
  } else {
    console.log("Job fail");
  }
};

const ApplyJob = async (id: any, dispatch: any) => {
  // dispatch(setJobPending(true));
  const api = APIS_URL.BASIC.upsert();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `id = ${id}`,
      modelType: "internJobs",
      ignoreAssociation: false,
    },
  });
  if (!error && response.status === 200) {
    dispatch(setJobDetail(response.data.data[0]));
  } else {
    console.log("Job fail");
  }
}

export const thunkFunctionJob = {
  GetAllJob,
  InsertJob,
  GetJobByCompany,
  GetJobDetail,
  RemoveJob,
  ApplyJob,
};
