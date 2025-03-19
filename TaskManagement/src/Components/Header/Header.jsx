import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";
import TabsComp from "../TabsComp/TabsComp";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <AppBar position="static" sx={{ mt: 4 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1 }}>
            {/* TODO: Logo Here.......... */}
            <Logo />
            {/* TODO: Tabs Here........ */}
            <TabsComp />
          </Box>
          {/* TODO:  User Profile......  */}
          {isAuthenticated && <Profile />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
