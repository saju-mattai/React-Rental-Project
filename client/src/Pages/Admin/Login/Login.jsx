import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../../../Redux/Actions/Admin_Action/LoginAction";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { createTheme, ThemeProvider } from '@mui/material/styles';

const schema = yup.object().shape({
  email: yup
    .string("email should be a string")
    .email("please provide a valid email")
    .required("email address is required"),

  password: yup
    .string("password should be a string")
    .min(5, "password should have a minimum length of 5")
    .max(12, "password should have a maximum length of 12")
    .required("password is required"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const dispacth = useDispatch();
  const adminlogin = useSelector((state) => state.AdminLoginReducer);
  const { adminLoginErr, adminLoginData, loading } = adminlogin;

  const submitHandler = async (data) => {
    const Email = data.email;
    const Password = data.password;
    dispacth(LoginAction(Email, Password));
    navigate("/adminhome");
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        onSubmit={handleSubmit(submitHandler)}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Login
        </Typography>
        {adminLoginErr ? (
          <p style={{ color: "red" }}>{adminLoginErr.msg}</p>
        ) : (
          ""
        )}
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid> */}
            {/* <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid> */}
            <Grid item xs={12}>
              <TextField
              className="w-100 mt-2"
                id="email"
                name="email"
                type="email"
                label="Email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                {...register("email")}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              className="w-100 mt-2"
                required
                id="password"
                name="password"
                type="password"
                label="Password"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                {...register("password")}
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 0 }}>
              {/* <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            /> */}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            LogIn
          </Button>
          {/* <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid> */}
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
  );
}

export default Login;
