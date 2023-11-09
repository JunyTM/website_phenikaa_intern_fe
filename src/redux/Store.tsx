import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/authenSclice";
import companyReducer from "./companySlice/companySlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    company: companyReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
