import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import CubeAnimation from "./CubeAnimation";
import { PasswordInput } from "./PasswordInput";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../features/mainSlice";

const defaultTheme = createTheme();

export default function Signup() {
  const { users } = useSelector((data) => data.mainSlice);
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { firstName, lastName, email, password } = inputs;
    event.preventDefault();
    const nonEmpty = Object.values(inputs).filter((el) => el == "").length == 0;
    if (nonEmpty) {
      if (!emailRegex.test(email)) {
        enqueueSnackbar("Please enter valid email.", {
          variant: "error",
        });
      } else if (users.find((el) => el.email == email)) {
        enqueueSnackbar("Email already exist.", {
          variant: "error",
        });
      } else if (password.split("").length < 6) {
        enqueueSnackbar("Password length cant be less than 6 character", {
          variant: "error",
        });
      } else {
        dispatch(registration({ ...inputs }));
        enqueueSnackbar("User Registerd Successfully.", {
          variant: "success",
        });
        setInputs({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      }
    } else {
      enqueueSnackbar("All fields are required.", {
        variant: "error",
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <CubeAnimation />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                mt: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "400px",
              }}
            >
              <Avatar
                sx={{ m: 1, color: "secondary.main", background: "none" }}
              >
                <AccountCircleIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 2 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      value={inputs.firstName}
                      onChange={inputChangeHandler}
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      value={inputs.lastName}
                      onChange={inputChangeHandler}
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      value={inputs.email}
                      onChange={inputChangeHandler}
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PasswordInput
                      required
                      fullWidth
                      name="password"
                      value={inputs.password}
                      onChange={inputChangeHandler}
                      label="Password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      sx={{ cursor: "pointer" }}
                      variant="body2"
                      onClick={() => navigate("/")}
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
