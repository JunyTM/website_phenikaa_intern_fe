import { createSlice } from "@reduxjs/toolkit";
import { Company } from "../../model/company";

export interface listCompanies {
  value: Company[];
  isCreated: boolean;
  keySearch: string;
  companyId: number;
}

const initialState: listCompanies = {
  value: [],
  isCreated: false,
  keySearch: "",
  companyId: 0,
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    insert: (state, action) => {
      state.value = [...action.payload];
    },
    update: (state, action) => {
      state.value = [...state.value, action.payload];
    },

    setIsCreate: (state, action) => {
      state.isCreated = action.payload;
    },

    updateKeySearch(state, action) {
      state.keySearch = action.payload;
    },

    setCompany(state, action) {
      state.companyId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { insert, update, updateKeySearch, setCompany, setIsCreate } =
  companySlice.actions;

export default companySlice.reducer;
