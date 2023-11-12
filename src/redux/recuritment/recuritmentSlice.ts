import { Recruitment } from "./../../model/recruitment";
import { createSlice } from "@reduxjs/toolkit";

export interface ListRecruitment {
  list: Recruitment[];
  recruitmentDetail: Recruitment;
}

const initialState: ListRecruitment = {
  list: [],
  recruitmentDetail: {} as Recruitment,
};

export const recruitmentSlice = createSlice({
  name: "recruitment",
  initialState,
  reducers: {
    FetchingRecruitment: (state, payload) => {
      state.list = payload.payload;
    },

    SetJobReport: (state, payload) => {
      state.recruitmentDetail = payload.payload;
    },
  },
});

export const { FetchingRecruitment, SetJobReport } = recruitmentSlice.actions;
export default recruitmentSlice.reducer;
