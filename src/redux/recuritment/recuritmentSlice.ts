import { Recruitment } from "./../../model/recruitment";
import { createSlice } from "@reduxjs/toolkit";

export interface ListRecruitment {
  list: Recruitment[];
  // isFetching: boolean;
}

const initialState: ListRecruitment = {
  list: [],
  
};

export const recruitmentSlice = createSlice({
  name: "recruitment",
  initialState,
  reducers: {
    FetchingRecruitment: (state, payload) => {
      state.list = payload.payload;
    }
  },
});

export const { FetchingRecruitment } = recruitmentSlice.actions;
export default recruitmentSlice.reducer;

