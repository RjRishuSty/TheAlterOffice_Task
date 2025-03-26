import React from "react";
import { AppBar, Box, Toolbar, useMediaQuery } from "@mui/material";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";
import TabsComp from "../TabsComp/TabsComp";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <AppBar position="static" sx={{ mt: isMobile?0:4, backgroundColor:isMobile?"#FAEEFC":'white' }}>
      <Toolbar sx={{ display: "flex",  }}>
        <Box sx={{ flexGrow: 1, }}>
          {/* TODO: Logo Here.......... */}
          <Logo useIn="header"/>
          {/* TODO: Tabs Here........ */}
          {!isMobile?<TabsComp />:""}
        </Box>
        {/* TODO:  User Profile......  */}
        <Profile />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
