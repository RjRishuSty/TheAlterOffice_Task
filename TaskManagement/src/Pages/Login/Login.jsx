import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../Components/Logo/Logo";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "##FFF9F9",
      }}
    >
      <Container
        sx={{
          border: "2px solid red",
        }}
      >
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
            }}
          >
            <Logo useIn="login"/>
            <Typography variant="caption">
              Streamline your workflow and track progress effortlessly with our
              all-in-one task management app.
            </Typography>
            <Button variant="contained" onClick={() => loginWithRedirect()}>
              Login with Google
            </Button>
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
      </Container>
    </Stack>
  );
};

export default Login;
