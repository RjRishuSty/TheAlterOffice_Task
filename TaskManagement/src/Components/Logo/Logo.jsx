import React from "react";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { Box, Typography } from "@mui/material";

const Logo = ({ useIn }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: useIn === "login" ? "center" : "start",
        alignItems: "center",
      }}
    >
      <AssignmentOutlinedIcon
        sx={{
          display: { xs: "none", sm: "flex" },
          mr: 1,
          color: useIn === "login" ? "#7B1984" : "inherit",
        }}
        fontSize="large"
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: useIn === "login" ? 700 : 600,
          color: useIn === "login" ? "#7B1984" : "inherit",
          fontFamily:
            useIn === "login"
              ? '"Urbanist", sans-serif'
              : '"Mulish", sans-serif',
          fontSize: useIn === "login" ? "26.19px" : "24px",
        }}
      >
        TaskBuddy
      </Typography>
    </Box>
  );
};

export default Logo;
