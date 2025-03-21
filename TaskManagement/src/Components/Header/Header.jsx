import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";
import TabsComp from "../TabsComp/TabsComp";

const Header = () => {
  return (
    <AppBar position="static" sx={{ mt: 4 }}>
      <Toolbar sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }}>
          {/* TODO: Logo Here.......... */}
          <Logo />
          {/* TODO: Tabs Here........ */}
          <TabsComp />
        </Box>
        {/* TODO:  User Profile......  */}
        <Profile />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
