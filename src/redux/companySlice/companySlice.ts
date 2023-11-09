import { createSlice } from "@reduxjs/toolkit";
import { Company } from "../../model/company";

export interface listCompanies {
  value: Company[];
}

const initialState: listCompanies = {
  value: [],
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    insert: (state, action) => {
      state.value.push(action.payload);
    },
    update: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      state.value[index] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { insert, update } = companySlice.actions;

export default companySlice.reducer;
