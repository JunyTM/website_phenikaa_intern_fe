import { profile } from "console";
import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "../../model/Profile";

export interface ListProfile {
  list: Profile[];
  role: string;
  isFetching: boolean;
}

const initialState: ListProfile = {
  list: [],
  role: "",
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
        role: "",
        isFetching: false,
      };
      return state;
    },

    ProfileSuccess: (state, action) => {
      state = {
        list: action.payload.profile,
        role: action.payload.role,
        isFetching: false,
      };
      return state;
    },
  },
});

export const { ProfilePending, ProfileFail, ProfileSuccess } =
  profileSlice.actions;
export default profileSlice.reducer;
