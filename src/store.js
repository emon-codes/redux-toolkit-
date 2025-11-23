import { configureStore } from "@reduxjs/toolkit";
import msgReducer from "./messageSlice";

export const store = configureStore({
  reducer: { msg: msgReducer }
});
