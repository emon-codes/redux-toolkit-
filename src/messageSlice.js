import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "msg",
  initialState: "click button",
  reducers: { setMsg: (_, actions) => actions.payload }
});

export const { setMsg } = slice.actions;
export default slice.reducer;
