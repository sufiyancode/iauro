import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
