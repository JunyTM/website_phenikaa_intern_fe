import { createSlice } from "@reduxjs/toolkit";
import { Job } from "../../model/job";

export interface listJobs {
  value: Job[] | null;
//   CompanyId: number;
  isCreated: boolean;
}

const initialState: listJobs = {
  value: [],
//   CompanyId: 0,
  isCreated: false,
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobPending: (state, action) => {
      state.isCreated = action.payload;
    },

    // setJobCompany: (state, action) => {
    //   state.CompanyId = action.payload;
    // },

    setJobFetching: (state, action) => {
      state = {
        ...state,
        value: action.payload,
        isCreated: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setJobPending, setJobFetching } = jobSlice.actions;

export default jobSlice.reducer;
