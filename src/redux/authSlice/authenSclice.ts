import { createSlice } from "@reduxjs/toolkit";
import { UserReponse } from "../../model/user";

export interface authenticate {
  user: UserReponse | null;
  isFetching: boolean;
}

const initialState: authenticate = {
  user: null,
  isFetching: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isFetching = true;
      return state;
    },

    refeshTokenPending: (state) => {
      state.isFetching = true;
      return state;
    },

    loginFail: (state) => {
      state = {
        user: null,
        isFetching: false,
      };
      return state;
    },

    refeshTokenFail: (state) => {
      state = {
        user: null,
        isFetching: false,
      };
      return state;
    },

    loginSuccess: (state, action) => {
      state = {
        user: action.payload,
        isFetching: false,
      };
      return state;
    },

    refeshTokenSuccess: (state, action) => {
      state = {
        user: action.payload,
        isFetching: false,
      };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginPending,
  refeshTokenPending,
  loginFail,
  refeshTokenFail,
  loginSuccess,
  refeshTokenSuccess,
} = authSlice.actions;

export default authSlice.reducer;
