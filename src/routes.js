import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import EditDetails from "./components/common/UserForm";
import Profile from "./components/panel/pages/Profile";
import Users from "./components/panel/pages/users_list/Users";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export const authroutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
];

export const panelChildren = [
  {
    path: "users",
    element: <Users />,
    icon: <ManageAccountsIcon />,
    inNav: true,
  },
  {
    path: "update",
    element: <EditDetails />,
    icon: <ManageAccountsIcon />,
    inNav: false,
  },
  {
    path: "profile",
    element: <Profile />,
    icon: <AccountBoxIcon />,
    inNav: true,
  },
];
