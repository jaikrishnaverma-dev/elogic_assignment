import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    { id: 1034, userName: "jai1034", firstName: "jai", lastName: "verma", email: "jai@gmail.com", password: "123456", role: "admin", group: ["Sfsdf", "gdfgd"] },
    { id: 2045, userName: "riya2045", firstName: "riya", lastName: "sharma", email: "riya@example.com", password: "qwerty", role: "user", group: ["Sfsdf"] },
    { id: 3056, userName: "rahul3056", firstName: "rahul", lastName: "singh", email: "rahul@example.com", password: "password123", role: "user", group: ["gdfgd", "XYZabc"] },
    { id: 4067, userName: "neha4067", firstName: "neha", lastName: "gupta", email: "neha@example.com", password: "letmein", role: "admin", group: ["Sfsdf", "XYZabc"] },
    { id: 5078, userName: "amit5078", firstName: "amit", lastName: "kumar", email: "amit@example.com", password: "securepass", role: "user", group: ["gdfgd"] },
    { id: 6089, userName: "priya6089", firstName: "priya", lastName: "desai", email: "priya@example.com", password: "mypassword", role: "user", group: ["Sfsdf", "gdfgd", "XYZabc"] },
    { id: 7090, userName: "vijay7090", firstName: "vijay", lastName: "patel", email: "vijay@example.com", password: "password123", role: "admin", group: ["XYZabc"] },
    { id: 8001, userName: "sonal8001", firstName: "sonal", lastName: "shah", email: "sonal@example.com", password: "qwerty123", role: "user", group: ["gdfgd", "XYZabc"] },
    { id: 9012, userName: "nisha9012", firstName: "nisha", lastName: "kulkarni", email: "nisha@example.com", password: "letmein123", role: "user", group: ["Sfsdf"] },
    { id: 1023, userName: "arjun1023", firstName: "arjun", lastName: "kapoor", email: "arjun@example.com", password: "securepassword", role: "admin", group: ["Sfsdf", "gdfgd", "XYZabc"] }
    ],
    groups: [
    { id: 1, name: "Sfsdf" },
    { id: 2, name: "gdfgd" },
    { id: 3, name: "XYZabc" }
    ],
  session: null,
  loading: true,
  message: "",
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    registration(state, action) {
      const id = state.length
        ? state.users[state.users.length - 1].id + 1
        : 1035;
      state.users.push({
        ...action.payload,
        id,
        role: "user",
        group: [],
        userName: action.payload.firstName + id,
      });
    },
    setSession(state, action) {
      state.session = action.payload;
    },
  },
});
export const { registration, setSession } = mainSlice.actions;
export default mainSlice.reducer;
