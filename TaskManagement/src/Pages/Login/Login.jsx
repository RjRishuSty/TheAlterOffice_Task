import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Logo from "../../Components/Logo/Logo";
import Styles from "./Login.module.css";
import LoginByGoogle from "../../Components/LoginByGoogle/LoginByGoogle";
import dashboardImg from "../../assets/dashboard.png";

const Login = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  return (
    <Stack className={Styles.loginContainer}>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "start",
            flexDirection: "column",
            padding: "10px 15px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              marginLeft: isTablet ? 0 : 10,
              display: "flex",
              justifyContent: isMobile ? "center" : "start",
              alignItems: isMobile ? "center" : "start",
              flexDirection: "column",
            }}
          >
            <Logo isMobile="isMobile" useIn="login" />
            <Typography
              gutterBottom
              sx={{
                fontFamily: '"Urbanist", sans-serif',
                fontWeight: 500,
                fontSize: "11.64px",
                margin: "5px 0px 10px 0px",
                textAlign: isMobile ? "center" : "start",
              }}
            >
              Streamline your workflow and track progress effortlessly{" "}
              {!isMobile ? <br /> : ""} with our all-in-one task management app.
            </Typography>
            <LoginByGoogle />
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            // border: "2px solid red",
            width: "100%",
            display: { xs: "none", sm: "none", md: "flex" },
            justifyContent: "end",
            alignItems: "end",
            height: "auto",
          }}
        >
          <img
            src={dashboardImg}
            alt="Dashboard"
            style={{ width: "130%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Login;
