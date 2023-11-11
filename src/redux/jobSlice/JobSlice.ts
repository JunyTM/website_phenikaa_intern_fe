import { createSlice } from "@reduxjs/toolkit";
import { Job } from "../../model/job";

export interface listJobs {
  value: Job[] | null;
  detailJob: Job | null;
  isCreated: boolean;
}

const initialState: listJobs = {
  value: [],
  detailJob: null,
  isCreated: false,
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobPending: (state, action) => {
      state.isCreated = action.payload;
    },

    setJobDetail: (state, action) => {
      state.detailJob = action.payload;
    },

    setJobFetching: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setJobPending, setJobDetail, setJobFetching } = jobSlice.actions;

export default jobSlice.reducer;
