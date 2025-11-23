import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "msg",
  initialState: "",
  reducers: { setMsg: (_, a) => a.payload }
});

export const { setMsg } = slice.actions;
export default slice.reducer;
