import { createSlice } from "@reduxjs/toolkit";
import { EvaluationReport } from "../../model/evaluate";

export interface ListEvaluation {
  list: EvaluationReport[];
  evaluationDetail: EvaluationReport;
}

const initialState: ListEvaluation = {
  list: [],
  evaluationDetail: {} as EvaluationReport,
};

export const evaluationSlice = createSlice({
  name: "evaluation",
  initialState,
  reducers: {
    FetchingEvaluation: (state, payload) => {
      state.list = payload.payload;
    },

    SetEvaluationReport: (state, payload) => {
      state.evaluationDetail = payload.payload;
    },
  },
});

export const { FetchingEvaluation, SetEvaluationReport } =
  evaluationSlice.actions;

export default evaluationSlice.reducer;