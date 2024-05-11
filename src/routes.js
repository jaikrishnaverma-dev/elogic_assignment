import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Users from "./components/panel/pages/Users";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
export const authroutes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    }
  ];

export const panelChildren = [
    {
      path: "users",
      element: <Users />,
      icon: <ManageAccountsIcon />,
      inNav: true,
    },
    
  ];
