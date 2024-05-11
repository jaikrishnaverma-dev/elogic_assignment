import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    {
      firstName: "jai",
      lastName: "verma",
      email: "jai@gmail.com",
      password: "123456",
    },
  ],
  groups: [],
  session: null,
  loading: true,
  message: "",
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    registration(state, action) {
      state.users.push(action.payload);
    },
    setSession(state, action) {
      state.session = action.payload;
    },
  },

});
export const { registration, setSession } = mainSlice.actions;
export default mainSlice.reducer;
