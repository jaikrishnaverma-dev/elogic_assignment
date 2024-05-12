import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    {
      id: 1034,
      userName: "jai1034",
      firstName: "jai",
      lastName: "verma",
      email: "jai@gmail.com",
      password: "123456",
      role: "admin",
      group: ["Group1", "Group2"],
    },
    {
      id: 2045,
      userName: "riya2045",
      firstName: "riya",
      lastName: "sharma",
      email: "riya@example.com",
      password: "qwerty",
      role: "user",
      group: ["Group1"],
    },
    {
      id: 3056,
      userName: "rahul3056",
      firstName: "rahul",
      lastName: "singh",
      email: "rahul@example.com",
      password: "password123",
      role: "user",
      group: ["Group2", "Group3"],
    },
    {
      id: 4067,
      userName: "neha4067",
      firstName: "neha",
      lastName: "gupta",
      email: "neha@example.com",
      password: "letmein",
      role: "admin",
      group: ["Group1", "Group3"],
    },
    {
      id: 5078,
      userName: "amit5078",
      firstName: "amit",
      lastName: "kumar",
      email: "amit@example.com",
      password: "securepass",
      role: "user",
      group: ["Group2"],
    },
    {
      id: 6089,
      userName: "priya6089",
      firstName: "priya",
      lastName: "desai",
      email: "priya@example.com",
      password: "mypassword",
      role: "user",
      group: ["Group1", "Group2", "Group3"],
    },
    {
      id: 7090,
      userName: "vijay7090",
      firstName: "vijay",
      lastName: "patel",
      email: "vijay@example.com",
      password: "password123",
      role: "admin",
      group: ["Group3"],
    },
    {
      id: 8001,
      userName: "sonal8001",
      firstName: "sonal",
      lastName: "shah",
      email: "sonal@example.com",
      password: "qwerty123",
      role: "user",
      group: ["Group2", "Group3"],
    },
    {
      id: 9012,
      userName: "nisha9012",
      firstName: "nisha",
      lastName: "kulkarni",
      email: "nisha@example.com",
      password: "letmein123",
      role: "user",
      group: ["Group1"],
    },
    {
      id: 1023,
      userName: "arjun1023",
      firstName: "arjun",
      lastName: "kapoor",
      email: "arjun@example.com",
      password: "securepassword",
      role: "admin",
      group: ["Group1", "Group2", "Group3"],
    },
  ],
  groups: [
    { id: 1, name: "Group1" },
    { id: 2, name: "Group2" },
    { id: 3, name: "Group3" },
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
      const id = state.users.length
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
    createGroup(state, action) {
      const { name, users } = action.payload;
      const id = state.groups.length
        ? state.groups[state.groups.length - 1].id + 1
        : 0;
      state.groups.push({ id, name });
      state.users = state.users.map((el) => {
        if (
          users.find((user) => user.id == el.id) &&
          !el.group.find((grp) => grp.name == name)
        ) {
          return {
            ...el,
            group: [...el.group, name],
          };
        }
        return el;
      });
    },
    deleteUser(state, action) {
      const { ids } = action.payload;
      state.users = state.users.filter(
        (user) => !ids.find((el) => el == user.id)
      );
    },
  },
});
export const { registration, setSession, createGroup,deleteUser } = mainSlice.actions;
export default mainSlice.reducer;
