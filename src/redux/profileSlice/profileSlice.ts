import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "../../model/Profile";

export interface ListProfile {
  list: Profile[];
  isFetching: boolean;
}

const initialState: ListProfile = {
  list: [],
  isFetching: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    ProfilePending: (state) => {
      state.isFetching = true;
      return state;
    },

    ProfileFail: (state) => {
      state = {
        list: [],
        isFetching: false,
      };
      return state;
    },

    ProfileSuccess: (state, payload) => {
      state = {
        list: [...payload.payload],
        isFetching: false,
      };
      return state;
    },
  },
});

export const { ProfilePending, ProfileFail, ProfileSuccess } =
  profileSlice.actions;
export default profileSlice.reducer;
