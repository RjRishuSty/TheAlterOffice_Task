import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../Components/Logo/Logo";
import Styles from "./Login.module.css";
import LoginByGoogle from "../../Components/LoginByGoogle/LoginByGoogle";

const Login = () => {
  return (
    <Stack className={Styles.loginContainer}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            padding:'10px 15px'
          }}
        >
          <Logo useIn="login" />
          <Typography
            sx={{
              fontFamily: '"Urbanist", sans-serif',
              fontWeight: 500,
              fontSize: "11.64px",
              margin: "5px 0px 10px 0px",
            }}
          >
            Streamline your workflow and track progress effortlessly with our
            all-in-one task management app.
          </Typography>
          <LoginByGoogle/>
        </Grid>
        <Grid
          item
          md={8}
          sx={{
            border: "1px solid black",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        ></Grid>
      </Grid>
    </Stack>
  );
};

export default Login;
