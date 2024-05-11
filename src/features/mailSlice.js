import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  groups:[],
  loading: true,
  message: "",
};

const mainSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  },

});
export const {} = mainSlice.actions;
export default mainSlice.reducer;
