import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filters: () => ({}),
  },
});

export default store;
