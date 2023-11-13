import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import { FetchingEvaluation, SetEvaluationReport } from "./evaluateSlice";
import { EvaluationReport } from "../../model/evaluate";

const GetAll = async (dispatch: any) => {
  const api = APIS_URL.ADVANCE.filter();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `id > 0`,
      modelType: "internshipEvaluates",
      ignoreAssociation: false,
    },
  });

  const data = response.data.data as EvaluationReport[];
  if (!error && response.status === 200) {
    dispatch(FetchingEvaluation(data));
    console.log("recruitments success");
  } else {
    console.log("recruitments fail");
  }
};

const Create = async (
  profileId: number,
  evaluate: EvaluationReport,
  dispatch: any
) => {
  const CompanyId = localStorage.getItem("CompanyId");

  // Tạo đánh giá mới
  const api = APIS_URL.BASIC.upsert();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      modelType: "internshipEvaluates",
      data: evaluate,
    },
  });
  let data = response.data.data as EvaluationReport;
  if (!error && response.status === 200) {
    dispatch(SetEvaluationReport(data));

    // Cập nhật báo cáo đánh giá
    const { response2, error2 }: any = await useCallApi({
      ...api,
      payload: {
        modelType: "internShips",
        data: {
          profile_id: profileId,
          company_id: CompanyId,
          internship_evaluate_id: data.id,
        },
      },
    });
    if (!error2 && response2?.status === 200) {
      console.log("internships create success");
    } else {
      console.log("internships create fail");
    }
    console.log("Evaluates success");
  } else {
    console.log("Evaluates fail");
  }
};

export const thunkFunctionEvaluation = {
  GetAll,
  Create,
};
