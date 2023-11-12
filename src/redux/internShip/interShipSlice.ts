import { createSlice } from "@reduxjs/toolkit";
import { InternShip } from "../../model/inernShip";

export interface listIntern {
  list: InternShip[];
  detail: InternShip;
}

const initialState: listIntern = {
  list: [],
  detail: {} as InternShip,
};

export const internShipSlice = createSlice({
  name: "internShip",
  initialState,
  reducers: {
    FetchingInternShip: (state, payload) => {
      state.list = payload.payload;
    },

    SetInternShipReport: (state, payload) => {
      state.detail = payload.payload;
    },
  },
});

export const { FetchingInternShip, SetInternShipReport } =
  internShipSlice.actions;

export default internShipSlice.reducer;
