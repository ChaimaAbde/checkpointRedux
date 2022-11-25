import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice/Todoslice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
