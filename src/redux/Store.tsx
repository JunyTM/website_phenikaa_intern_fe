import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice/authenSclice";
import companyReducer from "./companySlice/companySlice";
import profileSlice from "./profileSlice/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    company: companyReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
